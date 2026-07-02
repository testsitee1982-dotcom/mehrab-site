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
} from "@/app/ui/site-shared";

import { articles } from "@/app/lib/articles";

type MegaKey = "products" | "applications" | "articles" | null;

type LanguageCode = keyof typeof languageMeta;

const flagImages: Record<LanguageCode, string> = {
  fa: "/images/flags/iran.webp",
  en: "/images/flags/uk.webp",
  ru: "/images/flags/russia.webp",
  es: "/images/flags/spain.webp",
  fr: "/images/flags/france.webp",
  de: "/images/flags/germany.webp",
  tr: "/images/flags/turkey.webp",
  ar: "/images/flags/saudi.webp",
  zh: "/images/flags/china.webp",
  ja: "/images/flags/japan.webp",
  ko: "/images/flags/korea.webp",
};

const quickLinks = [
  { label: "صفحه اصلی", href: "/", type: "route" },
  { label: "محصولات", href: "#products", type: "hash" },
  { label: "کاربردها", href: "#applications", type: "hash" },
  { label: "مقالات", href: "#blog", type: "hash" },
  { label: "ویدیو", href: "/videos", type: "route" },
  { label: "تصاویر", href: "/images", type: "route" },
  { label: "تاییدیه ها", href: "/approvals", type: "route" },
  { label: "شرکت", href: "#about", type: "hash" },
  { label: "تماس", href: "#contact", type: "hash" },
] as const;

export function SiteHeader() {
  const [lang, setLang] = useState<LanguageCode>("fa");
  return <Header lang={lang} setLang={setLang} />;
}

