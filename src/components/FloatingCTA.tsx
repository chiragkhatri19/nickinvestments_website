"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="flex flex-col gap-3"
          >
            <a
              href="https://wa.me/919876543210?text=Hi, I'm interested in Nick Investments."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white pl-5 pr-6 py-3 rounded-full shadow-lg whitespace-nowrap hover:bg-[#1ebe5d] transition-colors"
            >
              <MessageCircle size={20} />
              <span className="font-semibold text-sm">WhatsApp</span>
            </a>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 bg-[#002147] text-white pl-5 pr-6 py-3 rounded-full shadow-lg whitespace-nowrap hover:bg-[#003366] transition-colors"
            >
              <Phone size={20} />
              <span className="font-semibold text-sm">Call Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          size="icon"
          variant={isExpanded ? "destructive" : "default"}
          className="w-14 h-14 rounded-full shadow-lg"
          aria-label={isExpanded ? "Close menu" : "Open contact options"}
        >
          {isExpanded ? (
            <X size={24} className="text-white" />
          ) : (
            <MessageCircle size={24} className="text-white" />
          )}
        </Button>
      </motion.div>
    </div>
  )
}
