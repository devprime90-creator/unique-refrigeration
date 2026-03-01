"use client"

import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Award, Users, History, ShieldCheck, Heart, Zap, Star, MapPin } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { label: "Years Experience", value: "14+", icon: History },
    { label: "Happy Clients", value: "10k+", icon: Users },
    { label: "Verified Experts", value: "25+", icon: ShieldCheck },
    { label: "Service Areas", value: "All Bareilly", icon: MapPin },
  ]

  return (
    <main className="bg-[var(--background)] min-h-screen transition-colors duration-500">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-600/20"
          >
            <Award size={14} /> Established in 2010
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[var(--foreground)] uppercase italic leading-none mb-6">
            Our <span className="text-blue-600">Story.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-slate-500 dark:text-slate-400 font-['Hind'] text-xl md:text-2xl leading-relaxed">
            Unique Refrigeration 2010 se Bareilly के घरों में खुशियां और ठंडक पहुंचा रहा है। 
            <span className="text-[var(--foreground)] font-bold"> 14 सालों का भरोसा </span> और बेहतरीन सर्विस हमारी पहचान है।
          </p>
        </div>
      </section>

      {/* --- STATS BENTO GRID --- */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-center group hover:border-blue-600 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-4xl font-black tracking-tighter text-[var(--foreground)]">{stat.value}</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOURNEY SECTION --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/gl-1.jpg')] bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm" />
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
              A Journey of <br /><span className="text-blue-400">Excellence.</span>
            </h2>
            <div className="space-y-6 font-['Hind'] text-lg text-slate-300">
              <p>
                हमने 2010 में एक छोटे से विजन के साथ शुरुआत की थी: "Bareilly के हर घर को बेहतरीन और ईमानदार रिपेयरिंग सर्विस देना।"
              </p>
              <p>
                आज, 14 साल बाद, Unique Refrigeration सिर्फ एक नाम नहीं, बल्कि भरोसा है। हमने हज़ारों AC, Fridge और Washing Machines को ठीक किया है, और हमेशा क्वालिटी को सबसे ऊपर रखा है।
              </p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <span className="font-black uppercase tracking-widest text-xs">Top Rated in Bareilly</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl">
            <Image 
              src="/images/gl-5.jpg" // Use your actual shop or work photo
              alt="Our Workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter">Why People Trust Us</h2>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
             <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center"><ShieldCheck size={32}/></div>
             <h3 className="text-2xl font-black uppercase italic tracking-tighter">Honest Pricing</h3>
             <p className="font-['Hind'] text-slate-500 dark:text-slate-400">हमारा रेट कार्ड फिक्स है। कोई छुपा हुआ चार्ज नहीं, कोई धोखा नहीं।</p>
          </div>
          <div className="space-y-4">
             <div className="w-16 h-16 rounded-3xl bg-blue-500/10 text-blue-500 flex items-center justify-center"><Zap size={32}/></div>
             <h3 className="text-2xl font-black uppercase italic tracking-tighter">Super Fast</h3>
             <p className="font-['Hind'] text-slate-500 dark:text-slate-400">Bareilly में कहीं भी हों, हमारी टीम 30-60 मिनट में आपके पास होगी।</p>
          </div>
          <div className="space-y-4">
             <div className="w-16 h-16 rounded-3xl bg-pink-500/10 text-pink-500 flex items-center justify-center"><Heart size={32}/></div>
             <h3 className="text-2xl font-black uppercase italic tracking-tighter">90-Day Warranty</h3>
             <p className="font-['Hind'] text-slate-500 dark:text-slate-400">काम की पूरी गारंटी। अगर 90 दिन में कोई दिक्कत आए, तो हम फ्री में ठीक करेंगे।</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}