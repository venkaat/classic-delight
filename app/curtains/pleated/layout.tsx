import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/curtains/pleated",
  },
  title: "Premium Pleated Curtains in Chennai | Custom Stitching & Design",
  description: "Luxury pleated curtains in Chennai including pinch pleat, pencil pleat, goblet pleat, and custom-tailored drapes with free home measurements & professional installation.",
  keywords: [
    "Pleated Curtains Chennai",
    "Luxury Pleated Curtains",
    "Pinch Pleat Curtains",
    "Pencil Pleat Curtains",
    "Custom Pleated Curtains Chennai",
    "Timeless Pleat Curtains",
    "Curtain Stitching Chennai"
  ],
};

export default function PleatedCurtainsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
