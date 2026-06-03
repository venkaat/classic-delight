import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/curtains/ripple",
  },
  title: "Premium Ripple Fold Curtains in Chennai | Modern S-Wave Custom Drapes",
  description: "Luxury ripple fold curtains in Chennai. We offer customized S-Wave drapes, sheer curtains, motorized options, and professional installation with free home measurements.",
  keywords: [
    "Ripple Fold Curtains Chennai",
    "S-Wave Curtains Chennai",
    "Motorized Ripple Curtains Chennai",
    "Modern Wave Curtains",
    "Custom Ripple Fold Drapery",
    "Curtain Installation Chennai"
  ],
};

export default function RippleCurtainsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
