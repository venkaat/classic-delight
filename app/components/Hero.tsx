
"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const MotionImage = motion.create(Image);

export default function Hero() {
  return (
    <section className="relative h-[95vh] overflow-hidden bg-black">

      {/* BACKGROUND IMAGE */}
      <MotionImage
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        src="/images/hero.png"
        alt="Classic Delight luxury curtains and blinds for modern Chennai homes"
        title="Luxury curtains, blinds and mosquito nets in Chennai"
        fill
        priority
        sizes="100vw"
        quality={75}
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      {/* GLOW EFFECTS */}
      <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#f26522]/10 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">

        <div className="max-w-3xl">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl mb-8"
          >

            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

            <span className="text-white/90 text-sm tracking-wide">
              Chennai’s Premium Curtains & Blinds Studio
            </span>

          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white text-5xl md:text-7xl leading-[0.95] font-semibold tracking-tight"
          >
            Custom Curtains &
            <br />
            Luxury Window
            <br />
            Solutions
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mt-8"
          >
            Elegant custom curtains, premium blinds, and mosquito nets with free installation in 
            Virugambakkam, Koyembedu, and across Chennai.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-5 mt-10"
          >

            {/* PRIMARY */}
            <a
              href="https://wa.me/919840519955"
              target="_blank"
              className="group inline-flex items-center gap-3 bg-[#f26522] hover:bg-[#ff7b3d] text-white px-8 py-4 rounded-full text-lg font-medium shadow-[0_10px_40px_rgba(242,101,34,0.35)] transition duration-500 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Get Free Quote
            </a>

            {/* SECONDARY */}
            <a
              href="tel:+919840519955"
              className="group inline-flex items-center gap-3 border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-8 py-4 rounded-full text-lg font-medium transition duration-500 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-10 mt-16 max-w-xl"
          >

            <div>
              <h3 className="text-white text-4xl font-semibold">1000+</h3>
              <p className="text-white/60 mt-2">Homes Styled</p>
            </div>

            <div>
              <h3 className="text-white text-4xl font-semibold">10+</h3>
              <p className="text-white/60 mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-white text-4xl font-semibold">4.9★</h3>
              <p className="text-white/60 mt-2">Customer Rating</p>
            </div>

          </motion.div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >

        <div className="flex flex-col items-center gap-3 text-white/70">

          <span className="text-xs tracking-[4px] uppercase">
            Scroll
          </span>

          <ChevronDown className="animate-bounce w-5 h-5" />

        </div>

      </motion.div>

    </section>
  );
}
