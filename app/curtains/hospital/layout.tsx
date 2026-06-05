import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/curtains/hospital",
  },
  title: "Premium Hospital Curtains in Chennai | Anti-Bacterial Medical Cubicle Tracks",
  description: "Specially designed antibacterial, flame-retardant hospital curtains and medical cubicle tracks in Chennai. Perfect for clinics, hospitals, and wellness centers with professional layout installations by Classic Delight.",
  keywords: [
    "Hospital Curtains Chennai",
    "Medical Cubicle Curtains Chennai",
    "Anti-bacterial Curtains",
    "Clinic Track Curtains",
    "Flame Retardant Drapes Chennai",
    "Hospital Track Installation"
  ],
};

export default function HospitalCurtainsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
