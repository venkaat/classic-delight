import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Classic Delight",
  description:
    "Learn more about Classic Delight — premium curtains, blinds and mosquito net solutions in Chennai.",
  openGraph: {
    title: "About Us | Classic Delight",
    description:
      "Learn more about Classic Delight — premium curtains, blinds and mosquito net solutions in Chennai.",
    url: "https://classicdelight.in/about",
    siteName: "Classic Delight",
    images: [
      {
        url: "/images/about/about.jpg",
        width: 1200,
        height: 630,
        alt: "About Classic Delight Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Classic Delight",
    description: "Premium window solutions in Chennai.",
    images: ["/images/about/Curtains-004.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Header />

      {/* HERO */}
      <section className="relative py-32 overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
            About Classic Delight
          </p>

          <h1 className="text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] max-w-4xl mb-10">
            Elegant Window
            Solutions Crafted
            For Modern Homes
          </h1>

          <p className="text-white/70 text-xl leading-relaxed max-w-3xl">
            At Classic Delight, we specialize in premium curtains,
            blinds and mosquito net solutions designed to elevate
            interiors with sophistication, comfort and functionality.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-[40px]">

            <Image
              src="/images/about/about.jpg"
              alt="Classic Delight"
              width={800}
              height={650}
              className="w-full h-[650px] object-cover"
            />

          </div>

          {/* TEXT */}
          <div>

            <h2 className="text-4xl md:text-5xl font-semibold mb-8">
              Bringing Luxury &
              Comfort Together
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We help homeowners transform their spaces through
              thoughtfully designed window solutions tailored to
              modern lifestyles and premium interiors.
            </p>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              From elegant sheer curtains to sophisticated blinds
              and seamless mosquito protection systems, every
              installation is handled with precision and care.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">

              <div>
                <h3 className="text-4xl font-semibold text-[#f26522] mb-3">
                  1000+
                </h3>

                <p className="text-white/60">
                  Homes Styled
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-semibold text-[#f26522] mb-3">
                  Premium
                </h3>

                <p className="text-white/60">
                  Fabric Collections
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}