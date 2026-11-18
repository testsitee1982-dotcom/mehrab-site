import { createHmac, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";
export const SHOP_COOKIE = "mehrab_admin_session";
const TTL_SECONDS = 12 * 60 * 60;
function config() {
  const password=process.env.ADMIN_PANEL_PASSWORD || "";
  const secret=process.env.ADMIN_SESSION_SECRET || "";
  if (password.length<16 || secret.length<32) return null;
  return {password,secret};
}
function equal(a:string,b:string) {
  const x=Buffer.from(a), y=Buffer.from(b);
  return x.length===y.length && timingSafeEqual(x,y);
}
export function validateAdminPassword(password:string) {
  const c=config();
  return c!==null && equal(c.password,password);
}
function signature(expiration:string,secret:string) {
  return createHmac("sha256",secret).update(`mehrab-shop-admin-v1:${expiration}`).digest("hex");
}
export function makeAdminSession() {
  const c=config();
  if (!c) throw new Error("Admin credentials not configured");
  const expiration=String(Math.floor(Date.now()/1000)+TTL_SECONDS);
  return {token:`${expiration}.${signature(expiration,c.secret)}`,maxAge:TTL_SECONDS};
}
export function isShopAdmin(req:NextRequest) {
  const c=config();
  const token=req.cookies.get(SHOP_COOKIE)?.value;
  if (!c || !token) return false;
  const segments=token.split(".");
  if (segments.length!==2 || !/^\d{10,12}$/.test(segments[0]) || !/^[a-f0-9]{64}$/.test(segments[1])) return false;
  const expiry=Number(segments[0]);
  if (expiry<=Math.floor(Date.now()/1000) || expiry>Math.floor(Date.now()/1000)+TTL_SECONDS+60) return false;
  return equal(segments[1],signature(segments[0],c.secret));
}
export function isSameOrigin(request:NextRequest) {
  const origin=request.headers.get("origin");
  return !!origin && origin === new URL(request.url).origin;
}
