import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Nick Investments has managed our family's portfolio for 8 years. The returns have been consistent, and more importantly, I trust them completely with our financial future.",
    name: "Rajesh Mehta",
    title: "Business Owner, Mumbai",
    initials: "RM",
  },
  {
    quote: "What I appreciate most is their transparency. They explain every decision and never push products that don't align with my goals. My portfolio has grown steadily since 2015.",
    name: "Priya Sharma",
    title: "Doctor, Delhi",
    initials: "PS",
  },
  {
    quote: "After a bad experience with another advisor, I was hesitant. But Nick's team earned my trust through their professionalism and genuine care. Highly recommend.",
    name: "Vikram Patel",
    title: "IT Executive, Bangalore",
    initials: "VP",
  },
  {
    quote: "The estate planning services helped us structure our assets for the next generation. We finally have peace of mind about our family's financial security.",
    name: "Anita Desai",
    title: "Retired Professor, Pune",
    initials: "AD",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section data-testid="testimonials-section" className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#944a00] font-semibold mb-3">
            Client Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#002147] tracking-tight">
            Trusted by Investors Like You
          </h2>
        </div>

        <div className="bg-white p-8 md:p-12 lg:p-14 mb-8">
          <div className="flex gap-1 mb-6 justify-center">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={16} fill="#E67E22" stroke="none" className="text-[#E67E22]" />
            ))}
          </div>
          
          <motion.p
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="font-serif text-lg md:text-xl lg:text-2xl text-[#002147] text-center leading-relaxed mb-10"
          >
            "{testimonials[activeIndex].quote}"
          </motion.p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-11 h-11 bg-[#002147] flex items-center justify-center text-white font-bold text-sm">
              {testimonials[activeIndex].initials}
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#002147] text-[15px]">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-[#777] text-sm">
                {testimonials[activeIndex].title}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <button
            onClick={prev}
            className="w-10 h-10 border border-[#002147]/15 flex items-center justify-center text-[#002147] hover:bg-[#002147] hover:text-white hover:border-[#002147] transition-colors rounded"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === activeIndex ? "bg-[#E67E22] w-5" : "bg-[#002147]/20 hover:bg-[#002147]/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={next}
            className="w-10 h-10 bg-[#002147] flex items-center justify-center text-white hover:bg-[#003366] transition-colors rounded"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
