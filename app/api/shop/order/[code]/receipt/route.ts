import { NextRequest, NextResponse } from "next/server";
import { ensureShopDatabase, shopNoCache, shopSql } from "@/app/lib/shop-db";
import { rateLimit } from "@/app/lib/rateLimit";
export const runtime = "nodejs";
const MAX_BYTES = 2 * 1024 * 1024;

function actualMime(bytes: Buffer): string | null {
  if (bytes.length >= 3 && bytes.subarray(0,3).equals(Buffer.from([0xff,0xd8,0xff]))) return "image/jpeg";
  if (bytes.length >= 8 && bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) return "image/png";
  if (bytes.length >= 12 && bytes.toString("ascii",0,4)==="RIFF" && bytes.toString("ascii",8,12)==="WEBP") return "image/webp";
  return null;
}

export async function POST(req: NextRequest, context: {params:Promise<{code:string}>}) {
  const {code} = await context.params;
  if (!/^MRB-[A-F0-9]{24}$/.test(code)) return NextResponse.json({error:"کد پیگیری نامعتبر"},{status:400,headers:shopNoCache});
  const client = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`shop-upload:${client}`, 12, 60*60*1000).ok) return NextResponse.json({error:"تعداد ارسال‌ها بیش از حد مجاز است"},{status:429,headers:shopNoCache});
  const length=Number(req.headers.get("content-length")||0);
  if (length>MAX_BYTES+400000) return NextResponse.json({error:"حجم فایل باید کمتر از ۲ مگابایت باشد"},{status:413,headers:shopNoCache});
  try {
    const form = await req.formData();
    const file = form.get("receipt");
    if (!(file instanceof File) || file.size<200 || file.size>MAX_BYTES) return NextResponse.json({error:"تصویر رسید با حجم حداکثر ۲ مگابایت لازم است"},{status:400,headers:shopNoCache});
    const bytes=Buffer.from(await file.arrayBuffer());
    const mime=actualMime(bytes);
    if (!mime) return NextResponse.json({error:"فقط فایل‌های واقعی JPG، PNG یا WebP مجاز هستند"},{status:400,headers:shopNoCache});
    const base64=bytes.toString("base64");
    await ensureShopDatabase();
    const updated=await shopSql!`
      WITH eligible AS (
        UPDATE shop_orders_v1 SET status='pending_review', receipt_uploaded_at=NOW(), decided_at=NULL, rejection_reason=NULL
        WHERE order_code=${code} AND status IN ('awaiting_receipt','rejected')
        RETURNING order_code
      ), saved AS (
        INSERT INTO shop_receipts_v1(order_code,mime_type,receipt_bytes,updated_at)
        SELECT order_code,${mime},DECODE(${base64},'base64'),NOW() FROM eligible
        ON CONFLICT(order_code) DO UPDATE SET mime_type=EXCLUDED.mime_type,receipt_bytes=EXCLUDED.receipt_bytes,updated_at=NOW()
        RETURNING order_code
      ), history AS (
        INSERT INTO shop_order_history_v1(order_code,event)
        SELECT order_code,'receipt_uploaded' FROM saved RETURNING order_code
      ) SELECT order_code FROM history
    `;
    if (!updated.length) return NextResponse.json({error:"این سفارش یافت نشد یا امکان بارگذاری رسید ندارد"},{status:409,headers:shopNoCache});
    return NextResponse.json({ok:true,status:"pending_review"},{headers:shopNoCache});
  } catch(err) {
    console.error("Shop receipt upload failed",err);
    return NextResponse.json({error:"ذخیره رسید ممکن نشد؛ دوباره تلاش کنید"},{status:503,headers:shopNoCache});
  }
}
