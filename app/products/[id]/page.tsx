
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_BRAND_EN, SITE_LOGO, SITE_NAME, SITE_URL } from "@/app/lib/seo";


type ProductSeo = {
  title: string;
  description: string;
  keywords: string[];
  category: string;
};

const PRODUCT_SEO: Record<string, ProductSeo> = {
  "active-bentonite": {
    title: "بنتونیت اکتیو ارتینگ | خرید بنتونیت چاه ارت",
    description:
      "بنتونیت اکتیو مخصوص سیستم ارتینگ برای کاهش مقاومت زمین، حفظ رطوبت اطراف الکترود و بهبود عملکرد چاه ارت در پروژه‌های صنعتی و ساختمانی.",
    category: "بنتونیت ارتینگ",
    keywords: [
      "بنتونیت اکتیو",
      "بنتونیت ارتینگ",
      "بنتونیت چاه ارت",
      "خرید بنتونیت",
      "قیمت بنتونیت",
      "Active Bentonite",
      "Earthing Bentonite",
      "Grounding Bentonite",
    ],
  },

  "micronized-bentonite": {
    title: "بنتونیت میکرونیزه ارتینگ | Grounding Bentonite",
    description:
      "بنتونیت میکرونیزه مخصوص ارتینگ با دانه‌بندی یکنواخت برای افزایش تماس الکترود با خاک و کاهش مقاومت الکتریکی زمین.",
    category: "بنتونیت میکرونیزه",
    keywords: [
      "بنتونیت میکرونیزه",
      "بنتونیت ارتینگ",
      "Grounding Bentonite",
      "Earthing Bentonite",
      "بنتونیت صنعتی",
      "چاه ارت",
    ],
  },

  lom: {
    title: "LOM | ژل کاهنده مقاومت الکتریکی زمین",
    description:
      "ژل کاهنده مقاومت الکتریکی زمین LOM برای افزایش سطح تماس الکترود، بهبود رسانایی اطراف الکترود ارت و افزایش پایداری سیستم ارتینگ.",
    category: "ژل کاهنده مقاومت زمین",
    keywords: [
      "LOM",
      "ژل کاهنده مقاومت زمین",
      "ژل ارتینگ",
      "مواد کاهنده مقاومت زمین",
      "چاه ارت",
      "سیستم ارتینگ",
    ],
  },

  lrm: {
    title: "LRM | Low Resistance Material | ماده کاهنده مقاومت زمین",
    description:
      "LRM ماده تخصصی کاهنده مقاومت زمین برای سیستم‌های ارتینگ صنعتی، پست برق، دکل مخابراتی، چاه ارت و شبکه اتصال زمین.",
    category: "مواد کاهنده مقاومت زمین",
    keywords: [
      "LRM",
      "Low Resistance Material",
      "مواد کاهنده مقاومت زمین",
      "ماده کاهنده مقاومت زمین",
      "ارتینگ",
      "چاه ارت",
      "Ground Enhancement Material",
    ],
  },

  "super-active-bentonite": {
    title: "سوپر اکتیو کاهنده مقاومت زمین | بنتونیت ویژه ارتینگ",
    description:
      "سوپر اکتیو کاهنده مقاومت الکتریکی بر پایه بنتونیت فرآوری‌شده برای کاهش چشمگیر مقاومت زمین و افزایش پایداری سیستم ارتینگ.",
    category: "بنتونیت سوپر اکتیو",
    keywords: [
      "سوپر اکتیو کاهنده مقاومت",
      "بنتونیت ویژه ارتینگ",
      "بنتونیت فرآوری شده",
      "مواد کاهنده مقاومت زمین",
      "Ground Enhancement Material",
      "چاه ارت",
    ],
  },

  grm: {
    title: "GRM | Ground Reducing Material | مواد کاهنده مقاومت زمین",
    description:
      "GRM مواد کاهنده مقاومت الکتریکی زمین با هدایت الکتریکی بالا برای پرکردن اطراف هادی ارت، چاه ارت و سیستم‌های اتصال زمین.",
    category: "Ground Reducing Material",
    keywords: [
      "GRM",
      "Ground Reducing Material",
      "مواد کاهنده مقاومت زمین",
      "خاک کاهنده مقاومت زمین",
      "ارتینگ صنعتی",
      "چاه ارت",
      "Ground Enhancement Material",
    ],
  },

  "sodium-bentonite-electrolyte": {
    title: "خاک کاهنده سوپر اکتیو سدیم‌دار حاوی الکترولیت",
    description:
      "خاک کاهنده سوپر اکتیو سدیم‌دار حاوی الکترولیت برای بهبود سریع عملکرد ارت در مناطق خشک و کم‌رطوبت.",
    category: "خاک کاهنده مقاومت زمین",
    keywords: [
      "خاک کاهنده سوپر اکتیو",
      "بنتونیت سدیم دار",
      "مواد الکترولیت ارت",
      "خاک کاهنده مقاومت زمین",
      "چاه ارت",
      "ارتینگ صنعتی",
    ],
  },

  "multi-active-powder": {
    title: "پودر اکتیو چندمنظوره صنعتی | مواد بهبوددهنده ارتینگ",
    description:
      "پودر اکتیو چندمنظوره صنعتی مناسب کاربردهای صنعتی، شرایط سخت و بهبود رسانایی خاک در پروژه‌های ارتینگ و زیرساختی.",
    category: "پودر اکتیو صنعتی",
    keywords: [
      "پودر اکتیو صنعتی",
      "پودر کاهنده مقاومت زمین",
      "مواد بهبوددهنده خاک",
      "ارتینگ صنعتی",
      "مواد کاهنده مقاومت زمین",
      "چاه ارت",
    ],
  },
};

