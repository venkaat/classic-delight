import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/nets",
  },
  title: "Mosquito Nets in Chennai | Pleated & Sliding Mosquito Screens | Classic Delight",
  description: "Protect your home with premium custom mosquito nets in Chennai. Perfect window fitments, durable sliding mesh doors, invisible magnetic nets, and pleated nets with free home measurement services.",
  keywords: ["Mosquito Nets Chennai", "Pleated Mosquito Nets Chennai", "Sliding Mosquito Nets", "Window Mosquito Screens"],
};

export default function NetsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
