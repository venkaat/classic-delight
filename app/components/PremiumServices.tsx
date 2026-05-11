"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Luxury Curtains",
    eyebrow: "Premium Interiors",
    text: "Custom-tailored curtains crafted with premium fabrics and elegant detailing.",
    image: "/images/services/curtains.png",
    href: "/curtains",
    className: "lg:row-span-2 h-[620px] lg:h-auto",
  },
  {
    title: "Modern Blinds",
    eyebrow: "Refined Control",
    text: "Modern blinds combining privacy, functionality and refined aesthetics.",
    image: "/images/services/blinds.png",
    href: "/chennai/blinds",
    className: "h-[360px]",
  },
  {
    title: "Mosquito Nets",
    eyebrow: "Seamless Protection",
    text: "Discreet protection systems designed for comfort and seamless integration.",
    image: "/images/services/mosquito.png",
    href: "/chennai/mosquito-nets",
    className: "h-[360px]",
  },
];

export default function PremiumServices() {
  return (
    <section className="relative bg-[#090909] py-28 overflow-hidden">
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#f26522]/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-[420px] h-[420px] bg-white/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-[#f26522] uppercase tracking-[5px] text-sm mb-5">
            Our Services
          </p>
          <h2 className="text-white text-5xl md:text-6xl font-semibold leading-tight">
            Designed For Homes
            <br />
            That Feel Considered
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className={service.className}
            >
              <Link
                href={service.href}
                className="group relative block h-full overflow-hidden rounded-[32px] bg-black"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} by Classic Delight Chennai`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-white/10 rounded-[32px]" />

                <div className="absolute bottom-0 p-8 md:p-10">
                  <p className="text-[#f26522] uppercase tracking-[4px] text-sm mb-4">
                    {service.eyebrow}
                  </p>

                  <h3 className="text-white text-4xl font-semibold mb-5">
                    {service.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed max-w-md">
                    {service.text}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
