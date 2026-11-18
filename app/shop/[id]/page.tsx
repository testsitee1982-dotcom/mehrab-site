import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/app/lib/products";
import { ShopProductAdd } from "./shop-product-add";
import { getShopAvailability } from "@/app/lib/shop-db";
export const dynamic="force-dynamic";
export async function generateMetadata({params}:{params:Promise<{id:string}>}):Promise<Metadata> {
  const {id}=await params;
  const p=products.find(p=>p.id===id);
  return {title:p?`${p.name} | خرید و قیمت`:"محصول یافت نشد"};
}
export default async function ShopProductPage({params}:{params:Promise<{id:string}>}) {
  const {id}=await params;
  const product=products.find(p=>p.id===id);
  if(!product)notFound();
  const availability=await getShopAvailability().catch(()=>({} as Record<string,boolean>));
  return <main dir="rtl" className="mx-auto max-w-5xl px-4 py-16 text-white">
    <div className="grid gap-8 rounded-3xl border border-white/20 bg-slate-950/90 p-6 md:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/10"><Image src={product.img} alt={product.name} fill className="object-contain" sizes="(max-width:768px) 90vw, 480px" /></div>
      <section className="space-y-6"><h1 className="text-2xl font-bold leading-10">{product.name}</h1>
        <div className="text-amber-300 text-xl font-bold">{product.price.toLocaleString("fa-IR")} تومان</div>
        <ShopProductAdd productId={product.id} initialAvailable={availability[product.id]===true}/>
        <h2 className="text-lg font-bold">مشخصات فنی</h2>
        <ul className="list-disc space-y-3 pr-5 text-white/80">{product.specs.map((s,i)=><li key={i}>{s}</li>)}</ul>
        <div className="flex gap-3"><a href={product.tds} target="_blank" rel="noreferrer" className="rounded-lg bg-blue-600 px-4 py-2">دانلود دیتاشیت</a><Link href="/#products" className="rounded-lg border border-white/30 px-4 py-2">محصولات بیشتر</Link></div>
      </section>
    </div>
  </main>;
}
