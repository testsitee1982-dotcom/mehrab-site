// app/why-us/tech-support/page.tsx
"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "پشتیبانی فنی تخصصی (Tech Support) | نام برند شما",
  description:
    "پشتیبانی فنی تخصصی برای انتخاب گرید مناسب بنتونیت، روش صحیح مصرف و تحلیل عملکرد پروژه‌های برق، حفاری و عمرانی، همراه شما از مشاوره تا اجرای نهایی.",
  alternates: {
    canonical: "https://example.com/why-us/tech-support",
  },
  openGraph: {
    type: "article",
    title: "پشتیبانی فنی تخصصی (Tech Support)",
    description:
      "مشاوره قبل از خرید، همراهی در زمان اجرا و تحلیل فنی پس از استفاده برای پروژه‌های حساس برق، مخابرات و عمرانی.",
    url: "https://example.com/why-us/tech-support",
  },
};

export default function TechSupportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "پشتیبانی فنی تخصصی (Tech Support)",
    description:
      "خدمات مشاوره و پشتیبانی فنی برای انتخاب و استفاده صحیح از بنتونیت و مواد مرتبط در پروژه‌های صنعتی.",
    url: "https://example.com/why-us/tech-support",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "پشتیبانی فنی تخصصی",
      provider: {
        "@type": "Organization",
        name: "نام برند شما",
        url: "https://example.com",
      },
    },
  };

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
      {/* اسکیما JSON-LD صفحه */}
      <Script
        id="tech-support-ldjson"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article
        className="bg-black/40 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl"
        dir="rtl"
      >
        {/* دکمه بازگشت بالا - سمت راست */}
        <div className="mb-6 flex justify-start">
          <Link
            href="/#why-us"
            className="inline-block px-5 py-2 rounded-xl bg-pink-700/20 border border-pink-400/60 text-white text-sm md:text-base transition-all hover:bg-pink-700/35 hover:border-pink-200 backdrop-blur-sm"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت
          </Link>
        </div>

        {/* تیتر صفحه */}
        <header className="text-center mb-8 md:mb-10">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            پشتیبانی فنی تخصصی (Tech Support)
          </h1>

          <p
            className="mt-3 text-sm md:text-base text-white/80"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            راهنمایی اختصاصی
          </p>
        </header>

        {/* متن اصلی */}
        <section
          className="space-y-4 text-base md:text-lg leading-8 text-white/85 text-justify mb-10"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          <p>
            در صنعت امروز، تنها داشتن یک محصول باکیفیت کافی نیست؛ نحوه‌ی استفاده
            صحیح، انتخاب دقیق گرید مناسب و اجرای اصولی است که نتیجه نهایی را
            تضمین می‌کند. به همین دلیل، ما تنها یک تأمین‌کننده مواد نیستیم؛ بلکه
            شریک فنی شما در تمام مراحل پروژه هستیم.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            مشاوره فنی قبل از خرید
          </h2>
          <p>
            پیش از انتخاب محصول، کارشناسان ما نیاز پروژه‌ی شما را بررسی می‌کنند و
            با توجه به شرایط زیر بهترین گزینه را پیشنهاد می‌دهند:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>
              نوع پروژه (ارت، حفاری، دوغاب‌سازی، کاندوئیت‌ها، مصارف نیروگاهی و
              ...)
            </li>
            <li>ویژگی‌های خاک محل</li>
            <li>شرایط رطوبت و دما</li>
            <li>مقدار مورد نیاز و روش مصرف</li>
            <li>استانداردهای لازم (IEC، ASTM، استانداردهای داخلی و ...)</li>
          </ul>
          <p>
            این مرحله کمک می‌کند محصول اشتباه انتخاب نکنید و هزینه‌ی اضافی
            نپردازید.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            پشتیبانی در زمان اجرا
          </h2>
          <p>مهندسان فنی ما در طول اجرای پروژه در کنار شما هستند تا:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li>روش صحیح مصرف بنتونیت و مواد مشابه را توضیح دهند.</li>
            <li>میزان اختلاط و رطوبت مناسب را تعیین کنند.</li>
            <li>نکات مهم جهت افزایش عملکرد مواد را ارائه دهند.</li>
            <li>مشکلات احتمالی را پیش از وقوع شناسایی کنند.</li>
          </ul>
          <p>نتیجه؟ کاهش خطا، افزایش سرعت اجرا و کیفیت بالاتر خروجی پروژه.</p>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            آنالیز و بررسی فنی پس از استفاده
          </h2>
          <p>در صورت نیاز، تیم فنی ما می‌تواند:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li>نمونه‌برداری از محل پروژه</li>
            <li>بررسی کیفیت اجرا و عملکرد مواد</li>
            <li>ارائه گزارش فنی جهت استانداردسازی</li>
            <li>ارائه راهکار برای بهبود نتایج</li>
          </ul>
          <p>
            این خدمات به‌ویژه برای پروژه‌های بزرگ و حساس بسیار ارزشمند است و به
            شما دید دقیق‌تری از عملکرد سیستم می‌دهد.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            چرا پشتیبانی فنی ما متفاوت است؟
          </h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>تجربه‌ی سال‌ها همکاری با پیمانکاران برق، مخابرات و عمرانی</li>
            <li>
              آشنایی تخصصی با انواع بنتونیت (سوپر اکتیو، اکتیو، کروم‌نایز، حفاری و
              ...)
            </li>
            <li>پاسخگویی سریع و دقیق</li>
            <li>ارائه راهکار عملی، قابل‌اجرا و مقرون‌به‌صرفه</li>
            <li>همراهی واقعی از مرحله مشاوره تا پایان پروژه</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            جمع‌بندی
          </h2>
          <p>
            پیام اصلی پشتیبانی فنی ما ساده است: شما تنها نیستید — ما کنار شما
            هستیم تا بهترین نتیجه را از محصول به‌دست آورید.
          </p>
        </section>

        {/* گالری تصاویر تیم پشتیبانی فنی */}
        <section className="mb-10">
          <h2
            className="text-lg md:text-xl font-bold mb-4 text-right text-white"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            نگاهی به تیم پشتیبانی فنی و همراهی با مشتریان
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/tech-1.png"
                alt="تیم پشتیبانی فنی در حال پاسخ‌گویی به مشتریان"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/tech-2.png"
                alt="ارائه مشاوره فنی اختصاصی برای پروژه"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* دکمه بازگشت پایین - سمت راست */}
        <div className="mt-10 flex justify-start">
          <Link
            href="/#why-us"
            className="inline-block px-5 py-2 rounded-xl bg-pink-700/20 border border-pink-400/60 text-white text-sm md:text-base transition-all hover:bg-pink-700/35 hover:border-pink-200 backdrop-blur-sm"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت
          </Link>
        </div>
      </article>
    </main>
  );
}
