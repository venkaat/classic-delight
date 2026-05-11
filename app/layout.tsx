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
    default: "Classic Delight | Curtains & Blinds in Chennai",
    template: "%s | Classic Delight",
  },
  description:
    "Premium curtains, blinds, zebra blinds, wooden blinds and mosquito nets in Chennai. Custom window solutions and professional installation by Classic Delight in Virugambakkam.",
};
