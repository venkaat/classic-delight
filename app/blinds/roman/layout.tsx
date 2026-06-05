import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blinds/roman",
  },
  title: "Premium Roman Blinds in Chennai | Custom Fabric Window Shades | Classic Delight",
  description: "Elegantly crafted fabric Roman blinds in Chennai. Classic Delight offers tailor-made Roman shades, blackout linings, and stylish folding window treatments for residential spaces.",
  keywords: [
    "Roman Blinds Chennai",
    "Fabric Roman Blinds Chennai",
    "Custom Roman Shades",
    "Folding Window Blinds",
    "Residential Blinds Chennai",
    "Luxury Roman Blinds"
  ],
};

export default function RomanBlindsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
