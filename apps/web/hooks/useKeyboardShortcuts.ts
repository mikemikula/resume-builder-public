'use client'

import { useEffect } from 'react'

export default function useKeyboardShortcuts() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Alt + number shortcuts for navigation
      if (e.altKey && !isNaN(Number(e.key))) {
        const sectionIndex = Number(e.key) - 1
        const sections = ['summary', 'experience', 'skills', 'education', 'contact']
        const sectionId = sections[sectionIndex]
        
        if (sectionId) {
          const element = document.getElementById(sectionId)
          element?.scrollIntoView({ behavior: 'smooth' })
        }
      }

      // 'P' for print
      if (e.key.toLowerCase() === 'p' && !e.ctrlKey && !e.metaKey) {
        window.print()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])
} 