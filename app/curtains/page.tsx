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
  Calendar
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import { siteConfig } from "@/lib/siteConfig";

// Breadcrumb Schema
const curtainschema = {
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
      "name": "Curtains Chennai",
      "item": "https://www.classicdelight.in/curtains"
    }
  ]
};

const heroSlides = [
  {
    src: "/images/gallery/Curtains-002.jpg",
    tag: "Luxury Blackouts",
    title: "Complete Light Control & Sleep Sanctity",
    desc: "Stitched with thick thermal backing to eliminate noise, glare, and temperature transfer for ultimate comfort."
  },
  {
    src: "/images/gallery/Curtains-004.jpg",
    tag: "Ceiling Heights",
    title: "Double-Height Tailored Masterpieces",
    desc: "Floor-to-ceiling customized pinch pleats that amplify wall height and drape with royal proportions."
  },
  {
    src: "/images/gallery/Curtains-012.jpg",
    tag: "Textured Linens",
    title: "Organic Linen-Blend Living Room Drapes",
    desc: "Soft, breathable textures that filter Chennai's bright daylight into a warm, comfortable interior glow."
  },
  {
    src: "/images/gallery/Curtains-130.jpg",
    tag: "Hotel Aesthetics",
    title: "Double Track Sheer & Velvet Layering",
    desc: "Ethereal voile sheers combined with heavy insulating velvet drapes for dynamic day and night versatility."
  }
];

const curtainTypes = [
  { 
    name: "Pleated Curtains", 
    href: "/curtains/pleated", 
    desc: "Handcrafted gathers sewn into permanent, structured double & triple pinch folds.",
    img: "/images/Pleated-Curtains/Pleated-curtain-01.jpeg",
    tag: "Formal & Luxury"
  },
  { 
    name: "Ripple Curtains", 
    href: "/curtains/ripple", 
    desc: "Modern wave-like styling running along flat, ceiling-recessed tracking systems.",
    img: "/images/ripple-curtain/motorised-ripple-curtain.webp",
    tag: "Minimalist & Clean"
  },
  { 
    name: "Eyelet Curtains", 
    href: "/curtains/eyelet", 
    desc: "Reinforced metal grommets gliding smoothly on decorative wall-mounted curtain poles.",
    img: "/images/eyelet-curtains/IMG-20260503-WA0013.jpg",
    tag: "Casual & Contemporary"
  },
  { 
    name: "Sheer Curtains", 
    href: "/curtains/sheer-curtain", 
    desc: "Delicate, light-filtering transparent voiles that protect privacy while inviting daylight.",
    img: "/images/sheer-curtain/Sheer-curtain.jpeg",
    tag: "Ethereal & Airy"
  },
  { 
    name: "Blackout Curtains", 
    href: "/curtains/blackout", 
    desc: "Heavy-duty double-pass lined drapes blocking 100% light for bedrooms and media rooms.",
    img: "/images/blackout-curtains/The Sleep Sanctuary.png",
    tag: "Privacy & Insulation"
  },
  { 
    name: "Designer Curtains", 
    href: "#", 
    desc: "Bespoke pattern placements, velvet borders, contrast trims, and customized header styles.",
    img: "/images/gallery/Curtains-140.jpg",
    tag: "Bespoke & Artistic"
  },
  { 
    name: "Hospital Curtains", 
    href: "/curtains/hospital", 
    desc: "Clinical-grade antibacterial and flame-retardant curtains with heavy-duty ceiling tracking.",
    img: "/images/hospital-curtains/WhatsApp Image 2026-05-27 at 1.15.14 AM.jpeg",
    tag: "Clinical & Safety"
  },
];

