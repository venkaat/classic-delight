import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Settings, 
  Scissors, 
  ShieldCheck, 
  Compass, 
  Layers, 
  Cpu 
} from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  alternates: {
    canonical: "/window-solutions",
  },
  title: "Custom Curtains & Blinds | Premium Window Solutions Chennai",
  description: "Transform your home with Classic Delight Curtains & Blinds. Premium custom curtains, roller/zebra blinds, motorized track systems & free professional installation in Chennai.",
};

const differences = [
  { title: "Free Measurement & Consultation", desc: "Expert size checks & style recommendations at your doorstep." },
  { title: "Customized Curtains & Blinds", desc: "Tailored to your exact window dimensions & decor preferences." },
  { title: "Wide Range of Premium Fabrics", desc: "Hundreds of cotton, linen, silk, velvet & blackout options." },
  { title: "Professional Installation Team", desc: "Hassle-free, precise fitting by our trained technicians." },
  { title: "Transparent Pricing", desc: "Honest window-wise estimation with zero hidden charges." },
  { title: "High-Quality Hardware & Tracks", desc: "Sturdy aluminum tracks, rods, and silent motorized systems." },
  { title: "Fast Delivery & Installation", desc: "Customized fabrication and setup within agreed timelines." },
  { title: "After-Sales Support", desc: "Dedicated warranty assistance and maintenance guidance." },
];

