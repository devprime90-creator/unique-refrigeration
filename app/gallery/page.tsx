"use client"
import { motion } from "framer-motion"
import { ExternalLink, MapPin, Sparkles, MoveUpRight, Zap } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const images = [
  { id: 1, src: "/images/gl-1.jpg", title: "AC Master Service", area: "Civil Lines", size: "lg" },
  { id: 2, src: "/images/gl-2.jpg", title: "Smart Fridge Fix", area: "DD Puram", size: "sm" },
  { id: 3, src: "/images/gl-3.jpg", title: "PCB Restoration", area: "Rajendra Nagar", size: "sm" },
  { id: 4, src: "/images/gl-4.jpg", title: "Inverter Install", area: "Model Town", size: "md" },
  { id: 5, src: "/images/gl-5.jpg", title: "Deep Jet Clean", area: "Izzat Nagar", size: "md" },
  { id: 6, src: "/images/gl-6.jpg", title: "Gas Charging", area: "Mahanagar", size: "sm" },
  { id: 7, src: "/images/gl-7.jpg", title: "Washing Machine", area: "Suresh Sharma", size: "lg" },
  { id: 8, src: "/images/gl-8.jpg", title: "Cassette AC Fix", area: "Phoenix Area", size: "sm" },
  { id: 9, src: "/images/gl-9.jpg", title: "Window Repair", area: "Subhash Nagar", size: "sm" },
  { id: 10, src: "/images/gl-10.jpg", title: "Unit Overhaul", area: "University Rd", size: "md" },
]

export default function GalleryPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen transition-colors duration-500 overflow-x-hidden">
      <Navbar />
      
      {/* --- MINIMALIST FLOATING HEADER --- */}
      <section className="pt-40 pb-16 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[9px] font-black uppercase tracking-[0.3em] mb-6 border border-indigo-600/20 shadow-sm"
          >
            <Zap size={12} className="fill-current" />
            High-Performance Repair Portfolio
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black text-[var(--foreground)] tracking-tighter uppercase leading-[0.85] mb-6"
          >
            Proof In <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-orange-500 italic">Pictures.</span>
          </motion.h1>
          <p className="text-slate-500 dark:text-slate-400 font-['Hind'] font-bold text-base max-w-lg mx-auto">
            हमने बरेली के हर कोने में बेहतरीन सर्विस दी है। यहाँ हमारे चुनिंदा 10 प्रोजेक्ट्स की लाइव झलक है।
          </p>
        </div>
      </section>

      {/* --- KINETIC MASONRY GRID --- */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {images.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`group relative rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-700 
                  ${img.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''} 
                  ${img.size === 'md' ? 'md:col-span-1 md:row-span-2' : ''}
                `}
              >
                {/* Modern Parallax Image Effect */}
                <motion.img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Glassmorphism Bottom Card (Slide Up) */}
                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <div className="p-6 bg-white/10 dark:bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                          <MapPin size={10} /> {img.area}, Bareilly
                        </p>
                        <h3 className="text-lg font-black text-white uppercase tracking-tighter leading-none">
                          {img.title}
                        </h3>
                      </div>
                      <Link 
                        href={`https://wa.me/919639687033`}
                        className="h-12 w-12 rounded-2xl bg-white text-indigo-600 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-xl"
                      >
                        <MoveUpRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Subtle ID Badge (Top Right) */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 text-white/60 text-[8px] font-black uppercase tracking-widest group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  CASE #0{img.id}
                </div>

                {/* Animated Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* --- MINIMAL CTA FOOTER --- */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-32 p-1 bg-slate-200 dark:bg-white/5 rounded-[3rem] max-w-3xl mx-auto flex items-center justify-between overflow-hidden"
          >
            <div className="px-8 flex items-center gap-4">
              <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg">
                <Sparkles size={20} />
              </div>
              <p className="text-xs font-black text-[var(--foreground)] uppercase tracking-widest hidden sm:block">
                Start your repair journey today
              </p>
            </div>
            <Link 
              href="tel:9639687033"
              className="px-8 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black text-sm hover:bg-orange-600 transition-all flex items-center gap-3 active:scale-95"
            >
              HIRE THE BEST <ExternalLink size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}