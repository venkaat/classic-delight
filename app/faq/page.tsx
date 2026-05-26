
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "FAQ | Curtains, Blinds & Mosquito Nets in Chennai | Classic Delight",
  description:
    "Frequently asked questions about curtains, blinds, zebra blinds, mosquito nets, installation, measurements, pricing and premium window solutions in Chennai.",
  keywords: [
    "Curtains FAQ Chennai",
    "Blinds FAQ Chennai",
    "Mosquito Nets FAQ Chennai",
    "Curtain installation Chennai",
    "Window blinds Chennai",
    "Zebra blinds Chennai",
    "Custom curtains Chennai",
  ],
};
const faqSchema = {"@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you provide free installation for curtains in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Classic Delight provides free professional installation for all curtains, blinds and mosquito nets across Chennai including Virugambakkam, Anna Nagar, KK Nagar and Koyembedu."
      }
    },
    {
      "@type": "Question",
      "name": "What is the price of curtains in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Curtain fabric prices at Classic Delight start from Rs.130 per meter for polyester and go up to Rs.400 per meter for cotton, linen and poly-cotton blends. Final price depends on fabric, style and window measurements."
      }
    },
    {
      "@type": "Question",
      "name": "What types of blinds do you offer in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer zebra blinds, wooden blinds, roller blinds and venetian blinds in Chennai. All blinds are custom-made to fit your windows with free installation."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a free consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a free home visit by calling +91 99406 99797 or WhatsApp us directly. Our team will visit your home, take measurements and guide you through fabric and style options."
      }
    },
    {
      "@type": "Question",
      "name": "Do you install mosquito nets for sliding doors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we install custom mosquito nets for all window and door types including sliding doors, casement windows and French doors across Chennai."
      }
    }
  ]};

