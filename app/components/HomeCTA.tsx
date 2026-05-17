import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function HomeCTA() {
  return (
    <section className="hidden md:block relative overflow-hidden bg-black py-28 text-white">
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-[#f26522]/20 blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
          Start Your Project
        </p>
        <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
          Ready For 
          Custom Curtains?
        </h2> 
        <p className="text-white/70 text-lg mt-7 max-w-2xl mx-auto leading-relaxed">
          Book a free consultation for custom curtains or blinds with free installation in Virugambakkam, Koyembedu, and Chennai.
        </p>
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#f26522] hover:bg-[#ff7b3d] text-white px-8 py-4 rounded-full text-lg font-medium transition duration-500 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition duration-500"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
