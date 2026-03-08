"use client"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Snowflake, Wind, ShieldCheck, CheckCircle2, PhoneCall, Star, Tag, MousePointer2 } from "lucide-react"
import Image from "next/image"

export default function ACRepairClient() {
  const points = [
    { title: "Split & Window", desc: "Expert AC Repairing" },
    { title: "Jet Cleaning", desc: "Deep Cleaning Service" },
    { title: "Gas Charging", desc: "Eco-friendly R32/R410" },
    { title: "PCB Repair", desc: "All Brand Electronic Support" },
    { title: "Instant Visit", desc: "30 Min Bareilly Arrival" },
    { title: "Fixed Price", desc: "No Hidden Service Costs" }
  ]

  return (
    <main className="bg-[var(--background)] min-h-screen transition-colors duration-500 selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] rounded-full -z-10" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-600/20 shadow-sm"
              >
                <Tag size={12} fill="currentColor" /> Best AC Repair Service in Bareilly
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[var(--foreground)] leading-[0.85] uppercase italic">
                AC Repair <br /><span className="text-blue-600">Experts.</span>
              </h1>
              
              <p className="text-slate-500 dark:text-slate-400 font-['Hind'] text-xl max-w-lg leading-relaxed">
                Bareilly की गर्मी में 30 मिनट में राहत! Get <b>Expert AC Repairing in Bareilly</b> for all major brands. 90 days warranty on every repair.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 group hover:border-blue-500 transition-all">
                <p className="text-2xl font-black text-blue-600 tracking-tighter italic">₹299</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Visit Charges</p>
              </div>
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-1 text-orange-500 mb-1"><Star size={14} fill="currentColor" /> 4.9</div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">2k+ Reviews</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href={COMPANY.whatsappLink} className="px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all text-center">Request Repair</a>
              <a href={`tel:${COMPANY.phone}`} className="px-10 py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[var(--foreground)] rounded-[2rem] font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/10 transition-all"><PhoneCall size={18}/> Call Specialist</a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="relative group">
            <motion.div 
              animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/10 rounded-[4rem] blur-3xl -z-10" 
            />
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square w-full max-w-[550px] mx-auto rounded-[3.5rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl"
            >
              <Image 
                src="/images/ac-repair.png" 
                alt="Expert AC Repairing Service in Bareilly - Unique Refrigeration" 
                fill 
                className="object-cover" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SEMANTIC FEATURES SECTION --- */}
      <section className="py-24 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[var(--foreground)] italic">Our Repair <span className="text-blue-600">Solutions</span></h2>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((p, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8 }}
                className="p-8 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-white/10 flex items-center gap-6 group transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-tighter text-lg leading-none mb-1">{p.title}</h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST BANNER --- */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="p-10 rounded-[3rem] bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-600/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12"><Snowflake size={180} /></div>
            <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-2">Searching for AC Repair in Bareilly?</h4>
              <p className="text-xs font-bold text-blue-100 font-['Hind'] max-w-xl">Unique Refrigeration provides 24/7 emergency support. We fix all AC problems - from cooling issues to PCB failure.</p>
            </div>
            <div className="text-right relative z-10">
              <p className="text-4xl font-black tracking-tighter leading-none italic uppercase">Reliable <br/> Fixing</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}