// SSR metadata for Torob crawler. No JavaScript required.
// Availability is resolved from the existing Neon shop inventory.
import type { Product } from "./products";

export function getTorobMetaTags(product: Product, inStock: boolean): Record<string, string> {
  const meta: Record<string, string> = {
    product_price: String(product.price),
    availability: inStock ? "instock" : "outofstock",
    product_name: product.name,
    product_id: product.id,
  };
  // Do not claim a warranty unless the product explicitly has one.
  if (product.guarantee?.trim()) {
    meta.guarantee = product.guarantee.trim();
  }
  return meta;
}
