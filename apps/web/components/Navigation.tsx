'use client'

import { resumeConfig } from '@/config'
import type { NavigationItem } from '@/types'

export default function Navigation() {
  const { navigation } = resumeConfig

  return (
    <nav className="fixed top-0 left-0 right-0 bg-surface/80 backdrop-blur-sm border-b border-border z-40">
      <div className="max-w-[1200px] mx-auto px-4">
        <ul className="flex items-center space-x-6 py-3">
          {navigation.sections.map((section: NavigationItem) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="flex items-center gap-1.5 text-sm hover:text-text-primary transition-colors"
              >
                <div className="h-1 w-1 rounded-full bg-accent" />
                <span>{section.short}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
} 