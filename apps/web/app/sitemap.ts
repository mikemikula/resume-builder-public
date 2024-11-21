import { MetadataRoute } from 'next'
import { resumeConfig } from '@/config'
import { getDomainString } from '@/lib/utils/domain'

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

interface SectionConfig {
  id: string
  short: string
  label: string
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getDomainString()
  const changeFreq: ChangeFrequency = 'monthly'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority: 1,
    },
    ...resumeConfig.navigation.sections.map((section: SectionConfig) => ({
      url: `${baseUrl}#${section.id}`,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority: 0.8,
    }))
  ]
} 