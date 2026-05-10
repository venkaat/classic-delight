import Image from "next/image";
import {
  Check,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

export const metadata = {
  title:
    "Mosquito Nets in Chennai | Invisible Window Mesh Solutions",

  description:
    "Premium mosquito nets in Chennai including invisible mesh, pleated mosquito nets & magnetic window mesh installation.",
};

const nets = [
  "Invisible Mosquito Nets",
  "Pleated Mesh Systems",
  "Sliding Mosquito Nets",
  "Magnetic Mesh",
  "Window Mosquito Nets",
  "Door Mesh Systems",
];

export default function ChennaiMosquitoPage() {
  return (
    <main className="bg-[#f8f6f2] overflow-hidden">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center">

        <Image
          src="/images/chennai-nets/hero.png"
          alt="Premium invisible mosquito nets for Chennai homes"
          title="Mosquito nets in Chennai"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-full mb-8 text-white text-sm">

              <MapPin className="w-4 h-4" />

              Mosquito Net Installation Across Chennai

            </div>

            <h1 className="text-white text-6xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Premium Mosquito
              <br />
              Nets in
              <br />
              Chennai
            </h1>

            <p className="text-white/70 text-xl leading-relaxed mt-8 max-w-2xl">
              Elegant invisible mosquito mesh solutions crafted
              beautifully for modern homes, apartments & villas in Chennai.
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
                Mosquito Nets Chennai
              </p>

              <h2 className="text-5xl font-semibold leading-tight mb-8">
                Elegant Protection
                <br />
                For Modern
                <br />
                Homes
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Keep mosquitoes away while maintaining airflow,
                visibility & aesthetics with premium mesh systems.
              </p>

              <div className="space-y-6">

                {[
                  "Invisible Mesh Systems",
                  "Elegant Window Protection",
                  "Premium Sliding Nets",
                  "Custom Installation",
                  "Durable Long Lasting Materials",
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
                src="/images/chennai-nets/interior.jpg"
                alt="Invisible mosquito net installed on a Chennai home window"
                title="Invisible mosquito net installation Chennai"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* TYPES */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-5">
              Mesh Systems
            </p>

            <h2 className="text-5xl font-semibold leading-tight">
              Mosquito Net
              <br />
              Solutions in Chennai
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {nets.map((item, i) => (

              <div
                key={i}
                className="bg-white rounded-[32px] p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-500"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#f26522]/10 flex items-center justify-center text-2xl mb-6">
                  🦟
                </div>

                <h3 className="text-3xl font-semibold mb-4">
                  {item}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  Premium {item.toLowerCase()} designed beautifully
                  for modern Chennai homes.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
