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

const romanImages = [
  {
    src: "/images/roman-blinds/roman-blind-1.jpeg",
    title: "Classic Cascade Roman Blinds",
    desc: "Elegant cascading folds that gather neatly at the top, adding soft volume and rich textures to classic living rooms."
  },
  {
    src: "/images/roman-blinds/roman-blind-2.jpeg",
    title: "Clean Flat-Fold Roman Blinds",
    desc: "A sleek, seamless single-panel design when lowered, showcasing the fabric pattern with minimalist grace."
  },
  {
    src: "/images/roman-blinds/roman-blind-3.jpeg",
    title: "Bedroom Blackout Roman Blinds",
    desc: "Tailored with premium thermal lining to block out harsh sunlight and provide complete privacy for a peaceful sleep."
  },
  {
    src: "/images/roman-blinds/roman-blind-4.jpeg",
    title: "Premium Soft Linen Roman Shades",
    desc: "Crafted from breathable natural linen blends that allow soft, ambient light to warm your home interiors."
  },
  {
    src: "/images/roman-blinds/roman-blind-5.jpeg",
    title: "Contemporary Textured Roman Blinds",
    desc: "Featuring geometric weaves and bold colors to complement modern accent walls and luxury residential designs."
  }
];

const romanFeatures = [
  {
    title: "Tailored Soft Drapery Look",
    desc: "Roman blinds offer the clean functionality of window blinds combined with the soft, luxurious aesthetic of premium curtain fabrics.",
    icon: <Sparkles className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Hand-crafted folding pleats", "Premium upholstery fabrics", "Adds elegant warmth to rooms"]
  },
  {
    title: "Custom Lining Options",
    desc: "Tailor your roman shades with specific linings depending on room needs—from unlined light-diffusing fabrics to high-performance thermal blackout backings.",
    icon: <Layers className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Blackout lining for bedrooms", "Light-filtering lining for living areas", "Improved thermal & sound insulation"]
  },
  {
    title: "Manual & Smart Control Options",
    desc: "Operate your blinds seamlessly. Select from our classic heavy-duty cord loop systems or integrate quiet motorized lift systems with remote and smart home controls.",
    icon: <Sliders className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Child-safe cordless setups available", "Whisper-quiet motor integrations", "Single remote control for multiple blinds"]
  },
  {
    title: "Perfect Fitting Guarantee",
    desc: "Every Roman blind is custom made to your windows' exact dimensions. We ensure flush inside mounts or clean outside mounts with zero gaps.",
    icon: <Settings className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Precise on-site laser measurements", "Sturdy aluminum headrails", "Perfect fabric tensioning"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "On-Site Design consultation",
    desc: "Our home styling experts visit you in Chennai with a rich fabric swatch suitcase to measure windows and advise on the ideal folding style.",
    icon: <Ruler className="w-5 h-5" />
  },
  {
    step: "02",
    title: "Fabric & Lining Selection",
    desc: "Select fabrics (Linen, Cotton, Velvet, Textured weaves) and coordinate the backing lining to match light control and thermal needs.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    step: "03",
    title: "Master Tailoring",
    desc: "Our tailors construct horizontal pockets, sew support rods, align lift rings, and press folding pleats with meticulous accuracy.",
    icon: <Scissors className="w-5 h-5" />
  },
  {
    step: "04",
    title: "Professional Installation",
    desc: "We mount the header tracks, feed internal cords, tension the blind, and test smooth lifting mechanics for flawless performance.",
    icon: <CheckCircle className="w-5 h-5" />
  }
];

const faqs = [
  {
    q: "What is the difference between Roman blinds and Roller blinds?",
    a: "Roman blinds are made of drapery fabric that folds up in neat, elegant horizontal pleats when raised, offering a softer, more traditional curtain-like look. Roller blinds, on the other hand, are made of flat fabrics that roll up tightly onto a rotating metal tube at the top, taking up minimal space and giving a clean, ultra-modern appearance."
  },
  {
    q: "Can Roman blinds provide complete blackout?",
    a: "Yes, absolutely! By adding a premium blackout lining to the back of the Roman blinds, we can block out up to 99% of incoming light. This makes Roman blinds an excellent, cozy window treatment option for bedrooms and home theater rooms."
  },
  {
    q: "How do you clean and maintain fabric Roman blinds?",
    a: "Routine maintenance is simple. You can light-vacuum the blinds using a soft upholstery brush attachment to remove dust. For minor stains, spot cleaning with a damp microfiber cloth and mild soapy water is recommended. Certain fabrics can also be detached for dry cleaning if required."
  },
  {
    q: "Are motorized or smart control Roman blinds available?",
    a: "Yes. Classic Delight provides advanced motorized Roman blinds using quiet internal tubular motors. You can control them easily via a hand-held remote, wall switches, smartphone applications, or connect them to smart home hubs like Alexa and Google Home."
  },
  {
    q: "Is it better to choose inside mount or outside mount for Roman blinds?",
    a: "Inside mount fits snug inside the window casing, offering a clean, built-in aesthetic that highlights beautiful window moldings. Outside mount covers the window trim entirely, making windows look larger and helping block light leakage around edges. Our team will recommend the best fit after examining your window frames."
  }
];

