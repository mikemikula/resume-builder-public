'use client'

import { motion } from 'framer-motion'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        className="h-12 w-12 border-4 border-accent rounded-full border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  )
} 