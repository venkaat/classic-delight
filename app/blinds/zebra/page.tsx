'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Layers, 
  Ruler, 
  Scissors, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  Maximize2,
  X,
  MessageCircle,
  HelpCircle,
  Eye,
  Info,
  ChevronLeft,
  ChevronRight,
  Sliders,
  Settings
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import { siteConfig } from "@/lib/siteConfig";

const zebraImages = [
  {
    src: "/images/zebra-blinds/zebra-blind-1.jpeg",
    title: "Modern Living Room Zebra Blinds",
    desc: "Dual-layer sheer and solid stripes aligned to allow gentle natural light while blocking intense outdoor glare."
  },
  {
    src: "/images/zebra-blinds/zebra-blind-2.jpeg",
    title: "Dining Area Light Filtering Zebra Shades",
    desc: "Seamlessly shifted opaque bands offering private dining environment and modern architectural lines."
  },
  {
    src: "/images/zebra-blinds/zebra-blind.jpeg",
    title: "Premium Zebra Blind Installation",
    desc: "Complete double-roller setup installed in a cozy bedroom recess, providing flexible light levels."
  },
  {
    src: "/images/blinds/zebra.jpg",
    title: "Sleek Executive Office Zebra Blinds",
    desc: "Clean geometric light stripes offering a professional setting for study tables and modern home offices."
  },
  {
    src: "/images/gallery/floral-zebra-window-blinds-chennai.jpg",
    title: "Floral Printed Zebra Window Blinds",
    desc: "A beautiful custom floral pattern printed on alternate solid bands, combining art with window functionality."
  }
];

const zebraFeatures = [
  {
    title: "Dual-Layer Light Control",
    desc: "Zebra blinds feature alternating stripes of sheer mesh and solid fabric. By shifting them, you can easily switch between full privacy, filtered daylight, or a complete open view.",
    icon: <Sparkles className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Day and night dual function", "Precise light control increments", "Soft ambient room illumination"]
  },
  {
    title: "Anti-Static & Dust Repellent",
    desc: "Our zebra fabrics are treated with advanced anti-static properties that reject dust and dirt accumulation. An occasional dusting keeps them looking brand new.",
    icon: <Layers className="w-6 h-6 text-[#f26522]" />,
    benefits: ["100% premium polyester yarns", "Low maintenance design", "Moisture-resistant properties"]
  },
  {
    title: "Whisper-Quiet Motorization",
    desc: "Upgrade to motorized zebra blinds for ultimate modern luxury. Operates via sleek wireless remotes, wall switches, smartphone applications, or smart voice commands.",
    icon: <Sliders className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Somfy & Tuya smart integration", "Preset favorites for mid-alignment", "No hanging cords for child safety"]
  },
  {
    title: "Compact Double Rail cassette",
    desc: "The entire fabric rolls into a compact top aluminum headbox casing, protecting the roll from dust and blending seamlessly into the window recess.",
    icon: <Settings className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Color-coordinated headbox covers", "Heavy-duty bottom rails", "Prevents light leakage from top"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Recess Check",
    desc: "Our designers check your window depth to ensure there is enough clearance for the double-roller top cassette mechanism.",
    icon: <Ruler className="w-5 h-5" />
  },
  {
    step: "02",
    title: "Stripe Width Selection",
    desc: "Choose between standard-sized stripes or bold wide stripes depending on your window size and design style.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    step: "03",
    title: "Precision Custom Tailoring",
    desc: "We cut the fabric, secure it to the dual roller tracks, and check that the horizontal lines align perfectly when travel starts.",
    icon: <Scissors className="w-5 h-5" />
  },
  {
    step: "04",
    title: "Setup & Alignment Check",
    desc: "Our team mounts the headbox, checks fabric travel limits, programs motors, and secures safety chain tension blocks.",
    icon: <CheckCircle className="w-5 h-5" />
  }
];

