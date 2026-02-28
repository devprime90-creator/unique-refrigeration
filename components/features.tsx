"use client"
import { motion } from "framer-motion"
import { ShieldCheck, Clock, Award, Users, ThumbsUp, PenTool } from "lucide-react"

const features = [
  {
    title: "90 Days Warranty",
    hindi: "90 दिनों की वारंटी",
    desc: "Every repair comes with a rock-solid 90-day service warranty for your peace of mind.",
    icon: ShieldCheck,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "30 Min Arrival",
    hindi: "30 मिनट में पहुंच",
    desc: "Fastest response time in Bareilly. Our technicians reach your doorstep within 30 minutes.",
    icon: Clock,
    color: "text-indigo-600",
    bg: "bg-indigo-600/10",
  },
  {
    title: "Genuine Spare Parts",
    hindi: "असली स्पेयर पार्ट्स",
    desc: "We only use 100% original and company-certified spare parts for all appliances.",
    icon: PenTool,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Verified Experts",
    hindi: "वेरिफाइड एक्सपर्ट्स",
    desc: "Background-checked and highly experienced technicians for safe and expert repairs.",
    icon: Award,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-[var(--background)] transition-colors duration-500 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Why Choose Us
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-[var(--foreground)] tracking-tighter uppercase leading-none mb-6"
          >
            हम ही क्यों? <br />
            <span className="text-indigo-600 italic">The Best in Bareilly</span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[3rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all flex flex-col items-start text-left"
            >
              <div className={`${item.bg} ${item.color} p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={32} />
              </div>
              
              <h3 className="font-['Hind'] text-2xl font-black text-orange-600 dark:text-orange-500 mb-2">
                {item.hindi}
              </h3>
              <h4 className="text-xl font-black text-[var(--foreground)] mb-4 uppercase tracking-tight">
                {item.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all"
        >
          <div className="flex items-center gap-2 font-black text-slate-400 uppercase text-xs tracking-widest">
            <ThumbsUp size={16} /> Best Price Guaranteed
          </div>
          <div className="flex items-center gap-2 font-black text-slate-400 uppercase text-xs tracking-widest">
            <Users size={16} /> 5000+ Customers
          </div>
          <div className="flex items-center gap-2 font-black text-slate-400 uppercase text-xs tracking-widest">
            <ShieldCheck size={16} /> No Hidden Charges
          </div>
        </motion.div>
      </div>
    </section>
  )
}