export default function WindowSolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#f26522]/30 overflow-hidden">
      <Header />

      {/* HERO SECTION */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-neutral-900 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-[#f26522] text-xs md:text-sm font-semibold mb-6">
            Comprehensive Window Solutions
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8 max-w-5xl mx-auto">
            Transform Your Home with <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#f26522]">
              Elegant Window Solutions
            </span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Welcome to Classic Delight Curtains & Blinds, your trusted destination for premium custom curtains, modern blinds, curtain fabrics, and personalized installation services across Chennai.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Classic%20Delight,%20I%20would%20like%20to%20book%20a%20free%20home%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f26522] hover:bg-[#ff7b3d] text-white px-7 py-4 rounded-xl text-sm font-bold shadow-lg shadow-[#f26522]/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Book Free Consultation
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* SPACE SEGMENT / INTRODUCTION */}
      <section className="py-16 border-y border-white/10 bg-neutral-950/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Premium Custom Curtains & Blinds for Every Home
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                At Classic Delight, we believe windows are one of the most important design elements in any space. Our goal is to provide high-quality products, professional installation, and personalized recommendations that match your style, layout, and budget.
              </p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Whether you are decorating a villa in ECR, an apartment in Anna Nagar, or a modern commercial office in OMR, we customize every fabric stitch and blind hardware system to match your environment.
              </p>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/images/chennai-curtains/interior.jpg"
                alt="Elegant curtains and blinds installed in a luxury living room"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & WHAT MAKES US DIFFERENT */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#f26522] text-xs font-semibold mb-4">
              Our Core Strengths
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Why Choose Classic Delight?
            </h2>
            <p className="text-white/40 text-sm mt-3">
              What makes us the preferred window solutions brand in Chennai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differences.map((diff, i) => (
              <div 
                key={i} 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition duration-300 hover:border-[#f26522]/30 hover:bg-white/[0.07]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-[#f26522]" />
                </div>
                <h3 className="text-base font-bold mb-2 text-white">
                  {diff.title}
                </h3>
                <p className="text-white/50 text-xs leading-normal">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTIONS */}
      <section className="py-24 bg-neutral-950/30 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#f26522] text-xs font-semibold mb-4">
              Comprehensive Offerings
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Our Curtain & Blind Services
            </h2>
          </div>

          <div className="space-y-16">
            {/* SERVICE 1 */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[#f26522] font-mono text-xs uppercase tracking-widest bg-[#f26522]/10 px-3 py-1 rounded-full border border-[#f26522]/20">
                    Service 01
                  </span>
                  <h3 className="text-3xl font-extrabold mt-4 mb-4 text-white">Custom Curtains</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Enhance your interiors with beautifully tailored curtains designed to fit your windows perfectly. We provide personalized stitching, premium grommets, and double-height drapery systems.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">Available Styles</h4>
                      <ul className="text-xs text-white/50 space-y-1">
                        <li>• Ripple Fold Curtains</li>
                        <li>• Pleated Curtains</li>
                        <li>• Eyelet Curtains</li>
                        <li>• Pinch Pleat Curtains</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">Fabric Selection</h4>
                      <ul className="text-xs text-white/50 space-y-1">
                        <li>• Blackout Curtains</li>
                        <li>• Sheer Curtains</li>
                        <li>• Velvet & Linen</li>
                        <li>• Cotton Drapery</li>
                      </ul>
                    </div>
                  </div>

                  <Link 
                    href="/curtains"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#f26522] hover:text-[#ff7b3d] transition-colors"
                  >
                    Explore Curtains Collection
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="relative h-[250px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/5">
                  <Image
                    src="/images/services/curtains.png"
                    alt="Custom Curtains Chennai"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* SERVICE 2 */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-[250px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/5">
                  <Image
                    src="/images/services/blinds.png"
                    alt="Modern Window Blinds Chennai"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <span className="text-[#f26522] font-mono text-xs uppercase tracking-widest bg-[#f26522]/10 px-3 py-1 rounded-full border border-[#f26522]/20">
                    Service 02
                  </span>
                  <h3 className="text-3xl font-extrabold mt-4 mb-4 text-white">Window Blinds</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Modern blinds offer a sleek, space-saving appearance while providing excellent precise control over sunlight, glare, and room privacy.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">Our Collections</h4>
                      <ul className="text-xs text-white/50 space-y-1">
                        <li>• Roller Blinds</li>
                        <li>• Zebra Blinds</li>
                        <li>• Wooden Blinds</li>
                        <li>• Venetian Blinds</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400">Specialty options</h4>
                      <ul className="text-xs text-white/50 space-y-1">
                        <li>• Roman & Vertical Blinds</li>
                        <li>• PVC Blinds</li>
                        <li>• Blackout Blinds</li>
                        <li>• Office Blind Systems</li>
                      </ul>
                    </div>
                  </div>

                  <Link 
                    href="/blinds"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#f26522] hover:text-[#ff7b3d] transition-colors"
                  >
                    Explore Blinds Collection
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* SERVICE 3 & 4 Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* SERVICE 3 */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-mono text-[10px] uppercase tracking-widest">
                    Service 03
                  </span>
                  <h4 className="text-xl font-bold mt-2 mb-3 text-white">Motorized Curtains & Blinds</h4>
                  <p className="text-white/50 text-xs leading-relaxed mb-6">
                    Experience smart home luxury with automated remote control operations, silent curtain motors, and home assistant integrations.
                  </p>
                  <ul className="text-xs text-white/40 space-y-1.5 mb-6">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#f26522]" /> Remote Control & App Scheduling</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#f26522]" /> Smart Home Integration</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#f26522]" /> Smooth, Whisper-Silent Motors</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Classic%20Delight,%20I%20want%20to%20know%20more%20about%20motorized%20solutions.`}
                  target="_blank"
                  className="text-xs text-[#f26522] font-bold hover:underline"
                >
                  Consult on Motorization &rarr;
                </a>
              </div>

              {/* SERVICE 4 */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-orange-400 font-mono text-[10px] uppercase tracking-widest">
                    Service 04
                  </span>
                  <h4 className="text-xl font-bold mt-2 mb-3 text-white">Curtain Tracks & Hardware</h4>
                  <p className="text-white/50 text-xs leading-relaxed mb-6">
                    A beautiful curtain deserves a premium support system. We supply and fit heavy-duty channels, designer wall brackets, and sleek ceiling rods.
                  </p>
                  <ul className="text-xs text-white/40 space-y-1.5 mb-6">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#f26522]" /> Ripple Fold Tracks</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#f26522]" /> Aluminum Heavy-Duty Tracks</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#f26522]" /> Wall & Ceiling Rod Systems</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Classic%20Delight,%20I%20want%20to%20know%20more%20about%20tracks%20and%20hardware.`}
                  target="_blank"
                  className="text-xs text-[#f26522] font-bold hover:underline"
                >
                  Request Hardware Catalog &rarr;
                </a>
              </div>
            </div>

            {/* SERVICE 5 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-4 text-white">Fabric Selection Service</h4>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Choose from a carefully curated collection of premium fabrics. Our onsite design team assists you with matching swatches to your existing wall colors, room lighting levels, and budget constraints.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {["Polyester", "Linen", "Cotton", "Velvet", "Chenille", "Blackout Fabrics", "Sheer Fabrics", "Printed Fabrics"].map((fab) => (
                  <span key={fab} className="bg-neutral-900 border border-white/5 text-white/70 text-xs px-3.5 py-1.5 rounded-full">
                    {fab}
                  </span>
                ))}
              </div>

              <p className="text-xs text-neutral-400">
                💡 <strong>Tip:</strong> We recommend blackout curtains for bedrooms to block 99% light, and sheer fabric overlays for living rooms to diffuse natural light beautifully.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR PROCESS SECTION */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#f26522] text-xs font-semibold mb-4">
              5 Simple Steps
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Our Process
            </h2>
            <p className="text-white/40 text-xs mt-3">
              How we deliver custom perfection to your windows
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "Step 1", title: "Free Consultation", desc: "Our design experts consult with you to understand your layout requirements, fabric texture choices, and target project budget." },
              { step: "Step 2", title: "Onsite Measurement", desc: "We visit your home or office in Chennai to take exact measurements of window frames to ensure zero margin of error." },
              { step: "Step 3", title: "Fabric & Design Selection", desc: "Select from our vast catalog of curtains, blinds, tracks, motorized controls, and drapery accessories." },
              { step: "Step 4", title: "Precise Custom Manufacturing", desc: "Your curtains are tailored and blinds assembled with high-grade stitching machine technology." },
              { step: "Step 5", title: "Professional Installation", desc: "Our installers fit the tracks, rods, and window coverings seamlessly, leaving your home perfectly styled." },
            ].map((proc, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between hover:border-[#f26522]/30 transition"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 shrink-0 rounded-full bg-[#f26522]/10 border border-[#f26522]/20 flex items-center justify-center font-bold text-xs text-[#f26522]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {proc.title}
                    </h3>
                    <p className="text-white/40 text-[10px] uppercase font-mono mt-0.5 tracking-wider">
                      {proc.step}
                    </p>
                  </div>
                </div>
                <p className="text-white/60 text-xs sm:max-w-md leading-relaxed">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS FOR EVERY SPACE */}
      <section className="py-24 bg-neutral-950/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#f26522] text-xs font-semibold mb-4">
              Customized Use Cases
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Solutions for Every Space
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Living Room Curtains", desc: "Create a warm, welcoming atmosphere with layered drapery matching your sofa set, allowing natural light during the day and privacy at night." },
              { title: "Bedroom Curtains", desc: "Durable sound-insulating blackout curtains to promote deeper sleep and screen glare from streetlights completely." },
              { title: "Office Blinds", desc: "Sleek roller, zebra, or vertical blinds for commercial spaces that minimize screen glare and enhance office productivity." },
              { title: "Villa & Apartment Solutions", desc: "Integrated setups for sliding glass patio doors, double-height bays, and motorized living room custom curtains." },
              { title: "Hotel & Commercial Projects", desc: "Flame-retardant curtains, customized hospital track curtains, and wholesale blinds for bulk installations." },
            ].map((space, i) => (
              <div 
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#f26522]/30 transition"
              >
                <h4 className="text-lg font-bold mb-2 text-white">
                  {space.title}
                </h4>
                <p className="text-white/50 text-xs leading-relaxed">
                  {space.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMERS TRUST */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[4px] text-[#f26522] text-xs font-semibold mb-4">
            Quality Guaranteed
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16">
            Why Customers Trust Classic Delight
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "Premium Quality", desc: "We source fabrics and hardware channels from reliable manufacturers." },
              { title: "Expert Installation", desc: "Precise measurements and smooth operations of rods and runners." },
              { title: "Custom Designs", desc: "Each drapery panel is customized window-by-window for you." },
              { title: "Competitive Pricing", desc: "Premium luxury look at fair, transparent, and competitive pricing." },
            ].map((trust, i) => (
              <div key={i} className="border-l border-[#f26522] pl-4">
                <h4 className="text-base font-bold text-white mb-2">{trust.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-br from-neutral-950 to-neutral-900 border-t border-white/10 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#f26522]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-[#f26522] text-xs uppercase font-mono tracking-widest bg-[#f26522]/10 px-4 py-1.5 rounded-full border border-[#f26522]/20">
            Book Onsite Appointment
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 mb-6">
            Book Your Free Measurement Today
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Get started in 3 easy steps: schedule a visit, select your curtains or blinds from our swatch catalogs, and enjoy professional installation with a warranty.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Classic%20Delight,%20I%20would%20like%20to%20schedule%20a%20free%20measurement%20visit.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#f26522] hover:bg-[#ff7b3d] text-white py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition hover:scale-105 active:scale-95 shadow-lg shadow-[#f26522]/10"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex-1 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
