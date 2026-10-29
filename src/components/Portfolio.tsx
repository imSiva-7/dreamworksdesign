"use client";

import Image from "next/image";
import MovingRail from "./MovingRail";
import { useEffect, useRef, useState } from "react";

const projects = [
  { title: "Lumen Finance", category: "Web Design", image: "/projects/lumen-finance.svg", summary: "A calmer way to see the bigger financial picture.", challenge: "Make a complex financial dashboard feel clear, useful, and approachable.", approach: "A focused balance summary, gentle green palette, and simple spending charts put the most useful information first.", deliverables: ["Visual direction", "Dashboard design", "Responsive interface"] },
  { title: "Aster Skincare", category: "Branding", image: "/projects/aster-skincare.svg", summary: "An everyday ritual with a naturally refined identity.", challenge: "Give a botanical skincare range a distinctive presence without overwhelming the product.", approach: "Warm neutrals, generous spacing, and restrained packaging typography create a quiet, tactile identity.", deliverables: ["Brand identity", "Packaging concept", "Art direction"] },
  { title: "Nova Mobile App", category: "UI/UX Design", image: "/projects/nova-mobile.svg", summary: "A little more space for the things that matter.", challenge: "Create a welcoming daily wellness app with a clear starting point.", approach: "Soft lavender surfaces and a simple content hierarchy make daily recommendations easy to discover.", deliverables: ["Mobile UI", "Component system", "Interaction direction"] },
  { title: "Prism Studio", category: "Web Design", image: "/projects/prism-studio.svg", summary: "Architecture with room to breathe.", challenge: "Let an architecture studio's spaces take the lead while keeping navigation effortless.", approach: "Editorial typography, earthy tones, and large architectural compositions create a considered portfolio.", deliverables: ["Website concept", "Art direction", "Responsive layout"] },
  { title: "Echo Sound", category: "Branding", image: "/projects/echo-sound.svg", summary: "An identity you can almost hear.", challenge: "Build a memorable visual identity for a bold personal audio brand.", approach: "Oversized lettering, a warm orange backdrop, and a sculptural product composition bring energy to the brand.", deliverables: ["Brand direction", "Product illustration", "Campaign concept"] },
  { title: "Vault Crypto", category: "Web Design", image: "/projects/vault-crypto.svg", summary: "Complex markets. A clearer perspective.", challenge: "Present market activity and portfolio information in a scan-friendly interface.", approach: "A deep navy foundation, clear value hierarchy, and selective green accents highlight the information that matters.", deliverables: ["Dashboard UI", "Data visualization", "Design system"] },
  { title: "Zenith Wellness", category: "UI/UX Design", image: "/projects/zenith-wellness.svg", summary: "A digital pause in a busy world.", challenge: "Design a wellness experience that feels restorative from the first visit.", approach: "Landscape-inspired illustration, sage tones, and an uncluttered layout establish a slower visual rhythm.", deliverables: ["Landing page", "Illustration", "Visual identity"] },
  { title: "Pixel Agency", category: "Branding", image: "/projects/pixel-agency.svg", summary: "Small studio. Big creative energy.", challenge: "Give a creative studio a playful identity with a strong digital presence.", approach: "Geometric forms, oversized typography, and contrasting pastel panels build a flexible graphic language.", deliverables: ["Brand identity", "Graphic system", "Website concept"] },
];

