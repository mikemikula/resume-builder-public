'use client'

import { motion } from 'framer-motion'
import { resumeConfig } from '@/config'
import { useSection } from '@/hooks'
import { useState } from 'react'
import type { SkillCategory, SkillItem } from '@/types'

export default function Skills() {
  const { skills } = resumeConfig
  const { title } = useSection('skills')
  const [showPrevious, setShowPrevious] = useState(false)

  const previousSkillsCount = skills.previous?.length ?? 0

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold text-text-primary mb-3">{title}</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-accent mb-2">Current Technologies</h3>
          <div className="space-y-3">
            {skills.current.map((category: SkillCategory) => (
              <div key={category.category} className="space-y-2">
                <h4 className="text-sm font-medium text-text-primary flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  {category.category}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2">
                  {category.items.map((skill: SkillItem) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-surface/10 p-2 rounded-lg hover:bg-surface/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                        <span className="text-xs text-text-secondary">{getSkillLevel(skill.level)}</span>
                      </div>
                      <div className="h-1 bg-black/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level * 25}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-accent"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {!showPrevious && previousSkillsCount > 0 && (
          <motion.button
            onClick={() => setShowPrevious(true)}
            className="group mt-4 w-full py-3 px-4 
              bg-surface/10 hover:bg-surface/20 
              rounded-lg transition-all duration-200 
              flex items-center justify-center gap-2
              hover:transform hover:scale-[1.01] active:scale-[0.99]
              cursor-pointer"
          >
            <span className="text-sm font-medium text-text-secondary group-hover:text-accent transition-colors">
              Show Previous Technologies
            </span>
            <span className="text-xs text-text-secondary/80 bg-surface/20 px-2 py-0.5 rounded-full">
              {previousSkillsCount}
            </span>
          </motion.button>
        )}

        {showPrevious && skills.previous && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 space-y-3"
          >
            <h3 className="text-lg font-semibold text-accent mb-2">Previous Technologies</h3>
            {skills.previous.map((category: SkillCategory) => (
              <div key={category.category} className="space-y-2">
                <h4 className="text-sm font-medium text-text-primary flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  {category.category}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2">
                  {category.items.map((skill: SkillItem) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-surface/10 p-2 rounded-lg hover:bg-surface/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                        <span className="text-xs text-text-secondary">{getSkillLevel(skill.level)}</span>
                      </div>
                      <div className="h-1 bg-black/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level * 25}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-accent"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

function getSkillLevel(level: number): string {
  return {
    1: 'Beginner',
    2: 'Intermediate',
    3: 'Advanced',
    4: 'Expert'
  }[level] || 'Unknown'
} 