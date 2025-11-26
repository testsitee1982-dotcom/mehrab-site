// app/articles/cec-moisture-specs-and-standards/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function CecMoistureSpecsArticlePage() {
  // استایل مشترک دکمه بازگشت
  const backButtonClass =
    "inline-flex items-center px-5 py-2 rounded-xl text-sm " +
    "border border-pink-400/60 bg-gradient-to-r from-pink-500/10 to-pink-400/10 " +
    "text-pink-200 shadow-md shadow-pink-900/30 backdrop-blur-sm " +
    "transition-all duration-300 " +
    "hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-pink-400/20 " +
    "hover:text-pink-100 hover:shadow-lg hover:shadow-pink-800/40";

  return (
    <div
      className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16"
      dir="rtl"
    >
      <article className="bg-black/40 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl">
        {/* دکمه بازگشت – بالای مقاله و داخل کارت */}
        <div className="w-full flex justify-start mb-6">
          <Link
            href="/#blog"
            className={backButtonClass}
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت به مقالات
          </Link>
        </div>

        {/* تیتر اصلی */}
        <header className="text-center mb-8 md:mb-10">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            CEC، رطوبت و اندازهٔ ذره: چگونه مشخصات فنی خاک را تفسیر کنیم؟
          </h1>

          <div className="mt-3 text-xs md:text-sm text-white/60">
            ۱۴۰۳/۰۸/۲۵
          </div>

          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-white/70">
            <span>دسته‌بندی:</span>
            <span className="text-amber-300">مشخصات فنی خاک و بنتونیت</span>
          </div>
        </header>

        {/* محتوای مقاله */}
        <div
          className="space-y-8 text-base md:text-lg leading-8 text-white/85 text-justify"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          {/* --- چکیده --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              چکیده
            </h2>
            <p>
              پارامترهای خاک از جمله ظرفیت تبادل کاتیونی (CEC)، رطوبت و توزیع
              اندازهٔ ذرات، سه شاخص کلیدی در تحلیل عملکرد فیزیکی–شیمیایی خاک
              هستند. این پارامترها نه تنها رفتار خاک را در کشاورزی (حاصلخیزی،
              نگهداشت آب، تغذیه گیاه) تعیین می‌کنند، بلکه در ژئوتکنیک، محیط‌زیست
              و آبشناسی نیز نقش بنیادین دارند. این مقاله با رویکردی
              میان‌رشته‌ای، مکانیسم‌ها، روش‌های اندازه‌گیری، روابط کمی و
              دستورالعمل تحلیل هم‌زمان این سه شاخص را معرفی می‌کند.
            </p>
          </section>

          {/* شکل ۱ */}
          <figure className="mt-2">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
              <Image
                src="/images/articles/cec-moisture-1.jpg"
                alt="نمونه‌های خاک با اندازه‌ذره و رطوبت متفاوت در کنار برگه مشخصات CEC"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
                priority
              />
            </div>
            <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
              شکل ۱ – نمونه‌های خاک و برگه‌ی مشخصات آزمایشگاهی شامل CEC، رطوبت و
              توزیع اندازهٔ ذره
            </figcaption>
          </figure>

          {/* --- فصل ۱: CEC --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              فصل ۱. ظرفیت تبادل کاتیونی (CEC)
            </h2>

            <h3 className="font-bold mb-2">۱–۱. اهمیت و نقش بنیادی CEC</h3>
            <p>
              CEC تعیین‌کنندهٔ توان بافرینگ خاک در برابر اسیدی شدن، قابلیت
              نگهداشت مواد غذایی مانند NH₄⁺، Ca²⁺، Mg²⁺ و K⁺، رفتار شیمیایی و
              واکنش‌پذیری خاک، قابلیت تثبیت آلاینده‌ها و فلزات سنگین و همچنین
              احتمال سدیمی شدن خاک است. CEC بالاتر یعنی خاک فعال‌تر و
              واکنش‌پذیرتر؛ اما این موضوع همیشه مطلوب نیست، به‌ویژه در خاک‌های
              سدیمی یا رسیِ بسیار تورم‌پذیر.
            </p>

            <h3 className="font-bold mt-4 mb-2">۱–۲. پایه‌های علمی CEC</h3>
            <p>
              CEC از دو منبع اصلی ناشی می‌شود: بارهای دائمی ناشی از جانشینی
              ایزومرفیک در شبکه کریستالی کانی‌های رسی و بارهای وابسته به pH که
              به گروه‌های عاملی مادهٔ آلی و لبه‌های کریستال رس مربوط‌اند. با
              افزایش pH، بار منفی سطحی و در نتیجه CEC مواد آلی افزایش می‌یابد.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۱–۳. دامنه‌ها و مقایسهٔ کانی‌های رسی
            </h3>
            <p>نمونه‌ای از دامنهٔ CEC برای کانی‌های مختلف رسی:</p>
            <ul className="list-disc pr-6 space-y-1">
              <li>کائولینیت: حدود ۳ تا ۱۵ cmol(+)/kg – پایداری بالا، فعالیت کم</li>
              <li>ایلیت: حدود ۱۰ تا ۴۰ – CEC متوسط، نگهداشت K⁺ زیاد</li>
              <li>اسمکتیت: حدود ۸۰ تا ۱۵۰ – تورم‌پذیری بالا و CEC بسیار زیاد</li>
              <li>ورمیکولیت: حدود ۱۲۰ تا ۱۸۰ – بسیار فعال و مناسب برای اصلاح خاک</li>
            </ul>

            <h3 className="font-bold mt-4 mb-2">۱–۴. عوامل مؤثر بر CEC</h3>
            <ul className="list-disc pr-6 space-y-1">
              <li>بافت خاک: هرچه درصد رس بیشتر، CEC بالاتر</li>
              <li>مادهٔ آلی: هر ۱٪ OM حدوداً ۱٫۵ تا ۲ cmol/kg به CEC می‌افزاید</li>
              <li>pH: افزایش pH → افزایش بار منفی و CEC در مواد آلی</li>
              <li>نوع کانی: نوع رس مهم‌تر از صرفاً مقدار رس است</li>
            </ul>

            <h3 className="font-bold mt-4 mb-2">۱–۵. تفسیر کاربردی CEC</h3>
            <p>
              خاک‌های با CEC کمتر از ۵ معمولاً کم‌حاصلخیز و با ظرفیت پایین جذب
              آلاینده‌اند، در محدوده ۵ تا ۱۵ برای بسیاری از محصولات مناسب و از
              نظر ژئوتکنیکی رفتاری قابل پیش‌بینی دارند. CEC بالاتر از ۳۰ معمولاً
              نشان‌دهندهٔ خاک‌های بسیار رسی و فعال با پتانسیل تورم بالا و توان
              زیاد در جذب آلاینده‌هاست.
            </p>
          </section>

          {/* شکل ۲ */}
          <figure className="mt-2">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
              <Image
                src="/images/articles/cec-moisture-2.jpg"
                alt="مقطع خاک با تأکید گرافیکی روی CEC، رطوبت و اندازه ذره"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
            <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
              شکل ۲ – نمایش مفهومی ارتباط بین CEC، رطوبت و اندازهٔ ذره در عمق
              خاک
            </figcaption>
          </figure>

          {/* --- فصل ۲: رطوبت --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              فصل ۲. رطوبت خاک
            </h2>

            <h3 className="font-bold mb-2">۲–۱. اهمیت رطوبت</h3>
            <p>
              رطوبت خاک کنترل‌کنندهٔ دسترسی آب به گیاه، رفتار مکانیکی خاک
              (چسبندگی، تورم، تراکم), سرعت نفوذ و ظرفیت زهکشی و همچنین پایداری
              شیب‌ها است. در ژئوتکنیک، تغییرات کوچک رطوبت می‌تواند مقاومت برشی
              خاک‌های رسی را به‌طور چشمگیری تغییر دهد.
            </p>

            <h3 className="font-bold mt-4 mb-2">۲–۲. انواع رطوبت در گزارش‌ها</h3>
            <ul className="list-disc pr-6 space-y-1">
              <li>
                <strong>رطوبت وزنی</strong> – پایهٔ بسیاری از استانداردهای ASTM:
                نسبت اختلاف وزن مرطوب و خشک به وزن خشک در درصد.
              </li>
              <li>
                <strong>رطوبت حجمی</strong> – برای مدل‌سازی‌های هیدرولوژیک، از
                رابطه بین رطوبت وزنی و چگالی ظاهری محاسبه می‌شود.
              </li>
              <li>
                نقاط کلیدی مانند ظرفیت زراعی (FC)، نقطه پژمردگی دائم (PWP) و
                حالت اشباع که در تفسیر رفتار آبی خاک حیاتی‌اند.
              </li>
            </ul>

            <h3 className="font-bold mt-4 mb-2">
              ۲–۳. ارتباط رطوبت با نوع خاک
            </h3>
            <p>
              خاک‌های شنی ظرفیت نگهداشت آب بسیار کمی دارند و سریع خشک می‌شوند؛
              در مقابل، خاک‌های رسی آب زیادی نگه می‌دارند اما خطر غرقابی و کاهش
              تهویه در آن‌ها بالاست. خاک‌های سیلتی و لوم بین این دو رفتار
              می‌کنند.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۲–۴. اثر رطوبت بر رفتار ژئوتکنیکی
            </h3>
            <p>
              در رطوبت‌های نزدیک حد خمیری، خاک رسی می‌تواند تورم و نشست قابل
              توجهی نشان دهد. رطوبت کمتر از رطوبت بهینهٔ تراکم (OPT) باعث تراکم
              ناکافی و رطوبت بالاتر از آن باعث کاهش دانسیته خشک و CBR می‌شود.
            </p>
          </section>

          {/* --- فصل ۳: اندازهٔ ذره و بافت --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              فصل ۳. اندازهٔ ذره و بافت خاک
            </h2>

            <h3 className="font-bold mb-2">۳–۱. محدوده‌های اندازه‌ای</h3>
            <p>
              بر اساس طبقه‌بندی USDA، اندازهٔ شن بین ۲ تا ۰٫۰۵ میلی‌متر، سیلت بین
              ۰٫۰۵ تا ۰٫۰۰۲ میلی‌متر و رس کمتر از ۰٫۰۰۲ میلی‌متر است. درصد نسبی
              این سه جزء، بافت خاک را تعیین می‌کند.
            </p>

            <h3 className="font-bold mt-4 mb-2">۳–۲. روش‌های اندازه‌گیری</h3>
            <ul className="list-disc pr-6 space-y-1">
              <li>غربال‌کردن برای بخش‌های شنی</li>
              <li>آزمایش هیدرومتری ASTM D422 برای رس و سیلت</li>
              <li>روش‌های پیشرفته‌تر مانند لیزر دیفراکشن برای کاربردهای پژوهشی</li>
            </ul>

            <h3 className="font-bold mt-4 mb-2">۳–۳. پیامدهای بافت</h3>
            <p>
              بافت خاک، نفوذپذیری، CEC، چگالی ظاهری، تورم‌پذیری و ظرفیت نگهداشت
              آب را به‌طور هم‌زمان تحت تأثیر قرار می‌دهد. مثلاً خاک‌های لوم رسی
              معمولاً تعادل خوبی بین نگهداشت آب و زهکشی دارند، در حالی که خاک‌های
              رسی خالص نفوذپذیری بسیار پایینی دارند.
            </p>
          </section>

          {/* شکل ۳ */}
          <figure className="mt-2">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
              <Image
                src="/images/articles/cec-moisture-3.jpg"
                alt="پتری‌دیش‌های حاوی خاک با درصدهای مختلف شن، سیلت و رس همراه با برچسب CEC و رطوبت"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
            <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
              شکل ۳ – ترکیب شن، سیلت و رس و ارتباط آن با CEC و رطوبت
            </figcaption>
          </figure>

          {/* --- فصل ۴: روابط بین سه شاخص --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              فصل ۴. روابط بین CEC، رطوبت و اندازهٔ ذره
            </h2>
            <p>
              این سه شاخص باید هم‌زمان تفسیر شوند؛ زیرا افزایش درصد رس معمولاً
              منجر به افزایش CEC و ظرفیت نگهداشت آب می‌شود، در حالی که نفوذپذیری
              کاهش می‌یابد. خاک‌های با CEC بالا و رطوبت زیاد، برای کشاورزی
              حاصلخیز اما از نظر ژئوتکنیکی حساس به تورم و نشست هستند.
            </p>
            <p>
              از دید کمی، CEC تابعی از درصد رس، نوع کانی و ماده‌ی آلی است و
              نفوذپذیری تقریباً با مربع اندازهٔ ذرات تناسب دارد؛ هرچه ذرات ریزتر،
              نفوذپذیری کمتر و آب مدت طولانی‌تری در خاک باقی می‌ماند.
            </p>
          </section>

          {/* --- فصل ۵، ۶، ۷ و منابع؛ خلاصه‌شده --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              فصل ۵. تفسیر گام‌به‌گام گزارش خاک
            </h2>
            <p>
              برای تحلیل حرفه‌ای یک گزارش خاک، ابتدا بافت را تعیین می‌کنیم، سپس
              CEC را از نظر دامنه و تعادل کاتیونی (به‌خصوص سدیم) بررسی می‌کنیم،
              در ادامه رطوبت لحظه‌ای را نسبت به FC و PWP تفسیر کرده و در نهایت
              نتیجه‌ای یکپارچه برای کشاورزی، ژئوتکنیک و محیط‌زیست ارائه می‌دهیم.
            </p>
          </section>

          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              فصل ۶. نمونه تحلیل واقعی
            </h2>
            <p>
              به‌عنوان مثال، خاکی با ۴۵٪ رس، CEC برابر ۳۸، رطوبت ۳۲٪ و مادهٔ آلی
              حدود ۳٪، خاکی بسیار فعال و رسی با نفوذپذیری پایین است؛ از نظر
              کشاورزی حاصلخیز اما نیازمند مدیریت دقیق، و از نظر ژئوتکنیکی برای
              سازه‌ها پرریسک و نیازمند اصلاح است، در حالی که برای کاربردهای
              محیط‌زیستی (مانند سدهای باطله یا لاینرها) می‌تواند گزینه‌ی مناسبی
              برای جذب آلاینده‌ها باشد.
            </p>
          </section>

          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              فصل ۷. کاربردهای تخصصی
            </h2>
            <p>
              در کشاورزی، CEC مبنای طراحی برنامه‌های کوددهی است؛ در ژئوتکنیک، از
              همین پارامترها برای پیش‌بینی تورم، تراکم و نشست استفاده می‌شود؛ و
              در محیط‌زیست، مدل‌سازی انتقال آلاینده‌ها و طراحی سدهای خاکی و
              لاینرها بر اساس آن‌ها انجام می‌گیرد.
            </p>
          </section>

          {/* --- منابع --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              مراجع علمی منتخب
            </h2>
            <ol className="list-decimal pr-6 space-y-1">
              <li>Brady &amp; Weil, The Nature and Properties of Soils.</li>
              <li>Hillel, Environmental Soil Physics.</li>
              <li>Mitchell &amp; Soga, Fundamentals of Soil Behavior.</li>
              <li>Sparks, Environmental Soil Chemistry.</li>
              <li>استانداردهای ASTM D422, D4318, D2487.</li>
              <li>USDA NRCS, Soil Survey Manual.</li>
              <li>FAO, Soil Atlas: Soil Functions and Properties.</li>
            </ol>
          </section>
        </div>

        {/* دکمه بازگشت – پایین مقاله */}
        <div className="w-full flex justify-start mt-8">
          <Link
            href="/#blog"
            className={backButtonClass}
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت به مقالات
          </Link>
        </div>
      </article>
    </div>
  );
}
