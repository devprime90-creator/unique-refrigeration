"use client"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import { Phone, MessageSquare, ShieldCheck, Star, CheckCircle2, Zap, Clock } from "lucide-react"

const slides = [
  {
    url: "/images/ac-repair.png",
    title: "Expert AC Service",
    hindi: "एसी रिपेयर - Bareilly's Best",
    desc: "Experience 5-star cooling restoration with 90 days service warranty.",
    highlight: "Service in 60 Mins",
    color: "from-blue-600 to-cyan-500"
  },
  {
    url: "/images/fridge-repair.png", 
    title: "Fridge Specialist",
    hindi: "फ्रिज रिपेयर - घर बैठे तुरंत",
    desc: "Fixed pricing & genuine spare parts. We fix all major luxury brands.",
    highlight: "Expert Technicians",
    color: "from-orange-500 to-amber-400"
  }
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [nextSlide])

  if (!mounted) return <div className="min-h-screen bg-[var(--background)]" />

  return (
    <section className="relative min-h-[92vh] flex items-center bg-[var(--background)] pt-20 overflow-hidden">
      
      {/* --- ADVANCED BACKGROUND MESH --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[500px] bg-blue-500/10 blur-[150px] rounded-full dark:bg-blue-600/5" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[400px] bg-orange-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] dark:opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* --- LEFT: SALES COPY (7 Cols) --- */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Real-time Trust Indicator */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-green-500/10 border border-green-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-bold text-green-600 dark:text-green-400 uppercase tracking-tighter">
                Available Now in Bareilly
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h2 className="text-orange-600 dark:text-orange-500 font-bold text-xl md:text-2xl flex items-center gap-2">
                    <CheckCircle2 size={24} /> {slides[current].hindi}
                  </h2>
                  <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-[var(--foreground)] leading-[0.95]">
                    {slides[current].title.split(' ')[0]} <br />
                    <span className={`bg-gradient-to-r ${slides[current].color} bg-clip-text text-transparent`}>
                       {slides[current].title.split(' ').slice(1).join(' ')}
                    </span>
                  </h1>
                </div>
                
                <p className="text-slate-500 dark:text-slate-400 text-xl font-medium max-w-lg leading-relaxed">
                  {slides[current].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4">
               {["Verified Experts", "Fixed Rates", "Same Day Service"].map((feat) => (
                 <div key={feat} className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <ShieldCheck size={16} className="text-blue-600" /> {feat}
                 </div>
               ))}
            </div>

            {/* High-Conversion Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a 
                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${COMPANY.phone}`} 
                className="relative group overflow-hidden flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-[20px] font-bold text-lg shadow-2xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <Phone size={22} fill="currentColor" />
                Book Now: {COMPANY.phone}
              </motion.a>

              <motion.a 
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
                href={COMPANY.whatsappLink} 
                className="flex items-center justify-center gap-3 bg-white/5 border-2 border-slate-200 dark:border-white/10 text-[var(--foreground)] px-10 py-5 rounded-[20px] font-bold text-lg transition-all backdrop-blur-md"
              >
                <MessageSquare size={22} className="text-green-500" />
                WhatsApp
              </motion.a>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/5 max-w-sm">
               <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
               </div>
               <p className="text-sm font-bold text-slate-500">4.9/5 from 2k+ orders</p>
            </div>
          </div>

          {/* --- RIGHT: INTERACTIVE IMAGE (5 Cols) --- */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative rounded-[4rem] overflow-hidden shadow-[-20px_40px_80px_rgba(0,0,0,0.2)] dark:shadow-[-20px_40px_80px_rgba(0,0,0,0.5)] border-[12px] border-white dark:border-slate-900"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current].url}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full aspect-[4/5] object-cover"
                />
              </AnimatePresence>

              {/* Floating Urgency Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 left-1 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-white/10 flex items-center gap-3"
              >
                <div className="bg-orange-500 p-2 rounded-lg text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Fastest Response</p>
                  <p className="text-sm font-black text-[var(--foreground)]">60 Min Doorstep</p>
                </div>
              </motion.div>

              {/* Floating Verification Badge */}
              <div className="absolute bottom-10 -right-4 bg-blue-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2">
                 <Zap size={18} fill="currentColor" />
                 <span className="text-xs font-black uppercase tracking-widest">Verified Brand</span>
              </div>
            </motion.div>

            {/* Slide Navigation Overlay */}
            <div className="absolute bottom-10 left-10 flex gap-2">
               {slides.map((_, i) => (
                 <div key={i} className={`h-1 rounded-full transition-all duration-500 ${current === i ? 'w-12 bg-white' : 'w-4 bg-white/40'}`} />
               ))}
            </div>
          </div>

        </div>
      </div>
      
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}