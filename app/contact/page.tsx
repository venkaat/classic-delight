import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Classic Delight",
  description:
    "Contact Classic Delight for premium curtains, blinds and mosquito nets in Chennai.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Header />

      {/* HERO */}
      <section className="relative py-32 overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f26522]/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-7xl leading-[0.92] font-semibold tracking-[-0.04em] max-w-4xl mb-10">
            Let’s Transform
            Your Interiors
          </h1>

          <p className="text-white/70 text-xl leading-relaxed max-w-3xl">
            Reach out for premium curtain, blinds and mosquito
            net solutions tailored to your home.
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>

            <h2 className="text-4xl font-semibold mb-10">
              Get In Touch
            </h2>

            <div className="space-y-8 text-white/70 text-lg">

              <div>
                <p className="text-white font-medium mb-2">
                  Phone
                </p>

                <p>+91-9840519955</p>
              </div>

              <div>
                <p className="text-white font-medium mb-2">
                  Email
                </p>

                <p>hello@classicdelight.in</p>
              </div>

              <div>
                <p className="text-white font-medium mb-2">
                  Location
                </p>

                <p>16/49 Kattabomman Street, Gandhi Nagar, Virugambakkam, Chennai - 600092</p>
              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-10">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white"
              />

              <textarea
                placeholder="Tell us about your requirement"
                rows={5}
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white"
              />

              <button className="bg-[#f26522] text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-500">
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}