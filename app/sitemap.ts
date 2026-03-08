import { MetadataRoute } from "next"
import { BAREILLY_AREAS } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
<<<<<<< HEAD
  const baseUrl = "https://uniquerefrigerationservice.com"
  const lastModified = new Date()
=======
  // Naya Domain yahan set kar diya hai
  const baseUrl = 'https://uniquerefrigerationservice.com'
>>>>>>> 4639e41ca0dd6b4467e15dc70083f24e219f6e23

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

<<<<<<< HEAD
  // YE RAHA LOCATION SLUG LOGIC
  const locationPages: MetadataRoute.Sitemap = BAREILLY_AREAS.map((area) => ({
    url: `${baseUrl}/location/${area}`, // Agar folder 'area' hai toh yahan 'area' kar dena
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

=======
  // 3. Local SEO Landing Pages (Area Specific)
  // BAREILLY_AREAS se automatic pages generate honge
  const locationPages = BAREILLY_AREAS.map((slug) => ({
    url: `${baseUrl}/location/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Sabko combine karke return kar rahe hain
>>>>>>> 4639e41ca0dd6b4467e15dc70083f24e219f6e23
  return [...mainPages, ...servicePages, ...locationPages]
}
