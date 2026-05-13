"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Which curtains are best for modern homes in Chennai?",
    answer:
      "Sheer curtains, blackout curtains and linen curtains are among the most popular choices for modern homes in Chennai. They provide elegance, privacy and effective light control while complementing contemporary interiors.",
  },
  {
    question: "Do you provide curtain and blinds installation across Chennai?",
    answer:
      "Yes. Classic Delight provides professional custom curtain, blinds and mosquito net installation services across Virugambakkam, Koyembedu, Anna Nagar, Vadapalani, KK Nagar, Porur, T Nagar and all major areas in Chennai.",
  },
  {
    question: "Can curtains and blinds be customized for my windows?",
    answer:
      "Absolutely. We offer fully customized curtains and blinds tailored to your window dimensions, fabric preferences, colors and interior style requirements.",
  },
  {
    question: "What types of blinds do you offer?",
    answer:
      "We offer zebra blinds, roller blinds, wooden blinds, vertical blinds and premium window blinds designed for homes, apartments and office interiors.",
  },
  {
    question: "Do mosquito nets affect airflow or room ventilation?",
    answer:
      "No. Our customized mosquito nets are designed to maintain proper airflow and ventilation while protecting your home from insects and mosquitoes.",
  },
  {
    question: "How long does curtain installation usually take?",
    answer:
      "Most custom curtain and blinds installations are completed within a few hours. We offer free professional installation across Chennai to ensure a perfect fit.",
  },
  {
    question: "Do you help customers choose curtain fabrics and colors?",
    answer:
      "Yes. Our team provides design consultation and helps customers select suitable fabrics, textures, colors and styles that match their interiors perfectly.",
  },
  {
    question: "Are blackout curtains suitable for bedrooms?",
    answer:
      "Yes. Blackout curtains are ideal for bedrooms because they reduce sunlight, improve privacy and help maintain a comfortable indoor atmosphere.",
  },
  {
  question: "Do you provide curtain track installation in Chennai?",
  answer:
    "Yes. Classic Delight provides professional curtain track installation services across Chennai for homes, apartments, offices and commercial interiors. We install premium curtain tracks with smooth sliding systems and clean finishing.",
},

{
  question: "What curtain fabrics do you offer?",
  answer:
    "We offer premium curtain fabrics including linen, cotton, blackout fabric, polyester, silk, sheer fabric, poly cotton and custom printed curtain fabrics tailored for modern interiors.",
},

{
  question: "Do you have experienced curtain makers for custom curtains?",
  answer:
    "Yes. Our experienced curtain makers create customized curtains tailored to your exact window size, fabric preferences and interior style requirements.",
},

{
  question: "Do you provide professional curtain installation services?",
  answer:
    "Yes. We provide complete curtain installation services including curtain rod fitting, track installation, measurements and finishing across all major areas in Chennai.",
},

{
  question: "What is the difference between curtains and drapes?",
  answer:
    "Curtains are generally lighter window coverings used for decoration and light filtering, while drapes are thicker and often lined for better privacy, insulation and blackout performance.",
},

{
  question: "Do you offer curtain rail installation?",
  answer:
    "Yes. We install curtain rails, curtain rods and premium M-track systems for smooth curtain movement and modern interior styling.",
},

{
  question: "Can you install curtain wall brackets?",
  answer:
    "Absolutely. We provide secure curtain wall bracket installation for all types of curtain rods, rails and track systems to ensure proper support and durability.",
},

{
  question: "Do you offer custom roller shades and blinds?",
  answer:
    "Yes. We provide custom roller shades, roller blinds, zebra blinds and modern window blind solutions tailored for residential and commercial interiors.",
},

{
  question: "Do you provide curtain wire installation services?",
  answer:
    "Yes. We offer curtain wire installation solutions for lightweight curtains, sheer fabrics and compact modern window styling requirements.",
},
];

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#f26522] text-sm font-semibold mb-4">
            FAQs
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#111]">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Find answers about custom curtains, blinds, zebra blinds,
            mosquito nets, installation services and premium window
            solutions offered by Classic Delight across Chennai.
          </p>

        </div>

        {/* FAQ ITEMS */}
        <div className="space-y-6">

          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#faf8f5] border border-[#f1ede7] rounded-3xl p-8 hover:shadow-lg transition duration-300"
            >

              <h3 className="text-2xl font-semibold text-[#111] mb-4 leading-snug">
                {faq.question}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                {faq.answer}
              </p>

            </div>
          ))}

        </div>

        {/* LOAD MORE */}
        {!showAll && (
          <div className="text-center mt-12">

            <button
              onClick={() => setShowAll(true)}
              className="bg-[#f26522] hover:bg-[#df5a1d] text-white px-8 py-4 rounded-full font-medium shadow-lg transition duration-300 hover:scale-105"
            >
              Load More Questions
            </button>

          </div>
        )}

      </div>
    </section>
  );
}