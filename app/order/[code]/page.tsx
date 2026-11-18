"use client";
import { use, useCallback, useEffect, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";

type OrderInfo = {
  order_code: string;
  total: string;
  status: "awaiting_receipt"|"pending_review"|"approved"|"rejected";
  created_at: string;
  receipt_uploaded_at: string|null;
  decided_at: string|null;
  rejection_reason: string|null;
};
type OrderEvent = {event:string;created_at:string};
type ShopPayment={bank:string;cardNumber:string;iban:string;recipientName:string};
const translations:Record<string,string>={
  awaiting_receipt:"در انتظار واریز و ثبت رسید",pending_review:"رسید دریافت شد؛ در انتظار بررسی مدیر",approved:"پرداخت تأیید شد؛ سفارش تأیید شده",rejected:"واریز تأیید نشد؛ امکان ارسال مجدد رسید وجود دارد",
  created:"ثبت سفارش",receipt_uploaded:"بارگذاری رسید",approved_event:"تأیید واریز",rejected_event:"رد واریز",
};
function formatDate(iso:string|null) {
  return iso ? new Intl.DateTimeFormat("fa-IR",{timeZone:"Asia/Tehran",dateStyle:"medium",timeStyle:"short"}).format(new Date(iso)) : "—";
}
export default function OrderTrackingPage({params}:{params:Promise<{code:string}>}) {
  const {code}=use(params);
  const [order,setOrder]=useState<OrderInfo|null>(null);
  const [history,setHistory]=useState<OrderEvent[]>([]);
  const [payment,setPayment]=useState<ShopPayment|null>(null);
  const [paymentReady,setPaymentReady]=useState(false);
  const [error,setError]=useState("");
  const [file,setFile]=useState<File|null>(null);
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState("");
  const refresh=useCallback(async()=>{
    try {
      const res=await fetch(`/api/shop/order/${encodeURIComponent(code)}`,{cache:"no-store"});
      const data=await res.json();
      if (!res.ok) throw new Error(data.error||"خطا در دریافت وضعیت");
      setOrder(data.order);setHistory(data.timeline||[]);setError("");
    } catch(e) {setError((e as Error).message);}
  },[code]);
  useEffect(()=>{void refresh();void fetch("/api/shop/catalog",{cache:"no-store"}).then(x=>x.json()).then(x=>{
    if(x.payment) setPayment(x.payment);setPaymentReady(x.paymentReady===true);
  }).catch(()=>{});},[refresh]);
  async function upload(event:FormEvent<HTMLFormElement>) {
    event.preventDefault(); if(!file) return;
    if(file.size>2*1024*1024){setMessage("حجم فایل نباید بیشتر از ۲ مگابایت باشد");return;}
    setBusy(true);setMessage("");
    try {
      const data=new FormData();data.append("receipt",file);
      const res=await fetch(`/api/shop/order/${encodeURIComponent(code)}/receipt`,{method:"POST",body:data});
      const body=await res.json();if(!res.ok)throw new Error(body.error||"بارگذاری ناموفق بود");
      setMessage("رسید ثبت شد و تا بررسی مدیر در انتظار تأیید باقی می‌ماند.");setFile(null);await refresh();
    } catch(e){setMessage((e as Error).message);}finally{setBusy(false);}
  }
  return (
    <main dir="rtl" className="mx-auto min-h-[70vh] max-w-3xl px-4 py-16 text-white">
      <section className="rounded-3xl border border-white/15 bg-slate-950/90 p-5 sm:p-8 space-y-6">
        <h1 className="text-2xl font-bold">پیگیری سفارش و پرداخت کارت‌به‌کارت</h1>
        <p className="text-sm text-white/70">شماره پیگیری محرمانه شما: <span className="font-bold text-amber-300 select-all" dir="ltr">{code}</span></p>
        <button type="button" className="rounded-lg border border-white/30 px-3 py-2 text-sm" onClick={()=>void navigator.clipboard.writeText(code)}>کپی کد پیگیری</button>
        {error ? <p role="alert" className="text-rose-300">{error}</p> : null}
        {order ? <>
          <div className="rounded-xl bg-white/10 p-4 space-y-2">
            <p className="font-bold text-amber-300">وضعیت: {translations[order.status]}</p>
            <p>مبلغ سفارش: <strong>{Number(order.total).toLocaleString("fa-IR")} تومان</strong></p>
            <p>تاریخ ثبت سفارش: {formatDate(order.created_at)}</p>
            <p>تاریخ بارگذاری رسید: {formatDate(order.receipt_uploaded_at)}</p>
            <p>تاریخ تأیید یا رد: {formatDate(order.decided_at)}</p>
            {order.status==="rejected" && order.rejection_reason ? <p className="text-rose-300">علت رد: {order.rejection_reason}</p> : null}
          </div>
          {(order.status==="awaiting_receipt" || order.status==="rejected") && <>
            <h2 className="text-xl font-bold">اطلاعات واریز</h2>
            {payment && paymentReady ? <div className="space-y-3 rounded-xl border border-white/20 p-4">
              <div>بانک: <strong>{payment.bank}</strong></div>
              <div>به نام: <strong>{payment.recipientName}</strong></div>
              <div>شماره کارت: <strong className="select-all" dir="ltr">{payment.cardNumber.replace(/(\d{4})/g,"$1 ").trim()}</strong></div>
              <div>شماره شبا: <strong className="select-all" dir="ltr">{payment.iban}</strong></div>
              <p className="text-amber-200 text-sm">مبلغ را دقیقاً به حساب معرفی‌شده واریز کنید؛ سپس تصویر رسید را ثبت کنید. ثبت رسید به معنی تأیید پرداخت نیست.</p>
            </div> : <p className="text-amber-300">اطلاعات صاحب حساب هنوز توسط مدیر تکمیل نشده است. فعلاً وجهی واریز نکنید.</p>}
            {paymentReady && <form onSubmit={upload} className="space-y-3">
              <label className="block">تصویر رسید پرداخت (JPG / PNG / WebP، حداکثر ۲ مگابایت)</label>
              <input required type="file" accept="image/jpeg,image/png,image/webp" className="w-full rounded-lg border border-white/20 p-2" onChange={e=>setFile(e.target.files?.[0]||null)}/>
              <button disabled={busy || !file} type="submit" className="rounded-xl bg-amber-500 px-5 py-3 font-bold text-slate-950 disabled:opacity-50">{busy?"در حال ذخیره...":"ارسال رسید برای بررسی"}</button>
            </form>}
          </>}
          {order.status==="pending_review" && <p className="text-amber-200">رسید شما ثبت شده است. پس از بررسی اصالت واریز توسط مدیر، نتیجه در همین صفحه نمایش داده می‌شود.</p>}
          {order.status==="approved" && <p className="text-emerald-300">واریز توسط مدیر تأیید شده است.</p>}
          {message && <p role="status" className="text-amber-300">{message}</p>}
          <div>
            <h3 className="text-lg font-bold mb-2">سوابق وضعیت سفارش</h3>
            <ol className="space-y-2 text-sm text-white/80">
              {history.map((item,i)=><li key={i}>{formatDate(item.created_at)} — {translations[item.event==="approved"?"approved_event":item.event==="rejected"?"rejected_event":item.event]||item.event}</li>)}
            </ol>
          </div>
        </> : !error ? <p>در حال خواندن اطلاعات سفارش...</p> : null}
        <div className="flex gap-3"><button type="button" className="rounded-lg bg-blue-600 px-4 py-2" onClick={()=>void refresh()}>به‌روزرسانی وضعیت</button><Link className="rounded-lg border border-white/20 px-4 py-2" href="/">بازگشت به فروشگاه</Link></div>
      </section>
    </main>
  );
}
