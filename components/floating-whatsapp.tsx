"use client"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { COMPANY } from "@/lib/constants"

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={COMPANY.whatsappLink}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center pulse-glow"
    >
      <MessageCircle size={28} />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
    </motion.a>
  )
}