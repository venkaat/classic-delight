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
  Info
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import { siteConfig } from "@/lib/siteConfig";

const rippleImages = [
  {
    src: "/images/ripple-curtain/motorised-ripple-curtain.webp",
    title: "Luxury Motorized S-Wave in Warm Sand",
    desc: "A stunning motorized ripple fold installation sliding effortlessly on an architectural ceiling track."
  },
  {
    src: "/images/ripple-curtain/Sheer-ripple-curtain.webp",
    title: "Premium Sheer Ripple Fold",
    desc: "Soft, translucent linen sheers forming continuous, perfectly balanced waves to filter natural sunlight."
  },
  {
    src: "/images/ripple-curtain/blackout-ripple-curtain.webp",
    title: "Deep Charcoal Blackout S-Wave",
    desc: "Ultra-precise, dense blackout curtains draping in architectural folds to provide absolute room-darkening privacy."
  },
  {
    src: "/images/ripple-curtain/natural-ripple-curtain.webp",
    title: "Eco-Luxe Natural Textured Linen",
    desc: "Organic linen blend ripple fold curtains offering relaxed sophistication and exceptional natural drape."
  },
  {
    src: "/images/ripple-curtain/velvet-ripple-curtain.webp",
    title: "Luxury Velvet Ripple Fold",
    desc: "Plush, heavy velvet waves reflecting light beautifully, designed as a premium acoustic centerpiece."
  }
];

const rippleStyles = [
  {
    title: "Motorized S-Wave",
    desc: "The pinnacle of modern convenience. Quiet, smart motors slide your waves smoothly via remote, smartphone, or voice assistants, maintaining absolutely perfect fold alignment at any open width.",
    icon: <Sparkles className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Smart home integration", "Quiet motorized tracks", "Ideal for double-height windows"]
  },
  {
    title: "Luxe Sheer Wave",
    desc: "Continuous, seamless fabric waves that cascade beautifully. Perfect for double-track systems where sheer wave layers remain closed during the day to allow soft, diffused sunlight without compromising privacy.",
    icon: <Layers className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Flawless light filtering", "Highly dramatic architectural look", "Works perfectly with double tracks"]
  },
  {
    title: "Structured Blackout Wave",
    desc: "Engineered specifically for heavy blackout fabrics. By gathering drapes under track carriers with special spacing tapes, we eliminate gathering bunchiness and allow thick, opaque materials to drape beautifully straight.",
    icon: <Layers className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Zero bunching at headers", "Complete light control", "Spectacular hotel-style look"]
  },
  {
    title: "Natural Textured Wave",
    desc: "Highlights the natural beauty of textured linen, cotton blends, and jute weaves. The smooth, S-curve configuration elevates relaxed fabrics into contemporary architectural statements.",
    icon: <Sparkles className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Warm, relaxed elegance", "Highly breathable drape", "Perfect for coastal & modern designs"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Precision Laser Survey",
    desc: "Our design consultants visit your space in Chennai, executing millimeter-accurate laser surveys to plan exact ceiling clearances and stack depths.",
    icon: <Ruler className="w-5 h-5" />
  },
  {
    step: "02",
    title: "Custom Wave Calibration",
    desc: "Choose between standard 80%, 100%, or 120% fullness curls, customize motor integration systems, and pick from our 500+ premium textiles.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    step: "03",
    title: "Bespoke Snapping Tape Stiffening",
    desc: "Our tailors stitch high-density snapping tape along the top hem, allowing curtains to snap directly into sliding carriers for lifelong curls.",
    icon: <Scissors className="w-5 h-5" />
  },
  {
    step: "04",
    title: "Ceiling Track Installation",
    desc: "Our expert crew mounts custom slimline S-wave tracks—recessed or wall-mounted—hooks the carriers, and steams the drapery for continuous waves.",
    icon: <CheckCircle className="w-5 h-5" />
  }
];

