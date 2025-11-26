// app/articles/bentonite-storage-and-handling/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function BentoniteStorageHandlingArticlePage() {
  // استایل مشترک دکمه «بازگشت به مقالات»
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
        {/* دکمه بازگشت – بالای مقاله و داخل کارت (سمت راست) */}
        <div className="w-full flex justify-start mb-6">
          <Link
            href="/#blog"
            className={backButtonClass}
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت به مقالات
          </Link>
        </div>

        {/* تیتر اصلی و متادیتا */}
        <header className="text-center mb-8 md:mb-10">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            نکات انبارداری و نگهداری بنتونیت صنعتی
          </h1>

          <div className="mt-3 text-xs md:text-sm text-white/60">
            ۱۴۰۳/۰۸/۲۶
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-400/40">
              انبارداری و لجستیک مواد
            </span>
          </div>
        </header>

        {/* چکیده */}
        <section
          className="space-y-4 text-base md:text-lg leading-8 text-white/85 text-justify mb-10"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          <h2 className="text-lg md:text-xl font-bold mb-2">چکیده</h2>
          <p>
            بنتونیت صنعتی یکی از پرمصرف‌ترین مواد معدنی در صنایع حفاری، ریخته‌گری،
            عمران، پالایش، صنایع غذایی، دام و طیور و … است. حفظ کیفیت بنتونیت در طول
            ذخیره‌سازی و انبارداری یک چالش مهم محسوب می‌شود، زیرا این ماده معدنی
            به‌شدت به رطوبت، آلودگی محیطی و شرایط جابه‌جایی حساس است. در این مقاله
            اصول کامل، علمی و کاربردی انبارداری بنتونیت شرح داده می‌شود.
          </p>
        </section>

        {/* تصویر ۱ – آزمایش رطوبت */}
        <figure className="mb-10">
          <div className="relative w-full h-60 md:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
            <Image
              src="/images/articles/bentonite-storage-1.jpg"
              alt="اندازه‌گیری رطوبت بنتونیت در آزمایشگاه کنترل کیفیت"
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs md:text-sm text-white/60">
            اندازه‌گیری رطوبت بنتونیت در آزمایشگاه کنترل کیفیت
          </figcaption>
        </figure>

        {/* بدنه مقاله – بخش ۱ و ۲ */}
        <section
          className="space-y-6 text-base md:text-lg leading-8 text-white/85 text-justify"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          {/* ۱. مقدمه */}
          <h2 className="text-lg md:text-xl font-bold">۱. مقدمه</h2>
          <p>
            بنتونیت نوعی خاک رس با قابلیت جذب آب بالا و خاصیت تورم زیاد است. این
            ویژگی‌ها هم‌زمان که آن را برای کاربردهای صنعتی مفید می‌سازند، سبب
            می‌شوند که شرایط نگهداری نامناسب باعث کاهش کیفیت، تغییر خواص فیزیکی و
            شیمیایی و افت کارایی ماده شود.
          </p>

          {/* ۲. عوامل مؤثر */}
          <h2 className="text-lg md:text-xl font-bold">
            ۲. عوامل مؤثر بر کیفیت بنتونیت در زمان انبارداری
          </h2>

          <h3 className="text-base md:text-lg font-semibold">۲٫۱ رطوبت</h3>
          <p>
            بنتونیت در تماس با رطوبت متورم شده و ساختار خود را از دست می‌دهد.
            افزایش رطوبت سبب موارد زیر می‌شود:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>کاهش قدرت چسبندگی</li>
            <li>کاهش استحکام تر و خشک (در ریخته‌گری)</li>
            <li>ایجاد کلوخه</li>
            <li>افزایش غیر قابل کنترل رطوبت پایه</li>
          </ul>
          <p>
            مطلوب‌ترین رطوبت محیط انبار حدود ۴۵ تا ۵۵ درصد است و نباید اجازه داد
            رطوبت بنتونیت بیش از ۱–۲٪ نسبت به مقدار اولیه افزایش یابد.
          </p>

          <h3 className="text-base md:text-lg font-semibold">۲٫۲ دما</h3>
          <p>
            اگرچه بنتونیت نسبت به تغییرات دما مقاوم است، اما دماهای بالا باعث کاهش
            رطوبت طبیعی و کاهش خواص کلوئیدی می‌شود. محدوده دمایی توصیه‌شده برای
            انبار، ۱۰ تا ۳۰ درجه سانتی‌گراد است.
          </p>

          <h3 className="text-base md:text-lg font-semibold">۲٫۳ آلودگی</h3>
          <p>بنتونیت باید از موارد زیر دور نگه داشته شود:</p>
          <ul className="list-disc pr-6 space-y-1">
            <li>گردوغبار سایر مواد معدنی مانند سیلیس و دولومیت</li>
            <li>مواد شیمیایی خورنده</li>
            <li>روغن‌ها و گریس‌ها (به‌ویژه در حفاری و ریخته‌گری)</li>
            <li>آلودگی‌های آلی و میکروبی</li>
          </ul>
        </section>

        {/* تصویر ۲ – انبار پالت‌ها */}
        <figure className="my-10">
          <div className="relative w-full h-60 md:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
            <Image
              src="/images/articles/bentonite-storage-2.jpg"
              alt="انبار استاندارد کیسه‌های بنتونیت روی پالت"
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs md:text-sm text-white/60">
            چیدمان کیسه‌های بنتونیت روی پالت در انبار خشک و سرپوشیده
          </figcaption>
        </figure>

        {/* بدنه مقاله – بخش ۳ و ۴ */}
        <section
          className="space-y-6 text-base md:text-lg leading-8 text-white/85 text-justify"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          {/* ۳. استانداردهای بسته‌بندی */}
          <h2 className="text-lg md:text-xl font-bold">
            ۳. استانداردهای بسته‌بندی برای بنتونیت
          </h2>

          <h3 className="text-base md:text-lg font-semibold">
            ۳٫۱ بسته‌بندی کیسه‌ای (PP یا لمینت)
          </h3>
          <ul className="list-disc pr-6 space-y-1">
            <li>مناسب نگهداری کوتاه‌مدت</li>
            <li>بهترین حالت: کیسه سه‌لایه با لمینت پلی‌اتیلن ضد رطوبت</li>
            <li>چیدمان روی پالت برای جلوگیری از جذب رطوبت کف</li>
          </ul>

          <h3 className="text-base md:text-lg font-semibold">
            ۳٫۲ بسته‌بندی بیگ‌بگ (FIBC)
          </h3>
          <ul className="list-disc pr-6 space-y-1">
            <li>مناسب حمل‌ونقل صنعتی و نگهداری میان‌مدت</li>
            <li>استفاده از لاینر داخلی برای جلوگیری از جذب رطوبت</li>
          </ul>

          <h3 className="text-base md:text-lg font-semibold">
            ۳٫۳ نگهداری فله‌ای
          </h3>
          <ul className="list-disc pr-6 space-y-1">
            <li>فقط در سیلوهای فلزی یا بتنی با تهویه و کنترل رطوبت</li>
            <li>استفاده از کف آب‌بند (اپوکسی، بتن آب‌بند یا سینی فلزی)</li>
          </ul>

          {/* ۴. اصول انبارداری صحیح */}
          <h2 className="text-lg md:text-xl font-bold">
            ۴. اصول انبارداری صحیح بنتونیت صنعتی
          </h2>

          <h3 className="text-base md:text-lg font-semibold">
            ۴٫۱ شرایط انبار
          </h3>
          <ul className="list-disc pr-6 space-y-1">
            <li>سقف سالم و بدون نشتی</li>
            <li>کف غیرقابل نفوذ به رطوبت</li>
            <li>تهویه مناسب برای کنترل بخار و رطوبت</li>
            <li>جلوگیری از تابش مستقیم آفتاب به کیسه‌ها</li>
            <li>محیط تمیز، خشک و عاری از گردوغبار شیمیایی</li>
          </ul>

          <h3 className="text-base md:text-lg font-semibold">
            ۴٫۲ چیدمان صحیح
          </h3>
          <ul className="list-disc pr-6 space-y-1">
            <li>
              استفاده از پالت چوبی یا پلاستیکی با حداقل ۱۵ سانتی‌متر فاصله از
              زمین
            </li>
            <li>حداقل فاصله ۲۰ سانتی‌متری از دیوارها</li>
            <li>حداکثر ۸ کیسه روی هم</li>
            <li>چیدمان ضربدری برای جلوگیری از ریزش ستون‌ها</li>
          </ul>

          <h3 className="text-base md:text-lg font-semibold">
            ۴٫۳ تاریخ‌گذاری و دسته‌بندی
          </h3>
          <p>
            هر محموله باید دارای کد QC، کد دسته (Batch) و تاریخ دریافت باشد و از
            روش <span className="font-semibold">FIFO</span> (اولین ورودی، اولین
            خروجی) استفاده شود تا ماندگاری طولانی موجب افت کیفیت نشود.
          </p>

          <h3 className="text-base md:text-lg font-semibold">
            ۴٫۴ جلوگیری از نفوذ حشرات و جوندگان
          </h3>
          <ul className="list-disc pr-6 space-y-1">
            <li>استفاده از توری در ورودی‌ها و دریچه‌ها</li>
            <li>نصب تله‌های غیرسمی و کنترل دوره‌ای</li>
            <li>جلوگیری از باقی ماندن مواد غذایی و ضایعات در انبار</li>
          </ul>
        </section>

        {/* تصویر ۳ – تست‌های کنترلی */}
        <figure className="my-10">
          <div className="relative w-full h-60 md:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
            <Image
              src="/images/articles/bentonite-storage-3.jpg"
              alt="اندازه‌گیری شاخص تورم و خواص رئولوژیک بنتونیت"
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs md:text-sm text-white/60">
            پایش دوره‌ای شاخص تورم و خواص کلوئیدی بنتونیت در آزمایشگاه
          </figcaption>
        </figure>

        {/* بدنه مقاله – بخش ۵ تا جمع‌بندی و منابع */}
        <section
          className="space-y-6 text-base md:text-lg leading-8 text-white/85 text-justify"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          {/* ۵. حمل‌ونقل */}
          <h2 className="text-lg md:text-xl font-bold">
            ۵. نکات حمل‌ونقل بنتونیت
          </h2>

          <h3 className="text-base md:text-lg font-semibold">۵٫۱ حمل کیسه‌ای</h3>
          <ul className="list-disc pr-6 space-y-1">
            <li>استفاده از کامیون مسقف یا دارای چادر سالم و ضدآب</li>
            <li>چیدمان مطمئن برای جلوگیری از پارگی کیسه‌ها هنگام حرکت</li>
          </ul>

          <h3 className="text-base md:text-lg font-semibold">۵٫۲ حمل فله‌ای</h3>
          <ul className="list-disc pr-6 space-y-1">
            <li>خشک و تمیز بودن کامل مخازن یا سیلوهای حمل پیش از بارگیری</li>
            <li>جلوگیری از تماس با فلزات خورنده یا باقی‌مانده مواد شیمیایی</li>
          </ul>

          {/* ۶. تست‌های کنترلی */}
          <h2 className="text-lg md:text-xl font-bold">
            ۶. تست‌های کنترلی هنگام خروج از انبار
          </h2>

          <h3 className="text-base md:text-lg font-semibold">
            ۶٫۱ تست تورم (Swelling Index)
          </h3>
          <p>
            برای بنتونیت سدیمی، شاخص تورم باید معمولاً بزرگ‌تر از ۲۴ میلی‌لیتر به
            ازای ۲ گرم نمونه باقی مانده باشد تا عملکرد مناسب در کاربردهای صنعتی
            تضمین شود.
          </p>

          <h3 className="text-base md:text-lg font-semibold">۶٫۲ تست رطوبت</h3>
          <p>
            حد مجاز رطوبت برای بسیاری از کاربردها حدود ۱۲ درصد است. افزایش بیش از
            این مقدار نشان‌دهنده شرایط نامناسب انبار یا حمل‌ونقل است.
          </p>

          <h3 className="text-base md:text-lg font-semibold">
            ۶٫۳ تست مش و دانه‌بندی
          </h3>
          <p>
            در صورت فشردگی یا کلوخه شدن، درصد ذرات ریز کاهش می‌یابد و لازم است
            نمونه دوباره الک و دانه‌بندی آن کنترل شود.
          </p>

          <h3 className="text-base md:text-lg font-semibold">
            ۶٫۴ تست چسبندگی (برای ریخته‌گری)
          </h3>
          <p>
            برای خطوط ریخته‌گری، چسبندگی مخلوط ماسه–بنتونیت باید مطابق
            استانداردهای <span className="font-semibold">AFS</span> کنترل شود تا
            استحکام قالب و کیفیت سطحی قطعه حفظ گردد.
          </p>

          {/* ۷. خطرات */}
          <h2 className="text-lg md:text-xl font-bold">
            ۷. خطرات ناشی از انبارداری نادرست
          </h2>
          <ul className="list-disc pr-6 space-y-1">
            <li>کاهش شدید تورم و از دست رفتن خواص ژلی</li>
            <li>ایجاد کلوخه و عدم یکنواختی در فرآیند اختلاط</li>
            <li>کاهش عملکرد در حفاری و افزایش مصرف گل یا دوغاب</li>
            <li>افت چسبندگی در ریخته‌گری و افزایش ضایعات</li>
            <li>کاهش کیفیت محصولات خوراک دام و طیور</li>
            <li>افزایش ریسک آلودگی شیمیایی و میکروبی</li>
          </ul>

          {/* ۸. جمع‌بندی */}
          <h2 className="text-lg md:text-xl font-bold">۸. جمع‌بندی</h2>
          <p>
            بنتونیت یک ماده معدنی بسیار مفید اما حساس به رطوبت و آلودگی است. رعایت
            اصول صحیح انبارداری باعث می‌شود که کیفیت آن حفظ شود، مصرف در
            فرآیندهای صنعتی کاهش یابد، هزینه‌های نگهداری کم شود و عملکرد محصول
            مطابق استاندارد باقی بماند.
          </p>

          {/* منابع */}
          <h2 className="text-lg md:text-xl font-bold">
            منابع پیشنهادی (قابل استناد)
          </h2>
          <p>
            در تهیه این مقاله از استانداردها، مقالات و منابع معتبر بین‌المللی
            استفاده شده است:
          </p>
          <ol className="list-decimal pr-6 space-y-1">
            <li>
              American Foundry Society (AFS) – Bentonite in Green Sand Systems
            </li>
            <li>API Specification 13A – Drilling Fluids Materials</li>
            <li>Grim, R.E. “Clay Mineralogy.” McGraw-Hill, 1962</li>
            <li>Murray, H.H. “Applied Clay Mineralogy.” Elsevier, 2007</li>
            <li>
              Bhargava, R. Industrial Minerals &amp; Rocks, Society for Mining,
              7th Edition
            </li>
            <li>
              European Bentonite Association (EUBA) – Handling &amp; Storage
              Guidelines
            </li>
          </ol>
        </section>

        {/* دکمه بازگشت – پایین مقاله و سمت راست کارت */}
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
