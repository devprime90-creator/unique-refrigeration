"use client"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import { 
  Wind, Snowflake, Zap, ShieldCheck, Clock, Wrench, 
  Droplets, ThermometerSnowflake, Settings, ArrowRight,
  CheckCircle2, Star
} from "lucide-react"

const quickServices = [
  { 
    id: "ac-repair", 
    title: "AC Repair", 
    price: "Starts ₹299", 
    icon: Wind, 
    color: "from-blue-600 to-indigo-600",
    msg: "I want to book AC Repair service in Bareilly",
    hot: true
  },
  { 
    id: "fridge", 
    title: "Fridge Fix", 
    price: "Starts ₹199", 
    icon: Snowflake, 
    color: "from-cyan-500 to-blue-500",
    msg: "I want to book Refrigerator Repair in Bareilly"
  },
  { 
    id: "ac-service", 
    title: "Deep Cleaning", 
    price: "Starts ₹499", 
    icon: Droplets, 
    color: "from-blue-400 to-cyan-400",
    msg: "I want to book AC Jet Pump Service"
  },
  { 
    id: "gas", 
    title: "Gas Filling", 
    price: "Best Rates", 
    icon: Zap, 
    color: "from-amber-500 to-orange-500",
    msg: "I need AC/Fridge Gas Filling service"
  },
  { 
    id: "wm", 
    title: "Washing Machine", 
    price: "Starts ₹249", 
    icon: Wrench, 
    color: "from-emerald-500 to-teal-500",
    msg: "I need Washing Machine Repair"
  },
  { 
    id: "installation", 
    title: "Installation", 
    price: "Starts ₹799", 
    icon: Settings, 
    color: "from-purple-500 to-indigo-500",
    msg: "I need AC/Appliance Installation"
  },
  { 
    id: "pcb", 
    title: "PCB Repair", 
    price: "Expert Fix", 
    icon: ThermometerSnowflake, 
    color: "from-rose-500 to-pink-500",
    msg: "I need Inverter AC PCB Repair"
  },
  { 
    id: "amc", 
    title: "Yearly AMC", 
    price: "Save 30%", 
    icon: Star, 
    color: "from-yellow-500 to-amber-600",
    msg: "I want to know about Yearly Maintenance Contract"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--background)] border-t border-slate-200 dark:border-white/5 transition-colors duration-500 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        
        {/* Header Section - Modern SaaS Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4"
            >
              <CheckCircle2 size={12} />
              Verified Service in Bareilly
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--foreground)] leading-tight uppercase">
              Professional <br />
              <span className="text-blue-600">Home Services</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-[11px] font-black bg-slate-100 dark:bg-white/5 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-white/10 text-[var(--foreground)] uppercase tracking-tighter">
              <Clock size={16} className="text-orange-500" /> 30 Min Arrival
            </div>
            <div className="flex items-center gap-2 text-[11px] font-black bg-slate-100 dark:bg-white/5 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-white/10 text-[var(--foreground)] uppercase tracking-tighter">
              <ShieldCheck size={16} className="text-emerald-500" /> 90 Days Warranty
            </div>
          </div>
        </div>

        {/* Services Grid - Bento Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickServices.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-white/[0.03] p-6 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Hot Tag */}
              {item.hot && (
                <div className="absolute top-6 right-6 px-3 py-1 bg-orange-500 text-white text-[9px] font-black rounded-full uppercase tracking-widest animate-pulse z-10">
                  Best Seller
                </div>
              )}

              <div>
                <div className={`bg-gradient-to-br ${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <item.icon size={28} />
                </div>
                
                <h3 className="font-black text-xl mb-1 text-[var(--foreground)] uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-black mb-8">
                  {item.price}
                </p>
              </div>

              <a 
                href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(item.msg)}`}
                className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-all rounded-2xl flex items-center justify-center text-xs font-black uppercase tracking-widest gap-2 shadow-lg active:scale-95"
              >
                Book Now
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Decorative Overlay for Dark Mode */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 rounded-[3rem] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-wrap justify-center items-center gap-12"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-blue-600 tracking-tighter">5k+</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Happy Customers</span>
          </div>
          <div className="h-10 w-[1px] bg-slate-300 dark:bg-white/10 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-blue-600 tracking-tighter">15+</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Expert Technicians</span>
          </div>
          <div className="h-10 w-[1px] bg-slate-300 dark:bg-white/10 hidden md:block" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-blue-600 tracking-tighter">100%</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Genuine Parts</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}