import { resumeConfig } from '@/config'

const { personal, summary } = resumeConfig

export const metadata = {
  title: `${personal.name} - ${personal.description}`,
  description: summary.text,
  keywords: [
    'Software Architecture',
    'Full Stack Development',
    'Technical Leadership',
    'Cloud Architecture',
    'DevOps Engineering',
    'System Design',
    'AI/ML Integration',
    'Enterprise Solutions'
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