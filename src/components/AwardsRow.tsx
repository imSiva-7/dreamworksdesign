import TechMarquee from "./TechMarquee";

export default function AwardsRow() {
  return (
    <section aria-label="Our core technologies" className="relative bg-surface py-10 overflow-hidden border-y border-ink/5">
      <TechMarquee skills={["nextjs", "react", "tailwindcss", "typescript", "docker", "vercel"]} />
      <p className="text-center mt-6 text-xs uppercase tracking-[0.2em] text-ink/60 font-semibold">
        The tools behind your next big idea
      </p>
    </section>
  );
}
