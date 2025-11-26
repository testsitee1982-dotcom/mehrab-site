// app/articles/bentonite-for-substation-grounding/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function BentoniteGroundingArticlePage() {
  // استایل مشترک دکمه بازگشت (مثل مقاله قبلی)
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
        {/* دکمه بازگشت – بالای مقاله و سمت راست کارت */}
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
            چگونه بنتونیت کیفیت ارتینگ پست‌های برق را متحول می‌کند؟ (نسخه
            دانشگاهی و گسترش‌یافته)
          </h1>

          <div className="mt-3 text-xs md:text-sm text-white/60">
            ۱۴۰۳/۰۸/۲۵
          </div>

          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-white/70">
            <span>دسته‌بندی:</span>
            <span className="text-amber-300">ارتینگ پست‌های برق</span>
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
              سیستم‌های ارتینگ در پست‌های برق نقش بنیادی در حفاظت الکتریکی،
              کنترل ولتاژ تماس و گام‌ولتاژ، و تضمین عملکرد پایدار تجهیزات دارند.
              یکی از مواد نوین و بسیار مؤثر برای بهبود عملکرد ارتینگ، بنتونیت
              است. بنتونیت به دلیل خواص رئولوژیکی، ظرفیت نگهداشت رطوبت، رسانایی
              مناسب و پایداری شیمیایی، توانسته است مقاومت ویژه خاک را کاهش داده و
              پایداری بلندمدت ارتینگ را افزایش دهد. مقاله حاضر با رویکردی علمی،
              ماهیت بنتونیت، اثرات آن بر عملکرد ارتینگ پست‌های برق، مکانیزم
              بهبود مقاومت خاک، مزایا، محدودیت‌ها و استانداردهای مرتبط را بررسی
              می‌کند.
            </p>
          </section>

          {/* شکل ۱ – بلافاصله بعد از چکیده */}
          <figure className="mt-2">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
              <Image
                src="/images/articles/bentonite-earthing-1.jpg"
                alt="پر کردن اطراف الکترود و هادی مسی با خمیر بنتونیت در چاه ارت"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
                priority
              />
            </div>
            <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
              شکل ۱ – پر کردن اطراف الکترودها با خمیر بنتونیت در چاه ارت
            </figcaption>
          </figure>

          {/* --- ۱. مقدمه --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۱. مقدمه
            </h2>
            <p>
              ارتینگ در پست‌های برق به عنوان یکی از حیاتی‌ترین بخش‌های سیستم
              حفاظت الکتریکی، تضمین‌کننده‌ی ایمنی تجهیزات و کارکنان است. عملکرد
              صحیح سیستم زمین به عواملی مانند مقاومت ویژه خاک، ساختار
              زمین‌شناسی، رطوبت، چگالی، عمق الکترود و نوع مواد بهبوددهنده وابسته
              است. در سال‌های اخیر، مطالعات متعدد نشان داده‌اند که استفاده از
              مواد ارت‌بهبودده (Ground Enhancement Materials) مانند بنتونیت،
              تاثیر قابل توجهی در کاهش مقاومت زمین و افزایش پایداری سیستم داشته
              است.
            </p>
          </section>

          {/* --- ۲. بنتونیت و ویژگی‌های مهندسی آن --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۲. بنتونیت و ویژگی‌های مهندسی آن
            </h2>

            <h3 className="font-bold mb-2">۲.۱. ساختار و ترکیب شیمیایی</h3>
            <p>
              بنتونیت عمدتاً از کانی مونتموریلونیت (یک کانی رسی از گروه
              اسمکتیت‌ها) تشکیل شده است. مهم‌ترین ویژگی‌های مونتموریلونیت
              عبارت‌اند از:
            </p>
            <ul className="list-disc pr-6 space-y-1">
              <li>ساختار لایه‌ای ۲:۱</li>
              <li>ظرفیت تبادل یونی (CEC) بالا</li>
              <li>قابلیت جذب یون‌ها و آب</li>
              <li>رفتار پلاستیک و تشکیل سوسپانسیون پایدار</li>
            </ul>

            <h3 className="font-bold mt-4 mb-2">۲.۲. خاصیت تورم (Swelling)</h3>
            <p>
              بنتونیت سدیمی قادر است حدود ۵ تا ۱۰ برابر حجم خود آب جذب کند. این
              ویژگی باعث می‌شود:
            </p>
            <ul className="list-disc pr-6 space-y-1">
              <li>حجم اطراف الکترودها به‌طور کامل پر شود،</li>
              <li>تماس الکترود و خاک بهینه گردد،</li>
              <li>مقاومت اهمی مسیر جریان کاهش یابد.</li>
            </ul>

            <h3 className="font-bold mt-4 mb-2">۲.۳. هدایت الکتریکی</h3>
            <p>
              به دلیل نوع شبکه‌ی کریستالی و یون‌های قابل تبادل، رسانایی الکتریکی
              بنتونیت از بسیاری از خاک‌های طبیعی بیشتر است و همین موضوع آن را به
              یکی از گزینه‌های اصلی برای بهبود ارتینگ تبدیل کرده است.
            </p>
          </section>

          {/* --- ۳. مشکلات ارتینگ در پست‌های برق --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۳. مشکلات ارتینگ در پست‌های برق
            </h2>
            <ul className="list-disc pr-6 space-y-1">
              <li>مقاومت ویژه بالا در خاک‌های خشک، سنگی یا شنی</li>
              <li>تغییرات شدید رطوبت در فصول مختلف</li>
              <li>افزایش مقاومت در اثر خشک‌سالی</li>
              <li>هزینه زیاد برای افزایش عمق و تعداد الکترودها</li>
              <li>خطرات پایداری حرارتی در هنگام وقوع اتصال‌کوتاه</li>
            </ul>
            <p className="mt-2">
              بنابراین، استفاده از ماده‌ای که بتواند مقاومت خاک را به صورت
              پایدار کاهش دهد و در عین حال از نظر شیمیایی پایدار و غیرخورنده
              باشد، ضروری است.
            </p>
          </section>

          {/* --- ۴. مکانیزم تأثیر بنتونیت --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۴. مکانیزم تأثیر بنتونیت بر بهبود ارتینگ
            </h2>

            <h3 className="font-bold mb-2">۴.۱. کاهش مقاومت ویژه خاک</h3>
            <p>
              نتایج تحقیقات نشان می‌دهد که قرار دادن بنتونیت در اطراف الکترود،
              یک پوسته رسانا با مقاومت ویژه بسیار کمتر از خاک اطراف ایجاد می‌کند.
            </p>
            <p>مقادیر معمول اندازه‌گیری‌شده:</p>
            <ul className="list-disc pr-6 space-y-1">
              <li>مقاومت ویژه خاک شنی: ۵۰۰ تا ۱۰۰۰ اهم‌متر</li>
              <li>مقاومت ویژه بنتونیت مرطوب: حدود ۲ تا ۵۰ اهم‌متر</li>
            </ul>

            <h3 className="font-bold mt-۴ mb-2">۴.۲. حفظ رطوبت بلندمدت</h3>
            <p>
              تورم بنتونیت باعث ذخیره آب در ساختار لایه‌ای می‌شود و در طول زمان
              این رطوبت را به‌تدریج حفظ می‌کند. پایداری رطوبت باعث تثبیت
              مقاومت ارتینگ در فصول خشک می‌گردد.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۴.۳. افزایش سطح تماس الکترود–خاک
            </h3>
            <p>
              پر شدن خلل و فرج اطراف الکترود توسط خمیر بنتونیت، مقاومت انتقال
              (Contact Resistance) را کاهش می‌دهد که بخش مهمی از کل مقاومت
              ارتینگ است.
            </p>

            <h3 className="font-bold mt-4 mb-2">
              ۴.۴. مدیریت جریان‌های بزرگ و پالس‌های گذرا
            </h3>
            <p>
              بنتونیت با ایجاد یک مسیر همگن، جریان‌های ناشی از اتصال کوتاه یا
              صاعقه را بهتر پخش می‌کند و از تمرکز جریان روی بخش‌های محدود
              جلوگیری می‌کند.
            </p>
          </section>

          {/* --- ۵. روش‌های استفاده از بنتونیت --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۵. روش‌های استفاده از بنتونیت در سیستم‌های ارتینگ
            </h2>

            {/* شکل ۲ – تصویر کلی در پست برق */}
            <figure className="mb-4">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                <Image
                  src="/images/articles/bentonite-earthing-2.jpg"
                  alt="کیسه بنتونیت و شبکه ارت در محوطه پست برق"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 900px, 100vw"
                />
              </div>
              <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
                شکل ۲ – اجرای ترنچ افقی ارت و استفاده از بنتونیت در محوطه پست
                برق
              </figcaption>
            </figure>

            <h3 className="font-bold mb-2">۵.۱. چاه ارت عمودی</h3>
            <p>در چاه‌های ارت عمودی، مراحل معمول به شکل زیر است:</p>
            <ul className="list-disc pr-6 space-y-1">
              <li>ایجاد لایه ۱۰ تا ۲۰ سانتی‌متری بنتونیت در اطراف الکترود</li>
              <li>ترکیب بنتونیت با آب برای تشکیل خمیر یا دوغاب پایدار</li>
              <li>پر کردن تدریجی چاه برای جلوگیری از ایجاد حفره و حبس هوا</li>
            </ul>

            {/* شکل ۳ – دوغاب بنتونیت در چاه ارت */}
            <figure className="mt-3">
              <div className="relative w-full aspect-[9/16] md:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-black/40">
                <Image
                  src="/images/articles/bentonite-earthing-3.jpg"
                  alt="ریختن دوغاب بنتونیت در اطراف الکترود ارت در پست برق"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
              </div>
              <figcaption className="mt-2 text-xs md:text-sm text-white/60 text-center">
                شکل ۳ – تزریق دوغاب بنتونیت در چاه ارت برای بهبود تماس
                الکترود–خاک
              </figcaption>
            </figure>

            <h3 className="font-bold mt-4 mb-2">۵.۲. اجرای ارت گسترده (Grid)</h3>
            <p>
              در پست‌های برق، شبکه ارت گسترده (Mesh / Grid) اجرا می‌شود. قرار
              دادن بنتونیت در اطراف مش باعث:
            </p>
            <ul className="list-disc pr-6 space-y-1">
              <li>کاهش مقاومت الکتریکی گسترده</li>
              <li>بهبود یکنواختی پتانسیل سطح زمین</li>
              <li>بهبود شرایط ولتاژ تماس و گام</li>
            </ul>

            <h3 className="font-bold mt-4 mb-2">
              ۵.۳. استفاده در الکترودهای افقی
            </h3>
            <p>
              در خاک‌های با لایه‌های مقاوم، استفاده از بنتونیت در ترنچ‌های
              افقی، به‌ویژه در اطراف هادی‌های نواری یا کابل‌های مسی، بسیار مؤثر
              است و می‌تواند طول مؤثر الکترود را از دید الکتریکی افزایش دهد.
            </p>
          </section>

          {/* --- ۶. مقایسه بنتونیت با سایر مواد --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۶. مقایسه بنتونیت با سایر مواد ارت‌بهبودده
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base border-separate border-spacing-y-2">
                <thead className="text-white/80">
                  <tr>
                    <th className="bg-white/5 px-3 py-2 rounded-xl text-right">
                      ماده
                    </th>
                    <th className="bg-white/5 px-3 py-2 rounded-xl text-right">
                      مزایا
                    </th>
                    <th className="bg-white/5 px-3 py-2 rounded-xl text-right">
                      معایب
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">بنتونیت</td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      پایداری بالا، نگهداشت رطوبت، غیرخورنده
                    </td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      کاهش عملکرد در خاک‌های کاملاً اشباع
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      نمک و ذغال
                    </td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      کاهش اولیه زیاد مقاومت
                    </td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      خورندگی شدید، شستشو توسط بارندگی و ناپایداری بلندمدت
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      مواد کربن‌پایه
                    </td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      پایداری مناسب و عملکرد خوب
                    </td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      هزینه نسبتاً بالا
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      ژل‌های ارتینگ
                    </td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      عملکرد عالی و مقاومت بسیار پایین
                    </td>
                    <td className="bg-white/5 px-3 py-2 rounded-xl">
                      نیاز به تزریق دوره‌ای و قیمت زیاد
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* --- ۷. بررسی‌های میدانی و پژوهشی --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۷. بررسی‌های میدانی و پژوهشی
            </h2>
            <p>مطالعات مختلف نشان داده‌اند:</p>
            <ul className="list-disc pr-6 space-y-1">
              <li>
                کاهش مقاومت چاه ارت تا حدود ۷۰ درصد با بنتونیت سدیمی (Singh,
                2021)
              </li>
              <li>
                پایداری مقاومت زمین در بازه ۱۲ ماهه نسبت به روش نمک–ذغال (Rahman,
                2019)
              </li>
              <li>
                عملکرد مطلوب در خاک‌های با مقاومت ویژه بالاتر از ۳۰۰ اهم‌متر
                مطابق با توصیه‌های استاندارد IEEE Std 80-2013
              </li>
            </ul>
            <p className="mt-2">
              در پروژه‌های واقعی پست‌های برق، نتایج مشابهی گزارش شده و استفاده از
              بنتونیت به‌عنوان راهکار اقتصادی و پایدار مورد تأیید قرار گرفته
              است.
            </p>
          </section>

          {/* --- ۸. محدودیت‌ها --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۸. محدودیت‌های استفاده
            </h2>
            <ul className="list-disc pr-6 space-y-1">
              <li>اشباع کامل خاک، تورم بنتونیت را تا حدی بی‌اثر می‌کند.</li>
              <li>اجرای غیراصولی می‌تواند عملکرد را به شدت کاهش دهد.</li>
              <li>کیفیت بنتونیت سدیمی باید مطابق استانداردهای معتبر باشد.</li>
            </ul>
          </section>

          {/* --- ۹. نتیجه‌گیری --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۹. نتیجه‌گیری
            </h2>
            <p>
              بنتونیت با ویژگی‌های منحصربه‌فرد فیزیکی، شیمیایی و الکتریکی خود،
              یکی از مؤثرترین مواد برای بهبود عملکرد ارتینگ پست‌های برق به‌شمار
              می‌آید. این ماده با کاهش مقاومت ویژه خاک، حفظ رطوبت، افزایش سطح
              تماس الکترود و بهبود پایداری در برابر تغییرات جوی، نقشی کلیدی در
              افزایش ایمنی شبکه برق ایفا می‌کند. با توجه به مطالعات معتبر و
              تجربه‌های میدانی، استفاده از بنتونیت در طراحی سیستم‌های ارتینگ
              مدرن به‌طور جدی توصیه می‌شود.
            </p>
          </section>

          {/* --- ۱۰. منابع --- */}
          <section>
            <h2
              className="text-lg md:text-xl font-bold mb-3"
              style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
            >
              ۱۰. منابع (رفرنس‌ها)
            </h2>
            <ol className="list-decimal pr-6 space-y-1">
              <li>
                IEEE Std 80-2013, Guide for Safety in AC Substation Grounding.
              </li>
              <li>
                IEEE Std 142-2007, Grounding of Industrial and Commercial Power
                Systems.
              </li>
              <li>
                Singh, A. et al. (2021). Effect of Bentonite on Soil Resistivity
                in Grounding Systems. International Journal of Electrical
                Engineering &amp; Technology.
              </li>
              <li>
                Rahman, M. (2019). Performance Comparison of Ground Enhancement
                Materials. Journal of Power Systems.
              </li>
              <li>
                Sverak, J. (2018). Soil Resistivity and Grounding System Design.
                Elsevier.
              </li>
              <li>
                Zeng, R. (2014). Grounding Design and Testing for Electrical
                Safety. CRC Press.
              </li>
              <li>
                Faruque, M. (2020). Advanced Grounding Techniques in High Voltage
                Substations. IEEE Transactions on Power Delivery.
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
