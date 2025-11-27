
import Image from "next/image";
import Link from "next/link";

export default function IsoIecCertifiedPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <article
        className="bg-black/40 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl"
        dir="rtl"
      >
        {/* دکمه بازگشت بالا (سمت راست) */}
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

        {/* تیتر اصلی و متادیتا */}
        <header className="text-center mb-8 md:mb-10">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            ISO &amp; IEC Certified – تضمین کیفیت، ردیابی کامل
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
              style={{ fontFamily: "BMitra, Tahoma, system-ui" }}
            >
              سیستم‌های مدیریت کیفیت
            </span>
            <span
              className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-200 border border-sky-400/50"
              style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
            >
              ISO &amp; IEC Certification
            </span>
          </div>
        </header>

        {/* متن اصلی */}
        <section
          className="space-y-4 text-base md:text-lg leading-8 text-white/85 text-justify mb-10"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          <p>
            در دنیای امروز، کیفیت و اعتماد از مهم‌ترین عوامل موفقیت یک محصول یا
            خدمات هستند. ما با دریافت گواهینامه‌های معتبر{" "}
            <span className="font-semibold text-white">ISO</span> و{" "}
            <span className="font-semibold text-white">IEC</span> ثابت کرده‌ایم که
            فرآیندهای ما مطابق با بالاترین استانداردهای بین‌المللی طراحی،
            نظارت و اجرا می‌شوند.
          </p>

          <h2 className="text-lg md:text-xl font-bold mt-4 mb-2">
            چرا گواهینامه‌های ISO و IEC اهمیت دارند؟
          </h2>
          <p>
            استانداردهای ISO و IEC مجموعه‌ای از اصول و راهکارهای جهانی برای
            تضمین کیفیت، ایمنی و قابلیت اطمینان محصولات هستند. مطابقت با این
            استانداردها یعنی:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>کیفیت محصول یا خدمات همیشه یکسان و قابل اعتماد است.</li>
            <li>تمام مراحل تولید به‌صورت دقیق مستندسازی و قابل ردیابی هستند.</li>
            <li>ریسک خطا، نقص و مغایرت به کمترین سطح ممکن کاهش می‌یابد.</li>
            <li>امکان همکاری و صادرات مطابق با استانداردهای بین‌المللی فراهم است.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            تعهد ما به کیفیت و ردیابی کامل
          </h2>
          <p>
            ما سیستم‌های جامع مدیریت کیفیت را در تمام بخش‌های مجموعه پیاده‌سازی
            کرده‌ایم. این یعنی:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>کنترل کیفیت مستمر در همه مراحل تولید و بسته‌بندی</li>
            <li>ثبت و نگهداری دقیق سوابق تولید و نتایج آزمون‌ها</li>
            <li>شفافیت کامل در فرآیندها و قابلیت ردیابی هر بچ تولیدی</li>
            <li>بهبود دائمی عملکرد، کاهش خطا و افزایش رضایت مشتریان</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
            مزیت این استانداردها برای مشتریان
          </h2>
          <p>
            داشتن گواهینامه‌های ISO و IEC تنها یک عنوان تزئینی نیست؛ بلکه
            تضمینی است برای مشتریان ما که بدانند:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>محصول یا خدمات دریافتی استاندارد، ایمن و باکیفیت است.</li>
            <li>
              هر مرحله از زنجیره تأمین، از مواد اولیه تا تحویل نهایی، قابل ردیابی
              و قابل بررسی است.
            </li>
            <li>
              انتخاب آن‌ها سرمایه‌گذاری مطمئن بر روی کیفیت، دوام و پایداری در
              عملکرد است.
            </li>
          </ul>
        </section>

        {/* گالری تصاویر ISO & IEC – ۵ تصویر */}
        <section className="mb-10">
          <h2
            className="text-lg md:text-xl font-bold mb-4 text-right text-white"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            نگاهی به سیستم‌های کنترل کیفیت و گواهی‌های ما
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {/* ردیف بالا */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/iso-1.png"
                alt="آزمایشگاه کنترل کیفیت بر روی مواد اولیه و محصولات نهایی"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/iso-2.png"
                alt="کنترل کیفیت محصول نهایی بر اساس دستورالعمل‌های ISO"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            {/* ردیف پایین */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/iso-3.png"
                alt="کارشناس کیفیت کنار میکروسکوپ و گواهینامه ISO"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/iso-4.png"
                alt="میزان‌های مستند و مستندسازی کامل برای دریافت گواهی کیفی"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            {/* تصویر پنجم، تمام‌عرض */}
            <div className="md:col-span-2 relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/images/why-us/iso-5.png"
                alt="بازبینی نهایی مستندات کیفیت و گواهی ISO & IEC"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* دکمه بازگشت پایین صفحه (سمت راست) */}
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
