// app/why-us/on-time-delivery/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "تحویل به‌موقع (On-time Delivery) | نام برند شما",
  description:
    "سیستم حمل‌ونقل و لجستیک نام برند شما بر پایه تحویل به‌موقع، پایدار و بدون وقفه طراحی شده است تا مواد اولیه و محصولات دقیقاً در زمان مورد نیاز به دست شما برسند.",
  alternates: {
    canonical: "https://example.com/why-us/on-time-delivery",
  },
  openGraph: {
    type: "article",
    title: "On-time Delivery – تحویل به‌موقع، هر بار و بدون تأخیر",
    description:
      "تحویل سریع، قابل‌اعتماد و بدون وقفه با برنامه‌ریزی هوشمند موجودی، حمل داخلی و بین‌المللی و ردیابی محموله‌ها.",
    url: "https://example.com/why-us/on-time-delivery",
  },
};

export default function OnTimeDeliveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "On-time Delivery – تحویل به‌موقع، هر بار و بدون تأخیر",
    description:
      "سیستم لجستیک و تحویل به‌موقع نام برند شما برای تامین پایدار مواد اولیه و محصولات بدون توقف خط تولید.",
    url: "https://example.com/why-us/on-time-delivery",
    mainEntity: {
      "@type": "Service",
      name: "خدمات تحویل به‌موقع (On-time Delivery)",
      provider: {
        "@type": "Organization",
        name: "نام برند شما",
        url: "https://example.com",
      },
      areaServed: {
        "@type": "Country",
        name: "Iran",
      },
    },
  };

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
      {/* اسکیما JSON-LD مخصوص این صفحه */}
      <Script
        id="on-time-delivery-ldjson"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article
        className="bg-black/40 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl"
        dir="rtl"
      >
        {/* دکمه بازگشت بالای صفحه – سمت راست */}
        <div className="mb-6 flex justify-start">
          <Link
            href="/#why-us"
            className="
              inline-block
              px-5 py-2
              rounded-xl
              bg-pink-700/20
              border border-pink-400/60
              text-white
              text-sm md:text-base
              transition-all
              hover:bg-pink-700/35
              hover:border-pink-200
              backdrop-blur-sm
            "
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت
          </Link>
        </div>

        {/* تیتر اصلی */}
        <header className="text-center mb-8 md:mb-10">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            On-time Delivery – تحویل به‌موقع، هر بار و بدون تأخیر
          </h1>

          <div
            className="mt-3 text-xs md:text-sm text-white/70"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ۱۴۰۳/۰۸/۲۷
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-200 border border-emerald-400/50">
              تحویل به‌موقع و پایدار
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-200 border border-sky-400/50">
              لجستیک و زنجیره تأمین
            </span>
          </div>
        </header>

        {/* متن اصلی */}
        <section
          className="space-y-4 text-base md:text-lg leading-8 text-white/85 text-justify mb-10"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          <p>
            در صنعت امروز، زمان یک سرمایه‌ی حیاتی است. مشتریان ما می‌دانند که
            برنامه‌ریزی تولید، اجرای پروژه‌ها و زنجیره تأمین، تنها زمانی کارآمد
            خواهند بود که مواد اولیه دقیقاً در زمان مورد نیاز به دستشان برسد.
          </p>
          <p>
            به همین دلیل ما سیستم حمل‌ونقل و لجستیک خود را بر پایه‌ی تحویل سریع،
            قابل‌اعتماد و بدون وقفه طراحی کرده‌ایم.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-4 mb-2">
            تحویل به‌موقع یعنی چه؟
          </h2>
          <p>
            برای ما، تحویل به‌موقع فقط یک وعده نیست؛ یک تعهد عملیاتی است. سیستم
            تحویل ما شامل موارد زیر است:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>پایش دقیق موجودی و برنامه‌ریزی هوشمند تولید</li>
            <li>هماهنگی لجستیکی پویا با خطوط حمل داخلی و بین‌المللی</li>
            <li>بارگیری و ارسال منظم با کنترل کیفیت پیش از خروج</li>
            <li>امکان ردیابی لحظه‌ای وضعیت محموله</li>
          </ul>
          <p>
            این ساختار باعث می‌شود سفارش‌های شما بدون تأخیر، دقیق و منظم، در
            محل موردنظر تحویل گردد.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            لجستیک جهانی برای مشتریان جهانی
          </h2>
          <p>
            با شبکه‌ی گسترده‌ای از مسیرهای حمل‌ونقل زمینی، ریلی و دریایی، ما
            قادر هستیم سفارش‌ها را با سرعت و دقت بالا به نقاط مختلف ارسال کنیم.
          </p>
          <p>ویژگی‌های کلیدی سیستم لجستیک ما:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li>پوشش گسترده حمل داخلی و صادراتی</li>
            <li>همکاری با شرکت‌های حمل‌ونقل معتبر بین‌المللی</li>
            <li>بهینه‌سازی زمان‌بندی ارسال بر اساس نیاز مشتری</li>
            <li>تنظیم برنامه تحویل برای پروژه‌های زمان‌محور</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            چرا تحویل به‌موقع برای شما اهمیت دارد؟
          </h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>جلوگیری از توقف خط تولید</li>
            <li>کاهش هزینه‌های انبارداری</li>
            <li>اطمینان از اجرای بدون وقفه پروژه</li>
            <li>رفع ریسک کمبود مواد در بازه‌های حساس</li>
            <li>افزایش بهره‌وری و کیفیت برنامه‌ریزی</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            تعهد ما به شما
          </h2>
          <p>
            ما باور داریم که سرعت و دقت در تحویل، بخش جدایی‌ناپذیر از کیفیت
            محصول و خدمات است. به همین دلیل، سیستم تحویل ما ترکیبی از:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>مدیریت هوشمند زنجیره تأمین</li>
            <li>پایش روزانه موجودی و تولید</li>
            <li>حمل با وسایل استاندارد و مطمئن</li>
            <li>پاسخگویی سریع و پشتیبانی مستمر</li>
          </ul>
          <p>
            است تا شما در هر مرحله از پروژه، بدون نگرانی از تأخیر به کارتان ادامه
            دهید.
          </p>
        </section>

        {/* گالری تصاویر تحویل به‌موقع */}
        <section className="mb-10">
          <h2
            className="text-lg md:text-xl font-bold mb-4 text-right text-white"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            نگاهی به حمل‌ونقل و سیستم‌های تحویل ما
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {/* تصویر ۱ */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/delivery-1.jpg"
                alt="کامیون در حال حمل محموله‌های باری"
                fill
                className="object-cover"
              />
            </div>

            {/* تصویر ۲ */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/delivery-2.jpg"
                alt="بارگیری کیسه‌ها و آماده‌سازی برای ارسال"
                fill
                className="object-cover"
              />
            </div>

            {/* تصویر ۳ */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/delivery-3.jpg"
                alt="تریلر حامل کیسه‌های محصول در حال حرکت"
                fill
                className="object-cover"
              />
            </div>

            {/* تصویر ۴ */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/delivery-4.jpg"
                alt="کارشناس لجستیک در حال هماهنگی ارسال محموله"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* دکمه بازگشت پایین صفحه – سمت راست */}
        <div className="mt-10 flex justify-start">
          <Link
            href="/#why-us"
            className="
              inline-block
              px-5 py-2
              rounded-xl
              bg-pink-700/20
              border border-pink-400/60
              text-white
              text-sm md:text-base
              transition-all
              hover:bg-pink-700/35
              hover:border-pink-200
              backdrop-blur-sm
            "
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت
          </Link>
        </div>
      </article>
    </main>
  );
}
