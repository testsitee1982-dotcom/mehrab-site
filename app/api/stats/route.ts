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

type TehranDateInfo = {
  gregorianDate: string;
  persianYear: number;
  persianMonth: number;
  persianDay: number;
  weekStart: string;
};

const DATABASE_URL =
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL ||
  process.env.STORAGE_URL;

const VISITOR_COOKIE = "mehrab_visitor_id_v3";

const COOKIE_MAX_AGE_SECONDS =
  60 * 60 * 24 * 365 * 10;

const sql = DATABASE_URL
  ? neon(DATABASE_URL)
  : null;

let initPromise: Promise<void> | null = null;

/**
 * تاریخ جاری بر اساس Asia/Tehran.
 *
 * visit_date:
 * تاریخ میلادی معادل روز تهران برای ستون DATE.
 *
 * persianYear / Month / Day:
 * برای محاسبه ماه و سال شمسی.
 *
 * weekStart:
 * شنبه هفته جاری.
 */
function getTehranDateInfo(
  date: Date
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
    gParts.find(
      (part) => part.type === "year"
    )?.value ?? 0
  );

  const gMonth = Number(
    gParts.find(
      (part) => part.type === "month"
    )?.value ?? 0
  );

  const gDay = Number(
    gParts.find(
      (part) => part.type === "day"
    )?.value ?? 0
  );

  const gregorianDate =
    `${gYear}-${String(gMonth).padStart(
      2,
      "0"
    )}-${String(gDay).padStart(
      2,
      "0"
    )}`;

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
    pParts.find(
      (part) => part.type === "year"
    )?.value ?? 0
  );

  const persianMonth = Number(
    pParts.find(
      (part) => part.type === "month"
    )?.value ?? 0
  );

  const persianDay = Number(
    pParts.find(
      (part) => part.type === "day"
    )?.value ?? 0
  );

  /**
   * هفته ایران:
   *
   * شنبه = روز اول هفته
   * جمعه = روز آخر هفته
   */
  const weekday =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone: "Asia/Tehran",
        weekday: "short",
      }
    ).format(date);

  const daysFromSaturday:
    Record<string, number> = {
      Sat: 0,
      Sun: 1,
      Mon: 2,
      Tue: 3,
      Wed: 4,
      Thu: 5,
      Fri: 6,
    };

  const offset =
    daysFromSaturday[weekday] ?? 0;

  /**
   * ساعت 12 UTC برای جلوگیری از
   * جابه‌جایی ناخواسته روز در محاسبه شنبه.
   */
  const weekStartDate =
    new Date(
      Date.UTC(
        gYear,
        gMonth - 1,
        gDay,
        12,
        0,
        0
      )
    );

  weekStartDate.setUTCDate(
    weekStartDate.getUTCDate() -
      offset
  );

  const weekStart =
    `${weekStartDate.getUTCFullYear()}-${String(
      weekStartDate.getUTCMonth() + 1
    ).padStart(2, "0")}-${String(
      weekStartDate.getUTCDate()
    ).padStart(2, "0")}`;

  return {
    gregorianDate,
    persianYear,
    persianMonth,
    persianDay,
    weekStart,
  };
}

/**
 * شناسه دائمی Visitor.
 *
 * تا زمانی که Cookie مرورگر حذف نشده باشد،
 * کاربر همان visitor_id را خواهد داشت.
 */
function getVisitorId(
  req: NextRequest
): string {
  const current =
    req.cookies.get(
      VISITOR_COOKIE
    )?.value;

  if (
    current &&
    /^[a-f0-9-]{20,}$/i.test(
      current
    )
  ) {
    return current;
  }

  return crypto.randomUUID();
}

/**
 * جداول V3.
 *
 * stats_visitors_v3:
 * وضعیت Visitor و Online و آخرین Visit معتبر.
 *
 * stats_visits_v3:
 * هر رکورد = یک Visit معتبر.
 */
async function initDatabase() {
  if (!sql) {
    throw new Error(
      "PostgreSQL is not configured."
    );
  }

  await sql`
    CREATE TABLE IF NOT EXISTS stats_visitors_v3 (
      visitor_id TEXT PRIMARY KEY,

      first_seen_at TIMESTAMPTZ
        NOT NULL,

      last_seen_at TIMESTAMPTZ
        NOT NULL,

      last_counted_visit_at
        TIMESTAMPTZ
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS stats_visits_v3 (
      id BIGSERIAL PRIMARY KEY,

      visitor_id TEXT
        NOT NULL,

      visit_time TIMESTAMPTZ
        NOT NULL,

      visit_date DATE
        NOT NULL,

      persian_year INTEGER
        NOT NULL,

      persian_month INTEGER
        NOT NULL,

      persian_day INTEGER
        NOT NULL
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS
      idx_stats_visitors_v3_last_seen
    ON stats_visitors_v3 (
      last_seen_at
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS
      idx_stats_visitors_v3_last_counted
    ON stats_visitors_v3 (
      last_counted_visit_at
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS
      idx_stats_visits_v3_date
    ON stats_visits_v3 (
      visit_date
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS
      idx_stats_visits_v3_persian
    ON stats_visits_v3 (
      persian_year,
      persian_month
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS
      idx_stats_visits_v3_visitor_time
    ON stats_visits_v3 (
      visitor_id,
      visit_time DESC
    )
  `;
}

