import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.classicdelight.in/ai",
  },
  title: "Atelier AI Curtain & Blind Design Advisor | Classic Delight",
  description: "Instantly chat with our Atelier AI Window Decor specialist. Get recommendations on fabrics, color coordination, and custom setups tailored to your room type, style, and lighting conditions.",
};

export default function AILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
