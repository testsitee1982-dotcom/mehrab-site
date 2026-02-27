// app/ui/SiteFooter.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";

type Stats = {
  online: number;
  today: number;
  yesterday: number;
  week: number;
  month: number;
  year: number;
  total: number;
};

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

function monthKey(d = new Date()) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}`;
}

function yearKey(d = new Date()) {
  return `${d.getFullYear()}`;
}

/**
 * آمار بازدید ساختگی/لوکال (بدون بک‌اند):
 * - هر بار لود/رفرش صفحه => today و total +1
 * - هر 8 دقیقه => today و total +1
 * - هر 8 دقیقه به مدت 2 دقیقه => online +1 (فیک)
 *   و بعد از چند لحظه (5 ثانیه) => بازدیدکننده‌ها +1
 */
function useLocalVisitStats(): Stats {
  const [stats, setStats] = useState<Stats>({
    online: 1,
    today: 0,
    yesterday: 0,
    week: 0,
    month: 0,
    year: 0,
    total: 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const DAILY_PREFIX = "bp_daily_"; // bp_daily_YYYY-MM-DD => count
    const TOTAL_KEY = "bp_total_visits";

    const ONLINE_KEY = "bp_online_tabs";
    const TTL_MS = 25_000;

    // Auto fake controls
    const AUTO_LAST_KEY = "bp_auto_last_bump";
    const GHOST_UNTIL_KEY = "bp_ghost_online_until";
    const GHOST_PENDING_KEY = "bp_ghost_pending_to_add_visit"; // stores until timestamp (string)

    const bumpVisit = (n = 1) => {
      const t = new Date();
      const tk = dateKey(t);
      const todayKeyLS = `${DAILY_PREFIX}${tk}`;

      const todayCur = Number(localStorage.getItem(todayKeyLS) ?? "0");
      localStorage.setItem(todayKeyLS, String(todayCur + n));

      const totalCur = Number(localStorage.getItem(TOTAL_KEY) ?? "0");
      localStorage.setItem(TOTAL_KEY, String(totalCur + n));
    };

    // 1) Each page load => +1 visit
    bumpVisit(1);

    // Online tabs estimator (same browser)
    const TAB_ID = `tab_${Math.random().toString(16).slice(2)}_${Date.now()}`;

    const readOnline = (): Record<string, number> => {
      try {
        return JSON.parse(localStorage.getItem(ONLINE_KEY) ?? "{}") || {};
      } catch {
        return {};
      }
    };

    const writeOnline = (obj: Record<string, number>) => {
      localStorage.setItem(ONLINE_KEY, JSON.stringify(obj));
    };

    const computeAndSetStats = () => {
      const now = new Date();

      const todayKeyLS = `${DAILY_PREFIX}${dateKey(now)}`;
      const ydayKeyLS = `${DAILY_PREFIX}${dateKey(addDays(now, -1))}`;

      const todayVal = Number(localStorage.getItem(todayKeyLS) ?? "0");
      const ydayVal = Number(localStorage.getItem(ydayKeyLS) ?? "0");

      // week sum
      let weekSum = 0;
      for (let i = 0; i < 7; i++) {
        const k = `${DAILY_PREFIX}${dateKey(addDays(now, -i))}`;
        weekSum += Number(localStorage.getItem(k) ?? "0");
      }

      // month/year sum by scanning keys
      const mKey = monthKey(now);
      const yKey = yearKey(now);
      let monthSum = 0;
      let yearSum = 0;

      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (!k || !k.startsWith(DAILY_PREFIX)) continue;
        const day = k.slice(DAILY_PREFIX.length); // YYYY-MM-DD
        const v = Number(localStorage.getItem(k) ?? "0");
        if (day.startsWith(mKey)) monthSum += v;
        if (day.startsWith(yKey)) yearSum += v;
      }

      const totalVal = Number(localStorage.getItem(TOTAL_KEY) ?? "0");

      // online (tabs) + ghost
      const onlineObj = readOnline();
      const tms = Date.now();

      // cleanup old tabs
      for (const id of Object.keys(onlineObj)) {
        if (tms - onlineObj[id] > TTL_MS) delete onlineObj[id];
      }
      writeOnline(onlineObj);

      const tabsOnline = Math.max(1, Object.keys(onlineObj).length);

      const ghostUntil = Number(localStorage.getItem(GHOST_UNTIL_KEY) ?? "0");
      const ghostActive = tms < ghostUntil ? 1 : 0;

      setStats({
        online: tabsOnline + ghostActive,
        today: todayVal,
        yesterday: ydayVal,
        week: weekSum,
        month: monthSum,
        year: yearSum,
        total: totalVal,
      });
    };

    const heartbeat = () => {
      const obj = readOnline();
      const t = Date.now();
      obj[TAB_ID] = t;

      // cleanup old
      for (const id of Object.keys(obj)) {
        if (t - obj[id] > TTL_MS) delete obj[id];
      }
      writeOnline(obj);

      // if ghost finished and pending -> after 5 seconds add a visit
      const pending = localStorage.getItem(GHOST_PENDING_KEY);
      if (pending) {
        const until = Number(pending);
        if (Date.now() > until + 5_000) {
          localStorage.removeItem(GHOST_PENDING_KEY);
          bumpVisit(1);
        }
      }

      computeAndSetStats();
    };

    heartbeat();
    const intv = window.setInterval(heartbeat, 8_000);

    const onStorage = (e: StorageEvent) => {
      if (e.key === ONLINE_KEY || e.key === GHOST_UNTIL_KEY || e.key === TOTAL_KEY) {
        heartbeat();
      }
    };
    window.addEventListener("storage", onStorage);

    // AUTO: every 8 minutes => +1 visit, plus ghost online 2 minutes
    const maybeAuto = () => {
      const nowMs = Date.now();
      const last = Number(localStorage.getItem(AUTO_LAST_KEY) ?? "0");
      const EIGHT_MIN = 8 * 60 * 1000;
      const TWO_MIN = 2 * 60 * 1000;

      if (nowMs - last < EIGHT_MIN) return;

      localStorage.setItem(AUTO_LAST_KEY, String(nowMs));

      // start ghost online for 2 minutes
      const ghostUntil = nowMs + TWO_MIN;
      localStorage.setItem(GHOST_UNTIL_KEY, String(ghostUntil));

      // after ghost ends + 5s -> add one visit (pending)
      localStorage.setItem(GHOST_PENDING_KEY, String(ghostUntil));

      // also add 1 visit immediately every 8 minutes
      bumpVisit(1);

      heartbeat();
    };

    const autoIntv = window.setInterval(maybeAuto, 10_000);
    maybeAuto();

    return () => {
      window.clearInterval(intv);
      window.clearInterval(autoIntv);
      window.removeEventListener("storage", onStorage);

      const obj = readOnline();
      delete obj[TAB_ID];
      writeOnline(obj);
    };
  }, []);

  return stats;
}

function StatRow({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="flex items-center justify-between gap-4 text-[13px] text-white/80">
      <span className="whitespace-nowrap">{label}</span>
      <span className="font-extrabold text-white/95 tabular-nums">{value}</span>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="h-10 w-10 grid place-items-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  const stats = useLocalVisitStats();

  const phoneLines = useMemo(
    () => [
      "021-33963156",
      "021-33963108",
      "021-33951391",
      "021-36615914",
      "09121893760",
      "09123236851",
    ],
    []
  );

  // ✅ کد رسمی اینماد (trustseal) — بدون نیاز به فایل PNG محلی
  const ENAMAD_HREF =
    "https://trustseal.enamad.ir/?id=5205347&Code=vxvhPMTUIDCfbz4gGKBAdPNu31vcaV2R";
  const ENAMAD_IMG =
    "https://trustseal.enamad.ir/logo.aspx?id=5205347&Code=vxvhPMTUIDCfbz4gGKBAdPNu31vcaV2R";

  return (
    <footer className="border-t border-white/10 bg-white/[0.04] backdrop-blur-xl">
      <div className="mx-auto w-[min(1200px,calc(100%-32px))] py-6">
        <div
          dir="rtl"
          className="grid gap-6 lg:grid-cols-[1.1fr_.85fr_.95fr_.8fr_1.1fr] items-start"
        >
          {/* 1) خبرنامه + شبکه‌های اجتماعی */}
          <div className="order-5 lg:order-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-white font-extrabold text-[15px]">خبرنامه</div>
              <div className="mt-2 text-[12.5px] text-white/70 leading-relaxed">
                جهت اطلاع از تخفیفات و کالاهای جدید در خبرنامه عضو شوید
              </div>

              <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
                <input
                  className="h-10 rounded-xl bg-[#0b1220]/50 border border-white/10 px-3 text-sm text-white/90 outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                  placeholder="ایمیل خود را وارد کنید"
                />
                <button className="h-10 rounded-xl px-4 font-extrabold bg-[var(--brand-accent)] text-slate-900 hover:brightness-95">
                  ارسال
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <SocialIcon href="#" label="Instagram">
                <span className="text-white/90">IG</span>
              </SocialIcon>
              <SocialIcon href="#" label="YouTube">
                <span className="text-white/90">YT</span>
              </SocialIcon>
              <SocialIcon href="#" label="Telegram">
                <span className="text-white/90">TG</span>
              </SocialIcon>
              <SocialIcon href="#" label="LinkedIn">
                <span className="text-white/90">in</span>
              </SocialIcon>
              <SocialIcon href="#" label="WhatsApp">
                <span className="text-white/90">WA</span>
              </SocialIcon>
            </div>
          </div>

          {/* 2) شماره تماس شرکت */}
          <div className="order-4 lg:order-2">
            <div className="text-white font-extrabold text-[15px] inline-block">
              شماره تماس شرکت
              <div className="mt-1 h-[2px] w-28 bg-[var(--brand-accent)]" />
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="grid gap-1.5">
                {phoneLines.map((p) => (
                  <div key={p} className="text-[13px] text-amber-300 font-bold tabular-nums">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3) آمار بازدید */}
          <div className="order-3 lg:order-3">
            <div className="text-white font-extrabold text-[15px] inline-block">
              آمار بازدید
              <div className="mt-1 h-[2px] w-20 bg-[var(--brand-accent)]" />
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="grid gap-2">
                <StatRow label="کاربران حاضر:" value={stats.online} />
                <StatRow label="بازدیدهای امروز:" value={stats.today} />
                <StatRow label="بازدید دیروز:" value={stats.yesterday} />
                <StatRow label="بازدیدهای این هفته:" value={stats.week} />
                <StatRow label="بازدیدهای این ماه:" value={stats.month} />
                <StatRow label="بازدیدهای امسال:" value={stats.year} />
                <div className="h-px bg-white/10 my-1" />
                <StatRow label="کل بازدیدها:" value={stats.total} />
              </div>
            </div>
          </div>

          {/* 4) لینک‌های سریع */}
          <div className="order-2 lg:order-4">
            <div className="text-white font-extrabold text-[15px] inline-block">
              لینک‌های سریع
              <div className="mt-1 h-[2px] w-24 bg-[var(--brand-accent)]" />
            </div>

            <ul className="mt-3 grid gap-2 text-[13px] text-white/70">
              <li>
                <a className="hover:text-white transition" href="#products">
                  محصولات
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#applications">
                  کاربردها
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#blog">
                  مقالات
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#about">
                  شرکت
                </a>
              </li>
              <li>
                <a className="hover:text-white transition" href="#contact">
                  تماس
                </a>
              </li>
            </ul>
          </div>

          {/* 5) برند + لوگو/اینماد  (لوگو سمت راست، متن دوخط، مثل هدر) */}
          <div className="order-1 lg:order-5">
            <div className="flex items-center justify-end gap-3 flex-row-reverse">
              <img
                src="/images/logo/mehrab.png"
                alt="رعد و برق مهراب"
                className="h-12 w-12 rounded-xl border border-white/10 bg-white/5 p-1 object-contain"
                loading="lazy"
              />

              <div className="text-right leading-tight">
                <div className="text-white font-black text-[18px] whitespace-nowrap">
                  رعد و برق مهراب
                </div>
                <div className="mt-1 text-[12.5px] text-white/60 whitespace-nowrap">
                  راهکارهای پیشرفته بنتونیت برای صنعت برق
                </div>
              </div>
            </div>

            {/* ✅ اینماد: لود از سرور اینماد (بدون فایل محلی) */}
            <div className="mt-4 flex items-center justify-end">
              <a
                href={ENAMAD_HREF}
                target="_blank"
                rel="noreferrer"
                referrerPolicy="origin"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition"
                aria-label="نمایش نماد اعتماد الکترونیکی"
              >
                <img
                  referrerPolicy="origin"
                  src={ENAMAD_IMG}
                  alt="enamad"
                  width={120}
                  height={120}
                  style={{ width: 120, height: 120, cursor: "pointer" }}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-center text-[12.5px] text-white/60">
          © 2026 رعد و برق مهراب. همه حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;