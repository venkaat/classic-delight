import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">

      {/* GLOW */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#f26522]/10 blur-[140px] rounded-full" />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-5 gap-16">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <p className="uppercase tracking-[5px] text-[#f26522] text-sm font-semibold mb-6">
              Classic Delight
            </p>

            <h2 className="text-4xl md:text-5xl leading-[1] font-semibold tracking-[-0.04em] mb-8">
              Premium Window
              Solutions For
              Modern Homes
            </h2>

            <p className="text-white/60 leading-relaxed text-lg max-w-xl mb-10">
              Classic Delight specializes in custom curtains, premium blinds and 
              mosquito net solutions with free installation across Virugambakkam, 
              Koyembedu, and all of Chennai.
            </p>

            {/* CONTACT CTA */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#f26522] px-8 py-4 rounded-2xl text-white hover:scale-105 transition duration-500 shadow-[0_15px_40px_rgba(242,101,34,0.3)]"
            >
              Get Free Consultation
            </a>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5 text-white/60">

              <li>
                <Link
                  href="/"
                  className="hover:text-[#f26522] transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-[#f26522] transition duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#f26522] transition duration-300"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/curtain-visualizer"
                  className="hover:text-[#f26522] transition duration-300"
                >
                  Curtain Visualizer
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#f26522] transition duration-300"
                >
                  Gallery
                </Link>
              </li>

            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-8">
              Our Services
            </h3>

            <ul className="space-y-5 text-white/60">

              <li>
                <Link
                  href="/curtains"
                  className="hover:text-[#f26522] transition duration-300"
                >
                  Luxury Curtains Chennai
                </Link>
              </li>

              <li>
                <Link
                  href="/blinds"
                  className="hover:text-[#f26522] transition duration-300"
                >
                  Premium Blinds Chennai
                </Link>
              </li>

              <li>
                <Link
                  href="/nets"
                  className="hover:text-[#f26522] transition duration-300"
                >
                  Mosquito Nets Chennai
                </Link>
              </li>

              <li>
                <Link
                  href="/blinds"
                  className="hover:text-[#f26522] transition duration-300"
                >
                  Zebra Blinds Chennai
                </Link>
              </li>

              <li>
                <Link
                  href="/blinds"
                  className="hover:text-[#f26522] transition duration-300"
                >
                  Wooden Blinds Chennai
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-8">
              Contact Info
            </h3>

            <div className="space-y-6 text-white/60">

              <div>
                <p className="text-white mb-2 font-medium">
                  Phone
                </p>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-[#f26522] transition duration-300"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div>
                <p className="text-white mb-2 font-medium">
                  Email
                </p>

                <a
                  href="mailto:hello@classicdelight.in"
                  className="hover:text-[#f26522] transition duration-300"
                >
                  sam@classicdelight.in
                </a>
              </div>

              <div>
                <p className="text-white mb-2 font-medium">
                  Location
                </p>

                <p className="leading-relaxed">
                  16/49 Kattabomman Street,
                  Gandhi Nagar,
                  Virugambakkam,
                  Chennai - 600092
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">

          <p>
            © 2026 Classic Delight. All rights reserved.
          </p>

          <p>
            Premium Curtains, Blinds & Mosquito Nets in Chennai
          </p>

        </div>

      </div>

    </footer>
  );
}