import { resumeConfig } from '@/config'
import type { Job } from '@/types'

interface WorkExperienceSchema {
  '@type': 'WorkExperience'
  '@context': 'https://schema.org'
  jobTitle: string
  employer: {
    '@type': 'Organization'
    name: string
  }
  dateFrom: string
  description: string
}

export default function WorkExperienceJsonLd() {
  const workSchema: WorkExperienceSchema[] = resumeConfig.experience.map((job: Job) => {
    const [startDate = ''] = job.period.split(' - ')
    
    return {
      '@type': 'WorkExperience',
      '@context': 'https://schema.org',
      jobTitle: job.title,
      employer: {
        '@type': 'Organization',
        name: job.company
      },
      dateFrom: startDate,
      description: job.achievements.join('. ')
    }
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
    />
  )
} 