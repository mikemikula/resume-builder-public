'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowDownTrayIcon,
  ShareIcon,
  PrinterIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline'
import { Theme, getInitialTheme, applyTheme } from '@/lib'

export default function ActionButtons() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const initialTheme = getInitialTheme()
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const handleDownload = () => {
    // TODO: Implement PDF download
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Michael Mikula - Resume',
        url: window.location.href
      })
    } catch (err) {
      console.error('Share failed:', err)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  return (
    <>
      {/* Desktop floating buttons */}
      <div className="fixed bottom-6 right-6 hidden md:flex flex-col gap-2">
        <motion.div 
          className="flex flex-col gap-2 bg-surface/20 backdrop-blur-sm p-2 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={handleDownload}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 
              transition-colors duration-300"
            title="Download PDF"
          >
            <ArrowDownTrayIcon className="h-5 w-5 text-accent" />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 
              transition-colors duration-300"
            title="Share"
          >
            <ShareIcon className="h-5 w-5 text-accent" />
          </button>
          <button
            onClick={handlePrint}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 
              transition-colors duration-300"
            title="Print"
          >
            <PrinterIcon className="h-5 w-5 text-accent" />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 
              transition-colors duration-300"
            title="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-accent" />
            ) : (
              <MoonIcon className="h-5 w-5 text-accent" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-sm border-t border-border">
        <motion.div 
          className="flex justify-around items-center p-4 max-w-[1200px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={handleDownload}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 
              transition-colors duration-300"
            title="Download PDF"
          >
            <ArrowDownTrayIcon className="h-5 w-5 text-accent" />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 
              transition-colors duration-300"
            title="Share"
          >
            <ShareIcon className="h-5 w-5 text-accent" />
          </button>
          <button
            onClick={handlePrint}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 
              transition-colors duration-300"
            title="Print"
          >
            <PrinterIcon className="h-5 w-5 text-accent" />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 
              transition-colors duration-300"
            title="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-accent" />
            ) : (
              <MoonIcon className="h-5 w-5 text-accent" />
            )}
          </button>
        </motion.div>
      </div>
    </>
  )
} 