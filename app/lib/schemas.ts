import { SITE_NAME, SITE_URL } from "./seo";
import type { SeoPage } from "./seo-pages";

export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function createSeoPageBreadcrumb(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "خانه",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.h1,
        item: `${SITE_URL}/${page.slug}`,
      },
    ],
  };
}

export function createSeoPageArticleSchema(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    mainEntityOfPage: `${SITE_URL}/${page.slug}`,
    inLanguage: "fa-IR",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function createSeoPageFaqSchema(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createSeoPageWebPageSchema(page: SeoPage) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.h1,
    url: `${SITE_URL}/${page.slug}`,
    description: page.description,
    inLanguage: "fa-IR",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function createSeoPageJsonLdList(page: SeoPage) {
  return [
    createSeoPageBreadcrumb(page),
    createSeoPageWebPageSchema(page),
    createSeoPageArticleSchema(page),
    createSeoPageFaqSchema(page),
  ];
}