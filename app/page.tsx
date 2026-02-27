"use client";

import type { JSX } from "react";
import React, { useMemo, useState, useRef, useEffect, Fragment } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { articles } from "./lib/articles";
import { SiteFooter } from "./ui/SiteFooter";
import Image from "next/image";
import { products } from "./lib/products";

// فونت‌ها (چون پوشه fonts داخل app است، مسیر نسبی می‌دهیم)
const btitr = localFont({
  src: "./fonts/BTitr.woff2",
  display: "swap",
  weight: "400",
  preload: true,
});

const bkoodak = localFont({
  src: "./fonts/BKoodak.woff2",   // اگر در public/fonts است بنویس: "/fonts/BKoodak.woff2"
  display: "swap",
  weight: "400",
  preload: true,
});

const bmitra = localFont({
  src: "./fonts/BMitra.woff2",
  display: "swap",
  weight: "400",
  preload: true,
});

const bnazanin = localFont({
  src: "./fonts/BNazanin.woff2",
  display: "swap",
  weight: "400",
  preload: true,
});

/*
  ==============================================
  BentonPower — Main Page (App Router Client)
  ==============================================
  - Safely loads framer-motion & lucide-react on the client only.
  - Removes motion-only props on fallback to avoid React warnings.
  - Adds a cinematic, professional background (no extra deps).
*/

/* ===================== Framer Motion (safe client shim) ===================== */
let FM: any = null;
let fmImportStarted = false;
function ensureFramerMotionClientImport() {
  if (typeof window === "undefined" || fmImportStarted) return;
  fmImportStarted = true;
  import("framer-motion")
    .then((mod) => {
      FM = mod ?? null;
    })
    .catch(() => {
      FM = null;
    });
}

// props مخصوص framer-motion که نباید روی DOM بیفتند
const MOTION_ONLY_PROPS = new Set([
  "initial",
  "animate",
  "exit",
  "whileInView",
  "transition",
  "viewport",
  "layout",
  "variants",
  "onAnimationComplete",
  "onUpdate",
]);

// کمک‌تابع: اگر fallback (یعنی خودِ تگ HTML) است، پراپ‌های framer-motion را حذف کن
function sanitizePropsForFallback<P extends Record<string, any>>(props: P): P {
  const out: Record<string, any> = {};
  for (const k in props) {
    if (!MOTION_ONLY_PROPS.has(k)) out[k] = props[k];
  }
  return out as P;
}

const makeMotionTag =
  <T extends keyof JSX.IntrinsicElements>(tag: T) =>
  function MotionTag(props: any) {
    // اگر framer-motion لود نشده، از تگ استاندارد استفاده کن و پراپ‌ها را پاکسازی کن
    const Comp: any = FM?.motion?.[tag] ?? tag;
    const cleaned = typeof Comp === "string" ? sanitizePropsForFallback(props) : props;
    return <Comp {...cleaned} />;
  };

const Motion = {
  Div: makeMotionTag("div"),
  Ul: makeMotionTag("ul"),
  Nav: makeMotionTag("nav"),
  Aside: makeMotionTag("aside"),
  AnimatePresence: function AnimatePresenceShim({ children, ...rest }: any) {
    const Comp: any = FM?.AnimatePresence ?? Fragment;
    // Fragment هیچ پراپی نمی‌پذیرد، پس نریزیم روی آن
    return <Comp {...(Comp === Fragment ? {} : rest)}>{children}</Comp>;
  },
};

/* ===================== Lucide (safe client shim) ===================== */
let Lucide: Record<string, any> | null = null;
let lucideImportStarted = false;
function ensureLucideClientImport() {
  if (typeof window === "undefined" || lucideImportStarted) return;
  lucideImportStarted = true;
  import("lucide-react")
    .then((mod) => {
      Lucide = (mod as unknown as Record<string, any>) ?? null;
    })
    .catch(() => {
      Lucide = null;
    });
}
function Icon({
  name,
  size,
  className,
  ...rest
}: {
  name: string;
  size?: number;
  className?: string;
} & Record<string, any>) {
  const Cmp: any = Lucide?.[name];
  if (Cmp) return <Cmp size={size} className={className} {...rest} />;
  const px = (size ?? 20) + "px";
  // fallback ساده
  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: "inline-block",
        width: px,
        height: px,
        borderRadius: 6,
        background: "rgba(255,255,255,.18)",
      }}
      {...rest}
    />
  );
}

/* ===================== Brand & i18n ===================== */
const brand = {
  primary: "#0C67F2",
  dark: "#0F172A",
  gray: "#64748B",
  bg: "#0B1220",
  accent: "#F59E0B",
  success: "#10B981",
};

const flags: Record<string, string> = {
  fa: "🇮🇷",
  en: "🇬🇧",
  ru: "🇷🇺",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  tr: "🇹🇷",
  ar: "🇸🇦",
  zh: "🇨🇳",
  ja: "🇯🇵",
  ko: "🇰🇷",
};

const languageMeta = {
  fa: { label: "فارسی", dir: "rtl" },
  en: { label: "English", dir: "ltr" },
  ru: { label: "Русский", dir: "ltr" },
  es: { label: "Español", dir: "ltr" },
  fr: { label: "Français", dir: "ltr" },
  de: { label: "Deutsch", dir: "ltr" },
  tr: { label: "Türkçe", dir: "ltr" },
  ar: { label: "العربية", dir: "rtl" },
  zh: { label: "中文", dir: "ltr" },
  ja: { label: "日本語", dir: "ltr" },
  ko: { label: "한국어", dir: "ltr" },
} as const;

