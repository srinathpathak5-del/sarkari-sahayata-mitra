// File location: app/robots.ts
// Tells search engines they can crawl the site, and points to the sitemap

import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sahayatamitra.com/sitemap.xml',
  }
}