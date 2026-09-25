"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Lumen Finance",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
  },
  {
    title: "Aster Skincare",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=80",
  },
  {
    title: "Nova Mobile App",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80",
  },
  {
    title: "Prism Studio",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
  },
  {
    title: "Echo Sound",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80",
  },
  {
    title: "Vault Crypto",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&q=80",
  },
];

export default function Portfolio() {
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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative bg-slate-950 py-24 sm:py-32 overflow-hidden"
    >
      {/* Accent blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className={`reveal ${visible ? "visible" : ""} text-center max-w-2xl mx-auto`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-fuchsia-400 mb-4">
            Selected work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Projects we&apos;re{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              proud of
            </span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            A snapshot of recent collaborations across brands, products, and
            platforms.
          </p>
        </div>

        {/* Project grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href="#contact"
              className={`group relative block rounded-2xl overflow-hidden border border-white/10 reveal ${
                visible ? "visible" : ""
              } transition-transform duration-500 hover:-translate-y-2 hover:border-white/25`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Bottom-to-top dark gradient (always) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                {/* Color tint on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 to-fuchsia-500/0 group-hover:from-indigo-500/30 group-hover:to-fuchsia-500/30 transition-all duration-500" />
              </div>

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-fuchsia-300 font-medium">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Arrow badge */}
                <div className="shrink-0 w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M7 17L17 7M17 7H9M17 7v8" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`reveal ${visible ? "visible" : ""} mt-14 text-center`}
          style={{ transitionDelay: visible ? "700ms" : "0ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Start a project
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}