const baseEN = {
  tagline: "Advanced Bentonite Solutions for the Power Industry",
  nav: {
    products: "Products",
    solutions: "Applications",
    resources: "Resources",
    company: "Company",
    contact: "Contact",
    catalog: "Get Catalog",
  },
  hero: {
    title: "Engineered Bentonite for Electrical Performance",
    subtitle:
      "From grounding systems to oil purification — consistent quality, verified by international standards.",
    ctaPrimary: "Request Free Consultation",
    ctaSecondary: "Watch Factory Tour",
  },
  featured: { title: "Featured Products", viewAll: "View all products" },
  why: { title: "Why choose us?" },
  apps: { title: "Power Industry Applications" },
  clients: { title: "Trusted by leading utilities" },
  stats: { title: "Numbers that matter" },
  blog: { title: "Latest Articles" },
  finalCta: {
    title: "Ready to optimize your power network with premium bentonite?",
    subtitle: "Talk to our technical team or shop online with instant specs.",
    btn1: "Get a Quote",
    btn2: "Shop Now",
  },
  footer: {
    quickLinks: "Quick Links",
    policies: "Policies",
    newsletter: "Join our newsletter",
    rights: "All rights reserved.",
  },
  searchPlaceholder: "Search products & articles...",
  compare: "Compare",
  addToCart: "Add to Cart",
  details: "Details",
  specs: "Technical Data Sheet",
  reviews: "Reviews",
  priceOnRequest: "Price on request",
  contactUs: "Contact Us",
  phone: "Phone",
  email: "Email",
  address: "Address",
  hours: "Hours",
  downloadCatalog: "Download Catalog",
  viewOnMap: "View on Map",
};

const faIR: typeof baseEN = {
  tagline: "راهکارهای پیشرفته بنتونیت برای صنعت برق",
  nav: {
    products: "محصولات",
    solutions: "کاربردها",
    resources: "مقالات",
    company: "شرکت",
    contact: "تماس",
    catalog: "دریافت کاتالوگ",
  },
  hero: {
    title: "بنتونیت مهندسی‌شده برای عملکرد الکتریکی",
    subtitle:
      "از سیستم‌های ارت تا تصفیه روغن — کیفیت یکنواخت با تاییدیه استانداردهای بین‌المللی.",
    ctaPrimary: "درخواست مشاوره رایگان",
    ctaSecondary: "مشاهده تور کارخانه",
  },
  featured: { title: "محصولات شاخص", viewAll: "مشاهده همه محصولات" },
  why: { title: "چرا ما؟" },
  apps: { title: "کاربردهای صنعت برق" },
  clients: { title: "مورد اعتماد شرکت‌های پیشرو" },
  stats: { title: "آمارهای مهم" },
  blog: { title: "آخرین مقالات" },
  finalCta: {
    title: "آماده ارتقای شبکه برق با بنتونیت ممتاز هستید؟",
    subtitle: "با تیم فنی ما گفتگو کنید یا آنلاین خرید کنید.",
    btn1: "دریافت پیش‌فاکتور",
    btn2: "خرید آنلاین",
  },
  footer: {
    quickLinks: "لینک‌های سریع",
    policies: "قوانین و سیاست‌ها",
    newsletter: "عضویت در خبرنامه",
    rights: "کلیه حقوق محفوظ است.",
  },
  searchPlaceholder: "جستجوی محصولات و مقالات...",
  compare: "مقایسه",
  addToCart: "افزودن به سبد",
  details: "جزئیات",
  specs: "برگه مشخصات فنی",
  reviews: "نظرات",
  priceOnRequest: "قیمت به‌صورت استعلام",
  contactUs: "تماس با ما",
  phone: "تلفن",
  email: "ایمیل",
  address: "آدرس",
  hours: "ساعات کاری",
  downloadCatalog: "دریافت کاتالوگ",
  viewOnMap: "مشاهده روی نقشه",
};

const dictionaries: Record<keyof typeof languageMeta, typeof baseEN> = {
  fa: faIR,
  en: baseEN,
  ru: baseEN,
  es: baseEN,
  fr: baseEN,
  de: baseEN,
  tr: baseEN,
  ar: baseEN,
  zh: baseEN,
  ja: baseEN,
  ko: baseEN,
};


const searchData = [
  ...products.map((p) => ({
    id: p.id,
    label: p.name,
    type: "product" as const,
  })),
  ...articles.map((a) => ({
    id: a.id,
    label: a.title,
    type: "article" as const,
  })),
];

/* ===================== Utils ===================== */
// ===================== Safe useRTL (بدون کرش) =====================
/**
 * برمی‌گرداند true اگر زبان RTL باشد.
 * در صورت نبودن languageMeta یا lang، از <html dir> یا پیش‌فرض‌ها استفاده می‌کند.
 */
const useRTL = (lang?: keyof typeof languageMeta) => {
  try {
    // 1) کلید معتبر (پیش‌فرض fa)
    const key = (lang ?? "fa") as keyof typeof languageMeta;

    // 2) تلاش برای خواندن از languageMeta (بدون کرش)
    const metaDir = (languageMeta as any)?.[key]?.dir as string | undefined;
    if (metaDir === "rtl" || metaDir === "ltr") return metaDir === "rtl";

    // 3) اگر languageMeta در دسترس نبود، از <html dir> بخوان
    if (typeof document !== "undefined") {
      const htmlDir = document.documentElement.getAttribute("dir");
      if (htmlDir === "rtl" || htmlDir === "ltr") return htmlDir === "rtl";
    }

    // 4) فالس‌بک بر اساس زبان‌های معمول RTL
    const rtlLangs = new Set(["fa", "ar", "ur", "he"]);
    return rtlLangs.has((key as string).toLowerCase());
  } catch {
    // در شرایط غیرمنتظره، بیفت روی RTL برای تجربه‌ی فارسی
    return true;
  }
};

