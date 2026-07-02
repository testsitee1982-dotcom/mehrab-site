import type { MetadataRoute } from "next";
import { articles } from "./lib/articles";
import { products } from "./lib/products";
import { SEO_PAGE_SLUGS } from "./lib/seo-pages";
import { SITE_URL } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // صفحات اصلی
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/bentonite`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/videos`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/images`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // صفحات لندینگ سئو
    ...SEO_PAGE_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.92,
    })),

    // صفحات مزیت‌ها
    {
      url: `${SITE_URL}/why-us/factory-direct`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/why-us/iso-iec-certified`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/why-us/on-time-delivery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/why-us/tech-support`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // کاربردها
    {
      url: `${SITE_URL}/applications/grounding-systems`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/applications/substation-grounding`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/applications/transformer-oil`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/applications/cable-trenching`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // محصولات
    ...products.map((product) => ({
      url: `${SITE_URL}/products/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // مقالات
    ...articles.map((article) => ({
      url: `${SITE_URL}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}