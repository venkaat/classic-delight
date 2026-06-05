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
  ShieldCheck,
  Moon,
  VolumeX,
  Thermometer,
  Tv,
  Palette
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import { siteConfig } from "@/lib/siteConfig";

const blackoutImages = [
  {
    id: "sleep",
    src: "/images/blackout-curtains/The Sleep Sanctuary.png",
    title: "The Sleep Sanctuary",
    tagline: "100% Light Blockout for Deep Sleep",
    desc: "Achieve absolute, pitch-black darkness in your bedroom. This curtain system blocks 100% of incoming sunlight and street lamps, creating a restorative sleeping environment that promotes deep REM sleep cycles. Ideal for night-shift workers, light sleepers, and children's nurseries.",
    icon: <Moon className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Zero light penetration", "Helps regulate circadian rhythms", "Ideal for master bedrooms and nurseries"]
  },
  {
    id: "thermal",
    src: "/images/blackout-curtains/Thermal Insulation Concept.png",
    title: "Thermal Insulation",
    tagline: "Rejects Solar Heat & Saves Energy",
    desc: "Engineered with special multi-layer woven fabrics and thermal backings to block up to 90% of solar heat transfer through windows. This thermal shield keeps your home naturally cooler during intense Chennai summers and reduces load on air conditioners, leading to lower energy bills.",
    icon: <Thermometer className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Substantially blocks heat transfer", "Reduces air-conditioning energy costs", "Creates comfortable indoor climate"]
  },
  {
    id: "noise",
    src: "/images/blackout-curtains/Noise Reduction.png",
    title: "Acoustic Noise Reduction",
    tagline: "Absorbs Street Noise for Peaceful Interiors",
    desc: "Constructed with heavy-duty high-mass yarns and multi-layered fabric structures that absorb sound waves. This acoustic barrier reduces external street noise, traffic hums, barking dogs, and neighborhood chatter, bringing serenity back to your home.",
    icon: <VolumeX className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Absorbs high-frequency echoes", "Muffles street and traffic noises", "Creates calm work-from-home spaces"]
  },
  {
    id: "movie",
    src: "/images/blackout-curtains/The Midday Movie.png",
    title: "The Midday Movie",
    tagline: "Theater-Grade Glare Elimination",
    desc: "Convert your living room or family lounge into a professional home cinema screen room. These curtains eliminate annoying screen reflections and glare on OLED, QLED, or projector screens, allowing you to enjoy theater-quality afternoon movies in complete comfort.",
    icon: <Tv className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Eliminates screen glare on TVs", "Perfect for dedicated home theaters", "Instant daytime theater atmosphere"]
  },
  {
    id: "neutralizer",
    src: "/images/blackout-curtains/Urban Neutralizer.jpg",
    title: "Urban Neutralizer",
    tagline: "Elegant Modern Apartment Aesthetics",
    desc: "Combine high-performance utility with high-end interior design. The Urban Neutralizer features sophisticated neutral fabric textures, elegant weaves, and structured pinch-pleat or ripple-fold hanging styles that complement modern luxury homes and minimalist spaces.",
    icon: <Palette className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Premium interior design match", "Neat, uniform draping lines", "Luxury tactile fabric textures"]
  }
];

const technicalSpecs = [
  {
    title: "Multi-Pass Woven Construction",
    desc: "Our blackout curtains feature high-density 'three-pass' fabric construction—composed of a face fabric, a middle light-blocking black layer, and a reverse layer. We also offer separate blackout linings sewn onto the back of custom face fabrics."
  },
  {
    title: "Hanging Styles & Light Leaks",
    desc: "To prevent light leakage around window edges, we recommend Ripple Fold ceiling tracks or Pinch Pleat styles installed with extra overlap return hooks that wrap tightly back to the wall."
  },
  {
    title: "Motorized Tracking Systems",
    desc: "Automate your sleep schedule. Connect our blackout drapes to whisper-quiet Somfy or Tuya motors to open automatically at sunrise and close at bedtime via mobile apps or voice commands."
  },
  {
    title: "Maintenance & Care",
    desc: "Routine cleaning is simple. Vacuum fabric surfaces lightly with a soft brush attachment. For deep cleaning, we recommend professional dry cleaning to maintain the structural integrity of thermal coatings."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Doorstep Consultation",
    desc: "Our designers visit your Chennai home with premium blackout catalog swatches, advising on fabrics, thermal liners, and hanging tracks.",
    icon: <Ruler className="w-5 h-5" />
  },
  {
    step: "02",
    title: "Laser Measurements",
    desc: "We take millimeter-accurate window sizing checks, accounting for overlaps and height offsets to ensure zero light leakage.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    step: "03",
    title: "Premium Tailoring",
    desc: "Master tailors assemble the light-blocking core, sew heavy-duty hems, and integrate pinch pleats or track gliders.",
    icon: <Scissors className="w-5 h-5" />
  },
  {
    step: "04",
    title: "Acoustic Hanging",
    desc: "Our crew mounts the heavy-duty tracks, slides the curtains, adjusts overlaps, and ensures smooth sliding travel.",
    icon: <CheckCircle className="w-5 h-5" />
  }
];

