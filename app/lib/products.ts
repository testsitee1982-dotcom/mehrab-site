// app/lib/products.ts
// Shared product catalog data (server-safe)

export type Product = {
  id: string;
  slug: string;
  name: string;
  img: string;
  tds: string;
  price: number;
  specs: string[];
};

export const products = [
  {
    id: "p1",
    slug: "bentonite-active-earthing",
    name: "بنتونیت اکتیو دار مخصوص ارتینگ",
    img: "/images/products/700.png",
    tds: "/docs/bentonite-active.pdf",
    price: 80000,
    specs: [
      "قدرت جذب رطوبت بالا",
      "رسانایی الکتریکی عالی",
      "پایداری در شرایط محیطی مختلف",
    ],
  },
  {
    id: "p2",
    slug: "bentonite-micronized-earthing",
    name: "بنتونیت میکرونیزه مخصوص ارتینگ",
    img: "/images/products/701.png",
    tds: "/docs/bentonite-micronized.pdf",
    price: 70000,
    specs: [
      "دانه‌بندی میکرونی یکنواخت",
      "حفظ رطوبت طولانی‌مدت",
      "افزایش ایمنی در سیستم ارت",
    ],
  },
  {
    id: "p3",
    slug: "lom-gel",
    name: "ژل کاهنده مقاومت الکتریکی زمین LOM",
    img: "/images/products/702.png",
    tds: "/docs/lom-gel.pdf",
    price: 400000,
    specs: [
      "افزایش سطح تماس با الکترود",
      "دوام بالا در برابر خشک شدن",
      "نصب سریع و آسان",
    ],
  },
  {
    id: "p4",
    slug: "lrm",
    name: "LRM",
    img: "/images/products/703.png",
    tds: "/docs/lrm.pdf",
    price: 250000,
    specs: [
      "فرمولاسیون خاص برای ارتینگ صنعتی",
      "پایداری حرارتی بالا",
      "رسانایی الکتریکی یکنواخت",
    ],
  },
  {
    id: "p5",
    slug: "super-active-premium",
    name: "سوپر اکتیو کاهنده ممتاز",
    img: "/images/products/704.png",
    tds: "/docs/super-active.pdf",
    price: 140000,
    specs: [
      "بیشترین کاهش مقاومت زمین",
      "فاقد فلزات سنگین",
      "دارای گواهینامه ISO/IEC",
    ],
  },
  {
    id: "p6",
    slug: "grm",
    name: "GRM",
    img: "/images/products/705.png",
    tds: "/docs/grm.pdf",
    price: 470000,
    specs: [
      "مناسب برای پروژه‌های ولتاژ بالا",
      "دوام طولانی‌مدت در خاک",
      "ترکیب خاص برای مقاومت پایین",
    ],
  },
  {
    id: "p7",
    slug: "sodium-electrolyte",
    name: "خاک کاهنده سوپر اکتیو سدیم دار حاوی الکترولیت",
    img: "/images/products/706.png",
    tds: "/docs/sodium-electrolyte.pdf",
    price: 120000,
    specs: [
      "بهبود سریع عملکرد ارت",
      "دارای مواد الکترولیت تقویت‌شده",
      "کارایی بالا در مناطق خشک",
    ],
  },
  {
    id: "p8",
    slug: "multi-active-powder",
    name: "پودر اکتیو چندمنظوره صنعتی",
    img: "/images/products/707.png",
    tds: "/docs/multi-active.pdf",
    price: 100000,
    specs: [
      "کاربرد در صنایع مختلف",
      "پایداری بالا در محیط‌های مرطوب",
      "مناسب برای شرایط سخت",
    ],
  },
] satisfies readonly Product[];