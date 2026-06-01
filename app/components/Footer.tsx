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

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 mb-10">
              <a
                href="https://www.facebook.com/profile.php?id=61590602934553"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#f26522] border border-white/10 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://in.pinterest.com/sampathsivam3422/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#f26522] border border-white/10 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Follow us on Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.41 7.61 11.162-.102-.947-.19-2.4 0-3.434.174-.932 1.123-4.758 1.123-4.758s-.288-.573-.288-1.417c0-1.327.77-2.32 1.73-2.32.813 0 1.206.61 1.206 1.343 0 .817-.52 2.043-.788 3.18-.225.952.478 1.727 1.417 1.727 1.7 0 3.018-1.794 3.018-4.388 0-2.295-1.648-3.899-4.005-3.899-2.724 0-4.323 2.043-4.323 4.154 0 .822.317 1.7.713 2.181.078.096.09.18.066.276-.072.3-.234.954-.266 1.085-.042.174-.14.21-.32.128-1.18-.549-1.916-2.276-1.916-3.66 0-2.98 2.167-5.717 6.242-5.717 3.277 0 5.824 2.336 5.824 5.457 0 3.256-2.052 5.877-4.9 5.877-1.107 0-2.148-.575-2.504-1.258 0 0-.583 2.222-.724 2.766-.263 1.011-.974 2.278-1.453 3.056C9.9 23.955 10.957 24 12.017 24c6.621 0 11.986-5.368 11.986-11.987c0-6.62-5.365-11.987-11.986-11.987z"/>
                </svg>
              </a>
            </div>

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
                  Email Addresses
                </p>

                <div className="flex flex-col space-y-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-[#f26522] transition duration-300"
                  >
                    {siteConfig.email}
                  </a>
                  <a
                    href="mailto:sam@classicdelight.in"
                    className="hover:text-[#f26522] transition duration-300"
                  >
                    sam@classicdelight.in
                  </a>
                  <a
                    href="mailto:dinesh@classicdelight.in"
                    className="hover:text-[#f26522] transition duration-300"
                  >
                    dinesh@classicdelight.in
                  </a>
                </div>
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