import { NextRequest, NextResponse } from "next/server";
import { ensureShopDatabase, shopNoCache, shopSql, getShopAvailability } from "@/app/lib/shop-db";
import { isSameOrigin, isShopAdmin } from "@/app/lib/shop-admin-auth";
import { products } from "@/app/lib/products";
export const runtime="nodejs";
export const dynamic="force-dynamic";
export async function GET(req:NextRequest) {
  if (!isShopAdmin(req)) return NextResponse.json({error:"ورود مدیر لازم است"},{status:401,headers:shopNoCache});
  try {
    await ensureShopDatabase();
    const [orders, availability] = await Promise.all([
      shopSql!`SELECT order_code,customer_name,customer_phone,customer_address,customer_note,items,total_toman::text AS total,
      status,created_at,receipt_uploaded_at,decided_at,rejection_reason
      FROM shop_orders_v1 ORDER BY created_at DESC LIMIT 100`,
      getShopAvailability(),
    ]);
    return NextResponse.json({orders,availability,products:products.map(({id,name,price})=>({id,name,price}))},{headers:shopNoCache});
  } catch {return NextResponse.json({error:"پایگاه داده در دسترس نیست"},{status:503,headers:shopNoCache});}
}
export async function POST(req:NextRequest) {
  if (!isShopAdmin(req)) return NextResponse.json({error:"ورود مدیر لازم است"},{status:401,headers:shopNoCache});
  if (!isSameOrigin(req)) return NextResponse.json({error:"درخواست نامعتبر"},{status:403,headers:shopNoCache});
  const body=await req.json().catch(()=>({}));
  try {
    await ensureShopDatabase();
    if (body?.action === "availability") {
      if (typeof body.productId!=="string" || !products.some(p=>p.id===body.productId) || typeof body.available!=="boolean") return NextResponse.json({error:"محصول یا وضعیت نامعتبر"},{status:400,headers:shopNoCache});
      await shopSql!`UPDATE shop_inventory_v1 SET is_available=${body.available},updated_at=NOW() WHERE product_id=${body.productId}`;
      return NextResponse.json({ok:true},{headers:shopNoCache});
    }
    if (body?.action === "review") {
      const code=body.code;
      if (typeof code!=="string" || !/^MRB-[A-F0-9]{24}$/.test(code) || !["approved","rejected"].includes(body.status)) return NextResponse.json({error:"اطلاعات تصمیم نامعتبر"},{status:400,headers:shopNoCache});
      const reason=typeof body.reason==="string" ? body.reason.trim().slice(0,500) : "";
      const rows=await shopSql!`
        WITH reviewed AS (
          UPDATE shop_orders_v1
            SET status=${body.status}, decided_at=NOW(), rejection_reason=${body.status==="rejected" ? reason : null}
          WHERE order_code=${code} AND status='pending_review' AND receipt_uploaded_at IS NOT NULL
          RETURNING order_code
        ), history AS (
          INSERT INTO shop_order_history_v1(order_code,event)
          SELECT order_code,${body.status} FROM reviewed RETURNING order_code
        ) SELECT order_code FROM history
      `;
      if (!rows.length) return NextResponse.json({error:"سفارش در وضعیت در انتظار بررسی نیست"},{status:409,headers:shopNoCache});
      return NextResponse.json({ok:true},{headers:shopNoCache});
    }
    return NextResponse.json({error:"درخواست ناشناخته"},{status:400,headers:shopNoCache});
  } catch(err) {
    console.error("Shop admin error",err);
    return NextResponse.json({error:"ذخیره تغییرات امکان‌پذیر نشد"},{status:503,headers:shopNoCache});
  }
}
