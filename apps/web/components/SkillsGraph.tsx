'use client'

import { motion } from 'framer-motion'

interface Skill {
  name: string
  level: number
  category: string
}

export default function SkillsGraph() {
  const skills: Skill[] = [
    { name: 'Salesforce', level: 95, category: 'Platform' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'AI/ML', level: 88, category: 'Technology' },
    { name: 'DevOps', level: 92, category: 'Infrastructure' }
  ]

  return (
    <div 
      data-section="skills"
      data-component="skills-graph"
      className="mt-8 space-y-4"
    >
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-primary">{skill.name}</span>
            <span className="text-accent">{skill.level}%</span>
          </div>
          <div className="h-2 bg-surface-hover rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>
      ))}
    </div>
  )
} 