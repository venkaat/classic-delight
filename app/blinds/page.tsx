'use client';

import { useState, useEffect } from "react";
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
  Calendar,
  Home,
  ShieldCheck,
  Check
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import { siteConfig } from "@/lib/siteConfig";

const blindschema = {
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
      "name": "Blinds Chennai",
      "item": "https://www.classicdelight.in/blinds"
    }
  ]
};

const heroSlides = [
  {
    src: "/images/blinds/zebra.jpg",
    tag: "Modern Versatility",
    title: "Precision Zebra Blinds",
    desc: "Shift dual-layer sheer and solid stripes to balance private sanctuary spaces with warm, filtered daylight."
  },
  {
    src: "/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.24 AM.jpeg",
    tag: "Minimalist glare Control",
    title: "Premium Roller Blinds",
    desc: "Sleek, space-saving designs that roll up tightly to preserve views while shielding interiors from Chennai's intense heat."
  },
  {
    src: "/images/roman-blinds/roman-blind-4.jpeg",
    tag: "Tailored Craftsmanship",
    title: "Bespoke Roman Blinds",
    desc: "Combining the clean lines of window blinds with the soft, elegant fold drapery of premium natural linen fabrics."
  },
  {
    src: "/images/gallery/modern-window-blinds-installation-chennai.jpg",
    tag: "Commercial Excellence",
    title: "Smart Motorized Systems",
    desc: "Heavy-duty quiet motorized solutions designed for pristine conference rooms and modern residential settings."
  }
];

const blindsList = [
  {
    name: "Roman Blinds",
    price: "₹350 / sqft",
    image: "/images/blinds/roman.jpg",
    desc: "Elegant fabric folds that stack neatly, combining soft drapery aesthetics with modern window convenience.",
    href: "/blinds/roman"
  },
  {
    name: "Roller Blinds",
    price: "₹200 / sqft",
    image: "/images/blinds/roller.jpg",
    desc: "Sleek, minimalist roller shades ideal for glare control, UV protection, and complete office or bedroom blackout.",
    href: "/blinds/roller"
  },
  {
    name: "Zebra Blinds",
    price: "₹220 / sqft",
    image: "/images/blinds/zebra.jpg",
    desc: "Innovative dual-layer fabric bands allowing infinite adjustments between privacy and light filtration.",
    href: "/blinds/zebra"
  },
  {
    name: "Wooden Blinds",
    price: "₹300 / sqft",
    image: "/images/blinds/wooden.jpg",
    desc: "Handcrafted natural basswood slats providing organic warmth, rich wood textures, and heavy-duty durability."
  },
  {
    name: "PVC Blinds",
    price: "₹140 / sqft",
    image: "/images/blinds/pvc.jpg",
    desc: "Moisture-resistant and highly durable window treatments, perfect for high-humidity areas like kitchens and bathrooms."
  },
  {
    name: "Custom Printed Blinds",
    price: "₹240 / sqft",
    image: "/images/blinds/custom.jpg",
    desc: "Express your unique style with high-resolution custom artwork, floral designs, or brand logos printed on premium fabrics."
  }
];

const spaceRecommendations = [
  {
    room: "Living Rooms",
    choice: "Zebra Blinds",
    desc: "Allows elegant stripes of soft light to filter in during the day while maintaining privacy, highlighting contemporary interiors.",
    image: "/images/blinds/zebra.jpg",
    href: "/blinds/zebra"
  },
  {
    room: "Bedrooms",
    choice: "Blackout Roller Blinds",
    desc: "Total light blocking and thermal insulation to keep heat out and assure quiet, deep sleep.",
    image: "/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.25 AM (1).jpeg",
    href: "/blinds/roller"
  },
  {
    room: "Offices & Studies",
    choice: "Sunscreen Roller Blinds",
    desc: "Combats intense laptop glare, rejects UV rays, and coordinates professional space aesthetics.",
    image: "/images/roller-blade-blinds/WhatsApp Image 2026-06-04 at 12.53.24 AM.jpeg",
    href: "/blinds/roller"
  },
  {
    room: "Luxury Interiors",
    choice: "Bespoke Roman Blinds",
    desc: "Adds volume, warm fabric textures, and elegant classic folds that function like modern shades.",
    image: "/images/roman-blinds/roman-blind-4.jpeg",
    href: "/blinds/roman"
  },
  {
    room: "Bathrooms & Kitchens",
    choice: "PVC & Moisture-Proof Blinds",
    desc: "Heavy-duty wipe-clean PVC slats designed to handle steam, humidity, and splattering water droplets.",
    image: "/images/blinds/pvc.jpg"
  }
];

