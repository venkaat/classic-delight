import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.classicdelight.in/blinds",
  },
  title: "Window Blinds in Chennai | Custom Zebra, Roller & Wooden Blinds | Classic Delight",
  description: "Shop premium window blinds in Chennai. Explore top-quality Roman blinds, Zebra blinds, automatic roller blinds, PVC blinds, and handcrafted wooden blinds for luxury homes and office spaces.",
  keywords: ["Blinds Chennai", "Zebra Blinds Chennai", "Roller Blinds Chennai", "Wooden Blinds Chennai", "Custom Blinds Online"],
};

export default function BlindsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
