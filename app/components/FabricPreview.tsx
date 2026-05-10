"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const fabrics = [
  {
    name: "Linen",
    image: "/images/fabrics/linen-room.jpg",
    description:
      "Soft textured elegance perfect for bright modern interiors.",
    price: "₹250 / sq ft",
  },

  {
    name: "Blackout",
    image: "/images/fabrics/blackout-room.jpg",
    description:
      "Premium light-blocking curtains crafted for luxury comfort.",
    price: "₹320 / sq ft",
  },

  {
    name: "Velvet",
    image: "/images/fabrics/velvet-room.jpg",
    description:
      "Rich dramatic textures with luxurious premium finishing.",
    price: "₹420 / sq ft",
  },

  {
    name: "Sheer",
    image: "/images/fabrics/sheer-room.jpg",
    description:
      "Elegant translucent layers that brighten your interiors beautifully.",
    price: "₹180 / sq ft",
  },
];

export default function FabricPreview() {
  const [active, setActive] = useState(fabrics[0]);

  return (
    <section className="relative py-28 overflow-hidden bg-white">

      {/* GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
            Live Fabric Preview
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Visualize Your
            <br />
            Perfect Curtains
          </h2>

          <p className="text-gray-500 text-lg mt-8 max-w-3xl mx-auto leading-relaxed">
            Explore luxurious fabrics and instantly preview how
            different curtain styles transform your interiors.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT PREVIEW */}
          <motion.div
            key={active.image}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[700px] rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.12)]"
          >

            <Image
              src={active.image}
              alt={`${active.name} curtain fabric preview for modern interiors`}
              title={`${active.name} curtain fabric preview`}
              fill
              className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* INFO */}
            <div className="absolute bottom-0 left-0 p-10 text-white">

              <div className="inline-flex bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-sm mb-6">
                {active.price}
              </div>

              <h3 className="text-5xl font-semibold mb-5">
                {active.name}
              </h3>

              <p className="text-white/75 text-lg leading-relaxed max-w-lg">
                {active.description}
              </p>

            </div>

          </motion.div>

          {/* RIGHT OPTIONS */}
          <div className="space-y-6">

            {fabrics.map((fabric, i) => (

              <motion.button
                key={i}
                whileHover={{ x: 10 }}
                onClick={() => setActive(fabric)}
                className={`w-full text-left p-8 rounded-[30px] transition duration-500 border ${
                  active.name === fabric.name
                    ? "bg-[#f26522] text-white border-[#f26522] shadow-[0_20px_60px_rgba(242,101,34,0.25)]"
                    : "bg-[#faf7f2] hover:bg-white border-gray-100 hover:shadow-xl"
                }`}
              >

                <div className="flex items-center justify-between gap-6">

                  <div>

                    <div className="flex items-center gap-4 mb-4">

                      <div
                        className={`w-4 h-4 rounded-full ${
                          active.name === fabric.name
                            ? "bg-white"
                            : "bg-[#f26522]"
                        }`}
                      />

                      <h3 className="text-3xl font-semibold">
                        {fabric.name}
                      </h3>

                    </div>

                    <p
                      className={`leading-relaxed text-lg ${
                        active.name === fabric.name
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      {fabric.description}
                    </p>

                  </div>

                  <div
                    className={`text-lg font-medium ${
                      active.name === fabric.name
                        ? "text-white"
                        : "text-[#f26522]"
                    }`}
                  >
                    {fabric.price}
                  </div>

                </div>

              </motion.button>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
