import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.classicdelight.in/curtains",
  },
  title: "Premium Curtains in Chennai | Custom Fabric & Stitching | Classic Delight",
  description: "Discover luxury curtains in Chennai including blackout curtains, sheer curtains, ripple fold curtains, and custom designer drapery. Free consultation & professional home installation across Anna Nagar, Vadapalani, Virugambakkam, and Chennai.",
  keywords: ["Curtains Chennai", "Blackout Curtains Chennai", "Sheer Curtains Chennai", "Ripple Fold Curtains Chennai", "Custom Curtains Chennai"],
};

export default function CurtainsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
