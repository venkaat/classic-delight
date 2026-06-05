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

const pleatedImages = [
  {
    src: "/images/Pleated-Curtains/Pleated-curtain-01.jpeg",
    title: "Luxury Pinch Pleat in Off-White Linen",
    desc: "A timeless custom pinch pleat curtain draped elegantly in a premium modern living room."
  },
  {
    src: "/images/Pleated-Curtains/Pleated-curtain-02.jpeg",
    title: "Classic Ivory Pencil Pleated Sheers",
    desc: "Delicate light-filtering pencil pleats creating a warm, airy atmosphere for high-ceiling windows."
  },
  {
    src: "/images/Pleated-Curtains/Pleated-curtain-03.jpeg",
    title: "Tailored Goblet Pleat in Textured Cotton",
    desc: "Deep, structured goblet pleats providing rich volume and sophistication to formal dining rooms."
  },
  {
    src: "/images/Pleated-Curtains/Pleated-curtain-04.jpeg",
    title: "Modern Double Pinch Pleat Blackout",
    desc: "Deep Charcoal pinch pleats combining perfect room-darkening functionality with architectural styling."
  },
  {
    src: "/images/Pleated-Curtains/Pleated-curtain-05.jpeg",
    title: "Timeless Box Pleat with Premium Borders",
    desc: "Crisp and symmetrical box pleats offering a clean, tailored finish for contemporary interior designs."
  }
];

const pleatStyles = [
  {
    title: "Pinch Pleat (Double & Triple)",
    desc: "The absolute standard for luxury interiors. Fabric is gathered and sewn into clusters of two or three folds at the header, producing highly structured, elegant drapes that drop perfectly straight.",
    icon: <Layers className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Timeless formal aesthetic", "Ideal for heavy fabrics & linens", "Perfect straight-line drape"]
  },
  {
    title: "Pencil Pleat",
    desc: "Clean, closely gathered folds that resemble a row of pencils along the curtain top. Highly versatile and adjustable, this style provides a softer, semi-formal drape suited for almost any fabric.",
    icon: <Sparkles className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Slightly relaxed, cozy look", "Highly adjustable gathering width", "Complements sheer combinations"]
  },
  {
    title: "Box Pleat",
    desc: "Features wide, flat, rectangular folds that butt against each other for a modern, architectural clean look. Ideal for formal rooms, studies, and dining areas where a structured look is desired.",
    icon: <Layers className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Extremely clean top heading", "Excellent architectural appeal", "Looks stunning when closed"]
  },
  {
    title: "Goblet Pleat",
    desc: "An ultra-premium style where the top pleat is shaped into a rounded goblet form, stuffed with padding to retain its cylindrical shape, and accented with a small tuck. Ideal for luxury traditional rooms.",
    icon: <Sparkles className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Royal and dramatic look", "Perfect for luxury traditional homes", "A true premium centerpiece"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Free In-Home Measurement",
    desc: "Our premium window experts visit your home in Chennai with physical fabric catalogs and execute exact, high-accuracy laser measurements.",
    icon: <Ruler className="w-5 h-5" />
  },
  {
    step: "02",
    title: "Custom Pleat Design",
    desc: "Select your pleat style (pinch, pencil, goblet, or box), choose from 500+ premium fabrics, and design custom header heights.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    step: "03",
    title: "Precision Tailoring",
    desc: "Our state-of-the-art master tailors sew the gathers and weights into the fabric manually, assuring highly stable, lifelong folds.",
    icon: <Scissors className="w-5 h-5" />
  },
  {
    step: "04",
    title: "Flawless Installation",
    desc: "Our execution team installs custom-fitted tracks, mounts the pleated headers with premium hooks, and steams the curtains for an instant, pristine look.",
    icon: <CheckCircle className="w-5 h-5" />
  }
];

