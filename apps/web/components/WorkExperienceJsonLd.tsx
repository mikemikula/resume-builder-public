import { resumeConfig } from '@/config'

export default function WorkExperienceJsonLd() {
  const workSchema = resumeConfig.experience.map((job: any) => ({
    '@type': 'WorkExperience',
    '@context': 'https://schema.org',
    jobTitle: job.title,
    employer: {
      '@type': 'Organization',
      name: job.company
    },
    dateFrom: job.period.split(' - ')[0],
    description: job.achievements.join('. '),
  }))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
    />
  )
} 