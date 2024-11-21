'use client'

import { useState } from 'react'
import { CommandLineIcon as KeyboardIcon } from '@heroicons/react/24/outline'

function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)

  const shortcuts = [
    { keys: ['Alt', '1'], description: 'Go to Summary' },
    { keys: ['Alt', '2'], description: 'Go to Experience' },
    { keys: ['Alt', '3'], description: 'Go to Skills' },
    { keys: ['Alt', '4'], description: 'Go to Education' },
    { keys: ['Alt', '5'], description: 'Go to Contact' },
    { keys: ['Esc'], description: 'Close menus' },
    { keys: ['P'], description: 'Print resume' }
  ] as const

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 p-1.5 rounded-full bg-surface hover:bg-surface-hover 
          transition-all duration-300 hover:scale-105 no-print"
        aria-label="Show keyboard shortcuts"
      >
        <KeyboardIcon className="h-4 w-4 text-text-primary" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 no-print">
          <div className="bg-surface rounded-lg p-4 max-w-sm w-full mx-4 shadow-xl">
            <h2 className="text-lg font-semibold mb-3 text-primary">Keyboard Shortcuts</h2>
            <ul className="space-y-2">
              {shortcuts.map((shortcut, index) => (
                <li key={index} className="flex justify-between items-center text-sm">
                  <span className="text-text-primary">{shortcut.description}</span>
                  <div className="flex gap-1">
                    {shortcut.keys.map((key, keyIndex) => (
                      <kbd
                        key={keyIndex}
                        className="px-1.5 py-0.5 bg-surface-hover rounded text-xs text-text-secondary"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full bg-primary hover:bg-primary-hover text-white px-3 py-1.5 
                rounded text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default KeyboardShortcuts 