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

const VISITOR_COOKIE = "mehrab_visitor_id_v2";

const COOKIE_MAX_AGE_SECONDS =
  60 * 60 * 24 * 365 * 10;

const ONLINE_WINDOW_MINUTES = 2;

const sql = DATABASE_URL
  ? neon(DATABASE_URL)
  : null;

let initPromise: Promise<void> | null = null;

type TehranDateInfo = {
  gregorianDate: string;
  persianYear: number;
  persianMonth: number;
  persianDay: number;
  weekStart: string;
};

/**
 * تاریخ امروز تهران.
 *
 * تاریخ Gregorian فقط برای ستون DATE دیتابیس است.
 * ماه و سال آماری با تقویم شمسی ذخیره می‌شوند.
 */
function getTehranDateInfo(
  date = new Date()
): TehranDateInfo {
  const gregorianFormatter =
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Tehran",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

  const gParts =
    gregorianFormatter.formatToParts(date);

  const gYear = Number(
    gParts.find((x) => x.type === "year")
      ?.value ?? 0
  );

  const gMonth = Number(
    gParts.find((x) => x.type === "month")
      ?.value ?? 0
  );

  const gDay = Number(
    gParts.find((x) => x.type === "day")
      ?.value ?? 0
  );

  const gregorianDate =
    `${gYear}-${String(gMonth).padStart(2, "0")}-${String(
      gDay
    ).padStart(2, "0")}`;

  const persianFormatter =
    new Intl.DateTimeFormat(
      "fa-IR-u-ca-persian-nu-latn",
      {
        timeZone: "Asia/Tehran",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }
    );

  const pParts =
    persianFormatter.formatToParts(date);

  const persianYear = Number(
    pParts.find((x) => x.type === "year")
      ?.value ?? 0
  );

  const persianMonth = Number(
    pParts.find((x) => x.type === "month")
      ?.value ?? 0
  );

  const persianDay = Number(
    pParts.find((x) => x.type === "day")
      ?.value ?? 0
  );

  /**
   * PostgreSQL:
   * Sunday = 0
   * Monday = 1
   * ...
   * Saturday = 6
   *
   * ما هفته ایران را شنبه تا جمعه می‌خواهیم.
   */
  const weekdayText =
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Tehran",
      weekday: "short",
    }).format(date);

  const daysFromSaturday: Record<
    string,
    number
  > = {
    Sat: 0,
    Sun: 1,
    Mon: 2,
    Tue: 3,
    Wed: 4,
    Thu: 5,
    Fri: 6,
  };

  const offset =
    daysFromSaturday[weekdayText] ?? 0;

  /**
   * ساعت 12 UTC انتخاب شده تا تغییر timezone
   * هنگام عقب رفتن روز باعث خطای مرزی نشود.
   */
  const baseUtc = new Date(
    Date.UTC(
      gYear,
      gMonth - 1,
      gDay,
      12,
      0,
      0
    )
  );

  baseUtc.setUTCDate(
    baseUtc.getUTCDate() - offset
  );

  const weekStart =
    `${baseUtc.getUTCFullYear()}-${String(
      baseUtc.getUTCMonth() + 1
    ).padStart(2, "0")}-${String(
      baseUtc.getUTCDate()
    ).padStart(2, "0")}`;

  return {
    gregorianDate,
    persianYear,
    persianMonth,
    persianDay,
    weekStart,
  };
}

function getVisitorId(
  req: NextRequest
): string {
  const current =
    req.cookies.get(VISITOR_COOKIE)?.value;

  if (
    current &&
    /^[a-f0-9-]{20,}$/i.test(current)
  ) {
    return current;
  }

  return crypto.randomUUID();
}

/**
 * جدول‌های V2 مستقل هستند.
 *
 * بنابراین:
 * - داده قدیمی خراب وارد سیستم جدید نمی‌شود.
 * - Deploy مجدد جدول را حذف نمی‌کند.
 * - Restart شدن Vercel آمار را ریست نمی‌کند.
 */
async function initDatabase() {
  if (!sql) {
    throw new Error(
      "PostgreSQL is not configured."
    );
  }

  await sql`
    CREATE TABLE IF NOT EXISTS stats_visitors_v2 (
      visitor_id TEXT PRIMARY KEY,
      first_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS stats_daily_visits_v2 (
      visitor_id TEXT NOT NULL,
      visit_date DATE NOT NULL,
      persian_year INTEGER NOT NULL,
      persian_month INTEGER NOT NULL,
      persian_day INTEGER NOT NULL,
      first_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

      PRIMARY KEY (visitor_id, visit_date)
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS
      idx_stats_visitors_v2_last_seen
    ON stats_visitors_v2 (last_seen_at)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS
      idx_stats_daily_v2_date
    ON stats_daily_visits_v2 (visit_date)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS
      idx_stats_daily_v2_persian
    ON stats_daily_visits_v2
      (persian_year, persian_month)
  `;
}

function ensureDatabase() {
  if (!initPromise) {
    initPromise = initDatabase().catch(
      (error) => {
        /**
         * اگر initialization یک بار شکست خورد،
         * اجازه می‌دهیم درخواست بعدی دوباره تلاش کند.
         */
        initPromise = null;
        throw error;
      }
    );
  }

  return initPromise;
}

