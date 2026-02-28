"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion"
import ModeToggle from "./mode-toggle"
import { COMPANY } from "@/lib/constants"
import { 
  Snowflake, Menu, X, Phone, Home, Info, 
  Wrench, Image as ImageIcon, Users, MessageSquare, ArrowUpRight 
} from "lucide-react"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Services", href: "#services", icon: Wrench },
  // Gallery link updated to point to the /gallery route
  { name: "Gallery", href: "/gallery", icon: ImageIcon }, 
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Contact", href: "contact", icon: MessageSquare },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const navPadding = useTransform(scrollY, [0, 50], ["20px", "10px"])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
  }, [isOpen])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-blue-600 z-[200] origin-left"
        style={{ scaleX }}
      />

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{ paddingTop: navPadding, paddingBottom: navPadding }}
        className={`fixed top-0 w-full z-[150] transition-all duration-500 px-6 md:px-12 ${
          scrolled 
          ? "bg-white/95 dark:bg-[#020617]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-sm" 
          : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2.5 group relative z-[160]">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-blue-600 p-2 rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <Snowflake className="text-white h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-slate-900 dark:text-white leading-none uppercase">
                {COMPANY.name}
              </span>
              <span className="text-[9px] font-bold text-blue-600 tracking-widest uppercase">
                Premium Service
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Clean Capsule Hover */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-white/5 p-1 rounded-full border border-slate-200 dark:border-white/10 ml-auto mr-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative px-4 py-2 flex items-center gap-2 text-[12px] font-bold text-slate-700 dark:text-slate-300 transition-all rounded-full hover:text-blue-600 dark:hover:text-blue-400 group"
              >
                <link.icon size={14} className="opacity-70 group-hover:opacity-100" />
                <span className="relative z-10">{link.name}</span>
                <motion.span 
                  className="absolute inset-0 bg-white dark:bg-white/10 border border-slate-200/50 dark:border-white/5 rounded-full shadow-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="nav-pill"
                />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 relative z-[160]">
            <ModeToggle />
            
            <a 
              href={`tel:${COMPANY.phone}`} 
              className="hidden md:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-5 py-2.5 rounded-full text-[12px] font-black hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              <Phone size={14} className="fill-current" />
              <span>BOOK NOW</span>
            </a>
            
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden h-10 w-10 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 active:scale-90 transition-all"
            >
              <AnimatePresence mode="wait">
                {isOpen ? <X size={20} key="x" /> : <Menu size={20} key="m" />}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Top Aligned */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 h-screen w-full bg-white dark:bg-[#020617] z-[140] lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 pb-10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 px-4">Menu</p>
              
              <div className="space-y-1.5">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-blue-500/30 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#0f172a] flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 dark:border-white/5">
                           <link.icon size={18} />
                        </div>
                        <span className="text-base font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight">{link.name}</span>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-blue-600 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Card for Mobile */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 space-y-4"
              >
                <div className="p-5 rounded-3xl bg-blue-50/50 dark:bg-blue-600/5 border border-blue-100 dark:border-blue-500/10">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-bold text-blue-600 uppercase mb-0.5 tracking-wider">Service Status</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Active in Bareilly</p>
                    </div>
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  </div>
                </div>

                <a 
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
                >
                  <Phone size={20} className="fill-current" />
                  CALL FOR REPAIR
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}