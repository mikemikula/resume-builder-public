import { MetadataRoute } from 'next'
import { createUrl } from '@/lib/utils/domain'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: createUrl('/sitemap.xml'),
  }
} 