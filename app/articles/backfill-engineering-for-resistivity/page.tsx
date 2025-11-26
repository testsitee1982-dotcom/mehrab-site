// app/articles/backfill-engineering-for-resistivity/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function BackfillEngineeringArticlePage() {
  // یک کلاس مشترک برای استایل دکمه برگشت
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
        {/* دکمه برگشت – بالای مقاله و سمت راست کارت */}
        <div className="w-full flex justify-start mb-6">
          <Link
            href="/#blog"
            className={backButtonClass}
            style={{ fontFamily: "BNazanin" }}
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
            مهندسی بک‌فیل: رسیدن به مقاومت ویژه‌ی پایین با بنتونیت
          </h1>

          <div className="mt-3 text-xs md:text-sm text-white/60">
            ۱۴۰۳/۰۸/۲۵
          </div>

          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-white/70">
            <span>دسته‌بندی:</span>
            <span className="text-amber-300">ارتینگ و مواد بک‌فیل</span>
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
              یکی از چالش‌های اصلی در طراحی سیستم‌های ارت، دستیابی به مقاومت
              ویژه‌ی پایین در خاک و پایداری این مقاومت در طول عمر بهره‌برداری
              است. در بسیاری از پروژه‌ها، خواص طبیعی خاک پاسخ‌گوی الزامات ایمنی
              و عملکردی نیست و مهندسی «بک‌فیل» به‌عنوان راه‌حل مطرح می‌شود.
              بنتونیت – یک رس سدیمی از خانواده مونت‌موریلونیت – به‌دلیل ظرفیت
              بالای جذب و نگهداشت رطوبت، تورم حجمی و مقاومت ویژه‌ی بسیار پایین
              در حالت اشباع، به‌طور گسترده به‌عنوان ماده‌ی بک‌فیل اطراف
              الکترودهای زمین استفاده می‌شود.
            </p>
            <p className="mt-3">
              در این مقاله، ابتدا اصول مهندسی ارت و نقش مقاومت ویژه‌ی خاک مرور
              می‌شود، سپس خواص فیزیکی و الکتریکی بنتونیت، مکانیزم‌های کاهش
              مقاومت زمین، اصول طراحی لایه‌ی بک‌فیل، جزئیات اجرایی (حفر چاه،
              اختلاط بنتونیت با آب، ضخامت پوشش، تراکم) و در نهایت توصیه‌های
              کاربردی و محدودیت‌ها ارائه می‌گردد.
            </p>
          </section>

          {/* شکل ۱ – مقطع خاک، بنتونیت و دوغاب */}
          <figure className="mt-2">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
              <Image
                src="/images/articles/backfill-bentonite-1.jpg"
                alt="نمای مقطعی از خاک، لایه پودر بنتونیت و دوغاب بنتونیت در اطراف میله ارت"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
                priority
              />
            </div>
            <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
              شکل ۱ – قرارگیری میله ارت در لایه پودر و دوغاب بنتونیت برای کاهش
              مقاومت ویژه اطراف الکترود
            </figcaption>
          </figure>

          {/* --- 1. مقدمه --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۱. مقدمه: چرا مهندسی بک‌فیل مهم است؟
            </h2>
            <p>
              هدف اصلی سیستم ارت، ایجاد مسیری با امپدانس پایین برای عبور
              جریان‌های خطا، صاعقه و اضافه‌ولتاژها به زمین است تا از تجهیزات و
              افراد در برابر ولتاژهای گام و تماس محافظت شود. استانداردهایی نظیر
              IEEE Std 80 و IEEE Std 81 بر اندازه‌گیری مقاومت ویژه‌ی خاک و طراحی
              شبکه‌ی ارت بر این اساس تأکید دارند.
            </p>
            <p className="mt-2">در عمل با مشکلات زیر مواجه می‌شویم:</p>
            <ul className="list-disc pr-6 space-y-1">
              <li>مقاومت ویژه‌ی بالای خاک (خاک‌های سنگلاخی، خشک یا شنی)</li>
              <li>
                محدودیت فضا برای توسعه‌ی شبکه‌ی ارت (پست‌های داخل شهر یا داخل
                ساختمان)
              </li>
              <li>تغییرات فصلی شدید رطوبت خاک و ناپایداری مقاومت زمین</li>
            </ul>
            <p className="mt-2">
              در چنین شرایطی، مهندسی بک‌فیل اطراف الکترودها راهکاری کلیدی است؛
              یعنی اصلاح یا جایگزینی خاک اطراف الکترود با موادی که مقاومت ویژه‌ی
              پایین‌تر و پایدارتری دارند. بنتونیت یکی از متداول‌ترین این مواد
              است.
            </p>
          </section>

          {/* --- 2. بنتونیت چیست --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۲. بنتونیت چیست و چرا برای بک‌فیل مناسب است؟
            </h2>

            {/* شکل ۲ – معدن بنتونیت */}
            <figure className="mb-4">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                <Image
                  src="/images/articles/backfill-bentonite-2.jpg"
                  alt="نمایی از معدن و توده پودر بنتونیت"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 900px, 100vw"
                />
              </div>
              <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
                شکل ۲ – بنتونیت به‌عنوان یک رس طبیعی با قابلیت جذب رطوبت و تورم
                حجمی بالا
              </figcaption>
            </figure>

            <h3 className="font-bold mb-2">۲.۱. ترکیب و خواص عمومی</h3>
            <ul className="list-disc pr-6 space-y-1">
              <li>بنتونیت عمدتاً از مونت‌موریلونیت سدیمی تشکیل شده است.</li>
              <li>
                هنگام مخلوط شدن با آب، تا چندین برابر حجم اولیه‌ی خشک خود
                متورم شده و ساختاری ژل‌مانند ایجاد می‌کند.
              </li>
              <li>
                می‌تواند چندین برابر وزن خود آب جذب و برای مدت طولانی نگه‌داری
                کند؛ مانند یک «اسفنج رطوبتی» اطراف الکترود.
              </li>
            </ul>

            <h3 className="font-bold mt-4 mb-2">
              ۲.۲. مقاومت ویژه بنتونیت در مقایسه با خاک
            </h3>
            <p>
              دیتاشیت‌های صنعتی نشان می‌دهند که مقاومت ویژه‌ی بنتونیت نصب‌شده
              (در حالت نزدیک به اشباع) می‌تواند در حدود چند اهم‌متر باشد؛ در
              حالی که مقاومت ویژه‌ی بسیاری از خاک‌های طبیعی در محدوده‌ی ۵۰ تا
              چند صد اهم‌متر است. بنابراین قرار دادن لایه‌ی بنتونیت اطراف
              الکترود، محیطی با ρ پایین و پایدار ایجاد می‌کند که مقاومت کلی
              سیستم ارت را کاهش می‌دهد.
            </p>
          </section>

          {/* --- 3. مکانیزم‌های کاهش مقاومت --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۳. مکانیسم‌های کاهش مقاومت ویژه با بنتونیت
            </h2>

            <h3 className="font-bold mb-2">
              ۳.۱. افزایش سطح تماس مؤثر الکترود – خاک
            </h3>
            <p>
              وقتی الکترود میله‌ای یا تسمه‌ای در یک لایه‌ی استوانه‌ای از بنتونیت
              قرار می‌گیرد، جریان ابتدا در این پوسته‌ی کم‌مقاومت منتشر شده و سپس
              به خاک اطراف وارد می‌شود. این امر شعاع مؤثر الکترود را افزایش داده
              و مانند الکترودی با قطر بزرگ‌تر در خاک معمولی عمل می‌کند.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۳.۲. تأمین و نگه‌داشت رطوبت
            </h3>
            <p>
              ساختار رس متورم‌شونده‌ی بنتونیت، آب را در حفره‌های ریز خود نگه
              می‌دارد. در دوره‌های خشک، بنتونیت همچنان رطوبتی بالاتر از خاک
              اطراف دارد و در دوره‌های بارانی دوباره اشباع می‌شود؛ بنابراین
              نوسانات فصلی مقاومت کاهش می‌یابد.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۳.۳. ایجاد الکترولیت‌های یونی در حفره‌ها
            </h3>
            <p>
              آب موجود در ماتریس بنتونیت حاوی یون‌های سدیم و سایر یون‌هاست که
              هدایت الکتریکی را افزایش می‌دهند. آزمایش‌ها نشان داده‌اند افزودن
              بنتونیت به خاک‌های مختلف مقاومت ویژه‌ی مخلوط را نسبت به خاک خالص
              کاهش می‌دهد.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۳.۴. یکنواخت کردن محیط الکتریکی اطراف الکترود
            </h3>
            <p>
              در خاک‌های لایه‌لایه، یک پوسته‌ی بنتونیتی ضخیم می‌تواند محیط
              اطراف الکترود را تا حدی همگن کرده و توزیع پتانسیل را یکنواخت‌تر
              سازد؛ در نتیجه ولتاژهای گام و تماس بهبود می‌یابند.
            </p>
          </section>

          {/* --- 4. طراحی مهندسی بک‌فیل --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۴. طراحی مهندسی بک‌فیل با بنتونیت برای رسیدن به مقاومت ویژه‌ی
              پایین
            </h2>

            <h3 className="font-bold mb-2">
              ۴.۱. گام اول: مطالعه خاک و تعیین هدف
            </h3>
            <ol className="list-decimal pr-6 space-y-1">
              <li>
                اندازه‌گیری مقاومت ویژه‌ی خاک با روش‌های چهار الکترودی (ونر یا
                شلومبرژه) مطابق استاندارد IEEE Std 81.
              </li>
              <li>
                تعیین مقاومت هدف بر اساس سطح ولتاژ، جریان خطا و محدودیت‌های
                استاندارد (مثلاً رسیدن به مقاومت کل ارت کمتر از ۱–۲ اهم برای
                پست‌های فشار قوی).
              </li>
              <li>
                بررسی محدودیت‌های سایت از نظر عمق قابل حفر، فضا برای شبکه‌ی مش،
                ملاحظات زیست‌محیطی و…
              </li>
            </ol>

            <h3 className="font-bold mt-4 mb-2">
              ۴.۲. انتخاب هندسه الکترود و ناحیه بک‌فیل
            </h3>
            <p>حالت‌های رایج:</p>
            <ul className="list-disc pr-6 space-y-1">
              <li>
                چاه ارت میله‌ای: یک یا چند میله‌ی مسی/فولاد مس‌پوش در چاه عمودی
                ۳ تا ۳۰ متری که لایه‌های مرطوب‌تر خاک را قطع کند.
              </li>
              <li>
                الکترود نواری در ترانشه: تسمه‌ی مسی یا گالوانیزه افقی در عمق حدود
                ۰٫۶ تا ۱ متر با بک‌فیل بنتونیتی در اطراف.
              </li>
            </ul>
            <p className="mt-2">
              قطر چاه معمولاً ۷۵–۱۰۰ میلی‌متر و ضخامت لایه بنتونیت در اطراف
              تسمه در حدود ۲۵–۵۰ میلی‌متر در نظر گرفته می‌شود تا شعاع مؤثر
              الکترود به‌طور معنی‌دار افزایش یابد.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۴.۳. طراحی ترکیب و نسبت اختلاط
            </h3>
            <p>
              هدف، تهیه‌ی دوغاب یا خمیر نیمه‌سیال بنتونیت و آب است که ضمن داشتن
              روانی کافی، پس از تورم، تمام حفره‌ها را پر کند. به‌طور نمونه:
            </p>
            <ul className="list-disc pr-6 space-y-1">
              <li>حدود ۴۵۰ کیلوگرم بنتونیت برای تولید ۱ مترمکعب بک‌فیل.</li>
              <li>نسبت ۱:۳ تا ۱:۴ (۱ کیلو بنتونیت به ۳–۴ لیتر آب) برای دوغاب.</li>
              <li>
                در صورت ترکیب با سیمان یا سایر مواد، نسبت‌ها باید بر اساس دیتاشیت
                سازنده تنظیم شود.
              </li>
            </ul>

            <h3 className="font-bold mt-4 mb-2">
              ۴.۴. محاسبه‌ی تقریبی تأثیر بنتونیت
            </h3>
            <p>
              برای الکترود میله‌ای قائم در خاک همگن، مقاومت تقریبی با رابطه‌ی
              کلاسیک تابع مقاومت ویژه‌ی محیط و قطر میله است. قرار دادن میله در
              پوسته‌ی بنتونیتی را می‌توان به‌صورت کاهش ρ مؤثر یا افزایش قطر
              معادل مدل کرد. گزارش‌های میدانی حاکی از کاهش ۳۰ تا ۴۰ درصدی
              مقاومت الکترود نسبت به حالت بدون بنتونیت است (بسته به نوع خاک و
              کیفیت اجرا).
            </p>
          </section>

          {/* --- 5. عوامل مؤثر --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۵. عوامل مؤثر بر دستیابی به مقاومت ویژه‌ی پایین
            </h2>
            <h3 className="font-bold mb-2">۵.۱. نوع بنتونیت</h3>
            <p>
              بنتونیت سدیمی معمولاً تورم بیشتر و هدایت الکتریکی بالاتری نسبت به
              بنتونیت کلسیمی دارد و برای کاربرد ارت ترجیح داده می‌شود.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۵.۲. رطوبت و شرایط اقلیمی
            </h3>
            <p>
              مقاومت ویژه‌ی بنتونیت شدیداً تابع میزان اشباع است و در نزدیکی
              اشباع به حداقل می‌رسد. در مناطق بسیار خشک ممکن است نیاز به آبیاری
              دوره‌ای یا طراحی ویژه (چاه عمیق‌تر، مواد ترکیبی) باشد.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۵.۳. تراکم و حذف حفره‌ها
            </h3>
            <p>
              حفره‌های هوا در لایه‌ی بنتونیت باعث افزایش مقاومت می‌شوند. در حین
              پر کردن چاه، توصیه می‌شود میله چند بار بالا/پایین یا چرخانده شود
              تا حباب‌ها خارج شوند و دوغاب تمام فضای چاه را پر کند.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۵.۴. تماس کامل الکترود با بنتونیت
            </h3>
            <p>
              سطح الکترود باید تمیز و عاری از آلودگی باشد. وجود شکاف خشک بین
              الکترود و بنتونیت، بخش بزرگی از مزیت بک‌فیل را از بین می‌برد.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۵.۵. ترکیب با سایر مواد
            </h3>
            <p>
              در برخی پروژه‌ها بنتونیت با خاک محل، سیمان یا مواد کربنی ترکیب
              می‌شود تا هزینه، استحکام مکانیکی یا هدایت الکتریکی بهینه شود.
              درصد بهینه بنتونیت بسته به نوع خاک پایه متفاوت است و باید
              آزمایشگاهی تعیین گردد.
            </p>
          </section>

          {/* --- 6. مراحل اجرایی نمونه --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۶. مراحل اجرایی نمونه برای چاه ارت بنتونیتی
            </h2>

            {/* شکل ۳ – اجرای چاه ارت با دوغاب بنتونیت */}
            <figure className="mb-4">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                <Image
                  src="/images/articles/backfill-bentonite-3.jpg"
                  alt="چاه ارت بنتونیتی با میله مسی و دوغاب بنتونیت اطراف آن"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 900px, 100vw"
                />
              </div>
              <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
                شکل ۳ – نمونه اجرای چاه ارت با دوغاب بنتونیت اطراف میله مسی
              </figcaption>
            </figure>

            <h3 className="font-bold mb-2">۶.۱. حفر چاه</h3>
            <ol className="list-decimal pr-6 space-y-1">
              <li>حفر چاه با قطر حدود ۷۵–۱۰۰ میلی‌متر تا عمق طراحی‌شده.</li>
              <li>تمیز کردن دیواره‌ها تا حد امکان از ریزش اضافی.</li>
            </ol>

            <h3 className="font-bold mt-4 mb-2">
              ۶.۲. آماده‌سازی دوغاب بنتونیت
            </h3>
            <ol className="list-decimal pr-6 space-y-1">
              <li>ریختن آب تمیز در مخزن یا میکسر.</li>
              <li>
                افزودن تدریجی بنتونیت همراه با هم‌زدن تا از بین رفتن کلوخه‌ها.
              </li>
              <li>
                تنظیم نسبت در محدوده‌ی حدودی ۱:۳ یا ۱:۴ (بنتونیت : آب) مطابق
                توصیه سازنده.
              </li>
              <li>
                رها کردن دوغاب برای ۱۵–۳۰ دقیقه جهت هیدراته شدن کامل و سپس
                مخلوط‌کردن مجدد.
              </li>
            </ol>

            <h3 className="font-bold mt-4 mb-2">۶.۳. نصب الکترود</h3>
            <p>
              میله‌ی مسی یا فولاد مس‌پوش در مرکز چاه قرار گرفته و ارتباط آن با
              شینه یا شبکه‌ی ارت طبق نقشه و استاندارد برقرار می‌شود.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۶.۴. پر کردن چاه با دوغاب بنتونیت
            </h3>
            <ol className="list-decimal pr-6 space-y-1">
              <li>دوغاب از سطح چاه به‌آرامی ریخته یا پمپ می‌شود.</li>
              <li>
                در حین پر کردن، میله چند بار حرکت داده می‌شود تا حباب‌ها خارج
                شوند.
              </li>
              <li>
                در صورت نشست اولیه، دوغاب مجدداً اضافه می‌شود تا به تراز نهایی
                برسد.
              </li>
            </ol>

            <h3 className="font-bold mt-4 mb-2">
              ۶.۵. لایه رویی و حفاظت مکانیکی
            </h3>
            <p>
              بخش بالایی چاه می‌تواند با مخلوط خاک و بنتونیت یا بتن سبک پر شود
              و در بالا یک دریچه‌ی بازرسی مناسب نصب گردد.
            </p>
          </section>

          {/* --- 7. کنترل و پایش --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۷. کنترل و پایش عملکرد
            </h2>
            <h3 className="font-bold mb-2">۷.۱. اندازه‌گیری اولیه</h3>
            <p>
              پس از تکمیل نصب، با استفاده از دستگاه ارت‌تستر و روش افت پتانسیل
              سه یا چهار نقطه‌ای، مقاومت به زمین اندازه‌گیری و با مقدار طراحی
              مقایسه می‌شود.
            </p>

            <h3 className="font-bold mt-4 mb-2">۷.۲. پایش بلندمدت</h3>
            <p>
              اندازه‌گیری‌های دوره‌ای (مثلاً سالانه) برای ارزیابی تأثیر
              تغییرات فصلی انجام می‌شود. در گزارش‌های میدانی، سیستم‌های ارت با
              بک‌فیل بنتونیتی در بازه‌های ۱۰ تا ۱۵ سال مقاومت نسبتاً پایدار و
              پایینی را نشان داده‌اند، مشروط بر این‌که منبع رطوبت به‌طور کامل
              از بین نرود.
            </p>
          </section>

          {/* --- 8. ملاحظات زیست‌محیطی --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۸. ملاحظات زیست‌محیطی و محدودیت‌ها
            </h2>
            <ul className="list-disc pr-6 space-y-1">
              <li>
                بنتونیت یک ماده‌ی طبیعی و عمدتاً غیرسمی است و بر خلاف برخی مواد
                شیمیایی تقویتی ارت، خطر خورندگی شدید و آلودگی گسترده‌ی خاک و آب
                زیرزمینی را ندارد.
              </li>
              <li>
                در پروژه‌های حساس (نزدیکی چاه‌های آب، مناطق حفاظت‌شده) باید
                اثرات بلندمدت هر گونه افزودنی بررسی و تأیید زیست‌محیطی اخذ شود.
              </li>
              <li>
                در خاک‌های بسیار متورم‌پذیر، تورم بنتونیت ممکن است روی سازه‌های
                مجاور اثر بگذارد و نیازمند بررسی ژئوتکنیکی است.
              </li>
              <li>
                در مناطق بسیار خشک، در صورت نبود منبع رطوبت طبیعی، بنتونیت ممکن
                است به‌مرور خشک شده و بخشی از مزیت خود را از دست بدهد؛ در این
                حالت باید از عمق بیشتر یا مواد رسانای ویژه به‌همراه بنتونیت
                استفاده کرد.
              </li>
            </ul>
          </section>

          {/* --- 9. جمع‌بندی --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۹. جمع‌بندی
            </h2>
            <p>
              بنتونیت، به‌عنوان یک رس متورم‌شونده با مقاومت ویژه‌ی پایین در حالت
              اشباع، یکی از مؤثرترین و اقتصادی‌ترین مواد برای مهندسی بک‌فیل
              اطراف الکترودهای زمین است. با رعایت اصول زیر می‌توان به مقاومت
              ویژه‌ی پایین و پایدار دست یافت:
            </p>
            <ol className="list-decimal pr-6 space-y-1 mt-2">
              <li>
                مطالعه دقیق خاک و انتخاب هندسه مناسب الکترود (چاه عمودی، شبکه
                افقی یا ترکیبی).
              </li>
              <li>
                طراحی پوسته بنتونیتی با ضخامت کافی و مقاومت ویژه‌ی پایین متناسب
                با شرایط سایت.
              </li>
              <li>
                اختلاط صحیح بنتونیت و آب، حذف حفره‌ها و تضمین تماس کامل بین
                الکترود، بنتونیت و خاک.
              </li>
              <li>
                کنترل اولیه و پایش دوره‌ای مقاومت ارت و انجام اصلاحات تکمیلی در
                صورت نیاز.
              </li>
            </ol>
            <p className="mt-2">
              به‌کارگیری این اصول در کنار استانداردهای بین‌المللی، راهی مطمئن
              برای دستیابی به سیستم ارت با عملکرد ایمن، پایدار و مقرون‌به‌صرفه
              فراهم می‌کند.
            </p>
          </section>

          {/* --- 10. مراجع منتخب (خلاصه) --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              مراجع منتخب (نمونه)
            </h2>
            <ol className="list-decimal pr-6 space-y-1">
              <li>
                IEEE Std 81-2012, IEEE Guide for Measuring Earth Resistivity,
                Ground Impedance, and Earth Surface Potentials of a Grounding
                System.
              </li>
              <li>
                Shuhada, N. H. et al., “Grounding Enhancement Material Using
                Bentonite,” 2016.
              </li>
              <li>
                A. Kostic et al., “Effects of Bentonite Content on Electrical
                Resistivity of Soils.”
              </li>
              <li>
                “Backfill Materials for Enhancing the Performance of Electrical
                Grounding Systems: An Analytical Revisit,” 2021.
              </li>
              <li>
                “Bentonite – Moisture Retaining Clay Datasheet,” Furse / Cable
                Services.
              </li>
            </ol>
          </section>
        </div>

        {/* دکمه برگشت – پایین مقاله و سمت راست کارت */}
        <div className="w-full flex justify-start mt-8">
          <Link
            href="/#blog"
            className={backButtonClass}
            style={{ fontFamily: "BNazanin" }}
          >
            ← بازگشت به مقالات
          </Link>
        </div>
      </article>
    </div>
  );
}
