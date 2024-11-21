'use client'

import { motion } from 'framer-motion'
import { resumeConfig } from '@/config'
import { useSection } from '@/hooks'
import type { Achievement } from '@/types'

export default function Achievements() {
  const { achievements } = resumeConfig
  const { title } = useSection('achievements')

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold text-text-primary mb-3">{title}</h2>
      <div className="space-y-4">
        {achievements.items.map((achievement: Achievement, index: number) => (
          <motion.div
            key={`${achievement.label}-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface/10 p-3 rounded-lg hover:bg-surface/20 transition-all duration-300"
          >
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-accent">{achievement.year}</span>
                  <span className="text-sm text-text-secondary">•</span>
                  <span className="text-sm text-text-secondary">{achievement.type}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-primary">{achievement.label}</h3>
                <p className="text-sm text-text-secondary">{achievement.description}</p>
              </div>
              <div>
                <a 
                  href={achievement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  View Details →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 