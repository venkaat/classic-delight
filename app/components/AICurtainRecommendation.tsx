"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Sparkles, ArrowRight, Bot, Image as ImageIcon, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import {
  FABRICS,
  fabricImages,
  blueprintFabricColors,
  blueprintFabricOpacities,
  curtainImages,
  TAILORING_COST_BASE,
  TRACK_COST_BASE,
  FIXING_COST_BASE,
} from "@/lib/pricingConfig";

const fabrics = FABRICS;

// Map fabric choices to the 3D Visualizer's texture overlay options
const visualizerTextureMap: Record<string, string> = {
  Linen: "Classic Linen",
  Blackout: "Luxe Velvet",
  Silk: "Luxe Velvet",
  Cotton: "Classic Linen",
  Polyester: "Classic Linen",
  "Poly Cotton": "Classic Linen",
  "Custom Printed": "Classic Linen",
  Sheer: "Textured Sheer",
};

interface Recommendation {
  curtain: string;
  fabric: string;
  description: string;
  subtitle: string;
}

const recommendations: Record<string, Recommendation> = {
  Luxury: {
    curtain: "Ripple Curtains",
    fabric: "Linen",
    subtitle: "Premium wave-like design & organic textures",
    description:
      "Elegant premium styling ideal for luxury modern interiors with soft natural lighting.",
  },
  Modern: {
    curtain: "Eyelet Curtains",
    fabric: "Polyester",
    subtitle: "Sleek metallic grommets & minimal hangs",
    description:
      "Clean contemporary look with smooth functionality and affordable elegance.",
  },
  Cozy: {
    curtain: "Pleated Curtains",
    fabric: "Cotton",
    subtitle: "Structured classic gathers & warm atmosphere",
    description:
      "Warm and comfortable styling perfect for family spaces and cozy bedrooms.",
  },
  Privacy: {
    curtain: "Ripple Curtains",
    fabric: "Blackout",
    subtitle: "Max light blocking & sound isolation",
    description:
      "Excellent privacy and light control ideal for bedrooms and media rooms.",
  },
  Office: {
    curtain: "Eyelet Curtains",
    fabric: "Polyester",
    subtitle: "Clean industrial gathers for high productivity",
    description:
      "Professional and clean look suited for office and commercial spaces.",
  },
};

// Common window sizes in feet for quick-select
const COMMON_WIDTHS = [4, 5, 6, 7, 8, 10, 12];
const COMMON_HEIGHTS = [7, 8, 9, 10, 12];

