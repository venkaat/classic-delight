import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Custom Curtain Drapery Visualizer Experience | Classic Delight",
  description: "Experiment with custom fabric styles, header configurations, and colors. Visualize pleated, ripple fold, or eyelid curtains to find your perfect window match.",
};

export default function CurtainVisualizerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
