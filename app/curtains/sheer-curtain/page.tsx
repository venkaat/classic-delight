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

const sheerImages = [
  {
    src: "/images/sheer-curtain/Sheer-curtain.jpeg",
    title: "Elegant Sheer Curtains in Premium Soft-Drape Fabric",
    desc: "A beautiful custom sheer installation filtering soft natural sunlight while maintaining an open, airy ambience in a modern living space."
  }
];

const sheerStyles = [
  {
    title: "Soft Natural Light Filtering",
    desc: "Create a warm, inviting glow in any room. Sheer curtains are designed to diffuse harsh sunlight, reducing glare while keeping your interiors beautifully bright and naturally illuminated.",
    icon: <Sparkles className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Gentle day lighting", "Protects furniture from direct UV", "Maintains outdoor view"]
  },
  {
    title: "Daytime Privacy Control",
    desc: "Enjoy your space without feeling exposed. The translucent weave of our premium sheers prevents outsiders from seeing inside during the day, while still keeping your rooms feeling spacious and airy.",
    icon: <Layers className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Discrete daytime screening", "Elegant layering option", "Perfect for living rooms & study areas"]
  },
  {
    title: "Premium Fabric Selection",
    desc: "We offer an exquisite collection of sheer fabrics, including pure linen textures, delicate voiles, embroidered patterns, and subtle metallic weaves to add a touch of sophistication to your decor.",
    icon: <Sparkles className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Linen-look & textured voiles", "High-durability polyester blends", "Anti-fade threads"]
  },
  {
    title: "Perfect for Double Layering",
    desc: "For the ultimate light and privacy control, pair sheers with a second layer of blackout curtains. This classic combination allows you to switch effortlessly between bright, filtered light and total darkness.",
    icon: <Layers className="w-6 h-6 text-[#f26522]" />,
    benefits: ["Flexible double rod setup", "Rich luxury hotel look", "Enhanced sound and thermal insulation"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Free In-Home Consultation",
    desc: "Our design experts visit your Chennai home with physical fabric books, helping you choose the perfect opacity, texture, and color under your room's natural lighting.",
    icon: <Ruler className="w-5 h-5" />
  },
  {
    step: "02",
    title: "Custom Header & Styling",
    desc: "Choose your preferred heading style—ripple fold, pinch pleat, or eyelet—and select from our library of 500+ premium sheer fabrics.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    step: "03",
    title: "Master-Crafted Stitching",
    desc: "Our master tailors sew custom sheer panels with weighted bottom hems, ensuring they hang straight and create uniform, elegant folds.",
    icon: <Scissors className="w-5 h-5" />
  },
  {
    step: "04",
    title: "Professional Installation",
    desc: "Our expert crew mounts your tracks or poles, hangs the sheer drapes, trains the waves, and performs final steaming for a flawless finish.",
    icon: <CheckCircle className="w-5 h-5" />
  }
];

const faqs = [
  {
    q: "Do sheer curtains provide privacy at night?",
    a: "Sheer curtains provide excellent privacy during the daytime by diffusing light from the outside. However, at night, when the lights are on inside and it is dark outside, sheers become semi-transparent. For complete nighttime privacy, we recommend layering sheer curtains with blackout curtains or blinds."
  },
  {
    q: "What is the best way to clean and wash sheer curtains?",
    a: "We recommend professional dry cleaning or a very gentle, cold hand wash for custom sheer curtains to protect their delicate fabric fibers. If using a washing machine, place the sheers in a mesh laundry bag, select the delicates cycle with mild detergent, and hang them up immediately to dry naturally and prevent creasing."
  },
  {
    q: "Can sheer curtains be automated?",
    a: "Yes! Sheer curtains can be mounted on motorized tracks (such as Somfy or Tuya). This allows you to control your light-filtering sheers using a remote control, smartphone app, or voice commands (Alexa/Google Assistant)."
  },
  {
    q: "What fabric options are available for sheer curtains?",
    a: "We offer a wide variety of premium sheer fabrics, including classic polyester voiles, linen-blend sheers for a textured organic look, crushed sheers, embroidered sheers, and flame-retardant commercial-grade sheers."
  },
  {
    q: "Do you offer free home visits and measurements in Chennai?",
    a: "Yes, we provide free in-home measurement visits across Chennai (including Anna Nagar, Adyar, Velachery, OMR, ECR, and T. Nagar). Our experts will bring fabric catalogs to your doorstep so you can compare options in your actual space."
  }
];

const sheerSchema = {
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
      "name": "Sheer Curtains",
      "item": "https://www.classicdelight.in/curtains/sheer-curtain"
    }
  ]
};

