import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "رعد و برق محراب",
  description: "تأمین‌کننده تخصصی مواد و تجهیزات صنعت برق",
  other: {
    enamad: "4266105",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
