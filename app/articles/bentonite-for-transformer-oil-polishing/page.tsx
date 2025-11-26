// app/articles/bentonite-for-transformer-oil-polishing/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function BentoniteTransformerOilArticlePage() {
  // استایل مشترک دکمه «بازگشت به مقالات» (همان استایل مقالات دیگر)
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

        {/* تیتر اصلی */}
        <header className="text-center mb-8 md:mb-10">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed"
            style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
          >
            انتخاب بنتونیت مناسب برای تصفیه و پالایش روغن ترانسفورماتور
          </h1>

          <div className="mt-3 text-xs md:text-sm text-white/60">
            ۱۴۰۳/۰۸/۲۵
          </div>

          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-white/70">
            <span>دسته‌بندی:</span>
            <span className="text-amber-300">تصفیه روغن ترانسفورماتور</span>
          </div>
        </header>

        {/* محتوای مقاله */}
        <div
          className="space-y-8 text-base md:text-lg leading-8 text-white/85 text-justify"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          {/* ۱. چکیده */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              چکیده
            </h2>
            <p>
              روغن ترانسفورماتور، یکی از مهم‌ترین اجزای عایقی و خنک‌کننده در
              تجهیزات قدرت است. آلودگی ناشی از اکسیداسیون، رطوبت و واکنش‌های
              شیمیایی در طول زمان، سبب کاهش خواص دی‌الکتریک روغن شده و خطرات
              قابل‌توجهی برای عملکرد ترانسفورماتور ایجاد می‌کند. در سال‌های
              اخیر، استفاده از بنتونیت و خاک‌های فعال‌شده به‌عنوان جاذب‌های مؤثر
              در تصفیه و احیای روغن، توجه گسترده‌ای را به خود جلب کرده است. در
              این مقاله، ضمن بررسی ساختار و خواص بنتونیت، معیارهای انتخاب بهترین
              نوع آن برای پالایش روغن ترانسفورماتور تشریح می‌شود. همچنین به
              استانداردهای بین‌المللی، روش‌های پایلوت تست، ویژگی‌های لازم برای
              انتخاب بنتونیت بهینه و اثرات زیست‌محیطی و اقتصادی اشاره می‌گردد.
            </p>
          </section>

          {/* شکل ۱ – آماده‌سازی دوغاب بنتونیت در روغن آلوده */}
          <figure className="mt-2">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
              <Image
                src="/images/articles/transformer-oil-bentonite-1.jpg"
                alt="افزودن و هم‌زدن بنتونیت در روغن ترانسفورماتور برای تصفیه"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
              شکل ۱ – آماده‌سازی دوغاب بنتونیت برای جذب ترکیبات قطبی و
              رنگ‌بر‌سازی روغن ترانسفورماتور
            </figcaption>
          </figure>

          {/* ۲. مقدمه */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۲. مقدمه
            </h2>
            <p>
              روغن ترانسفورماتور به‌عنوان یک عایق مایع، انتقال حرارت و افزایش عمر
              تجهیزات را تضمین می‌کند. با گذشت زمان، ترکیبات قطبی، اسیدهای آلی،
              رنگ، ذرات معلق و رطوبت باعث تخریب خواص الکتریکی و شیمیایی روغن
              می‌شوند. از این‌رو، تصفیه و احیای روغن به‌وسیله جاذب‌های معدنی
              به‌ویژه بنتونیت فعال‌شده یکی از مهم‌ترین روش‌های صنعتی است.
            </p>
          </section>

          {/* ۳. اهمیت تصفیه روغن ترانسفورماتور */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۳. اهمیت تصفیه روغن ترانسفورماتور
            </h2>
            <h3 className="font-bold mb-2">۳.۱. جلوگیری از کاهش ولتاژ شکست</h3>
            <p>
              رطوبت و اسیدها با کاهش استحکام دی‌الکتریک، احتمال تخلیه الکتریکی و
              خرابی عایق را افزایش می‌دهند.
            </p>
            <h3 className="font-bold mt-4 mb-2">۳.۲. مهار اکسیداسیون</h3>
            <p>
              حذف محصولات اکسیداسیون سبب افزایش عمر روغن و سیستم عایقی می‌شود.
            </p>
            <h3 className="font-bold mt-4 mb-2">۳.۳. کاهش هزینه تعمیرات</h3>
            <p>
              احیای روغن در مقایسه با تعویض کامل آن، بسیار مقرون‌به‌صرفه بوده و
              از خروج ترانسفورماتور از مدار جلوگیری می‌کند.
            </p>
          </section>

          {/* ۴. نقش مواد جاذب */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۴. نقش مواد جاذب در احیای روغن
            </h2>
            <p>
              مواد جاذب شامل بنتونیت، فولررز ارث، آلومینا و سیلیکاژل هستند.
              بنتونیت به دلیل قیمت مناسب، سطح ویژه بالا و ظرفیت تبادل یونی
              مطلوب، پرکاربردترین ماده در سیستم‌های{" "}
              <span className="font-semibold">Regeneration Plant</span> است.
            </p>
          </section>

          {/* ۵. ساختار و ترکیب بنتونیت */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۵. ساختار و ترکیب بنتونیت
            </h2>
            <p>
              بنتونیت عمدتاً از کانی مونتموریلونیت تشکیل شده و ویژگی‌هایی مانند
              سطح ویژه زیاد، خاصیت تورم‌پذیری، بار لایه‌ای منفی و جذب ترکیبات
              قطبی را داراست.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۵.۱. تفاوت بنتونیت سدیمی و کلسیمی
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base border-separate border-spacing-y-2">
                <thead className="text-white/80">
                  <tr>
                    <th className="bg-white/5 px-3 py-2 rounded-xl text-right">
                      نوع
                    </th>
                    <th className="bg-white/5 px-3 py-2 rounded-xl text-right">
                      ویژگی
                    </th>
                    <th className="bg-white/5 px-3 py-2 rounded-xl text-right">
                      کاربرد
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">سدیمی</td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      تورم زیاد، CEC بالا
                    </td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      مناسب برای جذب ترکیبات قطبی
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">کلسیمی</td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      پایداری بیشتر، نیاز به فعال‌سازی اسیدی
                    </td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      بهترین گزینه برای تولید بنتونیت فعال‌شده
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ۶. فرآیند فعال‌سازی + شکل ۲ */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۶. فرایند فعال‌سازی بنتونیت
            </h2>
            <p>
              فعال‌سازی بنتونیت با اسیدهای معدنی (معمولاً H₂SO₄ یا HCl) انجام
              می‌شود که منجر به افزایش سطح ویژه، حذف ناخالصی‌های آهکی و فلزی و
              افزایش قدرت رنگ‌بری می‌گردد. بنتونیت فعال‌شده بهترین گزینه برای
              تصفیه روغن ترانسفورماتور است.
            </p>

            {/* شکل ۲ – واحد تصفیه روغن با بنتونیت */}
            <figure className="mt-3">
              <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                <Image
                  src="/images/articles/transformer-oil-bentonite-2.jpg"
                  alt="دستگاه تصفیه روغن ترانسفورماتور مجهز به واحد بنتونیت"
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
                شکل ۲ – واحد صنعتی احیای روغن ترانسفورماتور با استفاده از
                بنتونیت فعال‌شده
              </figcaption>
            </figure>
          </section>

          {/* ۷. معیارهای انتخاب بنتونیت مناسب */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۷. معیارهای انتخاب بنتونیت مناسب
            </h2>
            <ul className="list-disc pr-6 space-y-1">
              <li>سطح ویژه (BET) بیش از ۱۸۰–۲۵۰ m²/g</li>
              <li>CEC بالا برای جذب ترکیبات قطبی</li>
              <li>توزیع اندازه ذرات در محدوده ۳۰۰–۷۰۰ میکرون</li>
              <li>رطوبت اولیه کمتر از ۱۲٪ برای جلوگیری از ورود آب به روغن</li>
            </ul>
          </section>

          {/* ۸. اثر اندازه ذرات */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۸. اثر اندازه ذرات بر راندمان تصفیه
            </h2>
            <p>
              ذرات ریز، جذب بهتری دارند اما افت فشار بالاتری در ستون‌های جذب
              ایجاد می‌کنند. ذرات درشت، افت فشار کمتری ایجاد کرده ولی ظرفیت جذب
              پایین‌تری دارند. ترکیب بهینه دو بازه‌ی دانه‌بندی، بهترین تعادل بین
              جذب و افت فشار را فراهم می‌کند.
            </p>
          </section>

          {/* ۹. نقش بنتونیت در بهبود ولتاژ شکست */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۹. نقش بنتونیت در بهبود ولتاژ شکست روغن
            </h2>
            <p>
              بنتونیت با جذب رطوبت و ترکیبات قطبی، مسیرهای هدایت الکتریکی را حذف
              کرده و باعث افزایش ولتاژ شکست (BDV) تا حدود ۱۰ تا ۳۰ کیلوولت
              می‌شود.
            </p>
          </section>

          {/* ۱۰. ارزیابی تجربی + شکل ۳ */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۱۰. ارزیابی تجربی و نتایج صنعتی
            </h2>
            <p>مطالعات مختلف صنعتی و آزمایشگاهی نشان داده‌اند:</p>
            <ul className="list-disc pr-6 space-y-1">
              <li>کاهش TAN به میزان حدود ۴۰ تا ۷۰ درصد</li>
              <li>کاهش رنگ (ASTM D1500) به بیش از دو واحد</li>
              <li>افزایش BDV از حدود ۲۰–۴۰ kV به ۵۰–۷۰ kV</li>
              <li>کاهش تشکیل لجن و محصولات اکسیداسیون در روغن</li>
            </ul>

            {/* شکل ۳ – اپراتورها در حال کار با بنتونیت */}
            <figure className="mt-3">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                <Image
                  src="/images/articles/transformer-oil-bentonite-3.jpg"
                  alt="اپراتورها در حال آماده‌سازی بنتونیت برای استفاده در واحد تصفیه روغن"
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
                شکل ۳ – آماده‌سازی و شارژ بنتونیت فعال‌شده در واحد تصفیه روغن
                ترانسفورماتور
              </figcaption>
            </figure>
          </section>

          {/* ۱۱. روش تست پایلوت */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۱۱. روش تست پایلوت برای انتخاب بنتونیت
            </h2>
            <p>مراحل کلی تست پایلوت عبارت‌اند از:</p>
            <ol className="list-decimal pr-6 space-y-1">
              <li>نمونه‌برداری از روغن در حال بهره‌برداری</li>
              <li>انتخاب چند نوع بنتونیت با خصوصیات مختلف</li>
              <li>تعیین مقدار بهینه مصرف (۲ تا ۵ درصد وزنی)</li>
              <li>آزمایش در دماهای ۶۰ تا ۹۰ درجه سانتی‌گراد</li>
              <li>
                اندازه‌گیری پارامترهای خروجی شامل TAN، رنگ، BDV، رطوبت (ppm) و
                پایداری حرارتی
              </li>
            </ol>
          </section>

          {/* ۱۲. استانداردها */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۱۲. استانداردهای مرتبط
            </h2>
            <ul className="list-disc pr-6 space-y-1">
              <li>
                IEC 60422 — راهنمای نگهداری و پایش روغن ترانسفورماتور در تجهیزات
                الکتریکی
              </li>
              <li>IEC 60296 — مشخصات روغن‌های عایقی نو</li>
              <li>ASTM D2668 — ارزیابی خاک‌های سفید (Fullers Earth)</li>
              <li>ASTM D1310 / D6045 — رنگ‌سنجی و تعیین اسیدیته</li>
              <li>IEEE C57.106 — راهنمای احیای روغن ترانسفورماتور</li>
            </ul>
          </section>

          {/* ۱۳. ملاحظات زیست‌محیطی */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۱۳. ملاحظات زیست‌محیطی
            </h2>
            <p>
              بنتونیت مصرف‌شده حاوی ترکیبات اکسیدشده و آلودگی‌های جذب‌شده است.
              از این‌رو:
            </p>
            <ul className="list-disc pr-6 space-y-1">
              <li>می‌توان آن را با عملیات حرارتی تا حدی بازیافت کرد.</li>
              <li>دفن در مناطق کنترل‌شده طبق ضوابط محیط‌زیست ضروری است.</li>
              <li>
                پس از فرآوری حرارتی، امکان استفاده به‌عنوان سوخت کمکی کربنی وجود
                دارد.
              </li>
            </ul>
          </section>

          {/* ۱۴. تحلیل اقتصادی و جمع‌بندی */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۱۴. تحلیل اقتصادی و جمع‌بندی
            </h2>
            <p>
              هزینه کل استفاده از بنتونیت شامل قیمت ماده، مقدار مصرف، هزینه
              احیا، و هزینه دفع است. بنتونیت فعال‌شده با وجود قیمت اولیه بالاتر،
              به دلیل راندمان بیشتر و نیاز به مقدار مصرف کمتر، در نهایت هزینه
              نهایی تصفیه هر لیتر روغن را کاهش می‌دهد.
            </p>
            <p className="mt-2">
              یک بنتونیت مناسب برای تصفیه روغن ترانسفورماتور باید سطح ویژه مناسب،
              CEC بالا، رطوبت کم، دانه‌بندی یکنواخت و قابلیت فعال‌سازی مطلوب
              داشته باشد. انجام آزمون‌های پایلوت برای هر روغن ضروری است، زیرا
              نوع آلودگی‌ها و شرایط بهره‌برداری در هر شبکه متفاوت است. بنتونیت
              فعال‌شده اسیدی به‌عنوان بهترین گزینه صنعتی شناخته شده و در
              استانداردهای معتبر بین‌المللی توصیه شده است.
            </p>
          </section>

          {/* ۱۵. منابع علمی معتبر */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۱۵. منابع علمی معتبر
            </h2>
            <ol className="list-decimal pr-6 space-y-1">
              <li>
                IEC 60422: Mineral insulating oils in electrical equipment –
                Supervision and maintenance guide.
              </li>
              <li>
                IEC 60296: Specifications for unused mineral insulating oils for
                transformers and switchgear.
              </li>
              <li>
                M. Abdel-Hameed, <em>Transformer Oil Regeneration Using Clay
                Treatment Methods</em>, Elsevier, 2018.
              </li>
              <li>
                G. R. Deligianis, <em>Insulating Oils: Their Chemistry and
                Physics</em>, McGraw-Hill, 2013.
              </li>
              <li>
                IEEE Std C57.106-2015, Guide for Acceptance and Maintenance of
                Insulating Oil.
              </li>
              <li>
                Sánchez, A. et al., &quot;Acid-activated bentonite and its
                performance in transformer oil purification&quot;, Applied Clay
                Science, 2017.
              </li>
              <li>
                Muhammad, F., &quot;Enhancement of dielectric properties of
                transformer oil using bentonite clay&quot;, Journal of Electrical
                Engineering, 2020.
              </li>
              <li>
                Pal, A. &amp; Banerjee, D., &quot;Regeneration of used transformer
                oil by adsorption using activated bentonite&quot;, Energy Reports,
                2019.
              </li>
              <li>
                Patel, R., &quot;Comparative study of natural vs. acid-activated
                clays for transformer oil treatment&quot;, Industrial &amp;
                Engineering Chemistry Research, 2021.
              </li>
            </ol>
          </section>
        </div>

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
