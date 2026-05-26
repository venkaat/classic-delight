import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Solutions Showcase | Curtain & Blind Installation Photos | Classic Delight",
  description: "Explore our project gallery showing high-end curtain drape installations, motorized zebra blinds, pleated mosquito mesh, and customized window setups across luxury homes in Chennai.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
