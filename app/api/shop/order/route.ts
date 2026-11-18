import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { z } from "zod";
import { products } from "@/app/lib/products";
import { ensureShopDatabase, shopNoCache, shopSql } from "@/app/lib/shop-db";
import { paymentReady } from "@/app/lib/shop-payment";
import { rateLimit } from "@/app/lib/rateLimit";
export const runtime = "nodejs";

const requestSchema = z.object({
  customer: z.object({
    name: z.string().trim().min(3).max(120),
    phone: z.string().trim().regex(/^(?:\+98|0)?9\d{9}$/),
    address: z.string().trim().min(8).max(1000),
    note: z.string().trim().max(1000).optional().default(""),
  }),
  items: z.array(z.object({ id: z.string(), qty: z.number().int().min(1).max(100) })).min(1).max(8),
});

export async function POST(request: NextRequest) {
  const client = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`shop-create:${client}`, 8, 60 * 60 * 1000).ok) {
    return NextResponse.json({error: "تعداد درخواست‌ها بیش از حد مجاز است"}, {status: 429, headers: shopNoCache});
  }
  if (!paymentReady) {
    return NextResponse.json({error: "نام صاحب حساب هنوز در تنظیمات فروشگاه ثبت نشده است"}, {status: 503, headers: shopNoCache});
  }
  let input;
  try {
    input = requestSchema.parse(await request.json());
  } catch {
    return NextResponse.json({error: "اطلاعات سفارش ناقص یا نامعتبر است"}, {status: 400, headers: shopNoCache});
  }
  if (new Set(input.items.map(x => x.id)).size !== input.items.length) {
    return NextResponse.json({error: "اقلام تکراری در سفارش وجود دارد"}, {status: 400, headers: shopNoCache});
  }
  try {
    await ensureShopDatabase();
    const chosen = input.items.map(x => {
      const p = products.find(p => p.id === x.id);
      if (!p) throw new Error("UNKNOWN_PRODUCT");
      return {id: p.id, name: p.name, qty: x.qty, price: p.price, lineTotal: p.price * x.qty};
    });
    const available = await shopSql!`SELECT product_id, is_available FROM shop_inventory_v1`;
    const flags = new Map(available.map(row => [String(row.product_id), row.is_available === true]));
    if (chosen.some(item => flags.get(item.id) !== true)) {
      return NextResponse.json({error: "یکی از کالاها ناموجود شده است. سبد را اصلاح کنید."}, {status: 409, headers: shopNoCache});
    }
    const total = chosen.reduce((sum,x) => sum + x.lineTotal, 0);
    const code = `MRB-${randomBytes(12).toString("hex").toUpperCase()}`;
    const {name,phone,address,note} = input.customer;
    await shopSql!`
      INSERT INTO shop_orders_v1 (order_code, customer_name, customer_phone, customer_address, customer_note, items, total_toman)
      VALUES (${code}, ${name}, ${phone}, ${address}, ${note}, ${JSON.stringify(chosen)}::jsonb, ${total})
    `;
    await shopSql!`INSERT INTO shop_order_history_v1 (order_code,event) VALUES (${code},'created')`;
    return NextResponse.json({ok:true,code,total, status:"awaiting_receipt"},{status:201,headers:shopNoCache});
  } catch (err) {
    if ((err as Error).message === "UNKNOWN_PRODUCT") return NextResponse.json({error:"کالای نامعتبر"},{status:400, headers:shopNoCache});
    console.error("Shop order creation failed",err);
    return NextResponse.json({error:"ثبت سفارش انجام نشد؛ دوباره تلاش کنید"},{status:503,headers:shopNoCache});
  }
}
