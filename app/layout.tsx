import type { Metadata, Viewport } from "next";
import "./globals.css";

import { GlobalBackground } from "./ui/GlobalBackground";
import { SiteHeader } from "./ui/SiteHeader";
import { ContactSection } from "./ui/ContactSection";
import { SiteFooter } from "./ui/SiteFooter";

export const metadata: Metadata = {
  title: "رعد و برق مهراب | بنتونیت و مواد صنعت برق",
  description: "راهکارهای پیشرفته بنتونیت برای صنعت برق",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <GlobalBackground />
        <SiteHeader />
        {children}

        {/* بخش تماس/نقشه */}
        <ContactSection />

        <SiteFooter />
      </body>
    </html>
  );
}
