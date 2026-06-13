"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className="relative h-[75vh] md:h-[95vh] overflow-hidden bg-black">

      {/* BACKGROUND IMAGE — plain Next.js Image for best LCP, animation on wrapper */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.webp"
          alt="Classic Delight luxury curtains and blinds for modern Chennai homes"
          title="Luxury curtains, blinds and mosquito nets in Chennai"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover"
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      {/* GLOW EFFECTS — hidden on mobile to improve mobile performance */}
      <div className="hidden md:block absolute -top-32 left-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />
      <div className="hidden md:block absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#f26522]/10 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">

        <div className="max-w-3xl">

          {/* BADGE — updated with 30% off promo, faster animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#f26522]/60 bg-[#f26522]/20 backdrop-blur-xl mb-4 md:mb-8"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm tracking-wide">
              🎉 10% Off — Today's Callers Only | Call Now!
            </span>
          </motion.div>

          {/* HEADING — faster animation */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-5xl md:text-7xl leading-[0.95] font-semibold tracking-tight"
          >
            Custom Curtains &
            <br />
            Luxury Window
            <br />
            Solutions
          </motion.h1>

          {/* DESCRIPTION — faster animation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mt-4 md:mt-8"
          >
            Elegant custom curtains, premium blinds, and mosquito net solutions with free professional installation across Chennai.
          </motion.p>

          {/* BUTTONS — faster animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-5 mt-6 md:mt-10"
          >

            {/* PRIMARY */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#f26522] hover:bg-[#ff7b3d] text-white px-8 py-4 rounded-full text-lg font-medium shadow-[0_10px_40px_rgba(242,101,34,0.35)] transition duration-500 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Get Free Quote
            </a>

            {/* SECONDARY */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="group inline-flex items-center gap-3 border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-8 py-4 rounded-full text-lg font-medium transition duration-500 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

          </motion.div>

          {/* STATS — faster animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-10 mt-8 md:mt-16 max-w-xl"
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
        transition={{ delay: 0.8 }}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-3 text-white/70">
          <span className="text-xs tracking-[4px] uppercase">Scroll</span>
          <ChevronDown className="animate-bounce w-5 h-5" />
        </div>
      </motion.div>

    </section>
  );
}