function ensureDatabase():
  Promise<void> {
  if (!initPromise) {
    initPromise =
      initDatabase().catch(
        (error) => {
          /**
           * اگر initialization موقتاً
           * شکست خورد، درخواست بعدی
           * دوباره تلاش می‌کند.
           */
          initPromise = null;

          throw error;
        }
      );
  }

  return initPromise;
}

/**
 * Visitor را ایجاد می‌کند یا
 * last_seen_at او را تازه می‌کند.
 *
 * این عملیات Visit جدید ثبت نمی‌کند.
 */
async function touchVisitor(
  visitorId: string,
  requestTime: string
) {
  if (!sql) {
    throw new Error(
      "PostgreSQL is not configured."
    );
  }

  await sql`
    INSERT INTO stats_visitors_v3 (
      visitor_id,
      first_seen_at,
      last_seen_at,
      last_counted_visit_at
    )

    VALUES (
      ${visitorId},
      ${requestTime}::TIMESTAMPTZ,
      ${requestTime}::TIMESTAMPTZ,
      NULL
    )

    ON CONFLICT (visitor_id)

    DO UPDATE SET

      last_seen_at =
        EXCLUDED.last_seen_at
  `;
}

/**
 * تلاش برای ثبت Visit جدید.
 *
 * قانون:
 *
 * اگر Visitor قبلاً Visit نداشته:
 *   ثبت شود.
 *
 * اگر از آخرین Visit معتبر
 * حداقل 5 ساعت گذشته:
 *   ثبت شود.
 *
 * در غیر این صورت:
 *   هیچ Visit جدیدی ثبت نشود.
 *
 * نکته مهم:
 *
 * UPDATE شرطی + RETURNING + INSERT
 * داخل یک PostgreSQL Statement انجام می‌شود.
 *
 * بنابراین دو POST همزمان نمی‌توانند
 * برای یک visitor دو Visit بسازند.
 */
async function registerVisitIfAllowed(
  visitorId: string,
  requestTime: string,
  gregorianDate: string,
  persianYear: number,
  persianMonth: number,
  persianDay: number
) {
  if (!sql) {
    throw new Error(
      "PostgreSQL is not configured."
    );
  }

  await sql`
    WITH claimed_visit AS (

      UPDATE stats_visitors_v3

      SET
        last_counted_visit_at =
          ${requestTime}::TIMESTAMPTZ,

        last_seen_at =
          ${requestTime}::TIMESTAMPTZ

      WHERE
        visitor_id =
          ${visitorId}

        AND

        (
          last_counted_visit_at
            IS NULL

          OR

          last_counted_visit_at
            <=
          ${requestTime}::TIMESTAMPTZ
            -
          INTERVAL '5 hours'
        )

      RETURNING visitor_id
    )

    INSERT INTO stats_visits_v3 (
      visitor_id,
      visit_time,
      visit_date,
      persian_year,
      persian_month,
      persian_day
    )

    SELECT
      visitor_id,
      ${requestTime}::TIMESTAMPTZ,
      ${gregorianDate}::DATE,
      ${persianYear},
      ${persianMonth},
      ${persianDay}

    FROM claimed_visit
  `;
}

/**
 * فقط آمار فعلی را می‌خواند.
 *
 * هیچ INSERT یا UPDATE در این Query
 * انجام نمی‌شود.
 */