const faqs = [
  {
    q: "What makes ripple fold curtains different from standard pleated curtains?",
    a: "Unlike traditional pleated curtains which gather fabric into static, stitched bunches, ripple fold curtains are completely flat at the top. They feature a specialized snapping tape that snaps into sliding carriers on a dedicated wave track. This creates a continuous, symmetrical S-curve or 'wave' profile that looks identical from both inside and outside the room."
  },
  {
    q: "Do ripple fold curtains require specific tracks?",
    a: "Yes, ripple fold curtains require S-wave tracks designed specifically with spaced carrier slides. The sliding carriers are linked together by an internal cord that limits their maximum spacing, ensuring that the curtain fabric maintains its perfect, uniform wave geometry when open, closed, or partially drawn."
  },
  {
    q: "What does 'fullness' mean in ripple fold curtains?",
    a: "Fullness refers to the amount of fabric used relative to the track width to create the wave curls. We offer three primary configurations: 80% fullness (softer, shallow waves), 100% fullness (standard rich waves), and 120% fullness (deep, high-volume luxurious folds). More fullness requires more fabric, creating deeper S-curves for a plush, high-end look."
  },
  {
    q: "Can ripple fold curtains be automated or motorized?",
    a: "Absolutely! Ripple fold curtains are highly preferred for motorized setups because their S-wave tracks slide with minimal friction. We install premium motorized tracks compatible with Somfy, Tuya, and Alexa smart home hubs, allowing you to open and close your wave drapes via remotes, apps, or voice commands."
  },
  {
    q: "What is the stacking width of ripple fold curtains?",
    a: "Because ripple fold curtains drape in a continuous wave rather than bunching up, they stack very compactly. When fully drawn open, the curtain stack occupies only about 12% to 15% of the total track width. This maximizes your visible window glass area and allows natural light to enter completely."
  }
];

const rippleSchema = {
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
      "name": "Ripple Fold Curtains",
      "item": "https://www.classicdelight.in/curtains/ripple"
    }
  ]
};

