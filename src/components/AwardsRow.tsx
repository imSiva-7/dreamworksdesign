"use client";

import Image from "next/image";

export default function AwardsRow() {
  return (
    <section className="relative bg-white py-12 overflow-hidden border-y border-[#0A0A0A]/5">
      {/* Fade gradients on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-12 animate-scroll-left"
          style={{
            width: "max-content",
          }}
        >
          {/* Render awards row multiple times for seamless loop */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="relative h-16 w-auto flex-shrink-0 hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src="/awards-row.svg"
                alt="Awards and Recognition"
                width={400}
                height={64}
                className="h-16 w-auto object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional label */}
      <div className="text-center mt-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/40 font-[family-name:var(--font-poppins)] font-semibold">
          Trusted by industry leaders
        </p>
      </div>
    </section>
  );
}
