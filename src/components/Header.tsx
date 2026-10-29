"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handleOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsMobileMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const handleResize = () => { if (desktop.matches) setIsMobileMenuOpen(false); };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutside);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutside);
      desktop.removeEventListener("change", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <header ref={headerRef} className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%_-_2rem)] sm:w-[calc(100%_-_4rem)] max-w-6xl">
      <nav aria-label="Main navigation" className={`rounded-full border px-5 sm:pl-8 sm:pr-4 py-3 sm:py-3.5 backdrop-blur-md transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? "bg-ink/55 border-white/25 shadow-xl shadow-ink/15" : "bg-white/10 border-white/30 shadow-lg shadow-black/10"}`}>
        <div className="flex items-center justify-between gap-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-accent tracking-tight font-[family-name:var(--font-anton)] uppercase whitespace-nowrap">Forma Studio</Link>
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => <Link key={link.name} href={link.href} className="text-sm font-medium text-white/85 transition-colors hover:text-accent">{link.name}</Link>)}
            <Link href="#contact" className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent-hover">Let&apos;s talk <span aria-hidden="true" className="ml-1">↗</span></Link>
          </div>
          <button ref={menuButtonRef} type="button" onClick={() => setIsMobileMenuOpen((open) => !open)} className="md:hidden flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white" aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation">
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" viewBox="0 0 24 24"><path d={isMobileMenuOpen ? "M6 6l12 12M6 18 18 6" : "M4 7h16M4 12h16M4 17h16"} /></svg>
          </button>
        </div>
      </nav>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isMobileMenuOpen} className="md:hidden mt-3 rounded-3xl border border-white/20 bg-ink/90 p-3 shadow-xl backdrop-blur-md">
        {navLinks.map((link) => <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-2xl px-5 py-4 text-white transition-colors hover:bg-white/10 active:bg-white/10">{link.name}<span aria-hidden="true" className="float-right text-accent">↗</span></Link>)}
      </nav>
    </header>
  );
}
