'use client'

import { motion } from 'framer-motion'
import { resumeConfig } from '@/config'
import { useSection } from '@/hooks'
import { SparklesIcon } from '@heroicons/react/24/outline'

export default function Summary() {
  const { summary } = resumeConfig
  const { title: summaryTitle } = useSection('summary')
  const { title: competenciesTitle } = useSection('competencies')
  
  return (
    <div className="space-y-3">
      {/* Professional Summary */}
      <h2 className="text-2xl font-bold text-text-primary mb-3">{summaryTitle}</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-surface/10 p-3 rounded-lg"
      >
        <p className="text-base text-text-secondary leading-relaxed">
          {summary.text}
        </p>
      </motion.div>

      {/* Core Competencies */}
      <div id="competencies" className="scroll-mt-16">
        <h2 className="text-2xl font-bold text-text-primary mb-3 mt-6">{competenciesTitle}</h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap gap-2"
        >
          {summary.competencies.map((competency: string, index: number) => (
            <motion.span
              key={competency}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="inline-flex items-center gap-1 px-2 py-1 
                bg-surface/20 hover:bg-surface/30 
                text-sm text-text-secondary rounded-full
                transition-colors duration-200"
            >
              <SparklesIcon className="h-3.5 w-3.5 text-accent" />
              {competency}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 