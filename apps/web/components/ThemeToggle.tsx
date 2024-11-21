'use client'

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-1.5 rounded-full bg-surface hover:bg-surface-hover 
        transition-all duration-300 hover:scale-105 no-print z-50"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-4 w-4 text-yellow-400" />
      ) : (
        <MoonIcon className="h-4 w-4 text-text-primary" />
      )}
    </button>
  )
} 