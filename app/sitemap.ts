import { MetadataRoute } from "next"
import { BAREILLY_AREAS } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://uniquerefrigerationservice.com"
  const lastModified = new Date()

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/gallery`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/clients`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ]

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services/ac-service-bareilly`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/ac-repair-bareilly`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/fridge-repair-bareilly`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/washing-machine-repair`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ]

  // YE RAHA LOCATION SLUG LOGIC
  const locationPages: MetadataRoute.Sitemap = BAREILLY_AREAS.map((area) => ({
    url: `${baseUrl}/location/${area}`, // Agar folder 'area' hai toh yahan 'area' kar dena
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [...mainPages, ...servicePages, ...locationPages]
}