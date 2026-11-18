"use client";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type AdminOrder={order_code:string;customer_name:string;customer_phone:string;customer_address:string;customer_note:string;items:{id:string;name:string;qty:number;price:number;lineTotal:number}[];total:string;status:string;created_at:string;receipt_uploaded_at:string|null;decided_at:string|null;rejection_reason:string|null};
type ProductInfo={id:string;name:string;price:number};
const statusNames:Record<string,string>={awaiting_receipt:"منتظر رسید",pending_review:"در انتظار بررسی",approved:"تأیید شده",rejected:"رد شده"};
function date(iso:string|null){return iso?new Intl.DateTimeFormat("fa-IR",{timeZone:"Asia/Tehran",dateStyle:"medium",timeStyle:"short"}).format(new Date(iso)):"—";}
export default function ShopAdmin(){
  const [password,setPassword]=useState("");const [authenticated,setAuthenticated]=useState(false);
  const [orders,setOrders]=useState<AdminOrder[]>([]);const [products,setProducts]=useState<ProductInfo[]>([]);
  const [availability,setAvailability]=useState<Record<string,boolean>>({});
  const [error,setError]=useState("");const [busy,setBusy]=useState("");
  async function load(){
    const res=await fetch("/api/shop/admin",{cache:"no-store"});
    if(res.status===401){setAuthenticated(false);return;}
    const json=await res.json();if(!res.ok){setError(json.error||"خطای بارگذاری");return;}
    setAuthenticated(true);setOrders(json.orders||[]);setProducts(json.products||[]);setAvailability(json.availability||{});setError("");
  }
  useEffect(()=>{void load();},[]);
  async function login(e:FormEvent){e.preventDefault();setBusy("login");try{
    const r=await fetch("/api/shop/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password})});
    const json=await r.json();if(!r.ok)throw new Error(json.error);setPassword("");await load();
  }catch(e){setError((e as Error).message);}finally{setBusy("");}}
  async function change(data:unknown,key:string){setBusy(key);setError("");try{
    const r=await fetch("/api/shop/admin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
    const json=await r.json();if(!r.ok)throw new Error(json.error);await load();
  }catch(e){setError((e as Error).message);}finally{setBusy("");}}
  async function logout(){await fetch("/api/shop/admin/logout",{method:"POST"});setAuthenticated(false);setOrders([]);}
  return <main dir="rtl" className="mx-auto max-w-6xl px-4 py-14 text-white">
    <div className="rounded-2xl border border-white/20 bg-slate-950/90 p-5 sm:p-8">
      <h1 className="text-2xl font-bold mb-5">مدیریت موجودی و بررسی رسید فروشگاه</h1>
      {error&&<p role="alert" className="my-3 rounded-lg bg-rose-900/60 p-3">{error}</p>}
      {!authenticated?<form onSubmit={login} className="space-y-3 max-w-sm"><label className="block">رمز ورود مدیریت</label><input type="password" required autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full rounded-lg bg-slate-800 p-3"/><button disabled={!!busy} className="rounded-lg bg-blue-600 px-5 py-3">ورود</button><p className="text-xs text-white/60">رمز باید در تنظیمات امن Vercel تعریف شود.</p></form>:<>
        <button onClick={()=>void logout()} className="mb-6 rounded-lg border border-white/30 px-4 py-2">خروج از مدیریت</button>
        <h2 className="text-xl font-bold mb-3">موجودی کالاها</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {products.map(p=><div key={p.id} className="flex items-center justify-between gap-3 rounded-xl border border-white/20 bg-white/5 p-3">
            <div><div>{p.name}</div><div className="text-sm text-white/60">{p.price.toLocaleString("fa-IR")} تومان</div></div>
            <button type="button" disabled={!!busy} onClick={()=>void change({action:"availability",productId:p.id,available:!availability[p.id]},p.id)} className={`shrink-0 rounded-lg px-3 py-2 font-bold ${availability[p.id]?"bg-emerald-700":"bg-rose-700"}`}>{busy===p.id?"در حال ذخیره...":availability[p.id]?"موجود":"ناموجود"}</button>
          </div>)}
        </div>
        <h2 className="text-xl font-bold mt-9 mb-3">سفارش‌های اخیر (حداکثر ۱۰۰ مورد)</h2>
        <div className="space-y-4">{orders.map(o=><article key={o.order_code} className="space-y-3 rounded-xl border border-white/15 bg-white/5 p-4">
          <header className="flex flex-wrap items-center gap-3"><strong dir="ltr">{o.order_code}</strong><span className="rounded bg-slate-700 px-2 py-1">{statusNames[o.status]||o.status}</span><span className="text-sm text-white/70">ثبت: {date(o.created_at)}</span></header>
          <p>مشتری: {o.customer_name} | تلفن: <span dir="ltr">{o.customer_phone}</span></p>
          <p className="text-sm">آدرس: {o.customer_address} {o.customer_note?` | توضیحات: ${o.customer_note}`:""}</p>
          <ul className="list-disc pr-5 text-sm">{o.items.map((it,i)=><li key={i}>{it.name} × {it.qty} — {it.lineTotal.toLocaleString("fa-IR")} تومان</li>)}</ul>
          <p className="font-bold">جمع: {Number(o.total).toLocaleString("fa-IR")} تومان</p>
          <p>بارگذاری رسید: {date(o.receipt_uploaded_at)} | بررسی مدیر: {date(o.decided_at)}</p>
          {o.rejection_reason&&<p className="text-rose-300">علت رد: {o.rejection_reason}</p>}
          {o.receipt_uploaded_at&&<a href={`/api/shop/admin/receipt/${o.order_code}`} target="_blank" rel="noreferrer" className="inline-block rounded-lg bg-blue-700 px-4 py-2">مشاهده تصویر رسید</a>}
          {o.status==="pending_review"&&<div className="flex flex-wrap gap-3">
            <button disabled={!!busy} onClick={()=>void change({action:"review",code:o.order_code,status:"approved"},o.order_code)} className="rounded-lg bg-emerald-700 px-4 py-2">تأیید واریز</button>
            <button disabled={!!busy} onClick={()=>{const reason=window.prompt("علت رد واریز (برای خریدار نمایش داده می‌شود):","");if(reason!==null) void change({action:"review",code:o.order_code,status:"rejected",reason},o.order_code);}} className="rounded-lg bg-rose-700 px-4 py-2">رد واریز</button>
          </div>}
        </article>)}{orders.length===0&&<p className="text-white/60">سفارشی ثبت نشده است.</p>}</div>
      </>}
    </div>
  </main>;
}
