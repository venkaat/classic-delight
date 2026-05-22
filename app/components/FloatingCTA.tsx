"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function FloatingCTA() {
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-[999] flex flex-col items-end gap-3 md:gap-4">

      {/* CONVERSION GRAPHIC - Hidden on mobile, shown on desktop */}
      <div className="hidden md:block bg-[#f26522] text-white text-[10px] font-bold uppercase tracking-[2px] px-3 py-1.5 rounded-lg shadow-2xl animate-bounce mb-[-10px] mr-2 origin-bottom border border-white/20">
        Book Free Visit
      </div>

      {/* CALL BUTTON */}
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:scale-110 transition-all duration-300 border border-neutral-200/50"
        aria-label="Call Us"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#1f1f1f] stroke-[2.2]" />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Classic%20Delight,%20I%20would%20like%20to%20book%20a%20free%20home%20consultation.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.25)] hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 stroke-[2.2]" />
        
        {/* Tooltip - Desktop only */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-white/10 hidden md:block">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}