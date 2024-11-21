import { resumeConfig } from '@/config'

const { personal, summary } = resumeConfig

export const metadata = {
  title: `${personal.name} - ${personal.description}`,
  description: summary.text,
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Technical Leader',
    'Solution Architect',
    'DevOps Engineer',
    'Cloud Architecture',
    'AI Integration',
    'Technical Leadership'
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