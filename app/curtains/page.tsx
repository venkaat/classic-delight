
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Premium Curtains in Chennai | Custom Curtains & Installation | Classic Delight",
  description:
    "Premium curtains in Chennai including blackout curtains, sheer curtains, ripple fold curtains and custom window curtain solutions. Professional curtain installation across Chennai.",
  keywords: [
    "Curtains Chennai",
    "Premium Curtains Chennai",
    "Custom Curtains Chennai",
    "Designer Curtains Chennai",
    "Luxury Curtains Chennai",
    "Blackout Curtains Chennai",
    "Sheer Curtains Chennai",
    "Ripple Fold Curtains Chennai",
    "Curtain Shop Chennai",
    "Curtain Installation Chennai",
  ],
};

const curtainTypes = [
  "Pleated Curtains",
  "Ripple Curtains",
  "Eyelid Curtains",
  "Blackout Curtains",
  "Sheer Curtains",
  "Designer Curtains",
];

const fabrics = [
  ["Cotton Curtains", "Premium breathable fabric with elegant natural texture."],
  ["Linen Curtains", "Luxury linen finish perfect for modern interiors."],
  ["Blackout Curtains", "Excellent privacy and sunlight control."],
  ["Sheer Curtains", "Soft natural light filtering with premium aesthetics."],
  ["Silk Curtains", "Luxury rich finish for sophisticated interiors."],
  ["Polyester Curtains", "Affordable modern curtains with durability."],
];

const locations = [
  "Virugambakkam",
  "Anna Nagar",
  "KK Nagar",
  "Vadapalani",
  "Porur",
  "Mogappair",
  "Adyar",
  "Velachery",
  "T Nagar",
  "OMR",
  "ECR",
  "Ashok Nagar",
];

const faqs = [
  {
    q: "Which curtain fabric is best for modern homes?",
    a: "Linen, sheer and blackout combinations are among the most popular choices for modern interiors because they balance elegance, privacy and light control.",
  },
  {
    q: "Do you provide custom stitched curtains?",
    a: "Yes. We provide fully customized curtain stitching and installation services tailored to your window measurements and interior preferences.",
  },
  {
    q: "Do blackout curtains reduce heat?",
    a: "Yes. Blackout curtains help reduce sunlight, glare and heat entering interiors, improving comfort and privacy.",
  },
  {
    q: "Which curtain style is best for luxury interiors?",
    a: "Ripple fold curtains and premium linen curtains are highly preferred for luxury and contemporary interior designs.",
  },
];

export default function CurtainsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <Header />

      {/* HERO */}
      <div className="relative py-32 border-b border-white/10 overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Premium Curtains Chennai
            </p>

            <h1 className="text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] mb-8">
              Luxury Curtains
              For Modern
              Interiors
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
              Discover premium curtains in Chennai including blackout curtains,
              sheer curtains, ripple fold curtains and custom stitched curtain
              solutions tailored for sophisticated interiors.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://wa.me/919840519955"
                target="_blank"
                className="bg-[#f26522] px-8 py-4 rounded-2xl text-white hover:scale-105 transition duration-500 shadow-[0_15px_40px_rgba(242,101,34,0.3)]"
              >
                Get Instant Quote
              </a>

              <Link
                href="/curtain-visualizer"
                className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl text-white hover:bg-white/10 transition duration-500"
              >
                Try Visualizer
              </Link>

            </div>

          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">

            <img
              src="/images/gallery/curtains_1.jpg"
              alt="Premium curtains installed in Chennai by Classic Delight"
              className="w-full h-[650px] object-cover"
            />

          </div>

        </div>

      </div>

      {/* CURTAIN TYPES */}
      <div className="py-28 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Curtain Styles
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-6">
              Curtain Types
              For Every Space
            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              Explore premium curtain styles suitable for luxury homes,
              apartments, offices and commercial interiors.
            </p>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

            {curtainTypes.map((item) => (

              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:border-[#f26522]/30 transition duration-500"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] text-2xl mb-8">
                  ✨
                </div>

                <h3 className="text-2xl font-semibold leading-tight">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* FABRICS */}
      <div className="py-28 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Curtain Fabrics
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-6">
              Premium Curtain
              Fabric Collection
            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              Luxury curtain fabrics designed for elegant interiors,
              premium styling and modern functionality.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {fabrics.map(([title, desc]) => (

              <div
                key={title}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-[32px] p-8"
              >

                <h3 className="text-3xl font-semibold mb-6">
                  {title}
                </h3>

                <p className="text-white/60 leading-relaxed text-lg">
                  {desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* BUYING GUIDE */}
      <div className="py-28 border-b border-white/10">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Curtain Buying Guide
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-6">
              How To Choose
              The Right Curtains
            </h2>

          </div>

          <div className="space-y-10 text-white/60 text-lg leading-relaxed">

            <p>
              Choosing the right curtains depends on privacy requirements,
              sunlight exposure, room style and interior aesthetics. Blackout
              curtains are ideal for bedrooms while sheer curtains create soft
              natural lighting for living spaces.
            </p>

            <p>
              Ripple fold curtains provide a modern luxury appearance while
              pleated curtains offer timeless elegance suitable for traditional
              and contemporary interiors.
            </p>

            <p>
              Linen curtains and cotton curtains remain highly preferred for
              premium homes because of their texture, softness and refined look.
            </p>

          </div>

        </div>

      </div>

      {/* SERVICE AREAS */}
      <div className="py-28 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Areas We Serve
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-6">
              Curtains Across
              Chennai
            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              Professional curtain installation and premium window solutions
              across major Chennai locations.
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {locations.map((item) => (

              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-center text-white/80 hover:border-[#f26522]/30 transition duration-500"
              >
                Curtains in {item}
              </div>

            ))}

          </div>

        </div>

      </div>

      {/* FAQ */}
      <div className="py-28 border-b border-white/10">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Curtain FAQ
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-6">
              Frequently Asked
              Questions
            </h2>

          </div>

          <div className="space-y-6">

            {faqs.map((faq) => (

              <div
                key={faq.q}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8"
              >

                <h3 className="text-2xl font-semibold mb-5">
                  {faq.q}
                </h3>

                <p className="text-white/60 text-lg leading-relaxed">
                  {faq.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* CTA */}
      <div className="py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
            Get Started
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-8">
            Upgrade Your
            Windows With
            Premium Curtains
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Get personalized curtain recommendations, premium fabrics and
            professional installation services across Chennai.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/919840519955"
              target="_blank"
              className="bg-[#f26522] px-8 py-4 rounded-2xl text-white hover:scale-105 transition duration-500 shadow-[0_15px_40px_rgba(242,101,34,0.3)]"
            >
              Get Instant Quote
            </a>

            <Link
              href="/contact"
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl text-white hover:bg-white/10 transition duration-500"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

      <Footer />

      <FloatingCTA />

    </main>
  );
}
