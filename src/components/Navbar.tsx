"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("")

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handler, { passive: true })
    handler()
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#philosophy" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      <motion.nav
        data-testid="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,33,71,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className={`border-b transition-all duration-500 ${
          scrolled ? "border-[#002147]/5" : "border-transparent"
        }`}>
          <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`w-10 h-10 rounded flex items-center justify-center transition-colors duration-300 ${
                scrolled ? "bg-[#002147]" : "bg-white/10"
              }`}>
                <span className="font-serif font-bold text-lg text-white">N</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-lg tracking-tight leading-none transition-colors duration-300 ${
                  scrolled ? "text-[#002147]" : "text-white"
                }`}>
                  Nick Investments
                </span>
                <span className={`font-sans text-[9px] uppercase tracking-[0.25em] leading-none mt-1 transition-colors duration-300 ${
                  scrolled ? "text-[#708ab5]" : "text-white/60"
                }`}>
                  Est. 2009
                </span>
              </div>
            </motion.a>

            <div className="hidden lg:flex items-center gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                    activeLink === link.href
                      ? scrolled ? "text-[#E67E22]" : "text-[#ffb783]"
                      : scrolled ? "text-[#002147]/80 hover:text-[#002147]" : "text-white/80 hover:text-white"
                  }`}
                  onMouseEnter={() => setActiveLink(link.href)}
                  onMouseLeave={() => setActiveLink("")}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#E67E22] rounded-full"
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold rounded hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 bg-[#E67E22] text-white px-5 py-2.5 text-sm font-semibold rounded hover:bg-[#d4711d] transition-colors"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  scrolled ? "bg-[#25D366] text-white" : "bg-white/20 text-white"
                }`}
              >
                <MessageCircle size={18} />
              </a>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(true)}
                className={`${scrolled ? "text-[#002147]" : "text-white"} lg:hidden`}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#002147]/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30, restDelta: 0.001 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-white z-50 lg:hidden overflow-auto"
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#002147]/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#002147] rounded flex items-center justify-center">
                      <span className="font-serif font-bold text-lg text-white">N</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif font-bold text-lg text-[#002147] leading-none">Nick Investments</span>
                      <span className="font-sans text-[9px] text-[#708ab5] uppercase tracking-[0.2em] mt-1">Est. 2009</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileOpen(false)}
                    className="text-[#002147]"
                  >
                    <X size={22} />
                  </Button>
                </div>

                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {links.map((link, i) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="group flex items-center justify-between py-4 px-4 rounded-lg hover:bg-[#f8f9fa] transition-colors"
                      >
                        <span className="text-[#002147] font-medium text-lg">{link.label}</span>
                        <ArrowRight size={18} className="text-[#E67E22] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                      </motion.a>
                    ))}
                  </div>
                </nav>

                <div className="px-6 py-8 border-t border-[#002147]/10 bg-[#f8f9fa]">
                  <p className="text-[#708ab5] text-xs uppercase tracking-wider mb-4 font-medium">Quick Contact</p>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 font-semibold rounded-lg"
                    >
                      <MessageCircle size={20} />
                      <span>WhatsApp Advisor</span>
                    </a>

                    <a
                      href="tel:+919876543210"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center gap-3 bg-[#E67E22] text-white py-4 font-semibold rounded-lg"
                    >
                      <Phone size={20} />
                      <span>Call Now: +91 98765 43210</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
