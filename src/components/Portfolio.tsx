"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Update these with your actual project images from /public folder
const projects = [
  {
    title: "Lumen Finance",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Aster Skincare",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    title: "Nova Mobile App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    title: "Prism Studio",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    title: "Echo Sound",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  {
    title: "Vault Crypto",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
  },
  {
    title: "Zenith Wellness",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
  },
  {
    title: "Pixel Agency",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative bg-white py-24 sm:py-32 overflow-hidden"
    >
      {/* Accent blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A6D934]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`reveal ${visible ? "visible" : ""} text-center max-w-2xl mx-auto`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#A6D934] mb-4 font-[family-name:var(--font-poppins)]">
            CASE STUDIES
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight font-[family-name:var(--font-anton)] uppercase">
            BECOME OUR NEXT SUCCESS STORY
          </h2>
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div className="mt-16 relative">
          {/* Fade gradients on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`flex gap-4 sm:gap-6 ${isPaused ? "" : "animate-scroll-left"}`}
              style={{
                width: "max-content",
              }}
            >
              {/* Render projects twice for seamless loop */}
              {[...projects, ...projects].map((project, i) => (
                <a
                  key={`${project.title}-${i}`}
                  href="#contact"
                  className="group relative block rounded-2xl overflow-hidden border border-[#0A0A0A]/10 flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] transition-all duration-500 hover:-translate-y-3 hover:border-[#A6D934] hover:shadow-2xl hover:shadow-[#A6D934]/20 bg-white"
                >
                  {/* Image */}
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                    />

                    {/* Bottom-to-top gradient (always) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent" />

                    {/* Animated color tint on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#A6D934]/0 via-[#96D901]/0 to-[#A6D934]/0 group-hover:from-[#A6D934]/30 group-hover:via-[#96D901]/15 group-hover:to-[#A6D934]/30 transition-all duration-700" />

                    {/* Animated overlay bars */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A6D934] via-[#96D901] to-[#A6D934] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A6D934] via-[#96D901] to-[#A6D934] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
                    </div>
                  </div>

                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-4 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                    <div className="transform transition-all duration-500">
                      <p className="text-xs uppercase tracking-[0.15em] text-[#A6D934] font-medium group-hover:text-[#96D901] transition-colors font-[family-name:var(--font-poppins)]">
                        {project.category}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold text-white font-[family-name:var(--font-poppins)]">
                        {project.title}
                      </h3>
                    </div>

                    {/* Arrow badge with rotation */}
                    <div className="shrink-0 w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 translate-y-2 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-45 group-hover:bg-[#A6D934] group-hover:border-[#A6D934] transition-all duration-500">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 -rotate-45 group-hover:text-[#0A0A0A]"
                      >
                        <path d="M7 17L17 7M17 7H9M17 7v8" />
                      </svg>
                    </div>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Pause indicator */}
          {isPaused && (
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#A6D934]/30 text-white text-xs font-medium animate-fade-in font-[family-name:var(--font-poppins)]">
              Paused
            </div>
          )}
        </div>

        {/* Bottom CTA with enhanced animation */}
        <div
          className={`reveal ${visible ? "visible" : ""} mt-14 text-center`}
          style={{ transitionDelay: visible ? "700ms" : "0ms" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#A6D934] text-[#0A0A0A] font-semibold hover:bg-[#96D901] hover:scale-105 hover:shadow-lg hover:shadow-[#A6D934]/30 transition-all duration-300 relative overflow-hidden font-[family-name:var(--font-poppins)]"
          >
            <span className="relative z-10">GET STARTED</span>
            <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
