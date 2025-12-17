"use client";

import React from "react";
import { dictionaries, languageMeta, useRTL, Icon } from "@/app/page";

type LangKey = keyof typeof languageMeta;

// ✅ این همان چیزی است که layout.tsx ازش import می‌کند
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
      {/* ✅ وقتی RTL است، ترتیب ستون‌ها برعکس می‌شود تا ستون 4 بیاید راست */}
      <div
        className={
          "max-w-7xl mx-auto px-4 md:px-6 py-10 grid md:grid-cols-4 gap-8 " +
          (isRTL ? "md:[direction:rtl]" : "md:[direction:ltr]")
        }
      >
        {/* لوگوی رعد و برق مهراب */}
        <div className={isRTL ? "text-right" : "text-left"} style={{ direction: isRTL ? "rtl" : "ltr" }}>
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
        <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
          <div className="text-white font-semibold mb-3">{dict.footer.quickLinks}</div>
          <ul className={"space-y-2 text-white/70 " + (isRTL ? "text-right" : "")}>
            <li><a href="#products" className="hover:text-white">{dictionaries[safeLang].nav.products}</a></li>
            <li><a href="#applications" className="hover:text-white">{dictionaries[safeLang].nav.solutions}</a></li>
            <li><a href="#blog" className="hover:text-white">{dictionaries[safeLang].nav.resources}</a></li>
            <li><a href="#about" className="hover:text-white">{dictionaries[safeLang].nav.company}</a></li>
            <li><a href="#contact" className="hover:text-white">{dictionaries[safeLang].nav.contact}</a></li>
          </ul>
        </div>

        {/* قوانین */}
        <div style={{ direction: isRTL ? "rtl" : "ltr" }}>
          <div className="text-white font-semibold mb-3">{dict.footer.policies}</div>
          <ul className={"space-y-2 text-white/70 " + (isRTL ? "text-right" : "")}>
            <li><a href="#" className="hover:text-white">Terms &amp; Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Return Policy</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#sitemap" className="hover:text-white">Sitemap</a></li>
          </ul>
        </div>

        {/* ✅ ستون خبرنامه + اینماد (در RTL می‌رود سمت راست فوتر) */}
        <div
          className={
            "flex flex-col " + (isRTL ? "items-end text-right" : "items-start text-left")
          }
          style={{ direction: isRTL ? "rtl" : "ltr" }}
        >
          <div className="text-white font-semibold mb-3">{dict.footer.newsletter}</div>

          <form className={"flex gap-2 w-full " + (isRTL ? "justify-end" : "justify-start")}>
            <input
              className="flex-1 px-3 py-2 rounded-xl bg-white/10 text-white placeholder:text-white/50 outline-none"
              placeholder="you@company.com"
            />
            <button className="px-4 py-2 rounded-xl bg-[var(--brand-primary)] text-white font-semibold">
              Subscribe
            </button>
          </form>

          <div className="text-white/50 text-xs mt-2">No spam — unsubscribe anytime.</div>

          {/* ✅ اینماد (راست‌چین + کلیک‌پذیر قطعی) */}
          <div className="mt-6 relative z-50 w-full flex justify-end">
            <div className="text-right">
              <div className="text-white font-semibold mb-3">اینماد</div>

              <span
                style={{
                  display: "inline-block",
                  position: "relative",
                  zIndex: 9999,
                  pointerEvents: "auto",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=5205347&Code=vxvhPMTUIDCfbz4gGKBAdPNu31vcaV2R' style='display:inline-block; pointer-events:auto;'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=5205347&Code=vxvhPMTUIDCfbz4gGKBAdPNu31vcaV2R' alt='اینماد' style='cursor:pointer; width:125px; height:auto; display:block;' code='vxvhPMTUIDCfbz4gGKBAdPNu31vcaV2R'></a>",
                }}
              />

              <div className="text-white/50 text-xs mt-2">
                برای مشاهده مشخصات، روی لوگو کلیک کنید.
              </div>
            </div>
          </div>
        </div>
      </div>

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
      <div className="text-white/70">{dict.contactUs}</div>
    </section>
  );
}
