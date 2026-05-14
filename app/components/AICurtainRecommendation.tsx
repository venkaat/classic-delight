
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

interface Recommendation {
  curtain: string;
  fabric: string;
  description: string;
}

const recommendations: Record<string, Recommendation> = {
  Luxury: {
    curtain: "Ripple Curtains",
    fabric: "Linen",
    description:
      "Elegant premium styling ideal for luxury modern interiors with soft natural lighting.",
  },

  Modern: {
    curtain: "Eyelid Curtains",
    fabric: "Polyester",
    description:
      "Clean contemporary look with smooth functionality and affordable elegance.",
  },

  Cozy: {
    curtain: "Pleated Curtains",
    fabric: "Cotton",
    description:
      "Warm and comfortable styling perfect for family spaces and cozy bedrooms.",
  },

  Privacy: {
    curtain: "Ripple Curtains",
    fabric: "Blackout",
    description:
      "Excellent privacy and light control ideal for bedrooms and media rooms.",
  },
};

export default function AICurtainRecommendation() {
  const [room, setRoom] = useState("Living Room");
  const [style, setStyle] = useState("Luxury");
  const [width, setWidth] = useState("");
const [height, setHeight] = useState("");
  const [step, setStep] = useState(1);
  const completed =
  room && style && width && height;
  

  const result = useMemo(() => {
   const selected =
  recommendations[style as keyof typeof recommendations] ||
  recommendations["Luxury"];
    const fabricPrice = fabrics[selected.fabric as keyof typeof fabrics] || 300;

    const parsedWidth = width === "" ? 5 : (Number(width) || 0);
    const parsedHeight = height === "" ? 5 : (Number(height) || 0);

    // Calculate fabric needed based on both width (for fullness) and height
    // Approx formula: (Width * 2.2 fullness factor * (Height + margin)) / conversion to meters
    const fabricNeeded = (parsedWidth > 0 && parsedHeight > 0)
      ? Math.ceil((parsedWidth * 2.2 * (parsedHeight + 0.5)) / 3.28)
      : 0;

    const fabricCost = fabricNeeded * fabricPrice;

    // Apply fixed costs only if dimensions are provided
    const hasDimensions = parsedWidth > 0 && parsedHeight > 0;
    const tailoringCost = hasDimensions ? 1250 : 0;
    const trackCost = hasDimensions ? 1850 : 0;
    const fixingCost = hasDimensions ? 1000 : 0;

    const total = fabricCost + tailoringCost + trackCost + fixingCost;

    return {
      ...selected,
      fabricNeeded,
      fabricCost,
      tailoringCost,
      trackCost,
      fixingCost,
      total,
      fabricPrice,
    };
  }, [style, width, height]);

  return (
    <section 
      id="ai-guide" 
      className="relative py-32 bg-[#0b0b0b] overflow-hidden border-y border-white/10"
    >

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-20"
        >

          <div className="inline-flex items-center gap-3 bg-[#f26522]/10 border border-[#f26522]/30 px-5 py-2 rounded-full text-sm text-white/90 mb-8 animate-pulse">
            ✨ <span className="hidden sm:inline">AI Powered</span> Custom Curtain Recommendations
          </div>

          <h2 className="text-white text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] mb-8">
            Find Your
            <br />
            Perfect Custom Curtains
          </h2>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed bg-white/5 border border-white/10 px-8 py-6 rounded-[32px] inline-block backdrop-blur-sm shadow-2xl">
            Get <span className="text-white font-medium">personalized custom curtain recommendations</span> and 
            <span className="text-white font-medium"> instant pricing</span> with 
            <span className="text-[#f26522] font-semibold"> free installation</span> across Chennai, 
            including <span className="text-white/90">Virugambakkam</span> and <span className="text-white/90">Koyembedu</span>.
          </p>

        </motion.div>

        {/* MAIN GRID */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-12"
        >

          {/* LEFT PANEL */}
          <div className="space-y-6">

  {/* STEP 1 */}
  <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-8">

    <p className="text-[#f26522] uppercase tracking-[4px] text-sm mb-4">
      Step 1
    </p>

    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
      What room are we styling?
    </h3>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

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
    className={`rounded-[28px] px-5 py-7 border transition-all duration-500 ${
      room === item
        ? "bg-[#f26522] border-[#f26522] text-white"
        : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
    }`}
  >

    <div className="text-3xl mb-4">
      {icon}
    </div>

    <div className="text-lg">
      {item}
    </div>

  </button>

))}

    </div>

  </div>

  {/* STEP 2 */}
  {step >= 2 && (

    <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-8 transition-all duration-700">

      <p className="text-[#f26522] uppercase tracking-[4px] text-sm mb-4">
        Step 2
      </p>

      <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
        Choose your preferred style
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {[
          "Luxury",
          "Modern",
          "Cozy",
          "Privacy",
          "Office",
        ].map((item) => (

          <button
            key={item}
            onClick={() => {
              setStyle(item);
              setStep(3);
            }}
            className={`rounded-2xl px-5 py-5 border transition-all duration-500 ${
              style === item
                ? "bg-[#f26522] border-[#f26522] text-white"
                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
            }`}
          >
            {item}
          </button>

        ))}

      </div>

    </div>

  )}

  {/* STEP 3 */}
  {step >= 3 && (
    <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-8 transition-all duration-700">

      <p className="text-[#f26522] uppercase tracking-[4px] text-sm mb-4">
        Step 3
      </p>

      <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
        Tell us your window size
      </h3>

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="block text-white mb-3">
            Window Width (Feet)
          </label>

          <input
            type="text"
            inputMode="numeric"
            placeholder="10"
            value={width}
            onChange={(e) =>
              setWidth(e.target.value.replace(/[^0-9]/g, ""))
            }
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
          />

        </div>

        <div>

          <label className="block text-white mb-3">
            Window Height (Feet)
          </label>

          <input
            type="text"
            inputMode="numeric"
            placeholder="10"
            value={height}
            onChange={(e) =>
              setHeight(e.target.value.replace(/[^0-9]/g, ""))
            }
            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
          />

        </div>

      </div>

    </div>
  )}

          </div>

          {/* RIGHT PANEL */}
          {step >= 3 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0e0e0e] border border-white/10 rounded-[40px] p-8 md:p-12"
            >

            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#f26522]/20 blur-[120px] rounded-full" />

            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-2 rounded-full text-[#f26522] text-sm mb-8">
                AI Recommendation Ready
              </div>

              <h3 className="text-4xl md:text-5xl leading-tight font-semibold text-white mb-12">
                Recommended
                <br />
                Curtain Setup
              </h3>

              <div className="space-y-8">

                <div>
                  <p className="text-white/50 text-sm uppercase tracking-[3px] mb-3">
                    Recommended Type
                  </p>

                  <h4 className="text-3xl text-white font-semibold">
                    {result.curtain}
                  </h4>
                </div>

                <div>
                  <p className="text-white/50 text-sm uppercase tracking-[3px] mb-3">
                    Best Fabric
                  </p>

                  <h4 className="text-3xl text-white font-semibold">
                    {result.fabric}
                  </h4>
                </div>

                <div>

  <p className="text-white/50 text-sm uppercase tracking-[3px] mb-5">
    Cost Breakdown
  </p>

  <div className="space-y-5">

  <div className="flex justify-between text-white/70">
    <span>Window Size</span>
    <span>{width || "0"} ft x {height || "0"} ft</span>
  </div>

  <div className="flex justify-between text-white/70">
    <span>Fabric Required</span>
    <span>{result.fabricNeeded} meters</span>
  </div>

  <div className="flex justify-between text-white/70">
    <span>Fabric Cost</span>
    <span>₹{result.fabricCost.toLocaleString()}</span>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-white/60 leading-relaxed">
    Includes custom stitching, premium M-track rod and free professional installation charges.
  </div>

    <div className="border-t border-white/10 pt-5 flex justify-between items-center">

      <span className="text-white text-xl font-medium">
        Estimated Total
      </span>

      <div className="text-right">

  <p className="text-white/50 text-sm mb-2">
    Starts From
  </p>

  <span className="text-[#f26522] text-4xl font-semibold">
    ₹{result.total.toLocaleString()}
  </span>

</div>

    </div>

  </div>

                </div>

              </div>

              {/* CTA */}
              <div className="mt-14 flex flex-wrap gap-4">

                <a
                  href="https://wa.me/919840519955"
                  target="_blank"
                  className="bg-[#f26522] px-8 py-4 rounded-2xl text-white hover:scale-105 transition duration-500 shadow-[0_15px_40px_rgba(242,101,34,0.3)]"
                >
                  Get Exact Quote
                </a>

                <a
                  href="/curtain-visualizer"
                  className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl text-white hover:bg-white/10 transition duration-500"
                >
                  Try Visualizer
                </a>

              </div>

            </div>

            </motion.div>
          )}

        </motion.div>

