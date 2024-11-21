export const SITE_CONFIG = {
  name: '[Your Name]',
  title: 'Software Engineer',
  email: 'your.email@example.com',
  linkedin: 'linkedin.com/in/yourprofile',
}

export const JOBS = [
  {
    title: "Technical Advisor",
    company: "Example Company",
    period: "March 2022 - Present",
    achievements: [
      "Provide feedback on technical architecture of the cloud platform and architecture",
      "Advise teams on how to fail fast in the startup space along with leading the principles of build, measure and learn"
    ]
  },
  // Add all other jobs...
]

export const SKILLS = {
  current: {
    "AI/ML": ["Generative AI", "ChatGPT", "Claude", "Prompt Engineering", "Cursor"],
    "Programming": ["JavaScript", "TypeScript"],
    "Frameworks": ["React", "Next.js"],
    "Platforms": ["Cloud Platforms"]
  },
  previous: {
    "Programming": ["Java", "C#", "HTML5", "CSS3", "SQL"],
    "Frameworks": ["React", "Vue.js", "Angular", "Spring Framework"],
    "Platforms": ["Node.js", "Ruby on Rails"],
    "DevOps": ["CircleCI", "GitHub", "Git"],
    "Tools": ["Visual Studio Code", "Google Analytics", "Photoshop CC", "3ds max"]
  }
}

export const ACHIEVEMENTS = [
  {
    year: "2021",
    title: "Scaled enterprise platform to support company IPO"
  },
  // Add all other achievements...
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