import { motion } from "framer-motion"
import { Briefcase, Building2, TrendingUp, ArrowRight, Check } from "lucide-react"

const services = [
  {
    Icon: Briefcase,
    title: "Wealth Management",
    description: "Comprehensive portfolio management focusing on risk mitigation, tax efficiency, and sustainable growth for your investments.",
    features: ["Custom Portfolio Design", "Global Asset Allocation", "Risk Assessment", "Tax Planning"],
  },
  {
    Icon: Building2,
    title: "Legacy Planning",
    description: "Structured estate and trust planning to ensure your wealth transfers smoothly to future generations.",
    features: ["Estate Structuring", "Trust Coordination", "Family Governance", "Philanthropy"],
  },
  {
    Icon: TrendingUp,
    title: "Investment Advisory",
    description: "Expert guidance on exclusive investment opportunities including private equity and real estate.",
    features: ["Private Equity Access", "Real Estate Investment", "Venture Advisory", "Structured Products"],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white p-8 border border-transparent hover:border-[#002147]/10 hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-[#E67E22]/30 focus-within:border-[#002147]/10"
    >
      <div className="w-12 h-12 bg-[#002147] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
        <service.Icon size={24} className="text-[#E67E22]" aria-hidden="true" />
      </div>

      <h3 className="font-serif text-xl md:text-2xl text-[#002147] mb-3 tracking-tight">
        {service.title}
      </h3>

      <p className="text-[#666] leading-relaxed mb-6 text-[15px]">
        {service.description}
      </p>

      <ul className="space-y-2.5" role="list">
        {service.features.map((feat) => (
          <li key={feat} className="flex items-center gap-3 text-sm text-[#555]">
            <Check size={15} className="text-[#E67E22] flex-shrink-0" aria-hidden="true" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="mt-6 flex items-center gap-2 text-[#944a00] font-semibold text-sm group-hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] focus-visible:ring-offset-2 rounded"
      >
        <span>Learn More</span>
        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </a>
    </motion.article>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f8f9fa]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#944a00] font-semibold mb-3">
              What We Offer
            </p>
            <h2 id="services-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#002147] tracking-tight">
              Services Tailored to Your Goals
            </h2>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 text-[#944a00] font-semibold text-sm hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] focus-visible:ring-offset-2 rounded"
          >
            Speak to an Advisor
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
