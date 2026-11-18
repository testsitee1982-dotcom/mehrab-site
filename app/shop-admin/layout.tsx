import type { Metadata } from "next";
export const metadata: Metadata = { robots: { index: false, follow: false } };
export default function ShopAdminLayout({children}:{children:React.ReactNode}) {return children;}
