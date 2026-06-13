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

// Filter out Hospital Curtains from the calculator and showcase list on this page
const filteredCurtainImages = Object.fromEntries(
  Object.entries(curtainImages).filter(([name]) => name !== "Hospital Curtains")
);

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

const curtainUrls: Record<string, string> = {
  "Pleated Curtains": "/curtains/pleated",
  "Ripple Curtains": "/curtains/ripple",
  "Eyelet Curtains": "/curtains/eyelet",
  "Hospital Curtains": "/curtains/hospital",
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

const blinds = {
  "Roman Blinds": 350,
  "Roller Blinds": 200,
  "Zebra Blinds": 220,
  "Wooden Blinds": 300,
  "PVC Blinds": 140,
  "Custom Printed Blinds": 240,
};

const blindImages: Record<string, string> = {
  "Roman Blinds": "/images/blinds/roman.jpg",
  "Roller Blinds": "/images/blinds/roller.jpg",
  "Zebra Blinds": "/images/blinds/zebra.jpg",
  "Wooden Blinds": "/images/blinds/wooden.jpg",
  "PVC Blinds": "/images/blinds/pvc.jpg",
  "Custom Printed Blinds": "/images/blinds/custom.jpg",
};

const blindsUrls: Record<string, string> = {
  "Roman Blinds": "/blinds/roman",
  "Roller Blinds": "/blinds/roller",
  "Zebra Blinds": "/blinds/zebra",
  "Wooden Blinds": "/blinds",
  "PVC Blinds": "/blinds",
  "Custom Printed Blinds": "/blinds",
};

const blindsRecommendations = {
  "Roman": {
    blindType: "Roman Blinds",
    subtitle: "Classic fabric folds & warm atmosphere",
    description: "Elegant fabric folds that stack neatly, combining soft drapery aesthetics with modern window convenience.",
  },
  "Roller": {
    blindType: "Roller Blinds",
    subtitle: "Minimalist layout & maximum light control",
    description: "Sleek and minimalist roller shades offering excellent light blocking and clean contemporary aesthetics.",
  },
  "Zebra": {
    blindType: "Zebra Blinds",
    subtitle: "Dual-layer stripes & modern privacy control",
    description: "Alternating sheer and solid fabric stripes that slide past each other to create variable lighting and privacy levels.",
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
}export default function AICurtainRecommendation() {
  const [room, setRoom] = useState("Living Room");
  const [productType, setProductType] = useState<"curtains" | "blinds">("curtains");
  const [width, setWidth] = useState("4");
  const [height, setHeight] = useState("7");
  const [curtainStyle, setCurtainStyle] = useState("Eyelet Curtains");
  const [fabricMaterial, setFabricMaterial] = useState("Polyester");
  const [blindStyle, setBlindStyle] = useState("PVC Blinds");
  const [hasTrackedEstimate, setHasTrackedEstimate] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("ai-guide");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < 0 && rect.bottom > window.innerHeight;
      setShowStickyBar(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      try {
        (window as any).gtag("event", eventName, params);
      } catch (e) {
        console.error("Failed to track event:", e);
      }
    }
  };

  const result = useMemo(() => {
    const parsedWidth = width === "" ? 0 : Number(width) || 0;
    const parsedHeight = height === "" ? 0 : Number(height) || 0;
    const hasDimensions = parsedWidth > 0 && parsedHeight > 0;

    if (productType === "blinds") {
      const blindPrice = blinds[blindStyle as keyof typeof blinds] || 220;
      const areaSqft = parsedWidth * parsedHeight;
      const blindCost = areaSqft * blindPrice;
      const fixingCost = hasDimensions ? FIXING_COST_BASE : 0;
      const total = blindCost + fixingCost;

      return {
        curtain: blindStyle,
        fabric: blindStyle,
        description: `${blindStyle} custom window installation`,
        fabricNeeded: areaSqft,
        fabricCost: blindCost,
        tailoringCost: 0,
        trackCost: 0,
        fixingCost,
        total,
        fabricPrice: blindPrice,
        parsedWidth,
        parsedHeight,
      };
    } else {
      const fabricPrice = fabrics[fabricMaterial as keyof typeof fabrics] || 400;
      const fabricNeeded =
        hasDimensions
          ? Math.ceil((parsedWidth * 2.2 * (parsedHeight + 0.5)) / 3.28)
          : 0;

      const fabricCost = fabricNeeded * fabricPrice;
      const tailoringCost = hasDimensions ? TAILORING_COST_BASE : 0;
      const trackCost = hasDimensions ? TRACK_COST_BASE : 0;
      const fixingCost = hasDimensions ? FIXING_COST_BASE : 0;
      
      let styleSurcharge = 0;
      if (curtainStyle === "Pleated Curtains") {
        styleSurcharge = 1000;
      } else if (curtainStyle === "Ripple Curtains") {
        styleSurcharge = 2000;
      }
      
      const total = fabricCost + tailoringCost + trackCost + fixingCost + styleSurcharge;

      return {
        curtain: curtainStyle,
        fabric: fabricMaterial,
        description: `Custom ${curtainStyle} with ${fabricMaterial} fabric.`,
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
    }
  }, [productType, curtainStyle, fabricMaterial, blindStyle, width, height]);

  // Track estimate generation
  useEffect(() => {
    if (width && height && !hasTrackedEstimate && result.total > 0) {
      trackEvent("generate_estimate", {
        value: result.total,
        currency: "INR",
        room,
        fabric: result.fabric,
        width: result.parsedWidth,
        height: result.parsedHeight,
      });
      setHasTrackedEstimate(true);
    }
  }, [width, height, result.total, hasTrackedEstimate, room, result.fabric, result.parsedWidth, result.parsedHeight]);

  const handleWhatsAppClick = () => {
    trackEvent("contact_whatsapp", {
      value: result.total,
      currency: "INR",
      room,
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

  const whatsappMessage = encodeURIComponent(
    productType === "blinds"
      ? `Hi! I used the AI Recommendation tool and got the following blinds details:\n\n` +
          `🏠 Room: ${room}\n` +
          `📐 Window Size: ${width || "N/A"} ft (W) x ${height || "N/A"} ft (H)\n\n` +
          `🪟 Recommended Blind: ${result.curtain}\n` +
          `🏷️ Rate: ₹${result.fabricPrice}/sqft\n` +
          `📏 Total Area: ${result.fabricNeeded} sqft\n\n` +
          `💰 Cost Breakdown:\n` +
          `  • Blind Cost: ₹${result.fabricCost.toLocaleString()}\n` +
          `  • Installation: Included (Free)\n\n` +
          `💎 Estimated Total: ₹${result.total.toLocaleString()}\n\n` +
          `Please provide me an exact quote. Thank you!`
      : `Hi! I used the AI Curtain Recommendation tool and got the following details:\n\n` +
          `🏠 Room: ${room}\n` +
          `📐 Window Size: ${width || "N/A"} ft (W) x ${height || "N/A"} ft (H)\n\n` +
          `🪟 Selected Style: ${curtainStyle}\n` +
          `🧵 Selected Fabric: ${fabricMaterial} (₹${result.fabricPrice}/meter)\n` +
          `📏 Fabric Required: ${result.fabricNeeded} meters\n\n` +
          `💰 Cost Breakdown:\n` +
          `  • Fabric Cost: ₹${result.fabricCost.toLocaleString()}\n` +
          `  • Stitching & Premium Channels (M-Tracks): ****\n` +
          `  • Installation: Included (Free)\n\n` +
          `💎 Estimated Total: ₹${result.total.toLocaleString()}\n\n` +
          `Please provide me an exact quote. Thank you!`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

  return (
    <section
      id="ai-guide"
      className="relative pt-8 pb-16 md:py-24 bg-black overflow-hidden border-y border-white/10 z-10"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#f26522]/10 blur-[120px] md:blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12 mt-1 md:mt-2">
          <div className="inline-flex items-center gap-2 bg-[#f26522]/10 border border-[#f26522]/30 px-3 py-1 md:px-3.5 md:py-1.5 rounded-full text-xs text-white/95 mb-2 md:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#f26522] animate-pulse" /> 
            <span>Instant Pricing</span> Custom Window Estimator
          </div>

          <h2 className="text-white text-3xl md:text-5xl leading-tight font-extrabold tracking-tight mb-3">
            Estimate Curtain Cost Instantly
          </h2>

          <p className="text-white/50 text-sm md:text-base">
            Configure your sizes and styling options to get an instant pricing estimate with free installation across Chennai.
          </p>
        </div>

        {/* CALCULATOR CONTAINER */}
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#0c0c0c] to-[#050505] border border-white/10 rounded-[32px] p-6 md:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN - INPUTS */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* SECTION 1: DIMENSIONS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 space-y-4">
                <p className="text-[#f26522] uppercase tracking-[3px] text-xs font-semibold">
                  Step 1: Enter Window Details
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DimensionPicker
                    label="Width"
                    value={width}
                    onChange={(val) => {
                      setWidth(val);
                      setHasTrackedEstimate(false);
                    }}
                    presets={COMMON_WIDTHS}
                  />
                  <DimensionPicker
                    label="Height"
                    value={height}
                    onChange={(val) => {
                      setHeight(val);
                      setHasTrackedEstimate(false);
                    }}
                    presets={COMMON_HEIGHTS}
                  />
                </div>
                
                {/* Room and name dropdown */}
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-[2px] mb-2 font-semibold">
                    Select Room Context
                  </p>
                  <select
                    value={room}
                    onChange={(e) => {
                      setRoom(e.target.value);
                      setHasTrackedEstimate(false);
                    }}
                    className="w-full bg-[#0c0c0c] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#f26522] transition cursor-pointer"
                  >
                    {["Living Room", "Bedroom", "Office", "Dining Room", "Kids Room", "Kitchen"].map((r) => (
                      <option key={r} value={r} className="bg-black text-white">
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* SECTION 2: PRODUCT TYPE */}
              <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 space-y-4">
                <p className="text-[#f26522] uppercase tracking-[3px] text-xs font-semibold">
                  Step 2: Choose Product Type
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["🧵", "Curtains", "curtains"],
                    ["🪟", "Blinds", "blinds"],
                  ].map(([icon, label, type]) => (
                    <button
                      key={type}
                      onClick={() => {
                        setProductType(type as any);
                        setHasTrackedEstimate(false);
                      }}
                      className={`rounded-2xl px-4 py-4 border transition-all duration-300 active:scale-98 text-center flex items-center justify-center gap-2.5 font-bold cursor-pointer ${
                        productType === type
                          ? "bg-[#f26522] border-[#f26522] text-white shadow-lg shadow-orange-500/10"
                          : "bg-neutral-950 border-white/5 text-white/70 hover:bg-neutral-900"
                      }`}
                    >
                      <span className="text-xl">{icon}</span>
                      <span className="text-sm">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SECTION 3: STYLING & FABRICS */}
              <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 space-y-5">
                <p className="text-[#f26522] uppercase tracking-[3px] text-xs font-semibold">
                  Step 3: Choose Style & Materials
                </p>

                {productType === "curtains" ? (
                  <div className="space-y-6">
                    {/* Curtain Style */}
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-[2px] mb-3 font-semibold">
                        Select Curtain Style
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {Object.entries(filteredCurtainImages).map(([name, imageUrl]) => {
                          const isSelected = curtainStyle === name;
                          return (
                            <button
                              key={name}
                              onClick={() => {
                                setCurtainStyle(name);
                                setHasTrackedEstimate(false);
                              }}
                              className={`flex flex-col items-center gap-2 p-3 rounded-2xl text-center border transition duration-300 cursor-pointer ${
                                isSelected
                                  ? "bg-[#f26522] border-[#f26522] text-white shadow-md shadow-orange-500/10"
                                  : "bg-neutral-950 border-white/5 text-white/70 hover:bg-neutral-900"
                              }`}
                            >
                              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shrink-0">
                                <Image
                                  src={imageUrl}
                                  alt={name}
                                  fill
                                  sizes="80px"
                                  className="object-cover"
                                />
                              </div>
                              <span className="text-[11px] font-bold tracking-tight truncate w-full">{name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Fabric Material */}
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-[2px] mb-3 font-semibold">
                        Select Fabric Material
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {Object.entries(FABRICS).map(([fabName, price]) => {
                          const isSelected = fabricMaterial === fabName;
                          return (
                            <button
                              key={fabName}
                              onClick={() => {
                                setFabricMaterial(fabName);
                                setHasTrackedEstimate(false);
                              }}
                              className={`flex flex-col items-center gap-2 p-3 rounded-2xl text-center border transition duration-300 cursor-pointer ${
                                isSelected
                                  ? "bg-[#f26522] border-[#f26522] text-white shadow-md shadow-orange-500/10"
                                  : "bg-neutral-950 border-white/5 text-white/70 hover:bg-neutral-900"
                              }`}
                            >
                              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shrink-0">
                                <Image
                                  src={fabricImages[fabName] || "/images/fabrics/linen.jpg"}
                                  alt={fabName}
                                  fill
                                  sizes="80px"
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex flex-col w-full min-w-0">
                                <span className="text-[11px] font-bold truncate">{fabName}</span>
                                <span className={`text-[9px] ${isSelected ? "text-white/85" : "text-white/45"}`}>₹{price}/m</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Blinds Style */}
                    <p className="text-white/50 text-xs uppercase tracking-[2px] mb-3 font-semibold">
                      Select Blinds Style & Material
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {Object.entries(blinds).map(([blindName, price]) => {
                        const isSelected = blindStyle === blindName;
                        return (
                          <button
                            key={blindName}
                            onClick={() => {
                              setBlindStyle(blindName);
                              setHasTrackedEstimate(false);
                            }}
                            className={`flex flex-col items-center gap-2 p-3 rounded-2xl text-center border transition duration-300 cursor-pointer ${
                              isSelected
                                ? "bg-[#f26522] border-[#f26522] text-white shadow-md shadow-orange-500/10"
                                : "bg-neutral-950 border-white/5 text-white/70 hover:bg-neutral-900"
                            }`}
                          >
                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shrink-0">
                              <Image
                                src={blindImages[blindName] || "/images/blinds/zebra.jpg"}
                                alt={blindName}
                                fill
                                sizes="80px"
                                className="object-cover"
                              />
                            </div>
                            <div className="flex flex-col w-full min-w-0">
                              <span className="text-[11px] font-bold truncate">{blindName}</span>
                              <span className={`text-[9px] ${isSelected ? "text-white/85" : "text-white/45"}`}>₹{price}/sqft</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* RIGHT COLUMN - LIVE PREVIEW & COST DETAILS */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              
              {/* Interactive Window Blueprint */}
              <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 flex flex-col items-center justify-center">
                <div className="text-center mb-4">
                  <h4 className="text-white font-bold text-sm">Interactive Window Blueprint</h4>
                  <p className="text-white/30 text-[10px] mt-0.5">Scale preview matching window size</p>
                </div>

                <div className="relative border-4 border-neutral-700 bg-neutral-900 rounded-lg shadow-inner flex items-stretch justify-center p-0.5 transition-all duration-500"
                     style={{
                       width: "100%",
                       maxWidth: "180px",
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
                    
                    {productType === "curtains" ? (
                      <>
                        {/* Left drape */}
                        <div
                          className="w-[42%] h-full rounded-r-sm shadow-md border-r border-white/5 transition-all duration-500"
                          style={{
                            backgroundColor: blueprintFabricColors[fabricMaterial] || "#eae6df",
                            opacity: blueprintFabricOpacities[fabricMaterial] || 0.8,
                            backgroundImage: curtainStyle === "Pleated Curtains"
                              ? "linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 10px)"
                              : "linear-gradient(90deg, rgba(0,0,0,0.1) 3px, transparent 3px, transparent 14px)",
                            backgroundSize: curtainStyle === "Pleated Curtains" ? "10px 100%" : "14px 100%"
                          }}
                        />

                        {/* Right drape */}
                        <div
                          className="w-[42%] h-full rounded-l-sm shadow-md border-l border-white/5 transition-all duration-500"
                          style={{
                            backgroundColor: blueprintFabricColors[fabricMaterial] || "#eae6df",
                            opacity: blueprintFabricOpacities[fabricMaterial] || 0.8,
                            backgroundImage: curtainStyle === "Pleated Curtains"
                              ? "linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 10px)"
                              : "linear-gradient(90deg, rgba(0,0,0,0.1) 3px, transparent 3px, transparent 14px)",
                            backgroundSize: curtainStyle === "Pleated Curtains" ? "10px 100%" : "14px 100%"
                          }}
                        />
                      </>
                    ) : (
                      /* Blinds pull-down preview */
                      <div
                        className="w-full rounded-b-md shadow-md border-b border-white/10 transition-all duration-500"
                        style={{
                          height: "85%",
                          backgroundColor: blindStyle === "Roman Blinds"
                            ? "#d6c5b3"
                            : blindStyle === "Roller Blinds"
                            ? "#708090"
                            : blindStyle === "Wooden Blinds"
                            ? "#8b5a2b"
                            : blindStyle === "PVC Blinds"
                            ? "#a0aec0"
                            : "#3c3c3c",
                          opacity: 0.9,
                          backgroundImage: blindStyle === "Zebra Blinds"
                            ? "linear-gradient(180deg, rgba(0,0,0,0.3) 12px, transparent 12px, transparent 24px)"
                            : blindStyle === "Roman Blinds"
                            ? "linear-gradient(180deg, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 30px)"
                            : "none",
                          backgroundSize: blindStyle === "Zebra Blinds" ? "100% 24px" : "100% 30px"
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Estimate Results Card */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#121212] to-[#080808] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xl">
                <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#f26522]/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 text-left">
                  <div className="inline-flex items-center gap-1.5 bg-[#f26522]/10 border border-[#f26522]/20 px-3 py-1 rounded-full text-[#f26522] text-[10px] md:text-xs mb-4 font-mono font-bold">
                    ✦ ESTIMATE GENERATED LIVE
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                    Your Custom Quote
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

                  {/* Summary Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <p className="text-white/40 text-[9px] uppercase tracking-wider mb-0.5">Selection Type</p>
                      <h4 className="text-white text-xs md:text-sm font-bold truncate">
                        {productType === "curtains" ? curtainStyle : blindStyle}
                      </h4>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <p className="text-white/40 text-[9px] uppercase tracking-wider mb-0.5">Material Rate</p>
                      <h4 className="text-white text-xs md:text-sm font-bold truncate">
                        ₹{result.fabricPrice} / {productType === "curtains" ? "meter" : "sqft"}
                      </h4>
                    </div>
                  </div>

                  {/* Cost details list */}
                  <div className="space-y-2 mb-6 font-sans text-xs md:text-sm text-white/60">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span>Window Dimensions</span>
                      <span className="text-white/90 font-bold">{width || "—"} ft × {height || "—"} ft</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span>{productType === "curtains" ? "Fabric Required" : "Total Area"}</span>
                      <span className="text-white/95 font-bold">
                        {result.fabricNeeded > 0
                          ? `${result.fabricNeeded} ${productType === "curtains" ? "meters" : "sqft"}`
                          : "—"}
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span>{productType === "curtains" ? `Fabric Cost (₹${result.fabricPrice}/m)` : `Blind Cost (₹${result.fabricPrice}/sqft)`}</span>
                      <span className="text-white/95 font-mono font-bold">₹{result.fabricCost.toLocaleString()}</span>
                    </div>
                    {productType === "curtains" && (
                      <div className="flex justify-between py-1.5 border-b border-white/5">
                        <span>Stitching & Premium Channels (M-Tracks)</span>
                        <span className="text-white/90 font-mono">****</span>
                      </div>
                    )}
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
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    className="w-full text-center bg-[#f26522] hover:bg-[#ff7b3d] py-3.5 rounded-xl text-white font-extrabold transition flex items-center justify-center gap-1.5 text-xs md:text-sm shadow-lg shadow-[#f26522]/20 hover:scale-[1.02] active:scale-98 cursor-pointer"
                  >
                    📲 Get Swatches & Exact Quote via WhatsApp
                  </a>

                </div>
              </div>

            </div>

          </div>
        </div>

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

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(filteredCurtainImages).map(([name, imageUrl]) => {
              const url = curtainUrls[name] || "#";
              return (
                <Link
                  key={name}
                  href={url}
                  className="group bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-[24px] md:rounded-[32px] p-4 md:p-6 hover:border-[#f26522]/30 transition duration-500 hover:scale-[1.02] cursor-pointer block"
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
                  <h4 className="text-white text-base md:text-2xl font-semibold leading-tight flex items-center justify-between">
                    <span>{name}</span>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#f26522] group-hover:translate-x-1 transition-all duration-300" />
                  </h4>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky Mobile Bottom Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center justify-between z-50 shadow-2xl"
          >
            <div className="text-left">
              <p className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">Estimated Total</p>
              <p className="text-[#f26522] text-lg font-black font-mono leading-none mt-0.5">
                {result.total > 0 ? `₹${result.total.toLocaleString()}` : "—"}
              </p>
              <p className="text-[9px] text-white/50 truncate max-w-[170px] mt-0.5">
                {width}×{height} ft • {productType === "curtains" ? fabricMaterial : blindStyle}
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="bg-[#f26522] hover:bg-[#ff7b3d] text-white text-[11px] font-extrabold px-4.5 py-2.5 rounded-xl flex items-center gap-1.5 transition active:scale-95 shrink-0 shadow-lg shadow-[#f26522]/10"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
