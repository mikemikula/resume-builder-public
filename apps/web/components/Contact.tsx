'use client'

import { motion } from 'framer-motion'
import { resumeConfig } from '@/config'
import { useSection } from '@/hooks'
import type { ContactLink } from '@/types'
import { 
  EnvelopeIcon, 
  LinkIcon,
  AcademicCapIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'

type IconKey = 'email' | 'linkedin' | 'badge' | 'github'

const iconMap: Record<IconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  email: EnvelopeIcon,
  linkedin: LinkIcon,
  badge: AcademicCapIcon,
  github: CodeBracketIcon,
}

export default function Contact() {
  const { contact } = resumeConfig
  const { title } = useSection('contact')

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold text-text-primary mb-3">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {contact.links.map((link: ContactLink, index: number) => {
          const Icon = iconMap[link.icon as IconKey] || LinkIcon
          
          return (
            <motion.a
              key={link.type}
              href={link.url}
              target={link.type !== 'email' ? '_blank' : undefined}
              rel={link.type !== 'email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex items-center gap-3 px-4 py-2 
                bg-surface/10 hover:bg-surface/20 
                rounded-lg transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <Icon className="h-5 w-5 text-accent group-hover:text-accent/80 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                  {link.label}
                </span>
                {link.description && (
                  <span className="text-xs text-text-secondary">
                    {link.description}
                  </span>
                )}
              </div>
            </motion.a>
          )
        })}
      </div>
    </div>
  )
} 