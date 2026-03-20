import { motion } from "framer-motion"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We start with a confidential discussion to understand your financial situation, goals, and risk appetite. This is a no-obligation conversation.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Based on your requirements, we create a personalized investment strategy with clear objectives and timelines.",
  },
  {
    number: "03",
    title: "Portfolio Implementation",
    description: "We execute the strategy with careful attention to timing and cost efficiency, accessing appropriate investment instruments.",
  },
  {
    number: "04",
    title: "Ongoing Management",
    description: "Regular reviews and proactive adjustments ensure your portfolio stays aligned with your evolving goals.",
  },
]

export default function Process() {
  return (
    <section data-testid="process-section" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#944a00] font-semibold mb-4">
            How We Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#002147]">
            A Simple, Transparent Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[#f8f9fa] p-8"
            >
              <div className="absolute top-0 left-0 w-16 h-16 bg-[#002147] flex items-center justify-center">
                <span className="font-serif text-white text-lg font-bold">{step.number}</span>
              </div>
              
              <div className="pt-12">
                <h3 className="font-serif text-xl text-[#002147] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#555] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#002147] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white mb-2">
              Ready to start your journey?
            </h3>
            <p className="text-white/60">
              Schedule a free consultation with our senior advisor.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#E67E22] text-white px-6 py-3 font-semibold hover:bg-[#d4711d] transition-colors"
            >
              Get Started
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors"
            >
              <Phone size={16} />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
