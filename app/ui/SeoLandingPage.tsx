import Link from "next/link";
import type { SeoPage } from "../lib/seo-pages";
import { getSeoPage } from "../lib/seo-pages";
import { createSeoPageJsonLdList, safeJsonLd } from "../lib/schemas";

type SeoLandingPageProps = {
  page: SeoPage;
};

type RelatedProduct = {
  title: string;
  href: string;
  description: string;
  tags: SeoPage["category"][];
};

const categoryLabel: Record<SeoPage["category"], string> = {
  bentonite: "Bentonite / بنتونیت",
  lrm: "LRM / Low Resistance Material",
  grm: "GRM / Ground Reducing Material",
  grounding: "Ground Enhancement / Earthing",
  soil: "Soil Resistivity / مقاومت خاک",
  brand: "Mehrab / مهراب",
};

const relatedProducts: RelatedProduct[] = [
  {
    title: "بنتونیت اکتیو مخصوص ارتینگ",
    href: "/products/active-bentonite-earthing-ground-enhancement",
    description:
      "مناسب چاه ارت، کاهش مقاومت زمین، حفظ رطوبت اطراف الکترود و پروژه‌های ارتینگ.",
    tags: ["bentonite", "grounding", "soil", "brand"],
  },
  {
    title: "بنتونیت میکرونیزه مخصوص چاه ارت",
    href: "/products/micronized-bentonite-earth-pit-earthing",
    description:
      "دانه‌بندی ریزتر برای تماس بهتر با خاک و بهبود عملکرد سیستم اتصال زمین.",
    tags: ["bentonite", "grounding", "soil", "brand"],
  },
  {
    title: "LRM سوپر اکتیو",
    href: "/products/lrm-ground-enhancement-material-conductive-bentonite",
    description:
      "ماده کاهنده مقاومت زمین برای پروژه‌های صنعتی، خاک‌های مقاوم و شبکه زمین.",
    tags: ["lrm", "grounding", "soil", "brand"],
  },
  {
    title: "GRM مواد کاهنده مقاومت زمین",
    href: "/products/grm-ground-recovering-material-earthing",
    description:
      "مناسب پروژه‌های ارتینگ صنعتی، چاه ارت، پست برق و شرایط سخت خاک.",
    tags: ["grm", "grounding", "soil", "brand"],
  },
];

function getRelatedProducts(page: SeoPage) {
  return relatedProducts.filter((product) =>
    product.tags.includes(page.category)
  );
}

export function SeoLandingPage({ page }: SeoLandingPageProps) {
  const jsonLdList = createSeoPageJsonLdList(page);
  const products = getRelatedProducts(page);

  return (
    <main className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 lg:px-8">
      {jsonLdList.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(item),
          }}
        />
      ))}

      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur md:p-10">
        <p className="mb-4 text-sm font-semibold text-cyan-300">
          {categoryLabel[page.category]}
        </p>

        <h1 className="mb-6 text-3xl font-black leading-tight md:text-5xl">
          {page.h1}
        </h1>

        <p className="max-w-4xl text-lg leading-9 text-slate-200">
          {page.intro}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={page.ctaHref}
            className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            {page.ctaLabel}
          </Link>

          <Link
            href="/buy-bentonite"
            className="rounded-full border border-white/20 px-6 py-3 font-bold hover:bg-white/10"
          >
            خرید بنتونیت
          </Link>

          <Link
            href="/bentonite-price"
            className="rounded-full border border-white/20 px-6 py-3 font-bold hover:bg-white/10"
          >
            قیمت بنتونیت
          </Link>

          <Link
            href="/soil-resistivity"
            className="rounded-full border border-white/20 px-6 py-3 font-bold hover:bg-white/10"
          >
            سنجش مقاومت خاک
          </Link>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {page.sections.slice(0, 3).map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
          >
            <h2 className="mb-3 text-xl font-extrabold text-cyan-200">
              {section.title}
            </h2>
            <p className="leading-8 text-slate-300">{section.body}</p>
          </article>
        ))}
      </section>

      {page.sections.length > 3 ? (
        <section className="mt-12 space-y-8 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-10">
          {page.sections.slice(3).map((section) => (
            <article key={section.title}>
              <h2 className="mb-3 text-2xl font-black text-white">
                {section.title}
              </h2>
              <p className="leading-9 text-slate-300">{section.body}</p>
            </article>
          ))}
        </section>
      ) : null}

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-10">
        <h2 className="mb-6 text-2xl font-black">
          انتخاب سریع بر اساس نیاز پروژه
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/earthing-bentonite"
            className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 hover:bg-cyan-300/20"
          >
            <span className="block font-bold text-cyan-100">
              پروژه عمومی چاه ارت
            </span>
            <span className="mt-2 block leading-7 text-slate-300">
              بررسی بنتونیت ارتینگ برای اجرای چاه ارت و سیستم زمین عمومی.
            </span>
          </Link>

          <Link
            href="/lrm"
            className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 hover:bg-cyan-300/20"
          >
            <span className="block font-bold text-cyan-100">
              خاک با مقاومت بالا
            </span>
            <span className="mt-2 block leading-7 text-slate-300">
              بررسی LRM برای کاهش مقاومت زمین در پروژه‌های حساس‌تر.
            </span>
          </Link>

          <Link
            href="/grm"
            className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 hover:bg-cyan-300/20"
          >
            <span className="block font-bold text-cyan-100">
              پروژه صنعتی و پایدار
            </span>
            <span className="mt-2 block leading-7 text-slate-300">
              بررسی GRM برای شبکه زمین، پست برق، دکل و پروژه‌های صنعتی.
            </span>
          </Link>
        </div>
      </section>

      {products.length > 0 ? (
        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-10">
          <h2 className="mb-6 text-2xl font-black">محصولات مرتبط</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5 transition hover:bg-emerald-300/20"
              >
                <span className="block text-lg font-bold text-emerald-100">
                  {product.title}
                </span>
                <span className="mt-2 block leading-7 text-slate-300">
                  {product.description}
                </span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-10">
        <h2 className="mb-6 text-2xl font-black">صفحات مرتبط</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {page.related.map((slug) => {
            const relatedPage = getSeoPage(slug);
            if (!relatedPage) return null;

            return (
              <Link
                key={slug}
                href={`/${relatedPage.slug}`}
                className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 transition hover:bg-cyan-300/20"
              >
                <span className="block text-lg font-bold text-cyan-100">
                  {relatedPage.h1}
                </span>
                <span className="mt-2 block leading-7 text-slate-300">
                  {relatedPage.description}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-10">
        <h2 className="mb-6 text-2xl font-black">سوالات متداول</h2>

        <div className="space-y-5">
          {page.faqs.map((faq) => (
            <article key={faq.question}>
              <h3 className="text-lg font-bold text-cyan-200">
                {faq.question}
              </h3>
              <p className="mt-2 leading-8 text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}