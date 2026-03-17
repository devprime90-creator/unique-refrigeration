import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // In folders ko crawl karne ki zarurat nahi hoti
      disallow: [
        '/private/',
        '/api/',      // Agar aapne koi API routes banaye hain
        '/_next/',     // Next.js internal files
        '/admin/',    // Agar koi admin panel hai
      ],
    },
    sitemap: 'https://uniquerefrigerationservice.com/sitemap.xml',
    host: 'https://uniquerefrigerationservice.com', // Google ko main domain batane ke liye
  }
}