import type { NavigationItem } from './navigation'

export interface Section extends NavigationItem {}

export interface Highlight {
  metric: string
  description: string
  icon?: string
}

export interface Job {
  title: string
  company: string
  period: string
  highlights?: Highlight[]
  achievements: string[]
}

export interface SkillItem {
  name: string
  level: number
}

export interface SkillCategory {
  category: string
  items: SkillItem[]
}

export interface Education {
  degree: string
  school: string
  graduation: string
  gpa: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  icon: string
  url?: string
}

export interface Achievement {
  type: string
  year: string
  label: string
  description: string
  url: string
  icon: string
}

export interface ContactLink {
  type: string
  url: string
  label: string
  description: string
  icon: string
}

export interface ResumeConfig {
  settings: {
    experience: {
      initialDisplay: number
    }
    skills: {
      alwaysShowPrevious: boolean
    }
  }
  navigation: {
    sections: NavigationItem[]
  }
  personal: {
    name: string
    description: string
    email: string
    linkedin: string
  }
  summary: {
    text: string
    competencies: string[]
  }
  experience: Job[]
  skills: {
    current: SkillCategory[]
    previous?: SkillCategory[]
  }
  education: Education
  certifications: Certification[]
  achievements: {
    items: Achievement[]
  }
  contact: {
    email: string
    links: ContactLink[]
  }
}

export type SkillLevel = 1 | 2 | 3 | 4

export type SkillLevelLabel = {
  readonly [K in SkillLevel]: string
}

export const skillLevelToLabel: SkillLevelLabel = {
  1: 'Beginner',
  2: 'Intermediate',
  3: 'Advanced',
  4: 'Expert'
} 