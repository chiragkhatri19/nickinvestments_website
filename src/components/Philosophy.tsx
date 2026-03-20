export default function Philosophy() {
  return (
    <section
      id="philosophy"
      data-testid="philosophy-section"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#944a00] font-semibold mb-6">
              Our Philosophy
            </p>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#002147] leading-tight mb-8">
              Built on discipline, guided by experience.
            </h2>

            <p className="text-[#555] text-lg leading-relaxed mb-8">
              We believe wealth management is not about quick gains—it is about sustainable growth, careful planning, and building a legacy that endures. Our approach combines proven investment principles with personalized attention.
            </p>

            <div className="border-l-4 border-[#E67E22] pl-6 py-2 mb-8">
              <p className="font-serif text-xl text-[#002147] italic">
                "True wealth is the ability to live life on your own terms, with security and peace of mind."
              </p>
              <p className="text-[#888] text-sm mt-3 uppercase tracking-wider">
                — Nick, Founder
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="font-serif text-3xl font-bold text-[#002147]">30+</div>
                <p className="text-[#888] text-sm">Years Experience</p>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#002147]">14%</div>
                <p className="text-[#888] text-sm">Avg. Returns</p>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#002147]">SEBI</div>
                <p className="text-[#888] text-sm">Registered</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
                  alt="Financial planning"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-[#002147] p-6 shadow-xl">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-serif text-4xl font-bold text-white">14</span>
                  <span className="font-serif text-2xl text-[#E67E22] font-bold">%</span>
                </div>
                <p className="text-white/60 text-xs uppercase tracking-wider">
                  Average Annualized Return
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
