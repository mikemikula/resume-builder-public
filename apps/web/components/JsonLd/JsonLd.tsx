import { resumeConfig } from '@/config'
import type { ContactLink, Certification } from '@/types'
import { getDomainUrl } from '@/lib/utils/domain'

export default function JsonLd() {
  const baseUrl = getDomainUrl()
  
  const linkedinLink = resumeConfig.contact.links.find((link: ContactLink) => link.type === 'linkedin')
  const githubLink = resumeConfig.contact.links.find((link: ContactLink) => link.type === 'github')
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: resumeConfig.personal.name,
    jobTitle: resumeConfig.personal.description,
    description: resumeConfig.summary.text,
    email: resumeConfig.contact.email,
    url: baseUrl,
    sameAs: [
      linkedinLink?.url,
      githubLink?.url,
    ].filter(Boolean),
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