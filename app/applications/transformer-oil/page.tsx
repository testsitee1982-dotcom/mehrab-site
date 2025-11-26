"use client";

import Image from "next/image";
import Link from "next/link";

export default function TransformerOilPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <article
        className="bg-black/40 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
        dir="rtl"
      >
        {/* بنر بالای صفحه */}
        <div className="relative w-full aspect-[16/7]">
          <Image
            src="/images/applications/transformer-oil-hero.jpg"
            alt="تصفیه و احیای روغن ترانس با بنتونیت اکتیو"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 900px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="px-4 md:px-8 pb-8 md:pb-10 pt-6 md:pt-8">
          {/* دکمه بازگشت بالای صفحه */}
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

          {/* تیتر اصلی + تگ‌ها */}
          <header className="text-center mb-8 md:mb-10">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              بنتونیت اکتیو و گرید روغنی برای تصفیه و احیای روغن ترانس
            </h1>

            <p
              className="mt-3 text-sm md:text-base text-white/80"
              style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
            >
              راهکاری تخصصی برای بهبود عملکرد و افزایش عمر ترانسفورماتورها
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs md:text-sm">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-200 border border-emerald-400/50">
                تصفیه و احیای روغن ترانسفورماتور
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-200 border border-sky-400/50">
                بنتونیت اکتیو و گرید روغنی
              </span>
            </div>
          </header>

          {/* متن اصلی */}
          <section
            className="space-y-4 text-base md:text-lg leading-8 text-white/85 text-justify"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            <p>
              روغن ترانسفورماتور در طول زمان به‌دلیل جذب رطوبت، تشکیل اسید و
              ایجاد محصولات اکسیداسیون، کیفیت اولیه خود را از دست می‌دهد. برای
              حفظ کارایی و پایداری ترانس‌ها، استفاده از جاذب‌های مناسب نقش
              حیاتی دارد.
            </p>
            <p>
              محصولات بنتونیت اکتیو و گرید روغنی تولید شرکت ما، به‌صورت تخصصی
              برای صنایع برق قدرت و واحدهای تصفیه روغن طراحی و تولید شده‌اند و
              با ساختار اصلاح‌شده خود، توانایی جذب بالایی در حذف رطوبت، اسید و
              ترکیبات اکسیداسیونی دارند.
            </p>

            <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
              چرا بنتونیت اکتیو و گرید روغنی ما انتخاب اول صنایع برق است؟
            </h2>
            <ul className="list-disc pr-6 space-y-1">
              <li>
                <span className="font-semibold text-white">
                  جذب سریع و مؤثر رطوبت:
                </span>{" "}
                بنتونیت‌های اکتیو ما با سطح تماس بالا، توانایی جذب رطوبت محلول
                در روغن را در کوتاه‌ترین زمان دارند، بدون ایجاد کدورت یا
                ناپایداری.
              </li>
              <li>
                <span className="font-semibold text-white">
                  کاهش اسیدیته و بهبود خواص فیزیکی روغن:
                </span>{" "}
                ساختار اصلاح‌شده جاذب باعث حذف ترکیبات قطبی و اسیدی شده و کیفیت
                عایقی روغن را ارتقا می‌دهد.
              </li>
              <li>
                <span className="font-semibold text-white">
                  حذف لجن و محصولات اکسیداسیون:
                </span>{" "}
                این بنتونیت‌ها قادرند رنگ روغن را بهبود دهند و ترکیبات
                اکسیداسیونی را که موجب کاهش استقامت دی‌الکتریک می‌شوند، جذب
                کنند.
              </li>
              <li>
                <span className="font-semibold text-white">
                  پایداری بالا و عدم ایجاد آلودگی ثانویه:
                </span>{" "}
                تمام محصولات ما تحت کنترل سخت‌گیرانه‌ی کیفیت تولید شده و هیچ
                ماده جانبی مخرب وارد روغن نمی‌کنند.
              </li>
              <li>
                <span className="font-semibold text-white">
                  سازگار با انواع دستگاه‌های فیلتراسیون و احیای روغن:
                </span>{" "}
                دانه‌بندی یکنواخت و خواص کنترل‌شده باعث می‌شود بنتونیت شرکت ما
                بدون مشکل در واحدهای احیا و ماشین‌آلات تصفیه استفاده شود.
              </li>
            </ul>

            <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
              کاربردهای اصلی بنتونیت اکتیو و گرید روغنی
            </h2>
            <ul className="list-disc pr-6 space-y-1">
              <li>تصفیه و احیای روغن ترانسفورماتور</li>
              <li>احیای روغن‌های عایق صنعتی</li>
              <li>فیلترهای جذبی در واحدهای برق و نیروگاهی</li>
              <li>استفاده در سیستم‌های Purification &amp; Reconditioning</li>
              <li>
                جذب اسید، رطوبت و محصولات اکسیداسیون در فرآیندهای دوره‌ای و
                Online
              </li>
            </ul>

            <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
              ویژگی‌های فنی و کنترل کیفیت
            </h2>
            <ul className="list-disc pr-6 space-y-1">
              <li>سطح جذب بالا (High Adsorption Capacity)</li>
              <li>اسیدیته کنترل‌شده و مناسب برای تماس با روغن‌های عایقی</li>
              <li>دانه‌بندی یکنواخت و پایدار</li>
              <li>فعال‌سازی شیمیایی و حرارتی استاندارد</li>
              <li>تأیید کیفیت در هر بچ تولیدی</li>
            </ul>
            <p>
              به‌دلیل کیفیت ثابت و عملکرد قابل‌اعتماد، تولیدات ما در شرکت‌های
              سرویس‌دهندهٔ احیای روغن، کارگاه‌های تعمیرات ترانس و کارخانه‌های
              سازنده تجهیزات الکتریکی مورد استفاده قرار می‌گیرد.
            </p>

            <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
              چرا بنتونیت باکیفیت اهمیت دارد؟
            </h2>
            <p>
              در فرآیند احیا، کیفیت جاذب تأثیر مستقیمی بر نتیجه نهایی دارد.
              بنتونیت ضعیف یا غیر استاندارد می‌تواند:
            </p>
            <ul className="list-disc pr-6 space-y-1">
              <li>باعث کدورت روغن شود</li>
              <li>جاذبیت محدودی داشته باشد</li>
              <li>آلودگی ثانویه ایجاد کند</li>
              <li>عمر دستگاه تصفیه را کاهش دهد</li>
            </ul>
            <p>
              به همین دلیل انتخاب جاذبی مطمئن، پایدار و تخصصی، کلید موفقیت در
              فرآیند تصفیه روغن ترانسفورماتور است.
            </p>

            <h2 className="text-lg md:text-xl font-bold mt-6 mb-2">
              مشاوره و تأمین تخصصی
            </h2>
            <p>
              شرکت ما آماده است تا متناسب با نیاز شما — از واحدهای کوچک
              تعمیراتی تا تجهیزات نیروگاهی — مناسب‌ترین نوع بنتونیت اکتیو و
              گرید روغنی را معرفی و تأمین کند.
            </p>
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
        </div>
      </article>
    </div>
  );
}
