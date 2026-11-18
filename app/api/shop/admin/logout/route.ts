import { NextRequest, NextResponse } from "next/server";
import { SHOP_COOKIE,isSameOrigin } from "@/app/lib/shop-admin-auth";
import { shopNoCache } from "@/app/lib/shop-db";
export async function POST(req:NextRequest) {
  if (!isSameOrigin(req)) return NextResponse.json({error:"درخواست نامعتبر"},{status:403,headers:shopNoCache});
  const res=NextResponse.json({ok:true},{headers:shopNoCache});
  res.cookies.set(SHOP_COOKIE,"",{httpOnly:true,path:"/api/shop/admin",maxAge:0,sameSite:"strict"});
  return res;
}
