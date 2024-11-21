export const SITE_CONFIG = {
  name: '[Your Full Name]',
  title: 'Lead Software Engineer & Technical Architect',
  email: 'your.email@example.com',
  linkedin: 'linkedin.com/in/yourprofile',
}

export const JOBS = [
  {
    title: "Technical Advisor",
    company: "Technology Solutions Inc.",
    period: "March 2022 - Present",
    achievements: [
      "Provide technical architecture guidance for enterprise cloud platforms",
      "Lead implementation of agile methodologies and development practices"
    ]
  }
]

export const SKILLS = {
  current: {
    "AI/ML": ["Generative AI", "Large Language Models", "Prompt Engineering", "AI Development"],
    "Programming": ["TypeScript", "Python", "JavaScript"],
    "Frameworks": ["React", "Next.js", "Node.js"],
    "Platforms": ["Cloud Architecture"]
  },
  previous: {
    "Programming": ["Java", "C#", "HTML5", "CSS3", "SQL"],
    "Frameworks": ["Vue.js", "Angular", "Spring"],
    "Platforms": ["Node.js", "Ruby on Rails"],
    "DevOps": ["CI/CD", "Version Control", "Cloud Services"],
    "Tools": ["Development Tools", "Analytics Platforms", "Design Software"]
  }
}

export const ACHIEVEMENTS = [
  {
    year: "2023",
    title: "Led enterprise platform architecture transformation"
  },
  {
    year: "2022",
    title: "Implemented successful cloud migration strategy"
  }
]

export const SECTIONS = [
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
] as const

export type SectionId = typeof SECTIONS[number]['id'] 

export const skillLevelToLabel = {
  1: 'Beginner',
  2: 'Intermediate',
  3: 'Advanced',
  4: 'Expert'
} as const 