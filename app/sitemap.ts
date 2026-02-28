import { MetadataRoute } from 'next'
import { BAREILLY_AREAS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uniquerefrigeration.com' // Domain confirmed

  // 1. Static Pages (Main pages)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]

  // 2. Dynamic Location Pages (SEO Boost for Bareilly Areas)
  // Ye loop aapke constants se saare areas (like civil-lines) uthayega
  const locationPages = BAREILLY_AREAS.map((slug) => ({
    url: `${baseUrl}/location/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...locationPages]
}