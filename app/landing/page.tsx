"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layers,
  Cpu,
  Maximize2,
  Sliders,
  Palette,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Bot,
  Calendar,
  MessageCircle,
  Phone,
  ArrowUpRight,
  BadgePercent,
  Check,
  Zap
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import AICurtainRecommendation from "../components/AICurtainRecommendation";
import { siteConfig } from "@/lib/siteConfig";

// Demo fabric settings for the interactive mockup
const DEMO_FABRICS = {
  Velvet: {
    label: "Luxe Velvet",
    desc: "Heavy, premium light-blocking drape",
    opacity: 0.95,
    overlayColor: "mix-blend-multiply",
    accent: "bg-amber-600"
  },
  Linen: {
    label: "Classic Linen",
    desc: "Organic natural woven look",
    opacity: 0.85,
    overlayColor: "mix-blend-multiply",
    accent: "bg-orange-500"
  },
  Sheer: {
    label: "Airy Sheer",
    desc: "Translucent light-filtering texture",
    opacity: 0.5,
    overlayColor: "mix-blend-color-burn",
    accent: "bg-sky-400"
  }
};

const DEMO_COLORS = [
  { name: "Teal Luxe", hex: "#1b4d4f", text: "text-teal-400" },
  { name: "Olive Moss", hex: "#556b2f", text: "text-lime-400" },
  { name: "Warm Ochre", hex: "#d4a373", text: "text-amber-400" },
  { name: "Charcoal Grey", hex: "#404040", text: "text-zinc-400" },
  { name: "Alabaster White", hex: "#f5f5f0", text: "text-neutral-100" }
];

