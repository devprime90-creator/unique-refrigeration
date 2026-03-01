"use client"

import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Wrench, Settings, Droplets, PhoneCall, CheckCircle2, Zap, ShieldCheck, BadgeIndianRupee, MousePointer2 } from "lucide-react"
import Image from "next/image"

export default function WashingMachinePage() {
  const proPoints = [
    { title: "Top Load Repair", desc: "Expert Fixing", icon: Settings },
    { title: "Front Load Fix", desc: "Drum & Motor", icon: Zap },
    { title: "Semi Automatic", desc: "Cheap Service", icon: Droplets },
    { title: "PCB Repair", desc: "Digital Specialist", icon: Wrench }
  ]

  return (
    <main className="bg-[var(--background)] min-h-screen selection:bg-emerald-500 selection:text-white transition-colors duration-500">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Modern Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* --- MODERN FLOATING IMAGE SIDE (LEFT) --- */}
            <div className="relative order-2 lg:order-1 group">
              {/* Background Backdrop Shape */}
              <motion.div 
                 animate={{ rotate: [-2, 2, -2], scale: [1, 1.02, 1] }}
                 transition={{ duration: 6, repeat: Infinity }}
                 className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-600/10 rounded-[4rem] blur-2xl -z-10" 
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                transition={{ 
                  opacity: { duration: 0.5 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative aspect-square w-full max-w-[550px] mx-auto rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/20 bg-slate-100 dark:bg-slate-900/50 backdrop-blur-sm"
              >
                <Image 
                  src="/images/washing_machine.jpeg" 
                  alt="Cheap washing machine repair in Bareilly" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Glassmorphism Overlay Badge */}
                <div className="absolute bottom-8 left-8 right-8 p-5 backdrop-blur-xl bg-emerald-900/40 border border-white/20 rounded-[2rem] z-20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                        <Droplets size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-emerald-200 uppercase tracking-widest leading-none">Status</p>
                        <p className="text-white font-bold text-sm italic">Ready to Fix</p>
                      </div>
                    </div>
                    <MousePointer2 className="text-white/50" size={24} />
                  </div>
                </div>
              </motion.div>

              {/* Top Floating Mini Card */}
              <motion.div 
                 animate={{ x: [0, 10, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute -top-6 -right-2 bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-xl border border-slate-100 dark:border-white/5 z-30"
              >
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black">
                     <ShieldCheck size={20} />
                   </div>
                   <p className="text-[10px] font-black leading-tight uppercase tracking-tight text-slate-500 dark:text-slate-300">Verified<br/>Mechanic</p>
                </div>
              </motion.div>
            </div>

            {/* Content Side (Right) */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/10 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-600/20 shadow-sm"
                >
                  <BadgeIndianRupee size={12} fill="currentColor" /> Low Cost Repairing in Bareilly
                </motion.div>
                
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[var(--foreground)] leading-[0.85] uppercase italic">
                  Laundry <br /><span className="text-emerald-500">Master.</span>
                </h1>
                
                <p className="text-slate-500 dark:text-slate-400 font-['Hind'] text-xl max-w-lg leading-relaxed">
                  मशीन शोर कर रही है या कपड़े साफ नहीं हो रहे? Bareilly के सबसे <span className="text-emerald-500 font-bold underline underline-offset-8 decoration-emerald-500/30">Cheap Washing Machine Mechanic</span> को अभी घर बुलाएं।
                </p>
              </div>

              {/* Bento Grid Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {proPoints.map((p, i) => (
                  <div key={i} className="p-5 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 group hover:border-emerald-500 transition-all duration-300">
                    <p className="text-xl font-black tracking-tighter text-[var(--foreground)] uppercase italic leading-none mb-1 group-hover:text-emerald-500 transition-colors">{p.title}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={`https://wa.me/${COMPANY.whatsapp}`} className="flex-1 text-center py-6 bg-emerald-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl shadow-emerald-600/30 hover:bg-emerald-700 transition-all active:scale-95">Instant Booking</a>
                <a href={`tel:${COMPANY.phone}`} className="px-10 py-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[var(--foreground)] rounded-[2.5rem] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/10 transition-all"><PhoneCall size={18}/> Call</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SEO PROMISE SECTION --- */}
      <section className="py-20 bg-slate-50 dark:bg-white/[0.01] border-y border-slate-200 dark:border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-none">
              Looking for <span className="text-emerald-600">Cheap Washing Machine Repair</span> in Bareilly?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-['Hind'] text-lg leading-relaxed">
              Unique Refrigeration लाया है Bareilly में सबसे <span className="font-bold text-[var(--foreground)] italic underline decoration-emerald-500">Low Cost Laundry Service</span>। 
              चाहे Samsung हो, LG, IFB या Whirlpool - हम हर ब्रांड के एक्सपर्ट हैं।
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
               <div className="text-center">
                  <p className="text-4xl font-black text-emerald-600 leading-none">₹249</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">Starting Price</p>
               </div>
               <div className="hidden md:block w-px h-16 bg-slate-200 dark:bg-white/10" />
               <div className="text-center">
                  <p className="text-4xl font-black text-emerald-600 leading-none italic uppercase">30 Min</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3">Fast Arrival</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}