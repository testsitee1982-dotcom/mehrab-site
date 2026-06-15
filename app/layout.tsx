import type { Metadata, Viewport } from "next";
import "./globals.css";

import { GlobalBackground } from "./ui/GlobalBackground";
import { SiteHeader } from "./ui/SiteHeader";
import { ContactSection } from "./ui/ContactSection";
import { SiteFooter } from "./ui/SiteFooter";

const SITE_URL = "https://www.barghemehrab.net";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "رعد و برق مهراب",
  alternateName: "Mehrab",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/mehrab.png`,
  description:
    "تولید کننده بنتونیت اکتیو، بنتونیت مخصوص ارتینگ، مواد کاهنده مقاومت زمین و محصولات تخصصی صنعت برق.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+982133963108",
      contactType: "sales",
      areaServed: "IR",
      availableLanguage: ["fa", "en"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "رعد و برق مهراب | بنتونیت ارتینگ و مواد کاهنده مقاومت زمین",
    template: "%s | رعد و برق مهراب",
  },

  description:
    "تولید کننده بنتونیت اکتیو، بنتونیت مخصوص ارتینگ، مواد کاهنده مقاومت زمین، ژل کاهنده مقاومت و محصولات تخصصی صنعت برق.",

  keywords: [
    "بنتونیت ارتینگ",
    "خرید بنتونیت ارتینگ",
    "قیمت بنتونیت ارتینگ",
    "مواد کاهنده مقاومت زمین",
    "قیمت مواد کاهنده مقاومت زمین",
    "ژل کاهنده مقاومت زمین",
    "چاه ارت",
    "سیستم ارتینگ",
    "خاک کاهنده مقاومت زمین",
    "بنتونیت اکتیو",
    "LRM",
    "GRM",
    "رعد و برق مهراب",
  ],

  authors: [{ name: "Mehrab" }],
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
    title: "رعد و برق مهراب | بنتونیت ارتینگ و مواد کاهنده مقاومت زمین",
    description:
      "تولید کننده بنتونیت اکتیو، بنتونیت مخصوص ارتینگ و محصولات تخصصی صنعت برق.",
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
    title: "رعد و برق مهراب | بنتونیت ارتینگ",
    description:
      "تولید کننده بنتونیت اکتیو و مواد کاهنده مقاومت زمین برای پروژه‌های برق و ارتینگ.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <GlobalBackground />
        <SiteHeader />
        {children}
        <ContactSection />
        <SiteFooter />
      </body>
    </html>
  );
}
