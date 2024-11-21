'use client'

import { motion } from 'framer-motion'

interface ShowMoreProps {
  onClick: () => void
  label: string
  count?: number
}

export default function ShowMore({ onClick, label, count }: ShowMoreProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center"
    >
      <button
        onClick={onClick}
        className="px-6 py-3 bg-surface/20 text-text-primary rounded-lg
          hover:bg-surface/30 transition-colors duration-200"
      >
        <span className="flex items-center gap-2">
          <span>{label}</span>
          {count !== undefined && (
            <span className="text-sm text-text-secondary">
              ({count} more)
            </span>
          )}
        </span>
      </button>
    </motion.div>
  )
} 