import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pleated Curtains in Chennai | Custom Pinch Pleated Drapery | Classic Delight",
  description: "Add classic sophistication to your rooms with custom-stitched pinch pleated curtains in Chennai. Handcrafted fabrics, custom sizing, and professional installation by Classic Delight window specialists.",
  keywords: ["Pleated Curtains Chennai", "Pinch Pleated Curtains", "Custom Pleated Drapes Chennai"],
};

export default function PleatedCurtainsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
