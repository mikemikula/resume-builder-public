'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { 
  trackClick, 
  trackError,
  trackScrollDepth,
  trackActiveTime,
  trackTimeOnPage,
  trackStandardEvents
} from '@/lib'
import { getDomainWithoutProtocol } from '@/lib/utils/domain'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_ID) return

    const url = pathname + searchParams.toString()
    
    // Configure GA4
    window.gtag('config', GA_ID, {
      page_path: url,
      cookie_domain: getDomainWithoutProtocol(),
    })

    // Track standard GA4 events
    trackStandardEvents.sessionStart()
    trackStandardEvents.firstVisit()
    trackStandardEvents.pageView(url)

    // Click tracking
    const handleClick = (e: MouseEvent) => {
      const element = e.target as HTMLElement
      if (element) {
        trackClick(element)
      }
    }

    // Error tracking
    const handleError = (event: ErrorEvent) => {
      trackError(event.error, { componentStack: event.filename || '' })
    }

    // Setup all tracking
    window.addEventListener('click', handleClick)
    window.addEventListener('error', handleError)
    
    // Initialize tracking with cleanup functions
    const removeScrollTracking = trackScrollDepth()
    const removeActiveTracking = trackActiveTime()
    const removeTimeTracking = trackTimeOnPage()

    // Cleanup function
    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('error', handleError)
      removeScrollTracking()
      removeActiveTracking()
      removeTimeTracking()
    }
  }, [pathname, searchParams])

  return null
} 