"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Human-centered interfaces that feel effortless. From wireframes to polished design systems.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description:
      "Fast, accessible, and scalable websites built with modern frameworks and clean code.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Branding",
    description:
      "Distinctive identities — logos, voice, and visual systems that make brands unforgettable.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that grow reach, spark engagement, and convert into real results.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-white py-25 sm:py-10 overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#A6D934]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`reveal ${visible ? "visible" : ""} text-center max-w-2xl mx-auto`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#A6D934] mb-4 font-[family-name:var(--font-poppins)]">
            OUR OFFERINGS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] tracking-tight font-[family-name:var(--font-anton)] uppercase">
            Services built for <span className="text-[#A6D934]">impact</span>
          </h2>
          <p className="mt-5 text-[#0A0A0A]/70 text-lg leading-relaxed font-[family-name:var(--font-poppins)]">
            Growing a business is hard. We make it a whole lot easier, more
            predictable, less stressful, and more fun.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`service-card group rounded-2xl border border-[#0A0A0A]/10 bg-white backdrop-blur-sm p-6 flex flex-col cursor-pointer relative overflow-hidden reveal shadow-sm hover:shadow-xl hover:border-[#A6D934] ${
                visible ? "visible" : ""
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A6D934]/5 via-[#96D901]/5 to-[#A6D934]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Spotlight effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#A6D934]/10 to-transparent blur-2xl" />
              </div>

              {/* Icon with enhanced animation */}
              <div className="relative z-10 w-12 h-12 rounded-xl bg-[#A6D934]/10 border border-[#A6D934]/20 flex items-center justify-center text-[#0A0A0A]/70 group-hover:text-[#0A0A0A] group-hover:scale-125 group-hover:rotate-[-10deg] group-hover:bg-[#A6D934]/20 group-hover:border-[#A6D934] group-hover:shadow-lg group-hover:shadow-[#A6D934]/30 transition-all duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 mt-5 text-lg font-semibold text-[#0A0A0A] group-hover:text-[#A6D934] transition-all font-[family-name:var(--font-poppins)]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-2 text-sm text-[#0A0A0A]/60 leading-relaxed flex-1 group-hover:text-[#0A0A0A]/80 transition-colors duration-300 font-[family-name:var(--font-poppins)]">
                {service.description}
              </p>

              {/* Learn more with arrow animation */}
              <div className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#A6D934] group-hover:text-[#96D901] group-hover:gap-2 transition-all duration-300 font-[family-name:var(--font-poppins)]">
                Learn more
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:animate-shimmer" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