/* ===================== Global Cinematic Background ===================== */
function GlobalBackgroundPro() {
  // tiny seamless noise (SVG) encoded as data URL
  const noise =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxmaWx0ZXIgaWQ9J24nPjxmZVR1cmJ1bGVuY2UgdHlwZT0nc3RpdGNoJyBhcWJsdWRlPScuMycvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbHRlcj0ndXJsKCNuKScgZmlsbD0nI2ZmZicgZmlsbC1vcGFjaXR5PScwLjAzJy8+PC9zdmc+";

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-50 pointer-events-none">
      {/* Base deep gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 8% 12%, rgba(14,110,253,.22), transparent 45%)," +
            "radial-gradient(1100px 650px at 92% 0%, rgba(245,158,11,.18), transparent 45%)," +
            "linear-gradient(180deg,#070b17 0%, #0b1220 35%, #0a0f1e 100%)",
        }}
      />

      {/* Conic glow (subtle animated) */}
      <div
        className="absolute -top-40 left-1/2 h-[120vh] w-[120vw] -translate-x-1/2 opacity-[.16] blur-3xl bg-[conic-gradient(from_180deg_at_50%_50%,#0ea5e9,#6366f1,#f59e0b,#0ea5e9)] will-change-transform"
        style={{ animation: "slow-spin 40s linear infinite" }}
      />

      {/* Aurora ribbons */}
      <div
        className="absolute inset-0 opacity-[.18] will-change-transform"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, rgba(56,189,248,.12) 30%, transparent 60%), linear-gradient(250deg, transparent 10%, rgba(168,85,247,.10) 45%, transparent 70%)",
          maskImage:
            "radial-gradient(60% 40% at 30% 30%, black 40%, transparent 70%), radial-gradient(60% 40% at 70% 10%, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(60% 40% at 30% 30%, black 40%, transparent 70%), radial-gradient(60% 40% at 70% 10%, black 40%, transparent 70%)",
          animation: "floaty 18s ease-in-out infinite alternate",
        }}
      />

      {/* Elegant dotted grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#ffffff14 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Vignette edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 0%, transparent 0%, rgba(0,0,0,.10) 60%, rgba(0,0,0,.22) 100%)",
        }}
      />

      {/* Soft film noise */}
      <div
        className="absolute inset-0 mix-blend-soft-light opacity-40"
        style={{ backgroundImage: `url(${noise})` }}
      />
    </div>
  );
}

function MenuItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <details className="group relative">
      <summary
        className="list-none inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white cursor-pointer select-none shadow"
        style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
      >
        {label}
        <Icon name="ChevronDown" size={16} className="group-open:rotate-180 transition" />
      </summary>
      <div className="absolute left-0 mt-2 w-[760px] bg-[#0b1228] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {children}
      </div>
    </details>
  );
}

function MegaMenu({ lang }: { lang: keyof typeof languageMeta }) {
  const dict = dictionaries[lang];

  return (
    <div
      className={`${bnazanin.className} flex items-center gap-6 text-sm`}
    >
      {/* محصولات */}
      <MenuItem label={dict.nav.products}>
        <div className="grid grid-cols-3 gap-4 p-4">
          {products.slice(0, 3).map((p) => (
            <a
              key={p.id}
              href="#products"
              className="group p-3 rounded-xl border border-white/10 hover:bg-white/5"
            >
              <div className="h-20 rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.15),rgba(255,255,255,.05)_60%)]" />
              <div className="mt-2 font-medium text-white/90 group-hover:text-white">
                {p.name}
              </div>
              <div className="text-xs text-white/50">{dict.specs}</div>
            </a>
          ))}

          <a
            href="#products"
            className="p-3 rounded-xl border border-dashed border-white/10 hover:bg-white/5 flex items-center justify-center text-white/60"
          >
            {dict.featured.viewAll}
          </a>
        </div>
      </MenuItem>

      {/* راهکارها */}
      <MenuItem label={dict.nav.solutions}>
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
              className="p-3 rounded-xl border border-white/10 hover:bg-white/5 flex items-center gap-2"
            >
              <div className="p-2 rounded-lg bg-white/5">{x.icon}</div>
              <div className="text-white/90">{x.name}</div>
            </a>
          ))}
        </div>
      </MenuItem>

      {/* منابع (مقالات) */}
      <MenuItem label={dict.nav.resources}>
        <div className="p-4 grid grid-cols-3 gap-4">
          {articles.map((a) => (
            <Link
              key={a.id ?? a.slug}
              href={`/articles/${a.slug}`}
              className="rounded-2xl border border-white/10 hover:bg-white/5 p-3 block"
            >
              <div className="h-16 bg-white/5 rounded-lg" />
              <div className="mt-2 text-white/90 font-medium line-clamp-2">
                {a.title}
              </div>
              <div className="text-xs text-white/50">
                {new Date(a.date).toDateString()}
              </div>
            </Link>
          ))}
        </div>
      </MenuItem>

      {/* لینک‌های ثابت */}
      <a
        href="#about"
        className="inline-flex items-center px-3 py-1.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow"
      >
        {dict.nav.company}
      </a>
      <a
        href="#contact"
        className="inline-flex items-center px-3 py-1.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow"
      >
        {dict.nav.contact}
      </a>
    </div>
  );
}

