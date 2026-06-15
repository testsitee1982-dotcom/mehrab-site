import type { MetadataRoute } from "next";
import { articles } from "./lib/articles";
import { products } from "./lib/products";

const BASE_URL = "https://www.barghemehrab.net";
const lastModified = new Date();

const staticPages = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/videos", priority: 0.75, changeFrequency: "weekly" },
  { path: "/images", priority: 0.75, changeFrequency: "weekly" },

  { path: "/why-us/factory-direct", priority: 0.8, changeFrequency: "monthly" },
  { path: "/why-us/iso-iec-certified", priority: 0.8, changeFrequency: "monthly" },
  { path: "/why-us/on-time-delivery", priority: 0.8, changeFrequency: "monthly" },
  { path: "/why-us/tech-support", priority: 0.8, changeFrequency: "monthly" },

  { path: "/applications/grounding-systems", priority: 0.85, changeFrequency: "monthly" },
  { path: "/applications/substation-grounding", priority: 0.85, changeFrequency: "monthly" },
  { path: "/applications/transformer-oil", priority: 0.85, changeFrequency: "monthly" },
  { path: "/applications/cable-trenching", priority: 0.85, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map((page) => ({
      url: `${BASE_URL}${page.path}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),

    ...products.map((product) => ({
      url: `${BASE_URL}/products/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    ...articles.map((article) => ({
      url: `${BASE_URL}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
