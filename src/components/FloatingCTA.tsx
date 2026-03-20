"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isExpanded && (
        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/919876543210?text=Hi, I'm interested in Nick Investments."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white pl-5 pr-6 py-3 rounded-full shadow-lg whitespace-nowrap"
          >
            <MessageCircle size={20} />
            <span className="font-semibold text-sm">WhatsApp</span>
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-3 bg-[#002147] text-white pl-5 pr-6 py-3 rounded-full shadow-lg whitespace-nowrap"
          >
            <Phone size={20} />
            <span className="font-semibold text-sm">Call Now</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isExpanded
            ? "bg-red-500 hover:bg-red-600"
            : "bg-[#E67E22] hover:bg-[#d4711d]"
        }`}
      >
        {isExpanded ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>
    </div>
  );
}
