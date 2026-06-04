
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  alternates: {
    canonical: "/pleated-curtains-chennai",
  },
  title:
    "Pleated Curtains Chennai | Luxury Pleated Curtain Installation",
  description:
    "Premium pleated curtains in Chennai with custom stitching, blackout fabrics, ripple fold styles and luxury curtain installation for modern interiors.",
  keywords: [
    "Pleated Curtains Chennai",
    "Luxury Pleated Curtains",
    "Pinch Pleat Curtains",
    "Ripple Fold Curtains",
    "Designer Curtains Chennai",
    "Custom Curtains Chennai",
    "Luxury Curtains Chennai",
  ],
};

const heroImages = [
  "/images/Pleated-Curtains/Pleated-curtain-01.jpeg",
  "/images/Pleated-Curtains/Pleated-curtain-02.jpeg",
  "/images/Pleated-Curtains/Pleated-curtain-03.jpeg",
  "/images/Pleated-Curtains/Pleated-curtain-04.jpeg",
];

const pleatTypes = [
  {
    title: "Pinch Pleat Curtains",
    desc: "Elegant structured folds ideal for luxury living rooms and formal interiors.",
  },
  {
    title: "Ripple Fold Curtains",
    desc: "Modern wave-like curtain styling preferred for contemporary homes.",
  },
  {
    title: "Pencil Pleat Curtains",
    desc: "Classic versatile pleated curtains suitable for both modern and traditional interiors.",
  },
  {
    title: "Tailored Pleat Curtains",
    desc: "Minimal refined curtain styling with premium clean folds.",
  },
];

const benefits = [
  "Luxury elegant curtain appearance",
  "Perfect fabric draping and fall",
  "Suitable for blackout and sheer combinations",
  "Custom stitching for exact window measurements",
  "Premium hotel style interior aesthetics",
  "Excellent light control and privacy",
];

const faqs = [
  {
    q: "Are pleated curtains suitable for modern homes?",
    a: "Yes. Pleated curtains are widely used in modern luxury interiors because of their elegant folds, structured appearance and premium styling.",
  },
  {
    q: "Which fabric works best for pleated curtains?",
    a: "Linen, blackout, velvet and cotton fabrics are highly preferred because they maintain beautiful curtain folds and draping.",
  },
  {
    q: "Do pleated curtains require more fabric?",
    a: "Yes. Pleated curtains typically require more fabric to create fuller and richer folds for a premium appearance.",
  },
  {
    q: "Can pleated curtains be customized?",
    a: "Absolutely. We provide fully customized pleated curtains tailored to your window size, fabric preference and interior theme.",
  },
  {
    q: "Do you provide pleated curtain installation in Chennai?",
    a: "Yes. We provide measuring, stitching and installation services across Chennai including Anna Nagar, Adyar, Velachery, OMR and ECR.",
  },
];

export default function PleatedCurtainsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="relative py-32 border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Pleated Curtains Chennai
            </p>

            <h1 className="text-5xl md:text-7xl leading-[0.92] tracking-[-0.04em] font-semibold mb-8">
              Luxury Pleated Curtains
              For Elegant Interiors
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Discover premium pleated curtains in Chennai with luxury fabrics,
              custom stitching, blackout combinations and elegant curtain
              installation tailored for sophisticated modern interiors.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f26522] px-8 py-4 rounded-2xl hover:scale-105 transition duration-500 shadow-[0_15px_40px_rgba(242,101,34,0.3)]"
              >
                Get Instant Quote
              </a>

              <Link
                href="/curtain-visualizer"
                className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition duration-500"
              >
                Try Visualizer
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {heroImages.map((img) => (
              <div
                key={img}
                className="relative h-[240px] md:h-[320px] rounded-[32px] overflow-hidden border border-white/10"
              >
                <Image
                  src={img}
                  alt="Luxury pleated curtains in Chennai"
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
            Premium Curtain Styling
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight tracking-[-0.04em] font-semibold mb-10">
            What Are Pleated Curtains?
          </h2>

          <div className="space-y-8 text-white/60 text-lg leading-relaxed">
            <p>
              Pleated curtains are premium window treatments designed with
              stitched fabric folds that create a structured and elegant drape.
              These curtains are among the most preferred curtain styles for
              luxury homes, apartments, villas and modern interior spaces.
            </p>

            <p>
              The carefully designed pleats allow curtains to maintain smooth
              uniform folds while improving the overall sophistication of the
              room. Pleated curtain styles work exceptionally well with linen,
              blackout, cotton and sheer curtain fabrics.
            </p>

            <p>
              At Classic Delight, we provide custom stitched pleated curtains in
              Chennai with premium fabrics, luxury curtain tracks and complete
              installation services tailored for modern interiors.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Pleated Curtain Styles
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight tracking-[-0.04em] font-semibold mb-6">
              Types Of Pleated Curtains
            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              Explore luxury pleated curtain styles suitable for contemporary,
              classic and premium interior spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pleatTypes.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:border-[#f26522]/30 transition duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-[#f26522] text-2xl mb-8">
                  ✨
                </div>

                <h3 className="text-3xl font-semibold mb-5">
                  {item.title}
                </h3>

                <p className="text-white/60 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Benefits
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight tracking-[-0.04em] font-semibold mb-6">
              Why Choose Pleated Curtains?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div
                key={item}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-[32px] p-8"
              >
                <div className="text-[#f26522] text-3xl mb-6">✓</div>

                <p className="text-xl leading-relaxed text-white/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYING GUIDE */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Buying Guide
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight tracking-[-0.04em] font-semibold mb-6">
              How To Choose
              Pleated Curtains
            </h2>
          </div>

          <div className="space-y-10 text-white/60 text-lg leading-relaxed">
            <p>
              Selecting the right pleated curtains depends on fabric texture,
              room lighting, privacy requirements and interior design style.
              Linen and sheer combinations are ideal for living rooms while
              blackout pleated curtains are preferred for bedrooms.
            </p>

            <p>
              Ceiling mounted pleated curtains create a taller luxurious look,
              especially for modern apartments and villas. Ripple fold curtains
              provide minimal contemporary styling while pinch pleat curtains
              create formal elegance.
            </p>

            <p>
              Neutral curtain shades such as beige, ivory, grey and soft white
              remain highly preferred for premium interiors because they blend
              naturally with modern furniture and wall textures.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
            Chennai Installation
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight tracking-[-0.04em] font-semibold mb-8">
            Pleated Curtains Across Chennai
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-4xl mx-auto">
            We provide premium pleated curtain installation services across
            Anna Nagar, Adyar, Velachery, Porur, T Nagar, OMR, ECR,
            Vadapalani, KK Nagar and nearby Chennai locations.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              FAQ
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight tracking-[-0.04em] font-semibold mb-6">
              Frequently Asked Questions
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
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
            Upgrade Your Interiors
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight tracking-[-0.04em] font-semibold mb-8">
            Transform Your Windows
            With Luxury Pleated Curtains
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Get premium pleated curtain fabrics, custom stitching and luxury
            installation services for elegant modern interiors across Chennai.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f26522] px-8 py-4 rounded-2xl hover:scale-105 transition duration-500 shadow-[0_15px_40px_rgba(242,101,34,0.3)]"
            >
              Get Instant Quote
            </a>

            <Link
              href="/contact"
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition duration-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