const fabricsData = [
  {
    name: "Premium Linen",
    desc: "Organic slub texture that filters light beautifully while keeping your spaces feeling airy and natural.",
    opacity: "Light-Filtering (30-50%)",
    bestFor: "Living Rooms & Lounges",
    foldStyle: "Ripple Fold / Pinch Pleat",
    washCare: "Dry Clean Recommended"
  },
  {
    name: "Rich Cotton",
    desc: "Soft, breathable, and highly durable. Available in a vast spectrum of solid colors and printed patterns.",
    opacity: "Medium-Filtering (50-70%)",
    bestFor: "Dining Rooms & Bedrooms",
    foldStyle: "Eyelet / Pencil Pleat",
    washCare: "Gentle Machine Wash"
  },
  {
    name: "Thermal Blackout",
    desc: "Specialized double or triple-pass lining that completely blocks light, isolates noise, and regulates temperature.",
    opacity: "100% Blackout",
    bestFor: "Bedrooms & Home Theaters",
    foldStyle: "Double Pinch Pleat",
    washCare: "Dry Clean Only"
  },
  {
    name: "Ethereal Voile (Sheer)",
    desc: "Delicate, lightweight transparent fabrics that create soft lighting while maintaining daytime privacy.",
    opacity: "Transparent (10-20%)",
    bestFor: "Balcony Doors & Layering",
    foldStyle: "Ripple Fold / Pencil Pleat",
    washCare: "Delicate Hand Wash"
  },
  {
    name: "Luxury Velvet",
    desc: "Thick, high-pile fabric that brings royal warmth, opulent drapes, and dramatic shadow effects.",
    opacity: "High-Filtering (80-95%)",
    bestFor: "Master Bedrooms & Formal Salons",
    foldStyle: "Goblet / Pinch Pleat",
    washCare: "Professional Dry Clean"
  },
  {
    name: "Polyester Jacquard",
    desc: "Durable weaves with intricate raised patterns. Highly resistant to fading, wrinkling, and daily wear.",
    opacity: "Medium-to-High (60-80%)",
    bestFor: "Offices & High-Traffic Areas",
    foldStyle: "Eyelet / Ripple Fold",
    washCare: "Standard Machine Wash"
  }
];

const galleryImages = [
  {
    src: "/images/curtain-main/beige-sheer-curtain-combo-chennai.jpeg",
    category: "sheer",
    title: "Premium Beige & Sheer Combo",
    desc: "A beautiful custom sheer curtain layered with soft beige solid panels for a classic hotel-style finish in Chennai."
  },
  {
    src: "/images/curtain-main/Curtains-004.jpg",
    category: "pleated",
    title: "Grand Double-Height Pleated Drapes",
    desc: "Ceiling-height double pinch pleated curtains that add elegance and structure to a high-ceiling residential room."
  },
  {
    src: "/images/curtain-main/Curtains-021.jpg",
    category: "pleated",
    title: "Elegant Tailored Living Room Curtains",
    desc: "Soft linen-blend solid curtains custom-stitched to align perfectly and stack compactly next to windows."
  },
  {
    src: "/images/curtain-main/Curtains-023.jpg",
    category: "blackout",
    title: "Premium Master Bedroom Blackouts",
    desc: "High-density blackout curtains fitted to create a quiet, dark environment for a comfortable sleep."
  },
  {
    src: "/images/curtain-main/Curtains-079.jpg",
    category: "pleated",
    title: "Contemporary Charcoal Pleated Panels",
    desc: "Structured pencil pleat curtains custom tailored in sleek charcoal fabric for a modern touch."
  },
 
  {
    src: "/images/curtain-main/Curtains-106.jpg",
    category: "pleated",
    title: "Custom Neutral Linen-Look Drapery",
    desc: "Elegantly draped neutral tone curtains providing privacy and textured warmth to modern living rooms."
  },
  {
    src: "/images/gallery/Curtains-001.jpeg",
    category: "sheer",
    title: "Ethereal Balcony Sheers",
    desc: "Delicate light-filtering sheers installed for a sliding balcony door in a Chennai apartment."
  },
  {
    src: "/images/gallery/Curtains-002.jpg",
    category: "blackout",
    title: "Luxury Slate Gray Blackouts",
    desc: "Premium double-layer drapes offering complete light control and elegant living room aesthetics."
  },
  {
    src: "/images/gallery/Curtains-004.jpg",
    category: "pleated",
    title: "Double-Height Custom Drapes",
    desc: "Grand floor-to-ceiling pleated drapes tailoring a luxury double-height living room window."
  },
  {
    src: "/images/gallery/Curtains-008.jpg",
    category: "blackout",
    title: "Contemporary Bedroom Blackouts",
    desc: "Tailored charcoal blackout curtains fitted to block 100% light for optimal bedroom rest."
  },
  {
    src: "/images/gallery/Curtains-012.jpg",
    category: "sheer",
    title: "Warm Ivory Linen Drapes",
    desc: "Soft linen-blend custom drapes diffusing light gracefully in a modern lounge space."
  },
  {
    src: "/images/gallery/Curtains-020.jpg",
    category: "pleated",
    title: "Classic Cream Pinch Pleats",
    desc: "Highly-structured double pinch pleats in cream velvet, creating formal luxury styling."
  },
  {
    src: "/images/gallery/Curtains-088.jpg",
    category: "sheer",
    title: "Modern Wave Sheers & Solids",
    desc: "Perfect ripple fold tracks pairing linen sheer panels with deep solid blackout borders."
  },
  {
    src: "/images/gallery/Curtains-110.jpg",
    category: "pleated",
    title: "Textured Tailored Pleats",
    desc: "Minimalist pencil pleats in oatmeal linen-look fabric for a clean modern finish."
  },
  
  {
    src: "/images/gallery/Curtains-140.jpg",
    category: "pleated",
    title: "Luxury Crimson Border Drapes",
    desc: "Bespoke custom-made curtains with rich trim borders, handcrafted to match accent furniture."
  },
  {
    src: "/images/gallery/Curtains-145.jpg",
    category: "pleated",
    title: "Grand Dining Room Pinch Pleats",
    desc: "Grand dining room triple pinch pleats hanging elegantly from an antique brass decorative curtain pole."
  },
  {
    src: "/images/gallery/Curtains-017.jpg",
    category: "sheer",
    title: "Minimalist Floating Sheers",
    desc: "Ceiling-recessed motorized tracks allowing sheers to slide seamlessly across window panes."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Free Laser Measurements",
    desc: "Our design experts visit your location with extensive fabric catalogs and take 100% accurate measurements with professional laser devices.",
    icon: <Ruler className="w-5 h-5 text-[#f26522]" />
  },
  {
    step: "02",
    title: "Bespoke Styling",
    desc: "Choose from 500+ fabric choices, coordinate sheers and solids, select header styles, and finalize track or rod details.",
    icon: <Sliders className="w-5 h-5 text-[#f26522]" />
  },
  {
    step: "03",
    title: "Master Tailoring",
    desc: "Your curtains are stitched with 4-inch stiff buckram headers, double-fold side hems, and lead weights for ideal fall and drape.",
    icon: <Scissors className="w-5 h-5 text-[#f26522]" />
  },
  {
    step: "04",
    title: "Flawless Installation",
    desc: "We mount ceiling tracks or wall rods, hang the curtains, pleat-train the fabric columns, and steam the panels for a perfect finished look.",
    icon: <CheckCircle className="w-5 h-5 text-[#f26522]" />
  }
];

