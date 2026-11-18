import { NextResponse } from "next/server";
import { getShopAvailability, shopNoCache } from "@/app/lib/shop-db";
import { paymentInfo, paymentReady } from "@/app/lib/shop-payment";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export async function GET() {
  try {
    const availability = await getShopAvailability();
    return NextResponse.json({ availability, payment: paymentInfo, paymentReady }, { headers: shopNoCache });
  } catch {
    return NextResponse.json({ error: "سامانه فروش موقتاً در دسترس نیست" }, { status: 503, headers: shopNoCache });
  }
}