const faqs = [
  {
    q: "What is the difference between pinch pleat and pencil pleat curtains?",
    a: "Pinch pleats are gather-stitched permanently at the top in groups of two or three, creating high-definition structured columns of drapery that drop straight down. Pencil pleats are drawn together with strings at the header, resembling small, tightly packed pencil folds. Pinch pleats are more formal and structured, while pencil pleats are more adjustable and softer."
  },
  {
    q: "Do pleated curtains require special curtain tracks or rods?",
    a: "Pleated curtains are highly versatile. They can be hung on standard tracks using pin-hooks or on decorative rods with rings. For pinch pleats, we recommend recessed ceiling tracks or luxury decorative poles with rings, which allow the drapes to slide smoothly without flattening the pleats."
  },
  {
    q: "How much fabric is used to stitch custom pleated curtains?",
    a: "Pleated curtains require rich fabric fullness to create those premium, deep folds. Typically, custom pinch pleats utilize 2.5x to 3.0x fullness. This means if your window is 4 feet wide, we use 10 to 12 feet of premium fabric to stitch a beautiful, high-volume set of drapery."
  },
  {
    q: "Are pleated curtains suitable for blackout fabrics in bedrooms?",
    a: "Absolutely! The high-structured folds of double or triple pinch pleats look spectacular with heavy blackout fabrics. They eliminate light gaps between gathers and create a clean hotel-like privacy shield, blocking out external light and reducing thermal transfer."
  },
  {
    q: "How do we wash and maintain custom pleated curtains?",
    a: "Because custom pleats feature structured buckram headers sewn inside, we recommend professional dry cleaning or careful steaming to remove creases. Vacuuming them regularly with a soft brush attachment will keep dust away and retain their pristine luxury look for years."
  }
];

const pleatedSchema = {
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
      "name": "Pleated Curtains",
      "item": "https://www.classicdelight.in/curtains/pleated"
    }
  ]
};

