"use client";

import MovingRail from "./MovingRail";

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

const details = [
  { tags: ["Research", "Wireframes", "Design systems"], color: "from-[#172B4A] to-[#284A79]", label: "Designed around people" },
  { tags: ["Next.js", "Responsive", "Performance"], color: "from-[#2458C6] to-[#142C67]", label: "Built for the real world" },
  { tags: ["Identity", "Strategy", "Art direction"], color: "from-[#29495B] to-[#132B3D]", label: "Made to be remembered" },
  { tags: ["Content", "Campaigns", "Analytics"], color: "from-[#384B83] to-[#18274C]", label: "A little more momentum" },
];

function ServiceArtwork({ index }: { index: number }) {
  return (
    <div aria-hidden="true" className="offering-art relative h-44 my-5 flex items-center justify-center">
      {index === 0 && (
        <div className="offering-art-object w-52 rounded-2xl border border-white/25 bg-white/10 p-4 shadow-xl">
          <div className="flex gap-1.5 mb-4">{[0, 1, 2].map((dot) => <span key={dot} className="h-1.5 w-1.5 rounded-full bg-white/40" />)}</div>
          <div className="flex gap-3"><div className="w-14 rounded-xl bg-accent/80" /><div className="flex-1 space-y-2"><div className="h-3 w-20 bg-white/80 rounded" /><div className="h-2 w-full bg-white/20 rounded" /><div className="h-2 w-16 bg-white/20 rounded" /><div className="h-6 w-20 bg-accent/80 rounded-full mt-3" /></div></div>
        </div>
      )}
      {index === 1 && (
        <div className="offering-art-object w-56 rounded-2xl border border-white/25 bg-ink/60 p-5 shadow-xl font-mono text-xs leading-7">
          <p className="text-accent">&lt;FormaStudio&gt;</p><p className="pl-3 text-white/70">ideas.map(build)</p><p className="pl-3 text-white/70">craft.every(detail)</p><p className="text-accent">&lt;/FormaStudio&gt;<span className="offering-cursor ml-1">▍</span></p>
        </div>
      )}
      {index === 2 && (
        <div className="offering-art-object relative flex h-36 w-52 items-center justify-center">
          <span className="absolute left-3 top-1 h-28 w-28 rounded-full border border-accent/70" /><span className="absolute right-3 bottom-1 h-28 w-28 rounded-full bg-accent/20" />
          <span className="relative text-7xl text-white font-[family-name:var(--font-anton)]">Aa<span className="text-accent">.</span></span>
        </div>
      )}
      {index === 3 && (
        <div className="offering-art-object flex h-32 items-end gap-3 rounded-2xl border border-white/20 bg-white/5 px-6 py-5">
          {[35, 55, 43, 75, 95].map((height, i) => <span key={height} className="offering-bar w-6 rounded-t-md bg-accent" style={{ height: height + "%", animationDelay: i * 180 + "ms", opacity: 0.4 + i * 0.15 }} />)}
        </div>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-surface py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-ink mb-3">Our offerings</p>
            <h2 id="services-heading" className="text-4xl sm:text-5xl lg:text-6xl text-ink font-[family-name:var(--font-anton)] uppercase">Good ideas.<br /><span className="text-accent-ink">Great execution.</span></h2>
          </div>
          <p className="max-w-sm text-sm sm:text-base text-ink/65 leading-relaxed">From a first spark to a finished experience. Four ways we help your next idea move forward.</p>
        </div>
        <MovingRail label="Offerings" count={services.length} speed={22} renderItem={(index, duplicate) => {
          const service = services[index];
          const detail = details[index];
          return (
            <article className={`offering-card group relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${detail.color} p-6 sm:p-7 text-white`}>
              <div className="flex items-center justify-between"><span className="text-[10px] font-medium tracking-[0.2em] text-white/55">0{index + 1} / EXPERTISE</span><span className="text-accent">{service.icon}</span></div>
              <h3 className="mt-5 text-3xl font-[family-name:var(--font-anton)] uppercase">{service.title}</h3>
              <p className="mt-1 text-xs text-accent/90">{detail.label}</p>
              <ServiceArtwork index={index} />
              <p className="text-sm leading-relaxed text-white/75">{service.description}</p>
              <div className="mt-4 mb-6 flex flex-wrap gap-1.5">{detail.tags.map((tag) => <span key={tag} className="rounded-full border border-white/15 px-2.5 py-1 text-[9px] text-white/65">{tag}</span>)}</div>
              <a href="#contact" tabIndex={duplicate ? -1 : undefined} aria-label={`Discuss ${service.title}`} className="mt-auto flex items-center justify-between border-t border-white/20 pt-4 text-xs font-medium text-white transition-colors hover:text-accent">Let&apos;s make it happen <span aria-hidden="true" className="text-xl text-accent">↗</span></a>
            </article>
          );
        }} />
      </div>
    </section>
  );
}
