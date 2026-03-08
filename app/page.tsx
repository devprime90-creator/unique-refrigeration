import Hero from "@/components/hero"
import Services from "@/components/services"
import LocalSEO from "@/components/local-seo"
import Features from "@/components/features"
import Reviews from "@/components/reviews"
import Faq from "@/components/faq"
import type { Metadata } from "next"

// Isse Google Search mein "Best AC Repair in Bareilly" top par dikhega
export const metadata: Metadata = {
  title: "Best AC & Fridge Repair in Bareilly | Doorstep Service",
  description: "Get expert AC repair in Bareilly within 60 minutes. Trusted technicians for AC service, gas filling, and fridge repair at your doorstep.",
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* 1. First Impression & Primary Keyword */}
      <Hero />
      
      {/* 2. Services offered (Important for keywords like Fridge Repair, AC Service) */}
      <Services />

      {/* 3. Why Choose Us (Trust Building) */}
      <Features />

      {/* 4. Social Proof (Google Reviews/Testimonials) */}
      <Reviews />

      {/* 5. Addressing Customer Doubts (Good for Long-tail SEO) */}
      <Faq />

      {/* 6. Geo-Targeting (Bareilly ke areas/neighborhoods cover karne ke liye) */}
      <LocalSEO />
    </main>
  )
}