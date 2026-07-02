import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "../lib/seo";

const pageUrl = `${SITE_URL}/bentonite`;

export const metadata: Metadata = {
  title: "بنتونیت | خرید و قیمت بنتونیت ارتینگ، LRM و GRM",
  description:
    "راهنمای تخصصی بنتونیت، خرید بنتونیت، قیمت بنتونیت، بنتونیت ارتینگ، بنتونیت چاه ارت، LRM، GRM و مواد کاهنده مقاومت زمین برای سیستم ارتینگ.",
  keywords: [
    "بنتونیت",
    "خرید بنتونیت",
    "قیمت بنتونیت",
    "بنتونیت ارتینگ",
    "بنتونیت چاه ارت",
    "بنتونیت اکتیو",
    "بنتونیت صنعتی",
    "Grounding Bentonite",
    "Earthing Bentonite",
    "Bentonite",
    "مواد کاهنده مقاومت زمین",
    "کاهش مقاومت اهمی خاک",
    "کاهش مقاومت اهمی زمین",
    "سنجش مقاومت اهمی خاک",
    "Ground Enhancement Material",
    "LRM",
    "GRM",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "بنتونیت | خرید و قیمت بنتونیت ارتینگ، LRM و GRM",
    description:
      "راهنمای تخصصی بنتونیت، خرید بنتونیت، قیمت بنتونیت، کاربرد در چاه ارت، LRM، GRM و Ground Enhancement Material.",
    url: pageUrl,
    type: "article",
    siteName: SITE_NAME,
    locale: "fa_IR",
  },
};

const breadcrumbJsonLd = {
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
      name: "بنتونیت",
      item: pageUrl,
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "بنتونیت چیست و چه کاربردی دارد؟",
  description:
    "معرفی تخصصی بنتونیت، انواع بنتونیت، کاربرد بنتونیت در ارتینگ، چاه ارت و مواد کاهنده مقاومت زمین.",
  author: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  mainEntityOfPage: pageUrl,
  inLanguage: "fa-IR",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "بنتونیت چیست؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بنتونیت یک نوع خاک رسی با جذب آب بالا است که در صنایع مختلف از جمله حفاری، ریخته‌گری، ارتینگ، چاه ارت و مواد کاهنده مقاومت زمین استفاده می‌شود.",
      },
    },
    {
      "@type": "Question",
      name: "بنتونیت ارتینگ چه کاربردی دارد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بنتونیت ارتینگ برای کاهش مقاومت الکتریکی خاک اطراف الکترود زمین، افزایش رطوبت‌پذیری محیط و بهبود عملکرد سیستم ارت استفاده می‌شود.",
      },
    },
    {
      "@type": "Question",
      name: "تفاوت بنتونیت با LRM و GRM چیست؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بنتونیت ماده پایه معدنی است، اما LRM و GRM معمولاً ترکیبات مهندسی‌شده برای کاهش پایدارتر مقاومت زمین در سیستم‌های ارتینگ هستند.",
      },
    },
    {
      "@type": "Question",
      name: "قیمت بنتونیت به چه عواملی بستگی دارد؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "قیمت بنتونیت به نوع ماده، کیفیت فرآوری، دانه‌بندی، درصد رطوبت، نوع بسته‌بندی، حجم سفارش و محل تحویل بستگی دارد.",
      },
    },
    {
      "@type": "Question",
      name: "برای کاهش مقاومت اهمی خاک از چه موادی استفاده می‌شود؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "برای کاهش مقاومت اهمی خاک می‌توان از بنتونیت ارتینگ، LRM، GRM و سایر مواد کاهنده مقاومت زمین بر اساس شرایط خاک و طراحی سیستم ارت استفاده کرد.",
      },
    },
  ],
};

const jsonLdList = [breadcrumbJsonLd, articleJsonLd, faqJsonLd];

