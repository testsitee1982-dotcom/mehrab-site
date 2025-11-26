// app/ui/SiteHeader.tsx
"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";

import {
  dictionaries,
  languageMeta,
  useRTL,
  products,
  searchData,
  btitr,
  bmitra,
  bnazanin,
  Icon,
  Motion,
  flags,
} from "@/app/page";
import { articles } from "@/app/lib/articles";

// این کامپوننت در همه‌ی صفحات استفاده می‌شود
export function SiteHeader() {
  const [lang, setLang] = useState<keyof typeof languageMeta>("fa");

  return <Header lang={lang} setLang={setLang} />;
}

/* ===================== Header & Navigation ===================== */
export function Header({
  lang,
  setLang,
}: {
  lang: keyof typeof languageMeta;
  setLang: (l: keyof typeof languageMeta) => void;
}) {
  const dict = dictionaries[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    if (!query.trim()) return [] as typeof searchData;
    return searchData
      .filter((x) => x.label.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 7);
  }, [query]);
  const isRTL = useRTL(lang);

  // --- کنترل باز/بسته بودن منوی زبان + ref برای <details> ---
  const [langOpen, setLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDetailsElement>(null);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b border-white/10"
      style={{
        background:
          "linear-gradient(90deg, rgba(3,7,18,.85), rgba(2,6,23,.7))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-xl hover:bg-white/10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <Icon name="X" size={22} />
              ) : (
                <Icon name="Menu" size={22} />
              )}
            </button>

            {/* ====== برند: لوگوی PNG + نام «رعد و برق مهراب» ====== */}
            <Link href="#home" className="flex items-center gap-4">
              <img
                src="/images/logo/mehrab.png"
                alt="رعد و برق مهراب"
                className="h-16 w-auto rounded-lg shadow-lg"
                loading="eager"
              />
              <div className="leading-tight">
                <div
                  className={`${
                    isRTL ? btitr.className : ""
                  } text-white font-extrabold tracking-tight text-[1.6rem]`}
                >
                  رعد و برق مهراب
                </div>
                <div
                  className={`${
                    isRTL ? bmitra.className : ""
                  } text-[1rem] text-white/70`}
                >
                  {dictionaries[lang].tagline}
                </div>
              </div>
            </Link>
            {/* ===================================================== */}
          </div>

          {/* جستجو */}
          <div className="relative hidden lg:block w-[36rem]">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-3 py-2">
              <Icon name="Search" size={18} className="text-white/70" />
              <input
                className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/50"
                placeholder={dict.searchPlaceholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                dir={isRTL ? "rtl" : "ltr"}
              />
            </div>
            <Motion.AnimatePresence>
              {results.length > 0 && (
                <Motion.Ul
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute mt-2 w-full bg-[#0b1228] border border-white/10 rounded-xl overflow-hidden shadow-xl"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {results.map((r) => (
                    <li
                      key={r.id}
                      className="px-3 py-2 hover:bg-white/5 cursor-pointer flex items-center justify-between"
                    >
                      <span className="text-sm text-white/90">
                        {r.label}
                      </span>
                      <span className="text-[10px] text-white/50 uppercase tracking-wider">
                        {r.type}
                      </span>
                    </li>
                  ))}
                </Motion.Ul>
              )}
            </Motion.AnimatePresence>
          </div>

          {/* زبان + دکمه کاتالوگ + سبد خرید */}
          <div className="flex items-center gap-2 flex-nowrap">
            {/* منوی زبان کنترل‌شده */}
            <div className="relative">
              <details
                className="group"
                ref={langMenuRef}
                open={langOpen}
                onToggle={(e) => {
                  const el = e.currentTarget as HTMLDetailsElement;
                  if (el.open !== langOpen) setLangOpen(el.open);
                }}
              >
                <summary
                  className="list-none flex items-center gap-2 cursor-pointer select-none rounded-xl px-4 py-2 bg-[#10B981] hover:bg-[#0EA371] text-white shadow-md"
                  onClick={(e) => {
                    e.preventDefault(); // کنترل دستی
                    setLangOpen((v) => !v);
                  }}
                >
                  <span className="text-xl md:text-2xl leading-none">
                    {flags[lang]}
                  </span>
                  <span className="text-sm md:text-base font-semibold">
                    {languageMeta[lang].label}
                  </span>
                  <Icon
                    name="ChevronDown"
                    size={18}
                    className={
                      langOpen ? "rotate-180 transition" : "transition"
                    }
                  />
                </summary>

                {/* لیست زبان‌ها */}
                <div className="absolute right-0 mt-2 w-56 bg-[#0b1228] border border-white/10 rounded-xl overflow-hidden shadow-xl">
                  {Object.keys(languageMeta).map((k) => (
                    <button
                      type="button"
                      key={k}
                      onClick={() => {
                        setLang(k as keyof typeof languageMeta);
                        setLangOpen(false);
                      }}
                      className="w-full text-right px-3 py-2 hover:bg-white/5 flex items-center justify-between"
                    >
                      <span className="text-sm text-white/90">
                        {
                          languageMeta[
                            k as keyof typeof languageMeta
                          ].label
                        }
                      </span>
                      <span className="text-xl leading-none">
                        {flags[k as keyof typeof flags]}
                      </span>
                    </button>
                  ))}
                </div>
              </details>
            </div>

            {/* دکمه دریافت کاتالوگ */}
            <a
              href="#catalog"
              className="hidden md:inline-flex items-center justify-center gap-2
                         bg-[var(--brand-accent)] text-slate-900 font-bold
                         px-4 md:px-5 h-10 md:h-11 rounded-xl hover:brightness-95
                         whitespace-nowrap shrink-0 leading-[1.1] min-w-[136px] shadow-md"
              aria-label={
                dict?.nav?.catalog ||
                (lang === "en" ? "Get Catalog" : "دریافت کاتالوگ")
              }
            >
              <Icon name="Download" size={18} />
              {dict?.nav?.catalog ||
                (lang === "en" ? "Get Catalog" : "دریافت کاتالوگ")}
            </a>

            {/* سبد خرید (فعلاً بدون باز شدن پنل) */}
            <button
              type="button"
              onClick={() => {
                // TODO: اتصال به پنل سبد خرید
              }}
              className="relative p-2 rounded-xl hover:bg-white/10 text-white"
              aria-label="Open cart"
            >
              <Icon name="ShoppingCart" />

              <span
                id="cart-count"
                className="absolute -top-1 -right-1 text-[10px] bg-[var(--brand-primary)] text-white rounded-full px-1.5 min-w-[18px] h-[18px] flex items-center justify-center leading-none text-center hidden"
              >
                0
              </span>
            </button>
          </div>
        </div>

        {/* نوار دکمه‌های آبی (منوی پایین هدر) */}
        <nav
          className={
            bnazanin.className +
            " hidden md:flex w-full items-center h-12 text-white/90 justify-between rtl:flex-row-reverse"
          }
        >
          {/* چپ: تماس و ایمیل */}
          <div className="flex items-center gap-1.5 lg:gap-2">
            <a
              href="tel:+982100000000"
              className="shrink-0 inline-flex items-center gap-2 px-2.5 py-1.5 lg:px-3 lg:py-1.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm shadow"
              aria-label="Call"
            >
              <Icon name="Phone" size={14} />
              <span dir="ltr">+98 21 0000 0000</span>
            </a>

            <a
              href="mailto:sales@bentonpower.com"
              className="shrink-0 inline-flex items-center gap-2 px-2.5 py-1.5 lg:px-3 lg:py-1.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm shadow"
              aria-label="Email"
            >
              <Icon name="Mail" size={14} />
              <span>sales@bentonpower.com</span>
            </a>
          </div>

          {/* راست: منوی چهارگانه */}
          <div className="flex items-center gap-1.5 lg:gap-2">
            {/* محصولات */}
            <details className="group relative">
              <summary className="list-none inline-flex items-center gap-2 px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm cursor-pointer select-none shadow">
                {dictionaries[lang].nav.products}
                <Icon
                  name="ChevronDown"
                  size={16}
                  className="group-open:rotate-180 transition"
                />
              </summary>
              <div className="absolute left-0 mt-2 w-[760px] bg-[#0b1228] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {products.slice(0, 3).map((p) => (
                    <a
                      key={p.id}
                      href="#products"
                      className="group p-3 rounded-xl border border-white/10 hover:bg-white/5"
                    >
                      <div className="h-20 rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.15),rgba(255,255,255,.05)_60%)]" />
                      <p
                        className={`${
                          isRTL ? bnazanin.className : ""
                        } mt-3 md:mt-4 text-white/80 leading-relaxed`}
                      >
                        {dict.hero.subtitle}
                      </p>
                      <div className="text-xs text-white/50">
                        {dictionaries[lang].specs}
                      </div>
                    </a>
                  ))}
                  <a
                    href="#products"
                    className="p-3 rounded-xl border border-dashed border-white/10 hover:bg:white/5 flex items-center justify-center text-white/60"
                  >
                    {dictionaries[lang].featured.viewAll}
                  </a>
                </div>
              </div>
            </details>

            {/* راهکارها */}
            <details className="group relative">
              <summary className="list-none inline-flex items-center gap-2 px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm cursor-pointer select-none shadow">
                {dictionaries[lang].nav.solutions}
                <Icon
                  name="ChevronDown"
                  size={16}
                  className="group-open:rotate-180 transition"
                />
              </summary>
              <div className="absolute left-0 mt-2 w-[760px] bg-[#0b1228] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-4 gap-4 p-4">
                  {[
                    { icon: <Icon name="ShieldCheck" />, name: "Grounding Systems" },
                    { icon: <Icon name="Truck" />, name: "Drilling & Backfill" },
                    { icon: <Icon name="Factory" />, name: "Oil Purification" },
                    { icon: <Icon name="Sparkles" />, name: "Sealing & Barrier" },
                  ].map((x, i) => (
                    <a
                      key={i}
                      href="#applications"
                      className="p-3 rounded-xl border border-white/10 hover:bg:white/5 flex items-center gap-2"
                    >
                      <div className="p-2 rounded-lg bg:white/5">{x.icon}</div>
                      <div className="text-white/90">{x.name}</div>
                    </a>
                  ))}
                </div>
              </div>
            </details>

            {/* مقالات */}
            <details className="group relative">
              <summary className="list-none inline-flex items-center gap-2 px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text:white text-xs lg:text-sm cursor-pointer select-none shadow">
                {dictionaries[lang].nav.resources}
                <Icon
                  name="ChevronDown"
                  size={16}
                  className="group-open:rotate-180 transition"
                />
              </summary>
              <div className="absolute left-0 mt-2 w-[760px] bg-[#0b1228] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-4 grid grid-cols-3 gap-4">
                  {articles.map((a) => (
                    <a
                      key={a.id}
                      href="#blog"
                      className="rounded-2xl border border:white/10 hover:bg:white/5 p-3"
                    >
                      <div className="h-16 bg:white/5 rounded-lg" />
                      <div className="mt-2 text-white/90 font-medium">
                        {a.title}
                      </div>
                      <div className="text-xs text-white/50">
                        {new Date(a.date).toDateString()}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </details>

            {/* شرکت و تماس */}
            <a
              href="#about"
              className="inline-flex items-center px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm shadow"
            >
              {dictionaries[lang].nav.company}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm shadow"
            >
              {dictionaries[lang].nav.contact}
            </a>
          </div>
        </nav>

        {/* منوی موبایل */}
        <Motion.AnimatePresence>
          {menuOpen && (
            <Motion.Nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={bnazanin.className + " md:hidden overflow-hidden"}
            >
              <div className="py-3 grid gap-2 text-white/90">
                <a
                  className="px-2 py-2 hover:bg-white/10 rounded-lg"
                  href="#products"
                >
                  {dict.nav.products}
                </a>
                <a
                  className="px-2 py-2 hover:bg:white/10 rounded-lg"
                  href="#applications"
                >
                  {dict.nav.solutions}
                </a>
                <a
                  className="px-2 py-2 hover:bg:white/10 rounded-lg"
                  href="#resources"
                >
                  {dict.nav.resources}
                </a>
                <a
                  className="px-2 py-2 hover:bg:white/10 rounded-lg"
                  href="#about"
                >
                  {dict.nav.company}
                </a>
                <a
                  className="px-2 py-2 hover:bg:white/10 rounded-lg"
                  href="#contact"
                >
                  {dict.nav.contact}
                </a>
              </div>
            </Motion.Nav>
          )}
        </Motion.AnimatePresence>
      </div>
    </header>
  );
}
