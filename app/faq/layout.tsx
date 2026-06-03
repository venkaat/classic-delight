import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/faq",
  },
  title: "FAQ & Window Decor Guides | Measurements & Tips | Classic Delight",
  description: "Have questions about custom curtains, roller blinds, or mosquito mesh installation? Read our comprehensive FAQ and measuring guides for homeowners in Chennai.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
