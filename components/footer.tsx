"use client"

import { COMPANY } from "@/lib/constants"
import { 
  Snowflake, Phone, MapPin, 
  Instagram, Facebook, Youtube, ArrowUpRight, 
  Heart, ShieldCheck 
} from "lucide-react"
import Link from "next/link"

const footerLinks = [
  { name: "AC Repair", href: "/services/ac-repair-bareilly" },
  { name: "Fridge Fix", href: "/services/fridge-repair-bareilly" },
  { name: "Washing Machine", href: "/services/washing-machine-service" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white dark:bg-[#020617] pt-24 pb-12 border-t border-slate-200 dark:border-white/5 transition-colors duration-500 relative">
      
      {/* SaaS Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* COLUMN 1: Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-blue-600 p-2.5 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                <Snowflake className="text-white h-6 w-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
                {COMPANY.name}
              </span>
            </Link>
            
            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-sm font-['Hind'] text-lg">
              बरेली का नंबर 1 कूलिंग और रिपेयरिंग सेंटर। 2010 से आपकी सेवा में हाज़िर।
            </p>

            <div className="flex gap-4">
              {[
                { icon: Facebook, color: "hover:bg-blue-600" },
                { icon: Instagram, color: "hover:bg-pink-600" },
                { icon: Youtube, color: "hover:bg-red-600" }
              ].map((social, i) => (
                <a key={i} href="#" className={`w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-all ${social.color} hover:text-white hover:-translate-y-1 shadow-sm`}>
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">Navigation</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-600 dark:text-slate-400 font-bold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Contact Info */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-orange-600 dark:text-orange-400">Contact</h4>
            <div className="space-y-6">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Call Now</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white">{COMPANY.phone}</p>
                </div>
              </a>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-orange-600/10 flex items-center justify-center text-orange-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Workshop</p>
                  <p className="text-sm font-black text-slate-900 dark:text-white font-['Hind']">Civil Lines, Bareilly</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 4: Trust Badge */}
          <div className="lg:col-span-3">
             <div className="p-8 rounded-[2.5rem] bg-indigo-600 text-white shadow-2xl relative overflow-hidden group">
                <ShieldCheck className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-80">Certified</h4>
                <p className="text-xl font-black uppercase italic leading-tight">100% Genuine Parts</p>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-black bg-white/20 w-fit px-3 py-1 rounded-full uppercase">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Verified Team
                </div>
             </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            © 2026 {COMPANY.name}.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
            Built with <Heart size={14} className="text-red-500 fill-red-500 animate-bounce" /> for Bareilly
          </div>
          <button onClick={scrollToTop} className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
            <ArrowUpRight className="-rotate-45" size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}