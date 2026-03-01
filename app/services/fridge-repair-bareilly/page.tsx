"use client"

import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Snowflake, Zap, PhoneCall, ShieldCheck, CheckCircle2, Star, Gauge, MousePointer2 } from "lucide-react"
import Image from "next/image"

export default function FridgeRepairPage() {
  const services = [
    { title: "Single Door", desc: "Starting ₹199" },
    { title: "Double Door", desc: "Expert Fixing" },
    { title: "Gas Filling", desc: "Low Cost Guarantee" },
    { title: "Compressor", desc: "90 Days Warranty" }
  ]

  return (
    <main className="bg-[var(--background)] min-h-screen transition-colors duration-500 selection:bg-cyan-500 selection:text-white">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Cooling Glow Effects */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[130px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600/10 text-cyan-600 text-[10px] font-black uppercase tracking-[0.2em] border border-cyan-600/20"
              >
                <Snowflake size={12} className="animate-spin-slow" /> Low Cost Fridge Fix in Bareilly
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[var(--foreground)] leading-[0.85] uppercase italic">
                Cooling <br /><span className="text-cyan-500">Restored.</span>
              </h1>
              
              <p className="text-slate-500 dark:text-slate-400 font-['Hind'] text-xl max-w-lg leading-relaxed">
                क्या आपका फ्रिज ठंडा नहीं कर रहा? बेयरली में सबसे <span className="text-cyan-600 font-bold">Cheap Fridge Repair</span> सर्विस अब आपके घर पर। Samsung, LG, Whirlpool - हम सब ठीक करते हैं।
              </p>
            </div>

            {/* Quick Bento Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 group hover:border-cyan-500 transition-all">
                <Gauge size={20} className="text-cyan-500 mb-2" />
                <p className="text-xl font-black tracking-tighter italic">BEST RATE</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">No Hidden Charges</p>
              </div>
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-1 text-orange-500 mb-2"><Star size={14} fill="currentColor" /> 5.0</div>
                <p className="text-xl font-black tracking-tighter italic">FASTEST</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">30 Min Arrival</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={`https://wa.me/${COMPANY.whatsapp}`} className="px-10 py-5 bg-cyan-600 text-white rounded-[2rem] font-black uppercase text-xs tracking-widest shadow-xl shadow-cyan-600/30 hover:bg-cyan-700 transition-all text-center">Book Repair</a>
              <a href={`tel:${COMPANY.phone}`} className="px-10 py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[var(--foreground)] rounded-[2rem] font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-white/10 transition-all"><PhoneCall size={18}/> Call</a>
            </div>
          </motion.div>

          {/* --- MODERN FLOATING IMAGE SIDE --- */}
          <div className="relative">
            {/* Background Shape / Backdrop */}
            <motion.div 
               animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
               transition={{ duration: 8, repeat: Infinity }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-gradient-to-br from-cyan-500/20 to-blue-600/10 rounded-[4rem] blur-2xl -z-10" 
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
              transition={{ 
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative aspect-square w-full max-w-[550px] mx-auto rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/20 bg-slate-100 dark:bg-slate-900"
            >
              <Image 
                src="/images/fridge-repair.png" 
                alt="Cheap refrigerator repair service in Bareilly" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-110 grayscale-[0.2] hover:grayscale-0" 
              />
              
              {/* Floating Badge inside Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl z-20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Doorstep Service</p>
                    <p className="text-white font-bold text-sm leading-tight italic">Bareilly's Trusted Techs</p>
                  </div>
                  <div className="bg-cyan-500 p-2 rounded-xl text-white shadow-lg">
                    <MousePointer2 size={20} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Extra Decorative Element */}
            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 3, repeat: Infinity, delay: 1 }}
               className="absolute -top-10 -right-4 bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-xl border border-slate-100 dark:border-white/5 z-30"
            >
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-black">₹</div>
                 <p className="text-[10px] font-black leading-tight uppercase tracking-tight text-[var(--foreground)]">Budget<br/>Friendly</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- SERVICE GRID --- */}
      <section className="py-24 border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/10 text-cyan-600 flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-black uppercase tracking-tighter text-xl mb-1">{s.title}</h3>
                <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.2em]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEO FOOTER STRIP --- */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="p-10 rounded-[3rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Snowflake size={150} /></div>
            <div className="relative z-10">
              <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-2">Bareilly's Most Affordable Fridge Service</h4>
              <p className="text-xs text-slate-400 font-['Hind'] max-w-xl">
                Looking for **low cost fridge repair** or **cheap refrigerator service in Bareilly**? Unique Refrigeration provides 24/7 doorstep fixing for all brands at the best market rates.
              </p>
            </div>
            <div className="shrink-0 relative z-10">
                <ShieldCheck size={48} className="text-cyan-500" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}