"use client"

import React from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { MapPin, Phone, ShieldCheck, Clock, CheckCircle2, Star, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { COMPANY, getAreaName } from "@/lib/constants"
import Link from "next/link"

const LocationPage = () => {
  const params = useParams()
  const slug = params?.slug as string
  const areaName = slug ? getAreaName(slug) : "Bareilly"

  return (
    <main className="bg-[var(--background)] min-h-screen transition-colors duration-500">
      <Navbar />

      {/* --- SEO HERO SECTION --- */}
      <section className="pt-44 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-widest mb-8 border border-orange-500/20 shadow-sm"
            >
              <MapPin size={12} className="animate-bounce" />
              Best Repair Service in {areaName}, Bareilly
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black text-[var(--foreground)] tracking-tighter uppercase leading-[0.85] mb-10"
            >
              Expert Repair <br />
              In <span className="text-indigo-600 italic">{areaName}</span>
            </motion.h1>

            <p className="text-slate-500 dark:text-slate-400 font-['Hind'] text-xl font-bold leading-relaxed max-w-2xl mb-12">
              क्या आप {areaName} में AC या फ्रिज रिपेयर ढूंढ रहे हैं? Unique Refrigeration की टीम आपके घर सिर्फ 30 मिनट में पहुंचेगी। 
              100% ओरिजिनल पार्ट्स और पक्के बिल के साथ।
            </p>

            <div className="flex flex-wrap gap-4">
               <a href={`tel:${COMPANY.phone}`} className="px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-lg shadow-xl shadow-indigo-600/20 hover:scale-105 transition-all">
                  CALL {COMPANY.phone}
               </a>
               <Link href="/contact" className="px-10 py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[var(--foreground)] rounded-[2rem] font-black text-lg hover:bg-slate-50 transition-all">
                  BOOK ONLINE
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 bg-slate-50 dark:bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "30 Min Response", desc: `Technicians are always active near ${areaName} for fast arrival.` },
              { icon: ShieldCheck, title: "Local Warranty", desc: `On-site warranty valid across all homes in ${areaName}.` },
              { icon: Zap, title: "Emergency Fix", desc: "Available 24/7 for urgent breakdowns in your area." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEO CONTENT --- */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 text-center md:text-left">
            <h2 className="text-3xl font-black uppercase tracking-tight italic">Why we are #1 in {areaName}?</h2>
            <div className="grid gap-4">
              {[
                "Verified Experts with 10+ years experience",
                "No Hidden Charges - Fixed Price Quote",
                "Original Spare Parts with Company Warranty",
                "Expertise in Samsung, LG, Daikin, Voltas & more"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 font-bold text-sm">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  {text}
                </div>
              ))}
            </div>

            <div className="p-12 rounded-[4rem] bg-indigo-600 text-white relative overflow-hidden text-center shadow-2xl shadow-indigo-600/30">
              <Star className="mx-auto mb-6 text-orange-400 fill-orange-400" size={48} />
              <h2 className="text-4xl font-black uppercase mb-6 italic tracking-tighter">
                Need AC Repair <br /> in {areaName} Today?
              </h2>
              <a href={`tel:${COMPANY.phone}`} className="inline-block px-12 py-6 bg-white text-indigo-600 rounded-full font-black text-xl hover:scale-105 transition-all">
                 CALL NOW: {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default LocationPage