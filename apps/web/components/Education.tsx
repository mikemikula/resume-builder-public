'use client'

import { motion } from 'framer-motion'
import { resumeConfig } from '@/config'
import { useSection } from '@/hooks'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

export default function Education() {
  const { education } = resumeConfig
  const { title } = useSection('education')

  return (
    <div className="space-y-6">
      <h2 className="section-title">{title}</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-surface/10 p-4 rounded-lg hover:bg-surface/20 
          transition-all duration-300"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <AcademicCapIcon className="h-5 w-5 text-accent" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-medium text-text-primary">
              {education.degree}
            </h3>
            <p className="text-sm text-text-secondary">
              {education.school}
            </p>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span>{education.graduation}</span>
              <span>•</span>
              <span>GPA: {education.gpa}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 