type ProductDoc = {
  title: string;
  subtitle?: string;
  date?: string;
  tags?: string[]; // [tagBlue, tagGreen]  =>  اولی آبی، دومی سبز
  img?: string; // مسیر عکس محصول
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
  >;
};

/* ------------------------------------------------------------------ */
/* ✅ استایل‌ها (دقیقاً برای هماهنگی رنگ مثل why-us) */
/* ------------------------------------------------------------------ */

// ✅ دکمه بازگشت (همان استایل why-us)
const backBtnClass = `
  inline-flex items-center justify-center
  px-5 py-2
  rounded-xl
  bg-pink-700/20
  border border-pink-400/60
  text-white
  text-sm md:text-base
  transition-all
  hover:bg-pink-700/35
  hover:border-pink-200
  backdrop-blur-sm
`;

// ✅ تاریخ (خنثی/خاکستری)
const pillDateClass = `
  inline-flex items-center justify-center
  rounded-full
  border border-white/15
  bg-white/10
  px-3 py-1
  text-xs
  text-white/85
  backdrop-blur-sm
`;

// ✅ تگ آبی = "کاربردهای صنعت برق"
const pillBlueClass = `
  inline-flex items-center justify-center
  rounded-full
  border border-sky-300/40
  bg-sky-500/15
  px-3 py-1
  text-xs
  text-white
  backdrop-blur-sm
`;

// ✅ تگ سبز = "سیستم‌های ارتینگ و صاعقه‌گیر"
const pillGreenClass = `
  inline-flex items-center justify-center
  rounded-full
  border border-emerald-300/40
  bg-emerald-500/15
  px-3 py-1
  text-xs
  text-white
  backdrop-blur-sm
`;

/* ------------------------------------------------------------------ */
/* ✅ متن محصولات + عکس درست بر اساس نام‌گذاری 700 تا 707 */
/* ------------------------------------------------------------------ */

const COMMON_TAGS = ["کاربردهای صنعت برق", "سیستم‌های ارتینگ و صاعقه‌گیر"] as const;
const COMMON_DATE = "۱۴۰۳/۰۸/۲۹";

