export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#944a00] font-semibold mb-4">
              Our Philosophy
            </p>

            <h2 id="philosophy-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#002147] leading-tight mb-6 tracking-tight">
              Built on discipline, guided by experience.
            </h2>

            <p className="text-[#555] text-[17px] leading-relaxed mb-8">
              We believe wealth management is not about quick gains—it is about sustainable growth, careful planning, and building a legacy that endures. Our approach combines proven investment principles with personalized attention.
            </p>

            <blockquote className="border-l-4 border-[#E67E22] pl-6 py-2 mb-10">
              <p className="font-serif text-xl md:text-2xl text-[#002147] italic leading-relaxed">
                "True wealth is the ability to live life on your own terms, with security and peace of mind."
              </p>
              <footer className="text-[#888] text-xs mt-3 uppercase tracking-wider font-medium">
                — Nick, Founder
              </footer>
            </blockquote>

            <div className="flex flex-wrap gap-10">
              <div>
                <div className="font-serif text-3xl font-bold text-[#002147] tracking-tight">30+</div>
                <p className="text-[#888] text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#002147] tracking-tight">14%</div>
                <p className="text-[#888] text-sm mt-1">Avg. Returns</p>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#002147] tracking-tight">SEBI</div>
                <p className="text-[#888] text-sm mt-1">Registered</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
                  alt="Financial planning consultation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -bottom-5 -left-5 bg-[#002147] p-5 shadow-xl" aria-label="14% average annualized return">
                <div className="flex items-baseline gap-1 mb-0.5">
                  <span className="font-serif text-4xl font-bold text-white">14</span>
                  <span className="font-serif text-2xl text-[#E67E22] font-bold">%</span>
                </div>
                <p className="text-white/50 text-[10px] uppercase tracking-wider">
                  Average Annualized Return
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
