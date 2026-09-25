"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "UI/UX Design",
    description:
      "Human-centered interfaces that feel effortless. From wireframes to polished design systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-slate-950 py-24 sm:py-32 overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className={`reveal ${visible ? "visible" : ""} text-center max-w-2xl mx-auto`}>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-4">
            What we do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Services built for{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              impact
            </span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            A full-stack creative toolkit — designed to take your brand from idea
            to launch.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`service-card group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 flex flex-col reveal ${
                visible ? "visible" : ""
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center text-indigo-300 group-hover:text-white group-hover:scale-110 group-hover:rotate-[-6deg] transition-all duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Learn more */}
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 group-hover:text-fuchsia-400 transition-colors">
                Learn more
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}