const locations = [
  "Anna Nagar",
  "Adyar",
  "Velachery",
  "Porur",
  "T Nagar",
  "OMR",
  "ECR",
  "Vadapalani",
  "KK Nagar",
  "Mogappair",
  "Nungambakkam",
  "Besant Nagar"
];

const faqsList = [
  {
    q: "How do I choose between sheer, blackout, or double layered curtains?",
    a: "Sheer curtains are perfect for rooms where you want diffused daylight and daytime privacy (like living rooms). Blackout curtains are essential for bedrooms or media rooms where you need 100% light block and noise reduction. Double layered curtains (sheers on a rear track, blackouts on the front track) give you the best of both worlds, enabling complete versatility."
  },
  {
    q: "What fabric fullness ratio do you use for custom curtains?",
    a: "We use 2.5x to 3.0x fabric fullness for pleated and ripple fold curtains. This means for a 4-foot wide window, we use 10 to 12 feet of fabric width. This ensures that the drapes maintain deep, luxurious folds and structure even when fully closed, unlike cheap pre-made curtains which flatten out."
  },
  {
    q: "Can I automate my curtains? What motor systems do you use?",
    a: "Absolutely! We specialize in curtain motorization in Chennai. We install ceiling-recessed motorized tracks compatible with premium motors like Somfy, Tuya, and Dooya. They can be controlled via remote, smartphone app, or integrated with home automation hubs like Alexa and Google Home."
  },
  {
    q: "How long does the entire measuring, tailoring, and installation process take?",
    a: "Once you select your fabrics and approve the estimate, our master tailoring and installation take between 5 to 7 working days. This includes custom stitching at our studio, track mounting at your home, and final steam-dressing."
  }
];

