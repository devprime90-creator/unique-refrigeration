"use client"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Snowflake, Zap, PhoneCall, ShieldCheck, CheckCircle2, Star, Gauge, MousePointer2 } from "lucide-react"
import Image from "next/image"

export default function FridgeRepairClient() { // Name changed
  const services = [
    { title: "Single Door", desc: "Starting ₹199" },
    { title: "Double Door", desc: "Expert Refrigerator Fixing" },
    { title: "Gas Filling", desc: "Low Cost Gas Charging" },
    { title: "Compressor", desc: "Replacement with Warranty" }
  ]

  return (
    <main className="bg-[var(--background)] min-h-screen transition-colors duration-500 selection:bg-cyan-500 selection:text-white">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[130px] rounded-full -z-10" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600/10 text-cyan-600 text-[10px] font-black uppercase tracking-[0.2em] border border-cyan-600/20 shadow-sm"
              >
                <Snowflake size={12} className="animate-spin-slow" /> Low Cost Fridge Fix in Bareilly City
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[var(--foreground)] leading-[0.85] uppercase italic">
                Fridge <br /><span className="text-cyan-500">Repair.</span>
              </h1>
              
              <p className="text-slate-500 dark:text-slate-400 font-['Hind'] text-xl max-w-lg leading-relaxed">
                Kya aapka fridge thanda nahi kar raha? Bareilly mein sabse <b>Cheap Fridge Repair</b> service ab aapke ghar par. Expert technicians for all major brands.
              </p>
            </div>

            {/* Quick Bento Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 group hover:border-cyan-500 transition-all">
                <Gauge size={20} className="text-cyan-500 mb-2" />
                <p className="text-xl font-black tracking-tighter italic">LOW RATE</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Affordable Pricing</p>
              </div>
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-1 text-orange-500 mb-2"><Star size={14} fill="currentColor" /> 5.0</div>
                <p className="text-xl font-black tracking-tighter italic">RELIABLE</p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Doorstep Support</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={COMPANY.whatsappLink} className="px-10 py-5 bg-cyan-600 text-white rounded-[2rem] font-black uppercase text-xs tracking-widest shadow-xl shadow-cyan-600/30 hover:bg-cyan-700 transition-all text-center">Book Appointment</a>
              <a href={`tel:${COMPANY.phone}`} className="px-10 py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[var(--foreground)] rounded-[2rem] font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-slate-100 transition-all font-bold"><PhoneCall size={18}/> Call Specialist</a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="relative">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square w-full max-w-[550px] mx-auto rounded-[3.5rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl"
            >
              <Image 
                src="/images/fridge-repair.png" 
                alt="Expert Refrigerator Repair Service in Bareilly - Unique Refrigeration" 
                fill 
                className="object-cover" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICE GRID - Semantic H2 --- */}
      <section className="py-24 border-t border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[var(--foreground)]">Our Refrigerator Solutions</h2>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-600/10 text-cyan-600 flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-black uppercase tracking-tighter text-xl mb-1 text-[var(--foreground)]">{s.title}</h3>
                <p className="text-[10px] font-black text-cyan-600 uppercase tracking-[0.2em]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEO STRIP --- */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="p-10 rounded-[3rem] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Snowflake size={150} /></div>
            <div className="relative z-10">
              <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-2">Bareilly's Affordable Fridge Service</h4>
              <p className="text-xs text-slate-400 font-['Hind'] max-w-xl">
                Searching for <b>low cost fridge repair</b> or <b>cheap refrigerator service in Bareilly</b>? Unique Refrigeration provides on-site fixing for single/double door fridges at best rates.
              </p>
            </div>
            <div className="shrink-0 relative z-10">
                <ShieldCheck size={48} className="text-cyan-500 shadow-glow" />
            </div>
          </div>
        </div>
      </section>
     
    </main>
  )
}