const features = [
  {
    title: "On-Site Design Survey",
    desc: "We visit your Chennai home or office with a suitcase of material catalogs and take laser-accurate window measurements.",
    icon: <Ruler className="w-5 h-5 text-[#f26522]" />
  },
  {
    title: "Whisper-Quiet Motors",
    desc: "Automate your window treatments with certified motorized tracks compatible with remotes, mobile apps, and Alexa.",
    icon: <Sliders className="w-5 h-5 text-[#f26522]" />
  },
  {
    title: "5-Year Guarantee",
    desc: "Enjoy peace of mind. We use commercial-grade aluminum rails, anti-fray fabrics, and warrant our motors and tracks.",
    icon: <ShieldCheck className="w-5 h-5 text-[#f26522]" />
  },
  {
    title: "Professional Fitting",
    desc: "Our trained technicians mount hardware frames securely, ensuring perfect level alignments and zero light gaps.",
    icon: <Check className="w-5 h-5 text-[#f26522]" />
  }
];

const faqs = [
  {
    q: "What are the most popular window blinds for homes in Chennai?",
    a: "Zebra blinds and Roman blinds are highly popular for homes due to their decorative look and flexible daylight controls. For bedrooms, blackout roller blinds are highly requested to block heat and early morning sunlight."
  },
  {
    q: "Can you motorize all types of window blinds?",
    a: "Yes, most of our blinds (including Zebra, Roller, and Roman blinds) can be motorized using compact, silent tubular motors. They can be controlled via remotes, wall switches, smartphones, or integrated with smart home assistants like Alexa and Google Home."
  },
  {
    q: "Are blinds better than curtains?",
    a: "Blinds offer a clean, space-saving, and modern minimal look with precise angle light controls. Curtains add soft texture, sound absorption, and classic volume. Many luxury homes in Chennai combine sheer curtains with blackout roller or Roman blinds on the same window for the best of both worlds."
  },
  {
    q: "How do I clean my window blinds?",
    a: "Zebra and Roller blinds are made from dust-resistant polyester and can be vacuumed with a soft brush or wiped down with a damp cloth. PVC blinds are 100% waterproof and can be washed easily. Roman blinds made of drapery fabrics can be vacuumed or detached for dry cleaning."
  },
  {
    q: "Do you offer free measurements in Chennai?",
    a: "Yes! We provide free on-site consultations, laser measurements, and catalog demonstrations across Chennai. Our team will visit your home, clinic, or office with fabric and slat samples to help you choose the perfect fit."
  }
];

