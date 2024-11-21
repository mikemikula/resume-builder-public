'use client'

import { motion } from 'framer-motion'
import { PrinterIcon } from '@heroicons/react/24/outline'

export default function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <motion.button
      onClick={handlePrint}
      className="fixed top-4 right-16 p-1.5 rounded-full bg-surface hover:bg-surface-hover 
        transition-all duration-300 hover:scale-105 no-print z-50"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Print resume"
    >
      <PrinterIcon className="h-4 w-4 text-text-primary" />
    </motion.button>
  )
} 