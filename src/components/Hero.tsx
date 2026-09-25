import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#0A0A0A] animate-gradient opacity-90" />

      
      <div className="absolute top-20 -left-20 w-72 h-72 bg-[#A6D934]/20 rounded-full blur-3xl animate-float-slow" />
      <div
        className="absolute bottom-10 -right-10 w-96 h-96 bg-[#96D901]/15 rounded-full blur-3xl animate-float-slow"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A6D934]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />

     
      <div className="absolute inset-0 bg-[linear-gradient(rgba(166,217,52,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(166,217,52,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
     

        
        <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight font-[family-name:var(--font-anton)] uppercase">
          Dream Works{" "}
          <span className="inline-block text-[#A6D934] animate-gradient bg-[length:200%_auto] hover:scale-110 transition-transform duration-500 cursor-default">
            Design
          </span>
        </h1>

        
        <p className="animate-fade-up delay-200 mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-poppins)]">
          We craft{" "}
          <span className="text-white font-semibold">bold digital experiences</span>{" "}
          that turn ideas into brands people remember.
        </p>

        
        <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="btn-ripple group relative px-8 py-3.5 rounded-full bg-[#A6D934] text-[#0A0A0A] font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#A6D934]/50 hover:bg-[#96D901] active:scale-95 font-[family-name:var(--font-poppins)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>

         
        </div>

        
        <div className="animate-fade-up delay-500 mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto text-white/70 font-[family-name:var(--font-poppins)]">
          <div className="group cursor-default transition-transform duration-300 hover:scale-110">
            <p className="text-2xl font-bold text-white group-hover:text-[#A6D934] transition-all">
              50+
            </p>
            <p className="text-xs uppercase tracking-wider group-hover:text-white/90 transition-colors">
              Projects
            </p>
          </div>
          <div className="group cursor-default transition-transform duration-300 hover:scale-110">
            <p className="text-2xl font-bold text-white group-hover:text-[#A6D934] transition-all">
              30+
            </p>
            <p className="text-xs uppercase tracking-wider group-hover:text-white/90 transition-colors">
              Clients
            </p>
          </div>
          <div className="group cursor-default transition-transform duration-300 hover:scale-110">
            <p className="text-2xl font-bold text-white flex items-center justify-center gap-1">
              4.8 
              <span className="text-[#A6D934] inline-block group-hover:animate-wiggle">★</span>
            </p>
            <p className="text-xs uppercase tracking-wider group-hover:text-white/90 transition-colors">
              Rating
            </p>
          </div>
        </div>
      </div>

     
      
    </section>
  );
}
