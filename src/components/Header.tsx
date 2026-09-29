"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

type NavLink = { name: string; href: string };

const navLinks: NavLink[] = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-colors duration-200
          ${
            isScrolled && !isMobileMenuOpen
              ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
              : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex items-center gap-2 relative z-50"
            >
              <span className="text-xl text-[#A6D934] font-bold tracking-tight font-[family-name:var(--font-anton)] uppercase">
                DreamWorks <span className="align-super text-[0.6em]">®</span>
              </span>
            </Link>

       
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

         
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg text-white relative z-50 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
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
        </nav>
      </header>

    
      <div
        className={`
          md:hidden fixed inset-0 z-40 bg-[#0A0A0A]
          flex flex-col justify-center items-center px-6
          transition-all duration-200 ease-out
          will-change-[transform,opacity]
          ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col gap-6 w-full max-w-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="
                px-4 py-3 rounded-xl text-2xl uppercase text-center font-semibold
                font-[family-name:var(--font-poppins)]
                text-white  active:bg-white/10
                transition-colors
              "
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}