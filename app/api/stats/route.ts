// app/api/stats/route.ts
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Stats = {
  online: number;
  today: number;
  yesterday: number;
  week: number;
  month: number;
  year: number;
  total: number;
};

const redisUrl =
  process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;

const redisToken =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const redis =
  redisUrl && redisToken
    ? new Redis({
        url: redisUrl,
        token: redisToken,
      })
    : null;

const VISITOR_COOKIE = "mehrab_visitor_id";
const ONLINE_WINDOW_MS = 2 * 60 * 1000;
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365 * 10;
const STATS_TIME_ZONE = process.env.STATS_TIME_ZONE || "Asia/Tehran";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function getDateParts(date: Date, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = Number(parts.find((p) => p.type === "year")?.value);
  const month = Number(parts.find((p) => p.type === "month")?.value);
  const day = Number(parts.find((p) => p.type === "day")?.value);

  return { year, month, day };
}

function dateKey(date = new Date()) {
  const { year, month, day } = getDateParts(date, STATS_TIME_ZONE);
  return `${year}-${pad2(month)}-${pad2(day)}`;
}

function addDaysToDateKey(key: string, days: number) {
  const [year, month, day] = key.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  date.setUTCDate(date.getUTCDate() + days);

  return `${date.getUTCFullYear()}-${pad2(date.getUTCMonth() + 1)}-${pad2(
    date.getUTCDate()
  )}`;
}

function getDayKeysForLastDays(todayKey: string, days: number) {
  return Array.from(
    { length: days },
    (_, i) => `stats:day:${addDaysToDateKey(todayKey, -i)}`
  );
}

function getDayKeysForCurrentMonth(todayKey: string) {
  const [year, month, day] = todayKey.split("-").map(Number);

  return Array.from(
    { length: day },
    (_, i) => `stats:day:${year}-${pad2(month)}-${pad2(i + 1)}`
  );
}

function getDayKeysForCurrentYear(todayKey: string) {
  const [year, currentMonth, currentDay] = todayKey.split("-").map(Number);
  const keys: string[] = [];

  for (let month = 1; month <= currentMonth; month += 1) {
    const lastDay =
      month === currentMonth
        ? currentDay
        : new Date(Date.UTC(year, month, 0)).getUTCDate();

    for (let day = 1; day <= lastDay; day += 1) {
      keys.push(`stats:day:${year}-${pad2(month)}-${pad2(day)}`);
    }
  }

  return keys;
}

async function uniqueCountFromRedis(redisClient: Redis, keys: string[]) {
  if (keys.length === 0) return 0;

  const all = new Set<string>();

  for (const key of keys) {
    const members = await redisClient.smembers(key);
    for (const member of members || []) {
      all.add(String(member));
    }
  }

  return all.size;
}

function getVisitorId(req: NextRequest) {
  const current = req.cookies.get(VISITOR_COOKIE)?.value;

  if (current && /^[a-f0-9-]{20,}$/i.test(current)) {
    return current;
  }

  return crypto.randomUUID();
}

function jsonResponse(stats: Stats, visitorId: string) {
  const res = NextResponse.json(stats, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "Surrogate-Control": "no-store",
    },
  });

  res.cookies.set(VISITOR_COOKIE, visitorId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE_SECONDS,
  });

  return res;
}

function errorResponse(message: string, status = 500) {
  return NextResponse.json(
    {
      error: message,
      online: 0,
      today: 0,
      yesterday: 0,
      week: 0,
      month: 0,
      year: 0,
      total: 0,
    },
    {
      status,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    }
  );
}

async function getStats(visitorId: string): Promise<Stats> {
  if (!redis) {
    throw new Error(
      "Redis is not configured. Set KV_REST_API_URL and KV_REST_API_TOKEN in Vercel Environment Variables."
    );
  }

  const nowMs = Date.now();
  const today = dateKey(new Date());
  const yesterday = addDaysToDateKey(today, -1);

  const todayKey = `stats:day:${today}`;
  const yesterdayKey = `stats:day:${yesterday}`;
  const totalKey = "stats:total";
  const onlineKey = "stats:online";

  await Promise.all([
    redis.sadd(todayKey, visitorId),
    redis.sadd(totalKey, visitorId),
    redis.zadd(onlineKey, {
      score: nowMs,
      member: visitorId,
    }),
  ]);

  await redis.zremrangebyscore(onlineKey, 0, nowMs - ONLINE_WINDOW_MS);

  const weekKeys = getDayKeysForLastDays(today, 7);
  const monthKeys = getDayKeysForCurrentMonth(today);
  const yearKeys = getDayKeysForCurrentYear(today);

  const [online, todayCount, yesterdayCount, totalCount, week, month, year] =
    await Promise.all([
      redis.zcard(onlineKey),
      redis.scard(todayKey),
      redis.scard(yesterdayKey),
      redis.scard(totalKey),
      uniqueCountFromRedis(redis, weekKeys),
      uniqueCountFromRedis(redis, monthKeys),
      uniqueCountFromRedis(redis, yearKeys),
    ]);

  const total = Number(totalCount || 0);

  return {
    online: Number(online || 0),
    today: Number(todayCount || 0),
    yesterday: Number(yesterdayCount || 0),
    week: Math.min(Number(week || 0), total),
    month: Math.min(Number(month || 0), total),
    year: Math.min(Number(year || 0), total),
    total,
  };
}

export async function GET(req: NextRequest) {
  const visitorId = getVisitorId(req);

  try {
    const stats = await getStats(visitorId);
    return jsonResponse(stats, visitorId);
  } catch (error) {
    console.error("Stats API error:", error);

    return errorResponse(
      "Stats storage is not available. Check Redis/Upstash environment variables in Vercel."
    );
  }
}