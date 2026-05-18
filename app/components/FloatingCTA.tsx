"use client";

export default function FloatingCTA() {
  return (
    <div className="hidden md:flex fixed right-5 bottom-5 z-[999] flex-col items-end gap-4">

      {/* CONVERSION GRAPHIC */}
      <div className="bg-[#f26522] text-white text-[10px] font-bold uppercase tracking-[2px] px-3 py-1.5 rounded-lg shadow-2xl animate-bounce mb-[-10px] mr-2 origin-bottom border border-white/20">
        Book Free Visit
      </div>

      {/* CALL BUTTON */}
      <a
        href="tel:+919840519955"
        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:scale-110 transition-all duration-300"
      >
        {/* SVG */}
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919840519955?text=Hi%20Classic%20Delight,%20I%20would%20like%20a%20curtain%20consultation."
        target="_blank"
        className="group relative"
      >
        {/* CONTENT */}
      </a>

    </div>
  );
}