const BENTONITE_ACTIVE_DOC: ProductDoc = {
  title: "بنتونیت اکتیو‌دار مخصوص سیستم ارتینگ (MEHRABI)",
  subtitle:
    "ترکیب معدنی فعال‌شده بر پایه بنتونیت و کائولن، طراحی‌شده برای ایجاد محیط هادی پایدار و کاهش مؤثر مقاومت خاک در سیستم ارت.",
  date: COMMON_DATE,
  tags: [...COMMON_TAGS],
  img: "/images/products/active-bentonite-earthing-ground-enhancement.png",
  body: [
    {
      type: "p",
      text:
        "این محصول یک ترکیب معدنی فعال‌شده بر پایه بنتونیت و کائولن است که به‌صورت تخصصی برای استفاده در سیستم‌های اتصال به زمین (ارتینگ) طراحی شده است. ساختار فعال و تورم‌پذیر این بنتونیت، با جذب و نگهداری رطوبت در اطراف الکترود، موجب کاهش مؤثر مقاومت الکتریکی خاک و بهبود عملکرد سیستم ارت می‌گردد.",
    },
    {
      type: "p",
      text:
        "فرمولاسیون ویژه این محصول باعث ایجاد یک محیط هادی پایدار در اطراف چاه ارت شده و در شرایط مختلف اقلیمی، به‌ویژه در خاک‌های خشک و کم‌رطوبت، عملکردی یکنواخت و قابل اطمینان ارائه می‌دهد. همچنین به دلیل ماهیت غیرخورنده، از تجهیزات فلزی محافظت کرده و طول عمر سیستم را افزایش می‌دهد.",
    },
    { type: "h2", text: "ویژگی‌ها:" },
    {
      type: "ul",
      items: [
        "کاهش چشمگیر مقاومت الکتریکی زمین",
        "جذب و نگهداری رطوبت در اطراف الکترود",
        "ایجاد تماس یکنواخت و مؤثر بین خاک و سیستم ارت",
        "عملکرد پایدار در شرایط خشک و کم‌رطوبت",
        "غیرخورنده و سازگار با تجهیزات فلزی",
        "افزایش طول عمر و پایداری سیستم ارتینگ",
      ],
    },
    { type: "h2", text: "کاربردها:" },
    {
      type: "ul",
      items: [
        "چاه‌های ارت ساختمانی و صنعتی",
        "پست‌های برق و تابلوهای توزیع",
        "دکل‌های مخابراتی و سیستم‌های مخابراتی",
        "سیستم‌های حفاظت در برابر صاعقه (Lightning Protection)",
        "مراکز حساس الکترونیکی و تجهیزات صنعتی",
      ],
    },
  ],
};

const BENTONITE_MICRONIZED_DOC: ProductDoc = {
  title: "بنتونیت میکرونیزه مخصوص ارتینگ",
  subtitle:
    "بنتونیت با دانه‌بندی میکرونی یکنواخت جهت ایجاد تماس بهتر با خاک و افزایش پایداری عملکرد سیستم ارت.",
  date: COMMON_DATE,
  tags: [...COMMON_TAGS],
  img: "/images/products/micronized-bentonite-earth-pit-earthing.png",
  body: [
    {
      type: "p",
      text:
        "بنتونیت میکرونیزه مخصوص ارتینگ، با دانه‌بندی ریز و یکنواخت طراحی شده تا در اطراف الکترود توزیع بهتری ایجاد کرده و تماس مؤثرتری بین الکترود و خاک برقرار کند. این ویژگی به کاهش مقاومت الکتریکی زمین و افزایش پایداری عملکرد سیستم ارت کمک می‌کند.",
    },
    { type: "h2", text: "ویژگی‌ها:" },
    {
      type: "ul",
      items: [
        "دانه‌بندی میکرونی یکنواخت",
        "حفظ رطوبت طولانی‌مدت در اطراف الکترود",
        "افزایش ایمنی و پایداری در سیستم ارت",
      ],
    },
    { type: "h2", text: "کاربردها:" },
    {
      type: "ul",
      items: [
        "چاه ارت ساختمان‌ها و صنایع",
        "پست‌های برق و تابلوهای توزیع",
        "دکل‌های مخابراتی و سایت‌های BTS",
        "سیستم‌های حفاظت در برابر صاعقه",
      ],
    },
  ],
};

const LOM_DOC: ProductDoc = {
  title: "ژل کاهنده مقاومت الکتریکی زمین LOM",
  subtitle: "ژل کاهنده مقاومت با قابلیت پایداری مناسب، افزایش سطح تماس و بهبود رسانایی اطراف الکترود ارت.",
  date: COMMON_DATE,
  tags: [...COMMON_TAGS],
  img: "/images/products/lrm-grounding-gel-earth-resistance-reducer.png",
  body: [
    {
      type: "p",
      text:
        "ژل کاهنده مقاومت الکتریکی زمین LOM برای افزایش سطح تماس الکترود و بهبود رسانایی اطراف الکترود ارت استفاده می‌شود. ساختار ژلی این محصول کمک می‌کند مواد در محل باقی مانده و در برابر شستشو یا جابجایی مقاوم‌تر باشد.",
    },
    {
      type: "p",
      text:
        "LOM به‌ویژه در خاک‌هایی که دچار ترک‌خوردگی یا خشک‌شدن می‌شوند، می‌تواند پایداری عملکرد سیستم ارت را افزایش دهد و کاهش مقاومت زمین را در طول زمان حفظ کند.",
    },
    { type: "h2", text: "ویژگی‌ها:" },
    {
      type: "ul",
      items: ["افزایش سطح تماس با الکترود", "دوام بالا در برابر خشک شدن", "نصب سریع و آسان"],
    },
    { type: "h2", text: "کاربردها:" },
    {
      type: "ul",
      items: ["سیستم‌های ارتینگ صنعتی و ساختمانی", "دکل‌ها و سیستم‌های حفاظتی در برابر صاعقه", "مراکز حساس الکترونیکی"],
    },
  ],
};

