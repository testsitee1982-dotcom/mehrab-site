// app/articles/procurement-checklist-bentonite/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProcurementChecklistBentoniteArticlePage() {
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
        {/* دکمه بازگشت – بالای مقاله */}
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
            چک‌لیست خرید بنتونیت برای پروژه‌های برق
          </h1>

          <div className="mt-3 text-xs md:text-sm text-white/60">
            ۱۴۰۳/۰۸/۲۵
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/40 text-emerald-200">
              ارتینگ و صاعقه‌گیر
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/40 text-sky-200">
              مواد کاهنده مقاومت زمین
            </span>
          </div>
        </header>

        {/* گالری تصاویر بالای مقاله */}
        <div className="grid gap-4 md:grid-cols-3 mb-10">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
            <Image
              src="/images/articles/procurement-bentonite-1.jpg"
              alt="اندازه‌گیری مقاومت ارت با ارت‌تستر"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
            <Image
              src="/images/articles/procurement-bentonite-2.jpg"
              alt="تزریق دوغاب بنتونیت در چاه ارت"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
            <Image
              src="/images/articles/procurement-bentonite-3.jpg"
              alt="آماده‌سازی دوغاب بنتونیت در محل پروژه"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* متن مقاله */}
        <div
          className="space-y-8 text-base md:text-lg leading-8 text-white/85 text-justify"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          {/* مقدمه */}
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-3">
              مقاله جامع: چک‌لیست خرید بنتونیت برای پروژه‌های برق
            </h2>
            <p className="mb-3">
              در پروژه‌های برق – به‌ویژه سیستم‌های ارتینگ، حفاظت در برابر
              صاعقه، و پست‌های توزیع و انتقال – بنتونیت به‌عنوان یکی از
              اصلی‌ترین مواد جهت کاهش مقاومت زمین و بهبود عملکرد شبکه اتصال
              زمین به‌کار می‌رود. کیفیت بنتونیت، نوع آن، شرایط بسته‌بندی،
              ترکیبات، مقاومت‌پذیری و حتی نحوه حمل‌ونقل آن می‌تواند تأثیر مستقیم
              بر ایمنی پروژه، کارایی ارت و طول عمر سیستم داشته باشد. بنابراین،
              وجود یک چک‌لیست دقیق و استاندارد برای خرید بنتونیت ضروری است.
            </p>
          </section>

          {/* ۱. نوع بنتونیت */}
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-3">
              ۱. بررسی نوع بنتونیت مورد نیاز پروژه
            </h2>
            <p className="mb-3">
              پیش از خرید، باید مشخص شود که پروژه چه نوع بنتونیتی نیاز دارد و هر
              کدام چه رفتاری در سیستم ارت ایجاد می‌کنند.
            </p>

            <h3 className="font-semibold mb-2">
              ۱–۱. بنتونیت سدیمی (Swelling Bentonite)
            </h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>مناسب‌ترین گزینه برای سیستم‌های ارت</li>
              <li>دارای قابلیت جذب آب زیاد و تورم بالا</li>
              <li>ایجاد ژل چسبنده و پایدار اطراف الکترود</li>
              <li>ارائه پایین‌ترین مقاومت الکتریکی در حالت اشباع</li>
            </ul>

            <h3 className="font-semibold mb-2">۱–۲. بنتونیت کلسیمی</h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>جذب آب و انبساط کمتر نسبت به نوع سدیمی</li>
              <li>مناسب‌تر برای کاربردهای غیر برقی (حفاری، سدسازی و ...)</li>
              <li>برای ارت معمولاً توصیه نمی‌شود.</li>
            </ul>

            <h3 className="font-semibold mb-2">۱–۳. بنتونیت اکتیو یا فرآوری‌شده</h3>
            <ul className="list-disc pr-5 space-y-1">
              <li>حاوی افزودنی‌های کربنی یا الکترولیتی هدایت‌کننده</li>
              <li>دارای مقاومت ویژه بسیار کم و پایدار در طول زمان</li>
              <li>گزینه ایده‌آل برای چاه‌های عمقی، پست‌های فشارقوی و نیروگاه‌ها</li>
            </ul>
          </section>

          {/* ۲. ویژگی‌های فنی */}
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-3">
              ۲. ویژگی‌های فنی که پیش از خرید باید کنترل شوند
            </h2>

            <h3 className="font-semibold mb-2">
              ۲–۱. مقاومت ویژه (Resistivity)
            </h3>
            <p className="mb-2">
              یکی از مهم‌ترین معیارهای انتخاب بنتونیت است.
            </p>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>حد مطلوب: کمتر از ۲ اهم‌متر</li>
              <li>برای پروژه‌های حساس مانند پست‌ها و نیروگاه‌ها: ۱ اهم‌متر یا کمتر</li>
            </ul>

            <h3 className="font-semibold mb-2">
              ۲–۲. درصد رطوبت (Moisture Content)
            </h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>میزان رطوبت طبیعی ترجیحاً در بازه ۱۲ تا ۱۵٪</li>
              <li>بنتونیت خشک کیفیت بهتری در جذب آب و تشکیل ژل دارد.</li>
            </ul>

            <h3 className="font-semibold mb-2">۲–۳. درصد انبساط (Swelling Index)</h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>حد مطلوب: حداقل ۱۵ برابر حجم اولیه</li>
              <li>
                هرچه انبساط بیشتر باشد، تماس سطحی با الکترود بهتر و مقاومت زمین
                کمتر خواهد بود.
              </li>
            </ul>

            <h3 className="font-semibold mb-2">۲–۴. میزان خلوص بنتونیت</h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>خلوص مناسب معمولاً بالاتر از ۹۰٪ است.</li>
              <li>وجود شن، سیلت یا نمک، مقاومت ویژه را افزایش می‌دهد.</li>
            </ul>

            <h3 className="font-semibold mb-2">۲–۵. pH بنتونیت</h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>pH خنثی یا کمی قلیایی بین ۷ تا ۹ مطلوب است.</li>
              <li>pH نامناسب می‌تواند خوردگی الکترود را تسریع کند.</li>
            </ul>

            <h3 className="font-semibold mb-2">۲–۶. اندازه ذرات (Granulometry)</h3>
            <ul className="list-disc pr-5 space-y-1">
              <li>دانه‌بندی ریز و یکنواخت، کمتر از حدود ۸۰ میکرون</li>
              <li>
                دانه‌های درشت باعث کاهش خاصیت ژلی، چسبندگی کمتر و افزایش مقاومت
                الکتریکی می‌شوند.
              </li>
            </ul>
          </section>

          {/* ۳. استانداردها و مدارک */}
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-3">
              ۳. الزامات استاندارد و مدارک مورد نیاز هنگام خرید
            </h2>

            <h3 className="font-semibold mb-2">۳–۱. استانداردهای معتبر</h3>
            <p className="mb-2">بنتونیت باید با استانداردهای زیر هم‌خوانی داشته باشد:</p>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>IEEE Std 80</li>
              <li>IEC 62561-7</li>
              <li>استاندارد ملی ایران: ISIRI 17555</li>
            </ul>

            <h3 className="font-semibold mb-2">۳–۲. مدارک فنی مورد نیاز از فروشنده</h3>
            <ul className="list-disc pr-5 space-y-1">
              <li>برگه مشخصات فنی (Technical Data Sheet)</li>
              <li>آنالیز آزمایشگاهی معتبر و گزارش مقاومت ویژه</li>
              <li>گواهی کنترل کیفیت (QC) و مدارک بهداشت و محیط‌زیست</li>
              <li>ضمانت‌نامه کیفیت و تطابق با استانداردها</li>
            </ul>
          </section>

          {/* ۴. بسته‌بندی و حمل‌ونقل */}
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-3">
              ۴. چک‌لیست بسته‌بندی و حمل‌ونقل
            </h2>

            <h3 className="font-semibold mb-2">۴–۱. وضعیت بسته‌بندی</h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>کیسه‌های ۲۵ یا ۵۰ کیلوگرمی چندلایه (PP یا مشابه)</li>
              <li>دارای لفافه داخلی ضد رطوبت</li>
              <li>قید تاریخ تولید، سری ساخت و نام تولیدکننده روی کیسه</li>
            </ul>

            <h3 className="font-semibold mb-2">۴–۲. شرایط حمل‌ونقل و انبارش</h3>
            <ul className="list-disc pr-5 space-y-1">
              <li>حمل در کامیون مسقف یا پوشش‌دار برای جلوگیری از خیس‌شدن</li>
              <li>انبارکردن در فضای خشک، سرپوشیده و روی پالت</li>
              <li>عدم تماس مستقیم کیسه‌ها با زمین مرطوب</li>
            </ul>
          </section>

          {/* ۵. مقایسه فروشندگان */}
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-3">
              ۵. چک‌لیست مقایسه فروشندگان قبل از خرید
            </h2>

            <h3 className="font-semibold mb-2">۵–۱. سابقه و اعتبار فروشنده</h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>سابقه همکاری با پروژه‌های بزرگ برق و پست‌های فشارقوی</li>
              <li>امکان ارائه نمونه قبل از خرید اصلی</li>
              <li>پشتیبانی فنی و پاسخ‌گویی در مورد دیتاشیت</li>
            </ul>

            <h3 className="font-semibold mb-2">
              ۵–۲. تطابق کیفیت واقعی با TDS
            </h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>مقایسه نتایج آزمایشگاه مستقل با اطلاعات کاتالوگ</li>
              <li>استعلام رضایت سایر مشتریان و پروژه‌های قبلی</li>
            </ul>

            <h3 className="font-semibold mb-2">۵–۳. قیمت و شرایط تجاری</h3>
            <ul className="list-disc pr-5 space-y-1">
              <li>قیمت هر کیسه و شرایط پرداخت</li>
              <li>هزینه حمل تا سایت پروژه</li>
              <li>شرایط گارانتی، مرجوعی و خدمات پس از فروش</li>
            </ul>
          </section>

          {/* ۶. کنترل در محل پروژه */}
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-3">
              ۶. چک‌لیست عملکردی در محل پروژه
            </h2>

            <h3 className="font-semibold mb-2">۶–۱. کنترل چشمی</h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>پودر بسیار نرم، یکنواخت و فاقد دانه‌های درشت</li>
              <li>عدم وجود بوی نامطبوع یا لکه‌های رطوبتی روی کیسه</li>
            </ul>

            <h3 className="font-semibold mb-2">۶–۲. تست سریع جذب آب</h3>
            <p className="mb-2">
              مقدار کمی بنتونیت را با آب مخلوط کنید؛
            </p>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>باید ژل یکنواخت و بدون ته‌نشینی سنگین تشکیل شود.</li>
            </ul>

            <h3 className="font-semibold mb-2">۶–۳. سنجش رطوبت</h3>
            <p>
              اگر رطوبت واقعی بیش از حد باشد، احتمال کهنگی یا انبارش نامناسب
              وجود دارد و باید با احتیاط استفاده شود.
            </p>
          </section>

          {/* ۷. مصرف در چاه ارت */}
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-3">
              ۷. چک‌لیست مصرف بنتونیت در چاه ارت
            </h2>

            <h3 className="font-semibold mb-2">۷–۱. میزان مورد نیاز</h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>چاه معمولی: حدود ۵۰ تا ۱۵۰ کیلوگرم</li>
              <li>چاه‌های سامانه حفاظت (صاعقه‌گیر و ...): ۱۵۰ تا ۳۰۰ کیلوگرم</li>
              <li>پست‌های فشارقوی: در برخی موارد تا حدود ۶۰۰ کیلوگرم</li>
            </ul>

            <h3 className="font-semibold mb-2">۷–۲. روش مصرف</h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>مخلوط بنتونیت با آب تا رسیدن به خمیر یا ژل یکنواخت</li>
              <li>ریختن ژل در اطراف الکترود و پرکردن کامل فضای خالی</li>
              <li>جلوگیری از تماس مستقیم خاک خشک با الکترود</li>
            </ul>

            <h3 className="font-semibold mb-2">۷–۳. نکات کلیدی اجرایی</h3>
            <ul className="list-disc pr-5 space-y-1">
              <li>آب را آن‌قدر اضافه نکنید که مخلوط بیش از حد رقیق شود.</li>
              <li>از ایجاد ترک در لایه بنتونیت جلوگیری شود.</li>
              <li>تماس کامل بین الکترود، بنتونیت و خاک اطراف تضمین گردد.</li>
            </ul>
          </section>

          {/* ۸. اشتباهات و چک‌لیست نهایی */}
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-3">
              ۸. اشتباهات رایج و چک‌لیست نهایی خرید
            </h2>

            <h3 className="font-semibold mb-2">۸–۱. اشتباهات رایج</h3>
            <ul className="list-disc pr-5 space-y-1 mb-4">
              <li>خرید بنتونیت کلسیمی به‌جای سدیمی برای سیستم ارت</li>
              <li>اعتماد به محصول بدون تست آزمایشگاهی</li>
              <li>انتخاب صرفاً بر اساس قیمت پایین</li>
              <li>استفاده از بنتونیت خشک بدون تشکیل ژل و اشباع‌سازی</li>
              <li>خرید محصولات با ناخالصی زیاد یا دانه‌بندی درشت</li>
            </ul>

            <h3 className="font-semibold mb-2">۸–۲. چک‌لیست خلاصه هنگام خرید</h3>
            <ul className="list-disc pr-5 space-y-1">
              <li>نوع بنتونیت: سدیمی یا اکتیو</li>
              <li>مقاومت ویژه: زیر ۲ اهم‌متر (ترجیحاً ۱ اهم‌متر)</li>
              <li>دانه‌بندی: کمتر از ۸۰ میکرون</li>
              <li>درصد خلوص: بالای ۹۰٪</li>
              <li>pH بین ۷ تا ۹</li>
              <li>جذب آب و انبساط بالا</li>
              <li>بسته‌بندی استاندارد و ضد رطوبت</li>
              <li>گواهی‌های آزمایشگاهی معتبر</li>
              <li>برند معتبر و سابقه خوب در پروژه‌های برق</li>
              <li>قیمت منطقی نسبت به کیفیت و مشخصات</li>
            </ul>
          </section>

          {/* نتیجه‌گیری */}
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-3">نتیجه‌گیری</h2>
            <p className="mb-3">
              انتخاب بنتونیت مناسب برای پروژه‌های برق یکی از مهم‌ترین مراحل
              طراحی و اجرای سیستم ارتینگ است. رعایت موارد ذکرشده در این
              چک‌لیست می‌تواند باعث کاهش قابل‌توجه مقاومت زمین، افزایش طول عمر
              الکترودها، بهبود عملکرد حفاظت در برابر صاعقه و کاهش هزینه‌های
              نگهداری در بلندمدت شود.
            </p>
          </section>

          {/* منابع (به صورت خلاصه) */}
          <section>
            <h2 className="text-lg md:text-xl font-bold mb-3">
              منابع و استانداردهای پیشنهادی
            </h2>
            <ol className="list-decimal pr-5 space-y-1 text-sm md:text-base">
              <li>IEEE Std 80-2013 – Guide for Safety in AC Substation Grounding</li>
              <li>
                IEC 62561-7:2018 – Requirements for earthing enhancing compounds
              </li>
              <li>ISIRI 17555 – استاندارد مواد کاهنده مقاومت الکتریکی زمین</li>
              <li>IEEE Std 142 – Grounding of Industrial and Commercial Power Systems</li>
              <li>
                A.P. Sakis Meliopoulos – Soil Electrical Resistivity and Its Influence
                on Grounding System Design
              </li>
              <li>
                Electrical Grounding &amp; Bonding – Phil Simmons, NFPA
              </li>
              <li>Bentonite Handbook – Lubrication for Pipe Jacking</li>
              <li>
                Effect of Bentonite on Soil Resistivity for Earthing System Improvement
              </li>
              <li>Evaluation of Earthing Enhancement Materials</li>
              <li>
                دیتاشیت‌های تولیدکنندگان معتبر بنتونیت و مدارک EPC پروژه‌های
                توانیر و برق منطقه‌ای
              </li>
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
