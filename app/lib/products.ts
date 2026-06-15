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
    slug: "active-bentonite-earthing-ground-enhancement",
    name: "بنتونیت اکتیو دار مخصوص ارتینگ و کاهش مقاومت زمین",
    img: "/images/products/active-bentonite-earthing-ground-enhancement.png",
    tds: "/docs/bentonite-active.pdf",
    price: 100000,
    specs: [
      "قدرت جذب رطوبت بالا برای پایداری سیستم ارت",
      "رسانایی الکتریکی مناسب جهت کاهش مقاومت زمین",
      "قابل استفاده در چاه ارت، شبکه زمین و پروژه‌های صنعتی",
    ],
  },
  {
    id: "p2",
    slug: "micronized-bentonite-earth-pit-earthing",
    name: "بنتونیت میکرونیزه مخصوص چاه ارت و سیستم زمین",
    img: "/images/products/micronized-bentonite-earth-pit-earthing.png",
    tds: "/docs/bentonite-micronized.pdf",
    price: 90000,
    specs: [
      "دانه‌بندی میکرونیزه و یکنواخت برای تماس بهتر با الکترود",
      "حفظ رطوبت طولانی‌مدت در اطراف چاه ارت",
      "مناسب برای کاهش مقاومت الکتریکی زمین در پروژه‌های ارتینگ",
    ],
  },
  {
    id: "p3",
    slug: "lrm-grounding-gel-earth-resistance-reducer",
    name: "سوپر ژل کاهنده مقاومت زمین LRM مخصوص ارتینگ",
    img: "/images/products/lrm-grounding-gel-earth-resistance-reducer.png",
    tds: "/docs/lom-gel.pdf",
    price: 400000,
    specs: [
      "افزایش سطح تماس بین الکترود و خاک اطراف",
      "دوام بالا در برابر خشک شدن و تغییرات رطوبت",
      "مناسب برای اجرای سریع سیستم ارت در پروژه‌های صنعتی",
    ],
  },
  {
    id: "p4",
    slug: "lrm-ground-enhancement-material-conductive-bentonite",
    name: "مواد کاهنده مقاومت زمین LRM سوپر اکتیو",
    img: "/images/products/lrm-ground-enhancement-material-conductive-bentonite.png",
    tds: "/docs/lrm.pdf",
    price: 350000,
    specs: [
      "فرمولاسیون ویژه برای ارتینگ صنعتی و شبکه زمین",
      "پایداری حرارتی و رطوبتی مناسب در شرایط سخت محیطی",
      "رسانایی الکتریکی یکنواخت برای کاهش مقاومت سیستم ارت",
    ],
  },
  {
    id: "p5",
    slug: "export-super-active-ground-enhancement-material",
    name: "سوپر اکتیو کاهنده مقاومت زمین صادراتی مهرابی",
    img: "/images/products/export-super-active-ground-enhancement-material.png",
    tds: "/docs/super-active.pdf",
    price: 160000,
    specs: [
      "کاهش مؤثر مقاومت زمین در سیستم‌های ارتینگ",
      "مناسب برای پروژه‌های صنعتی، نیروگاهی و مخابراتی",
      "دارای مشخصات فنی مناسب برای کاربردهای صادراتی",
    ],
  },
  {
    id: "p6",
    slug: "grm-ground-recovering-material-earthing",
    name: "مواد کاهنده مقاومت زمین GRM Ground Recovering Material",
    img: "/images/products/grm-ground-recovering-material-earthing.png",
    tds: "/docs/grm.pdf",
    price: 780000,
    specs: [
      "مناسب برای پروژه‌های ولتاژ بالا و سیستم‌های زمین صنعتی",
      "دوام طولانی‌مدت در خاک و شرایط محیطی مختلف",
      "ترکیب تخصصی برای بهبود عملکرد الکترود و کاهش مقاومت زمین",
    ],
  },
  {
    id: "p7",
    slug: "sodium-bentonite-electrolyte-ground-enhancement",
    name: "خاک کاهنده سوپر اکتیو سدیم دار حاوی الکترولیت",
    img: "/images/products/sodium-bentonite-electrolyte-ground-enhancement.png",
    tds: "/docs/sodium-electrolyte.pdf",
    price: 140000,
    specs: [
      "بهبود سریع عملکرد سیستم ارت در خاک‌های خشک",
      "دارای ترکیبات الکترولیتی برای افزایش هدایت الکتریکی",
      "مناسب برای مناطق کم‌رطوبت و پروژه‌های ارتینگ حساس",
    ],
  },
  {
    id: "p8",
    slug: "multi-active-industrial-earthing-powder",
    name: "پودر اکتیو چندمنظوره صنعتی برای سیستم ارت",
    img: "/images/products/multi-active-industrial-earthing-powder.png",
    tds: "/docs/multi-active.pdf",
    price: 110000,
    specs: [
      "قابل استفاده در صنایع مختلف و پروژه‌های ارتینگ عمومی",
      "پایداری بالا در محیط‌های مرطوب و شرایط کاری سخت",
      "مناسب برای بهبود تماس الکترود با خاک و کاهش مقاومت زمین",
    ],
  },
] satisfies readonly Product[];