"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Phone, Mail, MapPin, MessageSquare, 
  Clock, Send, ArrowRight, Sparkles 
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { COMPANY } from "@/lib/constants"

const ContactPage = () => {
  return (
    <main className="bg-[var(--background)] min-h-screen transition-colors duration-500 selection:bg-orange-500 selection:text-white">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="pt-44 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-orange-500/20 shadow-sm"
          >
            <Sparkles size={14} />
            Available 24/7 for Emergencies
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-[var(--foreground)] tracking-tighter uppercase leading-[0.8] mb-10"
          >
            Get In <br />
            <span className="text-orange-600 italic font-medium">Touch.</span>
          </motion.h1>

          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 font-['Hind'] text-xl font-bold leading-relaxed">
            Bareilly में कहीं भी, कभी भी। हमें कॉल करें या मैसेज भेजें, हमारी टीम 30 मिनट में आपके पास होगी।
          </p>
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              {[
                { 
                  icon: Phone, 
                  title: "Call Bareilly", 
                  val: COMPANY.phone, 
                  sub: "Instant Support",
                  color: "text-indigo-600",
                  bg: "bg-indigo-600/10",
                  link: `tel:${COMPANY.phone}`
                },
                { 
                  icon: MessageSquare, 
                  title: "WhatsApp", 
                  val: "Chat Now", 
                  sub: "Get a Quick Quote",
                  color: "text-emerald-500",
                  bg: "bg-emerald-500/10",
                  link: `https://wa.me/${COMPANY.whatsapp}`
                },
                { 
                  icon: MapPin, 
                  title: "Our Workshop", 
                  val: "Opposite Ghandhi Udhyan, Civil Lines, Bareilly", 
                  sub: "Visit for complex repairs",
                  color: "text-orange-600",
                  bg: "bg-orange-600/10",
                  link: "https://maps.google.com/?q=Civil+Lines+Bareilly" 
                },
                { 
                  icon: Clock, 
                  title: "Working Hours", 
                  val: "08:00 AM - 09:00 PM", 
                  sub: "Open All 7 Days",
                  color: "text-blue-500",
                  bg: "bg-blue-500/10",
                  link: "#"
                }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-xl group transition-all hover:border-orange-500/50"
                >
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                    <h3 className="text-xl font-black text-[var(--foreground)] tracking-tight leading-tight">{item.val}</h3>
                    <p className="text-xs font-bold text-slate-500">{item.sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* RIGHT: Modern Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="lg:col-span-7 bg-white dark:bg-white/[0.03] p-10 md:p-16 rounded-[4rem] border border-slate-200 dark:border-white/10 shadow-2xl relative"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-[var(--foreground)] uppercase tracking-tighter mb-10">
                  Send a <span className="text-orange-600">Request</span>
                </h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Your Name" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 transition-colors font-bold text-[var(--foreground)]" />
                    <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 transition-colors font-bold text-[var(--foreground)]" />
                  </div>
                  <select className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 transition-colors font-bold appearance-none text-[var(--foreground)]">
                     <option className="bg-[var(--background)]">AC Repair & Service</option>
                     <option className="bg-[var(--background)]">Refrigerator Repair</option>
                     <option className="bg-[var(--background)]">Washing Machine Fix</option>
                     <option className="bg-[var(--background)]">Other Appliances</option>
                  </select>
                  <textarea rows={4} placeholder="Describe the problem (e.g. Fridge not cooling)" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 transition-colors font-bold text-[var(--foreground)]" />
                  
                  <button type="button" className="w-full py-6 bg-orange-600 text-white rounded-[2rem] font-black text-xl shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                    BOOK SERVICE NOW <ArrowRight size={24} />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      
    </main>
  )
}

export default ContactPage;