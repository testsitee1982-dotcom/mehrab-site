// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://example.com"; // ← دامنه سایتت (مثلاً https://raadobargh-mehrab.ir)

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // صفحه اصلی
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2024-11-01"),
      changeFrequency: "weekly",
      priority: 1,
    },

    // صفحات "چرا ما" (مطابق کامپوننت‌هایی که قبلاً ساختیم)
    {
      url: `${BASE_URL}/why-us/factory-direct`,
      lastModified: new Date("2024-11-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/why-us/iso-iec-certified`,
      lastModified: new Date("2024-11-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/why-us/on-time-delivery`,
      lastModified: new Date("2024-11-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/why-us/tech-support`,
      lastModified: new Date("2024-11-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // چند تا از مقالات فنی که تا الان با هم نوشتیم:
    {
      url: `${BASE_URL}/articles/bentonite-for-transformer-oil-polishing`,
      lastModified: new Date("2024-11-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/articles/bentonite-storage-and-handling`,
      lastModified: new Date("2024-11-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/articles/cec-moisture-specs-and-standards`,
      lastModified: new Date("2024-11-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/articles/procurement-checklist-bentonite`,
      lastModified: new Date("2024-11-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // هر صفحه مهم دیگری داشتی، به همین شکل اضافه کن:
    // {
    //   url: `${BASE_URL}/path/to/page`,
    //   lastModified: new Date("2024-11-01"),
    //   changeFrequency: "monthly",
    //   priority: 0.6,
    // },
  ];
}
