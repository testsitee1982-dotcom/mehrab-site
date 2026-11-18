/** Independent commerce tables. NEVER drop, rename, or migrate stats_* tables. */
import { neon } from "@neondatabase/serverless";
import { products } from "./products";

const databaseUrl = process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL ||
  process.env.POSTGRES_URL_NON_POOLING || process.env.DATABASE_URL || process.env.STORAGE_URL;

export const shopSql = databaseUrl ? neon(databaseUrl) : null;
let initialized: Promise<void> | undefined;

async function createShopTables() {
  if (!shopSql) throw new Error("Shop requires the existing Neon PostgreSQL connection.");
  await shopSql`
    CREATE TABLE IF NOT EXISTS shop_inventory_v1 (
      product_id TEXT PRIMARY KEY,
      is_available BOOLEAN NOT NULL DEFAULT TRUE,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await shopSql`
    CREATE TABLE IF NOT EXISTS shop_orders_v1 (
      order_code TEXT PRIMARY KEY,
      customer_name TEXT NOT NULL,
      customer_phone TEXT NOT NULL,
      customer_address TEXT NOT NULL DEFAULT '',
      customer_note TEXT NOT NULL DEFAULT '',
      items JSONB NOT NULL,
      total_toman BIGINT NOT NULL CHECK (total_toman > 0),
      status TEXT NOT NULL DEFAULT 'awaiting_receipt'
        CHECK (status IN ('awaiting_receipt','pending_review','approved','rejected')),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      receipt_uploaded_at TIMESTAMPTZ,
      decided_at TIMESTAMPTZ,
      rejection_reason TEXT
    )
  `;
  await shopSql`
    CREATE TABLE IF NOT EXISTS shop_receipts_v1 (
      order_code TEXT PRIMARY KEY REFERENCES shop_orders_v1(order_code) ON DELETE CASCADE,
      mime_type TEXT NOT NULL,
      receipt_bytes BYTEA NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await shopSql`
    CREATE TABLE IF NOT EXISTS shop_order_history_v1 (
      id BIGSERIAL PRIMARY KEY,
      order_code TEXT NOT NULL REFERENCES shop_orders_v1(order_code) ON DELETE CASCADE,
      event TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await shopSql`CREATE INDEX IF NOT EXISTS idx_shop_orders_created_v1 ON shop_orders_v1(created_at DESC)`;
  for (const product of products) {
    await shopSql`INSERT INTO shop_inventory_v1 (product_id, is_available)
      VALUES (${product.id}, TRUE) ON CONFLICT (product_id) DO NOTHING`;
  }
}

export async function ensureShopDatabase() {
  if (!initialized) initialized = createShopTables().catch(err => {
    initialized = undefined;
    throw err;
  });
  return initialized;
}

export async function getShopAvailability(): Promise<Record<string, boolean>> {
  await ensureShopDatabase();
  const rows = await shopSql!`SELECT product_id, is_available FROM shop_inventory_v1`;
  const result: Record<string, boolean> = {};
  for (const row of rows) result[String(row.product_id)] = row.is_available === true;
  return result;
}

export const shopNoCache = {"Cache-Control": "no-store", "X-Content-Type-Options": "nosniff"};
