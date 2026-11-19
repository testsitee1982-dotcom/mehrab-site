import type { MetadataRoute } from "next";
import { products } from "@/app/lib/products";
import { SITE_URL } from "@/app/lib/seo";

// Send https://www.barghemehrab.net/shop/sitemap.xml to Torob.
export default function sitemap(): MetadataRoute.Sitemap {
  return products.map((product) => ({
    url: `${SITE_URL}/shop/${product.id}`,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));
}
