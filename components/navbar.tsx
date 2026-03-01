"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import ModeToggle from "./mode-toggle"
import { COMPANY } from "@/lib/constants"
import { Snowflake, Phone, ChevronDown, Wind, Snowflake as Fridge, WashingMachine, Menu, X } from "lucide-react"
import Link from "next/link"

const serviceLinks = [
  { name: "AC Repair", href: "/services/ac-repair-bareilly", icon: Wind, color: "text-blue-500" },
  { name: "Fridge Repair", href: "/services/fridge-repair-bareilly", icon: Fridge, color: "text-cyan-500" },
  { name: "Washing Machine", href: "/services/washing-machine-service", icon: WashingMachine, color: "text-emerald-500" },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false)
  const [isDesktopServiceOpen, setIsDesktopServiceOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 z-[1000] origin-left" style={{ scaleX }} />

      <header className={`fixed top-0 w-full z-[900] transition-all duration-300 border-b ${
        scrolled || isOpen 
        ? "bg-white dark:bg-slate-950 border-slate-200 dark:border-white/10 shadow-sm" 
        : "bg-transparent border-transparent"
      }`}>
        <div className="container mx-auto px-5 h-16 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 z-[1000]">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Snowflake className="text-white h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                {COMPANY.name}
              </span>
              <span className="text-[10px] text-blue-600 font-bold leading-none tracking-widest">PREMIUM</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[13px] font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-600 transition-all group-hover:w-full" />
              </Link>
            ))}

            {/* Desktop Services Dropdown */}
            <div 
              className="relative" 
              onMouseEnter={() => setIsDesktopServiceOpen(true)} 
              onMouseLeave={() => setIsDesktopServiceOpen(false)}
            >
              <button className="text-[13px] font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white flex items-center gap-1 transition-colors">
                Services <ChevronDown size={14} className={`transition-transform duration-200 ${isDesktopServiceOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isDesktopServiceOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-4 pt-4 w-52"
                  >
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl shadow-xl p-2 backdrop-blur-xl">
                      {serviceLinks.map((s) => (
                        <Link key={s.name} href={s.href} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-all group">
                          <s.icon size={16} className={`${s.color} transition-transform group-hover:scale-110`} />
                          <span className="text-[13px] text-slate-600 dark:text-slate-300 group-hover:text-blue-600">{s.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-4 w-[1px] bg-slate-200 dark:bg-white/10 mx-1" />
            <ModeToggle />
            <a href={`tel:${COMPANY.phone}`} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-[12px] font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-600/20">
              <Phone size={14} fill="currentColor" /> BOOK NOW
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-4 z-[1000]">
            <ModeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white transition-transform active:scale-90">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Solid & Clean) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
              className="fixed inset-0 top-16 bg-white dark:bg-slate-950 z-[800] lg:hidden flex flex-col p-6 border-t border-slate-100 dark:border-white/5"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="p-4 text-[14px] font-semibold text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 active:bg-blue-50 dark:active:bg-blue-900/10 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-white/5"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="my-3 border-t border-slate-100 dark:border-white/5" />

                <button 
                  onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                  className="flex items-center justify-between p-4 text-[14px] font-semibold text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  Expert Repair Services 
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileServiceOpen ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {isMobileServiceOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-50 dark:bg-white/[0.03] rounded-2xl mx-1"
                    >
                      {serviceLinks.map((s) => (
                        <Link 
                          key={s.name} 
                          href={s.href} 
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 p-4 text-[13px] font-medium text-slate-600 dark:text-slate-300 border-b border-white dark:border-white/5 last:border-0 hover:pl-6 transition-all"
                        >
                          <div className={`p-1.5 rounded-md ${s.color} bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 shadow-sm`}>
                            <s.icon size={14} />
                          </div>
                          {s.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-auto pb-10">
                <a 
                  href={`tel:${COMPANY.phone}`} 
                  className="flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-600/30 active:scale-95 transition-all"
                >
                  <Phone size={18} fill="currentColor" /> CALL CUSTOMER CARE
                </a>
                <p className="text-center text-[11px] text-slate-400 mt-5 font-medium">
                  {COMPANY.name} • Trust of Bareilly Since 2010
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}