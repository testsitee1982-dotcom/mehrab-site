// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

import { SiteHeader } from "./ui/SiteHeader";
import { SiteFooter } from "./ui/SiteFooter";

export const metadata: Metadata = {
  title: "رعد و برق مهراب | بنتونیت و مواد ارتینگ",
  description: "راهکارهای پیشرفته بنتونیت برای صنعت برق",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen text-white">
        {/* بک‌گراند سینمایی، برای همه صفحات */}
        <GlobalBackgroundPro />

        {/* هدر مشترک */}
        <SiteHeader />

        {/* محتوای صفحات */}
        <main className="relative z-10">{children}</main>

        {/* فوتر مشترک */}
        <SiteFooter />
      </body>
    </html>
  );
}

/* === Global background (بدون styled-jsx) === */
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
        className="absolute -top-40 left-1/2 h-[120vh] w-[120vw] -translate-x-1/2 opacity-[.16] blur-3xl bg-[conic-gradient(from_180deg_at_50%_50%,#0ea5e9,#6366f1,#f59e0b,#0ea5e9)] will-change-transform bg-animated"
        style={{ animation: "slow-spin 40s linear infinite" }}
      />

      {/* Aurora ribbons */}
      <div
        className="absolute inset-0 opacity-[.18] will-change-transform bg-animated"
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
