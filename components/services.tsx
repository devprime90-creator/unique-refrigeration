"use client"

import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import { Wind, Snowflake, Wrench, Droplets, CheckCircle2, ArrowRight, ShieldCheck, Zap, Laptop, Tv } from "lucide-react"
import Image from "next/image"

const services = [
  { 
    title: "Split AC Repair", 
    hindi: "एसी रिपेयर",
    price: "₹299", 
    icon: Wind, 
    img: "/images/ac-repair.png", // Main PNG
    bg: "/images/gl-1.jpg",      // Gallery Background
    color: "from-blue-600 to-indigo-600",
    msg: "I need AC Repair service in Bareilly."
  },
  { 
    title: "Double Door Fridge", 
    hindi: "फ्रिज मरम्मत",
    price: "₹199", 
    icon: Snowflake, 
    img: "/images/fridge-repair.png",
    bg: "/images/gl-2.jpg",
    color: "from-cyan-500 to-blue-500",
    msg: "I need Fridge Repair service."
  },
  { 
    title: "Front Load WM", 
    hindi: "वॉशिंग मशीन",
    price: "₹249", 
    icon: Wrench, 
    img: "/images/washing_machine.png",
    bg: "/images/gl-3.jpg",
    color: "from-emerald-500 to-teal-600",
    msg: "Washing machine repair needed."
  },
  { 
    title: "Deep Jet Cleaning", 
    hindi: "एसी सर्विस",
    price: "₹499", 
    icon: Droplets, 
    img: "/images/appliance.png", 
    bg: "/images/gl-4.jpg",
    color: "from-blue-400 to-cyan-400",
    msg: "I want to book AC Jet Cleaning."
  },
  { 
    title: "Gas Refilling", 
    hindi: "गैस चार्जिंग",
    price: "Best Rate", 
    icon: Zap, 
    img: "/images/ac-repair.png", 
    bg: "/images/gl-5.jpg",
    color: "from-orange-500 to-red-500",
    msg: "I need AC/Fridge Gas refilling."
  },
  { 
    title: "Installation", 
    hindi: "फिटिंग",
    price: "₹799", 
    icon: ShieldCheck, 
    img: "/images/appliance.png", 
    bg: "/images/gl-6.jpg",
    color: "from-purple-500 to-pink-500",
    msg: "I need new AC Installation."
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--background)] relative overflow-hidden transition-colors">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-600/20"
          >
            Verified by Unique Refrigeration
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[var(--foreground)] uppercase leading-[0.9]">
            Bareilly's <span className="text-blue-600 italic">Finest</span> <br /> Repair Squad
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-['Hind'] text-lg">
             हम लाते हैं आपके पुराने अप्लायंसेज में नई जान। <span className="font-bold text-[var(--foreground)]">Fast. Affordable. Reliable.</span>
          </p>
        </div>

        {/* --- DYNAMIC MASONRY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl"
            >
              {/* Layer 1: Actual Work Image (Background) */}
              <Image 
                src={s.bg} 
                alt="Work background" 
                fill 
                className="object-cover opacity-40 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Layer 2: Transparent PNG (Floating) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 w-48 h-48 z-10 pointer-events-none group-hover:scale-110 transition-transform duration-500"
              >
                <img src={s.img} alt={s.title} className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" />
              </motion.div>

              {/* Layer 3: Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 size={10} strokeWidth={4} />
                    <span className="text-[8px] font-black uppercase tracking-widest">Verified</span>
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-1">
                  {s.title}
                </h3>
                <p className="font-['Hind'] text-slate-300 text-lg mb-6">{s.hindi}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-blue-400 tracking-tighter">{s.price}</span>
                  <a 
                    href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(s.msg)}`}
                    className="flex items-center justify-center w-14 h-14 bg-white text-black rounded-2xl hover:bg-blue-600 hover:text-white transition-all active:scale-90 shadow-xl"
                  >
                    <ArrowRight size={24} />
                  </a>
                </div>
              </div>

              {/* Subtle Icon Glow */}
              <div className="absolute -top-10 -left-10 opacity-10 group-hover:opacity-20 transition-opacity">
                 <s.icon size={200} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM PROMISE BAR --- */}
        <div className="mt-20 p-8 rounded-[3rem] bg-blue-600 flex flex-col md:flex-row justify-around items-center gap-8 text-white shadow-2xl shadow-blue-600/30">
          <div className="text-center">
            <h4 className="text-4xl font-black tracking-tighter">30 MINS</h4>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Arrival Time</p>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="text-center">
            <h4 className="text-4xl font-black tracking-tighter">90 DAYS</h4>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Full Warranty</p>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="text-center">
            <h4 className="text-4xl font-black tracking-tighter">FIXED</h4>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">No Hidden Costs</p>
          </div>
        </div>

      </div>
    </section>
  )
}