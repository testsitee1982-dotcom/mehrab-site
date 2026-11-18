import { NextRequest, NextResponse } from "next/server";
import { isShopAdmin } from "@/app/lib/shop-admin-auth";
import { ensureShopDatabase, shopNoCache, shopSql } from "@/app/lib/shop-db";
export const runtime="nodejs";
export const dynamic="force-dynamic";
export async function GET(req:NextRequest,context:{params:Promise<{code:string}>}) {
  if (!isShopAdmin(req)) return NextResponse.json({error:"دسترسی غیرمجاز"},{status:401,headers:shopNoCache});
  const {code}=await context.params;
  if (!/^MRB-[A-F0-9]{24}$/.test(code)) return NextResponse.json({error:"کد نامعتبر"},{status:400,headers:shopNoCache});
  try {
    await ensureShopDatabase();
    const rows=await shopSql!`SELECT mime_type,encode(receipt_bytes,'base64') AS image_base64 FROM shop_receipts_v1 WHERE order_code=${code} LIMIT 1`;
    if (!rows.length) return NextResponse.json({error:"رسید پیدا نشد"},{status:404,headers:shopNoCache});
    const image=Buffer.from(String(rows[0].image_base64),"base64");
    return new NextResponse(new Uint8Array(image),{status:200,headers:{...shopNoCache,"Content-Type":String(rows[0].mime_type),"Content-Disposition":"inline; filename=receipt","Content-Security-Policy":"default-src 'none'; sandbox"}});
  } catch {return NextResponse.json({error:"دریافت رسید ناموفق بود"},{status:503,headers:shopNoCache});}
}
