"use client";

import Image from "next/image";
import Link from "next/link";

export default function SubstationGroundingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <article
        className="bg-black/40 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl"
        dir="rtl"
      >
        {/* دکمه بازگشت بالا – سمت راست، مثل بقیه صفحات */}
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

        {/* تیتر اصلی */}
        <header className="text-center mb-8 md:mb-10">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            پست‌های انتقال و توزیع – بک‌فیل تخصصی و کنترل گام‌ولتاژ
          </h1>

          <div
            className="mt-3 text-xs md:text-sm text-white/70"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ایمنی شبکه، از زیرِ زمین شروع می‌شود
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-200 border border-emerald-400/50">
              کاربردهای صنعت برق
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-200 border border-sky-400/50">
              پست‌های انتقال و توزیع
            </span>
          </div>
        </header>

        {/* متن اصلی */}
        <section
          className="space-y-4 text-base md:text-lg leading-8 text-white/85 text-justify mb-10"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          <p>
            در پست‌های انتقال و توزیع، فقط تجهیزات روی سطح زمین مهم نیستند؛
            آن‌چه زیرِ خاک اجرا می‌شود، نقش اصلی را در ایمنی شبکه، کنترل
            گام‌ولتاژ و حفاظت در برابر صاعقه و جریان‌های نشتی ایفا می‌کند.
            استفاده از خاک کاهنده، ژل‌های ویژه و بک‌فیل مهندسی‌شده، مسیر
            عبور جریان را ایمن، پایدار و قابل‌اعتماد می‌کند.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-4 mb-2">
            چرا بک‌فیل مناسب در پست‌های برق ضروری است؟
          </h2>
          <p>
            مقاومت ویژه خاک در اطراف الکترودها و شبکه ارت، مستقیماً بر عملکرد
            سیستم حفاظت تأثیر می‌گذارد. با استفاده از بک‌فیل و خاک کاهنده
            استاندارد می‌توان:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>مقاومت ارت را به مقادیر طراحی‌شده نزدیک و پایدار نگه داشت.</li>
            <li>گام‌ولتاژ و تماس‌ولتاژ را برای افراد حاضر در پست ایمن کرد.</li>
            <li>مسیر تخلیه جریان صاعقه را کنترل‌شده و کم‌مقاومت ساخت.</li>
            <li>خطر آسیب به تجهیزات حساس قدرت و کنترل را کاهش داد.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            اجزای اصلی سیستم ارت در پست‌های انتقال و توزیع
          </h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>شبکه مش ارت مسی یا گالوانیزه در سطح وسیع محوطه پست</li>
            <li>الکترودهای عمقی در نقاط کلیدی با خاک مقاوم‌تر</li>
            <li>بک‌فیل بنتونیتی یا خاک کاهنده در اطراف الکترودها و مش</li>
            <li>اتصالات مکانیکی و جوشی استاندارد برای اطمینان از پیوستگی مسیر</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            نقش بنتونیت و خاک کاهنده در کنترل گام‌ولتاژ
          </h2>
          <p>
            بنتونیت فعال‌شده و خاک‌های کاهنده مخصوص پست‌ها، با جذب و حفظ
            رطوبت، مقاومت ویژه خاک را به‌شکل محسوسی کاهش می‌دهند. نتیجه:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>پخش یکنواخت‌تر جریان در شبکه ارت</li>
            <li>کاهش اختلاف پتانسیل بین نقاط مختلف سطح زمین</li>
            <li>بهبود عملکرد سیستم صاعقه‌گیر و حفاظت تجهیزات قدرت</li>
            <li>پایداری عملکرد ارت حتی در دوره‌های خشک‌سالی و تغییرات فصلی</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            مراحل اجرای اصولی بک‌فیل در پست‌های برق
          </h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>طراحی شبکه ارت متناسب با سطح ولتاژ و شرایط محوطه پست</li>
            <li>حفاری، آماده‌سازی بستر و کنترل تراکم خاک طبیعی</li>
            <li>نصب مش ارت و الکترودها طبق نقشه اجرایی</li>
            <li>استفاده از بنتونیت یا خاک کاهنده در اطراف هادی‌ها و الکترودها</li>
            <li>پوشش نهایی، تست مقاومت ارت و ثبت نتایج برای مستندسازی</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            کاربردها در پروژه‌های شما
          </h2>
          <p>
            بک‌فیل و خاک کاهنده تخصصی مورد استفاده ما، در انواع پروژه‌ها
            به‌کار می‌رود:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>پست‌های انتقال و فوق‌توزیع در سطوح ولتاژ مختلف</li>
            <li>پست‌های اختصاصی صنایع بزرگ، کارخانجات و شهرک‌های صنعتی</li>
            <li>پست‌های داخلی نیروگاه‌ها، مراکز داده و تأسیسات حساس</li>
            <li>پروژه‌های بهسازی و ارتقای ارت پست‌های قدیمی</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            جمع‌بندی
          </h2>
          <p>
            انتخاب بک‌فیل مناسب و اجرای اصولی شبکه ارت در پست‌های انتقال و
            توزیع، فقط یک گزینه فنی نیست؛ یک ضرورت ایمنی و بهره‌برداری است.
            ما با ارائه مواد کاهنده استاندارد، تجربه اجرایی و مشاوره فنی،
            کنار شما هستیم تا پست‌های برق با حداکثر ایمنی و پایداری کار کنند.
          </p>
        </section>

        {/* گالری تصاویر پست‌ها */}
        <section className="mb-10">
          <h2
            className="text-lg md:text-xl font-bold mb-4 text-right text-white"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            نگاهی به اجرای بک‌فیل و ارت پست‌های انتقال و توزیع
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {/* ردیف بالا */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/applications/substation-1.jpg"
                alt="مش ارت و بک‌فیل در محوطه پست"
                width={900}
                height={600}
                className="rounded-xl object-cover"
              />
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/applications/substation-2.jpg"
                alt="اجرای خاک کاهنده اطراف الکترود ارت"
                width={900}
                height={600}
                className="rounded-xl object-cover"
              />
            </div>

            {/* ردیف پایین */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/applications/substation-3.jpg"
                alt="الکترود ارت در محوطه پست با بک‌فیل مناسب"
                width={900}
                height={600}
                className="rounded-xl object-cover"
              />
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/applications/substation-4.jpg"
                alt="شبکه مش ارت و خاک کاهنده در پست انتقال"
                width={900}
                height={600}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* دکمه بازگشت پایین */}
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
