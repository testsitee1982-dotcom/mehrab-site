import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ویدیوهای پروژه‌ها و محصولات",
  description:
    "مشاهده ویدیوهای محصولات، بسته‌بندی و پروژه‌های اجرایی رعد و برق مهراب در حوزه بنتونیت ارتینگ و مواد کاهنده مقاومت زمین.",
  alternates: {
    canonical: "/videos",
  },
  openGraph: {
    title: "ویدیوهای رعد و برق مهراب",
    description: "ویدیوهای محصولات و پروژه‌های رعد و برق مهراب.",
    url: "/videos",
    type: "website",
  },
};

const videos = [
  { title: "ویدیوی شماره ۱", src: "/videos/video1.mp4" },
  { title: "ویدیوی شماره ۲", src: "/videos/video2.mp4" },
  { title: "ویدیوی شماره ۳", src: "/videos/video3.mp4" },
  { title: "ویدیوی شماره ۴", src: "/videos/video4.mp4" },
  { title: "ویدیوی شماره ۵", src: "/videos/video5.mp4" },
  { title: "ویدیوی شماره ۶", src: "/videos/video6.mp4" },
  { title: "ویدیوی شماره ۷", src: "/videos/video7.mp4" },
  { title: "ویدیوی شماره ۸", src: "/videos/video8.mp4" },
  { title: "ویدیوی شماره ۹", src: "/videos/video9.mp4" },
  { title: "ویدیوی شماره ۱۰", src: "/videos/video10.mp4" },
  { title: "ویدیوی شماره ۱۱", src: "/videos/video11.mp4" },
  { title: "ویدیوی شماره ۱۲", src: "/videos/video12.mp4" },
  { title: "ویدیوی شماره ۱۳", src: "/videos/video13.mp4" },
  { title: "ویدیوی شماره ۱۴", src: "/videos/video14.mp4" },
  { title: "ویدیوی شماره ۱۵", src: "/videos/video15.mp4" },
  { title: "ویدیوی شماره ۱۶", src: "/videos/video16.mp4" },
  { title: "ویدیوی شماره ۱۷", src: "/videos/video17.mp4" },
  { title: "ویدیوی شماره ۱۸", src: "/videos/video18.mp4" },
  { title: "ویدیوی شماره ۱۹", src: "/videos/video19.mp4" },
  { title: "ویدیوی شماره ۲۰", src: "/videos/video20.mp4" },
];

export default function VideosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <article
        className="bg-black/20 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl"
        dir="rtl"
      >
        {/* دکمه بازگشت بالا */}
        <div className="mb-6 flex justify-start">
          <Link
            href="/"
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

        {/* عنوان */}
        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-8 text-right"
          style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
        >
          ویدیوها
        </h1>

        {/* ویدیوها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-white/10 bg-[#07153f] p-4 shadow-xl"
            >
              <h2
                className="text-white text-lg font-bold mb-3 text-right"
                style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
              >
                {video.title}
              </h2>

              <video
                controls
                preload="metadata"
                className="w-full rounded-xl bg-black"
              >
                <source src={video.src} type="video/mp4" />
                مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
              </video>
            </div>
          ))}
        </div>

        {/* دکمه بازگشت پایین */}
        <div className="mt-10 flex justify-start">
          <Link
            href="/"
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