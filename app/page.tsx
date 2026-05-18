import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import PremiumServices from "./components/PremiumServices";
import RoomVisualizer from "./components/RoomVisualizer";
import Gallery from "./components/Gallery";
import ProcessSection from "./components/ProcessSection";
import HomeTestimonials from "./components/HomeTestimonials";
import HomeCTA from "./components/HomeCTA";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import AICurtainRecommendation from "./components/AICurtainRecommendation";
import dynamic from "next/dynamic";


export const metadata: Metadata = {
  title: "Curtains, Blinds & Mosquito Nets in Chennai | Classic Delight",
  description:
    "Premium curtains, blinds, zebra blinds, wooden blinds and mosquito nets in Chennai. Custom window solutions with professional installation across Virugambakkam, Anna Nagar, KK Nagar and all Chennai areas.",
  keywords: [
    "Curtains Chennai",
    "Blinds Chennai",
    "Mosquito Nets Chennai",
    "Zebra Blinds Chennai",
    "Curtain Shop Virugambakkam",
    "Custom Curtains Chennai",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#2e2e2e]">
      <Header />
      <Hero />
      <AICurtainRecommendation />
      <TrustBar />
      <PremiumServices />
          <Gallery />
      <ProcessSection />
      <HomeTestimonials />
      <HomeCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
