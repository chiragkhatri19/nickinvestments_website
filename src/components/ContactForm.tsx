import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle, Loader2, ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  investment: string;
  message: string;
}

const initialState: FormData = {
  name: "",
  email: "",
  phone: "",
  investment: "Under ₹50L",
  message: "",
};

const investmentOptions = [
  "Under ₹50L",
  "₹50L - ₹1Cr",
  "₹1Cr - ₹5Cr",
  "₹5Cr+",
  "Prefer not to say",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#944a00] font-semibold mb-4">
              Get In Touch
            </p>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#002147] mb-6 leading-tight">
              Start Your Journey With Us
            </h2>

            <p className="text-[#555] text-lg leading-relaxed mb-10">
              Schedule a complimentary consultation with our senior advisor. We'll discuss your goals and see how we can help.
            </p>

            <div className="space-y-4 mb-10">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 bg-[#002147] text-white px-6 py-4 font-medium hover:bg-[#003366] transition-colors"
              >
                <Phone size={20} className="text-[#E67E22]" />
                <span>Call: +91 98765 43210</span>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi, I'm interested in Nick Investments services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white px-6 py-4 font-medium hover:bg-[#1ebe5d] transition-colors"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#002147]/10">
              <p className="text-[#888] text-sm mb-2">Office Hours</p>
              <p className="text-[#002147]">Monday - Saturday: 10:00 AM - 7:00 PM</p>
              <p className="text-[#888] text-sm mt-4 mb-2">Location</p>
              <p className="text-[#002147]">Mumbai, Maharashtra, India</p>
            </div>
          </div>

          <div className="bg-[#f8f9fa] p-8 md:p-10">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-[#002147] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-[#E67E22]" />
                </div>
                <h3 className="font-serif text-2xl text-[#002147] mb-4">
                  Thank You
                </h3>
                <p className="text-[#555] mb-6">
                  Your inquiry has been received. Our advisor will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm(initialState);
                  }}
                  className="text-[#944a00] font-semibold text-sm"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[#444] text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-white border border-[#ddd] p-4 outline-none focus:border-[#E67E22] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#444] text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full bg-white border border-[#ddd] p-4 outline-none focus:border-[#E67E22] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#444] text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-white border border-[#ddd] p-4 outline-none focus:border-[#E67E22] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#444] text-sm font-medium mb-2">
                    Investment Range
                  </label>
                  <select
                    name="investment"
                    value={form.investment}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#ddd] p-4 outline-none focus:border-[#E67E22] transition-colors"
                  >
                    {investmentOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#444] text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your investment goals..."
                    className="w-full bg-white border border-[#ddd] p-4 outline-none focus:border-[#E67E22] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#E67E22] text-white py-4 font-semibold hover:bg-[#d4711d] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
