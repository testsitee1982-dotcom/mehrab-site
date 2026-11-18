"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function TrackOrder() {
  const [code,setCode]=useState(""); const router=useRouter();
  return <main dir="rtl" className="mx-auto max-w-xl px-4 py-20 text-white">
    <form className="space-y-5 rounded-3xl border border-white/20 bg-slate-950/90 p-6" onSubmit={e=>{e.preventDefault();if(/^MRB-[a-f0-9]{24}$/i.test(code.trim()))router.push(`/order/${code.trim().toUpperCase()}`);}}>
      <h1 className="text-2xl font-bold">پیگیری سفارش</h1><p>کد پیگیری دریافت‌شده هنگام ثبت سفارش را وارد کنید. زمان بارگذاری رسید و تأیید یا رد آن قابل مشاهده است.</p>
      <input aria-label="کد پیگیری" dir="ltr" required pattern="MRB-[A-Fa-f0-9]{24}" value={code} onChange={e=>setCode(e.target.value)} placeholder="MRB-..." className="w-full rounded-lg bg-slate-800 p-3"/>
      <button type="submit" className="rounded-xl bg-amber-500 px-6 py-3 font-bold text-slate-950">نمایش وضعیت سفارش</button>
    </form>
  </main>;
}
