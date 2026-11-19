import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/app/lib/products";
import { ShopProductAdd } from "./shop-product-add";
import { getShopAvailability } from "@/app/lib/shop-db";
import { getTorobMetaTags } from "@/app/lib/torob";
import { SITE_NAME, SITE_URL } from "@/app/lib/seo";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Props = { params: Promise<{ id: string }> };

async function availabilityFor(id: string) {
  // A failed inventory lookup must NEVER claim an item is in stock.
  try {
    const availability = await getShopAvailability();
    return availability[id] === true;
  } catch {
    return false;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return { title: "محصول یافت نشد", robots: { index: false, follow: false } };
  }

  const inStock = await availabilityFor(product.id);
  const pageUrl = `${SITE_URL}/shop/${product.id}`;
  const imageUrl = new URL(product.img, SITE_URL).toString();

  return {
    title: `${product.name} | خرید و قیمت`,
    description: `${product.name}؛ قیمت ${product.price} تومان. مشاهده مشخصات و ثبت سفارش در ${SITE_NAME}.`,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: product.name,
      description: `${product.name} | ${SITE_NAME}`,
      url: pageUrl,
      type: "website",
      siteName: SITE_NAME,
      images: [{ url: imageUrl, alt: product.name }],
    },
    other: getTorobMetaTags(product, inStock),
  };
}

export default async function ShopProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const inStock = await availabilityFor(product.id);

  return (
    <main dir="rtl" className="mx-auto max-w-5xl px-4 py-16 text-white">
      <div className="grid gap-8 rounded-3xl border border-white/20 bg-slate-950/90 p-6 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/10">
          <Image src={product.img} alt={product.name} fill className="object-contain" sizes="(max-width:768px) 90vw, 480px" />
        </div>
        <section className="space-y-6">
          <h1 className="text-2xl font-bold leading-10">{product.name}</h1>
          <div className="text-amber-300 text-xl font-bold">{product.price.toLocaleString("fa-IR")} تومان</div>
          <ShopProductAdd productId={product.id} initialAvailable={inStock} />
          <h2 className="text-lg font-bold">مشخصات فنی</h2>
          <ul className="list-disc space-y-3 pr-5 text-white/80">
            {product.specs.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
          <div className="flex gap-3">
            <a href={product.tds} target="_blank" rel="noreferrer" className="rounded-lg bg-blue-600 px-4 py-2">دانلود دیتاشیت</a>
            <Link href="/#products" className="rounded-lg border border-white/30 px-4 py-2">محصولات بیشتر</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
