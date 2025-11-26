"use client";

import Image from "next/image";
import Link from "next/link";

export default function GroundingSystemsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <article
        className="bg-black/40 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl"
        dir="rtl"
      >
        {/* دکمه بازگشت – مثل بقیه صفحات، سمت راست و بالای کارت */}
        <div className="mb-6 flex justify-start">
          <Link
            href="/#applications"
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

        {/* تیتر اصلی و متادیتا */}
        <header className="text-center mb-8 md:mb-10">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            سیستم‌های ارتینگ و صاعقه‌گیر
            <span className="block text-lg md:text-xl mt-2">
              تضمین ایمنی تجهیزات و کاهش مقاومت ویژه خاک
            </span>
          </h1>

          {/* اگر تاریخ نمی‌خواهی، می‌توانی این div را حذف کنی */}
          <div
            className="mt-3 text-xs md:text-sm text-white/70"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ۱۴۰۳/۰۸/۲۹
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-200 border border-emerald-400/50">
              سیستم‌های ارتینگ و صاعقه‌گیر
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-200 border border-sky-400/50">
              کاربردهای صنعت برق
            </span>
          </div>
        </header>

        {/* متن اصلی */}
        <section
          className="space-y-4 text-base md:text-lg leading-8 text-white/85 text-justify mb-10"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          <p>
            در هر پروژه‌ی صنعتی، ساختمانی، مخابراتی یا نیروگاهی، سیستم ارتینگ
            (Earth Grounding) یکی از حیاتی‌ترین بخش‌های ایمنی محسوب می‌شود. هدف
            این سیستم ایجاد یک مسیر کم‌مقاومت برای هدایت جریان‌های نشتی، القایی
            و صاعقه به عمق زمین است؛ مسیری که از تخریب تجهیزات، خطرات جانی،
            افزایش نویزهای شبکه و آسیب‌های ناشی از اضافه‌ولتاژها جلوگیری کند.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-4 mb-2">
            اهمیت اجرای صحیح سیستم ارت
          </h2>
          <p>
            سیستم ارت و صاعقه‌گیر تنها زمانی عملکرد واقعی خود را نشان می‌دهد که:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>مقاومت ویژه خاک به مقدار استاندارد کاهش یافته باشد.</li>
            <li>الکترودها به‌درستی نصب و اتصال یکنواخت داشته باشند.</li>
            <li>از مواد کاهنده مناسب مانند بنتونیت استاندارد استفاده شود.</li>
            <li>تست‌های دوره‌ای ارت انجام گردد.</li>
          </ul>
          <p>
            کیفیت اجرای این بخش، به‌طور مستقیم بر ایمنی کل مجموعه تأثیر می‌گذارد.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            انواع روش‌های اجرای سیستم ارت
          </h2>

          <h3 className="text-base md:text-lg font-semibold mt-4 mb-1">
            ۱. چاه ارت عمقی (Deep Earth Pit)
          </h3>
          <p>
            این روش مناسب پروژه‌هایی است که فضای کافی دارند و نیاز به مقاومت
            بسیار کم است:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>حفاری چاه با عمق مشخص طبق طراحی.</li>
            <li>دفن الکترود مسی یا صفحه مسی در عمق مناسب.</li>
            <li>پر کردن اطراف الکترود با بنتونیت سوپر اکتیو یا مواد کاهنده ویژه.</li>
            <li>برقراری اتصال ارت با تسمه یا کابل مسی استاندارد.</li>
          </ul>
          <p className="mt-1">
            <span className="font-semibold">ویژگی‌ها:</span> توانایی رسیدن به
            مقاومت بسیار پایین، مناسب پروژه‌های حساس مثل نیروگاه‌ها، پست‌های
            برق و دیتاسنترها، با پایداری طولانی‌مدت عملکرد ارت.
          </p>

          <h3 className="text-base md:text-lg font-semibold mt-4 mb-1">
            ۲. مش ارت (Grid Earthing)
          </h3>
          <p>
            این روش برای محیط‌های وسیع مانند پست‌های برق، پالایشگاه‌ها و
            کارخانجات بزرگ استفاده می‌شود.
          </p>
          <p>
            در این روش شبکه‌ای از تسمه‌ها یا سیم‌های مسی در سطح گسترده زمین اجرا
            می‌شود.
          </p>
          <p className="mt-1">
            <span className="font-semibold">مزایا:</span> توزیع یکنواخت جریان در
            سطح وسیع، کاهش اختلاف پتانسیل و دستیابی به مقاومت ارت پایدار در طول
            زمان.
          </p>

          <h3 className="text-base md:text-lg font-semibold mt-4 mb-1">
            ۳. الکترودهای عمقی (Deep Rod Electrode)
          </h3>
          <p>
            زمانی که خاک سطحی مقاومت زیادی دارد، از الکترودهای عمقی استفاده
            می‌شود. الکترودهای مسی یا گالوانیزه در اعماق بیشتر، جایی که خاک
            مرطوب‌تر است، نصب می‌گردند.
          </p>
          <p className="mt-1">
            <span className="font-semibold">مزایا:</span> نصب سریع‌تر و اقتصادی،
            عملکرد بسیار خوب در خاک‌های خشک و نگهداری آسان.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            نقش بنتونیت و مواد کاهنده در کاهش مقاومت خاک
          </h2>
          <p>
            بنتونیت فعال‌شده (Activated Bentonite) یکی از مؤثرترین مواد برای
            کاهش مقاومت ویژه خاک است. استفاده از بنتونیت استاندارد و خالص
            می‌تواند مقاومت ارت را تا چندین برابر کاهش دهد و عملکرد سیستم
            صاعقه‌گیر را به‌طور چشمگیری بهبود بخشد.
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>جذب رطوبت بالا و نگهداری طولانی آن.</li>
            <li>کاهش قابل‌توجه مقاومت ویژه خاک.</li>
            <li>سازگاری با فلزات و الکترودها و کاهش خوردگی.</li>
            <li>پایداری عملکرد در شرایط خشک و مرطوب.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            کاربردها در صنعت برق
          </h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>ارت تجهیزات پست و تابلوهای برق.</li>
            <li>حفاظت از سیستم‌های مخابراتی و شبکه.</li>
            <li>حفاظت از برج‌ها و ساختمان‌های بلند و دکل‌ها.</li>
            <li>سیستم‌های روشنایی معابر و فضاهای باز.</li>
            <li>ایمنی تأسیسات حساس مانند UPS، مراکز داده و بیمارستان‌ها.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">جمع‌بندی</h2>
          <p>
            اجرای دقیق و اصولی سیستم‌های ارتینگ و صاعقه‌گیر، همراه با استفاده از
            بنتونیت استاندارد، ضامن ایمنی، پایداری تجهیزات، کاهش خطر صاعقه و
            ارتقای کیفیت شبکه برق است.
          </p>
        </section>

        {/* گالری تصاویر – ۴ تصویر مربوط به ارتینگ */}
        <section className="mb-10">
          <h2
            className="text-lg md:text-xl font-bold mb-4 text-right text-white"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            نگاهی به اجرای سیستم‌های ارتینگ در پروژه‌های مختلف
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {/* تصویر ۱ */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/applications/grounding-1.jpg"
                alt="اجرای سیستم ارت با بنتونیت"
                fill
                className="object-cover"
              />
            </div>

            {/* تصویر ۲ */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/applications/grounding-2.jpg"
                alt="اطراف الکترود پر شده با مواد کاهنده"
                fill
                className="object-cover"
              />
            </div>

            {/* تصویر ۳ */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/applications/grounding-3.jpg"
                alt="نصب الکترود و اتصالات در سیستم ارت"
                fill
                className="object-cover"
              />
            </div>

            {/* تصویر ۴ */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/applications/grounding-4.jpg"
                alt="اجرای شبکه ارت و استفاده از بنتونیت"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* دکمه بازگشت پایین صفحه */}
        <div className="mt-10 flex justify-start">
          <Link
            href="/#applications"
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