<div className="mt-28">

  <div className="text-center max-w-3xl mx-auto mb-16">

    <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
      Curtain Fabric Collection
    </p>

    <h3 className="text-white text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-6">
      Premium Curtain
      Fabrics & Pricing
    </h3>

    <p className="text-white/60 text-lg leading-relaxed">
      Explore luxury curtain fabrics designed for modern interiors,
      elegant light control and premium finishing.
    </p>

  </div>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

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
        className="bg-white/5 border border-white/10 rounded-[28px] p-6 hover:bg-white/[0.07] transition duration-500"
      >
        <div className="relative overflow-hidden rounded-2xl mb-6">

  <Image
    src={imageUrl}
    alt={name}
    width={400}
    height={176}
    quality={60}
    style={{ height: 'auto' }}
    className="w-full h-44 object-cover hover:scale-105 transition duration-700"
  />

</div>

        <p className="text-[#f26522] text-sm uppercase tracking-[3px] mb-4">
          Fabric
        </p>

        <h4 className="text-white text-2xl font-semibold mb-3">
          {name}
        </h4>

        <p className="text-white/60">
          Starting from
        </p>

        <p className="text-white text-xl mt-2">
          {price}
        </p>

      </div>

    ))}

  </div>

</div>

{/* CURTAIN TYPES */}
<div className="mt-28">

  <div className="text-center max-w-3xl mx-auto mb-16">

    <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
      Curtain Styles
    </p>

    <h3 className="text-white text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-6">
      Curtain Types
      For Every Interior
    </h3>

    <p className="text-white/60 text-lg leading-relaxed">
      Choose from elegant curtain styles tailored for luxury homes,
      modern apartments and commercial interiors.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      ["Pleated Curtains", "/images/curtain-styles/pleated.jpg"],
      ["Ripple Curtains", "/images/curtain-styles/ripple.jpg"],
      ["Eyelet Curtains", "/images/curtain-styles/eyelet.png"],
      ["Hospital Curtains", "/images/curtain-styles/hospital.jpg"],
    ].map(([name, imageUrl]) => (

      <div
        key={name}
        className="group bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-[32px] p-6 hover:border-[#f26522]/30 transition duration-500"
      >

        <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[4/3]">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition duration-700"
          />
        </div>

        <h4 className="text-white text-2xl font-semibold leading-tight">
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
