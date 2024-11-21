'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShareIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Michael V. Mikula - Resume',
          url: window.location.href
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      // Fallback to copy link
      try {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Error copying:', err)
      }
    }
  }

  return (
    <motion.button
      onClick={handleShare}
      className="fixed top-4 right-28 p-1.5 rounded-full bg-surface hover:bg-surface-hover 
        transition-all duration-300 hover:scale-105 no-print z-50"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Share resume"
    >
      {copied ? (
        <CheckIcon className="h-4 w-4 text-green-400" />
      ) : (
        <ShareIcon className="h-4 w-4 text-text-primary" />
      )}
    </motion.button>
  )
} 