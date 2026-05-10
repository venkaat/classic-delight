"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/app/lib/siteConfig";
import {
  ArrowRight,
  Check,
  Phone,
  MessageCircle,
} from "lucide-react";
import QuoteCalculator from "@/app/components/QuoteCalculator";
import FabricPreview from "@/app/components/FabricPreview";
import BeforeAfter from "@/app/components/BeforeAfter";
import Header from "@/app/components/Header";
import RoomVisualizer from "@/app/components/RoomVisualizer";
 
const curtainTypes = [
  {
    title: "Sheer Curtains",
    image: "/images/curtains/sheer.png",
    alt: "Sheer curtains for bright modern Chennai interiors",
  },
  {
    title: "Blackout Curtains",
    image: "/images/curtains/blackout.png",
    alt: "Blackout curtains for bedroom privacy and light control",
  },
  {
    title: "Linen Curtains",
    image: "/images/curtains/linen.png",
    alt: "Linen curtains with soft premium texture for living rooms",
  },
  {
    title: "Motorized Curtains",
    image: "/images/curtains/motorized.png",
    alt: "Motorized curtains for smart modern homes in Chennai",
  },
];

const gallery = [
  "/images/gallery/curtains_1.jpg",
  "/images/gallery/curtains_2.jpg",
  "/images/gallery/curtains_3.jpg",
  "/images/gallery/curtains_4.jpg",
];


export default function CurtainsPage() {
  return (
    <main className="bg-[#f8f6f2] overflow-hidden">
<Header />
      {/* HERO */}
      <section className="relative h-[95vh] flex items-center">

        <Image
          src="/images/curtains/hero.png"
          alt="Luxury custom curtains for modern Chennai interiors"
          title="Luxury custom curtains in Chennai"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full mb-8">

              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-white text-sm tracking-wide">
                Premium Curtains Collection
              </span>

            </div>

            <h1 className="text-white text-6xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Elegant Curtains
              <br />
              Designed For
              <br />
              Modern Interiors
            </h1>

            <p className="text-white/70 text-xl leading-relaxed mt-8 max-w-2xl">
              Transform your spaces with luxurious fabrics,
              custom stitching, and flawless installation tailored
              beautifully for your home.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="https://wa.me/919840519955"
                target="_blank"
                className="inline-flex items-center gap-3 bg-[#f26522] hover:bg-[#ff7b3d] text-white px-8 py-4 rounded-full text-lg font-medium transition duration-500 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Get Free Quote
              </a>

              <a
                href="tel:+919840519955"
                className="inline-flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition duration-500"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

            </div>

          </motion.div>

        </div>

      </section>
      <QuoteCalculator />
      <FabricPreview />

      {/* CURTAIN TYPES */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-4">
              Collections
            </p>

            <h2 className="text-5xl font-semibold leading-tight">
              Curtain Styles
              <br />
              Crafted Beautifully
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {curtainTypes.map((item, i) => (

              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group"
              >

                <div className="relative overflow-hidden rounded-[32px] h-[520px] shadow-xl">

                  <Image
                    src={item.image}
                    alt={item.alt}
                    title={`${item.title} by Classic Delight`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8">

                    <h3 className="text-white text-3xl font-semibold mb-4">
                      {item.title}
                    </h3>

                    <button className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">

                      Explore

                      <ArrowRight className="w-4 h-4" />

                    </button>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
<RoomVisualizer />
      {/* FEATURES */}
      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <div className="relative h-[700px] rounded-[36px] overflow-hidden shadow-2xl">

              <Image
                src="/images/curtains/luxury-room.png"
                alt="Luxury interior with premium full length curtains"
                title="Premium curtain styling for luxury interiors"
                fill
                className="object-cover"
              />

            </div>

            {/* CONTENT */}
            <div>

              <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
                Why Choose Us
              </p>

              <h2 className="text-5xl font-semibold leading-tight mb-8">
                Crafted With
                <br />
                Premium Finishing
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                We combine luxurious fabrics, modern aesthetics,
                and precision craftsmanship to create elegant
                curtain solutions for every space.
              </p>

              <div className="space-y-6">

                {[
                  "Premium Fabric Collections",
                  "Custom Stitching & Measurements",
                  "Professional Installation",
                  "Luxury Finishing & Styling",
                ].map((item, i) => (

                  <div
                    key={i}
                    className="flex items-start gap-4"
                  >

                    <div className="w-10 h-10 rounded-full bg-[#f26522]/10 flex items-center justify-center mt-1">

                      <Check className="w-5 h-5 text-[#f26522]" />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold">
                        {item}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        Elegant solutions tailored beautifully for modern interiors.
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-4">
              Recent Projects
            </p>

            <h2 className="text-5xl font-semibold">
              Elegant Spaces
              <br />
              We Transformed
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {gallery.map((img, i) => (

              <div
                key={i}
                className="relative h-[500px] overflow-hidden rounded-[32px] group"
              >

                <Image
                  src={img}
                  alt={`Classic Delight curtain installation project ${i + 1} in Chennai`}
                  title={`Curtain installation project ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              </div>

            ))}

          </div>

        </div>

      </section>
      <BeforeAfter />

      {/* CTA */}
      <section className="py-28 bg-black relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
            Get Started
          </p>

          <h2 className="text-white text-6xl leading-[1.05] font-semibold">
            Transform Your
            <br />
            Interiors Today
          </h2>

          <p className="text-white/70 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
            Contact us today for premium curtains,
            custom consultation, and elegant installation services.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#f26522] hover:bg-[#ff7b3d] text-white px-8 py-4 rounded-full text-lg font-medium transition duration-500 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition duration-500"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
