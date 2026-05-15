import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import {
  Check,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title:
    "Premium Custom Curtains in Chennai | Classic Delight",

  description:
    "Luxury custom curtains in Chennai. We provide blackout, sheer, linen & motorized curtains with free installation in Virugambakkam, Koyembedu, Anna Nagar & Adyar.",
};

const curtainTypes = [
  "Blackout Curtains",
  "Sheer Curtains",
  "Linen Curtains",
  "Motorized Curtains",
  "Bedroom Curtains",
  "Living Room Curtains",
];

const areas = [
  "Anna Nagar",
  "Adyar",
  "Velachery",
  "OMR",
  "ECR",
  "Tambaram",
  "Porur",
  "T Nagar",
  "Koyembedu",
  "Sholinganallur",
  "Nungambakkam",
  "Medavakkam",
  "Perungudi",
];

export default function ChennaiCurtainsPage() {
  return (
    <main className="bg-[#f8f6f2] overflow-hidden">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">

        <Image
          src="/images/chennai-curtains/hero.png"
          alt="Premium custom curtains installed for Chennai homes"
          title="Premium custom curtains Chennai"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full mb-8 text-white text-sm">

              <MapPin className="w-4 h-4" />

              Premium Curtain Installation Across Chennai

            </div>

            <h1 className="text-white text-6xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Premium Custom
              <br />
              Curtains in
              <br />
              Chennai
            </h1>

            <p className="text-white/70 text-xl leading-relaxed mt-8 max-w-2xl">
              Elegant blackout, sheer, linen & motorized curtains
              crafted beautifully for luxury homes, apartments,
              villas & offices in Chennai.
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

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
                Luxury Curtains Chennai
              </p>

              <h2 className="text-5xl font-semibold leading-tight mb-8">
                Elegant Curtain
                <br />
                Solutions For
                <br />
                Chennai Homes
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                At Classic Delight, we specialize in premium custom
                curtains in Chennai tailored beautifully for modern
                apartments, villas, offices, and luxury interiors.
              </p>

              <div className="space-y-6">

                {[
                  "Free Home Measurement",
                  "Custom Stitching & Finishing",
                  "Premium Fabric Collections",
                  "Professional Installation",
                  "Motorized Curtain Solutions",
                ].map((item, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >

                    <div className="w-10 h-10 rounded-full bg-[#f26522]/10 flex items-center justify-center">

                      <Check className="w-5 h-5 text-[#f26522]" />

                    </div>

                    <p className="text-lg font-medium">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            <div className="relative h-[700px] rounded-[36px] overflow-hidden shadow-2xl">

              <Image
                src="/images/chennai-curtains/interior.jpg"
                alt="Luxury curtains with professional installation in Chennai"
                title="Luxury curtains installation Chennai"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* CURTAIN TYPES */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
              Curtain Collections
            </p>

            <h2 className="text-5xl font-semibold leading-tight">
              Curtain Styles
              <br />
              We Offer in Chennai
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {curtainTypes.map((item, i) => (

              <div
                key={i}
                className="bg-white rounded-[32px] p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-500"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-2xl mb-6">
                  ✨
                </div>

                <h3 className="text-3xl font-semibold mb-4">
                  {item}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  Premium quality {item.toLowerCase()} designed beautifully
                  for Chennai interiors.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* AREAS */}
      <section className="py-28 bg-black relative overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
            Areas We Serve
          </p>

          <h2 className="text-white text-5xl font-semibold leading-tight mb-16">
            Curtain Installation
            <br />
            Across Chennai
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {areas.map((area, i) => (

              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl py-5 text-white/80 backdrop-blur-xl"
              >
                {area}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
              FAQs
            </p>

            <h2 className="text-5xl font-semibold leading-tight">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-6">

            {[
              {
                q: "Do you provide curtain installation in Chennai?",
                a: "Yes, we provide professional curtain installation services across Chennai.",
              },
              {
                q: "Do you offer blackout curtains in Chennai?",
                a: "Yes, we offer blackout curtains, sheer curtains, linen curtains and motorized curtains.",
              },
              {
                q: "Do you provide home consultation?",
                a: "Yes, we provide free home consultation and measurement services in Chennai.",
              },
              {
                q: "Which Chennai areas do you serve?",
                a: "We serve Anna Nagar, Adyar, OMR, Velachery, Tambaram, ECR and all major Chennai locations.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#faf7f2] rounded-[28px] p-8"
              >

                <h3 className="text-2xl font-semibold mb-4">
                  {item.q}
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed">
                  {item.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-28 bg-[#f26522] text-center text-white">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
            Looking For Premium
            <br />
            Curtains in Chennai?
          </h2>

          <p className="text-white/80 text-xl mt-8 leading-relaxed">
            Contact Classic Delight today for elegant custom curtain
            solutions with professional installation across Chennai.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition duration-500"
            >
              WhatsApp Us
            </a>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="border border-white/30 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition duration-500"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
