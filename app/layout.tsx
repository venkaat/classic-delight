import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
