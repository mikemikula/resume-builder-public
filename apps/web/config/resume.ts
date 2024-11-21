import type { ResumeConfig } from '@/types/resume'

export const resumeConfig: ResumeConfig = {
  settings: {
    experience: {
      initialDisplay: 5
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
    name: 'MICHAEL V. MIKULA',
    description: 'Lead Software Engineer & Salesforce Technical Leader',
    email: 'mikemikula@gmail.com',
    linkedin: 'linkedin.com/in/mikemikula'
  },

  summary: {
    text: 'Lead Software Engineer and Salesforce Technical Architect with extensive experience in Salesforce development & architecture, full-stack engineering, and generative AI development. Proven track record (36x LinkedIn recommended) in architecting enterprise solutions, implementing DevOps practices, and leading technical teams. Expertise in managed packages, CICD implementation, and product driven development.',
    competencies: [
      'Software & Salesforce Architecture',
      'Generative AI development',
      'Apex & LWC Development',
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
      title: 'Advisor / Investor',
      company: 'GuideTime',
      period: 'March 2022 - Present',
      highlights: [
        { metric: 'Guided', description: 'Architecture & Process', icon: 'cloud' },
        { metric: 'DevOps', description: 'Data Seeding | Version Control', icon: 'code' }
      ],
      achievements: [
        'Provide feedback on technical architecture of the Salesforce experience cloud platform and architecture',
        'Advise teams on principles of fail fast and build, measure, learn processes',
        'Created proofs of concepts for strategies on solving various business / technical problems including devops & version control'
      ]
    },
    {
      title: 'Lead Software Engineer',
      company: 'Vivun',
      period: 'August 2022 - October 2024',
      highlights: [
        { metric: '50%', description: 'Release frequency increase', icon: 'trend' },
        { metric: '99.9%', description: 'Deployment success rate', icon: 'shield' },
        { metric: '50%', description: 'AI-generated code', icon: 'sparkles' },
      ],
      achievements: [
        'Architected and implemented Salesforce managed packages on the AppExchange, using Generative AI to pass security review',
        'Executed cross functional projects with teams of 5 - 10 engineers to deliver features in the salesforce package, SaaS app, and data platform.',
        'Influenced promotions of multiple senior engineers to lead through career guidance & mentorship',
        'Increased release frequency trend by 50% to 3 packages in 2023',
        'Reduced support time by 100 hours annually through improved knowledge sharing and process optimization',
        'Implemented Salesforce CICD infrastructure using Circle-CI and GitHub workflows including automatic security review checks',
        'Utilized Generative AI and prompt engineering for 50% of net new code development',
        'Developed full-stack features using React, Kotlin, Salesforce LWC, and Apex',
        'Achieved 99.9% success rate in managed package deployments with only one customer bug in two years',
        'Successfully knowledge transferred devops process resulting in end to end feature & package delivery by a non Salesforce engineer'
      ]
    },
    {
      title: 'Salesforce Engineer (IC5 Tech Lead)',
      company: 'Facebook',
      period: 'April 2022 - August 2022',
      highlights: [
        { metric: '1 per week', description: 'Features delivered' },
        { metric: '100%', description: 'Deployment Success (IG, FB)' }
      ],
      achievements: [
        'Managed cross-functional projects influencing faster delivery of business requirements',
        'Completed web software bootcamp for Instagram and Facebook while delivering 1 feature to production per week'
      ]
    },
    {
      title: 'Senior Salesforce Engineer II (Tech Lead)',
      company: 'Compass',
      period: 'January 2020 - February 2022',
      highlights: [
        { metric: '10+', description: 'Engineers Hired' },
        { metric: '50%', description: 'CICD improvement' },
        { metric: 'IPO', description: 'Scale achieved' }
      ],
      achievements: [
        'Implemented hiring & onboarding process of 10+ engineers and administrators',
        'Led cross functional migration from CloudSense CPQ to an internal solution for scalable IPO readiness',
        'Implemented Salesforce DX and CircleCI automation, resulting in a 50% improvement to code deployment frequency',
        'Designed and implemented solutions for Salesforce governor limits and maintainability',
        'Created architectural diagrams and documentation for business and technical alignment',
        'Maintained and enhanced Lightning components, Visualforce pages, and Apex classes',
        'Provided technical leadership and coaching across product and development teams'
      ]
    },
    {
      title: 'Co-Founder Product Manager / Engineer & Advisor',
      company: 'PLAYR.gg',
      period: 'October 2017 - November 2020',
      highlights: [
        { metric: '1M+', description: 'User growth', icon: 'rocket' },
        { metric: '30%', description: 'Monthly growth', icon: 'trend' },
        { metric: 'Founder Exit', description: 'Acquired by TruFan, Inc.', icon: 'money' }
      ],
      achievements: [
        'Managed remote team of 5+ engineers while building and executing product roadmap',
        'Scaled platform to over 1,000,000 users',
        'Closed enterprise deals with top customers incl. Electronic Arts, UFC, Bud Light, 100 Thieves',
        'Led company to successful acquisition by TruFan, Inc.',
        'Achieved 20-30% monthly user growth through strategic feature implementation',
        'Raised $2.3M from institutional and angel investors across US & Canada',
        'Frequently delivered full stack features using Vue.js & Ruby on Rails',
        'Implemented Salesforce for business intelligence and administration for B2B sales',
        'Deployed Jira and executed Scrum and Kanban methodologies'
      ]
    },
    {
      title: 'Salesforce Developer',
      company: 'LPI',
      period: 'September 2017 - September 2018',
      highlights: [
        { metric: '100+', description: 'Trailhead badges gained' },
        { metric: 'ISV AppExchange', description: 'Product Launched', icon: 'building' },
        { metric: 'Experience Cloud', description: 'Community Development', icon: 'building' }
      ],
      achievements: [
        'Developed Salesforce communities on Experience Cloud using Aura and data services',
        'Led a company wide contest, including building an app to track progress, resulting in 10+ employees acquiring over 100 salesforce trailhead badges',
        'Implemented Salesforce DX scratch orgs and Git version control best practices to scale up a team of 10+ engineers',
        'Deployed ISV AppExchange product WeGather, utilizing the unit of work design pattern, selector pattern, and more from the FinancialForce library'
      ]
    },
    {
      title: 'Software Developer',
      company: 'ATG',
      period: 'December 2016 - September 2017',
      highlights: [
        { metric: '100%', description: 'Client Satisfaction' },
        { metric: 'CPQ', description: 'Configure Price Quote', icon: 'dollar'},
        { metric: 'API', description: 'SaaS Integration' }
      ],
      achievements: [
        'Implemented Apex customizations to deliver customer requirements around CPQ projects',
        'Created integrations with custom external SaaS applications via Apex restful web services',
        'Consulted with both technical and non-technical personnel to ensure Salesforce solutions met all requirements and were scalable'
      ]
    },
    {
      title: 'Software Developer',
      company: 'ORBIS Corporation',
      period: 'November 2012 - November 2016',
      highlights: [
        { metric: '50%', description: 'Unplanned work reduced' },
        { metric: 'Salesforce CRM', description: 'System integration' }
      ],
      achievements: [
        'Reduced unplanned work by 50% through Java application optimization and process improvement',
        'Integrated Java and Salesforce CRM systems to eliminate redundant work',
        'Developed mobile-first applications using HTML5, CSS3, and JavaScript'
      ]
    }
  ],

  skills: {
    current: [
      {
        category: 'Programming',
        items: [
          { name: 'Apex', level: 4 },
          { name: 'SOQL', level: 4 },
          { name: 'Lightning Web Components (LWC), HTML5, CSS3', level: 3 },
          { name: 'JavaScript', level: 2}
        ]
      },
      {
        category: 'AI/ML',
        items: [
          { name: 'Generative AI / Prompt Engineering (ChatGPT, Claude)', level: 3 },
          { name: 'Cursor IDE', level: 3 }
        ]
      },
      {
        category: 'DevOps',
        items: [
          { name: 'Salesforce DX', level: 4 },
          { name: 'CircleCI', level: 3 },
          { name: 'GitHub / Actions / Git', level: 3 }
        ]
      }
    ],
    previous: [
      {
        category: 'Programming',
        items: [
          { name: 'Aura, Visual Force', level: 3 },
          { name: 'SQL', level: 2 },
          { name: 'Java', level: 2 },
          { name: 'Kotlin', level: 1 },
          { name: 'C#', level: 1 }
        ]
      },
      {
        category: 'Frameworks',
        items: [
          { name: 'Spring Framework', level: 2 },
          { name: 'React', level: 1 },
          { name: 'Vue.js', level: 1 }
        ]
      },
      {
        category: 'Platforms',
        items: [
          { name: 'Node.js', level: 2 },
          { name: 'Ruby on Rails', level: 1 }
        ]
      },
      {
        category: 'Tools',
        items: [
          { name: '3ds Max', level: 3 },
          { name: 'Photoshop CC', level: 2 }
        ]
      }
    ]
  },

  education: {
    degree: 'Bachelor of Science in Management Information Systems',
    school: 'University of Wisconsin Parkside',
    graduation: 'December 2013',
    gpa: '3.0'
  },

  certifications: [
    {
      name: 'Salesforce Certified Administrator (SCA)',
      issuer: 'Salesforce',
      date: '2020',
      icon: 'badge'
    },
    {
      name: 'Salesforce Certified Platform App Builder',
      issuer: 'Salesforce',
      date: '2020',
      icon: 'badge'
    },
    {
      name: 'Salesforce Certified Platform Developer I',
      issuer: 'Salesforce',
      date: '2020',
      icon: 'badge'
    }
  ],

  achievements: {
    items: [
      {
        type: 'ipo',
        year: '2021',
        label: 'Scaling compass.com infrastructure to support IPO',
        description: 'Led technical infrastructure scaling',
        url: 'https://news.crunchbase.com/public/compass-goes-public-ceo-says-capital-raise-goal-met/',
        icon: 'rocket'
      },
      {
        type: 'acquisition',
        year: '2020',
        label: 'Selling Playr.gg to TruFan, Inc. (joinsurf.com)',
        description: 'Scaled to 1M+ users before acquisition',
        url: 'https://www.crunchbase.com/organization/playrgg',
        icon: 'money'
      },
      {
        type: 'business',
        year: '2015',
        label: 'Second Life - Virtual World Brand',
        description: '$2,500 monthly revenue',
        url: 'https://www.flickr.com/photos/mike_denneny/',
        icon: 'dollar'
      },
      {
        type: 'education',
        year: '2009',
        label: 'Virtual Education Platform',
        description: 'Serving 10,000+ students',
        url: 'https://skoolaborate.wordpress.com/skoolaborate-website/',
        icon: 'academic'
      },
      {
        type: 'press',
        year: '2008',
        label: 'Featured in Wall Street Journal',
        description: 'Young Entrepreneurs',
        url: 'https://www.wsj.com/public/resources/documents/info-VIRTUAL_0803.html',
        icon: 'newspaper'
      },
      {
        type: 'press',
        year: '2008',
        label: 'Published in Entrepreneurs.com',
        description: 'Featured Article',
        url: 'https://www.entrepreneur.com/science-technology/virtual-success-virtual-world-businesses/195554',
        icon: 'newspaper'
      }
    ]
  },

  contact: {
    email: 'mikemikula@gmail.com',
    links: [
      {
        type: 'email',
        url: 'mailto:mikemikula@gmail.com',
        label: 'mikemikula@gmail.com',
        description: 'Email me directly',
        icon: 'email'
      },
      {
        type: 'linkedin',
        url: 'https://linkedin.com/in/mikemikula',
        label: 'LinkedIn Profile',
        description: '36x LinkedIn recommended',
        icon: 'linkedin'
      },
      {
        type: 'trailhead',
        url: 'https://trailblazer.me/id/mikemikula',
        label: 'Trailhead Profile',
        description: '100+ Badges & 3x Certifications',
        icon: 'badge'
      },
      {
        type: 'github',
        url: 'https://github.com/mikemikula',
        label: 'GitHub Profile',
        description: 'View my code contributions',
        icon: 'github'
      }
    ]
  }
} 