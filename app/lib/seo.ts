export const SITE_URL = "https://www.barghemehrab.net";

export const SITE_NAME = "رعد و برق مهراب";

export const SITE_BRAND_EN = "Mehrab";

export const SITE_DESCRIPTION =
  "تولید کننده بنتونیت ارتینگ، بنتونیت اکتیو، LRM، GRM و مواد کاهنده مقاومت زمین برای چاه ارت، شبکه زمین، پست برق و پروژه‌های صنعتی.";

export const SITE_LOGO = `${SITE_URL}/images/logo/mehrab.png`;

export const SITE_OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

export const defaultSeoKeywords = [
  "بنتونیت",
  "بنتونیت ارتینگ",
  "خرید بنتونیت",
  "قیمت بنتونیت",
  "قیمت بنتونیت ارتینگ",
  "بنتونیت چاه ارت",
  "بنتونیت اکتیو",
  "مواد کاهنده مقاومت زمین",
  "خاک کاهنده مقاومت زمین",
  "ژل کاهنده مقاومت زمین",
  "LRM",
  "GRM",
  "Ground Enhancement Material",
  "Grounding Bentonite",
  "Earthing Bentonite",
  "Low Resistance Material",
  "چاه ارت",
  "سیستم ارتینگ",
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["Mehrab", "Raad o Bargh Mehrab", "Barghe Mehrab"],
  url: SITE_URL,
  logo: SITE_LOGO,
  image: SITE_OG_IMAGE,
  description: SITE_DESCRIPTION,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+982133963108",
      contactType: "sales",
      areaServed: "IR",
      availableLanguage: ["fa", "en"],
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "Iran",
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  alternateName: SITE_BRAND_EN,
  url: SITE_URL,
  image: SITE_OG_IMAGE,
  logo: SITE_LOGO,
  telephone: "+982133963108",
  priceRange: "$$",
  areaServed: "IR",
  description: SITE_DESCRIPTION,
  parentOrganization: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: SITE_BRAND_EN,
  url: SITE_URL,
  inLanguage: "fa-IR",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};