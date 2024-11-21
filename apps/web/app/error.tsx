'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Something went wrong!</h1>
        <p className="text-text-secondary mb-8">An error occurred while loading this page.</p>
        <button
          onClick={reset}
          className="text-primary hover:text-accent transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 