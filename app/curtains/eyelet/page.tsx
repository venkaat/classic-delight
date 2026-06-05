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

const eyeletImages = [
  {
    src: "/images/eyelet-curtains/IMG-20260503-WA0013.jpg",
    title: "Tailored Eyelet Curtains in Premium Soft-Drape Fabric",
    desc: "A beautiful custom eyelet installation displaying uniform, deep folds that slide effortlessly along a modern decorative rod."
  }
];

const eyeletStyles = [
  {
    title: "Contemporary Metal Grommets",
    desc: "A clean and modern header style where polished or matte metal rings are inserted directly into the curtain fabric. This creates bold, deep ripples that drape straight down with structural symmetry.",
    icon: <Layers className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Sleek modern aesthetics", "Works on standard curtain rods", "Bold, uniform folding pattern"]
  },
  {
    title: "Premium Finish Options",
    desc: "Match your curtain hardware with your interior room accents. We provide high-quality eyelet rings in Matte Black, Antique Brass, Satin Silver, and Polished Chrome to complement your decor seamlessly.",
    icon: <Sparkles className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Rust-proof surface treatment", "Durable reinforced fittings", "Rod-matching color options"]
  },
  {
    title: "Smooth & Quiet Glide",
    desc: "Engineered for active daily use. Our eyelet grommets feature internal plastic silencer inserts that drastically reduce friction, allowing heavy curtains to slide smoothly and quietly without scratching your metal rods.",
    icon: <Layers className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Whisper-quiet sliding", "No rod surface wear-and-tear", "Effortless manual control"]
  },
  {
    title: "Luxe Linen & Blackout Drapes",
    desc: "Ideal for a wide variety of fabric weights. From lightweight sheer linen that filters soft sunlight, to dense blackout drapes that block out heat and glare, the eyelet header keeps fabrics hanging perfectly straight.",
    icon: <Sparkles className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Zero header bunching", "Great for high ceilings", "Allows compact stacking width"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Free Rod & Pole Survey",
    desc: "Our design experts visit your Chennai home with physical catalogs to inspect window clearances, pole diameters, and mountings for high-accuracy laser measurements.",
    icon: <Ruler className="w-5 h-5" />
  },
  {
    step: "02",
    title: "Grommet & Fabric Choice",
    desc: "Choose from 500+ premium textiles, select your ideal eyelet ring material and color finish, and customize the total fabric drop length.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    step: "03",
    title: "Precision Heading Stitching",
    desc: "Our master tailors sew a heavy-duty 4-inch buckram stiffener along the header before punching and securing the evenly-spaced grommet rings.",
    icon: <Scissors className="w-5 h-5" />
  },
  {
    step: "04",
    title: "Flawless Installation",
    desc: "Our installation team mounts bracket supports, threads the eyelet panels on the rod, trains the folds, and steams the curtains for an instant premium look.",
    icon: <CheckCircle className="w-5 h-5" />
  }
];

const faqs = [
  {
    q: "What size of curtain rods are compatible with eyelet curtains?",
    a: "Our standard eyelet rings feature a 40mm inner diameter. This makes them perfectly compatible with all decorative curtain poles up to 32mm (1.25 inches) in diameter, allowing plenty of room for a smooth, unhindered glide."
  },
  {
    q: "Do eyelet curtains require special brackets or mounting hardware?",
    a: "Eyelet curtains can be hung on any standard wall-mounted or ceiling-mounted decorative curtain rod. Because the rings thread directly onto the pole, you do not need tracks, curtain hooks, or glider tape. However, make sure that the brackets leave sufficient wall clearance for the fabric folds to bend behind the pole."
  },
  {
    q: "Can I combine sheer and blackout curtains in an eyelet style?",
    a: "Absolutely! We routinely install double-rod systems. Typically, a larger front rod holds the heavy eyelet blackout curtains, while a thinner rear rod holds soft sheer eyelet curtains. This gives you complete light and privacy control."
  },
  {
    q: "Do eyelet curtains allow light gaps at the top?",
    a: "Because eyelet curtains thread onto a rod, there is a small gap of fabric above the pole, as well as light filtering slightly between the rings and the rod. To minimize light gaps in bedrooms, we recommend mounting the curtain rod higher (close to the ceiling) and wider than the window frame."
  },
  {
    q: "How do we clean and maintain custom eyelet curtains?",
    a: "We recommend professional dry cleaning for custom eyelet curtains to preserve the buckram stiffener and prevent fabric shrinkage. For hand washing, we advise using a mild detergent and wrapping the grommet header inside a mesh wash bag to prevent the metal rings from chipping or scratching against the tub."
  }
];

const eyeletSchema = {
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
      "name": "Eyelet Curtains",
      "item": "https://www.classicdelight.in/curtains/eyelet"
    }
  ]
};

