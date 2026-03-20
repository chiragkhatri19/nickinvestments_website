import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface StatItem {
  value: number
  suffix: string
  prefix?: string
  label: string
  description: string
}

const stats: StatItem[] = [
  { value: 14, suffix: "%", label: "Avg. Annualized Return", description: "Consistent performance since 2009" },
  { value: 2400, suffix: "+", label: "Families Served", description: "Trusted across India and abroad" },
  { value: 3.2, suffix: "B", prefix: "$", label: "Assets Managed", description: "Growing under professional management" },
  { value: 97, suffix: "%", label: "Client Retention", description: "Clients choose to stay long-term" },
]

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const isDecimal = value % 1 !== 0

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value])

  const formattedValue = isDecimal ? display.toFixed(1) : Math.floor(display).toLocaleString()

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{formattedValue}{suffix}
    </span>
  )
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center relative"
    >
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
        <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
      </div>
      <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#E67E22] font-semibold mb-2">
        {stat.label}
      </p>
      <p className="text-white/50 text-sm max-w-[160px] mx-auto">
        {stat.description}
      </p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section id="stats" data-testid="stats-section" className="py-20 lg:py-28 bg-[#002147]" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#E67E22] mb-3">
            Track Record
          </p>
          <h2 id="stats-heading" className="font-serif text-3xl md:text-4xl text-white">
            Numbers That Define Our Legacy
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
