"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

const WHATSAPP_NUMBER = "917904154527"
const WHATSAPP_MESSAGE = "Hi Lumora Tech! I'm interested in your services. Can you help me?"

export function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setIsTooltipVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  // Auto-hide tooltip after 8 seconds
  useEffect(() => {
    if (isTooltipVisible && !isDismissed) {
      const timer = setTimeout(() => {
        setIsTooltipVisible(false)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [isTooltipVisible, isDismissed])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  if (!mounted) return null

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-[999] flex flex-col items-end gap-3">
      {/* Tooltip / Chat Bubble */}
      {isTooltipVisible && !isDismissed && (
        <div
          className="relative bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl rounded-br-sm shadow-2xl shadow-black/20 px-4 py-3 max-w-[220px] sm:max-w-[260px] animate-in fade-in-0 slide-in-from-bottom-2 duration-300"
          style={{
            border: "1px solid rgba(139, 92, 246, 0.2)",
          }}
        >
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute -top-2 -left-2 w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3 text-gray-500" />
          </button>
          <p className="text-sm leading-relaxed">
            👋 Hi there! Need help with your project? Chat with us on WhatsApp!
          </p>
        </div>
      )}

      {/* WhatsApp FAB */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
        }}
        onMouseEnter={() => {
          if (!isDismissed) setIsTooltipVisible(true)
        }}
      >
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-green-400" />
        {/* Outer glow ring */}
        <span
          className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(37,211,102,0.3), rgba(18,140,126,0.3))",
            filter: "blur(8px)",
          }}
        />

        {/* WhatsApp SVG Icon */}
        <svg
          className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
