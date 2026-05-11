"use client";

import Image from "next/image";
import { Search, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 shadow-sm">

      {/* 🔝 TOP BAR */}
      <div className="bg-gradient-to-r from-[#f26522] to-orange-500 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p className="hidden md:block">
            Free Installation in Chennai and surrounding Area| Custom Sizes Available
          </p>
          <p className="font-medium">📞 +91 9840519955</p>
        </div>
      </div>

      {/* 🔽 MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
  src="/logo.png"
  alt="Classic Delight"
  title="Classic Delight curtains and blinds Chennai"
  width={180}
  height={70}
  priority
  className="object-contain"
/>
        </Link>

        {/* NAV */}
       <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">

  <Link
    href="/curtains"
    className="relative group hover:text-[#f26522] transition"
  >
    Curtains

    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f26522] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    href="/blinds"
    className="relative group hover:text-[#f26522] transition"
  >
    Blinds

    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f26522] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    href="/mosquito-nets"
    className="relative group hover:text-[#f26522] transition"
  >
    Nets

    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f26522] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    href="/custom-orders"
    className="relative group hover:text-[#f26522] transition"
  >
    Custom Orders

    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f26522] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    href="/contact"
    className="relative group hover:text-[#f26522] transition"
  >
    Contact

    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f26522] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  <Link
    href="/faq"
    className="relative group hover:text-[#f26522] transition"
  >
    FAQ

    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f26522] transition-all duration-300 group-hover:w-full"></span>
  </Link>

</nav>
        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* ICONS */}
          <Search className="w-5 h-5 cursor-pointer hover:text-[#f26522] transition" />
          <User className="w-5 h-5 cursor-pointer hover:text-[#f26522] transition" />

          {/* CTA BUTTON */}
          <a
            href="https://wa.me/919840519955"
            target="_blank"
            className="bg-gradient-to-r from-[#f26522] to-orange-500 text-white text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            WhatsApp
          </a>

        </div>

      </div>

    </header>
  );
}