export default function Portfolio() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!selected) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    if (dialog) dialog.scrollTop = 0;
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="bg-surface py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-ink mb-3">Selected projects</p>
          <h2 id="portfolio-heading" className="text-4xl sm:text-5xl lg:text-6xl text-ink font-[family-name:var(--font-anton)] uppercase">Imagined with purpose.<br /><span className="text-accent-ink">Made to stand out.</span></h2>
          <p className="mt-5 text-sm sm:text-base text-ink/65">A closer look at the brands and digital experiences we bring to life.</p>
        </div>
        <MovingRail label="Projects" count={projects.length} speed={28} suspended={Boolean(selected)} renderItem={(index, duplicate) => {
          const project = projects[index];
          const colors = ["from-[#427B82] to-[#173C4C]", "from-[#AB826F] to-[#674B41]", "from-[#8C79B3] to-[#49396E]", "from-[#758C65] to-[#3B5033]", "from-[#D18C53] to-[#854E37]", "from-[#42678F] to-[#1D3558]", "from-[#739181] to-[#3A5C52]", "from-[#747DB2] to-[#3A4270]"];
          const phone = index === 2;
          const packaging = index === 1 || index === 4 || index === 7;
          return (
            <button
              key={project.title}
              type="button"
              tabIndex={duplicate ? -1 : undefined}
              onClick={() => setSelected(project)}
              aria-haspopup="dialog"
              aria-label={`Preview ${project.title}`}
              className={`project-showcase-card group flex h-[500px] sm:h-[530px] w-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${colors[index]} p-6 sm:p-7 text-left text-white`}
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">{project.category}</p>
              <h3 className="mt-3 max-w-[260px] text-3xl sm:text-4xl leading-[1.05] font-[family-name:var(--font-anton)] uppercase">{project.title}</h3>
              <div className="relative flex flex-1 min-h-0 items-center justify-center py-6" aria-hidden="true">
                <div className="absolute bottom-7 left-8 right-8 h-5 rounded-[50%] bg-black/25 blur-lg" />
                <div className={`project-device ${phone ? "project-device-phone" : packaging ? "project-device-brand" : "project-device-laptop"}`}>
                  <div className={`relative overflow-hidden bg-ink shadow-2xl ${phone ? "aspect-[9/17] rounded-[24px] border-[5px] border-ink" : packaging ? "aspect-square rounded-xl border-[5px] border-white/20" : "aspect-[16/11] rounded-t-xl rounded-b-sm border-[6px] border-ink"}`}>
                    <Image src={project.image} alt="" fill sizes="(max-width: 640px) 260px, 320px" className={`object-cover ${packaging ? "object-center" : "object-top"}`} />
                    {phone && <div className="absolute top-1 left-1/2 -translate-x-1/2 h-2.5 w-12 rounded-full bg-ink" />}
                  </div>
                  {!phone && !packaging && <div className="project-laptop-base" />}
                </div>
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-white/25 pt-4">
                <div><p className="text-[9px] tracking-widest text-white/55">0{index + 1} / PROJECT</p><p className="mt-1.5 text-xs font-medium text-white/90">Explore the story</p></div>
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/60 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">↗</span>
              </div>
            </button>
          );
        }} />
      </div>
      <dialog ref={dialogRef} aria-labelledby="project-title" onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} className="project-dialog fixed inset-0 m-auto max-h-[90svh] w-[calc(100%_-_2rem)] max-w-4xl overflow-y-auto rounded-3xl bg-surface p-0 text-ink shadow-2xl backdrop:bg-ink/70 backdrop:backdrop-blur-sm">
        {selected && (
          <>
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-surface/95 px-5 py-3 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-ink">{selected.category}</span>
              <button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Close project preview" className="flex h-11 w-11 items-center justify-center rounded-full bg-canvas text-xl transition-colors hover:bg-accent">×</button>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] bg-canvas">
                <Image src={selected.image} alt={`${selected.title} full design mockup`} fill sizes="(max-width: 768px) 100vw, 450px" className="object-contain" />
              </div>
              <div className="p-6 sm:p-9">
                <h3 id="project-title" className="text-3xl sm:text-4xl font-[family-name:var(--font-anton)] uppercase">{selected.title}</h3>
                <p className="mt-3 text-lg text-accent-ink">{selected.summary}</p>
                <h4 className="mt-7 text-xs font-semibold tracking-widest uppercase">The brief</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{selected.challenge}</p>
                <h4 className="mt-6 text-xs font-semibold tracking-widest uppercase">The direction</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{selected.approach}</p>
                <ul aria-label="Project deliverables" className="mt-6 flex flex-wrap gap-2">
                  {selected.deliverables.map((item) => <li key={item} className="rounded-full border border-ink/10 px-3 py-1.5 text-xs">{item}</li>)}
                </ul>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
