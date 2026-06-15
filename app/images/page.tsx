import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تصاویر پروژه‌ها و محصولات",
  description:
    "گالری تصاویر محصولات، بسته‌بندی، پروژه‌ها و کاربردهای رعد و برق مهراب در حوزه بنتونیت ارتینگ و مواد کاهنده مقاومت زمین.",
  alternates: {
    canonical: "/images",
  },
  openGraph: {
    title: "تصاویر پروژه‌ها و محصولات رعد و برق مهراب",
    description:
      "مشاهده تصاویر محصولات و پروژه‌های اجرایی رعد و برق مهراب.",
    url: "/images",
    type: "website",
  },
};

const images = [
  {
    title: "پروژه حمل مواد کاهنده مقاومت زمین مهرابی",
    src: "/images/gallery/ground-enhancement-material-transport.jpg"
  },
  {
    title: "پروژه اجرایی سیستم ارت و مواد کاهنده مقاومت",
    src: "/images/gallery/earthing-system-installation.jpg"
  },
  {
    title: "کامیون حمل بنتونیت و مواد ارتینگ مهرابی",
    src: "/images/gallery/bentonite-delivery-truck.jpg"
  },
  {
    title: "ارسال محصولات بنتونیت کاهنده مقاومت",
    src: "/images/gallery/conductive-bentonite-shipment.jpg"
  },
  {
    title: "پروژه اجرایی سیستم زمین و ارتینگ",
    src: "/images/gallery/grounding-project-execution.jpg"
  },
  {
    title: "ناوگان حمل محصولات مهرابی",
    src: "/images/gallery/mehrabi-logistics-truck.jpg"
  },
  {
    title: "بسته بندی مواد کاهنده مقاومت زمین",
    src: "/images/gallery/ground-enhancement-material-packaging.jpg"
  },
  {
    title: "سوپر بنتونیت کاهنده مقاومت مدل LRM",
    src: "/images/gallery/lrm-bentonite-bag.jpg"
  },
  {
    title: "سوپر ژل کاهنده مقاومت زمین مهرابی",
    src: "/images/gallery/lrm-grounding-gel.jpg"
  },
  {
    title: "انبار مواد کاهنده مقاومت زمین",
    src: "/images/gallery/bentonite-warehouse.jpg"
  },
  {
    title: "بسته بندی سوپر بنتونیت سدیمی",
    src: "/images/gallery/sodium-bentonite-packaging.jpg"
  },
  {
    title: "محصول بنتونیت ارتینگ صادراتی",
    src: "/images/gallery/export-bentonite-product.jpg"
  },
  {
    title: "سوپر بنتونیت کاهنده مقاومت ارت",
    src: "/images/gallery/earth-resistance-reducer.jpg"
  },
  {
    title: "مواد کاهنده مقاومت سیستم ارت",
    src: "/images/gallery/ground-enhancement-material.jpg"
  },
  {
    title: "انبار و ذخیره بنتونیت مهرابی",
    src: "/images/gallery/bentonite-storage.jpg"
  },
  {
    title: "محصول بنتونیت رسانا مهرابی",
    src: "/images/gallery/conductive-bentonite-mehrabi.jpg"
  },
  {
    title: "بسته بندی بنتونیت صنعتی",
    src: "/images/gallery/industrial-bentonite-bag.jpg"
  },
  {
    title: "محصولات ارتینگ مهرابی",
    src: "/images/gallery/mehrabi-grounding-products.jpg"
  },
  {
    title: "بسته بندی بنتونیت میکرونیزه",
    src: "/images/gallery/micronized-bentonite.jpg"
  },
  {
    title: "انبار مواد ارتینگ مهرابی",
    src: "/images/gallery/grounding-material-storage.jpg"
  },
  {
    title: "کارخانه تولید مواد کاهنده مقاومت",
    src: "/images/gallery/ground-enhancement-factory.jpg"
  },
  {
    title: "خط تولید بنتونیت مهرابی",
    src: "/images/gallery/bentonite-production-line.jpg"
  },
  {
    title: "تولید مواد ارتینگ و سیستم زمین",
    src: "/images/gallery/earthing-material-production.jpg"
  },
  {
    title: "فرآیند بسته بندی بنتونیت",
    src: "/images/gallery/bentonite-packaging-process.jpg"
  },
  {
    title: "انبار محصولات مهرابی",
    src: "/images/gallery/mehrabi-product-warehouse.jpg"
  },
  {
    title: "ذخیره و نگهداری مواد ارتینگ",
    src: "/images/gallery/grounding-material-storage-area.jpg"
  },
  {
    title: "گواهینامه محصولات مهرابی",
    src: "/images/gallery/product-certification.jpg"
  },
  {
    title: "بروشور فنی مواد کاهنده مقاومت",
    src: "/images/gallery/technical-catalog.jpg"
  },
  {
    title: "تصاویر پروژه های اجرایی ارتینگ",
    src: "/images/gallery/grounding-project-gallery.jpg"
  },
  {
    title: "محصولات کاهنده مقاومت زمین مهرابی",
    src: "/images/gallery/mehrabi-ground-enhancement-products.jpg"
  }
];

export default function ImagesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <article
        className="bg-black/20 border border-white/10 rounded-3xl px-4 md:px-8 py-8 md:py-10 shadow-2xl"
        dir="rtl"
      >
        <div className="mb-6 flex justify-start">
          <Link
            href="/"
            className="
              inline-block px-5 py-2 rounded-xl
              bg-pink-700/20 border border-pink-400/60
              text-white text-sm md:text-base transition-all
              hover:bg-pink-700/35 hover:border-pink-200
              backdrop-blur-sm
            "
            style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
          >
            ← بازگشت
          </Link>
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-8 text-right"
          style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
        >
          تصاویر
        </h1>

        <p
          className="text-white/80 text-base md:text-lg leading-8 mb-8 text-right"
          style={{ fontFamily: "BNazanin, Tahoma, system-ui" }}
        >
          گالری تصاویر محصولات، بسته‌بندی و پروژه‌های اجرایی رعد و برق مهراب.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-white/10 bg-[#07153f] p-4 shadow-xl"
            >
              <h2
                className="text-white text-lg font-bold mb-3 text-right"
                style={{ fontFamily: "BTitr, Tahoma, system-ui" }}
              >
                {image.title}
              </h2>

              <img
                src={image.src}
                alt={image.title + " رعد و برق مهراب"}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/3] object-cover rounded-xl bg-black"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <Link
            href="/"
            className="
              inline-block px-5 py-2 rounded-xl
              bg-pink-700/20 border border-pink-400/60
              text-white text-sm md:text-base transition-all
              hover:bg-pink-700/35 hover:border-pink-200
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
