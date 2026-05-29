import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classic Delight AI Studio | Real-Time Custom Curtain & Drapery Visualizer",
  description: "Experience the future of home styling. Get instant pricing estimates with our AI Curtain Recommendation engine and try our interactive drag-and-scale 3D curtain visualizer.",
  keywords: [
    "AI Curtain Visualizer Chennai",
    "Custom Curtain Estimator",
    "Window Curtain Shop Virugambakkam",
    "Luxury Blinds Chennai",
    "Mosquito Nets Chennai",
    "Classic Delight Chennai",
    "Curtains Anna Nagar",
    "Custom Drapery Designer India"
  ],
  openGraph: {
    title: "Classic Delight AI Studio | Custom Curtain & Drapery Visualizer",
    description: "Design your windows in real-time with our instant fabric recommendation engine and beautiful drag-and-scale preview tool.",
    images: "/images/fabrics/linen.jpg"
  }
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
