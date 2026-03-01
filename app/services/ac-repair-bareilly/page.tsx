"use client"

import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Snowflake, Wind, Zap, ShieldCheck, CheckCircle2, PhoneCall, Star, Tag, MousePointer2 } from "lucide-react"
import Image from "next/image"

export default function ACRepairPage() {
  const points = [
    { title: "Split & Window", desc: "Expert Repairing" },
    { title: "Jet Cleaning", desc: "Deep Service" },
    { title: "Gas Charging", desc: "Low Cost R32/R410" },
    { title: "PCB Repair", desc: "All Brand Support" },
    { title: "Instant Visit", desc: "30 Min Arrival" },
    { title: "Fixed Price", desc: "No Hidden Costs" }
  ]

  return (
    <main className="bg-[var(--background)] min-h-screen transition-colors duration-500 selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Cooling Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] rounded-full -z-10" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-600/20 shadow-sm"
              >
                <Tag size={12} fill="currentColor" /> Cheap & Best AC Service in Bareilly
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[var(--foreground)] leading-[0.85] uppercase italic">
                Cooling <br /><span className="text-blue-600">Experts.</span>
              </h1>
              
              <p className="text-slate-500 dark:text-slate-400 font-['Hind'] text-xl max-w-lg leading-relaxed">
                Bareilly की गर्मी में ठंडक का वादा! Get <span className="text-blue-600 font-bold underline underline-offset-8 decoration-blue-600/20">Low Cost AC Service</span> with professional jet cleaning and gas filling at your doorstep. 
              </p>
            </div>

            {/* Quick Stats Bento */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 group hover:border-blue-500 transition-all">
                <p className="text-2xl font-black text-blue-600 tracking-tighter italic">₹299</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Starting Price</p>
              </div>
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-1 text-orange-500 mb-1"><Star size={14} fill="currentColor" /> 5.0</div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Top Rated Service</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href={`https://wa.me/${COMPANY.whatsapp}`} className="px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all text-center">Book Appointment</a>
              <a href={`tel:${COMPANY.phone}`} className="px-10 py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[var(--foreground)] rounded-[2rem] font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/10 transition-all"><PhoneCall size={18}/> Call Now</a>
            </div>
          </motion.div>

          {/* --- MODERN FLOATING IMAGE SIDE (RIGHT) --- */}
          <div className="relative group">
            {/* Background Glow Shape */}
            <motion.div 
               animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
               transition={{ duration: 7, repeat: Infinity }}
               className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/10 rounded-[4rem] blur-3xl -z-10" 
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
              transition={{ 
                opacity: { duration: 0.5 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative aspect-square w-full max-w-[550px] mx-auto rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20 bg-slate-100 dark:bg-slate-900/40 backdrop-blur-sm"
            >
              <Image 
                src="/images/ac-repair.png" 
                alt="Low cost AC repair and service in Bareilly" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Glassmorphism Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-5 backdrop-blur-xl bg-blue-900/40 border border-white/20 rounded-[2rem] z-20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/40">
                      <Wind size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-200 uppercase tracking-widest leading-none">Bareilly</p>
                      <p className="text-white font-bold text-sm italic">Jet Cleaning Expert</p>
                    </div>
                  </div>
                  <MousePointer2 className="text-white/40" size={24} />
                </div>
              </div>
            </motion.div>

            {/* Top Floating Mini Card */}
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
               className="absolute -top-6 -left-4 bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-xl border border-slate-100 dark:border-white/5 z-30"
            >
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
                   <ShieldCheck size={20} />
                 </div>
                 <p className="text-[10px] font-black leading-tight uppercase tracking-tight text-slate-500 dark:text-slate-300">Fast<br/>Repair</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PREMIUM FEATURES GRID --- */}
      <section className="py-24 bg-slate-50/50 dark:bg-white/[0.01] border-y border-slate-200 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-white/10 flex items-center gap-6 group transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-tighter text-lg leading-none mb-1 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEO KEYWORD STRIP --- */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="p-10 rounded-[3rem] bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-600/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12"><Snowflake size={180} /></div>
            <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-2">Searching for Cheap AC Repair in Bareilly?</h4>
              <p className="text-xs font-bold text-blue-100 font-['Hind'] max-w-xl">Unique Refrigeration provides 24/7 doorstep AC service, window AC fixing, and split AC gas filling at the most affordable rates in Bareilly.</p>
            </div>
            <div className="text-center md:text-right relative z-10">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-2">Instant Support</p>
              <p className="text-4xl font-black tracking-tighter leading-none italic uppercase">Free Quote</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}