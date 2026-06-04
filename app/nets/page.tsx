import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  alternates: {
    canonical: "/nets",
  },
  title:
    "Mosquito Nets in Chennai | Sliding & Pleated Mosquito Nets | Classic Delight",

  description:
    "Premium mosquito nets in Chennai including sliding window nets, pleated mosquito nets, openable mosquito screens and custom installation across Virugambakkam, Anna Nagar, Vadapalani and all Chennai areas.",

  keywords: [
    "Mosquito Nets Chennai",
    "Pleated Mosquito Nets Chennai",
    "Sliding Mosquito Nets",
    "Window Mosquito Nets",
    "Mosquito Net Installation Chennai",
    "Mosquito Nets Virugambakkam",
  ],
};
const mosquitonetSchema = {

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
      "name": "Mosquito Nets Chennai",
      "item": "https://www.classicdelight.in/nets"
    }
  ]
};

const mosquitoNets = [
  {
    name: "Openable Window Nets",
    price: "₹180 / Sqft",
    description:
      "Smooth openable mosquito nets designed for everyday ventilation and insect protection.",
    image: "/images/nets/open-window.jpg",
  },

  {
    name: "Openable Door Nets",
    price: "₹380 / Sqft",
    description:
      "Durable mosquito net doors with strong frames ideal for balconies and entrances.",
    image: "/images/nets/open-door.jpg",
  },

  {
    name: "Sliding Window Nets",
    price: "₹360 / Sqft",
    description:
      "Elegant sliding mosquito net systems for modern apartments and large windows.",
    image: "/images/nets/sliding-window.jpg",
  },

  {
    name: "Pleated Window Nets (SS)",
    price: "₹380 / Sqft",
    description:
      "Premium stainless steel pleated mosquito nets with smooth folding operation.",
    image: "/images/nets/pleated-ss.jpg",
  },

  {
    name: "Pleated Window Nets (Fibre)",
    price: "₹290 / Sqft",
    description:
      "Affordable pleated fibre mosquito nets for modern residential interiors.",
    image: "/images/nets/pleated-fibre.jpg",
  },

  {
    name: "Pleated Door Nets",
    price: "₹420 / Sqft",
    description:
      "Luxury pleated mosquito door systems with sleek sliding functionality.",
    image: "/images/nets/pleated-door.png",
  },

  {
    name: "Barrier Free Pleated Door Nets",
    price: "₹550 / Sqft",
    description:
      "Premium barrier-free mosquito net systems designed for seamless accessibility and luxury interiors.",
    image: "/images/nets/barrier-free.png",
  },
];

export default function MosquitoNetsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mosquitonetSchema) }}
      />

      <Header />

      {/* HERO */}
      <section className="relative py-32">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Mosquito Net Solutions
            </p>

            <h1 className="text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] mb-8">
              Premium Mosquito Nets
              <br />
              For Modern Homes
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl">
              Custom mosquito net solutions for windows,
              balconies and doors with elegant modern designs,
              smooth sliding systems and professional installation
              across Chennai.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f26522] px-8 py-4 rounded-2xl text-white hover:scale-105 transition duration-500 shadow-[0_15px_40px_rgba(242,101,34,0.3)]"
              >
                Get Instant Quote
              </a>

              <a
                href="/contact"
                className="border border-white/10 bg-white/5 px-8 py-4 rounded-2xl hover:bg-white/10 transition duration-500"
              >
                Book Free Measurement
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* NET TYPES */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Mosquito Net Types
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-[-0.04em] mb-8">
              Elegant Protection
              For Every Space
            </h2>

            <p className="text-white/60 text-lg leading-relaxed">
              Explore premium mosquito net systems designed
              for modern apartments, villas and commercial interiors.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {mosquitoNets.map((item) => (

              <div
                key={item.name}
                className="bg-white/5 border border-white/10 rounded-[36px] overflow-hidden hover:-translate-y-2 transition duration-700"
              >

                <div className="relative aspect-[4/3] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="p-8">

                  <p className="text-[#f26522] uppercase tracking-[3px] text-sm mb-4">
                    Starting From
                  </p>

                  <h3 className="text-3xl font-semibold leading-tight mb-4">
                    {item.name}
                  </h3>

                  <p className="text-white/50 text-lg mb-6">
                    {item.price}
                  </p>

                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Fresh Air Without Mosquitoes",
              "Elegant Invisible Design",
              "Smooth Sliding Systems",
              "Custom Fit Installation",
              "Durable Aluminium Frames",
              "Child & Pet Friendly",
            ].map((item) => (

              <div
                key={item}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-[32px] p-8"
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

      </section>

      {/* SEO CONTENT */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Mosquito Nets Installation Chennai
            </p>

            <h2 className="text-4xl md:text-5xl leading-tight font-semibold tracking-[-0.04em] mb-8">
              Premium Mosquito Net
              Solutions Across Chennai
            </h2>

            <div className="space-y-6 text-white/60 text-lg leading-relaxed">

              <p>
                Classic Delight provides premium mosquito nets
                in Chennai including sliding mosquito nets,
                pleated mosquito nets, openable window mosquito
                screens and barrier free mosquito net systems.
              </p>

              <p>
                We offer customized mosquito net installation
                services across Virugambakkam, Anna Nagar,
                Vadapalani, KK Nagar, Porur and all major
                residential areas in Chennai.
              </p>

              <p>
                Our modern mosquito net systems are designed
                to maintain airflow and ventilation while
                protecting homes from mosquitoes and insects
                with elegant minimal designs.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-[40px] p-10 md:p-16">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Book Free Consultation
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-8">
              Upgrade Your Home
              With Premium Mosquito Nets
            </h2>

            <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Get custom mosquito net solutions designed
              for modern interiors with professional installation
              anywhere in Chennai.
            </p>

            <div className="flex flex-wrap justify-center gap-5">

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f26522] px-8 py-4 rounded-2xl text-white hover:scale-105 transition duration-500 shadow-[0_15px_40px_rgba(242,101,34,0.3)]"
              >
                WhatsApp Us
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="border border-white/10 bg-white/5 px-8 py-4 rounded-2xl hover:bg-white/10 transition duration-500"
              >
                Call Now
              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />
      <FloatingCTA />

    </main>
  );
}