export default function RippleCurtainPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#070708] text-white overflow-hidden selection:bg-[#f26522] selection:text-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rippleSchema) }}
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
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" /> Modern S-Wave Architectural
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] to-orange-400">Ripple Fold</span> Curtains
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                Experience the beauty of continuous, symmetrical waves. Hand-snapped drapes that maintain flawless S-curve alignment on custom-fitted tracks, offering a premium, hotel-like aesthetic to Chennai homes.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20custom%20Ripple%20Fold%20Curtains.%20Could%20you%20share%20fabric%20options%20and%20provide%20a%20free%20quote%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#f26522] to-orange-500 hover:to-[#f26522] px-8 py-4 rounded-2xl text-white font-medium hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_15px_40px_rgba(242,101,34,0.25)] w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" /> Book Free Site Visit
                </a>
                <Link
                  href="/curtain-visualizer"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl text-white font-medium hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto"
                >
                  Try Visualizer <ArrowRight className="w-4 h-4 text-[#f26522]" />
                </Link>
              </div>

              {/* Quality Badges */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 w-full">
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Smart</h4>
                  <p className="text-white/40 text-xs mt-1">Motorized Ready</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">100%</h4>
                  <p className="text-white/40 text-xs mt-1">Symmetrical Folds</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Laser</h4>
                  <p className="text-white/40 text-xs mt-1">Accurate Fits</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Gallery Showcase */}
            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-2xl">
                {/* Main Large Preview */}
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
                        src={rippleImages[activeImageIndex].src}
                        alt={rippleImages[activeImageIndex].title}
                        fill
                        priority
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-Right Maximize Icon */}
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-[#f26522] border border-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
                    title="View Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4 text-white" />
                  </button>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="text-[#f26522] text-xs font-semibold tracking-wider uppercase bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#f26522]/20">
                      Showcase {activeImageIndex + 1} of {rippleImages.length}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2 tracking-tight">
                      {rippleImages[activeImageIndex].title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-lg line-clamp-2">
                      {rippleImages[activeImageIndex].desc}
                    </p>
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="grid grid-cols-5 gap-2.5 mt-3 sm:mt-4">
                  {rippleImages.map((image, index) => (
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
                        alt={`Ripple curtains thumbnail ${index + 1}`}
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

      {/* WHY CHOOSE RIPPLE SECTION */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.01] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Modern Wave Design
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Wave Configurations
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              S-wave profile creates a continuous architectural wave drape. Explore our custom gather styles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {rippleStyles.map((item, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#0f0f12] border border-white/5 hover:border-[#f26522]/20 rounded-[32px] p-6 md:p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              >
                {/* Accent line on hover */}
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

      {/* DETAILED MASONRY PRODUCT SHOWCASE */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold">
                Exclusive Gallery
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">
                Real Ripple Fold Installations
              </h2>
            </div>
            <p className="text-white/50 max-w-md text-sm md:text-base leading-relaxed">
              Explore the clean architectural stack and continuous drapes of custom Classic Delight installations across Chennai homes.
            </p>
          </div>

          {/* Masonry / Custom Grid */}
          <div className="grid md:grid-cols-12 gap-6">
            
            {/* Image 01 (Left Large) */}
            <div className="md:col-span-8 group relative h-[350px] md:h-[500px] rounded-[32px] overflow-hidden border border-white/10">
              <Image 
                src={rippleImages[0].src} 
                alt={rippleImages[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Motorized Wave</h4>
                  <h3 className="text-xl md:text-3xl font-bold text-white mt-1">{rippleImages[0].title}</h3>
                  <p className="text-white/60 text-xs md:text-sm mt-1 max-w-xl">{rippleImages[0].desc}</p>
                </div>
                <button 
                  onClick={() => { setActiveImageIndex(0); setLightboxOpen(true); }}
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-[#f26522] border border-white/10 flex items-center justify-center text-white active:scale-95 transition-all"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image 02 (Right High-Height) */}
            <div className="md:col-span-4 group relative h-[350px] md:h-[500px] rounded-[32px] overflow-hidden border border-white/10">
              <Image 
                src={rippleImages[1].src} 
                alt={rippleImages[1].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Sheer Wave</h4>
                  <h3 className="text-xl font-bold text-white mt-1">{rippleImages[1].title}</h3>
                  <p className="text-white/60 text-xs mt-1">{rippleImages[1].desc}</p>
                </div>
                <button 
                  onClick={() => { setActiveImageIndex(1); setLightboxOpen(true); }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-[#f26522] border border-white/10 flex items-center justify-center text-white active:scale-95 transition-all"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Image 03 (Bottom Left Slim) */}
            <div className="md:col-span-4 group relative h-[350px] md:h-[400px] rounded-[32px] overflow-hidden border border-white/10">
              <Image 
                src={rippleImages[2].src} 
                alt={rippleImages[2].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Structured Blackout</h4>
                  <h3 className="text-lg md:text-xl font-bold text-white mt-1">{rippleImages[2].title}</h3>
                  <p className="text-white/60 text-xs mt-1">{rippleImages[2].desc}</p>
                </div>
                <button 
                  onClick={() => { setActiveImageIndex(2); setLightboxOpen(true); }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-[#f26522] border border-white/10 flex items-center justify-center text-white active:scale-95 transition-all"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Image 04 (Bottom Mid Slim) */}
            <div className="md:col-span-4 group relative h-[350px] md:h-[400px] rounded-[32px] overflow-hidden border border-white/10">
              <Image 
                src={rippleImages[3].src} 
                alt={rippleImages[3].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Natural Linen</h4>
                  <h3 className="text-lg md:text-xl font-bold text-white mt-1">{rippleImages[3].title}</h3>
                  <p className="text-white/60 text-xs mt-1">{rippleImages[3].desc}</p>
                </div>
                <button 
                  onClick={() => { setActiveImageIndex(3); setLightboxOpen(true); }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-[#f26522] border border-white/10 flex items-center justify-center text-white active:scale-95 transition-all"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Image 05 (Bottom Right Slim) */}
            <div className="md:col-span-4 group relative h-[350px] md:h-[400px] rounded-[32px] overflow-hidden border border-white/10">
              <Image 
                src={rippleImages[4].src} 
                alt={rippleImages[4].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Acoustic Velvet</h4>
                  <h3 className="text-lg md:text-xl font-bold text-white mt-1">{rippleImages[4].title}</h3>
                  <p className="text-white/60 text-xs mt-1">{rippleImages[4].desc}</p>
                </div>
                <button 
                  onClick={() => { setActiveImageIndex(4); setLightboxOpen(true); }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-[#f26522] border border-white/10 flex items-center justify-center text-white active:scale-95 transition-all"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FABRICS & TECHNICAL SPECIFICATIONS */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold">
              Engineering Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">
              S-Wave Specifications
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 font-semibold text-lg text-white">Parameter</th>
                  <th className="p-6 font-semibold text-lg text-[#f26522]">Ripple Fold Standard</th>
                  <th className="p-6 font-semibold text-lg text-white/70">Aesthetic Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm md:text-base">
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#f26522]" /> Fuller Volume
                  </td>
                  <td className="p-6 text-white/80">100% to 120% S-Wave Fullness</td>
                  <td className="p-6 text-white/40">Creates deep, luxurious folds that drop straight without flat gaps.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#f26522]" /> Snap Carrier Spacing
                  </td>
                  <td className="p-6 text-white/80">60mm or 80mm Linked Carriers</td>
                  <td className="p-6 text-white/40">Linked sliding slides maintain uniform wave alignment permanently.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#f26522]" /> Motor Integration
                  </td>
                  <td className="p-6 text-white/80">Silent Smart Motorized Tracks</td>
                  <td className="p-6 text-white/40">Seamless compatibility with Somfy, Alexa, and Home Automation.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-[#f26522]" /> Stacking Width
                  </td>
                  <td className="p-6 text-white/80">Sleek (approx. 12-14% of track width)</td>
                  <td className="p-6 text-white/40">Waves stack ultra-compactly, maximizing sunlight exposure.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#f26522]" /> Mounting Systems
                  </td>
                  <td className="p-6 text-white/80">Recessed Architectural Ceiling Tracks</td>
                  <td className="p-6 text-white/80">Gives a modern hotel-like invisible hardware appearance.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROCESS WORKFLOW STEPS */}
      <section className="py-24 border-b border-white/5 relative bg-[#070708]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              4 Steps to S-Wave Perfection
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              We design, stitch, track, and install tailored wave drapery at your residence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#0f0f12] border border-white/5 hover:border-[#f26522]/20 rounded-[32px] p-8 flex flex-col items-start transition-all duration-300"
              >
                <div className="absolute top-6 right-8 text-5xl font-extrabold text-white/[0.03] group-hover:text-[#f26522]/10 transition-colors pointer-events-none select-none">
                  {step.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 text-[#f26522] flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS SECTION ACCORDION */}
      <section className="py-24 border-b border-white/5 bg-[#09090b]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-16">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold flex items-center justify-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4" /> Wave Curtains FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">
              Ripple Fold FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#0f0f12] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-lg text-white hover:text-[#f26522] transition-colors"
                >
                  <span>{faq.q}</span>
                  {activeFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#f26522] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/40 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-white/60 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PREMIUM CALL TO ACTION */}
      <section className="py-24 relative bg-black overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f26522]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
          <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold">
            Elevate Your Space
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4 mb-6">
            Bespoke S-Wave Drapery Awaits Your Home
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            Schedule a free visual layout measurement with physical catalogs. Speak directly to our S-wave installation specialists in Chennai.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20consult%20for%20stitching%20Ripple%20Fold%20Curtains.%20Please%20let%20me%20know%20when%20you%20are%20free%20to%20connect.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f26522] to-orange-500 hover:to-[#f26522] px-8 py-4 rounded-2xl text-white font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_15px_40px_rgba(242,101,34,0.3)]"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl text-white font-semibold hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Request Call Back
            </Link>
          </div>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-6"
          >
            {/* Lightbox Header */}
            <div className="flex justify-between items-center w-full">
              <span className="text-white/50 text-sm">
                Ripple Fold Showcase · {activeImageIndex + 1} of {rippleImages.length}
              </span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f26522] hover:scale-105 active:scale-95 transition flex items-center justify-center border border-white/10 text-white"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Main Image */}
            <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full py-6">
              <div className="relative aspect-[4/3] w-full max-h-[70vh] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src={rippleImages[activeImageIndex].src}
                  alt={rippleImages[activeImageIndex].title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Lightbox Footer controls & thumbnails */}
            <div className="max-w-4xl mx-auto w-full text-center pb-4">
              <h3 className="text-white text-xl font-bold tracking-tight">
                {rippleImages[activeImageIndex].title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1 mb-6">
                {rippleImages[activeImageIndex].desc}
              </p>

              {/* Thumbnails */}
              <div className="flex justify-center gap-2 md:gap-3 overflow-x-auto py-1">
                {rippleImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative w-16 md:w-20 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      index === activeImageIndex ? "border-[#f26522] scale-105" : "border-white/10 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt="Lightbox thumbnail"
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
