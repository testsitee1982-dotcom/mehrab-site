"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export function ShopProductAdd({productId,initialAvailable}:{productId:string;initialAvailable:boolean}){
  const [available,setAvailable]=useState<boolean|null>(initialAvailable);
  const router=useRouter();
  useEffect(()=>{void fetch("/api/shop/catalog",{cache:"no-store"}).then(r=>r.json()).then(d=>setAvailable(d.availability?.[productId]===true)).catch(()=>setAvailable(false));},[productId]);
  function add(){
    if(!available)return;
    let cart:Record<string,number>={};
    try {cart=JSON.parse(localStorage.getItem("mehrab-cart-v1")||"{}");}catch{}
    cart[productId]=Math.min(100,Math.max(0,Number(cart[productId])||0)+1);
    localStorage.setItem("mehrab-cart-v1",JSON.stringify(cart));
    router.push("/?openCart=1#products");
  }
  return <div className="space-y-3"><p className={available===null?"text-white/60":available?"text-emerald-300":"text-rose-300"}>{available===null?"در حال بررسی موجودی":available?"موجود":"ناموجود"}</p><button type="button" disabled={!available} onClick={add} className="rounded-xl bg-amber-500 px-5 py-3 font-bold text-slate-950 disabled:opacity-40">افزودن به سبد خرید</button></div>;
}
