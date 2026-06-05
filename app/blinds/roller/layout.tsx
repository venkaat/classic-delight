import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blinds/roller",
  },
  title: "Premium Roller Blinds in Chennai | Blackout & Office Window Shades | Classic Delight",
  description: "Shop custom roller blinds in Chennai from Classic Delight. Discover premium blackout roller shades, automatic motorized blinds, and elegant light-filtering solutions for home and office windows.",
  keywords: [
    "Roller Blinds Chennai",
    "Blackout Roller Blinds Chennai",
    "Office Roller Blinds",
    "Motorized Roller Shades",
    "Automatic Blinds Chennai",
    "UV Protection Window Shades"
  ],
};

export default function RollerBlindsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
