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
  Sun
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingCTA from "../../components/FloatingCTA";
import { siteConfig } from "@/lib/siteConfig";

const rollerImages = [
  {
    src: "/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.24 AM.jpeg",
    title: "Classic Cream Office Roller Blinds",
    desc: "Sleek cream-toned roller blinds providing pristine light filtration and professional glare control in commercial meeting rooms."
  },
  {
    src: "/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.24 AM (1).jpeg",
    title: "Executive Conference Room Shades",
    desc: "Custom-fitted office roller blinds with a high UV-rejection rate, shielding workstations and laptops from direct sun glare."
  },
  {
    src: "/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.25 AM.jpeg",
    title: "Minimalist Residential Roller Blinds",
    desc: "Compact window-frame integration in a modern kitchen, maintaining a neat, wipe-clean surface with minimal fabric bulk."
  },
  {
    src: "/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.25 AM (1).jpeg",
    title: "Blackout Roller Blinds for Bedrooms",
    desc: "Double-coated backing providing complete blackout capabilities and thermal insulation for modern bedrooms."
  },
  {
    src: "/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.25 AM (2).jpeg",
    title: "Custom Printed Semi-Sheer Roller Blinds",
    desc: "Semi-translucent fabric styling that maintains privacy while allowing gentle natural daylight to brighten up corridors."
  },
  {
    src: "/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.26 AM.jpeg",
    title: "Sleek Dark Gray Office Window Treatments",
    desc: "Heavy-duty commercial fabrics with anti-fraying edges, designed for long-lasting daily motorized operation."
  },
  {
    src: "/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.26 AM (1).jpeg",
    title: "Premium Motorized Roller Blinds",
    desc: "Whisper-quiet motorized window treatments with custom remote control settings, ideal for large window walls."
  }
];

const rollerFeatures = [
  {
    title: "Maximum Light & Glare Control",
    desc: "Perfect for workspace desks and bedrooms. Choose between sheer fabrics that filter glare, sunscreen fabrics that maintain views, or 100% blackout linings.",
    icon: <Sun className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Protects screens from glare", "Rejects up to 99% UV rays", "Helps keep room temperatures cool"]
  },
  {
    title: "Minimalist Space Saver",
    desc: "Roller blinds roll up tightly onto a top tube, staying completely out of the way to preserve your window views and maintain a clean, uncluttered profile.",
    icon: <Layers className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Takes minimal window space", "Fits tight inside casings", "Modern, architectural appearance"]
  },
  {
    title: "Smart Motorization",
    desc: "Take control of hard-to-reach or large windows. Integrate smart tubular motors that operate via multi-channel remotes, mobile apps, or voice control systems.",
    icon: <Sliders className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Smart home hub integration", "Scheduled timers for sunrise/sunset", "Whisper-quiet motor motion"]
  },
  {
    title: "Low Maintenance & Wipeable",
    desc: "Perfect for busy offices, kitchens, and bathrooms. Crafted from heavy-duty polyester or PVC coated yarns that resist dust, stains, and moisture.",
    icon: <Sparkles className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Moisture and mold resistant", "Easy to wipe clean with damp cloth", "Highly durable commercial fabrics"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "On-Site Consultation & Glare Test",
    desc: "Our window specialists visit your home or office in Chennai to analyze sun paths, inspect window casings, and measure sizes.",
    icon: <Ruler className="w-5 h-5" />
  },
  {
    step: "02",
    title: "Fabric Openness Selection",
    desc: "Select fabric opacity—ranging from 1% to 5% sunscreen openness factor to preserve natural light, or select full thermal blackout.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    step: "03",
    title: "Precision Laser Cutting",
    desc: "We use laser-cutting tables to achieve straight edges, prevent fabric fraying, and secure bottom aluminum weight bars.",
    icon: <Scissors className="w-5 h-5" />
  },
  {
    step: "04",
    title: "Tensioned Installation",
    desc: "Our installation crew secures bracket mounts, fits the roller tube, tests chain tensioners (or programs motor limits), and checks alignments.",
    icon: <CheckCircle className="w-5 h-5" />
  }
];

const faqs = [
  {
    q: "What is the difference between sunscreen and blackout roller blinds?",
    a: "Sunscreen roller blinds feature a woven grid design that blocks heat and glare while allowing soft natural light and outer views to filter through (measured in 1%, 3%, or 5% openness factors). Blackout roller blinds are made of solid, light-blocking fabrics that prevent all light from passing through, making them perfect for bedrooms and media rooms."
  },
  {
    q: "Can roller blinds be installed without drilling?",
    a: "For a standard, sturdy install, brackets are securely drilled into the wall or window frame. However, for specific situations, we offer alternative mounting configurations. Our technicians will inspect your window frame material to advise on the sturdiest mounting option."
  },
  {
    q: "Are motorized roller blinds expensive to install?",
    a: "Motorized roller blinds are an investment in comfort and safety. The pricing depends on the size of the blind and the choice of motor (such as rechargeable battery-powered wireless motors or direct AC hardwired motors). We provide options to fit different budgets and handle the setup entirely."
  },
  {
    q: "How do I choose between an inside and outside mount?",
    a: "An inside mount fits snug inside the window recess, offering a clean, modern look. An outside mount covers the entire window opening, extending past the frame. Outside mounts are recommended for complete blackout since they reduce light leakage around the edges of the fabric."
  },
  {
    q: "How long do custom roller blinds last?",
    a: "With our commercial-grade aluminum tubes and high-quality woven polyester and PVC fabrics, Classic Delight roller blinds are built to last over 7-10 years under normal daily use. We provide warranty coverage on our premium motors and hardware systems."
  }
];

