import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/curtains/blackout",
  },
  title: "Premium Blackout Curtains in Chennai | Thermal & Noise Isolating Drapes | Classic Delight",
  description: "Shop custom 100% blackout curtains in Chennai from Classic Delight. Explore thermal insulating, noise reduction, and sleep sanctuary curtains for bedrooms, nurseries, and media rooms.",
  keywords: [
    "Blackout Curtains Chennai",
    "Noise Reduction Curtains Chennai",
    "Thermal Insulating Curtains",
    "Sleep Sanctuary Drapes Chennai",
    "Media Room Blackout Curtains",
    "Energy Saving Curtains Chennai",
    "100% Blackout Drapes"
  ],
};

export default function BlackoutCurtainsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
