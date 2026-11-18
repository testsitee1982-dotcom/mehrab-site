import { NextRequest, NextResponse } from "next/server";
import { SHOP_COOKIE, makeAdminSession, validateAdminPassword, isSameOrigin } from "@/app/lib/shop-admin-auth";
import { shopNoCache } from "@/app/lib/shop-db";
import { rateLimit } from "@/app/lib/rateLimit";
export const runtime="nodejs";
export async function POST(req:NextRequest) {
  if (!isSameOrigin(req)) return NextResponse.json({error:"درخواست نامعتبر"},{status:403,headers:shopNoCache});
  const ip=req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`admin-login:${ip}`,5,15*60*1000).ok) return NextResponse.json({error:"تلاش‌های ورود بیش از حد مجاز است"},{status:429,headers:shopNoCache});
  const data=await req.json().catch(()=>({}));
  if (!data || typeof data.password!=="string" || !validateAdminPassword(data.password)) return NextResponse.json({error:"رمز مدیریت نادرست است یا تنظیم نشده"},{status:401,headers:shopNoCache});
  const {token,maxAge}=makeAdminSession();
  const res=NextResponse.json({ok:true},{headers:shopNoCache});
  res.cookies.set(SHOP_COOKIE,token,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"strict",path:"/api/shop/admin",maxAge});
  return res;
}
