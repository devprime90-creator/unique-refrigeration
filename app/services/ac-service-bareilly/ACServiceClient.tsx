"use client"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Snowflake, Wind, ShieldCheck, CheckCircle2, PhoneCall, Star, Tag } from "lucide-react"
import Image from "next/image"

export default function ACServiceClient() { // Name update
  const points = [
    { title: "Split & Window", desc: "Full AC Service & Repair" },
    { title: "Jet Cleaning", desc: "High Pressure Deep Cleaning" },
    { title: "Gas Refill", desc: "Eco-friendly R32/R410 Gas" },
    { title: "AC Installation", desc: "Safe & Precise Mounting" },
    { title: "Same Day Visit", desc: "Service within 60 Mins" },
    { title: "Low Price", desc: "Affordable & Honest Rates" }
  ]

  return (
    <main className="bg-[var(--background)] min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[130px] rounded-full -z-10" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">
                <Tag size={12} />
                #1 AC Service in Bareilly City
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-[var(--foreground)]">
                AC <br />
                <span className="text-blue-600">Service.</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xl max-w-lg font-['Hind']">
                Aapke ghar ki cooling ko fir se naya banayein. Professional <b>AC Service in Bareilly</b> for Split, Window and Inverter ACs. 
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <p className="text-2xl font-black text-blue-600">₹299</p>
                <p className="text-[10px] font-black text-slate-400 uppercase">Service Starting</p>
              </div>
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-1 text-orange-500"><Star size={14} fill="currentColor" /> 5.0</div>
                <p className="text-[10px] font-black text-slate-400 uppercase">Verified Reviews</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={COMPANY.whatsappLink} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-center shadow-lg shadow-blue-600/30">Book AC Service</a>
              <a href={`tel:${COMPANY.phone}`} className="px-10 py-5 border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center gap-2 text-[var(--foreground)] font-bold"><PhoneCall size={18} /> Call Specialist</a>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative aspect-square w-full max-w-[520px] mx-auto rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl"
            >
              <Image
                src="/images/ac-repair.png"
                alt="Professional AC Jet Cleaning Service in Bareilly"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES - Semantic H2 for SEO */}
      <section className="py-24 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="container mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[var(--foreground)]">Complete Cooling Solutions</h2>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-white/5 flex items-center gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h3 className="font-black text-lg text-[var(--foreground)]">{p.title}</h3>
                  <p className="text-xs text-slate-400">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  )
}