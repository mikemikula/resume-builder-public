'use client'

import { motion } from 'framer-motion'
import { resumeConfig } from '@/config'
import { useSection } from '@/hooks'
import type { Certification } from '@/types'

export default function Certifications() {
  const { certifications } = resumeConfig
  const { title } = useSection('certifications')

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold text-text-primary mb-3">{title}</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {certifications.map((cert: Certification, index: number) => {
            return (
              <motion.a
                key={`${cert.name}-${index}`}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface/10 p-3 rounded-lg hover:bg-surface/20 transition-all duration-300"
              >
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-accent">
                      {cert.name}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {cert.issuer} • {cert.date}
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </div>
  )
} 