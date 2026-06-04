import type { Metadata, Viewport } from "next";
import "./globals.css";

import { GlobalBackground } from "./ui/GlobalBackground";
import { SiteHeader } from "./ui/SiteHeader";
import { ContactSection } from "./ui/ContactSection";
import { SiteFooter } from "./ui/SiteFooter";

const SITE_URL = "https://www.barghemehrab.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "رعد و برق مهراب | بنتونیت و مواد کاهنده مقاومت زمین",
    template: "%s | رعد و برق مهراب",
  },

  description:
    "تولید کننده بنتونیت اکتیو، بنتونیت مخصوص ارتینگ، مواد کاهنده مقاومت زمین، ژل کاهنده مقاومت و محصولات تخصصی صنعت برق.",

  keywords: [
    "بنتونیت",
    "بنتونیت ارتینگ",
    "مواد کاهنده مقاومت زمین",
    "ژل کاهنده مقاومت",
    "چاه ارت",
    "ارتینگ",
    "سیستم ارت",
    "رعد و برق مهراب",
    "GRM",
    "LRM",
  ],

  authors: [
    {
      name: "Mehrab",
    },
  ],

  creator: "Mehrab",
  publisher: "Mehrab",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: SITE_URL,
    siteName: "رعد و برق مهراب",
    title: "رعد و برق مهراب",
    description:
      "تولید کننده بنتونیت اکتیو و محصولات تخصصی صنعت برق و ارتینگ",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "رعد و برق مهراب",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "رعد و برق مهراب",
    description:
      "تولید کننده بنتونیت اکتیو و محصولات تخصصی صنعت برق و ارتینگ",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B1220",
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

        <ContactSection />
        <SiteFooter />
      </body>
    </html>
  );
}