const faqs = [
  {
    q: "How do zebra blinds work?",
    a: "Zebra blinds use a single loop of fabric that travels over a double roller system. The fabric features alternating stripes of sheer mesh and solid opaque fabric. As you pull the cord (or run the motor), the stripes shift. When the solid stripes overlap, daylight filters in through the sheer sections. When they are staggered, the solid stripes form a continuous panel for complete privacy."
  },
  {
    q: "Do zebra blinds block out light completely?",
    a: "Standard zebra blinds are designed for light filtering and privacy. However, we do offer zebra fabrics with specialized blackout solid bands. While they provide excellent darkness, there may still be minor light seepage through the sheer mesh layers if not fully closed, so we recommend roller or roman blinds for complete blackouts."
  },
  {
    q: "Are zebra blinds durable for daily residential usage?",
    a: "Yes! They are made from high-strength 100% polyester fibers that resist stretching and fraying. The mechanical gears in our headboxes are commercial-grade to ensure thousands of smooth cycles."
  },
  {
    q: "Can you motorize zebra blinds?",
    a: "Absolutely! Motorization is highly popular for zebra blinds. We offer quiet internal battery or AC motors. You can control a single blind or group multiple blinds to raise or align together using a remote control or smartphone app."
  },
  {
    q: "How do you clean zebra blinds?",
    a: "They are very easy to maintain. Since they are treated with anti-static layers, dust does not easily stick. You can clean them by lightly vacuuming with a soft brush attachment, or wiping any spot stains with a damp cloth and mild soap."
  }
];

const zebraSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.classicdelight.in/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blinds",
      "item": "https://www.classicdelight.in/blinds"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Zebra Blinds",
      "item": "https://www.classicdelight.in/blinds/zebra"
    }
  ]
};

