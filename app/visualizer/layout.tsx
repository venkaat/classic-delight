import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive AI Room Curtain Visualizer | Classic Delight",
  description: "Upload a photo of your living room or window space and dynamically render custom premium linen curtains, sheer drapes, or modern blinds to preview your interior design instantly.",
};

export default function VisualizerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
