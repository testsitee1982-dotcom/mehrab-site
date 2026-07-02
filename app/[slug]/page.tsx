import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage } from "../ui/SeoLandingPage";
import { getSeoPage, SEO_PAGE_SLUGS } from "../lib/seo-pages";
import { SITE_NAME, SITE_URL } from "../lib/seo";

type PageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export function generateStaticParams() {
  return SEO_PAGE_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams =
    params instanceof Promise ? await params : params;

  const page = getSeoPage(resolvedParams.slug);

  if (!page) {
    return {
      title: `صفحه یافت نشد | ${SITE_NAME}`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageUrl = `${SITE_URL}/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: pageUrl,
      type: "article",
      siteName: SITE_NAME,
      locale: "fa_IR",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function DynamicSeoLandingPage({
  params,
}: PageProps) {
  const resolvedParams =
    params instanceof Promise ? await params : params;

  const page = getSeoPage(resolvedParams.slug);

  if (!page) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}