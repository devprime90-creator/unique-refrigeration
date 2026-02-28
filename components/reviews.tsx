"use client"
import { motion } from "framer-motion" // Fix: Changed from 'motion/react'
import { Star, Quote, CheckCircle2, User, ArrowUpRight } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    area: "Civil Lines, Bareilly",
    rating: 5,
    hindi: "मेरा AC रात को खराब हुआ था, टीम 30 मिनट में आ गयी।",
    text: "Mera AC raat ko kharab hua tha, Unique Refrigeration ki team 30 mins mein aa gayi. Very fast service!",
    english: "Technicians were professional and knew exactly what was wrong. Highly recommended.",
    color: "bg-indigo-600"
  },
  {
    name: "Priya Sharma",
    area: "Rajendra Nagar",
    rating: 5,
    hindi: "फ्रिज रिपेयर के लिए बेस्ट हैं ये लोग। बिल भी वाजिब था।",
    text: "Fridge repair ke liye best hain ye log. Original parts lagaye aur bill bhi reasonable tha.",
    english: "Transparent pricing and very polite behavior. Best service in Bareilly.",
    color: "bg-orange-500"
  },
  {
    name: "Amit Saxena",
    area: "Izzat Nagar",
    rating: 5,
    hindi: "डीप क्लीनिंग सर्विस बहुत बढ़िया की। AC अब नए जैसा है।",
    text: "Deep cleaning service bahut badiya ki. Mera AC ab naye jaisa cool kar raha hai. Warranty bhi mili!",
    english: "The jet pump cleaning was thorough. No hidden charges at all.",
    color: "bg-blue-600"
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden">
      
      {/* SaaS Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        
        {/* Advanced Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-indigo-600/20"
            >
              <Star size={12} fill="currentColor" />
              Bareilly's Most Trusted Service
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-[var(--foreground)] tracking-tighter uppercase leading-[0.85]">
              Real Stories <br />
              <span className="text-indigo-600 italic">Real Trust.</span>
            </h2>
          </div>

          {/* Rating Summary Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-white/5 p-8 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl flex items-center justify-between"
          >
            <div className="flex flex-col gap-2">
              <div className="flex text-orange-500">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <p className="text-2xl font-black text-[var(--foreground)]">4.9/5.0 <span className="text-sm font-bold text-slate-500">Rating</span></p>
            </div>
            <div className="h-12 w-[1px] bg-slate-200 dark:bg-white/10 hidden sm:block" />
            <div className="text-right">
              <p className="text-sm font-black text-blue-600 uppercase tracking-widest mb-1">Google Reviews</p>
              <div className="flex -space-x-3 justify-end">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800" />
                ))}
                <div className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bento Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className="relative group p-10 rounded-[3.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-2xl hover:bg-white dark:hover:bg-white/[0.05] transition-all"
            >
              <div className="absolute top-8 right-10 w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Quote size={20} fill="currentColor" />
              </div>

              <div className="relative z-10">
                <div className="flex text-orange-500 mb-8 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <h3 className="font-['Hind'] text-2xl font-black text-indigo-600 dark:text-indigo-400 mb-3 leading-tight">
                  {review.hindi}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm italic font-medium mb-4 leading-relaxed opacity-80">
                  "{review.text}"
                </p>
                
                <p className="text-slate-400 dark:text-slate-500 text-xs mb-10 font-bold uppercase tracking-wide">
                  {review.english}
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-slate-200 dark:border-white/10">
                  <div className={`w-14 h-14 rounded-[1.2rem] ${review.color} flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-current/30 group-hover:rotate-6 transition-transform`}>
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-[var(--foreground)] uppercase text-base tracking-tighter flex items-center gap-2">
                      {review.name}
                      <CheckCircle2 size={16} className="text-blue-500" fill="currentColor" />
                    </h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      {review.area}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-12"
        >
          <div className="flex items-center gap-3">
             <div className="p-3 rounded-full bg-green-500/10 text-green-600">
                <CheckCircle2 size={24} />
             </div>
             <div>
                <p className="text-sm font-black text-[var(--foreground)] uppercase tracking-tight">100% Genuine Reviews</p>
                <p className="text-xs font-bold text-slate-500 uppercase">Verified via Google</p>
             </div>
          </div>
          <div className="hidden sm:block h-10 w-[1px] bg-slate-200 dark:bg-white/10" />
          <a href="#" className="flex items-center gap-2 text-sm font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest hover:underline group">
            View All Google Reviews <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}