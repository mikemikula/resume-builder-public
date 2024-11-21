'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownTrayIcon, CheckIcon } from '@heroicons/react/24/outline'
import { generatePDF } from '@/lib'

export default function DownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsGenerating(true)
    try {
      await generatePDF()
      setIsComplete(true)
      setTimeout(() => setIsComplete(false), 2000)
    } catch (error) {
      console.error('Error downloading PDF:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isGenerating}
      className={`fixed top-4 right-40 p-1.5 rounded-full
        transition-all duration-300 hover:scale-105 no-print z-50
        ${isGenerating ? 'bg-surface-hover cursor-wait' : 'bg-surface hover:bg-surface-hover'}
        ${isComplete ? 'bg-green-500/20' : ''}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Download PDF"
    >
      {isComplete ? (
        <CheckIcon className="h-4 w-4 text-green-400" />
      ) : (
        <ArrowDownTrayIcon className={`h-4 w-4 ${isGenerating ? 'animate-pulse' : ''} text-text-primary`} />
      )}
    </motion.button>
  )
} 