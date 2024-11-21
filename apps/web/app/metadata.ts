import { resumeConfig } from '@/config'

const { personal, summary } = resumeConfig

export const metadata = {
  title: `${personal.name} - ${personal.description}`,
  description: summary.text,
  keywords: [
    'Software Engineer',
    'Salesforce Technical Leader',
    'Full Stack Developer',
    'AI Integration',
    'DevOps',
    'Technical Leadership',
    'Solution Architecture'
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  publisher: personal.name,
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
} 