export default function EyeletCurtainPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eyeletSchema) }}
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
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" /> Modern Ring Grommet Header
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] to-orange-400">Eyelet</span> Curtains
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                Experience uniform, bold waves with casual modern styling. Handcrafted eyelet curtains stitched in Chennai, featuring custom metal ring finishes that glide silently on decorative poles.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20custom%20Eyelet%20Curtains.%20Could%20you%20share%20fabric%20options%20and%20provide%20a%20free%20quote%3F`}
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
                  <h4 className="text-[#f26522] text-2xl font-bold">4+ Finish</h4>
                  <p className="text-white/40 text-xs mt-1">Eyelet Ring Finishes</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">100%</h4>
                  <p className="text-white/40 text-xs mt-1">Silent Glide Silencers</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Free</h4>
                  <p className="text-white/40 text-xs mt-1">Measurement Visits</p>
                </div>
              </div>
            </div>

            {/* Right Showcase: Adapted elegantly for 1 image */}
            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-2xl">
                {/* Main Large Preview */}
                <div className="relative h-[350px] md:h-[450px] w-full rounded-[24px] overflow-hidden group">
                  <div className="absolute inset-0">
                    <Image
                      src={eyeletImages[0].src}
                      alt={eyeletImages[0].title}
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

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
                      Highlight Showcase
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2 tracking-tight">
                      {eyeletImages[0].title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-lg">
                      {eyeletImages[0].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE EYELET SECTION */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.01] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Premium Details
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Modern Grommet Design
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              Eyelet headings provide a highly contemporary and clean gather. Explore the unique features of our custom eyelets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eyeletStyles.map((item, idx) => (
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

      {/* DETAILED SHOWCASE: Structured for 1 image + 2 beautiful specs columns */}
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

          <div className="grid md:grid-cols-12 gap-6">
            
            {/* Image 01 (Left Large Highlight) */}
            <div className="md:col-span-8 group relative h-[350px] md:h-[500px] rounded-[32px] overflow-hidden border border-white/10 bg-white/5">
              <Image 
                src={eyeletImages[0].src} 
                alt={eyeletImages[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Premium Selection</h4>
                  <h3 className="text-xl md:text-3xl font-bold text-white mt-1">{eyeletImages[0].title}</h3>
                  <p className="text-white/60 text-xs md:text-sm mt-1 max-w-xl">{eyeletImages[0].desc}</p>
                </div>
                <button 
                  onClick={() => { setLightboxOpen(true); }}
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-[#f26522] border border-white/10 flex items-center justify-center text-white active:scale-95 transition-all"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right: Technical Features Grid / Info Cards */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {/* Card 1 */}
              <div className="flex-1 bg-[#0f0f12] border border-white/5 hover:border-[#f26522]/20 rounded-[32px] p-8 flex flex-col justify-between group transition-all duration-300">
                <div>
                  <span className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Design Details</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">Premium Ring Finishes</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Select from custom eyelet colors: Matte Black, Antique Brass, Satin Nickel, and Polished Chrome to complement your curtain rod and interior furniture accents.
                  </p>
                </div>
                <div className="text-xs text-white/40 mt-4 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#f26522]" /> Rust-resistant coating
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-1 bg-[#0f0f12] border border-white/5 hover:border-[#f26522]/20 rounded-[32px] p-8 flex flex-col justify-between group transition-all duration-300">
                <div>
                  <span className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Functionality</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">Smooth & Quiet Glide</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Our custom metal grommets feature internal plastic silencer cuffs to reduce friction, ensuring a whisper-quiet, smooth glide across the pole without scratching.
                  </p>
                </div>
                <div className="text-xs text-white/40 mt-4 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#f26522]" /> Integrated silencer rings
                </div>
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
              Specifications & Folds
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
                    <Layers className="w-4 h-4 text-[#f26522]" /> Fabric Fullness
                  </td>
                  <td className="p-6 text-white/80">1.8x to 2.2x Rod Width</td>
                  <td className="p-6 text-white/40">Creates perfect, neat ripples without over-bunching or blocking rod slides.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#f26522]" /> Grommet Ring Diameter
                  </td>
                  <td className="p-6 text-white/80">40mm Standard Inner Diameter</td>
                  <td className="p-6 text-white/40">Fits rods up to 32mm comfortably to allow effortless sliding.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#f26522]" /> Fabric Compatibility
                  </td>
                  <td className="p-6 text-white/80">Linen, Velvet, Cotton, Blackouts, & Sheers</td>
                  <td className="p-6 text-white/40">Highly versatile. Looks clean and modern in both light and medium-heavy textiles.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-[#f26522]" /> Stacking Width
                  </td>
                  <td className="p-6 text-white/80">Compact (approx. 10-12% of rod width)</td>
                  <td className="p-6 text-white/40">Grommet panels stack ultra-tightly, leaving maximum glass visible.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#f26522]" /> Mounting Systems
                  </td>
                  <td className="p-6 text-white/80">Standard & Luxury Decorative Poles</td>
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
              Eyelet Curtains FAQ
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
            Ready to Upgrade to Custom Eyelet Curtains?
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            Schedule a free visual layout measurement with physical catalogs. Speak directly to our design master tailors in Chennai.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20consult%20for%20stitching%20Eyelet%20Curtains.%20Please%20let%20me%20know%20when%20you%20are%20free%20to%20connect.`}
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

      {/* FULLSCREEN LIGHTBOX MODAL: Simplified for 1 image */}
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
                Eyelet Curtains Portal · Featured Showcase
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
                  src={eyeletImages[0].src}
                  alt={eyeletImages[0].title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Lightbox Footer info */}
            <div className="max-w-4xl mx-auto w-full text-center pb-8">
              <h3 className="text-white text-xl font-bold tracking-tight">
                {eyeletImages[0].title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                {eyeletImages[0].desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
