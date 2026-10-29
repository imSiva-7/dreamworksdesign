import Image from "next/image";

const technologies = {
  nextjs: "Next.js",
  react: "React",
  tailwindcss: "Tailwind CSS",
  typescript: "TypeScript",
  javascript: "JavaScript",
  docker: "Docker",
  vercel: "Vercel",
  git: "Git",
  html5: "HTML5",
  css3: "CSS3",
};

type Props = {
  skills: (keyof typeof technologies)[];
  reverse?: boolean;
  tone?: "surface" | "canvas";
};

export default function TechMarquee({ skills, reverse = false, tone = "surface" }: Props) {
  const fade = tone === "canvas" ? "from-canvas" : "from-surface";

  return (
    <div className="tech-marquee relative overflow-hidden">
      <div className={`absolute inset-y-0 left-0 w-10 sm:w-24 bg-gradient-to-r ${fade} to-transparent z-10 pointer-events-none`} />
      <div className={`absolute inset-y-0 right-0 w-10 sm:w-24 bg-gradient-to-l ${fade} to-transparent z-10 pointer-events-none`} />
      <div className={`tech-marquee-track flex w-max ${reverse ? "animate-scroll-right" : "animate-scroll-left"}`}>
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6">
            {skills.map((skill, index) => (
              <li key={`${skill}-${index}`} className="flex w-48 sm:w-56 shrink-0 items-center gap-4 rounded-2xl border border-ink/10 bg-surface px-5 py-5 transition-colors hover:border-accent/60">
                <Image src={`/technologies/${skill}.svg`} alt="" width={36} height={36} className="h-9 w-9 shrink-0 object-contain" />
                <span className="text-base font-semibold text-ink whitespace-nowrap">{technologies[skill]}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
