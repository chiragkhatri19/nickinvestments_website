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
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2.5"
          >
            <a
              href="https://wa.me/919876543210?text=Hi, I'm interested in Nick Investments."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-2.5 rounded-full shadow-lg hover:shadow-xl whitespace-nowrap hover:bg-[#1ebe5d] transition-all duration-200 hover:scale-105"
            >
              <MessageCircle size={18} />
              <span className="font-semibold text-sm">WhatsApp</span>
            </a>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 bg-[#002147] text-white pl-4 pr-5 py-2.5 rounded-full shadow-lg hover:shadow-xl whitespace-nowrap hover:bg-[#003366] transition-all duration-200 hover:scale-105"
            >
              <Phone size={18} />
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
          className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
          aria-label={isExpanded ? "Close menu" : "Open contact options"}
        >
          {isExpanded ? (
            <X size={20} className="text-white" />
          ) : (
            <MessageCircle size={20} className="text-white" />
          )}
        </Button>
      </motion.div>
    </div>
  )
}
