"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle, MessageCircle, Sparkles } from "lucide-react"

const faqs = [
  {
    question: "Visiting charges kitne hain?",
    hindi: "विजिटिंग चार्ज कितना है?",
    answer: "Hamara visiting charge ₹199 hai. Agar aap repair karwate hain, toh ye charge service amount mein adjust kar diya jayega (FREE visiting).",
    english: "Our visiting fee is ₹199. However, if you proceed with the repair, the visiting fee is waived off completely."
  },
  {
    question: "Kya repair par warranty milti hai?",
    hindi: "क्या रिपेयर पर वारंटी मिलती है?",
    answer: "Ji haan! Hum har repair par 90 dino ki service warranty aur spare parts par company ki warranty dete hain.",
    english: "Yes! We provide a 90-day service warranty on all our repairs along with standard company warranty on spare parts."
  },
  {
    question: "Kitni der mein technician ghar pahunchega?",
    hindi: "टेक्नीशियन कितनी देर में घर पहुंचेगा?",
    answer: "Bareilly ke kisi bhi area mein humari koshish rehti hai ki 30-45 minutes ke andar technician aapke doorstep par ho.",
    english: "We strive to reach any location in Bareilly within 30-45 minutes of booking confirmation."
  },
  {
    question: "Kya aap original parts use karte hain?",
    hindi: "क्या आप असली पार्ट्स इस्तेमाल करते हैं?",
    answer: "Hum sirf 100% genuine aur company-certified spare parts hi use karte hain taaki aapka appliance lambe samay tak chale.",
    english: "We exclusively use 100% genuine and company-certified spare parts to ensure the longevity of your appliances."
  },
  {
    question: "Service ke baad payment kaise karein?",
    hindi: "सर्विस के बाद पेमेंट कैसे करें?",
    answer: "Aap Cash, UPI (PhonePe, GPay, Paytm), ya Bank Transfer ke zariye payment kar sakte hain service complete hone ke baad.",
    english: "You can pay via Cash, UPI, or Bank Transfer once the service is completed to your satisfaction."
  }
]

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden">
      
      {/* Background SaaS Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Header Content */}
          <div className="lg:col-span-5 sticky top-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-orange-500/20"
            >
              <Sparkles size={12} fill="currentColor" />
              Got Questions? We Got Answers
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black text-[var(--foreground)] tracking-tighter uppercase leading-[0.85] mb-8">
              Everything <br />
              <span className="text-indigo-600 italic font-medium">You Need To Know.</span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed font-medium">
              Humne un sawalon ke jawab diye hain jo aksar Bareilly ke log humse puchte hain. 
              Agar kuch aur puchna ho toh seedha call karein.
            </p>

            <a 
              href={`https://wa.me/919639687033`}
              className="inline-flex items-center gap-4 p-6 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl group hover:border-indigo-500 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Still Confused?</p>
                <p className="text-lg font-black text-[var(--foreground)]">Chat on WhatsApp</p>
              </div>
            </a>
          </div>

          {/* RIGHT: Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`overflow-hidden rounded-[2.5rem] border transition-all duration-300 ${
                  activeIdx === idx 
                  ? "bg-white dark:bg-white/5 border-indigo-500/50 shadow-2xl shadow-indigo-500/10" 
                  : "bg-slate-50/50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10"
                }`}
              >
                <button
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                  className="w-full p-6 md:p-8 flex items-start justify-between text-left gap-4"
                >
                  <div className="flex gap-4 md:gap-6">
                    <span className={`text-xl font-black ${activeIdx === idx ? "text-indigo-600" : "text-slate-300 dark:text-slate-700"}`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-['Hind'] text-xl md:text-2xl font-black text-[var(--foreground)] leading-tight mb-1">
                        {faq.hindi}
                      </h3>
                      <p className={`text-sm font-bold uppercase tracking-tight transition-colors ${activeIdx === idx ? "text-indigo-600/70" : "text-slate-500"}`}>
                        {faq.question}
                      </p>
                    </div>
                  </div>
                  <div className={`mt-1 p-2 rounded-full transition-all ${activeIdx === idx ? "bg-indigo-600 text-white rotate-180" : "bg-slate-200 dark:bg-white/10 text-slate-500"}`}>
                    {activeIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-10 md:px-20 pb-8 space-y-4">
                        <div className="h-[1px] w-full bg-slate-200 dark:bg-white/10 mb-6" />
                        <p className="font-['Hind'] text-lg text-slate-700 dark:text-slate-200 font-bold leading-relaxed">
                          {faq.answer}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                          {faq.english}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}