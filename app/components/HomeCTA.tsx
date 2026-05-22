"use client";

import { MessageCircle, Phone, Sparkles, Check } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeCTA() {
  return (
    <section className="hidden md:block relative overflow-hidden bg-[#0a0907] py-28 lg:py-36 text-white border-t border-white/5">
      {/* Background gradients/blur for premium look */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#f26522]/10 blur-[130px] pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-[450px] h-[450px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Content & CTA */}
          <motion.div 
            className="md:col-span-5 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-[#f26522]/10 border border-[#f26522]/20 px-3.5 py-1.5 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#f26522] animate-pulse" />
              <span className="uppercase tracking-[3px] text-[#f26522] text-xs font-semibold">
                Start Your Project
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] tracking-tight">
              Ready For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-amber-200">
                Custom Elegance?
              </span>
            </h2>

            <p className="text-neutral-400 text-base lg:text-lg mt-6 leading-relaxed">
              Book a free home consultation for personalized curtains or blinds. Enjoy premium design guidance, custom measurements, and expert installation—all absolutely free across Chennai.
            </p>

            {/* Micro details / Feature points for premium layout */}
            <div className="mt-8 space-y-3.5">
              {[
                "100% Tailored to Your Windows",
                "Free Home Consultation & Measurement",
                "Free Expert Installation by Professionals",
                "Wide Range of Curtains, Blinds & Mosquito Nets"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-neutral-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Classic%20Delight,%20I%20would%20like%20to%20book%20a%20free%20home%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f26522] to-[#ff7b3d] hover:shadow-[0_10px_25px_rgba(242,101,34,0.3)] text-white px-8 py-4 rounded-full text-base font-semibold transition duration-500 hover:scale-[1.03] group"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                WhatsApp Us
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 hover:border-white/20 transition duration-500 hover:scale-[1.03]"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium Asymmetrical Image Collage */}
          <div className="md:col-span-7 relative h-[520px] lg:h-[580px] w-full flex items-center justify-center pl-4 lg:pl-10">
            {/* Soft decorative background blur behind image group */}
            <div className="absolute inset-0 bg-[#f26522]/5 blur-3xl rounded-full translate-x-10 translate-y-10 pointer-events-none" />

            {/* IMAGE 1: Large primary image (Curtains) */}
            <motion.div 
              className="absolute left-0 bottom-4 w-[50%] h-[78%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ originX: 0, originY: 1 }}
            >
              {/* Floating slow animation */}
              <motion.div
                className="w-full h-full relative"
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/gallery/curtains-004.jpg"
                  alt="Luxury Living Room Curtains"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20">
                    Living Room Curtains
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* IMAGE 2: Top-right offset image (Blinds) */}
            <motion.div 
              className="absolute right-4 top-4 w-[46%] h-[52%] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 group cursor-pointer"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Floating slow animation with offset timing */}
              <motion.div
                className="w-full h-full relative"
                animate={{
                  y: [0, 8, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/gallery/Curtains-016.jpg"
                  alt="Premium Window Blinds"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20">
                    Premium Blinds
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* IMAGE 3: Bottom-right detail image (Fabric close-up) */}
            <motion.div 
              className="absolute right-12 bottom-6 w-[36%] h-[34%] rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.4)] border border-white/10 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Floating slow animation with third timing offset */}
              <motion.div
                className="w-full h-full relative"
                animate={{
                  y: [0, -6, 0],
                  x: [0, 4, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/gallery/luxury-sheer-curtains-balcony-door-chennai.jpeg"
                  alt="Premium Fabric Detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-[10px] font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-md px-2.5 py-1.5 rounded-md border border-white/10">
                    Expert Tailoring
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