async function readStats(
  requestTime: string,
  gregorianDate: string,
  persianYear: number,
  persianMonth: number,
  weekStart: string
): Promise<Stats> {
  if (!sql) {
    throw new Error(
      "PostgreSQL is not configured."
    );
  }

  const rows = await sql`
    SELECT

      /**
       * کاربران حاضر
       */
      (
        SELECT COUNT(*)

        FROM stats_visitors_v3

        WHERE
          last_seen_at >=
          ${requestTime}::TIMESTAMPTZ
            -
          INTERVAL '2 minutes'
      )::BIGINT AS online,

      /**
       * بازدیدهای امروز
       */
      (
        SELECT COUNT(*)

        FROM stats_visits_v3

        WHERE
          visit_date =
          ${gregorianDate}::DATE
      )::BIGINT AS today,

      /**
       * بازدیدهای دیروز
       */
      (
        SELECT COUNT(*)

        FROM stats_visits_v3

        WHERE
          visit_date =
          ${gregorianDate}::DATE
            -
          INTERVAL '1 day'
      )::BIGINT AS yesterday,

      /**
       * تمام بازدیدهای هفته جاری
       * از شنبه تا امروز
       */
      (
        SELECT COUNT(*)

        FROM stats_visits_v3

        WHERE
          visit_date >=
          ${weekStart}::DATE

          AND

          visit_date <=
          ${gregorianDate}::DATE
      )::BIGINT AS week,

      /**
       * تمام بازدیدهای ماه شمسی جاری
       */
      (
        SELECT COUNT(*)

        FROM stats_visits_v3

        WHERE
          persian_year =
          ${persianYear}

          AND

          persian_month =
          ${persianMonth}
      )::BIGINT AS month,

      /**
       * تمام بازدیدهای سال شمسی جاری
       */
      (
        SELECT COUNT(*)

        FROM stats_visits_v3

        WHERE
          persian_year =
          ${persianYear}
      )::BIGINT AS year,

      /**
       * تمام بازدیدها از اولین Visit V3
       * تا همین لحظه.
       */
      (
        SELECT COUNT(*)

        FROM stats_visits_v3
      )::BIGINT AS total
  `;

  const row =
    (rows[0] ?? {}) as
      Partial<Stats>;

  return {
    online:
      Number(row.online ?? 0),

    today:
      Number(row.today ?? 0),

    yesterday:
      Number(row.yesterday ?? 0),

    week:
      Number(row.week ?? 0),

    month:
      Number(row.month ?? 0),

    year:
      Number(row.year ?? 0),

    total:
      Number(row.total ?? 0),
  };
}

/**
 * پردازش کامل درخواست.
 *
 * registerVisit = true:
 * POST و بررسی قانون 5 ساعت.
 *
 * registerVisit = false:
 * GET و فقط heartbeat.
 */
async function processStats(
  visitorId: string,
  registerVisit: boolean
): Promise<Stats> {
  if (!sql) {
    throw new Error(
      "PostgreSQL is not configured."
    );
  }

  await ensureDatabase();

  /**
   * تمام عملیات این Request
   * از یک Timestamp واحد استفاده می‌کنند.
   */
  const requestDate =
    new Date();

  const requestTime =
    requestDate.toISOString();

  const {
    gregorianDate,
    persianYear,
    persianMonth,
    persianDay,
    weekStart,
  } = getTehranDateInfo(
    requestDate
  );

  /**
   * Visitor را ایجاد یا Online می‌کنیم.
   */
  await touchVisitor(
    visitorId,
    requestTime
  );

  /**
   * فقط POST حق دارد Visit جدید
   * ایجاد کند.
   */
  if (registerVisit) {
    await registerVisitIfAllowed(
      visitorId,
      requestTime,
      gregorianDate,
      persianYear,
      persianMonth,
      persianDay
    );
  }

  /**
   * بسیار مهم:
   *
   * آمار بعد از پایان INSERT خوانده می‌شود.
   *
   * بنابراین اگر همین درخواست
   * Visit جدید ساخته باشد،
   * همان Visit فوراً در:
   *
   * today
   * week
   * month
   * year
   * total
   *
   * دیده می‌شود.
   */
  return readStats(
    requestTime,
    gregorianDate,
    persianYear,
    persianMonth,
    weekStart
  );
}

function createStatsResponse(
  stats: Stats,
  visitorId: string
) {
  const response =
    NextResponse.json(
      stats,
      {
        status: 200,

        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",

          Pragma:
            "no-cache",

          Expires:
            "0",

          "Surrogate-Control":
            "no-store",
        },
      }
    );

  response.cookies.set(
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

  return response;
}

function createErrorResponse() {
  /**
   * اگر Neon موقتاً قطع باشد
   * عدد صفر جعلی برنمی‌گردانیم.
   *
   * Footer آخرین مقدار سالم را
   * نگه خواهد داشت.
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

/**
 * GET
 *
 * وظیفه:
 *
 * - heartbeat کاربران حاضر
 * - خواندن آمار
 *
 * هرگز Visit جدید نمی‌سازد.
 */
export async function GET(
  req: NextRequest
) {
  const visitorId =
    getVisitorId(req);

  try {
    const stats =
      await processStats(
        visitorId,
        false
      );

    return createStatsResponse(
      stats,
      visitorId
    );
  } catch (error) {
    console.error(
      "GET Stats API error:",
      error
    );

    return createErrorResponse();
  }
}

/**
 * POST
 *
 * وظیفه:
 *
 * بررسی ورود واقعی Visitor.
 *
 * اگر:
 *
 * now - last_counted_visit >= 5 hours
 *
 * باشد یک Visit جدید ثبت می‌شود.
 *
 * مثال:
 *
 * 07:00 -> Visit 1
 * 09:15 -> no
 * 11:59 -> no
 * 12:01 -> Visit 2
 * 16:47 -> no
 * 17:05 -> Visit 3
 */
export async function POST(
  req: NextRequest
) {
  const visitorId =
    getVisitorId(req);

  try {
    const stats =
      await processStats(
        visitorId,
        true
      );

    return createStatsResponse(
      stats,
      visitorId
    );
  } catch (error) {
    console.error(
      "POST Stats API error:",
      error
    );

    return createErrorResponse();
  }
}