// app/products/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/lib/products";

type PageProps = {
  params: { id: string };
};

export default function ProductDetailsPage({ params }: PageProps) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="flex items-center justify-between gap-3 mb-6">
        <h1 className="text-white text-2xl md:text-3xl font-extrabold">
          {product.name}
        </h1>

        <Link
          href="/#products"
          className="text-white/80 hover:text-white bg-white/5 border border-white/10 rounded-xl px-4 py-2"
        >
          بازگشت
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* تصویر */}
        <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-[340px] object-contain bg-[rgba(255,255,255,0.03)]"
          />
        </div>

        {/* مشخصات */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="text-white/70">قیمت:</div>
            <div className="text-[var(--brand-accent)] font-extrabold text-lg">
              {product.price.toLocaleString("fa-IR")} تومان
            </div>
          </div>

          <div className="mt-5">
            <div className="text-white font-bold mb-3">خصوصیات / مشخصات:</div>
            <ul className="space-y-2">
              {product.specs.map((s, idx) => (
                <li key={idx} className="text-white/80 text-sm leading-6">
                  • {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={product.tds}
              target="_blank"
              rel="noreferrer"
              className="bg-[var(--brand-accent)] text-slate-900 font-bold px-4 py-2 rounded-xl hover:brightness-95"
            >
              دانلود دیتاشیت (TDS)
            </a>

            <Link
              href="/#contact"
              className="bg-white/5 text-white font-bold px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10"
            >
              درخواست مشاوره / خرید
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