export default function SheerCurtainPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sheerSchema) }}
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
                <Sparkles className="w-3.5 h-3.5 animate-spin-slow" /> Custom Light-Filtering Drapery
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] to-orange-400">Sheer</span> Curtains
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                Enhance your living space with soft, ethereal daytime lighting. Handcrafted sheer curtains stitched in Chennai, designed to filter harsh sunlight while maintaining elegant privacy and breezy views.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20custom%20Sheer%20Curtains.%20Could%20you%20share%20fabric%20options%20and%20provide%20a%20free%20quote%3F`}
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
                  <p className="text-white/40 text-xs mt-1">Delicate Fabrics</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">100%</h4>
                  <p className="text-white/40 text-xs mt-1">Custom Hemming</p>
                </div>
                <div>
                  <h4 className="text-[#f26522] text-2xl font-bold">Free</h4>
                  <p className="text-white/40 text-xs mt-1">In-Home Demos</p>
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
                      src={sheerImages[0].src}
                      alt={sheerImages[0].title}
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
                      {sheerImages[0].title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-lg">
                      {sheerImages[0].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE SHEER SECTION */}
      <section className="py-24 border-b border-white/5 relative bg-[#09090b]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.01] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#f26522] uppercase tracking-[6px] text-xs font-bold bg-[#f26522]/10 border border-[#f26522]/20 px-4 py-1.5 rounded-full inline-block mb-4">
              Premium Details
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ethereal Light Control
            </h2>
            <p className="text-white/50 mt-4 text-base md:text-lg">
              Sheer curtains deliver custom elegance and daytime glare reduction. Learn more about their unique features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sheerStyles.map((item, idx) => (
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
                src={sheerImages[0].src} 
                alt={sheerImages[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h4 className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Premium Selection</h4>
                  <h3 className="text-xl md:text-3xl font-bold text-white mt-1">{sheerImages[0].title}</h3>
                  <p className="text-white/60 text-xs md:text-sm mt-1 max-w-xl">{sheerImages[0].desc}</p>
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
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">Exquisite Textures</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Select from raw slub linens, premium voiles, patterned devorés, or shimmering metallic threads to find the ideal texture that pairs with your interior accents.
                  </p>
                </div>
                <div className="text-xs text-white/40 mt-4 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#f26522]" /> Luxurious organic feel
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-1 bg-[#0f0f12] border border-white/5 hover:border-[#f26522]/20 rounded-[32px] p-8 flex flex-col justify-between group transition-all duration-300">
                <div>
                  <span className="text-[#f26522] text-xs font-semibold uppercase tracking-wider">Craftsmanship</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">Weighted Hems</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    All our sheers are stitched with lead-weight bottom tapes or wide double-fold hems to ensure they maintain structural vertical folds and resist breeze-blow.
                  </p>
                </div>
                <div className="text-xs text-white/40 mt-4 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#f26522]" /> Immaculate drape stability
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
              Specifications & Fullness
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
                  <td className="p-6 text-white/80">2.5x to 3.0x Window Width</td>
                  <td className="p-6 text-white/40">Creates rich, full waves instead of a flat sheet, adding high-end texture.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#f26522]" /> Weighted Hems
                  </td>
                  <td className="p-6 text-white/80">Lead-weight tape interlined in bottom hem</td>
                  <td className="p-6 text-white/40">Adds downwards pull so sheer panels hang perfectly straight and drop with elegance.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#f26522]" /> Fabric Options
                  </td>
                  <td className="p-6 text-white/80">Linen-Blend, Crushed Voiles, Polyester, Cotton Organzas</td>
                  <td className="p-6 text-white/40">Balances soft aesthetics with high resistance to stretching and solar fading.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-[#f26522]" /> Heading Compatibility
                  </td>
                  <td className="p-6 text-white/80">Ripple Fold, Pinch Pleat, Pencil Pleat, Eyelet</td>
                  <td className="p-6 text-white/40">Can be custom stitched to work with any rod or track setup in Chennai.</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#f26522]" /> Light Transmittance
                  </td>
                  <td className="p-6 text-white/80">15% - 40% (depending on weave density)</td>
                  <td className="p-6 text-white/40">Reduces harsh glare and glare-induced heating while preserving ambient day lighting.</td>
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
              4 Steps to Ethereal Windows
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
              Sheer Curtains FAQ
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
            Ready to Filter Light with Custom Sheers?
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            Schedule a free visual layout measurement with physical catalogs. Speak directly to our design master tailors in Chennai.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20consult%20for%20stitching%20Sheer%20Curtains.%20Please%20let%20me%20know%20when%20you%20are%20free%20to%20connect.`}
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
                Sheer Curtains Portal · Featured Showcase
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
                  src={sheerImages[0].src}
                  alt={sheerImages[0].title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Lightbox Footer info */}
            <div className="max-w-4xl mx-auto w-full text-center pb-8">
              <h3 className="text-white text-xl font-bold tracking-tight">
                {sheerImages[0].title}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                {sheerImages[0].desc}
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