const LRM_DOC: ProductDoc = {
  title: "LRM",
  subtitle:
    "مواد کاهنده/بهبوددهنده اتصال زمین با فرمولاسیون صنعتی جهت کاهش مقاومت و افزایش پایداری سیستم ارتینگ.",
  date: COMMON_DATE,
  tags: [...COMMON_TAGS],
  img: "/images/products/lrm-ground-enhancement-material-conductive-bentonite.png",
  body: [
    {
      type: "p",
      text:
        "LRM یک محصول تخصصی برای ارتینگ صنعتی است که با هدف کاهش مقاومت الکتریکی زمین و افزایش پایداری سیستم ارت طراحی شده است. این محصول با ایجاد محیط رسانا در اطراف الکترود، عملکرد سیستم را در شرایط مختلف محیطی بهبود می‌دهد.",
    },
    { type: "h2", text: "ویژگی‌ها:" },
    {
      type: "ul",
      items: ["فرمولاسیون خاص برای ارتینگ صنعتی", "پایداری حرارتی مناسب", "رسانایی الکتریکی یکنواخت"],
    },
    { type: "h2", text: "کاربردها:" },
    {
      type: "ul",
      items: ["کاربردهای صنعتی و ساختمانی", "پست‌های برق و مراکز مخابراتی", "حفاظت در برابر صاعقه"],
    },
  ],
};

const SUPER_ACTIVE_PREMIUM_DOC: ProductDoc = {
  title: "سوپر اکتیو کاهنده مقاومت الکتریکی (بنتونیت ویژه سیستم ارت)",
  subtitle:
    "ترکیب مهندسی‌شده بر پایه بنتونیت فرآوری‌شده برای کاهش چشمگیر مقاومت زمین و افزایش پایداری سیستم ارتینگ.",
  date: COMMON_DATE,
  tags: [...COMMON_TAGS],
  img: "/images/products/export-super-active-ground-enhancement-material.png",
  body: [
    {
      type: "p",
      text:
        "این محصول یک ترکیب مهندسی‌شده بر پایه بنتونیت فرآوری‌شده است که با هدف بهبود عملکرد سیستم‌های اتصال به زمین (ارتینگ) طراحی شده است. با خاصیت جذب رطوبت بالا و ایجاد تماس مؤثر بین الکترود و خاک، باعث کاهش چشمگیر مقاومت الکتریکی زمین شده و پایداری سیستم را در طول زمان تضمین می‌کند.",
    },
    {
      type: "p",
      text:
        "فرمولاسیون ویژه این محصول موجب می‌شود در شرایط مختلف اقلیمی، به‌ویژه در خاک‌های خشک و سنگی، عملکردی پایدار و قابل اطمینان داشته باشد. همچنین به دلیل عدم ایجاد خوردگی و سازگاری با محیط زیست، گزینه‌ای ایمن برای استفاده طولانی‌مدت محسوب می‌شود.",
    },
    { type: "h2", text: "ویژگی‌ها:" },
    {
      type: "ul",
      items: [
        "کاهش مؤثر مقاومت الکتریکی زمین",
        "حفظ رطوبت و عملکرد پایدار در شرایط خشک",
        "غیرخورنده و سازگار با تجهیزات فلزی",
        "نصب آسان و افزایش عمر سیستم ارت",
        "مطابق با استانداردهای بین‌المللی",
      ],
    },
    { type: "h2", text: "کاربردها:" },
    {
      type: "ul",
      items: [
        "سیستم‌های ارتینگ صنعتی و ساختمانی",
        "پست‌های برق و تجهیزات مخابراتی",
        "دکل‌ها و سیستم‌های حفاظتی در برابر صاعقه",
        "مراکز حساس الکترونیکی و دیتاسنترها",
      ],
    },
  ],
};