async function getStats(
  visitorId: string
): Promise<Stats> {
  if (!sql) {
    throw new Error(
      "PostgreSQL is not configured."
    );
  }

  await ensureDatabase();

  const {
    gregorianDate,
    persianYear,
    persianMonth,
    persianDay,
    weekStart,
  } = getTehranDateInfo();

  /**
   * یک درخواست SQL:
   *
   * 1. Visitor را ایجاد/Online می‌کند.
   * 2. Visitor روز جاری را فقط یک بار ثبت می‌کند.
   * 3. تمام آمار را محاسبه می‌کند.
   *
   * Refresh یا polling باعث افزایش مجدد
   * today/week/month/year نمی‌شود.
   */
  const rows = await sql`
    WITH
    upsert_visitor AS (
      INSERT INTO stats_visitors_v2 (
        visitor_id,
        first_seen_at,
        last_seen_at
      )
      VALUES (
        ${visitorId},
        NOW(),
        NOW()
      )

      ON CONFLICT (visitor_id)
      DO UPDATE
      SET last_seen_at = NOW()

      RETURNING visitor_id
    ),

    insert_today AS (
      INSERT INTO stats_daily_visits_v2 (
        visitor_id,
        visit_date,
        persian_year,
        persian_month,
        persian_day,
        first_seen_at
      )

      VALUES (
        ${visitorId},
        ${gregorianDate}::DATE,
        ${persianYear},
        ${persianMonth},
        ${persianDay},
        NOW()
      )

      ON CONFLICT (
        visitor_id,
        visit_date
      )
      DO NOTHING

      RETURNING visitor_id
    )

    SELECT

      (
        SELECT COUNT(*)
        FROM stats_visitors_v2
        WHERE
          last_seen_at >=
          NOW() -
          (
            ${ONLINE_WINDOW_MINUTES}
            || ' minutes'
          )::INTERVAL
      )::INT AS online,

      (
        SELECT COUNT(*)
        FROM stats_daily_visits_v2
        WHERE
          visit_date =
          ${gregorianDate}::DATE
      )::INT AS today,

      (
        SELECT COUNT(*)
        FROM stats_daily_visits_v2
        WHERE
          visit_date =
          ${gregorianDate}::DATE -
          INTERVAL '1 day'
      )::INT AS yesterday,

      (
        SELECT COUNT(
          DISTINCT visitor_id
        )
        FROM stats_daily_visits_v2
        WHERE
          visit_date >=
          ${weekStart}::DATE
          AND
          visit_date <=
          ${gregorianDate}::DATE
      )::INT AS week,

      (
        SELECT COUNT(
          DISTINCT visitor_id
        )
        FROM stats_daily_visits_v2
        WHERE
          persian_year =
          ${persianYear}
          AND
          persian_month =
          ${persianMonth}
      )::INT AS month,

      (
        SELECT COUNT(
          DISTINCT visitor_id
        )
        FROM stats_daily_visits_v2
        WHERE
          persian_year =
          ${persianYear}
      )::INT AS year,

      (
        SELECT COUNT(*)
        FROM stats_visitors_v2
      )::INT AS total
  `;

  const row =
    (rows[0] ?? {}) as Partial<Stats>;

  return {
    online: Number(row.online ?? 0),
    today: Number(row.today ?? 0),
    yesterday: Number(
      row.yesterday ?? 0
    ),
    week: Number(row.week ?? 0),
    month: Number(row.month ?? 0),
    year: Number(row.year ?? 0),
    total: Number(row.total ?? 0),
  };
}

function jsonResponse(
  stats: Stats,
  visitorId: string
) {
  const res = NextResponse.json(
    stats,
    {
      status: 200,
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control":
          "no-store",
      },
    }
  );

  res.cookies.set(
    VISITOR_COOKIE,
    visitorId,
    {
      httpOnly: true,
      sameSite: "lax",
      secure:
        process.env.NODE_ENV ===
        "production",
      path: "/",
      maxAge:
        COOKIE_MAX_AGE_SECONDS,
    }
  );

  return res;
}

/**
 * GET
 *
 * همین درخواست:
 * - حضور کاربر را Online می‌کند.
 * - اگر امروز هنوز ثبت نشده، یک Visit روزانه ثبت می‌کند.
 * - آمار صحیح را برمی‌گرداند.
 *
 * Refresh مجدد Visit اضافه نمی‌کند.
 */
export async function GET(
  req: NextRequest
) {
  const visitorId =
    getVisitorId(req);

  try {
    const stats =
      await getStats(visitorId);

    return jsonResponse(
      stats,
      visitorId
    );
  } catch (error) {
    console.error(
      "Stats API error:",
      error
    );

    /**
     * مهم:
     *
     * دیگر اعداد صفر جعلی برنمی‌گردانیم.
     * اگر Neon موقتاً قطع باشد HTTP 503
     * داده می‌شود و Footer باید آخرین آمار
     * معتبر خودش را حفظ کند.
     */
    return NextResponse.json(
      {
        error:
          "Statistics database is temporarily unavailable.",
      },
      {
        status: 503,
        headers: {
          "Cache-Control":
            "no-store",
        },
      }
    );
  }
}