export default function ZebraBlindsPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % zebraImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + zebraImages.length) % zebraImages.length);
  };

  return (
    <main className="min-h-screen bg-[#070708] text-white overflow-hidden selection:bg-[#f26522] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(zebraSchema) }}
      />

      <Header />

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32 border-b border-white/5 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#f26522]/15 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#f26522]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#f26522] text-xs font-semibold tracking-wider uppercase mb-8">
                <Sparkles className="w-3.5 h-3.5" /> Premium Double-Roller Shades
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                Modern Zebra <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] to-orange-400">Blinds</span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                Experience the ultimate innovation in light control. Alternating horizontal stripes of sheer and solid fabrics let you adjust privacy and sunlight level dynamically with a single smooth pull.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20Zebra%20Blinds%20for%20my%20home.%20Can%20we%20book%20a%20site%20visit%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#f26522] to-orange-500 hover:to-[#f26522] px-8 py-4 rounded-2xl text-white font-medium hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_15px_40px_rgba(242,101,34,0.25)] w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" /> Schedule Free Consultation
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl text-white font-medium hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto"
                >
                  Contact Design Team <ArrowRight className="w-4 h-4 text-[#f26522]" />
                </Link>
              </div>

              {/* Specs Badges */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 w-full">
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Dual</h4>
                  <p className="text-white/40 text-xs mt-1">Layer Filtering</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Dust</h4>
                  <p className="text-white/40 text-xs mt-1">Repellent Fiber</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Smart</h4>
                  <p className="text-white/40 text-xs mt-1">Motor Options</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Gallery */}
            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-2xl">
                
                {/* Large Preview */}
                <div className="relative h-[350px] md:h-[450px] w-full rounded-[24px] overflow-hidden group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImageIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={zebraImages[activeImageIndex].src}
                        alt={zebraImages[activeImageIndex].title}
                        fill
                        priority
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-Right Maximize */}
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-[#f26522] border border-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
                    title="View Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4 text-white" />
                  </button>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-[#f26522] border border-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-[#f26522] border border-white/10 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="text-[#f26522] text-xs font-semibold tracking-wider uppercase bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#f26522]/20">
                      Showcase {activeImageIndex + 1} of {zebraImages.length}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2 tracking-tight">
                      {zebraImages[activeImageIndex].title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-lg">
                      {zebraImages[activeImageIndex].desc}
                    </p>
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="grid grid-cols-5 gap-2 mt-3 sm:mt-4">
                  {zebraImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all duration-300 ${
                        index === activeImageIndex 
                          ? "border-[#f26522] ring-2 ring-[#f26522]/30 scale-[1.03]" 
                          : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={`Zebra blind thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE ZEBRA BLINDS */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.01] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Dual Action design
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Adjustable Light & Privacy
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              Enjoy custom levels of daytime sunshine or evening privacy with modern stripe engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {zebraFeatures.map((item, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#0f0f12] border border-white/5 hover:border-[#f26522]/20 rounded-[32px] p-6 md:p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#f26522]/0 group-hover:via-[#f26522]/50 to-transparent transition-all duration-500" />
                
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-[#f26522]/10 border border-white/10 group-hover:border-[#f26522]/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2.5">
                      {item.benefits.map((b, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-white/5 rounded-full px-3 py-1 border border-white/5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f26522]" /> {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SHOWCASE */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold">Stripes Alignment</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 mb-6">
                Dynamic Alignment
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                As the blind rises or lowers, the front and back panel layers slide past each other. This creates a shutter-like transition between opaque coverage and mesh stripes.
              </p>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f26522]" /> Overlapping (Sheer View)
                  </h4>
                  <p className="text-white/60 text-sm">
                    Align sheer sections together to let in beautiful, diffused bands of daylight while keeping direct glare off your floors and furniture.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f26522]" /> Staggered (Solid Privacy)
                  </h4>
                  <p className="text-white/60 text-sm">
                    Move the solid fabric stripes to block the sheer lines completely. This blocks light transfer and blocks outdoor views, creating complete privacy at night.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="relative h-[250px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/zebra-blinds/zebra-blind-1.jpeg"
                  alt="Zebra blinds open state"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-full text-xs font-medium border border-white/10">Open Stripe State</span>
              </div>
              <div className="relative h-[250px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 mt-8">
                <Image
                  src="/images/zebra-blinds/zebra-blind-2.jpeg"
                  alt="Zebra blinds private state"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-full text-xs font-medium border border-white/10">Closed Privacy State</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Our Workflow
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              4 Steps to Custom Zebra Blinds
            </h2>
            <p className="text-white/50 mt-4">
              We specialize in custom sizing and complete motorized setups for ultimate interior comfort.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/5 rounded-3xl p-6 relative hover:border-[#f26522]/30 transition-all duration-300 group"
              >
                <div className="text-6xl font-black text-white/5 absolute right-6 top-6 transition-colors group-hover:text-[#f26522]/10">
                  {p.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 flex items-center justify-center text-[#f26522] mb-6">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-16">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg md:text-xl text-white hover:text-[#f26522] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#f26522] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-white/60 flex-shrink-0" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-white/60 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f26522]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold mb-4 inline-block">Modernize Your Windows</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Ready to Install Custom Zebra Blinds?
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Upgrade your home interior with double-layer shading versatility. Book a free on-site design consult and fabric demonstration in Chennai today.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20want%20to%20get%20a%20pricing%20estimate%20for%20Zebra%20Blinds.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f26522] hover:bg-orange-600 px-8 py-4 rounded-2xl text-white font-medium hover:scale-[1.02] transition duration-300 shadow-[0_15px_40px_rgba(242,101,34,0.3)]"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-2xl text-white font-medium hover:scale-[1.02] transition duration-300"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#f26522] transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden mb-4">
              <Image
                src={zebraImages[activeImageIndex].src}
                alt={zebraImages[activeImageIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center max-w-2xl px-4">
              <h3 className="text-white text-2xl font-bold">{zebraImages[activeImageIndex].title}</h3>
              <p className="text-white/60 text-sm mt-2">{zebraImages[activeImageIndex].desc}</p>
            </div>

            {/* Lightbox arrows */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={prevImage}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#f26522] transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <span className="text-white/60 self-center text-sm">
                {activeImageIndex + 1} / {zebraImages.length}
              </span>
              <button
                onClick={nextImage}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#f26522] transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
