"use client";

import { useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/siteConfig";

type CurtainType = "Standard" | "Linen" | "Blackout" | "Motorized";

const rates: Record<CurtainType, number> = {
  Standard: 180,
  Linen: 250,
  Blackout: 320,
  Motorized: 550,
};

export default function QuoteCalculator() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [type, setType] = useState<CurtainType>("Standard");

  const total =
    Number(width) && Number(height)
      ? Number(width) * Number(height) * rates[type]
      : 0;

  return (
    <section className="py-28 bg-black relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#f26522]/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
            Quick Estimate
          </p>

          <h2 className="text-white text-5xl md:text-6xl font-semibold leading-tight">
            Calculate Your
            <br />
            Curtain Cost
          </h2>

          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Get an instant estimate based on your window dimensions
            and preferred curtain type.
          </p>

        </div>

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[36px] p-10 md:p-14 shadow-2xl">

          <div className="grid md:grid-cols-3 gap-6">

            {/* WIDTH */}
            <div>

              <label className="text-white/70 text-sm mb-3 block">
                Width (ft)
              </label>

              <input
                type="number"
                placeholder="Enter width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#f26522]"
              />

            </div>

            {/* HEIGHT */}
            <div>

              <label className="text-white/70 text-sm mb-3 block">
                Height (ft)
              </label>

              <input
                type="number"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#f26522]"
              />

            </div>

            {/* TYPE */}
            <div>

              <label className="text-white/70 text-sm mb-3 block">
                Curtain Type
              </label>

              <select
                value={type}
                onChange={(e) => setType(e.target.value as CurtainType)}
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#f26522]"
              >

                {Object.keys(rates).map((item) => (
                  <option
                    key={item}
                    value={item}
                    className="text-black"
                  >
                    {item}
                  </option>
                ))}

              </select>

            </div>

          </div>

          {/* RESULT */}
          <div className="mt-12 text-center">

            <div className="inline-flex items-center gap-4 bg-[#f26522] px-8 py-5 rounded-full shadow-[0_10px_50px_rgba(242,101,34,0.4)]">

              <Calculator className="w-6 h-6 text-white" />

              <div>

                <p className="text-white/70 text-sm">
                  Estimated Price
                </p>

                <h3 className="text-white text-3xl font-semibold">
                  ₹ {total.toLocaleString()}
                </h3>

              </div>

            </div>

          </div>

          {/* CTA */}
          <div className="flex justify-center mt-10">

            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I calculated an estimate of ₹${total.toLocaleString()} for ${type} curtains.`}
              target="_blank"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition duration-500"
            >

              <MessageCircle className="w-5 h-5" />

              Get Exact Quote

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
