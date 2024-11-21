'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

export default function KeyboardHelp() {
  const [isOpen, setIsOpen] = useState(false)

  const shortcuts = [
    { key: 'Alt + 1-5', description: 'Navigate sections' },
    { key: 'P', description: 'Print resume' },
    { key: 'T', description: 'Toggle theme' },
    { key: 'Esc', description: 'Close dialogs' }
  ]

  return (
    <div className="fixed bottom-4 left-4 z-50 no-print">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1.5 rounded-full bg-surface hover:bg-surface-hover 
          transition-all duration-300 hover:scale-105"
        aria-label="Keyboard shortcuts help"
      >
        <QuestionMarkCircleIcon className="h-4 w-4 text-text-primary" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-12 left-0 bg-surface rounded-lg shadow-lg p-4 w-64"
          >
            <h3 className="text-sm font-medium text-accent mb-2">Keyboard Shortcuts</h3>
            <ul className="space-y-2">
              {shortcuts.map((shortcut) => (
                <li key={shortcut.key} className="flex justify-between text-xs">
                  <span className="text-text-secondary">{shortcut.description}</span>
                  <kbd className="px-1.5 py-0.5 bg-surface-hover rounded text-text-primary">
                    {shortcut.key}
                  </kbd>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 