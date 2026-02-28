"use client"
import { motion } from "framer-motion"
import { BAREILLY_AREAS, COMPANY } from "@/lib/constants"
import { MapPin, Phone, Zap, Clock, ShieldCheck, Heart } from "lucide-react"

export default function LocalSEO() {
  return (
    <section id="location" className="py-24 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden">
      
      {/* SaaS Decorative Glows - Indigo & Orange Mix */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] -z-10 rounded-full dark:bg-indigo-500/5" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 blur-[120px] -z-10 rounded-full dark:bg-orange-500/5" />

      <div className="container mx-auto px-6">
        {/* Main Glass Bento Container */}
        <div className="relative overflow-hidden rounded-[3.5rem] border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] p-8 md:p-16 shadow-2xl transition-all backdrop-blur-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content: Text & Areas */}
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-widest mb-8 border border-orange-500/20 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                बरेली की अपनी भरोसेमंद सर्विस
              </motion.div>

              <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-[var(--foreground)] leading-[0.85] uppercase">
                Fast Service In <br />
                <span className="text-indigo-600 dark:text-indigo-400 italic">Every Corner</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed font-medium max-w-lg">
                <span className="font-['Hind'] text-xl block mb-2 font-bold text-slate-800 dark:text-slate-200">
                  हम बरेली के हर मोहल्ले में 30 मिनट के अंदर पहुंचते हैं।
                </span>
                Experience the premium quality repair at your doorstep with 100% genuine parts and on-site warranty.
              </p>

              {/* Area Tags - Indigo Chips */}
              <div className="flex flex-wrap gap-3 max-h-[300px] overflow-y-auto no-scrollbar pr-2 pt-2">
                {BAREILLY_AREAS.map((area, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.02 }}
                    whileHover={{ y: -3, backgroundColor: 'rgba(79, 70, 229, 0.1)' }}
                    className="px-5 py-2.5 bg-white dark:bg-white/5 rounded-2xl text-[13px] font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 flex items-center gap-2 shadow-sm transition-all hover:border-indigo-500/30 group"
                  >
                    <MapPin size={14} className="text-indigo-600 dark:text-indigo-400 group-hover:animate-bounce" /> 
                    <span className="font-['Hind']">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Card: Indigo & Orange Emergency Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-indigo-600 blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity rounded-full" />
              
              <div className="relative p-10 md:p-14 rounded-[3rem] bg-white dark:bg-slate-950 border-4 border-slate-100 dark:border-white/5 text-center shadow-2xl transition-all">
                <div className="w-24 h-24 rounded-3xl bg-orange-600/10 flex items-center justify-center mx-auto mb-8 text-orange-600 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Zap size={48} className="fill-orange-600 animate-pulse" />
                </div>
                
                <h3 className="font-['Hind'] text-3xl font-black mb-2 text-slate-900 dark:text-white uppercase tracking-tighter">
                  इमरजेंसी रिपेयर?
                </h3>
                <h3 className="text-2xl font-black mb-6 text-indigo-600 dark:text-indigo-400 uppercase tracking-tighter italic">
                  Urgent Support
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium leading-relaxed italic">
                   Hamari experts team 24/7 available hai urgent breakdown ke liye.
                </p>
                
                <div className="space-y-5">
                  <a 
                    href={`tel:${COMPANY.phone}`}
                    className="flex items-center justify-center gap-4 w-full py-7 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2rem] font-black text-2xl shadow-2xl shadow-indigo-600/30 transition-all active:scale-95 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <Phone size={28} className="group-hover:rotate-12 transition-transform fill-current" />
                    {COMPANY.phone}
                  </a>
                  
                  <div className="flex items-center justify-center gap-8 pt-8 border-t border-slate-100 dark:border-white/5">
                    <div className="flex flex-col items-center gap-1">
                       <Clock size={18} className="text-orange-500" />
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">30m Response</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <ShieldCheck size={18} className="text-indigo-500" />
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Expert Fix</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                       <Heart size={18} className="text-red-500" />
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trusted</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}