// app/lib/articles.ts

export type Article = {
  id: string;
  slug: string;
  title: string;
  date: string;
  img: string;
  readingTime: number;
  tags: string[];
  excerpt: string;
  html: string;
};

export const articles: Article[] = [
  {
    id: "a-grounding-optimization",
    slug: "bentonite-for-substation-grounding",
    title: "چگونه بنتونیت کیفیت ارتینگ پست‌های برق را متحول می‌کند",
    date: "2025-02-12",
    img: "/images/blog/substation-grounding.png",
    readingTime: 8,
    tags: ["Grounding", "CEC", "Resistivity"],
    excerpt:
      "راهنمای عملی انتخاب و به‌کارگیری بنتونیت برای کاهش مقاومت زمین، پایداری بلندمدت و انطباق با استانداردهای IEC/IEEE در پست‌های انتقال و توزیع.",
    html: `...`,
  },

  {
    id: "a-transformer-oil",
    slug: "bentonite-for-transformer-oil-polishing",
    title: "انتخاب بنتونیت مناسب برای تصفیه و پالایش روغن ترانسفورماتور",
    date: "2025-03-08",
    img: "/images/blog/oil-polishing.png",
    readingTime: 9,
    tags: ["Oil Purification", "Dielectric", "Moisture"],
    excerpt:
      "راهنمای گام‌به‌گام انتخاب بنتونیت گرانولی برای کاهش اسیدیته، رطوبت و بهبود استقامت دی‌الکتریک روغن‌های الکتریکی.",
    html: `...`,
  },

  {
    id: "a-backfill",
    slug: "backfill-engineering-for-resistivity",
    title: "مهندسی بک‌فیل: رسیدن به مقاومت ویژه‌ی پایین با بنتونیت",
    date: "2025-04-22",
    img: "/images/blog/backfill.png",
    readingTime: 7,
    tags: ["Backfill", "Grounding", "Moisture Retention"],
    excerpt:
      "فرمولاسیون مخلوط‌های بک‌فیل بنتونیتی برای کابل‌ترنچ و میله‌ی ارت؛ مقایسه‌ی عملکرد با کربن و سیمان.",
    html: `...`,
  },

  {
    id: "a-specs-and-standards",
    slug: "cec-moisture-specs-and-standards",
    title: "CEC، رطوبت و اندازه ذره: چگونه مشخصات فنی را تفسیر کنیم؟",
    date: "2025-05-10",
    img: "/images/blog/lab-testing.png",
    readingTime: 6,
    tags: ["Specifications", "CEC", "Quality"],
    excerpt:
      "معنای عملی مقادیر CEC، رطوبت مجاز و توزیع اندازه‌ذره در بنتونیت‌های صنعتی و تاثیر آن‌ها بر عملکرد.",
    html: `...`,
  },

  {
    id: "a-procurement",
    slug: "procurement-checklist-bentonite",
    title: "چک‌لیست خرید بنتونیت برای پروژه‌های برق",
    date: "2025-06-02",
    img: "/images/blog/procurement.png",
    readingTime: 5,
    tags: ["Procurement", "QA/QC", "Logistics"],
    excerpt:
      "چک‌لیست فنی و لجستیکی: از گواهی‌ها و آزمون‌ها تا بسته‌بندی، ردیابی و شرایط نگهداری بنتونیت.",
    html: `...`,
  },

  {
    id: "a-bentonite-storage",
    slug: "bentonite-storage-and-handling",
    title: "نکات انبارداری و نگهداری بنتونیت صنعتی",
    date: "2025-07-15",
    img: "/images/blog/storage.png",
    readingTime: 6,
    tags: ["Storage", "Safety", "Logistics"],
    excerpt:
      "راهنمای انبارداری بنتونیت برای جلوگیری از جذب رطوبت، کاهش کیکینگ و حفظ کیفیت در پروژه‌های صنعتی.",
    html: `...`,
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug) || null;
}
