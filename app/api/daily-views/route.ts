import { NextResponse } from "next/server";

declare global {
  // eslint-disable-next-line no-var
  var __dailyViews: Map<string, number> | undefined;
}

export const dynamic = "force-dynamic";

const BASE_DAILY_VIEWS = 108;

export async function GET() {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  if (!globalThis.__dailyViews) {
    globalThis.__dailyViews = new Map<string, number>();
  }

  let current = globalThis.__dailyViews.get(today);

  // اگر اولین بازدید امروز است → از 108 شروع کن
  if (current === undefined) {
    current = BASE_DAILY_VIEWS;
  }

  const next = current + 1;
  globalThis.__dailyViews.set(today, next);

  return NextResponse.json(
    { date: today, count: next },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
