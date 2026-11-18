/**
 * Legacy endpoint used to accept arbitrary client-side prices and email orders.
 * Disabled to prevent false confirmations; use /api/shop/order (DB-backed) instead.
 */
import { NextResponse } from "next/server";
export async function POST() {
  return NextResponse.json(
    {ok:false,error:"مسیر قدیمی ثبت سفارش غیرفعال است؛ از سبد خرید سایت استفاده کنید."},
    {status:410,headers:{"Cache-Control":"no-store"}},
  );
}
