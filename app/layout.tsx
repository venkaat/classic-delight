import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-998359476"
  strategy="afterInteractive"
/>

<Script id="google-ads" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-998359476');
  `}
</Script>


        {children}
        
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: {
    default: "Curtains in Chennai | Custom Curtains & Blinds | Classic Delight",
    template: "%s | Classic Delight",
  },
  description:
    "Premium curtains, blinds and mosquito nets in Chennai including Virugambakkam, Anna Nagar, Vadapalani and KK Nagar.",
};
