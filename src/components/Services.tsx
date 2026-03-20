import { motion } from "framer-motion";
import { Briefcase, Building2, TrendingUp, ArrowRight, Check } from "lucide-react";

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
];

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="py-24 lg:py-32 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#944a00] font-semibold mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#002147]">
              Services Tailored to Your Goals
            </h2>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 text-[#944a00] font-semibold text-sm hover:gap-3 transition-all"
          >
            Speak to an Advisor
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#002147] flex items-center justify-center mb-6">
                <service.Icon size={24} className="text-[#E67E22]" />
              </div>

              <h3 className="font-serif text-2xl text-[#002147] mb-4">
                {service.title}
              </h3>

              <p className="text-[#555] leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-[#444]">
                    <Check size={14} className="text-[#E67E22]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
