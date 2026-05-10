
"use client";

import { useMemo, useState } from "react";

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

const recommendations: any = {
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
  const [width, setWidth] = useState(8);
  const [height, setHeight] = useState(8);

  const result = useMemo(() => {
    const selected = recommendations[style];

    const pricePerFeet =
      fabrics[selected.fabric as keyof typeof fabrics] || 300;

    const total = width * height * pricePerFeet;

    return {
      ...selected,
      total,
      pricePerFeet,
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
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT PANEL */}
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-xl">

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
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
                />
              </div>

              {/* HEIGHT */}
              <div>
                <label className="block text-white mb-3 font-medium">
                  Window Height (Feet)
                </label>

                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
                />
              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0e0e0e] border border-white/10 rounded-[40px] p-8 md:p-10 min-h-[650px]">

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
                  <p className="text-white/50 text-sm uppercase tracking-[3px] mb-3">
                    Estimated Pricing
                  </p>

                  <h4 className="text-4xl text-[#f26522] font-semibold">
                    ₹{result.total.toLocaleString()}
                  </h4>

                  <p className="text-white/50 mt-2">
                    Starting from ₹{result.pricePerFeet} per feet
                  </p>
                </div>

                <div>
                  <p className="text-white/50 text-sm uppercase tracking-[3px] mb-3">
                    Why This Works
                  </p>

                  <p className="text-white/70 text-lg leading-relaxed">
                    {result.description}
                  </p>
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

      </div>

    </section>
  );
}
