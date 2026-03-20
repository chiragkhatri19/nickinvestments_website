import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#002147]"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80"
          alt="Modern corporate architecture"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#002147]/95 via-[#002147]/80 to-[#002147]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-[#E67E22]" aria-hidden="true" />
          <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-[#E67E22] font-medium">
            Established 2009
          </p>
          <div className="w-12 h-px bg-[#E67E22]" aria-hidden="true" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-[1.1]"
        >
          <span className="block">Secure Your</span>
          <span className="block text-[#E67E22]">Financial Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Professional wealth management for discerning investors. 14+ years of consistent returns and personalized service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a href="#contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-[#E67E22]/20">
              Schedule Consultation
            </Button>
          </a>

          <a href="#services" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40"
            >
              Our Services
              <ArrowRight size={16} />
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <a
          href="#stats"
          className="flex flex-col items-center text-white/30 hover:text-white/50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] focus-visible:ring-offset-2 focus-visible:ring-offset-[#002147] rounded"
          aria-label="Scroll to content"
        >
          <span className="text-[9px] uppercase tracking-[0.2em] mb-3">Explore</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
