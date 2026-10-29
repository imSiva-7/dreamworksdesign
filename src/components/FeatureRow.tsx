import TechMarquee from "./TechMarquee";

export default function FeatureRow() {
  return (
    <section aria-labelledby="skills-heading" className="relative bg-canvas py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 px-6">
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-accent-ink mb-3">
            Our toolkit
          </span>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl text-ink font-[family-name:var(--font-anton)] uppercase">
            Skills that bring ideas to life
          </h2>
          <p className="mt-4 text-ink/70 text-sm sm:text-base">
            Modern frameworks, thoughtful styling, and dependable deployment.
          </p>
        </div>
        <div className="space-y-5">
          <TechMarquee tone="canvas" skills={["nextjs", "react", "typescript", "javascript", "html5", "css3"]} />
          <TechMarquee tone="canvas" reverse skills={["tailwindcss", "docker", "vercel", "git", "react", "nextjs"]} />
        </div>
      </div>
    </section>
  );
}
