'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AchievementsTicker() {
  const achievements = [
    '99.9% Deployment Success Rate',
    '1M+ Users Scaled',
    '36x LinkedIn Recommended',
    'Featured in WSJ',
    'Led 10+ Engineer Teams'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [achievements.length])

  return (
    <div className="fixed top-0 left-0 right-0 bg-surface/80 backdrop-blur-sm z-40 no-print">
      <div className="max-w-3xl mx-auto px-4 py-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center text-sm font-medium text-accent"
          >
            {achievements[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
} 