export default function CurtainsPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeFabric, setActiveFabric] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Auto slide hero
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Filter gallery items
  const filteredGallery = galleryFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(item => item.category === galleryFilter);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const openLightbox = (index: number) => {
    // Find the correct index in the filtered list
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  return (
    <main className="min-h-screen bg-[#070708] text-white overflow-hidden selection:bg-[#f26522] selection:text-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(curtainschema) }}
      />

      <Header />

      {/* HERO SECTION - Split Dynamic Layout */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:py-32 border-b border-white/5 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#f26522]/15 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-15%] w-[500px] h-[500px] bg-[#f26522]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#f26522] text-xs font-semibold tracking-wider uppercase mb-8">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Custom Drapery Studio Chennai
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                Bespoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] to-orange-400">Curtains</span> For Luxury Homes
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                Transform your windows with custom-stitched pinch pleats, minimalist ripple waves, and whisper-quiet motorization. Tailored in Chennai with 500+ premium fabrics, hand-finished to drape flawlessly.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20custom%20curtains%20installation.%20Please%20schedule%20a%20free%20site%20visit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#f26522] to-orange-500 hover:to-[#f26522] px-8 py-4 rounded-2xl text-white font-semibold hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_15px_40px_rgba(242,101,34,0.25)] w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" /> Book Free Site Visit
                </a>
                <Link
                  href="/curtain-visualizer"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl text-white font-semibold hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto"
                >
                  Launch Visualizer <ArrowRight className="w-4 h-4 text-[#f26522]" />
                </Link>
              </div>

              {/* Quick stats grid */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 w-full">
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">500+</h4>
                  <p className="text-white/40 text-xs mt-1">Fabrics & Colors</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">100%</h4>
                  <p className="text-white/40 text-xs mt-1">Bespoke Stitching</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">5-7 Day</h4>
                  <p className="text-white/40 text-xs mt-1">Express Delivery</p>
                </div>
              </div>
            </div>

            {/* Right Slideshow */}
            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-2xl">
                <div className="relative h-[380px] md:h-[500px] w-full rounded-[24px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={heroIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={heroSlides[heroIndex].src}
                        alt={heroSlides[heroIndex].title}
                        fill
                        priority
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Navigation Bullets */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setHeroIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === heroIndex ? "bg-[#f26522] w-8" : "bg-white/40 w-2 hover:bg-white/70"
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Bottom Text Details */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <span className="text-[#f26522] text-xs font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#f26522]/20">
                      {heroSlides[heroIndex].tag}
                    </span>
                    <h3 className="text-white text-xl md:text-2xl font-bold mt-3 tracking-tight leading-tight">
                      {heroSlides[heroIndex].title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm mt-2 max-w-xl">
                      {heroSlides[heroIndex].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CURTAIN TYPES SECTION - Hover Cards Grid */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Premium Styling
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Bespoke Curtain Header Styles
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              The heading method decides how your fabric ripples, bunches, and glides. Explore our tailored designs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {curtainTypes.map((item, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#0f0f12] border border-white/5 hover:border-[#f26522]/20 rounded-[32px] overflow-hidden flex flex-col justify-between h-[420px] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                {/* Visual Background */}
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image 
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] to-transparent" />
                  <span className="absolute top-4 left-4 text-[#f26522] text-xs font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.name}
                    </h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {item.href !== "#" ? (
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-[#f26522] text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform self-start"
                    >
                      Explore Style <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20custom%20${item.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/50 text-sm font-semibold mt-4 hover:text-[#f26522] transition-colors self-start"
                    >
                      Inquire Custom Work →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE FABRIC PREVIEW - Glass Tabs Grid */}
      <section className="py-24 border-b border-white/5 relative">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold">
              Material Library
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">
              Curtain Fabric Showcase
            </h2>
            <p className="text-white/50 mt-3">
              Compare fabrics, opacities, and washing specs to find your ideal fit.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Fabric list */}
            <div className="md:col-span-5 flex flex-col gap-3">
              {fabricsData.map((fabric, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFabric(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    idx === activeFabric
                      ? "bg-white/5 border-[#f26522] text-white shadow-[0_0_20px_rgba(242,101,34,0.05)] translate-x-2"
                      : "bg-[#0f0f12] border-white/5 text-white/50 hover:border-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-lg font-bold">{fabric.name}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                    idx === activeFabric ? "text-[#f26522] translate-x-1" : "text-white/20"
                  }`} />
                </button>
              ))}
            </div>

            {/* Right Active Display Card */}
            <div className="md:col-span-7">
              <div className="bg-[#0f0f12] border border-white/5 rounded-[32px] p-8 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#f26522]/5 blur-[80px] rounded-full pointer-events-none" />

                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3.5 py-1 rounded-full bg-[#f26522]/10 border border-[#f26522]/20 text-[#f26522] text-xs font-semibold uppercase tracking-wider">
                      {fabricsData[activeFabric].opacity}
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                      {fabricsData[activeFabric].washCare}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white tracking-tight mb-4">
                    {fabricsData[activeFabric].name}
                  </h3>

                  <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                    {fabricsData[activeFabric].desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                  <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-wider">Best Suited For</h4>
                    <p className="text-white text-base font-semibold mt-1">
                      {fabricsData[activeFabric].bestFor}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-wider">Recommended Styles</h4>
                    <p className="text-[#f26522] text-base font-semibold mt-1">
                      {fabricsData[activeFabric].foldStyle}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FILTERABLE REAL INSTALLATION GALLERY */}
      <section className="py-24 border-b border-white/5 bg-[#09090b]">
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

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2.5 bg-white/5 border border-white/5 p-1.5 rounded-2xl backdrop-blur-md">
              {["all", "blackout", "sheer", "pleated"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setGalleryFilter(filter)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${
                    galleryFilter === filter
                      ? "bg-[#f26522] text-white shadow-md"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {filter}s
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, index) => {
                // Find actual index in global array to open correct lightbox image
                const globalIndex = galleryImages.findIndex(x => x.src === item.src);
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={item.src}
                    onClick={() => openLightbox(globalIndex)}
                    className="group relative h-[320px] rounded-[24px] overflow-hidden border border-white/10 cursor-pointer bg-white/5"
                  >
                    <Image 
                      src={item.src} 
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
                    />
                    
                    {/* Shadow overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6" />

                    {/* Quick overlay content */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between gap-4">
                      <div>
                        <h4 className="text-white text-base font-bold tracking-tight">{item.title}</h4>
                        <p className="text-white/60 text-xs line-clamp-1 mt-0.5">{item.desc}</p>
                      </div>
                      <button className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* TIMELINE / PROCESS SECTION */}
      <section className="py-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              4 Steps to Beautiful Drapery
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              We execute everything from laser-precise onsite measurements to steam-dressing at your windows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#0f0f12] border border-white/5 hover:border-[#f26522]/20 rounded-[32px] p-8 flex flex-col items-start transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute top-6 right-8 text-5xl font-extrabold text-white/[0.02] group-hover:text-[#f26522]/10 transition-colors pointer-events-none select-none">
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

      {/* CHENNAI SERVICE AREAS */}
      <section className="py-24 border-b border-white/5 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold">
              Local Installation
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">
              Serving Homes Across Chennai
            </h2>
            <p className="text-white/50 mt-3 text-base">
              Bespoke curtain stitching and measuring services in key residential neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {locations.map((loc) => (
              <div
                key={loc}
                className="bg-white/5 border border-white/5 hover:border-[#f26522]/30 rounded-2xl px-6 py-4 text-center text-sm text-white/80 hover:text-white transition-all duration-300"
              >
                Curtains in {loc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <div className="text-center mb-16">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold flex items-center justify-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4" /> Have Questions?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">
              Curtain Selection FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqsList.map((faq, idx) => (
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

      {/* LUXURY CTA */}
      <section className="py-24 relative bg-black overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f26522]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
          <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold">
            Elevate Your Windows
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4 mb-6">
            Ready to Dress Your Home in Premium Fabrics?
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            Schedule a free site survey. We will visit your home with physical fabric samples and catalogs, measure your window clearances, and suggest custom alignments.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20measuring%20and%20design%20consultation%20for%20custom%20curtains.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#f26522] to-orange-500 hover:to-[#f26522] px-8 py-4 rounded-2xl text-white font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_15px_40px_rgba(242,101,34,0.3)]"
            >
              <MessageCircle className="w-5 h-5" /> Inquire on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl text-white font-semibold hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Book Site Consultation
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
                Installation Showcase · {lightboxIndex + 1} of {galleryImages.length}
              </span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#f26522] hover:scale-105 active:scale-95 transition flex items-center justify-center border border-white/10 text-white"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Main Image & Control */}
            <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full py-6">
              
              {/* Prev Button */}
              <button
                onClick={prevLightbox}
                className="absolute left-0 md:left-4 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-black/60 hover:bg-[#f26522] border border-white/10 hover:scale-105 active:scale-95 transition"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="relative aspect-[4/3] w-full max-h-[70vh] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextLightbox}
                className="absolute right-0 md:right-4 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-black/60 hover:bg-[#f26522] border border-white/10 hover:scale-105 active:scale-95 transition"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

            </div>

            {/* Lightbox Footer info */}
            <div className="max-w-4xl mx-auto w-full text-center pb-4">
              <h3 className="text-white text-xl font-bold tracking-tight">
                {galleryImages[lightboxIndex].title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1 mb-6">
                {galleryImages[lightboxIndex].desc}
              </p>

              {/* Whatsapp book for this style link */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20an%20installation%20similar%20to%20${encodeURIComponent(galleryImages[lightboxIndex].title)}.%20Can%20you%20share%20fabric%20pricing%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f26522] px-6 py-2.5 rounded-xl text-white text-xs font-semibold hover:scale-105 active:scale-95 transition"
              >
                <MessageCircle className="w-4 h-4" /> Inquire About This Style
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