function DimensionPicker({
  label,
  value,
  onChange,
  presets,
  unit = "ft",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  presets: number[];
  unit?: string;
}) {
  const numVal = Number(value) || 0;
  const isPreset = presets.includes(numVal);
  const [isCustomMode, setIsCustomMode] = useState(!isPreset && numVal > 0);

  const decrement = () => {
    const next = Math.max(2, numVal - 1);
    onChange(String(next));
  };

  const increment = () => {
    const next = numVal === 0 ? presets[0] : numVal + 1;
    onChange(String(Math.min(20, next)));
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 transition-all duration-300 hover:border-white/20">
      {/* Label */}
      <p className="text-white/50 text-xs uppercase tracking-[3px] mb-4">
        {label}
      </p>

      {/* Stepper row */}
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={decrement}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-[#f26522]/20 hover:border-[#f26522]/40 active:scale-90 transition"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="w-4 h-4" />
        </button>

        <div className="flex-1 text-center">
          <span className="text-white text-4xl font-semibold">
            {value || "—"}
          </span>
          <span className="text-white/40 text-base ml-1.5">{unit}</span>
        </div>

        <button
          onClick={increment}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-[#f26522]/20 hover:border-[#f26522]/40 active:scale-90 transition"
          aria-label={`Increase ${label}`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Quick-select chips / visible Custom Input */}
      <div className="min-h-[44px] flex items-center">
        {isCustomMode ? (
          <div className="flex items-center gap-2 w-full animate-fade-in">
            <div className="relative flex-1">
              <input
                type="number"
                placeholder="Enter size..."
                value={value}
                min={2}
                max={20}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, "");
                  const num = Number(val);
                  if (num > 20) {
                    onChange("20");
                  } else {
                    onChange(val);
                  }
                }}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white text-sm outline-none focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522]/20 transition"
                autoFocus
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 text-xs">
                {unit}
              </span>
            </div>
            <button
              onClick={() => {
                setIsCustomMode(false);
                if (!presets.includes(numVal)) {
                  onChange(String(presets[0]));
                }
              }}
              className="text-xs text-white/50 hover:text-white px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 w-full">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => onChange(String(p))}
                className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-300 ${
                  value === String(p)
                    ? "bg-[#f26522] border-[#f26522] text-white"
                    : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                }`}
              >
                {p} {unit}
              </button>
            ))}
            <button
              onClick={() => setIsCustomMode(true)}
              className={`px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition`}
            >
              Custom...
            </button>
          </div>
        )}
      </div>

      {/* Premium Range Slider */}
      <div className="mt-6 pt-4 border-t border-white/5 w-full">
        <input
          type="range"
          min={2}
          max={20}
          step={1}
          value={numVal || 6}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#f26522] focus:outline-none"
        />
        <div className="flex justify-between text-[10px] text-white/30 mt-2 font-medium">
          <span>2 {unit}</span>
          <span>11 {unit}</span>
          <span>20 {unit}</span>
        </div>
      </div>
    </div>
  );
}

export default function AICurtainRecommendation() {
  const [room, setRoom] = useState("Living Room");
  const [style, setStyle] = useState("Luxury");
  const [width, setWidth] = useState("6");
  const [height, setHeight] = useState("8");
  const [step, setStep] = useState(1);
  const [overrideFabric, setOverrideFabric] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasTrackedEstimate, setHasTrackedEstimate] = useState(false);

  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      try {
        (window as any).gtag("event", eventName, params);
      } catch (e) {
        console.error("Failed to track event:", e);
      }
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setHasTrackedEstimate(false);
    trackEvent("open_estimator", { event_category: "Engagement" });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setStep(1);
    setOverrideFabric(null);
  };

  // Reset fabric overrides when styling vibe changes
  useEffect(() => {
    setOverrideFabric(null);
  }, [style]);

  const result = useMemo(() => {
    const selected =
      recommendations[style as keyof typeof recommendations] ||
      recommendations["Luxury"];
    
    const fabricToUse = overrideFabric || selected.fabric;
    const fabricPrice = fabrics[fabricToUse as keyof typeof fabrics] || 300;

    const parsedWidth = width === "" ? 0 : Number(width) || 0;
    const parsedHeight = height === "" ? 0 : Number(height) || 0;

    const fabricNeeded =
      parsedWidth > 0 && parsedHeight > 0
        ? Math.ceil((parsedWidth * 2.2 * (parsedHeight + 0.5)) / 3.28)
        : 0;

    const fabricCost = fabricNeeded * fabricPrice;
    const hasDimensions = parsedWidth > 0 && parsedHeight > 0;
    const tailoringCost = hasDimensions ? TAILORING_COST_BASE : 0;
    const trackCost = hasDimensions ? TRACK_COST_BASE : 0;
    const fixingCost = hasDimensions ? FIXING_COST_BASE : 0;
    const total = fabricCost + tailoringCost + trackCost + fixingCost;

    return {
      curtain: selected.curtain,
      fabric: fabricToUse,
      description: selected.description,
      fabricNeeded,
      fabricCost,
      tailoringCost,
      trackCost,
      fixingCost,
      total,
      fabricPrice,
      parsedWidth,
      parsedHeight,
    };
  }, [style, overrideFabric, width, height]);

  // Track estimate generation
  useEffect(() => {
    if (isModalOpen && step === 3 && width && height && !hasTrackedEstimate && result.total > 0) {
      trackEvent("generate_estimate", {
        value: result.total,
        currency: "INR",
        room,
        style,
        fabric: result.fabric,
        width: result.parsedWidth,
        height: result.parsedHeight,
      });
      setHasTrackedEstimate(true);
    }
  }, [isModalOpen, step, width, height, result.total, hasTrackedEstimate, room, style, result.fabric, result.parsedWidth, result.parsedHeight]);

  const handleWhatsAppClick = () => {
    trackEvent("contact_whatsapp", {
      value: result.total,
      currency: "INR",
      room,
      style,
      fabric: result.fabric,
      width: result.parsedWidth,
      height: result.parsedHeight,
    });
    if (typeof window !== "undefined" && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'ads_conversion_Contact_Us_1', {
          'value': result.total,
          'currency': 'INR'
        });
      } catch (e) {
        console.error("Google Ads conversion track failed:", e);
      }
    }
  };

  // Deep linking to visualizer tools
  const textToImagePrompt = `Luxury modern ${result.fabric.toLowerCase()} ${result.curtain.toLowerCase()} installed in a beautiful ${room.toLowerCase()}, photorealistic architectural window styling, high-end interior, soft cinematic lighting`;
  const textToImageUrl = `/visualizer?prompt=${encodeURIComponent(textToImagePrompt)}`;

  const mappedTexture = visualizerTextureMap[result.fabric] || "Classic Linen";
  const visualizer3dUrl = `/curtain-visualizer?texture=${encodeURIComponent(mappedTexture)}`;

  const whatsappMessage = encodeURIComponent(
    `Hi! I used the AI Curtain Recommendation tool and got the following details:\n\n` +
      `🏠 Room: ${room}\n` +
      `🎨 Style Preference: ${style}\n` +
      `📐 Window Size: ${width || "N/A"} ft (W) x ${height || "N/A"} ft (H)\n\n` +
      `🪟 Recommended Curtain: ${result.curtain}\n` +
      `🧵 Recommended Fabric: ${result.fabric} (₹${result.fabricPrice}/meter)\n` +
      `📏 Fabric Required: ${result.fabricNeeded} meters\n\n` +
      `💰 Cost Breakdown:\n` +
      `  • Fabric Cost: ₹${result.fabricCost.toLocaleString()}\n` +
      `  • Tailoring: ₹${result.tailoringCost.toLocaleString()}\n` +
      `  • M-Track Rod: ₹${result.trackCost.toLocaleString()}\n` +
      `  • Installation: ₹${result.fixingCost.toLocaleString()}\n\n` +
      `💎 Estimated Total: ₹${result.total.toLocaleString()}\n\n` +
      `Please provide me an exact quote. Thank you!`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

  return (
    <section
      id="ai-guide"
      className={`relative py-16 md:py-24 bg-black overflow-hidden border-y border-white/10 ${
        isModalOpen ? "z-[10000]" : "z-10"
      }`}
    >
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#f26522]/10 blur-[120px] md:blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* NOBROKER-STYLE ESTIMATOR BANNER */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white text-black p-6 md:p-8 rounded-[28px] md:rounded-[32px] shadow-2xl border border-neutral-100 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden transition-all duration-300 hover:shadow-3xl hover:translate-y-[-2px]">
            {/* Left Accent Stripe and Content */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="w-1.5 h-14 bg-[#f26522] rounded-full shrink-0 animate-pulse" />
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900 tracking-tight">
                  Wondering about the cost?
                </h3>
                <p className="text-neutral-500 text-sm md:text-base mt-1 font-medium">
                  Get a free window-wise estimate for your custom curtains.
                </p>
              </div>
            </div>

            {/* Pills Group */}
            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-start lg:justify-center">
              <span className="px-3.5 py-2 bg-neutral-100 rounded-full text-[11px] font-extrabold text-neutral-600 uppercase tracking-wider">
                1-5+ Windows
              </span>
              <span className="px-3.5 py-2 bg-neutral-100 rounded-full text-[11px] font-extrabold text-neutral-600 uppercase tracking-wider">
                Economy • Premium • Luxury
              </span>
              <span className="px-3.5 py-2 bg-neutral-100 rounded-full text-[11px] font-extrabold text-neutral-600 uppercase tracking-wider">
                ~2 Min Estimate
              </span>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleOpenModal}
              className="w-full lg:w-auto bg-[#f26522] hover:bg-[#d94f14] text-white font-extrabold py-4 px-8 rounded-2xl flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg shadow-[#f26522]/20 active:scale-98 cursor-pointer shrink-0 text-sm tracking-wide"
            >
              <span>Try the Estimator</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* MODAL WIZARD CONTAINER */}
        <AnimatePresence>
          {isModalOpen && (
            <div 
              onClick={handleCloseModal}
              className="fixed inset-0 z-[10000] overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-[#0c0c0c] border border-white/10 max-w-4xl w-full rounded-[32px] p-6 md:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 md:top-6 md:right-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-black text-[10px] md:text-xs tracking-wider uppercase transition-all duration-300 z-[10001] cursor-pointer shadow-2xl flex items-center gap-1.5 border border-red-500 hover:scale-105 active:scale-95 group"
                  aria-label="Close Estimator"
                >
                  <X className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:rotate-90" />
                  <span>Close</span>
                </button>

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 mt-2">
                  <div className="inline-flex items-center gap-2 bg-[#f26522]/10 border border-[#f26522]/30 px-3.5 py-1.5 rounded-full text-xs text-white/95 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-[#f26522] animate-pulse" /> 
                    <span>AI Powered</span> Custom Curtain Recommendations
                  </div>

                  <h2 className="text-white text-3xl md:text-5xl leading-tight font-extrabold tracking-tight mb-3">
                    Window Cost Estimator
                  </h2>

                  <p className="text-white/50 text-sm md:text-base">
                    Configure your sizes and styling vibes to get an instant pricing estimate with free installation across Chennai.
                  </p>
                </div>

                {/* PROGRESS WIZARD INDICATOR */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="flex justify-between items-center text-xs text-white/40 mb-2 font-mono">
                    <span>Progress</span>
                    <span className="text-orange-400 font-bold">
                      {step === 1 ? "33% Complete" : step === 2 ? "66% Complete" : "100% Complete"}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: "33%" }}
                      animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                      className="h-full bg-gradient-to-r from-orange-500 to-[#f26522] rounded-full"
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                {/* FORM STEPS CONTENT */}
                <div className="max-w-2xl mx-auto space-y-4 md:space-y-6 text-left">
                  {/* STEP 1 */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 transition-all duration-300 hover:border-white/20">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[#f26522] uppercase tracking-[3px] text-xs font-semibold">
                        Step 1
                      </p>
                      {step >= 2 && (
                        <span className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 rounded-full flex items-center gap-1.5">
                          ✓ {room}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      What room are we styling?
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        ["🛋", "Living Room"],
                        ["🛏", "Bedroom"],
                        ["💼", "Office"],
                        ["🍽", "Dining"],
                      ].map(([icon, item]) => (
                        <button
                          key={item}
                          onClick={() => {
                            setRoom(item as string);
                            setStep(2);
                          }}
                          className={`rounded-2xl px-3 py-4 border transition-all duration-300 active:scale-98 ${
                            room === item
                              ? "bg-[#f26522] border-[#f26522] text-white shadow-lg shadow-orange-500/10"
                              : "bg-neutral-950 border-white/5 text-white/70 hover:bg-neutral-900"
                          }`}
                        >
                          <div className="text-xl mb-2">{icon}</div>
                          <div className="text-xs md:text-sm font-semibold">{item}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* STEP 2 */}
                  {step >= 2 && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 transition-all duration-300 hover:border-white/20">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[#f26522] uppercase tracking-[3px] text-xs font-semibold">
                          Step 2
                        </p>
                        {step >= 3 && (
                          <span className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 rounded-full flex items-center gap-1.5">
                            ✓ {style} Vibe
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                        Choose your preferred style
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {Object.entries(recommendations).map(([key, item]) => (
                          <button
                            key={key}
                            onClick={() => {
                              setStyle(key);
                              setStep(3);
                            }}
                            className={`rounded-2xl p-4 border text-left transition-all duration-300 active:scale-98 flex flex-col justify-between min-h-[100px] ${
                              style === key
                                ? "bg-[#f26522] border-[#f26522] text-white shadow-lg shadow-orange-500/10"
                                : "bg-neutral-950 border-white/5 text-white/70 hover:bg-neutral-900"
                            }`}
                          >
                            <div>
                              <div className="text-xs md:text-sm font-bold mb-1">{key} Vibe</div>
                              <div className={`text-[10px] md:text-xs leading-normal ${style === key ? "text-white/80" : "text-white/40"}`}>
                                {item.subtitle}
                              </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between w-full border-t border-white/5 pt-2">
                              <span className="text-[9px] font-mono tracking-wider uppercase opacity-75">
                                {item.curtain}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 3 */}
                  {step >= 3 && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 transition-all duration-300 hover:border-white/20">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[#f26522] uppercase tracking-[3px] text-xs font-semibold">
                          Step 3
                        </p>
                        {width && height && (
                          <span className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 rounded-full flex items-center gap-1.5">
                            ✓ {width} × {height} ft
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Tell us your window size
                      </h3>
                      <p className="text-white/40 text-xs mb-4">
                        Select a preset size, drag the slider, or click Custom to input custom dimensions.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DimensionPicker
                          label="Width"
                          value={width}
                          onChange={setWidth}
                          presets={COMMON_WIDTHS}
                        />
                        <DimensionPicker
                          label="Height"
                          value={height}
                          onChange={setHeight}
                          presets={COMMON_HEIGHTS}
                        />
                      </div>

                      {/* DYNAMIC BLUEPRINT PREVIEW */}
                      <div className="mt-6 pt-6 border-t border-white/5 flex flex-col items-center justify-center">
                        <div className="text-center mb-4">
                          <h4 className="text-white font-bold text-sm">Interactive Window Blueprint</h4>
                          <p className="text-white/30 text-[10px] mt-0.5">Scale preview matching your window dimensions</p>
                        </div>

                        <div className="relative border-4 border-neutral-700 bg-neutral-900 rounded-lg shadow-inner flex items-stretch justify-center p-0.5 transition-all duration-500"
                             style={{
                               width: "100%",
                               maxWidth: "200px",
                               height: `${Math.min(180, Math.max(90, 120 * (Number(height) || 8) / (Number(width) || 6)))}px`,
                             }}
                        >
                          {/* Width Label */}
                          <div className="absolute -top-6 left-0 right-0 flex items-center justify-between text-[9px] text-orange-400 font-mono">
                            <span className="w-full h-[1px] bg-orange-500/20 border-t border-dashed" />
                            <span className="mx-1 whitespace-nowrap">{width} ft</span>
                            <span className="w-full h-[1px] bg-orange-500/20 border-t border-dashed" />
                          </div>

                          {/* Height Label */}
                          <div className="absolute -right-14 top-0 bottom-0 flex flex-col items-center justify-between py-1 text-[9px] text-orange-400 font-mono w-10">
                            <span className="h-full w-[1px] bg-orange-500/20 border-r border-dashed" />
                            <span className="my-1 whitespace-nowrap rotate-90">{height} ft</span>
                            <span className="h-full w-[1px] bg-orange-500/20 border-r border-dashed" />
                          </div>

                          <div className="absolute inset-0.5 border border-neutral-800 bg-sky-950/15 overflow-hidden flex justify-between items-stretch">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                            
                            {/* Left drape */}
                            <div
                              className="w-[42%] h-full rounded-r-sm shadow-md border-r border-white/5 transition-all duration-500"
                              style={{
                                backgroundColor: blueprintFabricColors[overrideFabric || recommendations[style]?.fabric] || "#eae6df",
                                opacity: blueprintFabricOpacities[overrideFabric || recommendations[style]?.fabric] || 0.8,
                                backgroundImage: result.curtain === "Pleated Curtains"
                                  ? "linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 10px)"
                                  : "linear-gradient(90deg, rgba(0,0,0,0.1) 3px, transparent 3px, transparent 14px)",
                                backgroundSize: result.curtain === "Pleated Curtains" ? "10px 100%" : "14px 100%"
                              }}
                            />

                            {/* Right drape */}
                            <div
                              className="w-[42%] h-full rounded-l-sm shadow-md border-l border-white/5 transition-all duration-500"
                              style={{
                                backgroundColor: blueprintFabricColors[overrideFabric || recommendations[style]?.fabric] || "#eae6df",
                                opacity: blueprintFabricOpacities[overrideFabric || recommendations[style]?.fabric] || 0.8,
                                backgroundImage: result.curtain === "Pleated Curtains"
                                  ? "linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 10px)"
                                  : "linear-gradient(90deg, rgba(0,0,0,0.1) 3px, transparent 3px, transparent 14px)",
                                backgroundSize: result.curtain === "Pleated Curtains" ? "10px 100%" : "14px 100%"
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* RESULT PANEL */}
                  {step >= 3 && (
                    <div className="relative overflow-hidden bg-gradient-to-br from-[#121212] to-[#080808] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl">
                      <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#f26522]/10 blur-[80px] rounded-full pointer-events-none" />
                      
                      <div className="relative z-10 text-left">
                        <div className="inline-flex items-center gap-1.5 bg-[#f26522]/10 border border-[#f26522]/20 px-3 py-1 rounded-full text-[#f26522] text-[10px] md:text-xs mb-4 font-mono font-bold">
                          ✦ AI RECOMMENDATION GENERATED
                        </div>

                        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                          Your Custom Recommendation
                        </h3>

                        {/* Cost Total Card */}
                        <div className="bg-[#f26522]/10 border border-[#f26522]/20 rounded-xl p-4 flex items-center justify-between mb-4">
                          <div>
                            <p className="text-white/50 text-[10px] uppercase tracking-wider font-semibold mb-0.5">Estimated Total</p>
                            <p className="text-white/60 text-xs">
                              {width && height ? `${width} ft × ${height} ft window` : "Enter sizes"}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-[#f26522] text-2xl md:text-3xl font-black font-mono">
                              {result.total > 0 ? `₹${result.total.toLocaleString()}` : "—"}
                            </span>
                          </div>
                        </div>

                        {/* Styles & Fabrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center gap-3 transition hover:border-white/20">
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 shrink-0">
                              <Image
                                src={curtainImages[result.curtain] || "/images/curtain-styles/ripple.jpg"}
                                alt={result.curtain}
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-white/40 text-[9px] uppercase tracking-wider mb-0.5">Curtain Style</p>
                              <h4 className="text-white text-xs md:text-sm font-bold">{result.curtain}</h4>
                            </div>
                          </div>

                          <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center gap-3 transition hover:border-white/20">
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 shrink-0">
                              <Image
                                src={fabricImages[result.fabric] || "/images/fabrics/linen.jpg"}
                                alt={result.fabric}
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-white/40 text-[9px] uppercase tracking-wider mb-0.5">Best Fabric</p>
                              <h4 className="text-white text-xs md:text-sm font-bold">{result.fabric}</h4>
                            </div>
                          </div>
                        </div>

                        {/* Fabrics Customizer swatches */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
                          <p className="text-white/50 text-[10px] uppercase tracking-wider font-semibold mb-3">
                            Swap Fabric Options:
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {Object.keys(fabrics).map((fabName) => {
                              const isSelected = result.fabric === fabName;
                              return (
                                <button
                                  key={fabName}
                                  onClick={() => setOverrideFabric(fabName)}
                                  className={`flex items-center gap-1.5 p-2 rounded-lg text-[10px] md:text-xs font-semibold border transition duration-200 ${
                                    isSelected
                                      ? "bg-[#f26522] border-[#f26522] text-white shadow-md shadow-orange-500/10"
                                      : "bg-neutral-950 border-white/5 text-white/70"
                                  }`}
                                >
                                  <div className="relative w-3.5 h-3.5 rounded-full overflow-hidden border border-white/10 shrink-0">
                                    <Image
                                      src={fabricImages[fabName] || "/images/fabrics/linen.jpg"}
                                      alt={fabName}
                                      fill
                                      sizes="14px"
                                      className="object-cover"
                                    />
                                  </div>
                                  <span className="truncate">{fabName}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Cost details list */}
                        <div className="space-y-2 mb-6 font-sans text-xs md:text-sm text-white/60">
                          <div className="flex justify-between py-1.5 border-b border-white/5">
                            <span>Window Dimensions</span>
                            <span className="text-white/90 font-bold">{width || "—"} ft × {height || "—"} ft</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-white/5">
                            <span>Fabric Required</span>
                            <span className="text-white/90">{result.fabricNeeded > 0 ? `${result.fabricNeeded} meters` : "—"}</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-white/5">
                            <span>Fabric Cost (₹{result.fabricPrice}/m)</span>
                            <span className="text-white/90 font-mono">₹{result.fabricCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-white/5">
                            <span>Tailoring & Stitching</span>
                            <span className="text-white/90 font-mono">₹{result.tailoringCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-white/5">
                            <span>Premium M-Tracks</span>
                            <span className="text-white/90 font-mono">₹{result.trackCost.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-white/5">
                            <span>Professional Installation</span>
                            <span className="text-emerald-400 font-bold">FREE</span>
                          </div>
                          <div className="flex justify-between items-center pt-2">
                            <span className="text-white font-bold">Estimated Total</span>
                            <span className="text-[#f26522] text-xl md:text-2xl font-black font-mono">
                              ₹{result.total.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="space-y-2">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleWhatsAppClick}
                            className="w-full text-center bg-[#f26522] hover:bg-[#ff7b3d] py-3 rounded-xl text-white font-bold transition flex items-center justify-center gap-1.5 text-xs md:text-sm"
                          >
                            📲 Get Swatches & Exact Quote via WhatsApp
                          </a>
                          <Link
                            href={textToImageUrl}
                            className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition"
                          >
                            🎨 Preview with AI Text-to-Image
                          </Link>

                          {/* Close Action Button */}
                          <div className="mt-3 pt-2 border-t border-white/5">
                            <button
                              onClick={handleCloseModal}
                              className="w-full py-4 bg-[#f26522]/10 hover:bg-red-600 border border-[#f26522]/30 hover:border-red-600 text-white rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-300 active:scale-98 cursor-pointer text-center flex items-center justify-center gap-1.5"
                            >
                              <X className="w-4 h-4" />
                              <span>Close Estimator</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* FABRIC COLLECTION */}
        <div className="mt-20 md:mt-28">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <p className="uppercase tracking-[4px] md:tracking-[5px] text-[#f26522] text-xs md:text-sm font-semibold mb-4 md:mb-6">
              Curtain Fabric Collection
            </p>
            <h3 className="text-white text-3xl sm:text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-4 md:mb-6">
              Premium Curtain
              <br />
              Fabrics & Pricing
            </h3>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Explore luxury curtain fabrics designed for modern interiors,
              elegant light control and premium finishing.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {Object.entries(FABRICS).map(([name, price]) => {
              const imageUrl = fabricImages[name] || "/images/fabrics/cotton.jpg";
              return (
                <div
                  key={name}
                  className="bg-white/5 border border-white/10 rounded-[20px] md:rounded-[28px] p-4 md:p-6 hover:bg-white/[0.07] transition duration-500"
                >
                  <div className="relative overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-6">
                    <Image
                      src={imageUrl}
                      alt={name}
                      width={400}
                      height={176}
                      quality={60}
                      style={{ height: "auto" }}
                      className="w-full h-32 sm:h-44 object-cover hover:scale-105 transition duration-700"
                    />
                  </div>
                  <p className="text-[#f26522] text-xs uppercase tracking-[2px] md:tracking-[3px] mb-2 md:mb-4">
                    Fabric
                  </p>
                  <h4 className="text-white text-lg md:text-2xl font-semibold mb-1 md:mb-3">
                    {name}
                  </h4>
                  <p className="text-white/60 text-xs md:text-sm">Starting from</p>
                  <p className="text-white text-base md:text-xl mt-1 md:mt-2">₹{price} / meter</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CURTAIN TYPES */}
        <div className="mt-20 md:mt-28">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <p className="uppercase tracking-[4px] md:tracking-[5px] text-[#f26522] text-xs md:text-sm font-semibold mb-4 md:mb-6">
              Curtain Styles
            </p>
            <h3 className="text-white text-3xl sm:text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-4 md:mb-6">
              Curtain Types
              <br />
              For Every Interior
            </h3>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Choose from elegant curtain styles tailored for luxury homes,
              modern apartments and commercial interiors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {Object.entries(curtainImages).map(([name, imageUrl]) => (
              <div
                key={name}
                className="group bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-[24px] md:rounded-[32px] p-4 md:p-6 hover:border-[#f26522]/30 transition duration-500"
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-8 aspect-[4/3]">
                  <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <h4 className="text-white text-base md:text-2xl font-semibold leading-tight">
                  {name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
