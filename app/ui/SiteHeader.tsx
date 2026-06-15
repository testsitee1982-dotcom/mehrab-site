// app/ui/SiteHeader.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
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
} from "@/app/ui/site-shared";

import { articles } from "@/app/lib/articles";

type MegaKey = "products" | "applications" | "articles" | null;

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
  const isRTL = useRTL(lang);

  const [menuOpen, setMenuOpen] = useState(false);

  // سرچ
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    if (!query.trim()) return [] as typeof searchData;
    return searchData
      .filter((x) => x.label.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 7);
  }, [query]);

  // --- منوی زبان کنترل‌شده ---
  const [langOpen, setLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDetailsElement>(null);

  // --- ✅ مگا‌منوهای کنترل‌شده (فقط یکی باز باشد) ---
  const [openMega, setOpenMega] = useState<MegaKey>(null);
  const megaWrapRef = useRef<HTMLDivElement>(null);

  const closeAllOverlays = () => {
    setOpenMega(null);
    setMenuOpen(false);
    setLangOpen(false);
  };

  const toggleMega = (key: Exclude<MegaKey, null>) => {
    setOpenMega((prev) => (prev === key ? null : key));
    // وقتی مگا باز میشه، موبایل منو بسته باشه
    setMenuOpen(false);
  };

  // بستن با کلیک بیرون + ESC
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!megaWrapRef.current) return;

      // اگر کلیک داخل خود مگا/دکمه‌ها بود، هیچ
      if (megaWrapRef.current.contains(t)) return;

      // اگر روی منوی زبان کلیک شد، مگاها رو ببندیم
      if (langMenuRef.current && langMenuRef.current.contains(t)) {
        setOpenMega(null);
        return;
      }

      // بیرون همه چیز
      setOpenMega(null);
      setMenuOpen(false);
      // زبان رو هم اگر باز بود ببند
      setLangOpen(false);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMega(null);
        setMenuOpen(false);
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10"
      style={{
        background:
          "linear-gradient(90deg, rgba(3,7,18,.85), rgba(2,6,23,.7))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={megaWrapRef}>
        {/* ✅ تغییر اصلی: h-16 -> h-14 */}
        <div className="flex items-center justify-between h-14 gap-4">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-xl hover:bg-white/10"
              onClick={() => {
                setMenuOpen((v) => !v);
                setOpenMega(null);
                setLangOpen(false);
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <Icon name="X" size={22} /> : <Icon name="Menu" size={22} />}
            </button>

{/* برند */}
<Link href="#home" className="flex items-center gap-3 min-w-0">
  <img
    src="/images/logo/mehrab.png"
    alt="رعد و برق مهراب"
    className="h-11 w-auto rounded-lg shadow-lg shrink-0"
    loading="eager"
  />

  <div className="min-w-0">
    {/* عنوان: یک خط، جمع‌وجور */}
    <div
      className={`${isRTL ? btitr.className : ""} text-white font-extrabold tracking-tight text-[15px] md:text-[17px] leading-5 md:leading-6 whitespace-nowrap`}
    >
      رعد و برق مهراب
    </div>

    {/* زیرعنوان: دسکتاپ نمایش، موبایل مخفی (مثل هدر حرفه‌ای) */}
    <div
      className={`${isRTL ? bmitra.className : ""} text-white/70 text-[11px] md:text-[12px] leading-4 hidden md:block truncate max-w-[260px]`}
    >
      {dictionaries[lang].tagline}
    </div>
  </div>
</Link>
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
                onFocus={() => {
                  // وقتی سرچ فوکوس می‌گیرد، مگاها بسته شوند
                  setOpenMega(null);
                  setMenuOpen(false);
                }}
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
                      <span className="text-sm text-white/90">{r.label}</span>
                      <span className="text-[10px] text-white/50 uppercase tracking-wider">
                        {r.type}
                      </span>
                    </li>
                  ))}
                </Motion.Ul>
              )}
            </Motion.AnimatePresence>
          </div>

          {/* زبان + کاتالوگ + سبد */}
          <div className="flex items-center gap-2 flex-nowrap">
            {/* زبان */}
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
                    e.preventDefault();
                    setLangOpen((v) => !v);
                    setOpenMega(null);
                    setMenuOpen(false);
                  }}
                >
                  <span className="text-xl md:text-2xl leading-none emoji-flag">
                    {flags[lang]}
                  </span>
                  <span className="text-sm md:text-base font-semibold">
                    {languageMeta[lang].label}
                  </span>
                  <Icon
                    name="ChevronDown"
                    size={18}
                    className={langOpen ? "rotate-180 transition" : "transition"}
                  />
                </summary>

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
                        {languageMeta[k as keyof typeof languageMeta].label}
                      </span>
                      <span className="text-xl leading-none emoji-flag">
                        {flags[k as keyof typeof flags]}
                      </span>
                    </button>
                  ))}
                </div>
              </details>
            </div>

            {/* کاتالوگ */}
            <a
              href="#catalog"
              className="hidden md:inline-flex items-center justify-center gap-2
                         bg-[var(--brand-accent)] text-slate-900 font-bold
                         px-4 md:px-5 h-10 md:h-11 rounded-xl hover:brightness-95
                         whitespace-nowrap shrink-0 leading-[1.1] min-w-[136px] shadow-md"
              aria-label={dict?.nav?.catalog || (lang === "en" ? "Get Catalog" : "دریافت کاتالوگ")}
              onClick={() => {
                setOpenMega(null);
                setMenuOpen(false);
                setLangOpen(false);
              }}
            >
              <Icon name="Download" size={18} />
              {dict?.nav?.catalog || (lang === "en" ? "Get Catalog" : "دریافت کاتالوگ")}
            </a>

            {/* سبد */}
            <button
              type="button"
              onClick={() => {
                // ✅ اتصال به پنل سبد خرید
                window.dispatchEvent(new Event("open-cart-sidebar"));
                setOpenMega(null);
                setMenuOpen(false);
                setLangOpen(false);
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

        {/* ===== نوار منوی پایین هدر ===== */}
        <nav
          className={
            bnazanin.className +
            " hidden md:flex w-full items-center h-12 text-white/90 justify-between rtl:flex-row-reverse"
          }
        >
          {/* چپ: تماس و ایمیل */}
          <div className="flex items-center gap-1.5 lg:gap-2">
            <a
              href="tel:+982133963108"
              className="shrink-0 inline-flex items-center gap-2 px-2.5 py-1.5 lg:px-3 lg:py-1.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm shadow"
              aria-label="Call"
              onClick={() => setOpenMega(null)}
            >
              <Icon name="Phone" size={14} />
              <span dir="ltr"> 021 -3396 3108</span>
            </a>

            <a
              href="mailto:sales@bentonpower.com"
              className="shrink-0 inline-flex items-center gap-2 px-2.5 py-1.5 lg:px-3 lg:py-1.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm shadow"
              aria-label="Email"
              onClick={() => setOpenMega(null)}
            >
              <Icon name="Mail" size={14} />
              <span>sales@bentonpower.com</span>
            </a>
          </div>

          {/* راست: دکمه‌های منو + مگاها */}
          <div className="relative flex items-center gap-1.5 lg:gap-2">
            {/* محصولات */}
            <button
              type="button"
              onClick={() => toggleMega("products")}
              className="inline-flex items-center gap-2 px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm cursor-pointer select-none shadow"
            >
              {dict.nav.products}
              <Icon
                name="ChevronDown"
                size={16}
                className={openMega === "products" ? "rotate-180 transition" : "transition"}
              />
            </button>

            {/* کاربردها */}
            <button
              type="button"
              onClick={() => toggleMega("applications")}
              className="inline-flex items-center gap-2 px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm cursor-pointer select-none shadow"
            >
              {dict.nav.solutions}
              <Icon
                name="ChevronDown"
                size={16}
                className={openMega === "applications" ? "rotate-180 transition" : "transition"}
              />
            </button>

            {/* مقالات */}
            <button
              type="button"
              onClick={() => toggleMega("articles")}
              className="inline-flex items-center gap-2 px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm cursor-pointer select-none shadow"
            >
              {dict.nav.resources}
              <Icon
                name="ChevronDown"
                size={16}
                className={openMega === "articles" ? "rotate-180 transition" : "transition"}
              />
            </button>

{/* ویدیو */}
<Link
  href="/videos"
  className="inline-flex items-center px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm shadow"
  onClick={closeAllOverlays}
>
  ویدیو
</Link>

{/* تصاویر */}
<Link
  href="/images"
  className="inline-flex items-center px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm shadow"
  onClick={closeAllOverlays}
>
  تصاویر
</Link>

            {/* شرکت و تماس */}
            <a
              href="#about"
              className="inline-flex items-center px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm shadow"
              onClick={closeAllOverlays}
            >
              {dict.nav.company}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-2.5 py-1.5 lg:px-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs lg:text-sm shadow"
              onClick={closeAllOverlays}
            >
              {dict.nav.contact}
            </a>

            {/* ✅ پنجره مگا منوها (هیچوقت بیرون صفحه نمی‌زند) */}
            <Motion.AnimatePresence>
              {openMega && (
                <Motion.Div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-[54px] z-[60] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                  style={{
                    // ✅ برای RTL همیشه از راست بچسبد، بیرون نمی‌زند
                    right: 0,
                    left: "auto",
                    width: "min(960px, calc(100vw - 32px))",
                    background: "#0b1228",
                  }}
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {/* بدنه: اگر زیاد شد داخلش اسکرول */}
                  <div style={{ maxHeight: "70vh", overflow: "auto" }}>
                    {openMega === "products" && (
                      <div className="p-4">
                        <div className="grid grid-cols-3 gap-4">
                          {products.slice(0, 6).map((p) => (
                            <a
                              key={p.id}
                              href="#products"
                              onClick={() => setOpenMega(null)}
                              className="group p-3 rounded-xl border border-white/10 hover:bg-white/5"
                            >
                              <div className="h-20 rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.15),rgba(255,255,255,.05)_60%)]" />
                              <div className="mt-2 font-medium text-white/90 group-hover:text-white line-clamp-2">
                                {p.name}
                              </div>
                              <div className="text-xs text-white/50 mt-1">
                                {dict.specs}
                              </div>
                            </a>
                          ))}

                          <a
                            href="#products"
                            onClick={() => setOpenMega(null)}
                            className="p-3 rounded-xl border border-dashed border-white/10 hover:bg-white/5 flex items-center justify-center text-white/70"
                          >
                            {dict.featured.viewAll}
                          </a>
                        </div>
                      </div>
                    )}

                    {openMega === "applications" && (
                      <div className="p-4">
                        <div className="grid grid-cols-4 gap-4">
                          {[
                            { icon: "ShieldCheck", name: "Grounding Systems", href: "#applications" },
                            { icon: "Truck", name: "Drilling & Backfill", href: "#applications" },
                            { icon: "Factory", name: "Oil Purification", href: "#applications" },
                            { icon: "Sparkles", name: "Sealing & Barrier", href: "#applications" },
                          ].map((x, i) => (
                            <a
                              key={i}
                              href={x.href}
                              onClick={() => setOpenMega(null)}
                              className="p-3 rounded-xl border border-white/10 hover:bg-white/5 flex items-center gap-2"
                            >
                              <div className="p-2 rounded-lg bg-white/5">
                                <Icon name={x.icon} />
                              </div>
                              <div className="text-white/90">{x.name}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {openMega === "articles" && (
                      <div className="p-4">
                        <div className="grid grid-cols-3 gap-4">
                          {articles.slice(0, 6).map((a) => (
                            <a
                              key={a.id ?? a.slug}
                              href="#blog"
                              onClick={() => setOpenMega(null)}
                              className="rounded-2xl border border-white/10 hover:bg-white/5 p-3"
                            >
                              <div className="h-16 bg-white/5 rounded-lg" />
                              <div className="mt-2 text-white/90 font-medium line-clamp-2">
                                {a.title}
                              </div>
                              <div className="text-xs text-white/50">
                                {new Date(a.date).toDateString()}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Motion.Div>
              )}
            </Motion.AnimatePresence>
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
                  onClick={closeAllOverlays}
                >
                  {dict.nav.products}
                </a>

                <a
                  className="px-2 py-2 hover:bg-white/10 rounded-lg"
                  href="#applications"
                  onClick={closeAllOverlays}
                >
                  {dict.nav.solutions}
                </a>

                <a
                  className="px-2 py-2 hover:bg-white/10 rounded-lg"
                  href="#blog"
                  onClick={closeAllOverlays}
                >
                  {dict.nav.resources}
                </a>

                <Link
                  className="px-2 py-2 hover:bg-white/10 rounded-lg"
                  href="/videos"
                  onClick={closeAllOverlays}
                >
                  ویدیو
                </Link>

                <Link
                  className="px-2 py-2 hover:bg-white/10 rounded-lg"
                  href="/images"
                  onClick={closeAllOverlays}
                >
                  تصاویر
                </Link>

                <a
                  className="px-2 py-2 hover:bg-white/10 rounded-lg"
                  href="#about"
                  onClick={closeAllOverlays}
                >
                  {dict.nav.company}
                </a>

                <a
                  className="px-2 py-2 hover:bg-white/10 rounded-lg"
                  href="#contact"
                  onClick={closeAllOverlays}
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