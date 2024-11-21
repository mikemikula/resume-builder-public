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
    sections: Array<{
      id: string
      short: string
      label: string
    }>
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
  experience: Array<{
    title: string
    company: string
    period: string
    highlights?: Array<{
      metric: string
      description: string
      icon?: string
    }>
    achievements: string[]
  }>
  skills: {
    current: Array<{
      category: string
      items: Array<{
        name: string
        level: number
      }>
    }>
    previous?: Array<{
      category: string
      items: Array<{
        name: string
        level: number
      }>
    }>
  }
  education: {
    degree: string
    school: string
    graduation: string
    gpa: string
  }
  certifications: Array<{
    name: string
    issuer: string
    date: string
    icon: string
    url?: string
  }>
  achievements: {
    items: Achievement[]
  }
  contact: {
    email: string
    links: Array<{
      type: string
      url: string
      label: string
      description: string
      icon: string
    }>
  }
}

export type SkillLevel = 1 | 2 | 3 | 4

export type SkillLevelLabel = {
  readonly [K in SkillLevel]: string
}

export declare const skillLevelToLabel: SkillLevelLabel 

export interface Section {
  id: string
  short: string
  label: string
} 