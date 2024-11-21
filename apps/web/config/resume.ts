import type { ResumeConfig } from '@/types/resume'

export const resumeConfig: ResumeConfig = {
  settings: {
    experience: {
      initialDisplay: 2
    },
    skills: {
      alwaysShowPrevious: false
    }
  },

  navigation: {
    sections: [
      { 
        id: 'header',
        short: 'Header',
        label: 'Personal Information'
      },
      { 
        id: 'contact',
        short: 'Contact',
        label: 'Contact Information'
      },
      { 
        id: 'summary',
        short: 'Summary',
        label: 'Summary'
      },
      { 
        id: 'experience',
        short: 'Experience',
        label: 'Experience'
      },
      { 
        id: 'skills',
        short: 'Skills',
        label: 'Skills'
      },
      { 
        id: 'education',
        short: 'Education',
        label: 'Education'
      },
      { 
        id: 'certifications',
        short: 'Certs',
        label: 'Certifications'
      },
      { 
        id: 'achievements',
        short: 'Achievements',
        label: 'Achievements'
      }
    ]
  },

  personal: {
    name: '[Your Full Name]',
    description: 'Lead Software Engineer & Technical Architect',
    email: 'your.email@example.com',
    linkedin: 'linkedin.com/in/yourprofile'
  },

  summary: {
    text: 'Lead Software Engineer and Technical Architect with extensive experience in cloud platform development & architecture, full-stack engineering, and generative AI development. Proven track record (35+ peer recommendations) in architecting enterprise solutions, implementing DevOps practices, and leading technical teams. Expertise in enterprise packages, CICD implementation, and product driven development.',
    competencies: [
      'Software Architecture',
      'Generative AI Development',
      'Cloud Platform Development',
      'Team Leadership',
      'Process Implementation',
      'Product Roadmapping',
      'DevOps / CICD',
      'Solution Design',
      'Full Stack Development'
    ]
  },

  experience: [
    {
      title: 'Technical Advisor',
      company: 'TechStartup Inc.',
      period: 'March 2022 - Present',
      highlights: [
        { metric: 'Guided', description: 'Architecture & Process', icon: 'cloud' },
        { metric: 'DevOps', description: 'Data Seeding | Version Control', icon: 'code' }
      ],
      achievements: [
        'Provide technical architecture guidance for cloud platform infrastructure and design',
        'Advise teams on agile methodologies and iterative development practices',
        'Create proof of concepts for solving complex technical challenges in DevOps and version control'
      ]
    },
    {
      title: 'Lead Software Engineer',
      company: 'Enterprise Solutions Co.',
      period: 'August 2022 - October 2024',
      highlights: [
        { metric: '50%', description: 'Release frequency increase', icon: 'trend' },
        { metric: '99.9%', description: 'Deployment success rate', icon: 'shield' },
        { metric: '50%', description: 'AI-generated code', icon: 'sparkles' }
      ],
      achievements: [
        'Architected and implemented enterprise software solutions using modern cloud technologies',
        'Led cross-functional teams of 5-10 engineers in delivering platform features',
        'Mentored senior engineers resulting in multiple promotions to leadership roles',
        'Improved release frequency by 50% through optimized deployment processes',
        'Reduced annual support overhead by 100+ hours through improved documentation',
        'Implemented comprehensive CI/CD pipelines with automated security checks',
        'Pioneered AI-assisted development resulting in 50% faster code generation',
        'Built full-stack features using modern technology stack',
        'Maintained 99.9% deployment success rate across production systems',
        'Successfully transferred technical knowledge enabling junior engineers to own feature delivery'
      ]
    },
    {
      title: 'Senior Platform Engineer',
      company: 'Tech Giant Corp',
      period: 'April 2022 - August 2022',
      highlights: [
        { metric: '1 per week', description: 'Features delivered' },
        { metric: '100%', description: 'Deployment Success' }
      ],
      achievements: [
        'Led technical initiatives for rapid feature delivery and platform improvements',
        'Maintained consistent weekly feature delivery while completing technical onboarding'
      ]
    }
  ],

  skills: {
    current: [
      {
        category: 'Programming',
        items: [
          { name: 'TypeScript', level: 4 },
          { name: 'Python', level: 4 },
          { name: 'Modern Web Technologies', level: 3 },
          { name: 'JavaScript', level: 2}
        ]
      },
      {
        category: 'AI/ML',
        items: [
          { name: 'Generative AI / Prompt Engineering', level: 3 },
          { name: 'AI Development Tools', level: 3 }
        ]
      },
      {
        category: 'DevOps',
        items: [
          { name: 'CI/CD Pipelines', level: 4 },
          { name: 'Cloud Infrastructure', level: 3 },
          { name: 'Version Control Systems', level: 3 }
        ]
      }
    ],
    previous: [
      {
        category: 'Programming',
        items: [
          { name: 'Java', level: 3 },
          { name: 'C#', level: 2 },
          { name: 'Ruby', level: 2 }
        ]
      },
      {
        category: 'Frameworks',
        items: [
          { name: 'Spring', level: 2 },
          { name: 'Vue.js', level: 2 },
          { name: 'Angular', level: 1 }
        ]
      }
    ]
  },

  education: {
    degree: 'Bachelor of Science in Computer Science',
    school: 'State University',
    graduation: '2013',
    gpa: '3.5'
  },

  certifications: [
    {
      name: 'Cloud Platform Certified Developer',
      issuer: 'Major Cloud Provider',
      date: '2023',
      icon: 'badge'
    },
    {
      name: 'Enterprise Architecture Certification',
      issuer: 'Technology Platform',
      date: '2023',
      icon: 'badge'
    },
    {
      name: 'Professional Developer Certification',
      issuer: 'Industry Leader',
      date: '2023',
      icon: 'badge'
    }
  ],

  achievements: {
    items: [
      {
        type: 'ipo',
        year: '2021',
        label: 'Enterprise Platform Scaling for IPO',
        description: 'Led technical infrastructure scaling',
        url: 'https://example.com/ipo-success',
        icon: 'rocket'
      },
      {
        type: 'acquisition',
        year: '2020',
        label: 'Startup Acquisition Success',
        description: 'Scaled to 1M+ users before acquisition',
        url: 'https://example.com/acquisition',
        icon: 'money'
      },
      {
        type: 'business',
        year: '2015',
        label: 'Digital Platform Success',
        description: 'Achieved significant monthly revenue',
        url: 'https://example.com/platform',
        icon: 'dollar'
      },
      {
        type: 'education',
        year: '2009',
        label: 'Educational Technology Platform',
        description: 'Serving 10,000+ students',
        url: 'https://example.com/edtech',
        icon: 'academic'
      }
    ]
  },

  contact: {
    email: 'contact@example.com',
    links: [
      {
        type: 'email',
        url: 'mailto:contact@example.com',
        label: 'contact@example.com',
        description: 'Email me directly',
        icon: 'email'
      },
      {
        type: 'linkedin',
        url: 'https://linkedin.com/in/example',
        label: 'LinkedIn Profile',
        description: '35+ Recommendations',
        icon: 'linkedin'
      },
      {
        type: 'github',
        url: 'https://github.com/example',
        label: 'GitHub Profile',
        description: 'View my code contributions',
        icon: 'github'
      }
    ]
  }
} 