export default function LandingPage() {
  const [selectedFabric, setSelectedFabric] = useState<keyof typeof DEMO_FABRICS>("Velvet");
  const [selectedColor, setSelectedColor] = useState(DEMO_COLORS[0]);
  const [activeTab, setActiveTab] = useState<"visualizer" | "assistant" | "pricing">("visualizer");

  // WhatsApp lead url using siteConfig
  const whatsappLeadUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hi Classic Delight! I'm on your AI & Visualizer Landing Page. I'd like to schedule a free measurement and home measurement visit."
  )}`;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#f26522]/30 overflow-hidden font-sans">
      <Header />

      {/* HERO SECTION - Futuristic 2026 Smart Studio Showcase */}
      <section className="relative pt-12 pb-24 md:py-32 overflow-hidden border-b border-white/10">
        {/* Glow Spheres */}
        <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] bg-[#f26522]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[5%] right-[-10%] w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full border border-[#f26522]/30 bg-[#f26522]/10 backdrop-blur-md"
              >
                <Sparkles className="w-4.5 h-4.5 text-[#f26522] animate-pulse" />
                <span className="text-[#ff8142] text-xs md:text-sm font-semibold tracking-wider uppercase">
                  Atelier 2026 Smart Design Suite
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.92] bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent"
              >
                Design Your
                <br />
                Windows in
                <br />
                Real-Time.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-xl"
              >
                Experience Chennai's premier smart window design catalog. Get **instant accurate pricing estimates** and preview premium fabrics overlayed seamlessly on real room spaces with zero lag.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  href="/curtain-visualizer"
                  className="group relative inline-flex items-center gap-2.5 bg-[#f26522] hover:bg-[#ff7733] text-white px-7 py-4.5 rounded-2xl text-base font-bold shadow-[0_15px_40px_rgba(242,101,34,0.3)] transition-all hover:scale-105 active:scale-98"
                >
                  <Maximize2 className="w-5 h-5" />
                  Launch 3D Visualizer
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <a
                  href="#pricing-estimator"
                  className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-white/20 text-white px-7 py-4.5 rounded-2xl text-base font-semibold transition-all hover:scale-105 active:scale-98"
                >
                  <Sliders className="w-5 h-5 text-neutral-400" />
                  Calculate Prices
                </a>
              </motion.div>

              {/* Key Trust Checkmarks */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#f26522]" />
                  <span className="text-sm text-neutral-300 font-medium">100% Free & Unlimited</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#f26522]" />
                  <span className="text-sm text-neutral-300 font-medium">Lag-Free (0s Loading)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#f26522]" />
                  <span className="text-sm text-neutral-300 font-medium">Realistic Fabric Folds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#f26522]" />
                  <span className="text-sm text-neutral-300 font-medium">No Paid API Fees</span>
                </div>
              </motion.div>
            </div>

            {/* Hero Right - Smart Studio Interactive Tablet/Mockup */}
            <div className="lg:col-span-6 relative">
              {/* Outer decorative box glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f26522] to-amber-500 rounded-3xl opacity-20 blur-xl pointer-events-none" />

              <div className="relative bg-neutral-950 border border-white/10 rounded-3xl p-5 shadow-2xl overflow-hidden">
                {/* Simulated UI Window Bar */}
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] text-white/30 font-mono tracking-widest uppercase">
                    classic-delight-canvas.studio
                  </span>
                  <div className="w-4 h-4" />
                </div>

                {/* Tab Switcher */}
                <div className="grid grid-cols-3 gap-2.5 mb-4 bg-white/5 p-1 rounded-xl">
                  {[
                    { id: "visualizer", label: "3D Previewer" },
                    { id: "pricing", label: "Smart Estimator" },
                    { id: "assistant", label: "AI Consultant" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        activeTab === tab.id
                          ? "bg-[#f26522] text-white shadow-md"
                          : "text-neutral-400 hover:text-neutral-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Simulated Content Area based on Tab */}
                <div className="relative min-h-[350px] bg-neutral-900/50 rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between">
                  <div className={`p-4 flex flex-col justify-between h-full flex-1 ${activeTab === "visualizer" ? "block" : "hidden"}`}>
                    {/* Live Mockroom with Changing Color overlay on Curtains! */}
                    <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-neutral-950 border border-white/5">
                      {/* Background demo room */}
                      <Image
                        src="/images/visualizer/demo-room.png"
                        alt="Demo Room Canvas"
                        fill
                        className="object-cover opacity-80"
                      />
                      {/* Interactive overlay representing the draping curtain */}
                      <div
                        className={`absolute inset-0 transition-all duration-700 pointer-events-none flex items-center justify-center`}
                        style={{
                          opacity: DEMO_FABRICS[selectedFabric].opacity
                        }}
                      >
                        {/* Left Panel Curtain Overlay (simulated overlay colorization) */}
                        <div
                          className="absolute left-[20%] w-[15%] h-[90%] rounded-b-md shadow-2xl transition-all duration-700"
                          style={{
                            backgroundColor: selectedColor.hex,
                            boxShadow: `0 25px 50px -12px ${selectedColor.hex}40`
                          }}
                        />
                        {/* Right Panel Curtain Overlay */}
                        <div
                          className="absolute right-[20%] w-[15%] h-[90%] rounded-b-md shadow-2xl transition-all duration-700"
                          style={{
                            backgroundColor: selectedColor.hex,
                            boxShadow: `0 25px 50px -12px ${selectedColor.hex}40`
                          }}
                        />

                        {/* Subtle texturizing stripes */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:12px_100%] pointer-events-none mix-blend-overlay" />
                      </div>

                      {/* Interactive UI Badge */}
                      <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white/60 border border-white/10 font-mono">
                        {DEMO_FABRICS[selectedFabric].label} · {selectedColor.name}
                      </div>
                    </div>

                    {/* Mini-Controls */}
                    <div className="space-y-3 mt-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                          1. Select Texture
                        </span>
                        <div className="flex gap-2">
                          {(Object.keys(DEMO_FABRICS) as Array<keyof typeof DEMO_FABRICS>).map((key) => (
                            <button
                              key={key}
                              onClick={() => setSelectedFabric(key)}
                              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                                selectedFabric === key
                                  ? "bg-white/10 border-white text-white"
                                  : "bg-white/5 border-white/5 text-neutral-400 hover:text-neutral-200"
                              }`}
                            >
                              {DEMO_FABRICS[key].label.split(" ")[1]}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                          2. Choose Dynamic Color Shade
                        </span>
                        <div className="flex gap-2">
                          {DEMO_COLORS.map((color) => {
                            const isSelected = selectedColor.name === color.name;
                            return (
                              <button
                                key={color.name}
                                onClick={() => setSelectedColor(color)}
                                className={`w-6 h-6 rounded-full border transition-all relative ${
                                  isSelected ? "border-white scale-110 shadow-md" : "border-white/10"
                                }`}
                                style={{ backgroundColor: color.hex }}
                                title={color.name}
                              >
                                {isSelected && (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-white mix-blend-difference" />
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Direct Launcher Link */}
                      <Link
                        href="/curtain-visualizer"
                        className="w-full mt-2 py-2.5 bg-neutral-800 hover:bg-[#f26522] hover:text-white text-neutral-300 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 border border-white/5 transition-all"
                      >
                        <span>Open in Full 3D Visualizer</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className={`p-5 flex flex-col justify-between h-full flex-1 ${activeTab === "pricing" ? "block" : "hidden"}`}>
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-1.5 bg-[#f26522]/10 border border-[#f26522]/20 px-2.5 py-1 rounded-full text-xs text-[#f26522]">
                        <BadgePercent className="w-3.5 h-3.5" /> Special pricing enabled
                      </div>
                      <h4 className="text-white font-semibold text-base">
                        Instant Estimated Pricing Engine
                      </h4>
                      <p className="text-neutral-400 text-xs leading-relaxed">
                        Your client can input standard or custom window width and height, choose their room and curtain fabric starting from just **₹130/meter** to generate a direct quote breakdown.
                      </p>

                      <div className="bg-white/5 border border-white/5 rounded-xl p-3.5 space-y-2">
                        <div className="flex justify-between text-xs text-white/50">
                          <span>Avg. Bedroom (6ft × 8ft)</span>
                          <span className="text-white font-semibold">₹4,950* onwards</span>
                        </div>
                        <div className="flex justify-between text-xs text-white/50">
                          <span>Custom Stitched Polyester</span>
                          <span className="text-emerald-400 font-semibold">Includes Free Installation</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#pricing-estimator"
                      className="w-full py-3 bg-[#f26522] hover:bg-[#ff7b3d] text-white font-bold rounded-xl text-xs text-center transition-all shadow-lg shadow-[#f26522]/15"
                    >
                      Try Pricing Estimator Below
                    </a>
                  </div>

                  <div className={`p-4 flex flex-col justify-between h-full flex-1 ${activeTab === "assistant" ? "block" : "hidden"}`}>
                    {/* Simulated Chat Interface */}
                    <div className="space-y-3.5 flex-1 flex flex-col justify-end">
                      {/* Client message */}
                      <div className="flex justify-end">
                        <div className="bg-[#f26522]/20 border border-[#f26522]/30 px-3.5 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%]">
                          <p className="text-xs text-neutral-200">
                            What color curtains go with olive green walls in my living room?
                          </p>
                        </div>
                      </div>

                      {/* Bot Reply */}
                      <div className="flex gap-2.5 items-start">
                        <div className="w-7 h-7 rounded-full bg-[#f26522] flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-2xl rounded-tl-sm max-w-[80%]">
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            For olive green walls, **Alabaster White sheers** offer a crisp organic contrast. For a cozy feel, try **Warm Ochre linen** drapery.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/ai"
                      className="w-full mt-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-[#f26522]" />
                      Start Chatting with AI
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLAR 1: Real-Time Fabric visualizer features section */}
      <section className="py-20 md:py-28 relative bg-[#070707] border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#f26522]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#f26522] uppercase tracking-[4px] text-xs font-semibold mb-4">
              Real-Time Drapery Suite
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              Why Our Free Visualizer
              <br />
              Is Unbeatable
            </h2>
            <p className="text-neutral-400 text-base md:text-lg">
              We ditched buggy, slow, and expensive cloud AI generators to build a high-performance **Fabric overlay studio** that gives you 100% predictable design previews with zero delays.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#f26522]/30 hover:bg-white/[0.07] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 flex items-center justify-center text-[#f26522] mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">0-Second Instant Rendering</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Runs entirely in the browser using the user's hardware. No queuing, no buffering, and no loading states. Custom color overlays apply in real-time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#f26522]/30 hover:bg-white/[0.07] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 flex items-center justify-center text-[#f26522] mb-6 group-hover:scale-110 transition-transform">
                <Maximize2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Drag, Scale & Fit Anywhere</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Users can upload their own living room or window canvas, then scale and align the high-fidelity drapery overlays to match the architecture perfectly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#f26522]/30 hover:bg-white/[0.07] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 flex items-center justify-center text-[#f26522] mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">100% Free & Unlimited</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Zero API fees or server billings. You can run client visual demos all day, upload infinite images, and save infinite preview layouts for free.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/curtain-visualizer"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-xl text-sm font-bold shadow-xl transition-all hover:scale-105 active:scale-98"
            >
              Open Live Visualizer Studio
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE PILLAR 2: Embedded AI Curtain Recommendation Tool */}
      <section id="pricing-estimator" className="py-12 bg-black relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#f26522]/10 blur-[130px] rounded-full pointer-events-none" />

        {/* We directly embed the gorgeous responsive pricing component */}
        <AICurtainRecommendation />
      </section>

      {/* CORE PILLAR 3: AI Interior Design Chat Assistant Showcase */}
      <section className="py-20 md:py-28 relative bg-[#070707] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Graphic - simulated beautiful layout */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative bg-neutral-950 border border-white/10 rounded-[32px] p-6 shadow-2xl">
                <div className="absolute -top-3 left-6 bg-[#f26522] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  AI Design Assistant
                </div>

                <div className="space-y-4 pt-4">
                  {/* Chat messages */}
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#f26522]/10 border border-[#f26522]/30 flex items-center justify-center flex-shrink-0 text-white">
                      <Bot className="w-4.5 h-4.5 text-[#f26522]" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 text-xs text-neutral-300 leading-relaxed">
                      Hello! I'm your Classic Delight AI designer. Describe your room walls, lighting conditions, and aesthetic desires to get custom curtains & blinds recommendations.
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-[#f26522]/20 border border-[#f26522]/30 rounded-2xl rounded-tr-sm p-4 text-xs text-neutral-200">
                      I want a modern minimalist style for a sunny Anna Nagar apartment.
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#f26522]/10 border border-[#f26522]/30 flex items-center justify-center flex-shrink-0 text-white">
                      <Bot className="w-4.5 h-4.5 text-[#f26522]" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 text-xs text-neutral-300 space-y-2 leading-relaxed">
                      <p>For a sun-drenched minimalist apartment in Chennai, I recommend:</p>
                      <ul className="list-disc list-inside space-y-1 text-neutral-400">
                        <li>**Classic Linen Curtains** in cream or beige for filtered natural warmth.</li>
                        <li>**Zebra Blinds** if you want precise horizontal light control.</li>
                      </ul>
                      <p className="text-[#f26522] font-semibold">Instantly estimate prices with our measurement grid below!</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask AI: e.g. What blinds work for double windows?"
                    disabled
                    className="flex-1 bg-neutral-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-neutral-400 focus:outline-none"
                  />
                  <Link
                    href="/ai"
                    className="bg-[#f26522] hover:bg-[#ff7b3d] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center justify-center"
                  >
                    Chat
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <p className="text-[#f26522] uppercase tracking-[4px] text-xs font-semibold">
                Smart Consultation
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                An AI Designer
                <br />
                Available 24/7
              </h2>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                Help your clients decide on layouts, select harmonious color families, and learn which window styles fit their spaces before they book. Our AI Chat Assistant is ready to consult instantly on fabric specifications, installation requirements, and sun-blocking materials.
              </p>

              <div className="pt-4">
                <Link
                  href="/ai"
                  className="inline-flex items-center gap-2.5 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white px-7 py-4.5 rounded-2xl text-sm font-semibold transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 text-[#f26522]" />
                  Launch Free AI Consultant Chat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM PRODUCTS GALLERY */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#f26522] uppercase tracking-[4px] text-xs font-semibold mb-4">
              Complete Design Catalog
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Premium Window Solutions
            </h2>
            <p className="text-neutral-400 text-sm md:text-base mt-3">
              Custom-tailored with free professional installation across Anna Nagar, Virugambakkam, and Chennai.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group bg-[#080808] border border-white/5 rounded-3xl p-5 hover:border-[#f26522]/30 transition-all duration-500">
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/3]">
                <Image
                  src="/images/curtain-styles/pleated.jpg"
                  alt="Custom Curtains Chennai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Custom Curtains</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                Classic pleated, ripple fold, or eyelets made from rich cotton, linen, silk, and absolute blackout materials.
              </p>
              <Link href="/curtains" className="text-[#f26522] text-xs font-bold flex items-center gap-1 hover:underline">
                Explore Curtains <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Product 2 */}
            <div className="group bg-[#080808] border border-white/5 rounded-3xl p-5 hover:border-[#f26522]/30 transition-all duration-500">
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/3]">
                <Image
                  src="/images/curtain-styles/ripple.jpg"
                  alt="Premium Zebra Blinds Chennai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Luxury Blinds</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                Zebra blinds, sleek wooden blinds, roman shades, and vertical office blinds custom manufactured for modern living.
              </p>
              <Link href="/blinds" className="text-[#f26522] text-xs font-bold flex items-center gap-1 hover:underline">
                Explore Blinds <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Product 3 */}
            <div className="group bg-[#080808] border border-white/5 rounded-3xl p-5 hover:border-[#f26522]/30 transition-all duration-500">
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/3]">
                <Image
                  src="/images/curtain-styles/hospital.jpg"
                  alt="Mosquito Nets Chennai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Mosquito Nets</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                High-tensile pleated mosquito nets for sliding doors, velcro nets, and roll-up mesh for complete home protection.
              </p>
              <Link href="/nets" className="text-[#f26522] text-xs font-bold flex items-center gap-1 hover:underline">
                Explore Nets <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL LEAD CAPTURE - WhatsApp Booking Measurement Visit */}
      <section className="py-20 md:py-28 relative bg-[#090909] border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f26522]/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#f26522]/10 border border-[#f26522]/20 inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full text-[#ff884d] text-xs md:text-sm font-semibold uppercase tracking-wider"
          >
            <Calendar className="w-4 h-4 text-[#f26522]" /> Free Measurement & Consultation
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Schedule a Free
            <br />
            In-Home Measurement Visit
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Get professional technicians to visit your home with physical fabric swatch books, measure your window frames, and give you an exact custom quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href={whatsappLeadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#f26522] hover:bg-[#ff7b3d] text-white px-8 py-5 rounded-2xl text-base font-bold shadow-xl shadow-[#f26522]/20 hover:scale-105 transition duration-300"
            >
              <MessageCircle className="w-5.5 h-5.5" />
              Book via WhatsApp
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white px-8 py-5 rounded-2xl text-base font-semibold hover:scale-105 transition duration-300"
            >
              <Phone className="w-5 h-5 text-neutral-400" />
              Call us: {siteConfig.phone}
            </a>
          </div>

          <p className="text-neutral-500 text-xs pt-2">
            *Physical catalog books available for: Curtains, Zebra Blinds, Roman Shades, Wooden Blinds, Pleated Nets.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
