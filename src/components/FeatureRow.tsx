"use client";

import Image from "next/image";

export default function FeatureRow() {
  return (
    <section className="relative bg-[#F2F2F2] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xl font-semibold tracking-[0.2em] uppercase text-[#A6D934] mb-2 font-[family-name:var(--font-poppins)]">
            Featured In
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] font-[family-name:var(--font-anton)] uppercase">
            Media & Publications
          </h2>
        </div>

        <div className="relative mb-8 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F2F2F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F2F2F2] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div
              className="flex gap-12 animate-scroll-left"
              style={{
                width: "max-content",
              }}
            >
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="relative h-12 w-auto flex-shrink-0 transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src="/featured-in-row-1.svg"
                    alt="Featured Publications Row 1"
                    width={400}
                    height={48}
                    className="h-12 w-auto object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mb-8 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F2F2F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F2F2F2] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div
              className="flex gap-12 animate-scroll-right"
              style={{
                width: "max-content",
              }}
            >
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="relative h-12 w-auto flex-shrink-0 transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src="/featured-in-row-2.svg"
                    alt="Featured Publications Row 2"
                    width={400}
                    height={48}
                    className="h-12 w-auto object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F2F2F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F2F2F2] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div
              className="flex gap-12 animate-scroll-left"
              style={{
                width: "max-content",
                animationDuration: "45s",
              }}
            >
              
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="relative h-12 w-auto flex-shrink-0 transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src="/featured-in-row-3.svg"
                    alt="Featured Publications Row 3"
                    width={400}
                    height={48}
                    className="h-12 w-auto object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