export function Header({
  lang,
  setLang,
}: {
  lang: LanguageCode;
  setLang: (l: LanguageCode) => void;
}) {
  const dict = dictionaries[lang];
  const isRTL = useRTL(lang);

  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [openMega, setOpenMega] = useState<MegaKey>(null);

  const headerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [] as typeof searchData;
    return searchData
      .filter((x) => x.label.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 7);
  }, [query]);

  const closeAllOverlays = () => {
    setOpenMega(null);
    setMenuOpen(false);
    setLangOpen(false);
  };

  const toggleMega = (key: Exclude<MegaKey, null>) => {
    setOpenMega((prev) => (prev === key ? null : key));
    setMenuOpen(false);
    setLangOpen(false);
  };

  const openCart = () => {
    window.dispatchEvent(new Event("open-cart-sidebar"));
    closeAllOverlays();
  };

  useEffect(() => {
    const onDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (headerRef.current?.contains(target)) return;
      closeAllOverlays();
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAllOverlays();
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const renderFlag = (code: LanguageCode, className = "h-5 w-7") => (
    <img
      src={flagImages[code]}
      alt={languageMeta[code].label}
      className={`${className} rounded-sm object-cover shadow-sm`}
      loading="eager"
      decoding="async"
    />
  );

  const renderLanguageMenu = (mode: "desktop" | "mobile") => (
    <div className="relative shrink-0" dir="ltr">
      <button
        type="button"
        className={
          mode === "mobile"
            ? "inline-flex h-10 items-center gap-1.5 rounded-xl bg-[#10B981] px-3 text-white shadow-md"
            : "inline-flex h-10 md:h-11 items-center gap-2 rounded-xl bg-[#10B981] px-4 text-white shadow-md hover:bg-[#0EA371]"
        }
        onClick={() => {
          setLangOpen((value) => !value);
          setOpenMega(null);
          setMenuOpen(false);
        }}
        aria-label="انتخاب زبان"
      >
        {renderFlag(lang)}

        <span className="hidden sm:inline text-sm md:text-base font-semibold">
          {languageMeta[lang].label}
        </span>

        <Icon
          name="ChevronDown"
          size={17}
          className={langOpen ? "rotate-180 transition" : "transition"}
        />
      </button>

      {langOpen && (
        <div className="absolute left-0 mt-2 w-56 overflow-hidden rounded-xl border border-white/10 bg-[#0b1228] shadow-xl z-[80]">
          {Object.keys(languageMeta).map((key) => {
            const code = key as LanguageCode;

            return (
              <button
                type="button"
                key={code}
                onClick={() => {
                  setLang(code);
                  setLangOpen(false);
                }}
                className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left hover:bg-white/5"
                dir="ltr"
              >
                <span className="text-sm text-white/90">
                  {languageMeta[code].label}
                </span>

                {renderFlag(code)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  const renderQuickLink = (
    item: (typeof quickLinks)[number],
    className: string
  ) => {
    if (item.type === "route") {
      return (
        <Link
          key={item.href}
          href={item.href}
          className={className}
          onClick={closeAllOverlays}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        key={item.href}
        href={item.href}
        className={className}
        onClick={closeAllOverlays}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md"
      style={{
        background:
          "linear-gradient(90deg, rgba(3,7,18,.88), rgba(2,6,23,.76))",
      }}
    >
      <div className="mx-auto max-w-7xl px-3 md:px-6" ref={headerRef}>
        {/* Mobile top bar */}
        <div className="flex h-14 items-center justify-between gap-2 md:hidden">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl text-white hover:bg-white/10"
            onClick={() => {
              setMenuOpen((value) => !value);
              setOpenMega(null);
              setLangOpen(false);
            }}
            aria-label="باز کردن منو"
          >
            {menuOpen ? (
              <Icon name="X" size={23} />
            ) : (
              <Icon name="Menu" size={23} />
            )}
          </button>

          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center justify-center gap-2"
            onClick={closeAllOverlays}
          >
            <img
              src="/images/logo/mehrab.png"
              alt="رعد و برق مهراب"
              className="h-10 w-auto shrink-0 rounded-lg shadow-lg"
              loading="eager"
            />

            <div
              className={`${isRTL ? btitr.className : ""} truncate text-[15px] font-extrabold leading-5 text-white`}
            >
              رعد و برق مهراب
            </div>
          </Link>

          <div className="flex items-center gap-1.5">
            {renderLanguageMenu("mobile")}

            <button
              type="button"
              onClick={openCart}
              className="relative grid h-10 w-10 place-items-center rounded-xl text-white hover:bg-white/10"
              aria-label="سبد خرید"
            >
              <Icon name="ShoppingCart" size={21} />
            </button>
          </div>
        </div>

        {/* Mobile blue quick navigation */}
        <nav
          className={`${bnazanin.className} flex h-12 items-center gap-2 overflow-x-auto overflow-y-hidden whitespace-nowrap border-t border-white/5 text-white/90 scrollbar-hide md:hidden`}
          aria-label="منوی سریع موبایل"
        >
          {quickLinks.map((item) =>
            renderQuickLink(
              item,
              "inline-flex shrink-0 items-center rounded-xl bg-[#2563eb] px-3 py-1.5 text-xs text-white shadow hover:bg-[#1d4ed8]"
            )
          )}
        </nav>

        {/* Desktop top bar */}
        <div className="hidden h-14 items-center justify-between gap-4 md:flex">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            onClick={closeAllOverlays}
          >
            <img
              src="/images/logo/mehrab.png"
              alt="رعد و برق مهراب"
              className="h-11 w-auto shrink-0 rounded-lg shadow-lg"
              loading="eager"
            />

            <div className="min-w-0">
              <div
                className={`${isRTL ? btitr.className : ""} whitespace-nowrap text-[17px] font-extrabold leading-6 tracking-tight text-white`}
              >
                رعد و برق مهراب
              </div>

              <div
                className={`${isRTL ? bmitra.className : ""} hidden max-w-[260px] truncate text-[12px] leading-4 text-white/70 lg:block`}
              >
                {dict.tagline}
              </div>
            </div>
          </Link>

          <div className="relative hidden w-[36rem] lg:block">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <Icon name="Search" size={18} className="text-white/70" />

              <input
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
                placeholder={dict.searchPlaceholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                dir={isRTL ? "rtl" : "ltr"}
                onFocus={() => {
                  setOpenMega(null);
                  setMenuOpen(false);
                  setLangOpen(false);
                }}
              />
            </div>
                      <Motion.AnimatePresence>
              {results.length > 0 && (
                <Motion.Ul
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b1228] shadow-xl"
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  {results.map((result) => (
                    <li
                      key={result.id}
                      className="flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-white/5"
                    >
                      <span className="text-sm text-white/90">
                        {result.label}
                      </span>

                      <span className="text-[10px] uppercase tracking-wider text-white/50">
                        {result.type}
                      </span>
                    </li>
                  ))}
                </Motion.Ul>
              )}
            </Motion.AnimatePresence>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {renderLanguageMenu("desktop")}

            <a
              href="#catalog"
              className="inline-flex h-11 min-w-[136px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[var(--brand-accent)] px-5 font-bold leading-[1.1] text-slate-900 shadow-md hover:brightness-95"
              aria-label={dict?.nav?.catalog || "دریافت کاتالوگ"}
              onClick={closeAllOverlays}
            >
              <Icon name="Download" size={18} />
              {dict?.nav?.catalog || "دریافت کاتالوگ"}
            </a>

            <button
              type="button"
              onClick={openCart}
              className="relative rounded-xl p-2 text-white hover:bg-white/10"
              aria-label="سبد خرید"
            >
              <Icon name="ShoppingCart" />
              <span
                id="cart-count"
                className="absolute -right-1 -top-1 hidden h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[var(--brand-primary)] px-1.5 text-center text-[10px] leading-none text-white"
              >
                0
              </span>
            </button>
          </div>
        </div>

        {/* Desktop bottom navigation */}
        <nav
          className={
            bnazanin.className +
            " hidden h-12 w-full items-center justify-between text-white/90 md:flex rtl:flex-row-reverse"
          }
          aria-label="منوی اصلی"
        >
          <div className="flex shrink-0 items-center gap-1.5 lg:gap-2">
            <a
              href="tel:+982133963108"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#2563eb] px-2.5 py-1.5 text-xs text-white shadow hover:bg-[#1d4ed8] lg:px-3 lg:text-sm"
              aria-label="تماس تلفنی"
              onClick={() => setOpenMega(null)}
            >
              <Icon name="Phone" size={14} />
              <span dir="ltr">021 -3396 3108</span>
            </a>

            <a
              href="mailto:sales@bentonpower.com"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#2563eb] px-2.5 py-1.5 text-xs text-white shadow hover:bg-[#1d4ed8] lg:px-3 lg:text-sm"
              aria-label="ایمیل"
              onClick={() => setOpenMega(null)}
            >
              <Icon name="Mail" size={14} />
              <span>sales@bentonpower.com</span>
            </a>
          </div>

          <div className="relative flex shrink-0 items-center gap-1.5 lg:gap-2">
            <Link
              href="/"
              onClick={closeAllOverlays}
              className="inline-flex items-center rounded-xl bg-[#2563eb] px-2.5 py-1.5 text-xs text-white shadow hover:bg-[#1d4ed8] lg:px-3 lg:text-sm"
            >
              صفحه اصلی
            </Link>

            <button
              type="button"
              onClick={() => toggleMega("products")}
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-2.5 py-1.5 text-xs text-white shadow hover:bg-[#1d4ed8] lg:px-3 lg:text-sm"
            >
              {dict.nav.products}
              <Icon
                name="ChevronDown"
                size={16}
                className={
                  openMega === "products"
                    ? "rotate-180 transition"
                    : "transition"
                }
              />
            </button>

            <button
              type="button"
              onClick={() => toggleMega("applications")}
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-2.5 py-1.5 text-xs text-white shadow hover:bg-[#1d4ed8] lg:px-3 lg:text-sm"
            >
              {dict.nav.solutions}
              <Icon
                name="ChevronDown"
                size={16}
                className={
                  openMega === "applications"
                    ? "rotate-180 transition"
                    : "transition"
                }
              />
            </button>

            <button
              type="button"
              onClick={() => toggleMega("articles")}
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-2.5 py-1.5 text-xs text-white shadow hover:bg-[#1d4ed8] lg:px-3 lg:text-sm"
            >
              {dict.nav.resources}
              <Icon
                name="ChevronDown"
                size={16}
                className={
                  openMega === "articles"
                    ? "rotate-180 transition"
                    : "transition"
                }
              />
            </button>

            {quickLinks
              .filter(
                (item) =>
                  !["/", "#products", "#applications", "#blog"].includes(item.href)
              )
              .map((item) =>
                renderQuickLink(
                  item,
                  "inline-flex items-center rounded-xl bg-[#2563eb] px-2.5 py-1.5 text-xs text-white shadow hover:bg-[#1d4ed8] lg:px-3 lg:text-sm"
                )
              )}
            <Motion.AnimatePresence>
              {openMega && (
                <Motion.Div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-[54px] z-[60] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                  style={{
                    right: 0,
                    left: "auto",
                    width: "min(960px, calc(100vw - 32px))",
                    background: "#0b1228",
                  }}
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  <div style={{ maxHeight: "70vh", overflow: "auto" }}>
                    {openMega === "products" && (
                      <div className="p-4">
                        <div className="grid grid-cols-3 gap-4">
                          {products.slice(0, 6).map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.id}`}
                              onClick={() => setOpenMega(null)}
                              className="group rounded-xl border border-white/10 p-3 hover:bg-white/5"
                            >
                              <div className="h-20 rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.15),rgba(255,255,255,.05)_60%)]" />

                              <div className="mt-2 line-clamp-2 font-medium text-white/90 group-hover:text-white">
                                {product.name}
                              </div>

                              <div className="mt-1 text-xs text-white/50">
                                {dict.specs}
                              </div>
                            </Link>
                          ))}

                          <a
                            href="#products"
                            onClick={() => setOpenMega(null)}
                            className="flex items-center justify-center rounded-xl border border-dashed border-white/10 p-3 text-white/70 hover:bg-white/5"
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
                            {
                              icon: "ShieldCheck",
                              name: "Grounding Systems",
                              href: "#applications",
                            },
                            {
                              icon: "Truck",
                              name: "Drilling & Backfill",
                              href: "#applications",
                            },
                            {
                              icon: "Factory",
                              name: "Oil Purification",
                              href: "#applications",
                            },
                            {
                              icon: "Sparkles",
                              name: "Sealing & Barrier",
                              href: "#applications",
                            },
                          ].map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={() => setOpenMega(null)}
                              className="flex items-center gap-2 rounded-xl border border-white/10 p-3 hover:bg-white/5"
                            >
                              <div className="rounded-lg bg-white/5 p-2">
                                <Icon name={item.icon} />
                              </div>

                              <div className="text-white/90">{item.name}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {openMega === "articles" && (
                      <div className="p-4">
                        <div className="grid grid-cols-3 gap-4">
                          {articles.slice(0, 6).map((article) => (
                            <Link
                              key={article.id ?? article.slug}
                              href={`/articles/${article.slug}`}
                              onClick={() => setOpenMega(null)}
                              className="rounded-2xl border border-white/10 p-3 hover:bg-white/5"
                            >
                              <div className="h-16 rounded-lg bg-white/5" />

                              <div className="mt-2 line-clamp-2 font-medium text-white/90">
                                {article.title}
                              </div>

                              <div className="text-xs text-white/50">
                                {new Date(article.date).toDateString()}
                              </div>
                            </Link>
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

        {/* Mobile hamburger menu */}
        <Motion.AnimatePresence>
          {menuOpen && (
            <Motion.Nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={
                bnazanin.className +
                " overflow-hidden border-t border-white/10 md:hidden"
              }
            >
              <div className="grid gap-2 py-3 text-white/90">
                {quickLinks.map((item) =>
                  renderQuickLink(
                    item,
                    "rounded-lg px-3 py-2 text-right hover:bg-white/10"
                  )
                )}

                <div className="mt-2 grid gap-2 border-t border-white/10 pt-3">
                  <a
                    className="rounded-lg px-3 py-2 text-right hover:bg-white/10"
                    href="tel:+982133963108"
                    onClick={closeAllOverlays}
                  >
                    تماس: <span dir="ltr">021 -3396 3108</span>
                  </a>

                  <a
                    className="rounded-lg px-3 py-2 text-right hover:bg-white/10"
                    href="mailto:sales@bentonpower.com"
                    onClick={closeAllOverlays}
                  >
                    sales@bentonpower.com
                  </a>
                </div>
              </div>
            </Motion.Nav>
          )}
        </Motion.AnimatePresence>
      </div>
    </header>
  );
}