const faqs = [
  {
    question: "What curtain services does Classic Delight provide in Chennai?",
    answer:
      "Classic Delight provides premium curtain solutions including sheer curtains, blackout curtains, motorized curtains, designer curtains, custom stitched curtains and complete curtain installation services across Chennai. We help homeowners choose fabrics, measurements, stitching styles and installation options tailored to their interiors.",
  },
  {
    question: "Do you provide custom made curtains?",
    answer:
      "Yes. All curtains are custom tailored according to your window size, interior style and fabric preference. We offer personalized measurements and professional installation for apartments, villas, offices and commercial spaces in Chennai.",
  },
  {
    question: "Which areas in Chennai do you serve?",
    answer:
      "We provide curtain, blinds and mosquito net installation services across Chennai including Virugambakkam, Anna Nagar, KK Nagar, Vadapalani, Porur, Mogappair, T Nagar, Adyar, Velachery, OMR, ECR and surrounding areas.",
  },
  {
    question: "Do you offer home measurement services?",
    answer:
      "Yes. Our team visits your location for accurate window measurements and product consultation. Proper measurements help achieve premium finishing, smooth curtain fall and precise blind fitting.",
  },
  {
    question: "What types of blinds are available?",
    answer:
      "We provide zebra blinds, roller blinds, Roman blinds, Venetian blinds, wooden blinds, vertical blinds and customized window blind solutions for modern interiors in Chennai.",
  },
  {
    question: "What are zebra blinds?",
    answer:
      "Zebra blinds are modern dual-layer blinds featuring alternating sheer and opaque fabric strips. They allow adjustable privacy and light control while giving interiors a contemporary premium appearance.",
  },
  {
    question: "Do blackout curtains block sunlight completely?",
    answer:
      "Blackout curtains significantly reduce sunlight, heat and glare entering a room. They are ideal for bedrooms, home theatres and spaces requiring privacy and light control.",
  },
  {
    question: "Which curtain fabrics do you offer?",
    answer:
      "We provide premium curtain fabrics including linen, velvet, cotton blends, textured fabrics, sheer fabrics, jacquard designs and blackout materials suitable for modern luxury interiors.",
  },
  {
    question: "Do you install mosquito nets for windows and balconies?",
    answer:
      "Yes. We install mosquito nets for windows, sliding doors, balconies and ventilators. Our systems are designed to provide insect protection without affecting ventilation or aesthetics.",
  },
  {
    question: "Are mosquito nets removable and easy to clean?",
    answer:
      "Yes. Most mosquito net systems are removable, low maintenance and easy to clean. We provide durable solutions suitable for residential and commercial spaces.",
  },
  {
    question: "Do you provide curtain installation services?",
    answer:
      "Yes. We offer complete curtain rod installation, track installation, blind fitting and finishing services to ensure a clean and professional appearance.",
  },
  {
    question: "Can I choose curtain colors and styles?",
    answer:
      "Absolutely. We offer a wide selection of colors, textures, patterns and stitching styles to match modern, minimal, luxury and traditional interiors.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation timelines depend on fabric selection, customization and project size. Most residential projects are completed within a few days after measurements and final confirmation.",
  },
  {
    question: "Do you provide curtains for offices and commercial spaces?",
    answer:
      "Yes. We provide customized curtains and blinds for offices, clinics, showrooms, commercial buildings and hospitality spaces across Chennai.",
  },
  {
    question: "What are the benefits of premium curtains?",
    answer:
      "Premium curtains improve privacy, light control, interior aesthetics, insulation and overall ambiance while enhancing the elegance of your living spaces.",
  },
  {
    question: "Do you offer modern minimalist curtain designs?",
    answer:
      "Yes. We specialize in modern curtain styling with clean folds, elegant textures and luxury finishes suitable for contemporary homes.",
  },
  {
    question: "Can blinds help reduce heat?",
    answer:
      "Yes. Premium blinds help reduce direct sunlight and heat entering interiors, improving comfort and energy efficiency.",
  },
  {
    question: "Do you provide motorized curtains or blinds?",
    answer:
      "Yes. We provide motorized curtain and blind solutions for smart homes and luxury interiors requiring automation and convenience.",
  },
  {
    question: "What makes Classic Delight different?",
    answer:
      "Classic Delight focuses on premium craftsmanship, modern designs, accurate measurements, quality materials and elegant installations tailored for sophisticated interiors.",
  },
  {
    question: "How can I contact Classic Delight?",
    answer:
      "You can contact us through phone, WhatsApp or the contact form on our website for free consultation, measurements and product guidance.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      {/* HERO */}
      <section className="relative py-32 overflow-hidden border-b border-white/10">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
            Frequently Asked Questions
          </p>

          <h1 className="text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] mb-10">
            Curtains, Blinds &
            <br />
            Mosquito Nets FAQ
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Explore answers to the most common questions about premium curtains,
            blinds, zebra blinds, mosquito nets, installation services,
            measurements and custom window solutions in Chennai.
          </p>

        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="relative py-24">

        <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#f26522]/10 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-8">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl hover:bg-white/[0.07] transition duration-500"
            >

              <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-6 text-white">
                {faq.question}
              </h2>

              <p className="text-white/65 text-lg leading-relaxed">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* SEO CONTENT */}
      <section className="relative py-24 border-t border-white/10">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-10">
            Premium Curtains, Blinds & Mosquito Nets in Chennai
          </h2>

          <div className="space-y-8 text-white/60 text-lg leading-relaxed">

            <p>
              Classic Delight is one of the trusted names for premium curtains,
              blinds and mosquito nets in Chennai. We specialize in customized
              window solutions designed for modern homes, luxury apartments,
              villas and commercial interiors.
            </p>

            <p>
              Our services include custom curtains, zebra blinds, blackout curtains,
              wooden blinds, roller blinds and mosquito protection systems tailored
              to your interiors and lifestyle requirements.
            </p>

            <p>
              We focus on elegant design, premium fabrics, accurate measurements
              and professional installation to ensure every project achieves a
              refined and sophisticated appearance.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}
