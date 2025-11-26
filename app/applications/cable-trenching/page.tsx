"use client";

import Image from "next/image";
import Link from "next/link";

export default function CableTrenchingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <article
        className="bg-black/40 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl"
        dir="rtl"
      >
        {/* دکمه بازگشت بالا */}
        <div className="mb-6 flex justify-start">
          <Link
            href="/#applications"
            className="inline-block px-5 py-2 rounded-xl bg-pink-700/20 border border-pink-400/60 text-white text-sm md:text-base transition-all hover:bg-pink-700/35 hover:border-pink-200 backdrop-blur-sm"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت
          </Link>
        </div>

        {/* تیتر اصلی */}
        <header className="text-center mb-6 md:mb-8">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            بنتونیت تخصصی برای کابل‌کشی و حفاری صنعتی
          </h1>

          <p
            className="mt-3 text-sm md:text-base text-white/75"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            بهبود ایمنی، افزایش عمر کابل‌ها و پایداری خاک اطراف مجاری دفنی
          </p>
        </header>

        {/* بنر تصویری بالا */}
        <section className="mb-8">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
            <Image
              src="/images/applications/cable-hero.jpg"
              alt="بک‌فیل بنتونیتی اطراف کابل‌ها در ترانشه"
              fill
              priority
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </section>

        {/* متن اصلی */}
        <section
          className="space-y-4 text-base md:text-lg leading-8 text-white/85 text-justify"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          <p>
            در پروژه‌های کابل‌کشی فشار ضعیف، متوسط و قوی، کیفیت مواد مورد
            استفاده در بک‌فیل اطراف کابل، دوغاب‌زنی و تزریق در مجاری دفنی
            تأثیر مستقیم بر عملکرد الکتریکی، ایمنی حرارتی و پایداری مکانیکی
            مسیر کابل دارد. بنتونیت‌های تولیدی شرکت ما، به‌صورت اختصاصی برای
            استفاده در کانال‌های کابل، تونل‌ها، مجاری حفاری و عملیات
            خاک‌برداری صنعتی طراحی شده‌اند و با ایجاد بستر یکنواخت، مرطوب و
            پایدار، شرایط ایده‌آلی برای حفاظت از کابل‌ها فراهم می‌کنند.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-4 mb-2">
            چرا بنتونیت در کابل‌کشی استفاده می‌شود؟
          </h2>
          <p>کابل‌های دفنی در معرض تهدیدهای متعددی قرار دارند:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li>انتقال حرارت ناکافی و افزایش دمای کابل</li>
            <li>خشک شدن خاک اطراف مسیر و ایجاد مقاومت حرارتی بالا</li>
            <li>نشست خاک و فشارهای مکانیکی ناهمگون</li>
            <li>ورود هوا، ریشه گیاهان یا رطوبت غیراستاندارد</li>
            <li>کاهش استحکام مسیر و ایجاد حفره در کانال‌ها</li>
          </ul>
          <p>
            بنتونیت فعال‌شده و گرانول‌شده به‌دلیل خواص رئولوژیک و تورمی طبیعی
            خود، یکی از بهترین گزینه‌ها برای تثبیت و بهبود شرایط دفن کابل
            به‌شمار می‌رود.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            مزایای بنتونیت تولیدی ما در کابل‌کشی
          </h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>
              <span className="font-semibold">
                ایجاد بستر یکنواخت اطراف کابل:
              </span>{" "}
              بنتونیت پس از آبدار شدن، فضاهای خالی اطراف کابل را پر کرده و یک
              محیط همگن و محافظ تشکیل می‌دهد.
            </li>
            <li>
              <span className="font-semibold">
                افزایش انتقال حرارت و کاهش دمای کابل:
              </span>{" "}
              به‌دلیل رطوبت‌پذیری و هدایت حرارتی مناسب، گرمای کابل سریع‌تر دفع
              شده و عمر آن افزایش می‌یابد.
            </li>
            <li>
              <span className="font-semibold">
                جلوگیری از نشست خاک و محافظت مکانیکی:
              </span>{" "}
              خاصیت تورمی بنتونیت باعث کاهش خطر فشار نقطه‌ای و آسیب فیزیکی به
              کابل‌ها می‌شود.
            </li>
            <li>
              <span className="font-semibold">
                جلوگیری از نفوذ ریشه گیاهان:
              </span>{" "}
              ساختار ژلی بنتونیت مانع نفوذ ریشه و سایر عوامل آسیب‌زننده به مسیر
              کابل می‌شود.
            </li>
            <li>
              <span className="font-semibold">
                پایدارسازی دیواره کانال و مجاری:
              </span>{" "}
              در عملیات حفاری، بنتونیت از ریزش دیواره‌ها جلوگیری کرده و کار را
              ایمن‌تر می‌کند.
            </li>
            <li>
              <span className="font-semibold">
                مناسب برای دوغاب‌زنی و تزریق:
              </span>{" "}
              بنتونیت با قابلیت تولید دوغاب‌های پایدار، برای تزریق در کانال‌ها،
              لوله‌ها، تونل‌ها و مجاری خاکی بسیار مناسب است.
            </li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            کاربردهای تخصصی بنتونیت در صنعت برق و حفاری
          </h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>بک‌فیل استاندارد اطراف کابل‌های فشارقوی</li>
            <li>دوغاب بنتونیت برای تزریق در کانال‌ها و فضای خالی اطراف مسیر</li>
            <li>پرکننده و پایدارکننده در عملیات حفاری صنعتی</li>
            <li>کنترل رطوبت و بهبود هدایت حرارتی خاک مسیر</li>
            <li>جلوگیری از خشک شدن و ترک خوردن خاک دفنی</li>
            <li>
              افزایش ضریب اطمینان مسیرهای دفنی در پروژه‌های طولانی و زیرساختی
            </li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            ویژگی‌های فنی بنتونیت مناسب کابل‌کشی
          </h2>
          <p>
            بنتونیت‌های ما با نظارت آزمایشگاهی دقیق و مناسب برای پروژه‌های
            زیرساختی تولید می‌شوند:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>تورم بالا و تشکیل ژل پایدار</li>
            <li>دانه‌بندی یکنواخت مناسب دوغاب‌سازی یا بک‌فیل</li>
            <li>میزان خاکستر و ناخالصی کنترل‌شده</li>
            <li>هدایت حرارتی بهینه برای کاربردهای الکتریکی</li>
            <li>قابلیت اختلاط سریع و شکل‌گیری توده همگن</li>
            <li>سازگار با استانداردهای صنعت برق و پروژه‌های EPC</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            راهکاری اقتصادی و قابل اعتماد برای کابل‌کشی صنعتی
          </h2>
          <p>
            استفاده از بنتونیت تخصصی شرکت ما، علاوه بر بهبود ایمنی و کارایی
            سیستم کابل‌کشی، باعث افزایش عمر کابل‌ها، کاهش گرمایش مسیر و پایداری
            طولانی‌مدت خاک می‌شود. این ویژگی‌ها باعث شده محصولات ما در
            پروژه‌های بزرگ ملی، پیمانکاران خطوط انتقال، نیروگاه‌ها و صنایع
            حفاری کاربرد گسترده داشته باشد.
          </p>
        </section>

        {/* دکمه بازگشت پایین */}
        <div className="mt-10 flex justify-start">
          <Link
            href="/#applications"
            className="inline-block px-5 py-2 rounded-xl bg-pink-700/20 border border-pink-400/60 text-white text-sm md:text-base transition-all hover:bg-pink-700/35 hover:border-pink-200 backdrop-blur-sm"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت
          </Link>
        </div>
      </article>
    </div>
  );
}
