import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-accent/20 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <Link href="/" className="text-3xl text-accent font-[family-name:var(--font-anton)] uppercase">Forma Studio</Link>
            <p className="mt-3 text-sm text-white/65">Thoughtful design. Distinctive digital experiences.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
            <Link href="#services" className="transition-colors hover:text-accent">Services</Link>
            <Link href="#portfolio" className="transition-colors hover:text-accent">Projects</Link>
            <Link href="#contact" className="transition-colors hover:text-accent">Contact</Link>
            <Link href="#main-content" className="transition-colors hover:text-accent">Back to top ↑</Link>
          </nav>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} Forma Studio. Designed with attention to every detail.
        </div>
      </div>
    </footer>
  );
}
