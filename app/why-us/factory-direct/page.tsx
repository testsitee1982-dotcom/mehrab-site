"use client";

import Image from "next/image";
import Link from "next/link";

export default function FactoryDirectPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
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
            تولید مستقیم از کارخانه – کیفیت یکنواخت، نظارت کامل
          </h1>

          <div
            className="mt-3 text-xs md:text-sm text-white/70"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ۱۴۰۳/۰۸/۲۷
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs md:text-sm">
            <span
              className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-200 border border-emerald-400/50"
              style={{ fontFamily: "BMitra, BNazanin, Tahoma, system-ui" }}
            >
              تولید مستقیم کارخانه
            </span>
            <span
              className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-200 border border-sky-400/50"
              style={{ fontFamily: "BMitra, BNazanin, Tahoma, system-ui" }}
            >
              کنترل کیفیت (QC)
            </span>
          </div>
        </header>

        {/* متن اصلی */}
        <section
          className="space-y-4 text-base md:text-lg leading-8 text-white/85 text-justify mb-10"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          <p>
            در مجموعه‌ی ما، تمامی محصولات به‌صورت مستقیم در کارخانه‌ی اختصاصی
            تولید می‌شوند؛ این یعنی کنترل کامل بر تک‌تک مراحل تولید، از انتخاب
            مواد اولیه تا تست نهایی محصول. حذف واسطه‌ها باعث شده است که کالاها
            با قیمت رقابتی، کیفیت پایدار و زمان تحویل قابل‌اعتماد به دست
            مشتریان برسند.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            کنترل کیفیت چندمرحله‌ای (QC)
          </h2>

          <p>
            برای تضمین کیفیت، یک سیستم دقیق و استاندارد کنترل کیفیت در کارخانه
            پیاده‌سازی شده است:
          </p>

          <ul className="list-disc pr-6 space-y-1">
            <li>بازرسی مواد اولیه پیش از ورود به خط تولید</li>
            <li>کنترل کیفیت در حین تولید (In-Process QC)</li>
            <li>آزمون‌های عملکردی و ایمنی پس از تولید</li>
            <li>نمونه‌برداری دوره‌ای جهت پایش ثبات کیفیت</li>
            <li>ردگیری کامل محصول از خط تولید تا تحویل</li>
          </ul>

          <p>
            این فرآیندها باعث می‌شود محصولات همواره با کیفیت یکسان، استاندارد و
            قابل اعتماد عرضه شوند.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            مزایای خرید مستقیم از کارخانه
          </h2>

          <h3 className="font-semibold mt-2 mb-1">
            ۱. قیمت رقابتی و بدون واسطه
          </h3>
          <p>
            با حذف هزینه‌های اضافی زنجیره تأمین، بهترین قیمت ممکن برای مشتریان
            فراهم می‌شود.
          </p>

          <h3 className="font-semibold mt-2 mb-1">
            ۲. سرعت تولید و تحویل قابل پیش‌بینی
          </h3>
          <p>
            هماهنگی مستقیم با بخش تولید، زمان‌بندی شفاف و امکان تحویل سریع‌تر را
            تضمین می‌کند.
          </p>

          <h3 className="font-semibold mt-2 mb-1">۳. امکان سفارشی‌سازی</h3>
          <p>
            در صورت نیاز مشتریان، امکان تنظیم مشخصات فنی، بسته‌بندی یا تولید
            ویژه فراهم است.
          </p>

          <h3 className="font-semibold mt-2 mb-1">
            ۴. ردیابی کامل و شفافیت
          </h3>
          <p>
            هر محصول دارای اطلاعات رهگیری است و از مرحله مواد اولیه تا خروج از
            کارخانه قابل کنترل است.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            تعهد ما
          </h2>
          <p>
            هدف ما ارائه محصولاتی است که سال‌ها بدون مشکل، مطمئن و مطابق
            استانداردهای بین‌المللی کار کنند. تولید مستقیم از کارخانه به ما این
            امکان را می‌دهد که کیفیت را تضمین کنیم، قیمت را کنترل کنیم و
            پاسخگوی نیازهای دقیق مشتری باشیم.
          </p>
        </section>

        {/* گالری تصاویر کارخانه و QC */}
        <section className="mb-10">
          <h2
            className="text-lg md:text-xl font-bold mb-4 text-right text-white"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            نگاهی به فرآیند تولید و کنترل کیفیت در کارخانه
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/factory-1.png"
                alt="بازرسی و ثبت کیفیت کیسه‌های محصول"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/factory-2.png"
                alt="کنترل مواد اولیه و خطوط تولید"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/factory-3.png"
                alt="بسته‌بندی و کنترل نهایی محصول"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/factory-4.png"
                alt="تیم کنترل کیفیت و پایش ثبات محصول"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* دکمه بازگشت پایین صفحه */}
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
    </div>
  );
}
