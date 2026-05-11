
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

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

  const result = useMemo(() => {
    const selected = recommendations[style];
    const fabricPrice = fabrics[selected.fabric as keyof typeof fabrics] || 300;

    const parsedWidth = Number(width) || 0;
    const parsedHeight = Number(height) || 0;

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
    <section className="relative py-32 bg-[#0b0b0b] overflow-hidden border-y border-white/10">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm text-white/70 mb-8">
            ✨ AI Powered Recommendations
          </div>

          <h2 className="text-white text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] mb-8">
            Find Your
            <br />
            Perfect Curtains
          </h2>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed">
            Get personalized curtain recommendations and instant
            pricing tailored to your room style and interior needs.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-10 items-stretch">

          {/* LEFT PANEL */}
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-5 md:p-10 backdrop-blur-xl h-full">

            <h3 className="text-3xl font-semibold text-white mb-10">
              Room Preferences
            </h3>

            <div className="space-y-8">

              {/* ROOM TYPE */}
              <div>
                <label className="block text-white mb-3 font-medium">
                  Room Type
                </label>

                <select
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
                >
                  <option>Living Room</option>
                  <option>Bedroom</option>
                  <option>Office</option>
                  <option>Dining Room</option>
                  <option>Commercial Space</option>
                </select>
              </div>

              {/* STYLE */}
              <div>
                <label className="block text-white mb-3 font-medium">
                  Preferred Style
                </label>

                <div className="grid grid-cols-2 gap-4">

                  {Object.keys(recommendations).map((item) => (

                    <button
                      key={item}
                      onClick={() => setStyle(item)}
                      className={`rounded-2xl px-5 py-4 border transition-all duration-500 ${
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

              {/* WIDTH */}
              <div>
                <label className="block text-white mb-3 font-medium">
                  Window Width (Feet)
                </label>

                <input
                  type="text"
                  inputMode="decimal"
                  value={width}
                  onChange={(e) => setWidth(e.target.value.replace(/[^0-9.]/g, ""))}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
                />
              </div>

              {/* HEIGHT */}
              <div>
                <label className="block text-white mb-3 font-medium">
                  Window Height (Feet)
                </label>

                <input
                  type="text"
                  inputMode="decimal"
                  value={height}
                  onChange={(e) => setHeight(e.target.value.replace(/[^0-9.]/g, ""))}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
                />
              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0e0e0e] border border-white/10 rounded-[40px] p-5 md:p-10 h-full">

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
    <span>Fabric Required</span>
    <span>{result.fabricNeeded} meters</span>
  </div>

  <div className="flex justify-between text-white/70">
    <span>Fabric Cost</span>
    <span>₹{result.fabricCost.toLocaleString()}</span>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-white/60 leading-relaxed">
    Includes tailoring, premium M-track rod and professional installation charges.
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

          </div>

        </div>

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
].map(([name, price,imageUrl]) => (

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
      "Pleated Curtains",
      "Ripple Curtains",
      "Eyelid Curtains",
      "Hospital Curtains",
    ].map((item) => (

      <div
        key={item}
        className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-[32px] p-8 hover:border-[#f26522]/30 transition duration-500"
      >

        <div className="w-14 h-14 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] text-2xl mb-8">
          ✨
        </div>

        <h4 className="text-white text-2xl font-semibold leading-tight">
          {item}
        </h4>

      </div>

    ))}

  </div>

</div>

</div>

    </section>
  );
}
