import { resumeConfig } from '@/config'

export default function BreadcrumbJsonLd() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: resumeConfig.navigation.sections.map((section, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: section.label,
      item: `#${section.id}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
} 