import { MetadataRoute } from 'next'
import { BAREILLY_AREAS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  // Naya Domain yahan set kar diya hai
  const baseUrl = 'https://uniquerefrigerationservice.com'

  // 1. Core Business Pages
  const mainPages = [
    {
      url: baseUrl, // Home
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/gallery`, // Work Portfolio
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients`, // Trust & Reviews
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`, // Lead Generation
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`, // Brand Story
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // 2. High-Value Service Pages (Money Pages)
  const servicePages = [
    {
      url: `${baseUrl}/services/ac-repair-bareilly`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/fridge-repair-bareilly`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/washing-machine-service`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
  ]

  // 3. Local SEO Landing Pages (Area Specific)
  // BAREILLY_AREAS se automatic pages generate honge
  const locationPages = BAREILLY_AREAS.map((slug) => ({
    url: `${baseUrl}/location/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Sabko combine karke return kar rahe hain
  return [...mainPages, ...servicePages, ...locationPages]
}
