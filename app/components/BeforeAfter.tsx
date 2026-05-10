"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="relative py-28 overflow-hidden bg-[#faf7f2]">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f26522]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
            Transformation Showcase
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Before & After
            <br />
            Interior Transformation
          </h2>

          <p className="text-gray-500 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Experience how premium curtains elevate spaces with elegance,
            warmth, and luxurious finishing.
          </p>

        </div>

        {/* SLIDER */}
        <div className="relative h-[700px] rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] select-none">

          {/* AFTER IMAGE */}
          <Image
            src="/images/before-after/after.jpg"
            alt="Finished living room curtain installation by Classic Delight"
            title="After curtain installation"
            fill
            className="object-cover"
          />

          {/* BEFORE IMAGE */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >

            <Image
              src="/images/before-after/before.png"
              alt="Living room window before Classic Delight curtain installation"
              title="Before curtain installation"
              fill
              className="object-cover"
            />

          </div>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* LABELS */}
          <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-xl text-white px-5 py-3 rounded-full text-sm tracking-wide">
            Before
          </div>

          <div className="absolute top-8 right-8 bg-[#f26522]/90 backdrop-blur-xl text-white px-5 py-3 rounded-full text-sm tracking-wide">
            After
          </div>

          {/* CENTER LINE */}
          <div
            className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_30px_rgba(255,255,255,0.7)]"
            style={{ left: `${position}%` }}
          >

            {/* HANDLE */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center cursor-ew-resize"
            >

              <div className="flex items-center gap-1 text-[#f26522]">

                <span>←</span>

                <span>→</span>

              </div>

            </motion.div>

          </div>

          {/* RANGE INPUT */}
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          />

        </div>

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* CARD */}
          <div className="bg-white rounded-[30px] p-8 shadow-lg">

            <div className="w-14 h-14 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-2xl mb-6">
              ✨
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Luxury Styling
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Elegant curtain installations designed beautifully
              for modern premium interiors.
            </p>

          </div>

          {/* CARD */}
          <div className="bg-[#f26522] text-white rounded-[30px] p-8 shadow-[0_20px_60px_rgba(242,101,34,0.3)]">

            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-2xl mb-6">
              🏡
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Space Transformation
            </h3>

            <p className="text-white/80 leading-relaxed">
              Instantly enhance ambiance, lighting, privacy,
              and sophistication in your home.
            </p>

          </div>

          {/* CARD */}
          <div className="bg-white rounded-[30px] p-8 shadow-lg">

            <div className="w-14 h-14 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-2xl mb-6">
              🎯
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Custom Solutions
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Tailor-made curtain solutions crafted precisely
              for your windows and interiors.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
