import { motion } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  { value: 14, suffix: "%", label: "Avg. Annualized Return", description: "Consistent performance across market cycles since 2009" },
  { value: 2400, suffix: "+", label: "Families Served", description: "Trusted by families across India and abroad" },
  { value: 3.2, suffix: "B", prefix: "$", label: "Assets Managed", description: "Growing steadily under professional management" },
  { value: 97, suffix: "%", label: "Client Retention", description: "Clients choose to stay with us long-term" },
];

export default function Stats() {
  return (
    <section data-testid="stats-section" className="py-20 lg:py-28 bg-[#002147]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#E67E22] mb-3">
            Track Record
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Numbers That Define Our Legacy
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#E67E22] font-semibold mb-2">
                {stat.label}
              </p>
              <p className="text-white/50 text-sm max-w-[180px] mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
