'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  level: number
  animated?: boolean
}

export default function ProgressBar({ level, animated = true }: ProgressBarProps) {
  const percentage = (level / 10) * 100

  return (
    <div className="h-2 w-full rounded-full overflow-hidden relative bg-black/50">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        initial={animated ? { width: 0 } : { width: `${percentage}%` }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </div>
  )
} 