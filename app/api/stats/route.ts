// app/api/stats/route.ts
import { neon } from "@neondatabase/serverless";
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

const DATABASE_URL =
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL ||
  process.env.STORAGE_URL;

const VISITOR_COOKIE = "mehrab_visitor_id";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365 * 10;
const ONLINE_WINDOW_MINUTES = 2;
const STATS_TIME_ZONE = process.env.STATS_TIME_ZONE || "Asia/Tehran";

if (!DATABASE_URL) {
  console.warn("Stats API: PostgreSQL DATABASE_URL is not configured.");
}

const sql = DATABASE_URL ? neon(DATABASE_URL) : null;

let initPromise: Promise<void> | null = null;

function getVisitorId(req: NextRequest) {
  const current = req.cookies.get(VISITOR_COOKIE)?.value;

  if (current && /^[a-f0-9-]{20,}$/i.test(current)) {
    return current;
  }

  return crypto.randomUUID();
}

async function initDatabase() {
  if (!sql) throw new Error("PostgreSQL is not configured.");

  await sql`
    CREATE TABLE IF NOT EXISTS stats_visitors (
      visitor_id TEXT PRIMARY KEY,
      first_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS stats_daily_visits (
      visitor_id TEXT NOT NULL,
      visit_date DATE NOT NULL,
      first_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY (visitor_id, visit_date)
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_stats_visitors_last_seen
    ON stats_visitors (last_seen_at)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS idx_stats_daily_visits_date
    ON stats_daily_visits (visit_date)
  `;
}

async function ensureDatabase() {
  if (!initPromise) {
    initPromise = initDatabase();
  }

  return initPromise;
}

async function getStats(visitorId: string): Promise<Stats> {
  if (!sql) throw new Error("PostgreSQL is not configured.");

  await ensureDatabase();

  const rows = await sql`
    WITH current_day AS (
      SELECT (NOW() AT TIME ZONE ${STATS_TIME_ZONE})::DATE AS today
    ),
    upsert_visitor AS (
      INSERT INTO stats_visitors (visitor_id, first_seen_at, last_seen_at)
      VALUES (${visitorId}, NOW(), NOW())
      ON CONFLICT (visitor_id)
      DO UPDATE SET last_seen_at = NOW()
      RETURNING visitor_id
    ),
    insert_today AS (
      INSERT INTO stats_daily_visits (visitor_id, visit_date, first_seen_at)
      SELECT ${visitorId}, today, NOW()
      FROM current_day
      ON CONFLICT (visitor_id, visit_date) DO NOTHING
      RETURNING visitor_id
    )
    SELECT
      (
        SELECT COUNT(*)
        FROM stats_visitors
        WHERE last_seen_at >= NOW() - (${ONLINE_WINDOW_MINUTES} || ' minutes')::INTERVAL
      )::INT AS online,

      (
        SELECT COUNT(*)
        FROM stats_daily_visits, current_day
        WHERE visit_date = current_day.today
      )::INT AS today,

      (
        SELECT COUNT(*)
        FROM stats_daily_visits, current_day
        WHERE visit_date = current_day.today - INTERVAL '1 day'
      )::INT AS yesterday,

      (
        SELECT COUNT(DISTINCT visitor_id)
        FROM stats_daily_visits, current_day
        WHERE visit_date >= current_day.today - INTERVAL '6 days'
          AND visit_date <= current_day.today
      )::INT AS week,

      (
        SELECT COUNT(DISTINCT visitor_id)
        FROM stats_daily_visits, current_day
        WHERE visit_date >= DATE_TRUNC('month', current_day.today)::DATE
          AND visit_date <= current_day.today
      )::INT AS month,

      (
        SELECT COUNT(DISTINCT visitor_id)
        FROM stats_daily_visits, current_day
        WHERE visit_date >= DATE_TRUNC('year', current_day.today)::DATE
          AND visit_date <= current_day.today
      )::INT AS year,

      (
        SELECT COUNT(*)
        FROM stats_visitors
      )::INT AS total
  `;

  const row = rows[0] as Stats;

  return {
    online: Number(row.online || 0),
    today: Number(row.today || 0),
    yesterday: Number(row.yesterday || 0),
    week: Number(row.week || 0),
    month: Number(row.month || 0),
    year: Number(row.year || 0),
    total: Number(row.total || 0),
  };
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

export async function GET(req: NextRequest) {
  const visitorId = getVisitorId(req);

  try {
    const stats = await getStats(visitorId);
    return jsonResponse(stats, visitorId);
  } catch (error) {
    console.error("Stats API error:", error);

    return NextResponse.json(
      {
        error: "Stats storage is not available. Check Neon/PostgreSQL environment variables.",
        online: 0,
        today: 0,
        yesterday: 0,
        week: 0,
        month: 0,
        year: 0,
        total: 0,
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}