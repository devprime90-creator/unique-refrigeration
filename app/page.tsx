import Hero from "@/components/hero"
import Services from "@/components/services"
import LocalSEO from "@/components/local-seo"
import Features from "@/components/features"
import Reviews from "@/components/reviews"
import Faq from "@/components/faq"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Features />
      <Reviews />
      <Faq />
      <LocalSEO />
    </div>
  )
}