export default function BlindsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSpace, setActiveSpace] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Auto-scroll hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#070708] text-white overflow-hidden selection:bg-[#f26522] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blindschema) }}
      />

      <Header />

      {/* HERO SLIDER SECTION */}
      <section className="relative h-[80vh] min-h-[600px] border-b border-white/5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[activeSlide].src}
              alt={heroSlides[activeSlide].title}
              fill
              priority
              className="object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-black/35" />
          </motion.div>
        </AnimatePresence>

        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f26522]/15 border border-[#f26522]/30 text-[#f26522] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" /> {heroSlides[activeSlide].tag}
              </span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                {heroSlides[activeSlide].title}
              </h1>

              <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                {heroSlides[activeSlide].desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20installing%20window%20blinds.%20Could%20we%20arrange%20a%20site%20consultation%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f26522] hover:bg-orange-600 px-8 py-4 rounded-2xl text-white font-medium hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_15px_40px_rgba(242,101,34,0.35)]"
                >
                  Get Instant Quote
                </a>
                <Link
                  href="/contact"
                  className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-2xl text-white font-medium hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  Book Site Visit
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide navigation controls */}
        <div className="absolute bottom-10 right-10 z-20 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeSlide ? "w-8 bg-[#f26522]" : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* CORE FEATURES TICKER */}
      <section className="py-12 border-b border-white/5 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">{feat.title}</h4>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIMARY BLINDS COLLECTION GRID */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Our Collection
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Premium Window Blinds
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              Explore our range of customizable window solutions. Click on Roman, Roller, or Zebra blinds to discover detailed specs, photos, and styling tips.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blindsList.map((blind, idx) => {
              const cardContent = (
                <div className="h-full bg-gradient-to-br from-[#0f0f12] to-[#0a0a0c] border border-white/5 hover:border-[#f26522]/30 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group relative flex flex-col justify-between">
                  <div>
                    {/* Image Box */}
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={blind.image}
                        alt={`${blind.name} installation Chennai`}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white/90 border border-white/10 font-semibold uppercase tracking-wider">
                        {blind.price}
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f26522] transition-colors flex items-center justify-between">
                        {blind.name}
                        {blind.href && <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300 text-[#f26522]" />}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {blind.desc}
                      </p>
                    </div>
                  </div>

                  {blind.href ? (
                    <div className="px-6 pb-6 pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#f26522] font-semibold border-b border-[#f26522]/20 pb-0.5 group-hover:border-[#f26522]/60 transition-colors">
                        View Detailed Showcase
                      </span>
                    </div>
                  ) : (
                    <div className="px-6 pb-6 pt-2">
                      <span className="inline-flex items-center gap-1 text-xs text-white/30 font-medium">
                        Custom Catalog Only
                      </span>
                    </div>
                  )}
                </div>
              );

              return blind.href ? (
                <Link key={idx} href={blind.href} className="block h-full">
                  {cardContent}
                </Link>
              ) : (
                <div key={idx} className="block h-full">
                  {cardContent}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* INTERACTIVE RECOMMENDATION TOOL */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.01] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Buying Guide
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Best Blinds for Every Space
            </h2>
            <p className="text-white/50 mt-4">
              Click a room type below to view our interior designer recommendations.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left selector links */}
            <div className="lg:col-span-5 space-y-3">
              {spaceRecommendations.map((space, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSpace(idx)}
                  className={`w-full flex items-center justify-between p-6 rounded-2xl text-left border transition-all duration-300 ${
                    idx === activeSpace
                      ? "bg-[#f26522]/10 border-[#f26522] text-[#f26522]"
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10 text-white"
                  }`}
                >
                  <div>
                    <span className="text-xs opacity-50 block uppercase tracking-wider mb-1">Recommended for</span>
                    <span className="text-xl font-bold">{space.room}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs opacity-50 block uppercase tracking-wider mb-1">Choice</span>
                    <span className={`text-base font-semibold ${idx === activeSpace ? "text-[#f26522]" : "text-white/80"}`}>{space.choice}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right details box */}
            <div className="lg:col-span-7">
              <div className="bg-[#0f0f12] border border-white/5 rounded-3xl p-6 relative overflow-hidden h-[420px] flex flex-col justify-end group">
                
                {/* Showcase Background */}
                <div className="absolute inset-0">
                  <Image
                    src={spaceRecommendations[activeSpace].image}
                    alt={spaceRecommendations[activeSpace].choice}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-700 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>

                {/* Content Box */}
                <div className="relative z-10 p-4">
                  <span className="text-[#f26522] text-xs font-semibold tracking-widest uppercase bg-[#f26522]/10 border border-[#f26522]/30 px-3 py-1 rounded-full inline-block mb-3">
                    Premium Selection
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">{spaceRecommendations[activeSpace].choice}</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-lg mb-6">
                    {spaceRecommendations[activeSpace].desc}
                  </p>
                  
                  {spaceRecommendations[activeSpace].href && (
                    <Link
                      href={spaceRecommendations[activeSpace].href}
                      className="inline-flex items-center gap-2 text-white bg-[#f26522] hover:bg-orange-600 px-6 py-3 rounded-xl text-sm font-medium transition duration-300"
                    >
                      Explore {spaceRecommendations[activeSpace].choice} <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-16">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Window Blinds FAQ
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
          <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold mb-4 inline-block">Design Consultation</span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Upgrade Your Windows With Premium Blinds
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Get in touch with Classic Delight for custom configurations, automatic motor setups, and a professional site survey in Chennai.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20want%20to%20get%20a%20pricing%20estimate%20for%20custom%20blinds.`}
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

      <Footer />
      <FloatingCTA />
    </main>
  );
}