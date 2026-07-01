import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تاییدیه ها و گواهینامه ها",
  description:
    "گالری تاییدیه‌ها، گواهینامه‌ها و مستندات فنی رعد و برق مهراب در حوزه بنتونیت ارتینگ و مواد کاهنده مقاومت زمین.",
  alternates: {
    canonical: "/approvals",
  },
  openGraph: {
    title: "تاییدیه ها و گواهینامه های رعد و برق مهراب",
    description:
      "مشاهده تاییدیه‌ها، گواهینامه‌ها و مستندات فنی رعد و برق مهراب.",
    url: "/approvals",
    type: "website",
  },
};

const approvals = [
  { title: "تاییدیه شماره 1", src: "/images/approvals/approval-01.jpg" },
  { title: "تاییدیه شماره 2", src: "/images/approvals/approval-02.jpg" },
  { title: "تاییدیه شماره 3", src: "/images/approvals/approval-03.jpg" },
  { title: "تاییدیه شماره 4", src: "/images/approvals/approval-04.jpg" },
  { title: "تاییدیه شماره 5", src: "/images/approvals/approval-05.jpg" },
  { title: "تاییدیه شماره 6", src: "/images/approvals/approval-06.jpg" },
  { title: "تاییدیه شماره 7", src: "/images/approvals/approval-07.jpg" },
  { title: "تاییدیه شماره 8", src: "/images/approvals/approval-08.jpg" },
  { title: "تاییدیه شماره 9", src: "/images/approvals/approval-09.jpg" },
  { title: "تاییدیه شماره 10", src: "/images/approvals/approval-10.jpg" },
  { title: "تاییدیه شماره 11", src: "/images/approvals/approval-11.jpg" },
];

export default function ApprovalsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <article
        className="bg-black/20 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl"
        dir="rtl"
      >
        <div className="mb-6 flex justify-start">
          <Link
            href="/"
            className="inline-block px-5 py-2 rounded-xl bg-pink-700/20 border border-pink-400/60 text-white text-sm md:text-base transition-all hover:bg-pink-700/35 hover:border-pink-200 backdrop-blur-sm"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت
          </Link>
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-8 text-right"
          style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
        >
          تاییدیه ها
        </h1>

        <p
          className="text-white/80 text-base md:text-lg leading-8 mb-8 text-right"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          گالری تاییدیه‌ها، گواهینامه‌ها و مستندات فنی رعد و برق مهراب.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvals.map((item, index) => (
            <a
              key={index}
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl overflow-hidden border border-white/10 bg-[#07153f] p-4 shadow-xl block transition hover:border-white/30 hover:scale-[1.01]"
            >
              <h2
                className="text-white text-lg font-bold mb-3 text-right"
                style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
              >
                {item.title}
              </h2>

              <img
                src={item.src}
                alt={item.title + " رعد و برق مهراب"}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-contain rounded-xl bg-black cursor-zoom-in"
              />
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <Link
            href="/"
            className="inline-block px-5 py-2 rounded-xl bg-pink-700/20 border border-pink-400/60 text-white text-sm md:text-base transition-all hover:bg-pink-700/35 hover:border-pink-200 backdrop-blur-sm"
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت
          </Link>
        </div>
      </article>
    </div>
  );
}