import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blinds/zebra",
  },
  title: "Premium Zebra Blinds in Chennai | Modern Dual-Layer Light Control | Classic Delight",
  description: "Elegantly designed zebra blinds in Chennai. Classic Delight offers custom dual-layer fabric panels, day-night light filtering controls, and motorized zebra blinds for modern residences.",
  keywords: [
    "Zebra Blinds Chennai",
    "Dual Layer Blinds Chennai",
    "Day and Night Blinds",
    "Custom Zebra Shades",
    "Motorized Zebra Blinds",
    "Luxury Home Blinds Chennai"
  ],
};

export default function ZebraBlindsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
