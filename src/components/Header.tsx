"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isMobileMenuOpen
          ? "bg-transparent"
          : isScrolled
            ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }
      `}
    >
      
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
        className={`
          md:hidden fixed inset-0 -z-10
          transition-opacity duration-300
          ${isMobileMenuOpen
            ? "opacity-100 backdrop-blur-xl bg-[#0A0A0A]/70"
            : "opacity-0 pointer-events-none backdrop-blur-0 bg-transparent"
          }
        `}
      />

      <nav className="relative max-w-7xl mx-auto px-5 sm:px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <span className="text-xl text-[#A6D934] font-bold tracking-tight font-[family-name:var(--font-anton)] uppercase">
              DreamWorks <span className="align-super text-[0.6em]">®</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium group font-[family-name:var(--font-poppins)] text-white/90 hover:text-white transition-colors duration-300"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6D934] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300 text-white hover:bg-white/10 relative z-10"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${isMobileMenuOpen ? "max-h-screen mt-6" : "max-h-0"}
          `}
        >
          <div className="flex flex-col gap-4 pb-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  px-4 py-2.5 rounded-lg text-xl uppercase text-center font-medium
                  transition-all duration-300 animate-fade-in
                  font-[family-name:var(--font-poppins)]
                  text-white hover:bg-white/10
                "
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}