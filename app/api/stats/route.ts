// app/api/stats/route.ts
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const redisUrl = process.env.KV_REST_API_URL;
const redisToken = process.env.KV_REST_API_TOKEN;

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function dateKey(d = new Date()) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function addDays(d: Date, days: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
}

function getRedis() {
  if (!redisUrl || !redisToken) return null;

  return new Redis({
    url: redisUrl,
    token: redisToken,
  });
}

export async function GET(req: NextRequest) {
  const redis = getRedis();

  if (!redis) {
    return NextResponse.json(
      { error: "Redis ENV variables are missing" },
      { status: 500 }
    );
  }

  const now = new Date();
  const nowMs = Date.now();

  let visitorId = req.cookies.get("mehrab_visitor_id")?.value;

  if (!visitorId) {
    visitorId = crypto.randomUUID();
  }

  const today = dateKey(now);
  const yesterday = dateKey(addDays(now, -1));

  const todayKey = `stats:day:${today}`;
  const yesterdayKey = `stats:day:${yesterday}`;
  const totalKey = "stats:total";
  const onlineKey = "stats:online";

  await Promise.all([
    redis.sadd(todayKey, visitorId),
    redis.sadd(totalKey, visitorId),
    redis.expire(todayKey, 60 * 60 * 24 * 40),
    redis.zadd(onlineKey, {
      score: nowMs,
      member: visitorId,
    }),
  ]);

  await redis.zremrangebyscore(onlineKey, 0, nowMs - 2 * 60 * 1000);

  const weekKeys = Array.from({ length: 7 }, (_, i) =>
    `stats:day:${dateKey(addDays(now, -i))}`
  );

  const monthKeys = Array.from({ length: now.getDate() }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth(), i + 1);
    return `stats:day:${dateKey(d)}`;
  });

  const yearKeys = Array.from({ length: 366 }, (_, i) => {
    const d = new Date(now.getFullYear(), 0, i + 1);
    if (d.getFullYear() !== now.getFullYear()) return null;
    return `stats:day:${dateKey(d)}`;
  }).filter((key): key is string => Boolean(key));

  const [online, todayCount, yesterdayCount, totalCount, ...restCounts] =
    await Promise.all([
      redis.zcard(onlineKey),
      redis.scard(todayKey),
      redis.scard(yesterdayKey),
      redis.scard(totalKey),
      ...weekKeys.map((key) => redis.scard(key)),
      ...monthKeys.map((key) => redis.scard(key)),
      ...yearKeys.map((key) => redis.scard(key)),
    ]);

  const weekCounts = restCounts.slice(0, weekKeys.length);

  const monthCounts = restCounts.slice(
    weekKeys.length,
    weekKeys.length + monthKeys.length
  );

  const yearCounts = restCounts.slice(weekKeys.length + monthKeys.length);

  const week = weekCounts.reduce((sum, value) => sum + Number(value || 0), 0);
  const month = monthCounts.reduce((sum, value) => sum + Number(value || 0), 0);
  const year = yearCounts.reduce((sum, value) => sum + Number(value || 0), 0);

  const res = NextResponse.json(
    {
      online: Number(online || 0),
      today: Number(todayCount || 0),
      yesterday: Number(yesterdayCount || 0),
      week,
      month,
      year,
      total: Number(totalCount || 0),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );

  res.cookies.set("mehrab_visitor_id", visitorId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  });

  return res;
}