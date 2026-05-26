

import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import Link from "next/link";
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

export const metadata: Metadata = {
  title:
    "Premium Blinds in Chennai | Zebra, Roller & Wooden Blinds | Classic Delight",

  description:
    "Premium blinds in Chennai including zebra blinds, roller blinds, wooden blinds and custom window blinds for modern homes and offices.",

  keywords: [
    "Blinds Chennai",
    "Zebra Blinds Chennai",
    "Roller Blinds Chennai",
    "Wooden Blinds Chennai",
    "Roman Blinds Chennai",
    "PVC Blinds Chennai",
    "Window Blinds Chennai",
    "Custom Blinds Chennai",
  ],
};

const blinds = [
  [
    "Roman Blinds",
    "₹350 / sqft",
    "/images/blinds/roman.jpg",
  ],

  [
    "Roller Blinds",
    "₹200 / sqft",
    "/images/blinds/roller.jpg",
  ],

  [
    "Zebra Blinds",
    "₹220 / sqft",
    "/images/blinds/zebra.jpg",
  ],

  [
    "Wooden Blinds",
    "₹300 / sqft",
    "/images/blinds/wooden.jpg",
  ],

  [
    "PVC Blinds",
    "₹140 / sqft",
    "/images/blinds/pvc.jpg",
  ],

  [
    "Custom Printed Blinds",
    "₹240 / sqft",
    "/images/blinds/custom.jpg",
  ],
];

const spaces = [
  ["Living Rooms", "Zebra Blinds"],
  ["Bedrooms", "Blackout Roller Blinds"],
  ["Offices", "Roller Blinds"],
  ["Luxury Interiors", "Wooden Blinds"],
  ["Commercial Spaces", "PVC Blinds"],
  ["Modern Homes", "Roman Blinds"],
];

const faqs = [
  {
    q: "What are zebra blinds?",
    a: "Zebra blinds feature dual-layer fabric with alternating sheer and opaque stripes that allow flexible light control and modern aesthetics.",
  },

  {
    q: "Which blinds are best for offices?",
    a: "Roller blinds are highly preferred for offices because of their clean appearance, functionality and smooth light control.",
  },

  {
    q: "Are blinds better than curtains?",
    a: "Blinds are ideal for modern minimal interiors and precise light control while curtains provide a softer luxury appearance. Many homes combine both.",
  },

  {
    q: "Which blinds are best for modern homes?",
    a: "Zebra blinds and wooden blinds are among the most popular options for contemporary interiors.",
  },
];

export default function BlindsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blindschema) }}
      />

      <Header />

      {/* HERO */}
      <div className="relative py-32 border-b border-white/10 overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Premium Blinds Chennai
            </p>

            <h1 className="text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] mb-8">
              Modern Window
              Blinds For
              Elegant Interiors
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
              Discover zebra blinds, roller blinds, wooden blinds
              and premium custom window blinds tailored for
              contemporary homes and office interiors.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
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

          <div className="relative overflow-hidden rounded-[40px] border border-white/10">

            <img
              src="/images/blinds/zebra.jpg"
              alt="Premium zebra blinds installed in Chennai"
              className="w-full h-[650px] object-cover"
            />

          </div>

        </div>

      </div>

      {/* BLINDS GRID */}
      <div className="py-28 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Blind Types
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em] mb-6">
              Premium Window
              Blind Collection
            </h2>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

            {blinds.map(([name, price, image]) => (

              <div
                key={name}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10 rounded-[32px] overflow-hidden hover:border-[#f26522]/30 transition duration-500"
              >

                <div className="overflow-hidden">

                  <img
                    src={image}
                    alt={name}
                    className="w-full h-56 object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl md:text-3xl font-semibold mb-4">
                    {name}
                  </h3>

                  <p className="text-white/60 mb-2">
                    Starting from
                  </p>

                  <p className="text-[#f26522] text-xl md:text-2xl">
                    {price}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* BEST FOR */}
      <div className="py-28 border-b border-white/10">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Buying Guide
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em]">
              Best Blinds
              For Every Space
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {spaces.map(([room, type]) => (

              <div
                key={room}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 flex items-center justify-between"
              >

                <div>

                  <p className="text-white/50 mb-3">
                    Recommended For
                  </p>

                  <h3 className="text-2xl font-semibold">
                    {room}
                  </h3>

                </div>

                <div className="text-right">

                  <p className="text-white/50 mb-3">
                    Best Choice
                  </p>

                  <h4 className="text-[#f26522] text-xl">
                    {type}
                  </h4>

                </div>

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
              Blinds FAQ
            </p>

            <h2 className="text-4xl md:text-6xl leading-tight font-semibold tracking-[-0.04em]">
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
            Premium Blinds
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Get personalized blinds recommendations and modern
            window solutions tailored for your interiors.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
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