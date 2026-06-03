"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Sparkles, ArrowRight, Bot, Image as ImageIcon } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const fabrics = {
  Cotton: 400,
  Linen: 400,
  Polyester: 130,
  Blackout: 220,
  Silk: 300,
  "Poly Cotton": 400,
  "Custom Printed": 300,
  Sheer: 300,
};

const fabricImages: Record<string, string> = {
  Cotton: "/images/fabrics/cotton.jpg",
  Linen: "/images/fabrics/linen.jpg",
  Polyester: "/images/fabrics/polyester.jpg",
  Blackout: "/images/fabrics/blackout.jpg",
  Silk: "/images/fabrics/silk.jpg",
  "Poly Cotton": "/images/fabrics/polycotton.jpg",
  "Custom Printed": "/images/fabrics/printed.jpg",
  Sheer: "/images/fabrics/sheer.jpg",
};

const blueprintFabricColors: Record<string, string> = {
  Cotton: "#faf0e6", // Linen/cotton warm white
  Linen: "#d6c5b3", // Natural linen beige
  Polyester: "#708090", // Slate grey polyester
  Blackout: "#1c2321", // Deep charcoal blackout
  Silk: "#d4af37", // Silk gold
  "Poly Cotton": "#eae6df", // Off-white polycotton
  "Custom Printed": "#8b5a2b", // Rich printed patterned brown
  Sheer: "#f5f5f5", // Translucent white sheer
};

const blueprintFabricOpacities: Record<string, number> = {
  Cotton: 0.8,
  Linen: 0.85,
  Polyester: 0.85,
  Blackout: 0.98,
  Silk: 0.9,
  "Poly Cotton": 0.8,
  "Custom Printed": 0.9,
  Sheer: 0.35,
};

