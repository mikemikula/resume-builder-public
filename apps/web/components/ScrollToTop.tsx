'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-50 no-print"
        style={{ scaleX }}
      />
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 right-4 p-1.5 rounded-full bg-surface hover:bg-surface-hover 
          shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 no-print"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="h-4 w-4 text-text-primary" />
      </motion.button>
    </>
  )
} 