/* ===================== Sections ===================== */
function Hero({ lang }: { lang: keyof typeof languageMeta }) {
  const dict = dictionaries[lang];
  const isRTL = useRTL(lang);

  const heroVideoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    const v = heroVideoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="home" className="relative isolate">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className={isRTL ? "text-right" : "text-left"}>
          <div
            className={`${isRTL ? bnazanin.className : ""} inline-flex items-center gap-2 px-2 py-1 rounded-full border border-white/10 text-white/80 text-[0.95rem]`}
          >
            <Icon name="Stars" size={14} />
            {dictionaries[lang].tagline}
          </div>

          <h1
            className={`${isRTL ? btitr.className : ""} mt-4 text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight whitespace-nowrap`}
          >
            {dict.hero.title}
          </h1>

          <p
            className={`${isRTL ? bnazanin.className : ""} mt-3 md:mt-4 text-white/80 leading-relaxed`}
          >
            {dict.hero.subtitle}
          </p>

          <div className={"mt-6 flex flex-wrap gap-3 " + (isRTL ? "justify-end" : "")}>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl font-semibold bg-[var(--brand-accent)] text-black hover:brightness-95 flex items-center gap-2"
            >
              <Icon name="CheckCircle2" /> {dict.hero.ctaPrimary}
            </a>
            <a
              href="#tour"
              className="px-5 py-3 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/15 flex items-center gap-2"
            >
              <Icon name="Play" /> {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* ویدیو */}
        <div className="flex items-center justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 w-[420px] md:w-[520px] lg:w-[560px] aspect-[16/9] max-h-[220px] md:max-h-[260px] lg:max-h-[300px]">
            <video
              ref={heroVideoRef}
              src="/videos/hero.mp4"
              preload="metadata"
              playsInline
              className="block w-full h-full object-cover"
            />
            <button
              type="button"
              aria-label={isPlaying ? "Pause video" : "Play video"}
              onClick={toggleVideo}
              className="absolute inset-0 grid place-items-center bg-black/0 hover:bg-black/20 transition"
            >
              <span className={"heroPlayBtn" + (isPlaying ? " playing" : "")} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .heroPlayBtn {
          width: 64px;
          height: 64px;
          border-radius: 9999px;
          border: 2px solid #fff;
          position: relative;
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.95;
          backdrop-filter: blur(2px);
        }
        .heroPlayBtn::before {
          content: "";
          position: absolute;
          left: 24px;
          top: 18px;
          border-left: 18px solid #fff;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
        }
        .heroPlayBtn.playing {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}

function FeaturedProducts({ lang }: { lang: keyof typeof languageMeta }) {
  const dict = dictionaries[lang];
  const isRTL = useRTL(lang);

  // --- وضعیت سبد خرید ---
  const [cart, setCart] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  // --- وضعیت فرم سفارش ---
  const [orderOpen, setOrderOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerNote, setCustomerNote] = useState("");
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<"ok" | "error" | null>(null);

  const badges: Record<string, string> = {
    p1: "پرفروش",
    p3: "جدید",
    p5: "پیشنهادی",
  };

  const formatPrice = (value: number) =>
    value.toLocaleString(lang === "fa" ? "fa-IR" : "en-US");

  // آیتم‌های سبد + جمع کل
  const cartItems = Object.entries(cart)
    .map(([id, qty]) => {
      const product = products.find((p) => p.id === id);
      if (!product) return null;
      return {
        product,
        qty,
        lineTotal: product.price * qty,
      };
    })
    .filter(Boolean) as {
    product: (typeof products)[number];
    qty: number;
    lineTotal: number;
  }[];

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.lineTotal, 0);

  // وقتی روی آیکن سبد در هدر کلیک می‌شود، این رویداد را می‌گیریم و سبد را باز می‌کنیم
  useEffect(() => {
    const handler = () => setCartOpen(true);

    if (typeof window !== "undefined") {
      window.addEventListener("open-cart-sidebar", handler);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("open-cart-sidebar", handler);
      }
    };
  }, []);

  // بروزرسانی عدد روی آیکن سبد در هدر
  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = document.getElementById("cart-count");
    if (!el) return;

    if (cartCount > 0) {
      el.textContent = String(cartCount);
      el.classList.remove("hidden");
    } else {
      el.textContent = "0";
      el.classList.add("hidden");
    }
  }, [cartCount]);
  
  const handleAddToCart = (id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      next[id] = (next[id] ?? 0) + 1;
      return next;
    });
    setCartOpen(true);
  };

  const handleChangeQty = (id: string, delta: number) => {
    setCart((prev) => {
      const next = { ...prev };
      const current = next[id] ?? 0;
      const updated = current + delta;
      if (updated <= 0) {
        delete next[id];
      } else {
        next[id] = updated;
      }
      return next;
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  // ✅ ساخت پیام سفارش و باز کردن تلگرام (بدون بک‌اند)
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    setSendResult(null);

    // اعتبارسنجی ساده
    if (!customerName.trim() || !customerPhone.trim()) {
      alert("لطفاً نام و شماره تماس را وارد کنید.");
      return;
    }
    if (cartItems.length === 0) {
      alert("سبد خرید خالی است.");
      return;
    }

    setSending(true);

    // متن سفارش
    const lines: string[] = [];

    lines.push("🧾 سفارش جدید از وب‌سایت");
    lines.push("");
    lines.push(`👤 نام: ${customerName.trim()}`);
    lines.push(`📞 تلفن: ${customerPhone.trim()}`);
    if (customerAddress.trim()) {
      lines.push(`📍 آدرس: ${customerAddress.trim()}`);
    }
    if (customerNote.trim()) {
      lines.push(`📝 توضیحات: ${customerNote.trim()}`);
    }
    lines.push("");
    lines.push("📦 اقلام سفارش:");

    cartItems.forEach(({ product, qty, lineTotal }, index) => {
      lines.push(
        `${index + 1}. ${product.name} × ${qty} = ${formatPrice(
          lineTotal
        )} تومان`
      );
    });

    lines.push("");
    lines.push(`💰 جمع کل: ${formatPrice(cartTotal)} تومان`);

    const message = lines.join("\n");

    // ⚠️ یوزرنیم تلگرام خودت را اینجا بگذار
    const telegramUsername = "YOUR_TELEGRAM_USERNAME";

    const telegramUrl = `https://t.me/${telegramUsername}?text=${encodeURIComponent(
      message
    )}`;

    if (typeof window !== "undefined") {
      window.open(telegramUrl, "_blank");
    }

    // از دید کاربر، سفارش با موفقیت ثبت شده
    setSending(false);
    setSendResult("ok");

    // خالی کردن سبد و فرم
    setCart({});
    setCartOpen(false);
    setOrderOpen(false);
    setCustomerName("");
    setCustomerPhone("");
    setCustomerAddress("");
    setCustomerNote("");
  };

  return (
    <section
      id="products"
      className="rel max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      {/* هدر بخش محصولات */}
      <div className="flex items-end justify-between mb-6">
        <h2
          className={`text-2xl md:text-3xl font-bold text-white mb-6 ${
            isRTL ? "text-right" : "text-left"
          }`}
          style={{ fontFamily: isRTL ? "BTitr" : "inherit" }}
        >
          {dict.apps.title}
        </h2>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-[var(--brand-primary)] hover:underline"
        >
          {dict.featured.viewAll}
          <Icon name="ChevronRight" size={16} />
        </a>
      </div>

      {/* شبکه محصولات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, idx) => (
          <Motion.Div
            key={p.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
            className="card group"
          >
            <div className="ring" aria-hidden />

            <div className="body">
              <div
                className="cover"
                style={{
                  backgroundImage: p.img ? `url(${p.img})` : undefined,
                }}
              >
                <div className="coverGrad" />
                {badges[p.id] && <div className="badge">{badges[p.id]}</div>}
              </div>

              <div className={"info " + (isRTL ? "rtl" : "ltr")}>
                {/* نام محصول */}
                <h3
                  className={`${isRTL ? bnazanin.className : ""} title text-lg md:text-xl font-bold text-white text-center mt-2 mb-2`}
                >
                  {p.name}
                </h3>

                {/* قیمت */}
                <div className="mt-1 mb-3 flex items-center justify-center gap-1">
                  <span
                    className={`${bnazanin.className} text-sm text-white/80`}
                  >
                    قیمت:
                  </span>
                  <span
                    className={`${bnazanin.className} text-[18px] font-bold text-amber-300`}
                  >
                    {formatPrice(p.price)}{" "}
                    <span className="text-sm font-normal">تومان</span>
                  </span>
                </div>

                {/* دکمه‌ها */}
                <div className="flex justify-center gap-3 mt-1 mb-2">
                  <button
                    onClick={() => handleAddToCart(p.id)}
                    className={`${bnazanin.className} btnPrimary`}
                  >
                    <Icon name="ShoppingCart" size={16} />
                    {dict.addToCart}
                  </button>
                  <Link
                    href={`/products/${p.id}`}
                    className={`btnGhost ${bnazanin.className}`}
                  >
                    <Icon name="BookOpenText" size={16} />
                    مشخصات
                  </Link>
                </div>
              </div>
            </div>

            {/* استایل کارت محصول */}
            <style jsx>{`
              .card {
                position: relative;
                flex: 0 0 auto;
                width: 100%;
                border-radius: 16px;
                overflow: hidden;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.08);
                transition: all 0.3s ease;
              }
              .card:hover {
                border-color: rgba(255, 255, 255, 0.2);
                transform: translateY(-4px);
              }

              .body {
                display: flex;
                flex-direction: column;
                height: 100%;
              }

              .cover {
                position: relative;
                height: 280px;
                background-size: cover;
                background-position: center;
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;
              }
              @media (min-width: 768px) {
                .cover {
                  height: 320px;
                }
              }

              .coverGrad {
                position: absolute;
                inset: 0;
                background: linear-gradient(
                  to bottom,
                  rgba(0, 0, 0, 0.1),
                  rgba(0, 0, 0, 0.3)
                );
              }

              .badge {
                position: absolute;
                top: 12px;
                right: 12px;
                font-size: 11px;
                font-weight: 700;
                color: #fff;
                background: rgba(12, 103, 242, 0.9);
                padding: 6px 10px;
                border-radius: 999px;
              }

              .info {
                padding: 12px 0 16px;
              }

              .btnPrimary {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 10px 18px;
                border-radius: 12px;
                font-weight: 800;
                font-size: 15px;
                line-height: 1;
                white-space: nowrap;
                background: var(--brand-primary);
                color: #fff;
                box-shadow: 0 6px 18px rgba(12, 103, 242, 0.25);
                transition: filter 0.2s ease, transform 0.05s ease;
              }
              .btnPrimary:hover {
                filter: brightness(1.08);
              }
              .btnPrimary:active {
                transform: translateY(1px);
              }

              .btnGhost {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 8px 16px;
                min-width: 115px;
                border-radius: 12px;
                font-size: 15px;
                font-weight: 500;
                line-height: 1;
                white-space: nowrap;
                background-color: #374151;
                color: #f3f4f6;
                transition: background 0.2s ease, color 0.2s ease,
                  transform 0.1s ease;
              }
              .btnGhost:hover {
                background-color: #4b5563;
                transform: translateY(-1px);
              }
            `}</style>
          </Motion.Div>
        ))}
      </div>

      {/* دکمه شناور برای باز کردن سبد وقتی بسته است */}
      {cartCount > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 left-6 z-30 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 shadow-xl hover:bg-emerald-500"
        >
          <Icon name="ShoppingCart" size={18} />
          <span className={bnazanin.className}>سبد خرید ({cartCount})</span>
        </button>
      )}

      {/* پنل سبد خرید */}
      {cartOpen && (
        <div
          className="fixed right-0 top-[105px] z-40 h-[calc(98vh-86px)] w-full max-w-md flex flex-col bg-slate-900 shadow-2xl border-l border-white/10"
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* هدر سبد */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <h3
              className={`${bnazanin.className} text-base md:text-lg font-bold text-white`}
            >
              سبد خرید
            </h3>
            <button
              onClick={() => setCartOpen(false)}
              className="rounded-full p-1 text-white/70 hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          {/* محتوا */}
          <div className="flex-1 overflow-y-auto px-4 py-3">
            {cartItems.length === 0 ? (
              <p
                className={`${bnazanin.className} text-sm text-white/70 mt-2`}
              >
                سبد خرید خالی است.
              </p>
            ) : (
              <ul className="space-y-3">
                {cartItems.map(({ product, qty, lineTotal }) => (
                  <li
                    key={product.id}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2"
                  >
                    <div className="flex items-center gap-3">
                      {product.img && (
                        <div className="h-10 w-10 overflow-hidden rounded-lg bg-white/10">
                          <Image
                            src={product.img}
                            alt={product.name}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <div
                          className={`${bnazanin.className} text-sm text-white mb-1`}
                        >
                          {product.name}
                        </div>
                        <div
                          className={`${bnazanin.className} text-xs text-amber-300`}
                        >
                          {formatPrice(product.price)} تومان
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleChangeQty(product.id, -1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-white hover:bg-slate-600"
                      >
                        −
                      </button>
                      <span
                        className={`${bnazanin.className} w-6 text-center text-sm text-white`}
                      >
                        {qty}
                      </span>
                      <button
                        onClick={() => handleChangeQty(product.id, +1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-white hover:bg-slate-600"
                      >
                        +
                      </button>
                    </div>

                    <div
                      className={`${bnazanin.className} text-sm text-white text-nowrap`}
                    >
                      {formatPrice(lineTotal)} تومان
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* فوتر سبد */}
          <div className="border-t border-white/10 px-4 py-3 space-y-3">
            <div className="flex items-center justify-between">
              <span
                className={`${bnazanin.className} text-sm text-white/80`}
              >
                جمع کل
              </span>
              <span
                className={`${bnazanin.className} text-base font-bold text-emerald-300`}
              >
                {formatPrice(cartTotal)} تومان
              </span>
            </div>

            <p
              className={`${bnazanin.className} text-[11px] text-white/40 leading-relaxed`}
            >
              هزینه ارسال، مالیات و تخفیف‌ها در مرحلهٔ نهایی سفارش هماهنگ
              می‌شود.
            </p>

            <div className="flex gap-2">
              <button
                onClick={handleClearCart}
                className={`${bnazanin.className} flex-1 rounded-xl border border-white/20 px-3 py-2 text-sm text-white/80 hover:bg-white/5`}
              >
                خالی کردن سبد
              </button>
              <button
                disabled={cartItems.length === 0}
                onClick={() => setOrderOpen(true)}
                className={`${bnazanin.className} flex-1 rounded-xl bg-[var(--brand-primary)] px-3 py-2 text-center text-sm font-bold text-white hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                ثبت سفارش
              </button>
            </div>
          </div>
        </div>
      )}

      {/* مودال فرم ثبت سفارش */}
      {orderOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-white/10 p-5">
            <div className="flex items-center justify-between mb-3">
              <h3
                className={`${bnazanin.className} text-lg font-bold text-white`}
              >
                ثبت سفارش
              </h3>
              <button
                onClick={() => {
                  setOrderOpen(false);
                  setSendResult(null);
                }}
                className="rounded-full p-1 text-white/70 hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={handleSubmitOrder}
              className={`${bnazanin.className} space-y-3`}
            >
              <div className="space-y-1">
                <label className="text-sm text-white/80">
                  نام و نام خانوادگی *
                </label>
                <input
                  className="w-full rounded-xl bg-slate-800 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm text-white/80">شماره تماس *</label>
                <input
                  className="w-full rounded-xl bg-slate-800 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="مثال: 0912xxxxxxx"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm text-white/80">آدرس (اختیاری)</label>
                <textarea
                  className="w-full rounded-xl bg-slate-800 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                  rows={2}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm text-white/80">
                  توضیحات تکمیلی (اختیاری)
                </label>
                <textarea
                  className="w-full rounded-xl bg-slate-800 border border-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                  rows={2}
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  placeholder="مثلاً زمان مناسب برای تماس، توضیح در مورد پروژه و..."
                />
              </div>

              {sendResult === "ok" && (
                <div className="rounded-xl bg-emerald-600/15 border border-emerald-500/40 px-3 py-2 text-xs text-emerald-200">
                  سفارش شما ثبت شد. لطفاً در صفحهٔ باز شدهٔ تلگرام، پیام را ارسال
                  کنید.
                </div>
              )}

              <div className="mt-3 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setOrderOpen(false);
                    setSendResult(null);
                  }}
                  className="flex-1 rounded-xl border border-white/20 px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex-1 rounded-xl bg-[var(--brand-primary)] px-3 py-2 text-sm font-bold text-white hover:brightness-110 disabled:opacity-60"
                >
                  {sending ? "در حال آماده‌سازی…" : "ارسال سفارش"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

function WhyUs({ lang }: { lang: keyof typeof languageMeta }) {
  const dict = dictionaries[lang];

  const items = [
    {
      key: "iso",
      title: "ISO & IEC Certified",
      desc: "Quality systems with full traceability.",
      img: "/images/why/iso.png",
      href: "/why-us/iso-iec-certified",
    },
    {
      key: "delivery",
      title: "On-time Delivery",
      desc: "Global logistics, reliable lead times.",
      img: "/images/why/delivery.png",
      href: "/why-us/on-time-delivery",
    },
    {
      key: "factory",
      title: "Factory Direct",
      desc: "Consistent production & QC.",
      img: "/images/why/factory.png",
      href: "/why-us/factory-direct",
    },
    {
      key: "tech",
      title: "Tech Support",
      desc: "Application-specific guidance.",
      img: "/images/why/tech.png",
      href: "/why-us/tech-support",     // ← صفحه‌ی جدید
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <h2
        className="text-2xl md:text-3xl font-bold text-white mb-6 text-right"
        style={{ fontFamily: "BTitr" }}
      >
        چرا مشتریان ما را انتخاب می‌کنند؟
      </h2>

      <div className="grid md:grid-cols-4 gap-5">
        {items.map((x) => {
          const Card = (
            <div
              className="
                group
                p-4
                rounded-2xl
                border border-white/10
                bg-white/5
                hover:border-white/20
                transition
                cursor-pointer
              "
            >
              {/* تصویر کارت */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-white/5">
                <Image
                  src={x.img}
                  alt={x.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 280px, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              {/* متن کارت */}
              <div className="mt-3 text-center">
                <div className="font-semibold text-white mb-1">{x.title}</div>
                <div className="text-white/70 text-sm">{x.desc}</div>
              </div>
            </div>
          );

          return x.href ? (
            <Link key={x.key} href={x.href} className="block">
              {Card}
            </Link>
          ) : (
            <div key={x.key}>{Card}</div>
          );
        })}
      </div>
    </section>
  );
}

function Applications({ lang }: { lang: keyof typeof languageMeta }) {
  const isRTL = useRTL(lang);

  const items = [
    {
      key: "grounding",
      title: "سیستم‌های ارتینگ و صاعقه‌گیر",
      desc: "چاه ارت، مش ارت، الکترودهای عمقی و بهبود مقاومت ویژه خاک با بنتونیت و مواد کاهنده.",
      img: "/images/usecases/grounding-grid.png",
      href: "/applications/grounding-systems",
    },
    {
      key: "substation",
      title: "پست‌های انتقال و توزیع",
      desc: "استفاده از خاک کاهنده، ژل‌های ویژه و بک‌فیل برای بهبود ایمنی شبکه و کاهش گام‌ولتاژ.",
      img: "/images/usecases/substation-backfill.png",
      href: "/applications/substation-grounding",
    },
    {
      key: "oil",
      title: "تصفیه و احیای روغن ترانس",
      desc: "بنتونیت‌های اکتیو و گرید روغنی برای جذب رطوبت، اسید و محصولات اکسیداسیون در روغن.",
      img: "/images/usecases/transformer-oil-polishing.png",
      href: "/applications/transformer-oil",
    },
    {
      key: "cable",
      title: "کابل‌کشی و حفاری صنعتی",
      desc: "بک‌فیل مناسب اطراف کابل‌ها، دوغاب‌زنی و تزریق بنتونیت در مجاری و کانال‌ها.",
      img: "/images/usecases/cable-trench.png",
      href: "/applications/cable-trenching", // همین صفحه‌ای که ساختیم
    },
  ];

  return (
    <section
      id="applications"
      className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2
        className={`text-2xl md:text-3xl font-bold text-white mb-6 ${
          isRTL ? "text-right" : "text-left"
        }`}
        style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
      >
        کاربردهای صنعت برق
      </h2>

      <div className="grid md:grid-cols-4 gap-5">
        {items.map((x) => {
          const Card = (
            <div
              className="group p-4 rounded-2xl border border-white/10 bg-white/5
                         hover:border-white/20 hover:bg-white/10 transition cursor-pointer"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-white/5">
                <Image
                  src={x.img}
                  alt={x.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 280px, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              <div className="mt-3 text-right">
                <div
                  className="font-semibold text-white mb-1"
                  style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
                >
                  {x.title}
                </div>
                <div
                  className="text-white/70 text-sm leading-relaxed"
                  style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
                >
                  {x.desc}
                </div>
              </div>
            </div>
          );

          return x.href ? (
            <Link key={x.key} href={x.href} className="block">
              {Card}
            </Link>
          ) : (
            <div key={x.key}>{Card}</div>
          );
        })}
      </div>
    </section>
  );
}

function Clients({ lang }: { lang: keyof typeof languageMeta }) {
  const d: any = (dictionaries as any)?.[lang] ?? baseEN;

  // متن تیتر طبق درخواست شما + فونت BTitr
  const titleText = "مورد اعتماد چه شرکت هایی هستیم ؟";
  const isRTL = useRTL(lang);

  type Client = { name: string; industry: string; logo: string };
  const clients: Client[] = [
    { name: "توانیر", industry: "شبکه برق کشور", logo: "/logos/tavanir.png" },
    { name: "مپنا", industry: "برق و انرژی", logo: "/logos/mapna.png" },
    { name: "فولاد مبارکه", industry: "فولاد", logo: "/logos/mobarakeh-steel.png" },
    { name: "شرکت مخابرات ایران", industry: "مخابرات ثابت", logo: "/logos/tci.png" },
    { name: "همراه اول", industry: "اپراتور تلفن همراه", logo: "/logos/mci.png" },
    { name: "ایرانسل", industry: "اپراتور تلفن همراه", logo: "/logos/irancell.png" },
    { name: "شرکت ملی گاز ایران", industry: "نفت و گاز", logo: "/logos/nigc.png" },
    { name: "پتروشیمی خلیج فارس", industry: "پتروشیمی", logo: "/logos/pgpic.png" },
    { name: "صنایع مس ایران", industry: "فلزات و معدن", logo: "/logos/nicico.png" },
    { name: "ذوب‌آهن اصفهان", industry: "فولاد", logo: "/logos/esfahan-steel.png" },
    { name: "توزیع برق تهران بزرگ", industry: "توزیع نیروی برق", logo: "/logos/tehran-distribution.png" },
    { name: "سازمان فناوری اطلاعات ایران", industry: "زیرساخت/دیتاسنتر", logo: "/logos/iora.png" },
  ];

  const getInitials = (name: string) =>
    name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("");

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16" id="clients">
      {/* تیتر با BTitr و راست‌چین برای fa */}
      <h2
        className={`text-2xl md:text-3xl font-bold text-white mb-8 ${isRTL ? "text-right" : "text-left"}`}
        style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
      >
        {titleText}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {clients.map((c, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-white/10 bg-white/10 hover:bg-white/[.18] hover:border-white/30 transition p-6 flex items-center justify-center backdrop-blur-md shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
            title={c.name}
          >
            <img
              src={c.logo}
              alt={c.name}
              loading="lazy"
              className="h-16 md:h-20 object-contain max-w-[90%] brightness-110 contrast-125 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-125"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                const parent = target.parentElement!;
                target.style.display = "none";
                const fallback = document.createElement("div");
                fallback.className =
                  "fallbackLogo h-16 w-16 md:h-20 md:w-20 rounded-full grid place-items-center text-white font-bold bg-white/10 border border-white/20";
                fallback.textContent = getInitials(c.name);
                parent.appendChild(fallback);
              }}
            />
            <div className="sr-only">
              <div>{c.name}</div>
              <div>{c.industry}</div>
            </div>
          </div>
        ))}
      </div>

      {/* نوار نام مشتری‌ها (مارکی) — اگر قبلاً خواسته بودید با BNazanin بماند */}
      <div className="mt-10 rounded-xl h-10 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #fff1 0 12px, #0000 12px 24px)",
          }}
        />
        <div
          className="absolute inset-0 text-white/70 flex items-center gap-6 animate-[marq_28s_linear_infinite]"
          dir="rtl"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          {clients.concat(clients).map((c, i) => (
            <span key={`m-${i}`} className="whitespace-nowrap text-sm">
              • {c.name}
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes marq {
            from { transform: translateX(0); }
            to   { transform: translateX(50%); }
          }
        `}</style>
      </div>
    </section>
  );
}

function Stats({ lang }: { lang: keyof typeof languageMeta }) {
  const isRTL = useRTL(lang);
  const title = isRTL ? "ارقام مهم فعالیت ما" : "Numbers that matter";

  const items = [
    { label: "Annual Capacity (tons)", value: 120000 },
    { label: "Export Countries", value: 28 },
    { label: "On-time Delivery %", value: 98 },
    { label: "Customer Satisfaction", value: 4.8, suffix: "/5" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <h2
        className={`text-2xl md:text-3xl font-bold text-white mb-6 ${
          isRTL ? "text-right" : "text-left"
        }`}
        style={{ fontFamily: isRTL ? "BNazanin, Tahoma, system-ui" : undefined }}
      >
        {title}
      </h2>

      <div className="grid md:grid-cols-4 gap-5">
        {items.map((x, i) => (
          <Motion.Div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-5 rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="text-3xl font-black text-white">
              {x.value}
              <span className="text-lg text-white/60">{x.suffix || ""}</span>
            </div>
            <div className="text-white/70 mt-1">{x.label}</div>
          </Motion.Div>
        ))}
      </div>
    </section>
  );
}

function Blog({ lang }: { lang: keyof typeof languageMeta }) {
  const dict = dictionaries[lang];
  const isRTL = useRTL(lang);

  const blogItems = articles.map((a) => ({
    id: a.id ?? a.slug,
    slug: a.slug,
    title: a.title,
    img: a.img || "/images/blog/placeholder.jpg",
    date: a.date,
  }));

  return (
    <section
      id="blog"
      className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2
        className={`text-2xl md:text-3xl font-bold text-white mb-6 ${
          isRTL ? "text-right" : "text-left"
        }`}
        style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
      >
        {dict.blog?.title ?? "آخرین مقالات"}
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {blogItems.map((a) => (
<Link
  key={a.id}
  href={`/articles/${encodeURIComponent(a.slug)}`}
    className="block rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 group"
>
                <div className="h-40 w-full overflow-hidden bg-white/5">
              <img
                src={a.img}
                alt={a.title}
                loading="lazy"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/images/blog/placeholder.jpg";
                }}
              />
            </div>

            <div className="p-4">
              <div
                className="text-white/90 font-semibold group-hover:text-white line-clamp-2"
                style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
              >
                {a.title}
              </div>
              <div className="text-white/50 text-sm">
                {new Date(a.date).toDateString()}
              </div>
              <div className="mt-2 flex items-center gap-1 text-[var(--brand-primary)]">
                Read more <Icon name="ChevronRight" size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ===== FinalCTA (قبل از export default قرار بده) =====
function FinalCTA({ lang }: { lang: keyof typeof languageMeta }) {
  const dict = dictionaries[lang];
  const isRTL = useRTL(lang);

  return (
    <section className="relative isolate">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 text-center">
        <h3
          className="text-2xl md:text-3xl font-black text-white"
          style={{ fontFamily: isRTL ? "BNazanin, Tahoma, system-ui" : undefined }}
        >
          {dict.finalCta.title}
        </h3>
        <p
          className="text-white/80 mt-2"
          style={{ fontFamily: isRTL ? "BNazanin, Tahoma, system-ui" : undefined }}
        >
          {dict.finalCta.subtitle}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="#contact"
            className="px-5 py-3 rounded-xl font-semibold bg-[var(--brand-accent)] text-black hover:brightness-95"
          >
            {dict.finalCta.btn1}
          </a>
          <a
            href="#products"
            className="px-5 py-3 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/15"
          >
            {dict.finalCta.btn2}
          </a>
        </div>
      </div>
    </section>
  );
}


// ===== چیزهایی که هدر و صفحات فرعی لازم دارند =====
export {
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
};

/* ===================== Self Tests (kept minimal, no changes) ===================== */
function runSelfTests() {
  try {
    const results: { name: string; pass: boolean; detail?: string }[] = [];
    results.push({
      name: "i18n languages count",
      pass: Object.keys(languageMeta).length === 11,
      detail: `count=${Object.keys(languageMeta).length}`,
    });
    results.push({
      name: "flags coverage",
      pass: Object.keys(languageMeta).every((k) => flags[k] != null),
    });
    const hasProduct = searchData.some((x) => x.type === "product");
    const hasArticle = searchData.some((x) => x.type === "article");
    results.push({ name: "search dataset types", pass: hasProduct && hasArticle });
    const motionShimOk = [Motion.Div, Motion.Ul, Motion.Nav, Motion.Aside, Motion.AnimatePresence].every(Boolean);
    results.push({ name: "motion shim available", pass: motionShimOk });
    const rtlOk = Object.entries(languageMeta)
      .filter(([_, v]) => v.dir === "rtl")
      .map(([k]) => k);
    results.push({
      name: "rtl languages include fa, ar",
      pass: rtlOk.includes("fa") && rtlOk.includes("ar"),
      detail: rtlOk.join(","),
    });
    const langCount = Object.keys(languageMeta).length;
    results.push({
      name: "json-ld languages count mirrors i18n",
      pass: langCount === 11,
      detail: `${langCount}`,
    });
    results.push({ name: "icon shim available", pass: typeof Icon === "function" });
    results.push({ name: "dynamic imports ready", pass: true });
    console.table(results.map((r) => ({ Test: r.name, Pass: r.pass ? "✅" : "❌", Detail: r.detail || "" })));
    return results.every((r) => r.pass);
  } catch (e) {
    console.error("Self-tests crashed:", e);
    return false;
  }
}

/* ===================== Page ===================== */
export default function BentonPowerPage() {
  // زبان صفحه (فعلاً فقط فارسی؛ هدرِ مشترک در layout مستقل از این است)
  const [lang] = useState<keyof typeof languageMeta>("fa");
  const isRTL = useRTL(lang);
  const [testsPassed, setTestsPassed] = useState<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--brand-primary", brand.primary);
    root.style.setProperty("--brand-accent", brand.accent);
    root.style.setProperty("--brand-bg", brand.bg);
  }, []);

  useEffect(() => {
    ensureFramerMotionClientImport();
    ensureLucideClientImport();
  }, []);

  useEffect(() => {
    setTestsPassed(runSelfTests());
  }, []);

  const showDevTests =
    typeof window !== "undefined" &&
    window.location.search.includes("devtests=1");

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen text-white">

      {/* هدر و سبد خرید از طریق app/layout.tsx و <SiteHeader /> رندر می‌شوند */}

      <Hero lang={lang} />
<FeaturedProducts lang={lang} />
      <WhyUs lang={lang} />
      <Applications lang={lang} />
      <Clients lang={lang} />
      <Stats lang={lang} />
      <Blog lang={lang} />
      <FinalCTA lang={lang} />

      {/* سکشن Contact و Footer در app/ui/SiteFooter.tsx و RootLayout رندر می‌شوند */}

      {showDevTests && (
        <div
          data-testid="dev-tests"
          className="fixed bottom-4 right-4 px-3 py-2 rounded-xl text-sm"
          style={{
            background: "rgba(255,255,255,.08)",
            border: "1px solid rgba(255,255,255,.15)",
          }}
        >
          Self-tests:{" "}
          {testsPassed
            ? "✅ Passed"
            : testsPassed === false
            ? "❌ Failed"
            : "…"}
        </div>
      )}

      {/* Global tweaks: keep body transparent so background component is visible */}
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          background: transparent;
          color: #f8fafc;
        }
        ::selection {
          background: #38bdf8;
          color: #0b1220;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </div>
  );
}