const faqs = [
  {
    q: "Do blackout curtains block 100% of light?",
    a: "Yes! True blackout curtains made from multi-pass coated fabrics or heavy lined panels block 100% of the light passing through the fabric. To prevent light leaks around the edges, top, and bottom of the window, we recommend mounting the curtains wider and higher than the window frame, or using ceiling-mounted tracks with return hooks."
  },
  {
    q: "How do blackout curtains help reduce electricity bills?",
    a: "During hot Chennai summers, windows are a major source of heat gain. Our thermal insulating blackout curtains block up to 90% of solar radiation. This keeps rooms naturally cooler, reduces air conditioner workloads, and saves substantial energy."
  },
  {
    q: "Do blackout curtains reduce street noise?",
    a: "Yes, they provide sound dampening. While they cannot soundproof a room completely, the dense fabric weight and multi-layered liners absorb high-frequency echoes and street noises (like car honks, street chatter, and AC humming), reducing sound by up to 30-40%."
  },
  {
    q: "What is the difference between blackout and room-darkening curtains?",
    a: "Blackout curtains block 100% of light from passing through the fabric. Room-darkening curtains are tightly woven fabrics without a backing or middle black yarn layer; they block about 80-95% of light, which dims the room significantly but still allows a faint glow to show through."
  },
  {
    q: "Can I wash blackout curtains in a washing machine?",
    a: "For curtains with sewn-in acrylic blackout coatings or heavy thermal linings, dry cleaning is highly recommended. Machine washing can crack or peel the light-blocking layer over time. For non-coated tightly woven blackout fabrics, gentle hand washing or cold delicate machine cycles may be used."
  }
];

const blackoutSchema = {
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
      "name": "Curtains",
      "item": "https://www.classicdelight.in/curtains"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Blackout Curtains",
      "item": "https://www.classicdelight.in/curtains/blackout"
    }
  ]
};

