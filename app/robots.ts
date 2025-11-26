// app/robots.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://example.com"; // ← دامنه واقعی (مثل بالا)

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // اگر مسیری هست که نمی‌خوای ایندکس بشه، اینجا disallow کن:
      // مثلاً صفحه تست:
      disallow: ["/debug-ok"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
