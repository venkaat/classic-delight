"use client";

import Image from "next/image";
import { Search, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/curtains", label: "Curtains" },
  { href: "/blinds", label: "Blinds" },
  { href: "/nets", label: "nets" },
  { href: "/#ai-guide", label: "AI Guide" },
  { href: "/gallery", label: "Gallery" },
  
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 shadow-sm">

      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-[#f26522] to-orange-500 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <p className="hidden md:block">
            Free Installation in Chennai and surrounding Area | Custom Sizes Available
          </p>
          <p className="font-medium">📞 +91 98405 19955, +91 99406 99797</p>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="Classic Delight"
            title="Classic Delight curtains and blinds Chennai"
            width={160}
            height={72}
            priority
            className="object-contain w-[130px] md:w-[200px] h-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative group hover:text-[#f26522] transition"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f26522] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 md:gap-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#f26522] transition hidden sm:block" />
          <User className="w-5 h-5 cursor-pointer hover:text-[#f26522] transition hidden sm:block" />

          {/* WhatsApp CTA — hidden on very small screens */}
          <a
            href="https://wa.me/919840519955"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-gradient-to-r from-[#f26522] to-orange-500 text-white text-sm px-4 md:px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            WhatsApp
          </a>

          {/* HAMBURGER — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1 rounded-md text-gray-700 hover:text-[#f26522] transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0 hover:text-[#f26522] transition"
              >
                {label}
              </Link>
            ))}

            {/* Mobile-only CTA + icons row */}
            <div className="flex items-center gap-4 pt-4 pb-1">
              <Search className="w-5 h-5 cursor-pointer hover:text-[#f26522] transition" />
              <User className="w-5 h-5 cursor-pointer hover:text-[#f26522] transition" />
              <a
                href="https://wa.me/919840519955"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto bg-gradient-to-r from-[#f26522] to-orange-500 text-white text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}

    </header>
  );
}
