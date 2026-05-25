"use client";

import Image from "next/image";
import { Search, Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { href: "/curtains", label: "Curtains" },
  { href: "/blinds", label: "Blinds" },
  { href: "/nets", label: "Nets" },
  { href: "/#ai-guide", label: "AI Guide" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        {/* TOP BAR */}
        <div className="bg-gradient-to-r from-[#f26522] to-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
            {/* Promo — hidden on very small screens */}
            <p className="hidden sm:block text-xs">
              🎉 30% Off Today's Callers · Free Installation Across Chennai
            </p>
            {/* Phone numbers — always visible */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-xs font-semibold tracking-wide flex items-center gap-1.5 hover:underline ml-auto sm:ml-0"
            >
              <Phone className="w-3 h-3" />
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* MAIN HEADER */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link href="/" className="flex-shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Classic Delight"
              title="Classic Delight curtains and blinds Chennai"
              width={160}
              height={72}
              priority
              className="object-contain w-[120px] md:w-[160px] h-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative group hover:text-[#f26522] transition-colors"
              >
                {label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#f26522] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">

            {/* Search — desktop only */}
            <button
              aria-label="Search"
              className="hidden md:flex w-8 h-8 items-center justify-center rounded-full hover:bg-gray-100 transition"
            >
              <Search className="w-4 h-4 text-gray-600" />
            </button>

            {/* WhatsApp CTA — desktop */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#f26522] to-orange-500 text-white text-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            {/* MOBILE — Call button (icon only) */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              aria-label="Call us"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[#f26522] text-white shadow-md active:scale-95 transition"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* MOBILE — WhatsApp button (icon only) */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp us"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-green-500 text-white shadow-md active:scale-95 transition"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 transition text-gray-700"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.span>
              </AnimatePresence>
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 h-full w-[80vw] max-w-[320px] bg-white shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="Classic Delight"
                    width={120}
                    height={54}
                    className="object-contain w-[100px] h-auto"
                  />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-3">
                {navLinks.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 text-base font-medium text-gray-800 border-b border-gray-100 last:border-0 hover:text-[#f26522] transition-colors"
                    >
                      {label}
                      <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer CTAs */}
              <div className="px-4 py-5 border-t border-gray-100 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-[#f26522] text-[#f26522] font-semibold text-sm hover:bg-[#f26522]/5 transition"
                >
                  <Phone className="w-4 h-4" />
                  Call: {siteConfig.phone}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <p className="text-center text-xs text-gray-400 mt-1">
                  🎉 30% Off for Today's Callers
                </p>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
