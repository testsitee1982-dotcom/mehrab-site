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

function getDateParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: STATS_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  return {
    year: Number(parts.find((p) => p.type === "year")?.value),
    month: Number(parts.find((p) => p.type === "month")?.value),
    day: Number(parts.find((p) => p.type === "day")?.value),
  };
}

function dateKey(date = new Date()) {
  const { year, month, day } = getDateParts(date);
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

function monthKey(today: string) {
  const [year, month] = today.split("-").map(Number);
  return `${year}-${pad2(month)}`;
}

function yearKey(today: string) {
  const [year] = today.split("-").map(Number);
  return String(year);
}

function weekKey(today: string) {
  const [year, month, day] = today.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
  const start = new Date(Date.UTC(date.getUTCFullYear(), 0, 1, 12, 0, 0));
  const diffDays = Math.floor(
    (date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)
  );
  const week = Math.floor(diffDays / 7) + 1;

  return `${date.getUTCFullYear()}-W${pad2(week)}`;
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
        "Cache-Control": "no-store",
      },
    }
  );
}

async function getStats(visitorId: string): Promise<Stats> {
  if (!redis) {
    throw new Error("Redis is not configured.");
  }

  const nowMs = Date.now();

  const today = dateKey();
  const yesterday = addDaysToDateKey(today, -1);

  const todaySet = `stats:day:${today}`;
  const yesterdaySet = `stats:day:${yesterday}`;
  const weekSet = `stats:week:${weekKey(today)}`;
  const monthSet = `stats:month:${monthKey(today)}`;
  const yearSet = `stats:year:${yearKey(today)}`;
  const totalSet = "stats:total";
  const onlineSet = "stats:online";

  await Promise.all([
    redis.sadd(todaySet, visitorId),
    redis.sadd(weekSet, visitorId),
    redis.sadd(monthSet, visitorId),
    redis.sadd(yearSet, visitorId),
    redis.sadd(totalSet, visitorId),
    redis.zadd(onlineSet, {
      score: nowMs,
      member: visitorId,
    }),
  ]);

  await redis.zremrangebyscore(onlineSet, 0, nowMs - ONLINE_WINDOW_MS);

  const [online, todayCount, yesterdayCount, weekCount, monthCount, yearCount, totalCount] =
    await Promise.all([
      redis.zcard(onlineSet),
      redis.scard(todaySet),
      redis.scard(yesterdaySet),
      redis.scard(weekSet),
      redis.scard(monthSet),
      redis.scard(yearSet),
      redis.scard(totalSet),
    ]);

  const total = Number(totalCount || 0);

  return {
    online: Number(online || 0),
    today: Number(todayCount || 0),
    yesterday: Number(yesterdayCount || 0),
    week: Math.min(Number(weekCount || 0), total),
    month: Math.min(Number(monthCount || 0), total),
    year: Math.min(Number(yearCount || 0), total),
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
    return errorResponse("Stats storage is not available.");
  }
}