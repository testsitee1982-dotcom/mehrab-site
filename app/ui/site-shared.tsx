"use client";

import type { JSX } from "react";
import React, { Fragment } from "react";
import localFont from "next/font/local";
import { articles } from "../lib/articles";
import { products } from "../lib/products";

export const btitr = localFont({
  src: "../fonts/BTitr.woff2",
  display: "swap",
  weight: "400",
  preload: true,
});

export const bmitra = localFont({
  src: "../fonts/BMitra.woff2",
  display: "swap",
  weight: "400",
  preload: true,
});

export const bnazanin = localFont({
  src: "../fonts/BNazanin.woff2",
  display: "swap",
  weight: "400",
  preload: true,
});

export const flags: Record<string, string> = {
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

export type LanguageDirection = "rtl" | "ltr";

export const languageMeta = {
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
} satisfies Record<string, { label: string; dir: LanguageDirection }>;

export type LanguageCode = keyof typeof languageMeta;

export const baseEN = {
  tagline: "Advanced Bentonite Solutions for the Power Industry",
  nav: {
    products: "Products",
    solutions: "Applications",
    resources: "Resources",
    company: "Company",
    contact: "Contact",
    catalog: "Get Catalog",
  },
  featured: {
    viewAll: "View all products",
  },
  specs: "Technical Data Sheet",
  searchPlaceholder: "Search products & articles...",
};

export const faIR: typeof baseEN = {
  tagline: "راهکارهای پیشرفته بنتونیت برای صنعت برق",
  nav: {
    products: "محصولات",
    solutions: "کاربردها",
    resources: "مقالات",
    company: "شرکت",
    contact: "تماس",
    catalog: "دریافت کاتالوگ",
  },
  featured: {
    viewAll: "مشاهده همه محصولات",
  },
  specs: "برگه مشخصات فنی",
  searchPlaceholder: "جستجوی محصولات و مقالات...",
};

export const dictionaries: Record<LanguageCode, typeof baseEN> = {
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

export const searchData = [
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

const RTL_LANGUAGE_CODES = new Set<LanguageCode>(["fa", "ar"]);

export const useRTL = (lang: LanguageCode = "fa") => {
  const metaDir = languageMeta[lang]?.dir;

  if (metaDir === "rtl") return true;
  if (metaDir === "ltr") return false;

  return RTL_LANGUAGE_CODES.has(lang);
};

type AnyProps = Record<string, unknown>;

export function Icon({
  name,
  size,
  className,
  ...rest
}: {
  name: string;
  size?: number;
  className?: string;
} & AnyProps) {
  const px = `${size ?? 20}px`;

  return (
    <span
      aria-hidden
      className={className}
      data-icon={name}
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

const motionOnlyProps = new Set([
  "initial",
  "animate",
  "exit",
  "whileInView",
  "transition",
  "viewport",
  "layout",
  "variants",
]);

function cleanMotionProps<P extends AnyProps>(props: P): P {
  const out: AnyProps = {};

  for (const key in props) {
    if (!motionOnlyProps.has(key)) {
      out[key] = props[key];
    }
  }

  return out as P;
}

const makeMotionTag =
  <T extends keyof JSX.IntrinsicElements>(tag: T) =>
  function MotionTag(props: JSX.IntrinsicElements[T] & AnyProps) {
    const Comp = tag as React.ElementType;
    return <Comp {...cleanMotionProps(props)} />;
  };

export const Motion = {
  Div: makeMotionTag("div"),
  Ul: makeMotionTag("ul"),
  Nav: makeMotionTag("nav"),
  Aside: makeMotionTag("aside"),
  AnimatePresence: function AnimatePresenceShim({
    children,
  }: {
    children: React.ReactNode;
  } & AnyProps) {
    return <Fragment>{children}</Fragment>;
  },
};

export { products };