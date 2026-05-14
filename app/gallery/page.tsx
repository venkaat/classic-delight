
"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import PremiumServices from "../components/PremiumServices";
import RoomVisualizer from "../components/RoomVisualizer";
import Gallery from "../components/Gallery";
import ProcessSection from "../components/ProcessSection";
import HomeTestimonials from "../components/HomeTestimonials";
import HomeCTA from "../components/HomeCTA";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import AICurtainRecommendation from "../components/AICurtainRecommendation";
 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#2e2e2e]">
      <Header />
      <Gallery />
      <FloatingCTA />
      <Footer />
</main>
  );
       
}