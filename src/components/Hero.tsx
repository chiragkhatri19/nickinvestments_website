import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#002147]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80"
          alt="Modern corporate architecture"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/90 via-[#002147]/70 to-[#002147]"/>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-[#E67E22]" />
          <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-[#E67E22] font-medium">
            Established 2009
          </p>
          <div className="w-12 h-px bg-[#E67E22]" />
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
          <span>Secure Your Financial Future</span>
          <br />
          <span className="text-[#E67E22]">With Trusted Expertise</span>
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Professional wealth management for discerning investors. 14+ years of consistent returns and personalized service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-[#E67E22] text-white px-10 py-4 text-sm font-semibold tracking-wide hover:bg-[#d4711d] transition-colors"
          >
            Schedule Consultation
          </a>

          <a
            href="#services"
            className="border border-white/30 text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
