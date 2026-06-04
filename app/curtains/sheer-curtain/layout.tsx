import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/curtains/sheer-curtain",
  },
  title: "Premium Sheer Curtains in Chennai | Custom Light-Filtering Drapes & Installation",
  description: "Luxury sheer curtains in Chennai for beautiful, natural light-filtering. Custom stitched linen sheers, transparent drapes, and professional installation with free home measurements.",
  keywords: [
    "Sheer Curtains Chennai",
    "Linen Sheers Chennai",
    "Custom Sheer Curtains",
    "Light Filtering Curtains Chennai",
    "Transparent Drapes Chennai",
    "Curtain Installation Chennai"
  ],
};

export default function SheerCurtainsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
