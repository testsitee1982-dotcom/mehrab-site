// app/ui/SiteFooter.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Stats = {
  online: number;
  today: number;
  yesterday: number;
  week: number;
  month: number;
  year: number;
  total: number;
};

function useServerVisitStats(): Stats {
  const [stats, setStats] = useState<Stats>({
    online: 0,
    today: 0,
    yesterday: 0,
    week: 0,
    month: 0,
    year: 0,
    total: 0,
  });

  useEffect(() => {
    let alive = true;

    async function loadStats() {
      try {
        const res = await fetch("/api/stats", { cache: "no-store" });
        if (!res.ok) return;

        const data = (await res.json()) as Stats;

        if (alive) {
          setStats({
            online: Number(data.online || 0),
            today: Number(data.today || 0),
            yesterday: Number(data.yesterday || 0),
            week: Number(data.week || 0),
            month: Number(data.month || 0),
            year: Number(data.year || 0),
            total: Number(data.total || 0),
          });
        }
      } catch (err) {
        console.error("Stats API error:", err);
      }
    }

    loadStats();
    const timer = window.setInterval(loadStats, 30000);

    return () => {
      alive = false;
      window.clearInterval(timer);
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
  const stats = useServerVisitStats();

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
          {/* خبرنامه */}
          <div className="order-5 lg:order-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-white font-extrabold text-[15px]">
                خبرنامه
              </div>

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

          {/* شماره تماس */}
          <div className="order-4 lg:order-2">
            <div className="text-white font-extrabold text-[15px] inline-block">
              شماره تماس شرکت
              <div className="mt-1 h-[2px] w-28 bg-[var(--brand-accent)]" />
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="grid gap-1.5">
                {phoneLines.map((p) => (
                  <div
                    key={p}
                    className="text-[13px] text-amber-300 font-bold tabular-nums"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* آمار بازدید */}
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

          {/* لینک‌های سریع */}
          <div className="order-2 lg:order-4">
            <div className="text-white font-extrabold text-[15px] inline-block">
              لینک‌های سریع
              <div className="mt-1 h-[2px] w-20 bg-[var(--brand-accent)]" />
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
                <a className="hover:text-white transition" href="/videos">
                  ویدیوها
                </a>
              </li>

              <li>
                <a className="hover:text-white transition" href="/images">
                  تصاویر
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

          {/* لوگو و اینماد */}
          <div className="order-1 lg:order-5">
            <div className="flex items-center justify-end gap-3 flex-row-reverse">
              <Image
                src="/images/logo/mehrab.png"
                alt="رعد و برق مهراب"
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl border border-white/10 bg-white/5 p-1 object-contain"
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