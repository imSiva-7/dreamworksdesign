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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0A0A0A]/50 backdrop-blur-sm`
        }
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-b2 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
             
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#A6D934] scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500" />
            </div>
            <span
              className={`text-xl text-[#A6D934] font-bold tracking-tight transition-colors duration-300 font-[family-name:var(--font-anton)] uppercase`}
            >
              DreamWorks   <span className="align-super text-[0.6em]">®</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 group font-[family-name:var(--font-poppins)] text-white/90 hover:text-white
                `}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6D934] transition-all duration-300 group-hover:w-full`}
                />
              </Link>
            ))}
          </div>

          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 font-[family-name:var(--font-poppins)] ${
              isScrolled
                ? "text-[#0A0A0A] hover:bg-[#F2F2F2]"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 mt-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pb-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 animate-fade-in font-[family-name:var(--font-poppins)] ${
                  isScrolled
                    ? "text-[#0A0A0A]/80 hover:bg-[#F2F2F2]"
                    : "text-white hover:bg-white/10"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-center bg-[#A6D934] text-[#0A0A0A] text-sm font-semibold hover:bg-[#96D901] hover:shadow-lg hover:shadow-[#A6D934]/40 transition-all duration-300 animate-fade-in font-[family-name:var(--font-poppins)]"
              style={{ animationDelay: `${navLinks.length * 50}ms` }}
            >
              Get Started →
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
