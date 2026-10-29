import Link from "next/link";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100svh] flex items-center justify-center overflow-hidden bg-ink pt-32 pb-28 sm:pt-40 sm:pb-32">
      <HeroVideo />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/25 to-ink/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,20,40,0.28)_0%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 text-center">
        <p className="animate-fade-up mb-6 text-[10px] sm:text-xs font-medium uppercase tracking-[0.24em] text-white/85">
          Independent studio. Unmistakable work.
        </p>
        <h1 className="
          animate-fade-up delay-100
          text-[2.75rem] leading-[1.05]
          sm:text-6xl sm:leading-[1.05]
          md:text-7xl
          lg:text-8xl
          font-bold tracking-tight text-white uppercase [text-shadow:0_2px_24px_rgba(0,0,0,0.4)]
          font-[family-name:var(--font-anton)]
        ">
          Big ideas.
          <span className="block text-accent">
            Built to stand out.
          </span>
        </h1>

        <p className="
          animate-fade-up delay-200
          mt-5 sm:mt-6
          text-base sm:text-lg md:text-xl
          text-white/95 [text-shadow:0_2px_12px_rgba(0,0,0,0.7)] max-w-2xl mx-auto leading-relaxed
          font-[family-name:var(--font-poppins)]
        ">
          We turn ambitious ideas into distinctive brands and digital experiences.
          From the first impression to the final click, we make every detail count.
        </p>

        <div className="animate-fade-up delay-300 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#contact"
            className="
              btn-ripple group relative w-full sm:w-auto
              px-8 py-3.5 rounded-full
              bg-accent text-ink font-semibold
              overflow-hidden
              transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-accent/50 hover:bg-accent-hover
              active:scale-95
              font-[family-name:var(--font-poppins)]
            "
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Let&apos;s build something
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
          <Link
            href="#portfolio"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-8 py-3.5 font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/15"
          >
            View our work
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
          </Link>
        </div>

        <div className="animate-fade-up delay-500 mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-white/85">
          {["Brand strategy", "Digital design", "Web development"].map((skill) => (
            <span key={skill} className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-ink" />
    </section>
  );
}
