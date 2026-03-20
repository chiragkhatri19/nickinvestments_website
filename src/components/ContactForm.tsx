import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, MessageCircle, CheckCircle, Loader2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"

interface FormData {
  name: string
  email: string
  phone: string
  investment: string
  message: string
}

const initialState: FormData = {
  name: "",
  email: "",
  phone: "",
  investment: "Under ₹50L",
  message: "",
}

const investmentOptions = [
  "Under ₹50L",
  "₹50L - ₹1Cr",
  "₹1Cr - ₹5Cr",
  "₹5Cr+",
  "Prefer not to say",
]

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialState)
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("success")
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#944a00] font-semibold mb-4">
              Get In Touch
            </p>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#002147] mb-6 leading-tight tracking-tight">
              Start Your Journey With Us
            </h2>

            <p className="text-[#555] text-[17px] leading-relaxed mb-10">
              Schedule a complimentary consultation with our senior advisor. We'll discuss your goals and see how we can help.
            </p>

            <div className="space-y-3 mb-10">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 bg-[#002147] text-white px-5 py-3.5 font-medium hover:bg-[#003366] transition-colors rounded"
              >
                <Phone size={18} className="text-[#E67E22]" />
                <span>Call: +91 98765 43210</span>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi, I'm interested in Nick Investments services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white px-5 py-3.5 font-medium hover:bg-[#1ebe5d] transition-colors rounded"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="pt-5 border-t border-[#002147]/10">
              <p className="text-[#888] text-sm mb-1.5">Office Hours</p>
              <p className="text-[#002147]">Monday - Saturday: 10:00 AM - 7:00 PM</p>
              <p className="text-[#888] text-sm mt-4 mb-1.5">Location</p>
              <p className="text-[#002147]">Mumbai, Maharashtra, India</p>
            </div>
          </div>

          <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-lg">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-10"
              >
                <div className="w-14 h-14 bg-[#002147] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-[#E67E22]" />
                </div>
                <h3 className="font-serif text-2xl text-[#002147] mb-3">
                  Thank You
                </h3>
                <p className="text-[#555] mb-5">
                  Your inquiry has been received. Our advisor will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle")
                    setForm(initialState)
                  }}
                  className="text-[#944a00] font-semibold text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] focus-visible:ring-offset-2 rounded"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-[#002147]">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="border-[#002147]/15 focus:border-[#002147] focus:ring-[#002147]/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-[#002147]">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="border-[#002147]/15 focus:border-[#002147] focus:ring-[#002147]/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-[#002147]">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="border-[#002147]/15 focus:border-[#002147] focus:ring-[#002147]/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investment" className="text-sm font-medium text-[#002147]">Investment Range</Label>
                  <Select
                    id="investment"
                    name="investment"
                    value={form.investment}
                    onChange={handleChange}
                    className="border-[#002147]/15 focus:border-[#002147] focus:ring-[#002147]/20"
                  >
                    {investmentOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-[#002147]">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your investment goals..."
                    className="border-[#002147]/15 focus:border-[#002147] focus:ring-[#002147]/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full mt-6"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight size={16} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