const GRM_DOC: ProductDoc = {
  title: "مواد كاهنده مقاومت الكتريكی زمين (Ground Reducing Material)",
  subtitle:
    "این محصول مطابق با استاندارد IEC و «مورد تایید شرکت توزیع نیروی برق استان تهران» می‌باشد.",
  date: "۱۴۰۳/۰۸/۲۹",
  tags: [...COMMON_TAGS],
  img: "/images/products/grm-ground-recovering-material-earthing.png",
  body: [
    {
      type: "p",
      text:
        "GRM ترکیبی از انواع مواد معدنی و شیمیایی با پایه کربنی و با ضریب هدایت الکتریکی بسیار بالا می‌باشد که برای پر کردن اطراف هادی‌های ارت در سیستم ارتینگ استفاده می‌شود.",
    },
    {
      type: "p",
      text:
        "GRM ترکیبی از انواع مواد معدنی و شیمیایی با ضریب هدایت الکتریکی بسیار بالا و در عین حال خنثی می‌باشد که برای پر کردن اطراف هادی‌های ارت استفاده می‌شود. GRM به دلیل داشتن ترکیبات خاص، مقاومت الکتریکی زمین را به مقدار زیادی کاهش داده و موجب ارتقای کارایی و عملکرد سیستم‌های ارتینگ می‌شود.",
    },
    {
      type: "p",
      text:
        "بیشترین موارد استفاده از مواد فوق در مناطقی می‌باشد که مقاومت الکتریکی مخصوص خاک زمین در آن مناطق بسیار بالا بوده و احتمال شسته شدن سایر مواد کاهنده مقاومت الکتریکی زمین (بنتونیت و …) توسط آب‌های سطحی زیاد است و اتصال الکتریکی بین هادی ارت و خاک زمین بسیار کم می‌باشد.",
    },
    { type: "h2", text: "مشخصات GRM:" },
    {
      type: "ul",
      items: [
        "بهترین گزینه برای پر کردن چاه ارت در جنوب کشور",
        "خاصیت ترک نخوردن و هدایت الکتریکی بالا",
        "عدم ایجاد خوردگی در الکترودها و هادی‌های ارت",
        "افزایش پایداری شبکه ارت",
        "نداشتن اثر مخرب روی محیط زیست",
      ],
    },
  ],
};

const SODIUM_ELECTROLYTE_DOC: ProductDoc = {
  title: "خاک کاهنده سوپر اکتیو سدیم دار حاوی الکترولیت",
  subtitle: "ترکیب کاهنده با مواد الکترولیت تقویت‌شده جهت بهبود سریع عملکرد ارت در مناطق خشک.",
  date: COMMON_DATE,
  tags: [...COMMON_TAGS],
  img: "/images/products/sodium-bentonite-electrolyte-ground-enhancement.png",
  body: [
    {
      type: "p",
      text:
        "این محصول با ترکیبات تقویت‌شده و حضور مواد الکترولیت، برای بهبود سریع عملکرد سیستم ارت طراحی شده است و در شرایط خشک یا کم‌رطوبت کارایی بالایی دارد.",
    },
    { type: "h2", text: "ویژگی‌ها:" },
    {
      type: "ul",
      items: ["بهبود سریع عملکرد ارت", "دارای مواد الکترولیت تقویت‌شده", "کارایی بالا در مناطق خشک"],
    },
    { type: "h2", text: "کاربردها:" },
    {
      type: "ul",
      items: ["ارتینگ صنعتی و ساختمانی", "تجهیزات مخابراتی", "حفاظت در برابر صاعقه"],
    },
  ],
};

