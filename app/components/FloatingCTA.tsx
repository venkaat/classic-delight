"use client";

export default function FloatingCTA() {
  return (
    <div className="fixed right-5 bottom-5 z-[999] flex flex-col items-end gap-4">

      {/* CONVERSION GRAPHIC */}
      <div className="bg-[#f26522] text-white text-[10px] font-bold uppercase tracking-[2px] px-3 py-1.5 rounded-lg shadow-2xl animate-bounce mb-[-10px] mr-2 origin-bottom border border-white/20">
        Book Free Visit
      </div>

      {/* CALL BUTTON */}
      <a
        href="tel:+919840519955"
        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:scale-110 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.15a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919840519955?text=Hi%20Classic%20Delight,%20I%20would%20like%20a%20curtain%20consultation."
        target="_blank"
        className="group relative"
      >

        {/* PULSE */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

        {/* BUTTON */}
        <div className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.83 11.83 0 0 0 12.04 0C5.42 0 .04 5.38.04 12c0 2.11.55 4.18 1.6 6.01L0 24l6.16-1.61A11.93 11.93 0 0 0 12.04 24h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.53-8.52ZM12.05 21.82h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.66.96.98-3.57-.23-.37A9.76 9.76 0 0 1 2.23 12c0-5.41 4.4-9.82 9.82-9.82 2.62 0 5.08 1.02 6.93 2.88a9.74 9.74 0 0 1 2.88 6.94c0 5.42-4.4 9.82-9.81 9.82Zm5.39-7.36c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.65.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.24-.58-.48-.5-.65-.5h-.56c-.19 0-.48.07-.73.36-.25.29-.96.94-.96 2.29 0 1.34.98 2.64 1.11 2.82.13.19 1.92 2.93 4.66 4.11.65.28 1.16.44 1.56.56.66.21 1.27.18 1.75.11.53-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.11-.26-.18-.55-.33Z" />
          </svg>

        </div>

      </a>

    </div>
  );
}