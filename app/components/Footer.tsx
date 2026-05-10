import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#2e2e2e] text-white mt-16">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Classic Delight
          </h2>

          <p className="text-sm text-gray-300">
            Premium curtains, blinds and insect nets tailored for your home.
            Custom sizes, expert installation, and quality materials.
          </p>
        </div>

        {/* QUICK LINKS */}
        {/* QUICK LINKS */}
<div>
  <h3 className="font-semibold mb-4 text-white">
    Quick Links
  </h3>

  <ul className="space-y-3 text-sm text-gray-300">

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
        href="/gallery"
        className="hover:text-[#f26522] transition duration-300"
      >
        Gallery
      </Link>
    </li>

  </ul>
</div>

{/* CATEGORIES */}
<div>
  <h3 className="font-semibold mb-4 text-white">
    Categories
  </h3>

  <ul className="space-y-3 text-sm text-gray-300">

    <li>
      <Link
        href="/curtains"
        className="hover:text-[#f26522] transition duration-300"
      >
        Premium Curtains
      </Link>
    </li>

    <li>
      <Link
        href="/blinds"
        className="hover:text-[#f26522] transition duration-300"
      >
        Window Blinds
      </Link>
    </li>

    <li>
      <Link
        href="/mosquito-nets"
        className="hover:text-[#f26522] transition duration-300"
      >
        Mosquito Nets
      </Link>
    </li>

    <li>
      <Link
        href="/chennai"
        className="hover:text-[#f26522] transition duration-300"
      >
        Curtains in Chennai
      </Link>
    </li>

  </ul>
</div>

        {/* CATEGORIES */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Curtains</li>
            <li className="hover:text-white cursor-pointer">Blinds</li>
            <li className="hover:text-white cursor-pointer">Insect Nets</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>📞 +91 9840519955</li>
            <li>📧 hello@classicdelight.in</li>
            <li>📍16/49 Kattabomman Street, Gandhi Nagar,Virugambakkam,chennai-600092</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center text-sm py-4 text-gray-400">
        © 2026 Classic Delight. All rights reserved.
      </div>

    </footer>
  );
}
