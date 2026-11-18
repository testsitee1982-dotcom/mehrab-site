import { NextResponse } from "next/server";
import { ensureShopDatabase, shopNoCache, shopSql } from "@/app/lib/shop-db";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET(_: Request, context: {params: Promise<{code:string}>}) {
  const {code} = await context.params;
  if (!/^MRB-[A-F0-9]{24}$/.test(code)) return NextResponse.json({error:"کد پیگیری نامعتبر"},{status:400,headers:shopNoCache});
  try {
    await ensureShopDatabase();
    const rows = await shopSql!`SELECT order_code, total_toman::text AS total, status, created_at, receipt_uploaded_at, decided_at, rejection_reason
      FROM shop_orders_v1 WHERE order_code = ${code} LIMIT 1`;
    if (!rows.length) return NextResponse.json({error:"سفارشی با این کد یافت نشد"},{status:404,headers:shopNoCache});
    const timeline = await shopSql!`SELECT event, created_at FROM shop_order_history_v1 WHERE order_code = ${code} ORDER BY id ASC`;
    return NextResponse.json({order:rows[0],timeline},{headers:shopNoCache});
  } catch { return NextResponse.json({error:"سامانه پیگیری موقتاً در دسترس نیست"},{status:503,headers:shopNoCache}); }
}