export default function PleatedCurtainPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pleatedSchema) }}
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
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" /> Custom Drapery Portals
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                Tailored <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] to-orange-400">Pleated</span> Curtains
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                Imbue your interiors with structured luxury. Custom-stitched double and triple pinch pleats, pencil pleats, and goblet headers handcrafted in Chennai to match your architectural space.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20custom%20Pleated%20Curtains.%20Could%20you%20share%20fabric%20options%20and%20provide%20a%20free%20quote%3F`}
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
                  <h4 className="text-[#f26522] text-2xl font-bold">500+</h4>
                  <p className="text-white/40 text-xs mt-1">Premium Fabrics</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">100%</h4>
                  <p className="text-white/40 text-xs mt-1">Custom Handcrafted</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Free</h4>
                  <p className="text-white/40 text-xs mt-1">Laser Measurements</p>
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
                        src={pleatedImages[activeImageIndex].src}
                        alt={pleatedImages[activeImageIndex].title}
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
                      Showcase {activeImageIndex + 1} of {pleatedImages.length}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2 tracking-tight">
                      {pleatedImages[activeImageIndex].title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-lg line-clamp-2">
                      {pleatedImages[activeImageIndex].desc}
                    </p>
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="grid grid-cols-5 gap-2.5 mt-3 sm:mt-4">
                  {pleatedImages.map((image, index) => (
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
                        alt={`Pleated curtains thumbnail ${index + 1}`}
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

      {/* WHY CHOOSE PLEATED SECTION */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.01] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Premium Styling
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Timeless Pleat Styles
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              Every pleat style creates a distinct architectural geometry and fabric drape. Explore our custom gather varieties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pleatStyles.map((item, idx) => (
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
                Handcrafted Installations
              </h2>
            </div>
            <p className="text-white/50 max-w-md text-sm md:text-base leading-relaxed">
              Witness the immaculate drape of real Classic Delight installations tailored for Chennai apartments and luxury villas.
            </p>
          </div>

          {/* Masonry / Custom Grid */}
          <div className="grid md:grid-cols-12 gap-6">
            
            {/* Image 01 (Left Large) */}
            <div className="md:col-span-8 group relative h-[350px] md:h-[500px] rounded-[32px] overflow-hidden border border-white/10">
              <Image 
                src={pleatedImages[0].src} 
                alt={pleatedImages[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Premium Selection</h4>
                  <h3 className="text-xl md:text-3xl font-bold text-white mt-1">{pleatedImages[0].title}</h3>
                  <p className="text-white/60 text-xs md:text-sm mt-1 max-w-xl">{pleatedImages[0].desc}</p>
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
                src={pleatedImages[1].src} 
                alt={pleatedImages[1].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Soft Sheers</h4>
                  <h3 className="text-xl font-bold text-white mt-1">{pleatedImages[1].title}</h3>
                  <p className="text-white/60 text-xs mt-1">{pleatedImages[1].desc}</p>
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
                src={pleatedImages[2].src} 
                alt={pleatedImages[2].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Structured Volume</h4>
                  <h3 className="text-lg md:text-xl font-bold text-white mt-1">{pleatedImages[2].title}</h3>
                  <p className="text-white/60 text-xs mt-1">{pleatedImages[2].desc}</p>
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
                src={pleatedImages[3].src} 
                alt={pleatedImages[3].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Room Darkening</h4>
                  <h3 className="text-lg md:text-xl font-bold text-white mt-1">{pleatedImages[3].title}</h3>
                  <p className="text-white/60 text-xs mt-1">{pleatedImages[3].desc}</p>
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
                src={pleatedImages[4].src} 
                alt={pleatedImages[4].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Symmetrical Clean</h4>
                  <h3 className="text-lg md:text-xl font-bold text-white mt-1">{pleatedImages[4].title}</h3>
                  <p className="text-white/60 text-xs mt-1">{pleatedImages[4].desc}</p>
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
              Specifications & Full Fullness
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 font-semibold text-lg text-white">Parameter</th>
                  <th className="p-6 font-semibold text-lg text-[#f26522]">Standard Specifications</th>
                  <th className="p-6 font-semibold text-lg text-white/70">Design Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm md:text-base">
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#f26522]" /> Fullness Gathering
                  </td>
                  <td className="p-6 text-white/80">2.5x to 3.0x Fabric Fullness</td>
                  <td className="p-6 text-white/40">Ensures deep, luxurious folds even when completely closed.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#f26522]" /> Header Buckram
                  </td>
                  <td className="p-6 text-white/80">4-inch to 5-inch Premium Buckram Stiffener</td>
                  <td className="p-6 text-white/40">Interlining that guarantees the top pleat never collapses under fabric weight.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#f26522]" /> Fabric Compatibility
                  </td>
                  <td className="p-6 text-white/80">Linen, Velvet, Cotton, Blackouts, & Sheers</td>
                  <td className="p-6 text-white/40">Highly adaptable. Holds folds excellently in heavy and light textiles alike.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-[#f26522]" /> Stacking Width
                  </td>
                  <td className="p-6 text-white/80">Compact (approx. 15-18% of window width)</td>
                  <td className="p-6 text-white/40">Pleats bunch together compactly, maximizing window light when open.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#f26522]" /> Mounting Systems
                  </td>
                  <td className="p-6 text-white/80">Recessed Ceiling Tracks or Luxury Rod Rings</td>
                  <td className="p-6 text-white/40">Supports smooth glide and clean, elegant styling without visible hardware gaps.</td>
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
              4 Steps to Bespoke Elegance
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              We manage everything from precise measurements to flawless installation at your location.
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
              <HelpCircle className="w-4 h-4" /> Have Questions?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">
              Pleated Curtains FAQ
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

                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === idx ? "auto" : 0, opacity: activeFaq === idx ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-white/60 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
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
            Elevate Your Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4 mb-6">
            Ready to Dress Your Windows in Pleated Luxury?
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            Schedule a free visual layout measurement with physical catalogs. Speak directly to our design master tailors in Chennai.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20consult%20for%20stitching%20Pleated%20Curtains.%20Please%20let%20me%20know%20when%20you%20are%20free%20to%20connect.`}
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
                Pleated Curtains Portal · {activeImageIndex + 1} of {pleatedImages.length}
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
                  src={pleatedImages[activeImageIndex].src}
                  alt={pleatedImages[activeImageIndex].title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Lightbox Footer controls & thumbnails */}
            <div className="max-w-4xl mx-auto w-full text-center pb-4">
              <h3 className="text-white text-xl font-bold tracking-tight">
                {pleatedImages[activeImageIndex].title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1 mb-6">
                {pleatedImages[activeImageIndex].desc}
              </p>

              {/* Thumbnails */}
              <div className="flex justify-center gap-2 md:gap-3 overflow-x-auto py-1">
                {pleatedImages.map((img, index) => (
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
