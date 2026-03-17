"use client"
import { motion } from "framer-motion"
import { COMPANY } from "@/lib/constants"
import { Snowflake, Wind, ShieldCheck, CheckCircle2, PhoneCall, Star, Tag } from "lucide-react"
import Image from "next/image"

export default function ACServiceClient() {
  const points = [
    { title: "Split & Window", desc: "Full AC Service & Repair" },
    { title: "Jet Cleaning", desc: "High Pressure Deep Cleaning" },
    { title: "Gas Refill", desc: "Eco-friendly R32/R410 Gas" },
    { title: "AC Installation", desc: "Safe & Precise Mounting" },
    { title: "Same Day Visit", desc: "Service within 60 Mins" },
    { title: "Low Price", desc: "Affordable & Honest Rates" }
  ]

  // ✅ SEO: Service Schema (Google ko price aur service type batane ke liye)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional AC Service in Bareilly",
    "serviceType": "Air Conditioning Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bareilly",
        "addressRegion": "UP"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "299.00",
      "priceCurrency": "INR"
    }
  };

  return (
    <main className="bg-[var(--background)] min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

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
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-[var(--foreground)] uppercase">
                AC <br />
                <span className="text-blue-600 italic">Service.</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xl max-w-lg font-['Hind'] leading-relaxed">
                Aapke ghar ki cooling ko fir se naya banayein. Professional <b>AC Service in Bareilly</b> for Split, Window and Inverter ACs. 
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm">
                <p className="text-2xl font-black text-blue-600 italic">₹299</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Starting</p>
              </div>
              <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-1 text-orange-500 mb-1"><Star size={14} fill="currentColor" /> 5.0</div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Reviews</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href={COMPANY.whatsappLink} className="px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all text-center">Book AC Service</a>
              <a href={`tel:${COMPANY.phone}`} className="px-10 py-5 border border-slate-200 dark:border-white/10 rounded-[2rem] flex items-center justify-center gap-2 text-[var(--foreground)] font-black uppercase text-xs tracking-widest hover:bg-slate-50 dark:hover:bg-white/5 transition-all"><PhoneCall size={18} /> Call Specialist</a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="relative group">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square w-full max-w-[520px] mx-auto rounded-[3.5rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl"
            >
              <Image
                src="/images/ac-repair.png"
                alt="Professional AC Jet Cleaning Service in Bareilly - Unique Refrigeration"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[var(--foreground)] italic">Complete <span className="text-blue-600">Cooling Solutions</span></h2>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-white/10 flex items-center gap-6 group transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase tracking-tighter text-[var(--foreground)] leading-none mb-1">{p.title}</h3>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}