'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-4">404 - Page Not Found</h1>
        <p className="text-text-secondary mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link 
          href="/"
          className="text-primary hover:text-accent transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 