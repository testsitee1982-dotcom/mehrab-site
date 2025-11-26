"use client";

import React from "react";
import {
  dictionaries,
  languageMeta,
  useRTL,
  Icon,
} from "@/app/page";

type LangKey = keyof typeof languageMeta;

// کامپوننتی که در صفحه‌ی اصلی و layout استفاده می‌شود
export function SiteFooter({ lang }: { lang?: LangKey }) {
  const safeLang: LangKey = lang ?? "fa";

  return (
    <>
      <Contact lang={safeLang} />
      <Footer lang={safeLang} />
    </>
  );
}

function Footer({ lang }: { lang?: LangKey }) {
  const safeLang: LangKey = lang ?? "fa";
  const dict = dictionaries[safeLang];
  const isRTL = useRTL(safeLang);

  return (
    <footer className="mt-10 border-t border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid md:grid-cols-4 gap-8">
        {/* لوگوی رعد و برق مهراب */}
        <div className={isRTL ? "text-right" : "text-left"}>
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-mehrab.png"
              alt="رعد و برق مهراب"
              className="h-10 w-auto object-contain"
            />
            <div>
              <div
                className="text-white font-bold text-lg"
                style={{ fontFamily: "BMitra, Tahoma, system-ui" }}
              >
                رعد و برق مهراب
              </div>
              <div
                className="text-white/70 text-sm"
                style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
              >
                راهکارهای پیشرفته بنتونیت برای صنعت برق
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2 text-white/60">
            <a className="p-2 rounded-lg hover:bg-white/10" href="#" aria-label="LinkedIn">
              <Icon name="Linkedin" />
            </a>
            <a className="p-2 rounded-lg hover:bg-white/10" href="#" aria-label="Twitter">
              <Icon name="Twitter" />
            </a>
            <a className="p-2 rounded-lg hover:bg-white/10" href="#" aria-label="Instagram">
              <Icon name="Instagram" />
            </a>
            <a className="p-2 rounded-lg hover:bg-white/10" href="#" aria-label="YouTube">
              <Icon name="Youtube" />
            </a>
          </div>
        </div>

        {/* لینک‌ها */}
        <div>
          <div className="text-white font-semibold mb-3">
            {dict.footer.quickLinks}
          </div>
          <ul
            className={
              "space-y-2 text-white/70 " + (isRTL ? "text-right" : "")
            }
          >
            <li>
              <a href="#products" className="hover:text-white">
                {dictionaries[safeLang].nav.products}
              </a>
            </li>
            <li>
              <a href="#applications" className="hover:text-white">
                {dictionaries[safeLang].nav.solutions}
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-white">
                {dictionaries[safeLang].nav.resources}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                {dictionaries[safeLang].nav.company}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                {dictionaries[safeLang].nav.contact}
              </a>
            </li>
          </ul>
        </div>

        {/* قوانین */}
        <div>
          <div className="text-white font-semibold mb-3">
            {dict.footer.policies}
          </div>
          <ul
            className={
              "space-y-2 text-white/70 " + (isRTL ? "text-right" : "")
            }
          >
            <li>
              <a href="#" className="hover:text-white">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#sitemap" className="hover:text-white">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* خبرنامه */}
        <div>
          <div className="text-white font-semibold mb-3">
            {dict.footer.newsletter}
          </div>
          <form className="flex gap-2">
            <input
              className="flex-1 px-3 py-2 rounded-xl bg-white/10 text-white placeholder:text-white/50 outline-none"
              placeholder="you@company.com"
            />
            <button className="px-4 py-2 rounded-xl bg-[var(--brand-primary)] text-white font-semibold">
              Subscribe
            </button>
          </form>
          <div className="text-white/50 text-xs mt-2">
            No spam — unsubscribe anytime.
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="border-t border-white/10 py-4 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} رعد و برق مهراب. همه حقوق محفوظ است.
      </div>
    </footer>
  );
}

function Contact({ lang }: { lang?: LangKey }) {
  const safeLang: LangKey = lang ?? "fa";
  const dict = dictionaries[safeLang];
  const isRTL = useRTL(safeLang);

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* فرم تماس */}
        <div>
          <h3
            className={`text-2xl md:text-3xl font-bold text-white mb-4 ${
              isRTL ? "text-right" : "text-left"
            }`}
            style={{ fontFamily: "BMitra, Tahoma, system-ui" }}
          >
            {dict.contactUs}
          </h3>

          <form
            className={
              "grid grid-cols-2 gap-3 " + (isRTL ? "text-right" : "")
            }
          >
            <input
              className="col-span-2 md:col-span-1 px-3 py-2 rounded-xl bg-white/10 text-white placeholder:text-white/50 outline-none"
              placeholder="Full name"
            />
            <input
              className="col-span-2 md:col-span-1 px-3 py-2 rounded-xl bg-white/10 text-white placeholder:text-white/50 outline-none"
              placeholder="Email"
            />
            <input
              className="col-span-2 px-3 py-2 rounded-xl bg-white/10 text-white placeholder:text-white/50 outline-none"
              placeholder="Company"
            />
            <textarea
              className="col-span-2 px-3 py-2 rounded-xl bg-white/10 text-white placeholder:text-white/50 outline-none min-h-[120px]"
              placeholder="Tell us about your application..."
            />
            <button className="col-span-2 px-4 py-2 rounded-xl bg-[var(--brand-accent)] text-black font-semibold">
              {dict.hero.ctaPrimary}
            </button>
          </form>
        </div>

        {/* اطلاعات تماس + نقشه گوگل */}
        <div className="rounded-2xl border border-white/10 overflow-hidden">
          <div className="h-64 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1145.579018862992!2d51.426449852334486!3d35.6970229063302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e018446ceefcd%3A0xd7cfa7e955bd1de!2z2KfYs9iq2KfZhiDYqtmH2LHYp9mG2Iwg2KrZh9ix2KfZhtiMINmF2YbYt9mC2Ycg27HbstiMINqp2YjahtmHINin2YXbjNmGINiy2KfYr9mH2Iwg2KfbjNix2KfZhg!5e0!3m2!1sfa!2s!4v1762850871661!5m2!1sfa!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="p-4 grid grid-cols-2 gap-3 text-white/80 text-sm bg-black/30">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} /> +98 21 0000 0000
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={16} /> sales@bentonpower.com
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <Icon name="MapPin" size={16} /> تهران، کوچه امین‌زاده، منطقه ۱۲
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} /> شنبه تا پنج‌شنبه، ۸:۰۰ تا ۱۷:۰۰
            </div>
            <a
              href="https://www.google.com/maps/place/%DA%A9%D9%88%DA%86%D9%87+%D8%A7%D9%85%DB%8C%D9%86+%D8%B2%D8%A7%D8%AF%D9%87%D8%8C+%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%D8%8C+%D8%AA%D9%87%D8%B1%D8%A7%D9%86%E2%80%AD/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--brand-primary)] hover:underline"
            >
              <Icon name="ChevronRight" size={16} /> {dict.viewOnMap}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
