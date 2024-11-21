import { resumeConfig } from '@/config'
import { getDomainString } from '@/lib/utils/domain'

interface Link {
  type: string
  url: string
}

interface Certification {
  name: string
  issuer: string
}

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: resumeConfig.personal.name,
    jobTitle: resumeConfig.personal.description,
    description: resumeConfig.summary.text,
    email: resumeConfig.contact.email,
    url: getDomainString(),
    sameAs: [
      resumeConfig.contact.links.find((l: Link) => l.type === 'linkedin')?.url,
      resumeConfig.contact.links.find((l: Link) => l.type === 'github')?.url,
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: resumeConfig.education.school
    },
    hasCredential: resumeConfig.certifications.map((cert: Certification) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.name,
      credentialCategory: 'certification',
      recognizedBy: {
        '@type': 'Organization',
        name: cert.issuer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 