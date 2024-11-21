'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function useAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    console.log(`Page view: ${pathname}`)
  }, [pathname])
} 