export default function BentonitePage() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-white sm:px-6 lg:px-8">
      {jsonLdList.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur md:p-10">
        <p className="mb-4 text-sm font-semibold text-cyan-300">
          Bentonite / Grounding Bentonite / Earthing Bentonite
        </p>

        <h1 className="mb-6 text-3xl font-black leading-tight md:text-5xl">
          بنتونیت چیست؟ راهنمای خرید بنتونیت ارتینگ و صنعتی
        </h1>

        <p className="max-w-4xl text-lg leading-9 text-slate-200">
          بنتونیت یکی از پرکاربردترین مواد معدنی در صنایع مختلف است. این ماده
          به دلیل جذب آب بالا، خاصیت تورم‌پذیری، چسبندگی و پایداری مناسب، در
          حفاری، ریخته‌گری، کشاورزی، تصفیه، عایق‌کاری و همچنین سیستم‌های
          ارتینگ و چاه ارت استفاده می‌شود. در پروژه‌های برق و ارتینگ، بنتونیت
          به عنوان ماده‌ای برای بهبود تماس الکترود با خاک و کاهش مقاومت زمین
          شناخته می‌شود.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            استعلام خرید بنتونیت
          </Link>

          <Link
            href="/products/lrm-ground-enhancement-material-conductive-bentonite"
            className="rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
          >
            مشاهده LRM
          </Link>

          <Link
            href="/products/grm-ground-recovering-material-earthing"
            className="rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
          >
            مشاهده GRM
          </Link>

          <Link
            href="/buy-bentonite"
            className="rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
          >
            راهنمای خرید بنتونیت
          </Link>

          <Link
            href="/bentonite-price"
            className="rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
          >
            قیمت بنتونیت
          </Link>
        </div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "بنتونیت ارتینگ",
            text: "برای کاهش مقاومت زمین در چاه ارت، اطراف صفحه مسی، میله ارت و شبکه زمین استفاده می‌شود.",
          },
          {
            title: "بنتونیت صنعتی",
            text: "در حفاری، ریخته‌گری، گندله‌سازی، تصفیه و صنایع معدنی کاربرد دارد.",
          },
          {
            title: "LRM و GRM",
            text: "ترکیبات تخصصی‌تر برای کاهش مقاومت زمین و افزایش پایداری عملکرد سیستم ارتینگ هستند.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
          >
            <h2 className="mb-3 text-xl font-extrabold text-cyan-200">
              {item.title}
            </h2>
            <p className="leading-8 text-slate-300">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-10">
        <h2 className="mb-5 text-2xl font-black">
          کاربرد بنتونیت در چاه ارت و سیستم ارتینگ
        </h2>

        <p className="leading-9 text-slate-300">
          یکی از مهم‌ترین کاربردهای بنتونیت در ایران، استفاده در چاه ارت و
          سیستم اتصال زمین است. زمانی که خاک محل پروژه مقاومت الکتریکی بالایی
          دارد، استفاده از بنتونیت در اطراف الکترود ارت باعث افزایش سطح تماس،
          نگهداری رطوبت و کاهش مقاومت زمین می‌شود. این موضوع در پست‌های برق،
          دکل‌های مخابراتی، ساختمان‌های صنعتی، کارخانه‌ها و پروژه‌های نیروگاهی
          اهمیت زیادی دارد.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link
            href="/products/active-bentonite-earthing-ground-enhancement"
            className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 font-bold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            بنتونیت ارتینگ چیست؟
          </Link>

          <Link
            href="/products/micronized-bentonite-earth-pit-earthing"
            className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 font-bold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Grounding Bentonite چیست؟
          </Link>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-10">
        <h2 className="mb-5 text-2xl font-black">انواع بنتونیت</h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-bold text-cyan-200">
              بنتونیت سدیمی
            </h3>
            <p className="leading-8 text-slate-300">
              بنتونیت سدیمی معمولاً خاصیت تورم‌پذیری و جذب آب بالاتری دارد و
              در بسیاری از کاربردهای صنعتی و فنی استفاده می‌شود.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-bold text-cyan-200">
              بنتونیت کلسیمی
            </h3>
            <p className="leading-8 text-slate-300">
              بنتونیت کلسیمی در بعضی کاربردهای صنعتی و معدنی کاربرد دارد و
              بسته به فرآوری می‌تواند برای مصارف مختلف آماده‌سازی شود.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-bold text-cyan-200">
              بنتونیت اکتیو
            </h3>
            <p className="leading-8 text-slate-300">
              بنتونیت اکتیو به بنتونیتی گفته می‌شود که برای بهبود خواص فنی و
              عملکردی، فرآوری یا فعال‌سازی شده است.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-bold text-cyan-200">
              بنتونیت ارتینگ
            </h3>
            <p className="leading-8 text-slate-300">
              بنتونیت ارتینگ برای استفاده در سیستم اتصال زمین، چاه ارت، صفحه
              مسی و میله ارت آماده‌سازی می‌شود.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-10">
        <h2 className="mb-5 text-2xl font-black">
          تفاوت بنتونیت، LRM و GRM در پروژه‌های ارتینگ
        </h2>

        <p className="leading-9 text-slate-300">
          در بسیاری از پروژه‌ها، بنتونیت به عنوان یک ماده اقتصادی برای بهبود
          مقاومت زمین استفاده می‌شود. اما در پروژه‌هایی که پایداری بلندمدت،
          مقاومت پایین‌تر، شرایط خاک سخت، رطوبت کم یا حساسیت حفاظتی بالا مطرح
          است، استفاده از مواد مهندسی‌شده مانند LRM و GRM می‌تواند گزینه
          مناسب‌تری باشد. انتخاب بین بنتونیت، LRM و GRM باید بر اساس مقاومت
          مخصوص خاک، نوع الکترود، شرایط محیطی و هدف طراحی سیستم ارت انجام شود.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/products/lrm-ground-enhancement-material-conductive-bentonite"
            className="rounded-full border border-white/20 px-5 py-3 font-bold hover:bg-white/10"
          >
            صفحه LRM
          </Link>

          <Link
            href="/products/grm-ground-recovering-material-earthing"
            className="rounded-full border border-white/20 px-5 py-3 font-bold hover:bg-white/10"
          >
            صفحه GRM
          </Link>

          <Link
            href="/bentonite-price"
            className="rounded-full border border-white/20 px-5 py-3 font-bold hover:bg-white/10"
          >
            قیمت بنتونیت
          </Link>

          <Link
            href="/buy-bentonite"
            className="rounded-full border border-white/20 px-5 py-3 font-bold hover:bg-white/10"
          >
            خرید بنتونیت
          </Link>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-10">
        <h2 className="mb-6 text-2xl font-black">
          مسیرهای تخصصی مرتبط با بنتونیت و ارتینگ
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              href: "/buy-bentonite",
              title: "خرید بنتونیت",
              text: "راهنمای انتخاب و خرید بنتونیت ارتینگ، صنعتی، اکتیو و میکرونیزه.",
            },
            {
              href: "/bentonite-price",
              title: "قیمت بنتونیت",
              text: "عوامل مؤثر بر قیمت بنتونیت چاه ارت، بنتونیت اکتیو و بنتونیت میکرونیزه.",
            },
            {
              href: "/earthing-bentonite",
              title: "بنتونیت ارتینگ",
              text: "کاربرد بنتونیت در چاه ارت، صفحه مسی، میله ارت و سیستم اتصال زمین.",
            },
            {
              href: "/grounding-bentonite",
              title: "Grounding Bentonite",
              text: "معرفی بنتونیت مخصوص سیستم Grounding و Earth Pit.",
            },
            {
              href: "/ground-enhancement-material",
              title: "Ground Enhancement Material",
              text: "مواد بهبوددهنده زمین شامل بنتونیت، LRM، GRM و ترکیبات تخصصی ارتینگ.",
            },
            {
              href: "/soil-resistivity",
              title: "سنجش مقاومت اهمی خاک",
              text: "مقاومت مخصوص خاک، روش اندازه‌گیری و راهکارهای کاهش مقاومت زمین.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5 transition hover:bg-cyan-300/20"
            >
              <span className="block text-lg font-bold text-cyan-100">
                {item.title}
              </span>
              <span className="mt-2 block leading-7 text-slate-300">
                {item.text}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 md:p-10">
        <h2 className="mb-6 text-2xl font-black">سوالات متداول بنتونیت</h2>

        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-bold text-cyan-200">
              بنتونیت برای چاه ارت بهتر است یا مواد کاهنده مقاومت زمین؟
            </h3>
            <p className="mt-2 leading-8 text-slate-300">
              بستگی به شرایط پروژه دارد. در پروژه‌های عمومی، بنتونیت می‌تواند
              گزینه اقتصادی باشد، اما برای پروژه‌های حساس‌تر، LRM و GRM معمولاً
              عملکرد پایدارتر و مهندسی‌شده‌تری ارائه می‌دهند.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cyan-200">
              قیمت بنتونیت چگونه تعیین می‌شود؟
            </h3>
            <p className="mt-2 leading-8 text-slate-300">
              قیمت بنتونیت به نوع ماده، دانه‌بندی، درصد رطوبت، کیفیت فرآوری،
              بسته‌بندی، حجم سفارش و محل تحویل بستگی دارد.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-cyan-200">
              آیا بنتونیت همان Ground Enhancement Material است؟
            </h3>
            <p className="mt-2 leading-8 text-slate-300">
              خیر. بنتونیت می‌تواند یکی از مواد مورد استفاده در ارتینگ باشد،
              اما Ground Enhancement Material عنوان کلی‌تری برای مواد تخصصی
              کاهنده مقاومت زمین است.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}