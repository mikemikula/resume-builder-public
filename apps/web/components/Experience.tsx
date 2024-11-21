'use client'

import { motion } from 'framer-motion'
import { resumeConfig } from '@/config'
import { useSection } from '@/hooks'
import { useState } from 'react'
import { 
  CloudIcon, 
  CodeBracketIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  RocketLaunchIcon,
  BanknotesIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  BoltIcon
} from '@heroicons/react/24/outline'
import type { Job, Highlight } from '@/types'

type IconKey = 'cloud' | 'code' | 'sparkles' | 'trend' | 'shield' | 'dollar' | 'building' | 'rocket' | 'money'
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>

const getHighlightIcon = (metric: string): IconType => {
  if (metric.includes('%')) return ChartBarIcon
  if (metric.includes('M') || metric.includes('Users')) return UserGroupIcon
  if (metric.includes('AI') || metric.includes('ML')) return SparklesIcon
  if (metric.includes('Scale') || metric.includes('IPO')) return RocketLaunchIcon
  if (metric.includes('$') || metric.includes('Revenue')) return BanknotesIcon
  if (metric.includes('Success') || metric.includes('99')) return ShieldCheckIcon
  if (metric.includes('Hours') || metric.includes('Time')) return ClockIcon
  if (metric.includes('Performance') || metric.includes('Speed')) return BoltIcon
  return SparklesIcon // Default icon
}

const iconMap: Record<IconKey, IconType> = {
  cloud: CloudIcon,
  code: CodeBracketIcon,
  sparkles: SparklesIcon,
  trend: ArrowTrendingUpIcon,
  shield: ShieldCheckIcon,
  dollar: CurrencyDollarIcon,
  building: BuildingOfficeIcon,
  rocket: RocketLaunchIcon,
  money: BanknotesIcon
}

export default function Experience() {
  const { experience } = resumeConfig
  const { title } = useSection('experience')
  const [showAll, setShowAll] = useState(false)
  const initialDisplay = resumeConfig.settings?.experience?.initialDisplay || 5

  const displayedExperiences = showAll ? experience : experience.slice(0, initialDisplay)

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold text-text-primary mb-3">{title}</h2>
      <div className="space-y-4">
        {displayedExperiences.map((role: Job, roleIndex: number) => (
          <motion.div
            key={`${role.company}-${role.title}-${roleIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: roleIndex * 0.1 }}
            className="bg-surface/10 p-3 rounded-lg hover:bg-surface/20 transition-all duration-300"
            data-section="experience"
            data-component="experience-card"
          >
            <div className="space-y-3">
              {/* Role Header */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{role.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                    {role.company}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-accent" />
                  <span className="text-sm text-text-secondary">{role.period}</span>
                </div>
              </div>

              {/* Highlights */}
              {role.highlights && (
                <div className="flex flex-wrap gap-2">
                  {role.highlights.map((highlight: Highlight, index: number) => {
                    const Icon = highlight.icon ? iconMap[highlight.icon as IconKey] : getHighlightIcon(highlight.metric)
                    return (
                      <motion.div
                        key={`${highlight.metric}-${index}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-surface/20 rounded-full"
                      >
                        <Icon className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-text-primary">{highlight.metric}</span>
                        <div className="h-1 w-1 rounded-full bg-accent" />
                        <span className="text-sm text-text-secondary">{highlight.description}</span>
                      </motion.div>
                    )
                  })}
                </div>
              )}

              {/* Achievements */}
              <ul className="space-y-2">
                {role.achievements.map((achievement: string, index: number) => (
                  <motion.li
                    key={`${achievement}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="flex-shrink-0 mt-2">
                      <div className="h-1 w-1 rounded-full bg-accent" />
                    </div>
                    <span className="text-text-secondary">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
        
        {!showAll && experience.length > initialDisplay && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowAll(true)}
            className="group mt-4 w-full py-3 px-4 
              bg-surface/10 hover:bg-surface/20 
              rounded-lg transition-all duration-200 
              flex items-center justify-center gap-2
              hover:transform hover:scale-[1.01] active:scale-[0.99]
              cursor-pointer"
          >
            <span className="text-sm font-medium text-text-secondary group-hover:text-accent transition-colors">
              Show More Experiences
            </span>
            <span className="text-xs text-text-secondary/80 bg-surface/20 px-2 py-0.5 rounded-full">
              {experience.length - initialDisplay}
            </span>
          </motion.button>
        )}
      </div>
    </div>
  )
} 