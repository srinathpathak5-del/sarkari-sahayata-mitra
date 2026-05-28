// File location: app/sitemap.ts
// Auto-generates sitemap.xml listing all pages for Google to index

import type { MetadataRoute } from 'next'
import schemesData from '../data/schemes.json'

const BASE_URL = 'https://sahayatamitra.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    '',                  // home
    '/yojanaen',
    '/loan',
    '/insurance',
    '/patrata-janch',
    '/dastavej',
    '/about',
    '/privacy-policy',
    '/terms',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  // Dynamic scheme detail pages (all 28 schemes/loans/insurance)
  const schemePages = schemesData.schemes.map((scheme: any) => ({
    url: `${BASE_URL}/yojana/${scheme.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...schemePages]
}