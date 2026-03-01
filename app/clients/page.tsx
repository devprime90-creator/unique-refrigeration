"use client"
import { motion } from "framer-motion"
import { Users, Building2, ShieldCheck, Heart, Star, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const clients = [
  { name: "Sagar Ratna", type: "Restaurant", area: "Civil Lines" },
  { name: "Phoenix Mall", type: "Commercial", area: "Pilibhit Rd" },
  { name: "Clara Hospital", type: "Healthcare", area: "Izzat Nagar" },
  { name: "Samsung Care", type: "Brand Partner", area: "Bareilly" },
  { name: "Local Schools", type: "Institutions", area: "Multiple" },
  { name: "Retail Stores", type: "Showrooms", area: "DD Puram" },
]

export default function ClientsPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen transition-colors duration-500">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-44 pb-20 relative overflow-hidden">
        {/* Decorative Indigo Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-indigo-600/20"
          >
            <Users size={14} />
            Trusted by 5,000+ Customers
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-[var(--foreground)] tracking-tighter uppercase leading-[0.8] mb-10"
          >
            Our <br />
            <span className="text-indigo-600 italic">Partners.</span>
          </motion.h1>

          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 font-['Hind'] text-xl font-bold leading-relaxed">
            बरेली के सबसे बड़े शोरूम्स, हॉस्पिटल्स और हजारों घरों का भरोसा। हम सिर्फ रिपेयर नहीं, रिश्ते बनाते हैं।
          </p>
        </div>
      </section>

      {/* --- BENTO TRUST GRID --- */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-[3rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 flex items-center justify-center mb-6 shadow-xl group-hover:rotate-6 transition-transform">
                   <Building2 className="text-indigo-600" size={32} />
                </div>
                
                <h3 className="text-2xl font-black text-[var(--foreground)] uppercase tracking-tight mb-2">
                  {client.name}
                </h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-indigo-600/10 text-indigo-600 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4">
                  {client.type}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-bold flex items-center gap-2">
                  <Star size={14} className="text-orange-500 fill-orange-500" />
                  Service Location: {client.area}
                </p>
              </motion.div>
            ))}
          </div>

          {/* --- LARGE STATS BANNER --- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 p-12 md:p-20 rounded-[4rem] bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full" />
            
            <div className="text-left space-y-4 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none italic">
                Bareilly's <br /> 
                <span className="text-indigo-500 underline decoration-indigo-500/30">Top Choice.</span>
              </h2>
              <p className="text-slate-400 dark:text-slate-600 font-['Hind'] text-lg font-bold">
                Join our list of satisfied corporate and residential clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 relative z-10">
              <div className="flex flex-col">
                <span className="text-5xl font-black tracking-tighter">10+</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Years Exp.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-black tracking-tighter">5k+</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Happy Homes</span>
              </div>
            </div>
          </motion.div>

          {/* --- CTA BUTTON --- */}
          <div className="mt-20 flex justify-center">
            <Link 
              href="tel:9639687033"
              className="group flex items-center gap-4 px-12 py-6 bg-indigo-600 text-white rounded-full font-black text-xl hover:bg-orange-600 transition-all shadow-2xl shadow-indigo-600/30 active:scale-95"
            >
              BECOME OUR NEXT CLIENT
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}