const MULTI_ACTIVE_DOC: ProductDoc = {
  title: "پودر اکتیو چندمنظوره صنعتی",
  subtitle: "پودر اکتیو با کاربرد عمومی صنعتی، مناسب برای شرایط سخت و محیط‌های مرطوب.",
  date: COMMON_DATE,
  tags: [...COMMON_TAGS],
  img: "/images/products/multi-active-industrial-earthing-powder.png",
  body: [
    {
      type: "p",
      text:
        "پودر اکتیو چندمنظوره صنعتی با هدف استفاده در کاربردهای عمومی و شرایط سخت طراحی شده است و می‌تواند در محیط‌های مرطوب نیز پایداری مناسبی ارائه دهد.",
    },
    { type: "h2", text: "ویژگی‌ها:" },
    {
      type: "ul",
      items: ["کاربرد در صنایع مختلف", "پایداری بالا در محیط‌های مرطوب", "مناسب برای شرایط سخت"],
    },
    { type: "h2", text: "کاربردها:" },
    {
      type: "ul",
      items: ["کاربردهای صنعتی", "پروژه‌های ساختمانی و زیرساختی", "بهبود شرایط رسانایی خاک در پروژه‌ها"],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* ✅ مپ دقیق: هر p دقیقا سر جای خودش (مشکل جابجایی مشخصات حل می‌شود) */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* ✅ Product Routes (SEO + Legacy URLs)                              */
/* ------------------------------------------------------------------ */

const PRODUCT_DOCS: Record<string, ProductDoc> = {
  /* =========================
     Legacy URLs (قدیمی)
  ========================= */

  // 700
  p1: BENTONITE_ACTIVE_DOC,

  // 701
  p2: BENTONITE_MICRONIZED_DOC,

  // 702
  p3: LOM_DOC,

  // 703
  p4: LRM_DOC,

  // 704
  p5: SUPER_ACTIVE_PREMIUM_DOC,

  // 705
  p6: GRM_DOC,

  // 706
  p7: SODIUM_ELECTROLYTE_DOC,

  // 707
  p8: MULTI_ACTIVE_DOC,

  /* =========================
     SEO Friendly URLs
  ========================= */

  "active-bentonite": BENTONITE_ACTIVE_DOC,
  "micronized-bentonite": BENTONITE_MICRONIZED_DOC,
  "lom": LOM_DOC,
  "lrm": LRM_DOC,
  "super-active-bentonite": SUPER_ACTIVE_PREMIUM_DOC,
  "grm": GRM_DOC,
  "sodium-bentonite-electrolyte": SODIUM_ELECTROLYTE_DOC,
  "multi-active-powder": MULTI_ACTIVE_DOC,
};


type ProductDocKey = keyof typeof PRODUCT_DOCS;
type ProductSeoKey = keyof typeof PRODUCT_SEO;

type ProductRoute = {
  dataKey: ProductDocKey;
  seoKey: ProductSeoKey;
  canonicalSlug: string;
};

/*
  نکته مهم:
  - dataKey مشخص می‌کند متن محصول از کدام آیتم PRODUCT_DOCS خوانده شود.
  - seoKey مشخص می‌کند متادیتا از کدام آیتم PRODUCT_SEO خوانده شود.
  - canonicalSlug آدرس نهایی سئویی است که باید در canonical و sitemap استفاده شود.
*/
const PRODUCT_ROUTES: Record<string, ProductRoute> = {
  /* Legacy URLs */
  p1: {
    dataKey: "p1",
    seoKey: "active-bentonite",
    canonicalSlug: "active-bentonite-earthing-ground-enhancement",
  },
  p2: {
    dataKey: "p2",
    seoKey: "micronized-bentonite",
    canonicalSlug: "micronized-bentonite-earth-pit-earthing",
  },
  p3: {
    dataKey: "p3",
    seoKey: "lom",
    canonicalSlug: "lrm-grounding-gel-earth-resistance-reducer",
  },
  p4: {
    dataKey: "p4",
    seoKey: "lrm",
    canonicalSlug: "lrm-ground-enhancement-material-conductive-bentonite",
  },
  p5: {
    dataKey: "p5",
    seoKey: "super-active-bentonite",
    canonicalSlug: "export-super-active-ground-enhancement-material",
  },
  p6: {
    dataKey: "p6",
    seoKey: "grm",
    canonicalSlug: "grm-ground-recovering-material-earthing",
  },
  p7: {
    dataKey: "p7",
    seoKey: "sodium-bentonite-electrolyte",
    canonicalSlug: "sodium-bentonite-electrolyte-ground-enhancement",
  },
  p8: {
    dataKey: "p8",
    seoKey: "multi-active-powder",
    canonicalSlug: "multi-active-industrial-earthing-powder",
  },

  /* Short SEO URLs */
  "active-bentonite": {
    dataKey: "p1",
    seoKey: "active-bentonite",
    canonicalSlug: "active-bentonite-earthing-ground-enhancement",
  },
  "micronized-bentonite": {
    dataKey: "p2",
    seoKey: "micronized-bentonite",
    canonicalSlug: "micronized-bentonite-earth-pit-earthing",
  },
  lom: {
    dataKey: "p3",
    seoKey: "lom",
    canonicalSlug: "lrm-grounding-gel-earth-resistance-reducer",
  },
  lrm: {
    dataKey: "p4",
    seoKey: "lrm",
    canonicalSlug: "lrm-ground-enhancement-material-conductive-bentonite",
  },
  "super-active-bentonite": {
    dataKey: "p5",
    seoKey: "super-active-bentonite",
    canonicalSlug: "export-super-active-ground-enhancement-material",
  },
  grm: {
    dataKey: "p6",
    seoKey: "grm",
    canonicalSlug: "grm-ground-recovering-material-earthing",
  },
  "sodium-bentonite-electrolyte": {
    dataKey: "p7",
    seoKey: "sodium-bentonite-electrolyte",
    canonicalSlug: "sodium-bentonite-electrolyte-ground-enhancement",
  },
  "multi-active-powder": {
    dataKey: "p8",
    seoKey: "multi-active-powder",
    canonicalSlug: "multi-active-industrial-earthing-powder",
  },

  /* Final Product Slugs from app/lib/products.ts */
  "active-bentonite-earthing-ground-enhancement": {
    dataKey: "p1",
    seoKey: "active-bentonite",
    canonicalSlug: "active-bentonite-earthing-ground-enhancement",
  },
  "micronized-bentonite-earth-pit-earthing": {
    dataKey: "p2",
    seoKey: "micronized-bentonite",
    canonicalSlug: "micronized-bentonite-earth-pit-earthing",
  },
  "lrm-grounding-gel-earth-resistance-reducer": {
    dataKey: "p3",
    seoKey: "lom",
    canonicalSlug: "lrm-grounding-gel-earth-resistance-reducer",
  },
  "lrm-ground-enhancement-material-conductive-bentonite": {
    dataKey: "p4",
    seoKey: "lrm",
    canonicalSlug: "lrm-ground-enhancement-material-conductive-bentonite",
  },
  "export-super-active-ground-enhancement-material": {
    dataKey: "p5",
    seoKey: "super-active-bentonite",
    canonicalSlug: "export-super-active-ground-enhancement-material",
  },
  "grm-ground-recovering-material-earthing": {
    dataKey: "p6",
    seoKey: "grm",
    canonicalSlug: "grm-ground-recovering-material-earthing",
  },
  "sodium-bentonite-electrolyte-ground-enhancement": {
    dataKey: "p7",
    seoKey: "sodium-bentonite-electrolyte",
    canonicalSlug: "sodium-bentonite-electrolyte-ground-enhancement",
  },
  "multi-active-industrial-earthing-powder": {
    dataKey: "p8",
    seoKey: "multi-active-powder",
    canonicalSlug: "multi-active-industrial-earthing-powder",
  },
};

function resolveProductRoute(id: string): ProductRoute | undefined {
  return PRODUCT_ROUTES[id];
}

function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function jsonLdStringify(item: unknown) {
  return JSON.stringify(item).replace(/</g, "\\u003c");
}



export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}): Promise<Metadata> {
  const resolvedParams =
    params instanceof Promise ? await params : params;

  const id = resolvedParams.id;
  const route = resolveProductRoute(id);
  const doc = route ? PRODUCT_DOCS[route.dataKey] : undefined;
  const seo = route ? PRODUCT_SEO[route.seoKey] : undefined;

  if (!route || !doc || !seo) {
    return {
      title: `محصولات ارتینگ | ${SITE_NAME}`,
      description:
        "محصولات تخصصی ارتینگ، بنتونیت، LRM، GRM و مواد کاهنده مقاومت زمین.",
      alternates: {
        canonical: `${SITE_URL}/products/${id}`,
      },
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const pageUrl = `${SITE_URL}/products/${route.canonicalSlug}`;
  const imageUrl = doc.img ? absoluteUrl(doc.img) : SITE_LOGO;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: pageUrl,
      type: "article",
      siteName: SITE_NAME,
      locale: "fa_IR",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: doc.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ProductDetailsPage(props: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const resolvedParams =
    props.params instanceof Promise ? await props.params : props.params;

  const id = resolvedParams.id;
  const route = resolveProductRoute(id);
  const doc = route ? PRODUCT_DOCS[route.dataKey] : undefined;

  const pageUrl = `${SITE_URL}/products/${route?.canonicalSlug ?? id}`;
  const seo = route ? PRODUCT_SEO[route.seoKey] : undefined;
  const imageUrl = doc?.img ? absoluteUrl(doc.img) : SITE_LOGO;

  const breadcrumbJsonLd =
    doc && seo
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": `${pageUrl}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "خانه",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "محصولات",
              item: `${SITE_URL}/#products`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: doc.title,
              item: pageUrl,
            },
          ],
        }
      : null;

  const productJsonLd =
    doc && seo
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          "@id": `${pageUrl}#product`,
          name: doc.title,
          alternateName: seo.title,
          description: doc.subtitle ?? seo.description,
          image: [imageUrl],
          url: pageUrl,
          category: seo.category,
          brand: {
            "@type": "Brand",
            name: SITE_BRAND_EN,
          },
          manufacturer: {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: SITE_NAME,
            logo: SITE_LOGO,
          },
          areaServed: {
            "@type": "Country",
            name: "Iran",
          },
        }
      : null;

  const webPageJsonLd =
    doc && seo
      ? {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: seo.title,
          description: seo.description,
          inLanguage: "fa-IR",
          isPartOf: {
            "@id": `${SITE_URL}/#website`,
          },
          about: {
            "@id": `${pageUrl}#product`,
          },
          breadcrumb: {
            "@id": `${pageUrl}#breadcrumb`,
          },
        }
      : null;

  const jsonLdList = [breadcrumbJsonLd, productJsonLd, webPageJsonLd].filter(
    Boolean
  );

// ✅ اگر متن نبود، صفحه سفید/ارور نده
  if (!id || !doc) {
    return (
      <main className="mx-auto max-w-5xl px-4 md:px-6 py-10 md:py-16 text-white">
        <article
          className="bg-black/40 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl"
          dir="rtl"
        >
          <div className="mb-6 flex justify-start">
<Link
  href="/bentonite"
  className={backBtnClass}
  style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
>
  ← بازگشت
</Link>          </div>

          <h1 className="text-2xl md:text-3xl font-bold">مشخصات محصول</h1>
          <p className="mt-3 text-white/80 leading-8">
            برای این شناسه هنوز متن مشخصات تعریف نشده:{" "}
            <span className="font-bold">{String(id)}</span>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className={backBtnClass}
              style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
            >
              بازگشت به خانه
            </Link>
          </div>

          {/* ✅ دکمه بازگشت پایین هم */}
          <div className="mt-10 flex justify-center">
<Link
  href="/bentonite"
  className={backBtnClass}
  style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
>
  ← بازگشت
</Link>
          </div>
        </article>
      </main>
    );
  }

  const tagBlue = doc.tags?.[0];  // "کاربردهای صنعت برق"
  const tagGreen = doc.tags?.[1]; // "سیستم‌های ارتینگ و صاعقه‌گیر"

  return (
    <main className="mx-auto max-w-5xl px-4 md:px-6 py-10 md:py-16 text-white">
      {jsonLdList.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdStringify(item),
          }}
        />
      ))}

      <article
        className="relative bg-black/40 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl"
        dir="rtl"
      >
        {/* ✅ دکمه بازگشت بالا */}
        <div className="absolute right-6 top-6">