const romanSchema = {
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
      "name": "Roman Blinds",
      "item": "https://www.classicdelight.in/blinds/roman"
    }
  ]
};

export default function RomanBlindsPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % romanImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + romanImages.length) % romanImages.length);
  };

  return (
    <main className="min-h-screen bg-[#070708] text-white overflow-hidden selection:bg-[#f26522] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(romanSchema) }}
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
                <Sparkles className="w-3.5 h-3.5" /> Tailored Fabric Shades
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                Premium Roman <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] to-orange-400">Blinds</span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                Bring classical sophistication and premium fabric styling to your windows. Our custom-designed Roman blinds combine soft fold aesthetics with the convenience of modern light-filtering and blackout solutions.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20Roman%20Blinds%20installation.%20Could%20we%20schedule%20an%20on-site%20consultation%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#f26522] to-orange-500 hover:to-[#f26522] px-8 py-4 rounded-2xl text-white font-medium hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_15px_40px_rgba(242,101,34,0.25)] w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" /> Book Free Site Measurement
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl text-white font-medium hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto"
                >
                  Talk To Designers <ArrowRight className="w-4 h-4 text-[#f26522]" />
                </Link>
              </div>

              {/* Specs Badges */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 w-full">
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">100+</h4>
                  <p className="text-white/40 text-xs mt-1">Fabric Choices</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Custom</h4>
                  <p className="text-white/40 text-xs mt-1">Blackout Options</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Smart</h4>
                  <p className="text-white/40 text-xs mt-1">Motorized Systems</p>
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
                        src={romanImages[activeImageIndex].src}
                        alt={romanImages[activeImageIndex].title}
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
                      Roman Design {activeImageIndex + 1} of {romanImages.length}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2 tracking-tight">
                      {romanImages[activeImageIndex].title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-lg">
                      {romanImages[activeImageIndex].desc}
                    </p>
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="grid grid-cols-5 gap-2 mt-3 sm:mt-4">
                  {romanImages.map((image, index) => (
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
                        alt={`Roman blind thumbnail ${index + 1}`}
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

      {/* WHY CHOOSE ROMAN BLINDS */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.01] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Elegant Engineering
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Premium Styling Details
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              Explore the perfect balance between beautiful curtain folds and minimal space requirement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {romanFeatures.map((item, idx) => (
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

      {/* FABRIC STYLE GUIDE */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold">Design Aesthetics</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 mb-6">
                Flat Fold vs. Cascade Fold
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                Roman blinds are available in two primary styles. Choosing the right style defines the drape and texture of your window spaces when raised or lowered.
              </p>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f26522]" /> Classic Flat Fold
                  </h4>
                  <p className="text-white/60 text-sm">
                    Features clean, continuous fabric panels without seams when lowered. Best for showing large-scale patterns and stripes, and fits closely within compact window channels.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f26522]" /> Hobbled / Cascade Fold
                  </h4>
                  <p className="text-white/60 text-sm">
                    Retains gentle, overlapping horizontal loops even when fully lowered. Creates a rich, layered cascade that adds dimension, volume, and soft shadow lines to your decor.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="relative h-[250px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/roman-blinds/roman-blind-1.jpeg"
                  alt="Cascade Roman Blinds design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-full text-xs font-medium border border-white/10">Cascade Fold</span>
              </div>
              <div className="relative h-[250px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 mt-8">
                <Image
                  src="/images/roman-blinds/roman-blind-2.jpeg"
                  alt="Flat Fold Roman Blinds design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-full text-xs font-medium border border-white/10">Flat Fold</span>
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
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              4 Steps to Custom Roman Blinds
            </h2>
            <p className="text-white/50 mt-4">
              Our end-to-end service ensures a premium tailormade experience, from selection to clean installation.
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
          <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold mb-4 inline-block">Design Your Dream Windows</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Ready to Revamp Your Home with Roman Blinds?
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Get personalized fabric selection and bespoke window configurations matching your aesthetic. Schedule a free home measurement in Chennai.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20want%20to%20get%20a%20pricing%20estimate%20for%20Roman%20Blinds.`}
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
                src={romanImages[activeImageIndex].src}
                alt={romanImages[activeImageIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center max-w-2xl px-4">
              <h3 className="text-white text-2xl font-bold">{romanImages[activeImageIndex].title}</h3>
              <p className="text-white/60 text-sm mt-2">{romanImages[activeImageIndex].desc}</p>
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
                {activeImageIndex + 1} / {romanImages.length}
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