export default function BlackoutCurtainsPage() {
  const [activeConceptIndex, setActiveConceptIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const nextConcept = () => {
    setActiveConceptIndex((prev) => (prev + 1) % blackoutImages.length);
  };

  const prevConcept = () => {
    setActiveConceptIndex((prev) => (prev - 1 + blackoutImages.length) % blackoutImages.length);
  };

  return (
    <main className="min-h-screen bg-[#070708] text-white overflow-hidden selection:bg-[#f26522] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blackoutSchema) }}
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
                <Sparkles className="w-3.5 h-3.5" /> High Performance Drapery
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                Premium Blackout <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] to-orange-400">Curtains</span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                Experience the ultimate in indoor comfort. Custom-stitched 100% light-blocking drapes engineered for deep sleep, acoustic sound dampening, and advanced solar heat protection.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20custom%20Blackout%20Curtains.%20Could%20we%20schedule%20an%20on-site%20consultation%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#f26522] to-orange-500 hover:to-[#f26522] px-8 py-4 rounded-2xl text-white font-medium hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_15px_40px_rgba(242,101,34,0.25)] w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" /> Free Site Consultation
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
                  <h4 className="text-[#f26522] text-2xl font-bold">100%</h4>
                  <p className="text-white/40 text-xs mt-1">Light Blockout</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Up to 90%</h4>
                  <p className="text-white/40 text-xs mt-1">Heat Rejection</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Acoustic</h4>
                  <p className="text-white/40 text-xs mt-1">Noise Dampening</p>
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
                      key={activeConceptIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={blackoutImages[activeConceptIndex].src}
                        alt={blackoutImages[activeConceptIndex].title}
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
                    onClick={prevConcept}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-[#f26522] border border-white/10 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextConcept}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-[#f26522] border border-white/10 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="text-[#f26522] text-xs font-semibold tracking-wider uppercase bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#f26522]/20">
                      Concept {activeConceptIndex + 1} of {blackoutImages.length}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2 tracking-tight">
                      {blackoutImages[activeConceptIndex].title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-lg line-clamp-2">
                      {blackoutImages[activeConceptIndex].tagline}
                    </p>
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="grid grid-cols-5 gap-2 mt-3 sm:mt-4">
                  {blackoutImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveConceptIndex(index)}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all duration-300 ${
                        index === activeConceptIndex 
                          ? "border-[#f26522] ring-2 ring-[#f26522]/30 scale-[1.03]" 
                          : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={`Blackout concept thumbnail ${index + 1}`}
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

      {/* CORE CONCEPTS SELECTOR TAB INTERACTIVITY */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.01] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Pillars of Performance
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Why Install Blackout Curtains?
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              Explore the five key utility concepts behind our specialized blackout curtain installations. Click each tab below to learn more.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Interactive Concept Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {blackoutImages.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveConceptIndex(idx)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl text-left border transition-all duration-300 ${
                    idx === activeConceptIndex
                      ? "bg-[#f26522]/10 border-[#f26522] text-[#f26522]"
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10 text-white"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border ${idx === activeConceptIndex ? "bg-[#f26522]/10 border-[#f26522]/30 text-[#f26522]" : "bg-white/5 border-white/10 text-white/70"}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">{item.title}</h3>
                    <p className={`text-xs mt-1 ${idx === activeConceptIndex ? "text-[#f26522]/80" : "text-white/40"}`}>{item.tagline}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Display Box */}
            <div className="lg:col-span-7">
              <div className="bg-[#0f0f12] border border-white/5 rounded-[32px] p-6 md:p-8 hover:border-[#f26522]/25 transition duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#f26522]/5 blur-[80px] rounded-full pointer-events-none" />
                
                <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
                  <span className="text-[#f26522]">{blackoutImages[activeConceptIndex].icon}</span>
                  {blackoutImages[activeConceptIndex].title}
                </h3>
                <p className="text-orange-400 font-mono text-xs uppercase tracking-wider mb-6">
                  {blackoutImages[activeConceptIndex].tagline}
                </p>

                <p className="text-white/75 text-sm md:text-base leading-relaxed mb-6">
                  {blackoutImages[activeConceptIndex].desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {blackoutImages[activeConceptIndex].benefits.map((b, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-white/5 rounded-full px-3.5 py-1.5 border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f26522]" /> {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL DETAILS / SPECIFICATIONS ACCORDION */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold">Scientific Shading</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 mb-6">
                Technical Specifications
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                How we construct and calibrate custom blackout window curtains to yield maximum performance.
              </p>

              <div className="space-y-4">
                {technicalSpecs.map((spec, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-bold text-base mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f26522]" /> {spec.title}
                    </h4>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Showcase concept images grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="relative h-[250px] md:h-[350px] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/blackout-curtains/Thermal Insulation Concept.png"
                  alt="Thermal insulation curtains concept diagram"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-full text-xs border border-white/10">Thermal Core Shield</span>
              </div>
              <div className="relative h-[250px] md:h-[350px] rounded-3xl overflow-hidden border border-white/10 mt-8">
                <Image
                  src="/images/blackout-curtains/Noise Reduction.png"
                  alt="Acoustic noise dampening curtains concept"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-full text-xs border border-white/10">Acoustic Mass Fabric</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS WORKFLOW */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Our Craftsmanship
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              4 Steps to Seamless Custom Blackout
            </h2>
            <p className="text-white/50 mt-4">
              We specialize in custom sizing and expert hardware configurations to limit light leaks.
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

      {/* FAQ ACCORDIONS */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-16">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Blackout FAQ
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

      {/* CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f26522]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold mb-4 inline-block">Design Your Sanctuary</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Ready to Shield Your Windows and Sleep Better?
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Configure premium thermal, sound-absorbing blackout curtains window-by-window. Book a free doorstep consultant visit in Chennai today.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20want%20to%20get%20pricing%20estimates%20for%20custom%20Blackout%20Curtains.`}
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
                src={blackoutImages[activeConceptIndex].src}
                alt={blackoutImages[activeConceptIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center max-w-2xl px-4">
              <h3 className="text-white text-2xl font-bold">{blackoutImages[activeConceptIndex].title}</h3>
              <p className="text-white/60 text-sm mt-2">{blackoutImages[activeConceptIndex].tagline}</p>
            </div>

            {/* Lightbox arrows */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={prevConcept}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#f26522] transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <span className="text-white/60 self-center text-sm">
                {activeConceptIndex + 1} / {blackoutImages.length}
              </span>
              <button
                onClick={nextConcept}
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