<Link
  href="/bentonite"
  className={backBtnClass}
  style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
>
  ← بازگشت
</Link>
        </div>

        <header className="pt-10 text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-[1.6]">
            {doc.title}
          </h1>

          {doc.subtitle ? (
            <p className="mt-3 text-white/80 leading-8">{doc.subtitle}</p>
          ) : null}

          {/* ✅ دقیقاً مثل تصویر: (سبز) + (آبی) + (تاریخ خاکستری) */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {tagGreen ? <span className={pillGreenClass}>{tagGreen}</span> : null}
            {tagBlue ? <span className={pillBlueClass}>{tagBlue}</span> : null}
            {doc.date ? <span className={pillDateClass}>{doc.date}</span> : null}
          </div>
        </header>

        {/* ✅ تصویر محصول */}
        {doc.img ? (
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-black/10">
                <Image
                  src={doc.img}
                  alt={doc.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 420px"
                  priority
                />
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-10 space-y-6 leading-9 text-white/85">
          {doc.body.map((block, idx) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={idx}
                  className="mt-10 text-lg md:text-xl font-bold text-white"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={idx} className="list-disc pr-6 space-y-2">
                  {block.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              );
            }
            return <p key={idx}>{block.text}</p>;
          })}
        </div>

        {/* ✅ دکمه بازگشت پایین صفحه (درخواست شما) */}
        <div className="mt-12 flex justify-center">
<Link
  href="/bentonite"
  className={backBtnClass}
  style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
>
  ← بازگشت
</Link>
        </div>
      </article>
    </main>
  );
}