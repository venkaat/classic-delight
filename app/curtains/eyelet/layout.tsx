import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/curtains/eyelet",
  },
  title: "Premium Eyelet Curtains in Chennai | Custom Grommet Drapery & Installation",
  description: "Luxury eyelet curtains in Chennai with custom metal grommet headers. We offer tailored ring curtains, sheers, blackout options, and professional installation with free home measurements.",
  keywords: [
    "Eyelet Curtains Chennai",
    "Grommet Curtains Chennai",
    "Custom Eyelet Curtains",
    "Metal Ring Curtains Chennai",
    "Modern Eyelet Drapery",
    "Curtain Installation Chennai"
  ],
};

export default function EyeletCurtainsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
