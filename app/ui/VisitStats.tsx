"use client";

import React, { useEffect, useMemo, useState } from "react";

type Stats = {
  onlineNow: number;
  today: number;
  yesterday: number;
  thisWeek: number;
  thisMonth: number;
  thisYear: number;
  total: number;
};

// ---------- helpers ----------
function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function dayKey(d = new Date()) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function monthKey(d = new Date()) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}`;
}

// ISO week key: YYYY-Www
function isoWeekKey(d = new Date()) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7; // Mon=1..Sun=7
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((date.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return `${date.getUTCFullYear()}-W${pad2(weekNo)}`;
}

function yearKey(d = new Date()) {
  return String(d.getFullYear());
}

function safeGetNumber(key: string) {
  const v = localStorage.getItem(key);
  const n = Number(v ?? "0");
  return Number.isFinite(n) ? n : 0;
}

function safeSetNumber(key: string, value: number) {
  localStorage.setItem(key, String(value));
}

// آنلاین (دموی داخل همین دستگاه/تب‌ها)
function ensureClientId() {
  const k = "visitstats_client_id";
  let id = localStorage.getItem(k);
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem(k, id);
  }
  return id;
}

function bumpPresence() {
  const id = ensureClientId();
  const now = Date.now();
  const presenceKey = "visitstats_presence";
  const ttlMs = 2 * 60 * 1000; // 2 دقیقه: "حاضر" حساب می‌کنیم

  let map: Record<string, number> = {};
  try {
    map = JSON.parse(localStorage.getItem(presenceKey) ?? "{}") || {};
  } catch {
    map = {};
  }

  // prune
  for (const k in map) {
    if (now - map[k] > ttlMs) delete map[k];
  }

  map[id] = now;
  localStorage.setItem(presenceKey, JSON.stringify(map));

  return Object.keys(map).length || 1;
}

function inc(key: string) {
  const n = safeGetNumber(key) + 1;
  safeSetNumber(key, n);
  return n;
}

export default function VisitStats() {
  const [stats, setStats] = useState<Stats>({
    onlineNow: 1,
    today: 0,
    yesterday: 0,
    thisWeek: 0,
    thisMonth: 0,
    thisYear: 0,
    total: 0,
  });

  const keys = useMemo(() => {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    return {
      today: `visits_day_${dayKey(now)}`,
      yesterday: `visits_day_${dayKey(yesterday)}`,
      week: `visits_week_${isoWeekKey(now)}`,
      month: `visits_month_${monthKey(now)}`,
      year: `visits_year_${yearKey(now)}`,
      total: "visits_total",
    };
  }, []);

  useEffect(() => {
    try {
      // 1) یک بازدید اضافه کن (دمو: هر بار رفرش/لود)
      inc(keys.today);
      inc(keys.week);
      inc(keys.month);
      inc(keys.year);
      inc(keys.total);

      // 2) حضور آنلاین (دمو: فقط همین دستگاه/تب‌ها)
      const onlineNow = bumpPresence();

      // 3) خروجی
      setStats({
        onlineNow,
        today: safeGetNumber(keys.today),
        yesterday: safeGetNumber(keys.yesterday),
        thisWeek: safeGetNumber(keys.week),
        thisMonth: safeGetNumber(keys.month),
        thisYear: safeGetNumber(keys.year),
        total: safeGetNumber(keys.total),
      });

      // هر 20 ثانیه presence رو تازه کن تا «حاضر» قطع نشه
      const t = setInterval(() => {
        const online = bumpPresence();
        setStats((s) => ({ ...s, onlineNow: online }));
      }, 20000);

      return () => clearInterval(t);
    } catch {
      // اگر localStorage در دسترس نبود
      setStats((s) => ({ ...s, onlineNow: 1 }));
    }
  }, [keys]);

  const row = (label: string, value: number | string) => (
    <div className="row">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );

  return (
    <div className="box" dir="rtl">
      <div className="title">آمار بازدید</div>
      <div className="underline" />

      <div className="rows">
        {row("کاربران حاضر:", stats.onlineNow)}
        {row("بازدیدهای امروز:", stats.today)}
        {row("بازدید دیروز:", stats.yesterday)}
        {row("بازدیدهای این هفته:", stats.thisWeek)}
        {row("بازدیدهای این ماه:", stats.thisMonth)}
        {row("بازدیدهای امسال:", stats.thisYear)}
        {row("کل بازدیدها:", stats.total)}
      </div>

      <style jsx>{`
        .box {
          width: 100%;
          display: grid;
          gap: 10px;
          justify-items: center;
          text-align: center;
        }
        .title {
          font-size: 14px;
          font-weight: 900;
          color: rgba(248, 250, 252, 0.92);
        }
        .underline {
          width: 64px;
          height: 2px;
          background: #f59e0b;
          border-radius: 999px;
          opacity: 0.9;
        }
        .rows {
          width: 100%;
          display: grid;
          gap: 8px;
          padding-top: 6px;
        }
        .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
          max-width: 260px;
          font-size: 12.5px;
          color: rgba(226, 232, 240, 0.72);
        }
        .value {
          color: rgba(248, 250, 252, 0.92);
          font-weight: 800;
        }
      `}</style>
    </div>
  );
}