const curtainImages: Record<string, string> = {
  "Pleated Curtains": "/images/curtain-styles/pleated.jpg",
  "Ripple Curtains": "/images/curtain-styles/ripple.jpg",
  "Eyelet Curtains": "/images/curtain-styles/eyelet.png",
  "Hospital Curtains": "/images/curtain-styles/hospital.jpg",
};

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
    const tailoringCost = hasDimensions ? 1250 : 0;
    const trackCost = hasDimensions ? 1850 : 0;
    const fixingCost = hasDimensions ? 1000 : 0;
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
      className="relative py-16 md:py-32 bg-[#0b0b0b] overflow-hidden border-y border-white/10"
    >
      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#f26522]/20 blur-[120px] md:blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#f26522]/10 border border-[#f26522]/30 px-4 py-2 rounded-full text-xs sm:text-sm text-white/90 mb-6 md:mb-8">
            <Sparkles className="w-4 h-4 text-[#f26522] animate-pulse" /> <span>AI Powered</span> Custom Curtain Recommendations
          </div>

          <h2 className="text-white text-4xl sm:text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] mb-6 md:mb-8">
            Find Your
            <br />
            Perfect Custom Curtains
          </h2>

          <p className="text-white/70 text-base md:text-xl leading-relaxed bg-white/5 border border-white/10 px-5 sm:px-8 py-5 sm:py-6 rounded-[24px] sm:rounded-[32px] inline-block backdrop-blur-sm shadow-2xl">
            Get{" "}
            <span className="text-white font-medium">
              personalized custom curtain recommendations
            </span>{" "}
            and{" "}
            <span className="text-white font-medium">instant pricing</span> with{" "}
            <span className="text-[#f26522] font-semibold">
              free installation
            </span>{" "}
            across Chennai, including{" "}
            <span className="text-white/90">Virugambakkam</span> and{" "}
            <span className="text-white/90">Koyembedu</span>.
          </p>
        </motion.div>

        {/* PROGRESS WIZARD INDICATOR */}
        <div className="max-w-3xl mx-auto mb-8 px-4">
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

        {/* MAIN CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-4 md:space-y-6"
        >

          {/* STEP 1 */}
          <div className="bg-white/5 border border-white/10 rounded-[24px] md:rounded-[32px] p-5 md:p-8 transition-all duration-300 hover:border-white/20">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <p className="text-[#f26522] uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm font-semibold">
                Step 1
              </p>
              {step >= 2 && (
                <span className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                  ✓ Styling {room}
                </span>
              )}
            </div>
            <h3 className="text-2xl md:text-4xl font-semibold text-white mb-5 md:mb-8">
              What room are we styling?
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
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
                  className={`rounded-[20px] md:rounded-[28px] px-3 py-5 md:px-5 md:py-7 border transition-all duration-550 active:scale-98 ${
                    room === item
                      ? "bg-[#f26522] border-[#f26522] text-white shadow-[0_10px_20px_rgba(242,101,34,0.25)]"
                      : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="text-2xl md:text-3xl mb-2 md:mb-4">{icon}</div>
                  <div className="text-sm md:text-lg font-medium">{item}</div>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 2 */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-[24px] md:rounded-[32px] p-5 md:p-8 transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <p className="text-[#f26522] uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm font-semibold">
                    Step 2
                  </p>
                  {step >= 3 && (
                    <span className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                      ✓ {style} Vibe
                    </span>
                  )}
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold text-white mb-5 md:mb-8">
                  Choose your preferred style
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {Object.entries(recommendations).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setStyle(key);
                        setStep(3);
                      }}
                      className={`rounded-2xl px-5 py-5 border text-left transition-all duration-500 active:scale-98 flex flex-col justify-between min-h-[110px] ${
                        style === key
                          ? "bg-[#f26522] border-[#f26522] text-white shadow-[0_10px_20px_rgba(242,101,34,0.25)]"
                          : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      <div>
                        <div className="text-base font-bold mb-1">{key} Vibe</div>
                        <div className={`text-xs ${style === key ? "text-white/80" : "text-white/40"}`}>
                          {item.subtitle}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between w-full">
                        <span className="text-[10px] font-mono tracking-wider uppercase opacity-75">
                          {item.curtain}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* STEP 3 — Window Size & Live Vector Blueprint */}
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-[24px] md:rounded-[32px] p-5 md:p-8 transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <p className="text-[#f26522] uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm font-semibold">
                    Step 3
                  </p>
                  {width && height && (
                    <span className="text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                      ✓ {width} × {height} ft
                    </span>
                  )}
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold text-white mb-2">
                  Tell us your window size
                </h3>
                <p className="text-white/40 text-sm mb-6">
                  Select a common preset size, drag the slider, or tap Custom to type
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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

                {/* DYNAMIC WINDOW VECTOR BLUEPRINT */}
                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center justify-center">
                  <div className="text-center mb-6">
                    <h4 className="text-white font-bold text-sm">Interactive Window Blueprint</h4>
                    <p className="text-white/30 text-xs mt-1">Live scale visualization based on selected dimensions</p>
                  </div>

                  <div className="relative border-4 border-neutral-700 bg-neutral-900 rounded-lg shadow-inner transition-all duration-500 flex items-stretch justify-center p-0.5"
                       style={{
                         width: "100%",
                         maxWidth: "240px",
                         // Aspect-ratio height calculation:
                         height: `${Math.min(220, Math.max(100, 140 * (Number(height) || 8) / (Number(width) || 6)))}px`,
                       }}
                  >
                    {/* Width indicator (top) */}
                    <div className="absolute -top-7 left-0 right-0 flex items-center justify-between text-[10px] text-orange-400 font-mono">
                      <span className="w-full h-[1px] bg-orange-500/30 border-t border-dashed" />
                      <span className="mx-2 whitespace-nowrap">{width} ft wide</span>
                      <span className="w-full h-[1px] bg-orange-500/30 border-t border-dashed" />
                    </div>

                    {/* Height indicator (right) */}
                    <div className="absolute -right-16 top-0 bottom-0 flex flex-col items-center justify-between py-2 text-[10px] text-orange-400 font-mono w-12">
                      <span className="h-full w-[1px] bg-orange-500/30 border-r border-dashed" />
                      <span className="my-2 whitespace-nowrap rotate-90">{height} ft tall</span>
                      <span className="h-full w-[1px] bg-orange-500/30 border-r border-dashed" />
                    </div>

                    {/* Inner Glass Simulation & Curtain Overlay */}
                    <div className="absolute inset-1 border border-neutral-800 bg-sky-950/15 overflow-hidden flex justify-between items-stretch">
                      {/* Glass glare diagonals */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                      {/* Left Curtain Drape */}
                      <div
                        className="w-[42%] h-full rounded-r-md transition-all duration-500 shadow-md border-r border-white/5"
                        style={{
                          backgroundColor: blueprintFabricColors[overrideFabric || recommendations[style]?.fabric] || "#eae6df",
                          opacity: blueprintFabricOpacities[overrideFabric || recommendations[style]?.fabric] || 0.8,
                          // Simulate curtain gather pleats using CSS repeating gradients
                          backgroundImage: result.curtain === "Pleated Curtains"
                            ? "linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 12px)"
                            : "linear-gradient(90deg, rgba(0,0,0,0.1) 4px, transparent 4px, transparent 16px)",
                          backgroundSize: result.curtain === "Pleated Curtains" ? "12px 100%" : "16px 100%"
                        }}
                      />

                      {/* Right Curtain Drape */}
                      <div
                        className="w-[42%] h-full rounded-l-md transition-all duration-500 shadow-md border-l border-white/5"
                        style={{
                          backgroundColor: blueprintFabricColors[overrideFabric || recommendations[style]?.fabric] || "#eae6df",
                          opacity: blueprintFabricOpacities[overrideFabric || recommendations[style]?.fabric] || 0.8,
                          backgroundImage: result.curtain === "Pleated Curtains"
                            ? "linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 12px)"
                            : "linear-gradient(90deg, rgba(0,0,0,0.1) 4px, transparent 4px, transparent 16px)",
                          backgroundSize: result.curtain === "Pleated Curtains" ? "12px 100%" : "16px 100%"
                        }}
                      />
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* RESULT PANEL */}
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.97, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden bg-gradient-to-br from-[#121212] to-[#080808] border border-white/10 rounded-[28px] md:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-[#f26522]/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-[#f26522]/10 border border-[#f26522]/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[#f26522] text-xs md:text-sm mb-5 md:mb-8 font-mono">
                    ✦ AI RECOMMENDATION GENERATED
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-semibold text-white mb-6 md:mb-8">
                    Your Tailored
                    <br />
                    Curtain Setup
                  </h3>

                  {/* ESTIMATED TOTAL */}
                  <div className="bg-[#f26522]/10 border border-[#f26522]/20 rounded-2xl md:rounded-3xl p-5 md:p-6 mb-6 md:mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-[3px] mb-1 font-semibold">
                        Estimated Total
                      </p>
                      <p className="text-white/60 text-xs md:text-sm">
                        {width && height
                          ? `${width} ft × ${height} ft window`
                          : "Enter dimensions above"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Total Pricing</p>
                      <span className="text-[#f26522] text-3xl sm:text-4xl font-black font-mono">
                        {result.total > 0
                          ? `₹${result.total.toLocaleString()}`
                          : "—"}
                      </span>
                    </div>
                  </div>

                  {/* CURTAIN + FABRIC ROW - Dynamic Image Previews */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8">
                    
                    {/* CURTAIN TYPE WITH IMAGE PREVIEW */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:border-white/20">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex-shrink-0">
                        <Image
                          src={curtainImages[result.curtain] || "/images/curtain-styles/ripple.jpg"}
                          alt={result.curtain}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px] uppercase tracking-[1.5px] mb-1">
                          Curtain Style
                        </p>
                        <h4 className="text-white text-base font-bold leading-tight">
                          {result.curtain}
                        </h4>
                      </div>
                    </div>

                    {/* BEST FABRIC WITH IMAGE PREVIEW */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:border-white/20">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex-shrink-0">
                        <Image
                          src={fabricImages[result.fabric] || "/images/fabrics/linen.jpg"}
                          alt={result.fabric}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px] uppercase tracking-[1.5px] mb-1">
                          Best Fabric
                        </p>
                        <h4 className="text-white text-base font-bold leading-tight">
                          {result.fabric}
                        </h4>
                      </div>
                    </div>

                  </div>

                  {/* INTERACTIVE SWATCH SELECTOR / CUSTOM OVERRIDES */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6 md:mb-8">
                    <p className="text-white/50 text-xs uppercase tracking-[2px] font-semibold mb-4">
                      Customize Fabric Choice:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {Object.keys(fabrics).map((fabName) => {
                        const isSelected = result.fabric === fabName;
                        return (
                          <button
                            key={fabName}
                            onClick={() => setOverrideFabric(fabName)}
                            className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                              isSelected
                                ? "bg-[#f26522] border-[#f26522] text-white shadow-md shadow-orange-500/10"
                                : "bg-neutral-950 hover:bg-neutral-900 border-white/5 text-white/70"
                            }`}
                          >
                            <div className="relative w-4.5 h-4.5 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                              <Image
                                src={fabricImages[fabName] || "/images/fabrics/linen.jpg"}
                                alt={fabName}
                                fill
                                sizes="18px"
                                className="object-cover"
                              />
                            </div>
                            <span className="truncate">{fabName}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* COST BREAKDOWN */}
                  <div className="space-y-3.5 mb-6 md:mb-8 font-sans">
                    <p className="text-white/40 text-[10px] uppercase tracking-[3px] font-bold">
                      Estimated Cost Breakdown
                    </p>

                    <div className="flex justify-between text-sm text-white/60 py-2 border-b border-white/5">
                      <span>Window Size</span>
                      <span className="text-white/95 font-semibold">
                        {width || "—"} ft × {height || "—"} ft
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-white/60 py-2 border-b border-white/5">
                      <span>Fabric Needed</span>
                      <span className="text-white/90">
                        {result.fabricNeeded > 0 ? `${result.fabricNeeded} meters` : "—"}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-white/60 py-2 border-b border-white/5">
                      <span>
                        Fabric Cost{" "}
                        <span className="text-white/35 text-[11px] font-mono">
                          (₹{result.fabricPrice}/m)
                        </span>
                      </span>
                      <span className="text-white/90 font-mono">
                        {result.fabricCost > 0 ? `₹${result.fabricCost.toLocaleString()}` : "—"}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-white/60 py-2 border-b border-white/5">
                      <span>Tailoring & Stitching</span>
                      <span className="text-white/90 font-mono">
                        {result.tailoringCost > 0 ? `₹${result.tailoringCost.toLocaleString()}` : "—"}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-white/60 py-2 border-b border-white/5">
                      <span>Premium M-Track Rods</span>
                      <span className="text-white/90 font-mono">
                        {result.trackCost > 0 ? `₹${result.trackCost.toLocaleString()}` : "—"}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-white/60 py-2 border-b border-white/5">
                      <span>Professional Installation</span>
                      <span className="text-emerald-400 font-bold tracking-wide">
                        {result.fixingCost > 0 ? "FREE" : "—"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-white text-base font-bold">
                        Estimated Total
                      </span>
                      <span className="text-[#f26522] text-2xl md:text-3xl font-black font-mono">
                        {result.total > 0 ? `₹${result.total.toLocaleString()}` : "—"}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-white/40 leading-relaxed mb-8">
                    *Estimates are calculated using standard 2.2x fabric gather factor. Rods and installation services are free of charge within Chennai branch limits.
                  </div>

                  {/* ACTION CTA BUTTONS */}
                  <div className="space-y-3.5">
                    {/* Primary quote CTA */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-[#f26522] hover:bg-[#ff7b3d] px-6 py-4.5 rounded-2xl text-white font-bold hover:scale-105 active:scale-95 transition duration-300 shadow-[0_15px_40px_rgba(242,101,34,0.25)] flex items-center justify-center gap-2 text-base"
                    >
                      📲 Request Swatch Consult & Exact Quote
                    </a>

                    {/* Secondary Visualizer Deep-Links */}
                    <div className="block">
                      <Link
                        href={textToImageUrl}
                        className="w-full py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-98"
                      >
                        🎨 Preview with AI Text-to-Image
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

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
            {[
              ["Cotton", "₹400 / meter", "/images/fabrics/cotton.jpg"],
              ["Linen", "₹400 / meter", "/images/fabrics/linen.jpg"],
              ["Polyester", "₹130 / meter", "/images/fabrics/polyester.jpg"],
              ["Blackout", "₹220 / meter", "/images/fabrics/blackout.jpg"],
              ["Silk", "₹300 / meter", "/images/fabrics/silk.jpg"],
              ["Poly Cotton", "₹400 / meter", "/images/fabrics/polycotton.jpg"],
              ["Custom Printed", "₹300 / meter", "/images/fabrics/printed.jpg"],
              ["Sheer", "₹300 / meter", "/images/fabrics/sheer.jpg"],
            ].map(([name, price, imageUrl]) => (
              <div
                key={name}
                className="bg-white/5 border border-white/10 rounded-[20px] md:rounded-[28px] p-4 md:p-6 hover:bg-white/[0.07] transition duration-500"
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-6">
                  <Image
                    src={imageUrl as string}
                    alt={name as string}
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
                <p className="text-white text-base md:text-xl mt-1 md:mt-2">{price}</p>
              </div>
            ))}
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
            {[
              ["Pleated Curtains", "/images/curtain-styles/pleated.jpg"],
              ["Ripple Curtains", "/images/curtain-styles/ripple.jpg"],
              ["Eyelet Curtains", "/images/curtain-styles/eyelet.png"],
              ["Hospital Curtains", "/images/curtain-styles/hospital.jpg"],
            ].map(([name, imageUrl]) => (
              <div
                key={name}
                className="group bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-[24px] md:rounded-[32px] p-4 md:p-6 hover:border-[#f26522]/30 transition duration-500"
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-8 aspect-[4/3]">
                  <Image
                    src={imageUrl as string}
                    alt={name as string}
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