const rollerSchema = {
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
      "name": "Roller Blinds",
      "item": "https://www.classicdelight.in/blinds/roller"
    }
  ]
};

export default function RollerBlindsPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % rollerImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + rollerImages.length) % rollerImages.length);
  };

  return (
    <main className="min-h-screen bg-[#070708] text-white overflow-hidden selection:bg-[#f26522] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rollerSchema) }}
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
                <Sparkles className="w-3.5 h-3.5" /> High Performance Window Shades
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                Premium Roller <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] to-orange-400">Blinds</span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                Sleek, minimalist, and highly functional window treatments designed for modern homes and commercial offices. Perfect for blocking intense glare, shielding UV rays, and providing total blackout control.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20custom%20Roller%20Blinds.%20Could%20we%20schedule%20a%20free%20site%20visit%3F`}
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
                  Contact Commercial Team <ArrowRight className="w-4 h-4 text-[#f26522]" />
                </Link>
              </div>

              {/* Specs Badges */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 w-full">
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">100%</h4>
                  <p className="text-white/40 text-xs mt-1">Blackout Options</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">UV</h4>
                  <p className="text-white/40 text-xs mt-1">Shield Protection</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Heavy</h4>
                  <p className="text-white/40 text-xs mt-1">Duty Mechanisms</p>
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
                        src={rollerImages[activeImageIndex].src}
                        alt={rollerImages[activeImageIndex].title}
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
                      Showcase {activeImageIndex + 1} of {rollerImages.length}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2 tracking-tight">
                      {rollerImages[activeImageIndex].title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-lg">
                      {rollerImages[activeImageIndex].desc}
                    </p>
                  </div>
                </div>

                {/* Thumbnails Row */}
                <div className="grid grid-cols-7 gap-1 mt-3 sm:mt-4">
                  {rollerImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all duration-300 ${
                        index === activeImageIndex 
                          ? "border-[#f26522] ring-2 ring-[#f26522]/30 scale-[1.03]" 
                          : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={`Roller blind thumbnail ${index + 1}`}
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

      {/* WHY CHOOSE ROLLER BLINDS */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.01] via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              High-End Specs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Commercial & Residential Performance
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              Explore the engineering and functional designs behind our durable rolling shade systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {rollerFeatures.map((item, idx) => (
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
              <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold">Choosing Opacity</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 mb-6">
                Sunscreen vs. Blackout Options
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                Depending on the directional exposure of your windows and the purpose of your rooms, we customize the fabric transparency factor.
              </p>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f26522]" /> Sunscreen Grids (1% - 5% Openness)
                  </h4>
                  <p className="text-white/60 text-sm">
                    Blocks heat and glares while maintaining standard outward visibility. Extremely popular for glass facade office buildings, kitchens, and commercial lobbies.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f26522]" /> Total Blackout Shades
                  </h4>
                  <p className="text-white/60 text-sm">
                    Constructed with multi-pass acrylic backing to stop all light rays. Recommended for private study tables, bedrooms, home theater rooms, and conference projector screens.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="relative h-[250px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.24 AM.jpeg"
                  alt="Sunscreen roller shades in office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-full text-xs font-medium border border-white/10">Sunscreen Blinds</span>
              </div>
              <div className="relative h-[250px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 mt-8">
                <Image
                  src="/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.25 AM (1).jpeg"
                  alt="Blackout roller blinds in bedroom"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-full text-xs font-medium border border-white/10">Blackout Blinds</span>
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
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Bespoke Roller Blinds in 4 Steps
            </h2>
            <p className="text-white/50 mt-4">
              We ensure precise fitting and clean motorized configurations for all home and commercial projects.
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

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
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
          <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold mb-4 inline-block">Shield Your Space</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Ready to Install Modern Roller Blinds?
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Get commercial-grade glare protection or complete home bedroom blackouts. Schedule a free on-site design consultation in Chennai today.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20want%20to%20get%20a%20pricing%20estimate%20for%20Roller%20Blinds.`}
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
                src={rollerImages[activeImageIndex].src}
                alt={rollerImages[activeImageIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center max-w-2xl px-4">
              <h3 className="text-white text-2xl font-bold">{rollerImages[activeImageIndex].title}</h3>
              <p className="text-white/60 text-sm mt-2">{rollerImages[activeImageIndex].desc}</p>
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
                {activeImageIndex + 1} / {rollerImages.length}
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
