import { MetadataRoute } from "next"
import { BAREILLY_AREAS } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://uniquerefrigerationservice.com"
  const lastModified = new Date()

  // 1. Main Landing Pages
  const mainPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/clients`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ]

  // 2. Service Specific Pages (Fridge aur Washing Machine dono hata diye gaye)
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services/ac-service-bareilly`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/ac-repair-bareilly`, lastModified, changeFrequency: "weekly", priority: 0.9 },
  ]

  // 3. Dynamic Location Pages (Mahanagar, DD Puram, etc.)
  const locationPages: MetadataRoute.Sitemap = BAREILLY_AREAS.map((area) => ({
    url: `${baseUrl}/location/${area}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [...mainPages, ...servicePages, ...locationPages]
}