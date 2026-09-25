import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-950 to-fuchsia-900 animate-gradient opacity-90" />

      {/* Floating blurred blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 -right-10 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm text-white/80 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new projects
        </div>

        {/* Agency Name */}
        <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Nova{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Studio
          </span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-up delay-200 mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We craft bold digital experiences that turn ideas into brands people
          remember.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="group relative px-8 py-3.5 rounded-full bg-white text-slate-900 font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="#portfolio"
            className="px-8 py-3.5 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            View Work →
          </Link>
        </div>

        {/* Stats row (optional, adds polish) */}
        <div className="animate-fade-up delay-500 mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto text-white/70">
          <div>
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-xs uppercase tracking-wider">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">30+</p>
            <p className="text-xs uppercase tracking-wider">Clients</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">5★</p>
            <p className="text-xs uppercase tracking-wider">Rating</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}