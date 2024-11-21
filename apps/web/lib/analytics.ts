type AnalyticsEventProperties = {
  // Click position
  click_relative_x?: number
  click_relative_y?: number
  
  // Element info
  element_section?: string
  element_type?: string
  element_aria_label?: string
  element_classes?: string
  element_component?: string
  element_href?: string
  element_id?: string
  
  // Location context
  is_footer?: boolean
  is_header?: boolean
  is_navigation?: boolean
  section_id?: string
  
  // Error tracking
  error_file?: string
  error_line?: number
  error_message?: string
  error_stack?: string
  error_component?: string
  
  // Custom properties
  [key: string]: string | number | boolean | undefined
}

type AnalyticsEvent = {
  name: string
  properties?: AnalyticsEventProperties
}

export const trackEvent = (event: AnalyticsEvent): void => {
  if (!window.gtag) return

  window.gtag('event', event.name, {
    ...event.properties,
    send_to: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  })
}

// Helper to get element details
const getElementDetails = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // Handle nullable values
  const elementSection = element.closest('[data-section]')?.getAttribute('data-section') || undefined
  const ariaLabel = element.getAttribute('aria-label') || undefined

  return {
    click_relative_x: Math.round((rect.left / viewportWidth) * 100),
    click_relative_y: Math.round((rect.top / viewportHeight) * 100),
    element_type: element.tagName.toLowerCase(),
    element_aria_label: ariaLabel,
    element_classes: element.className,
    element_component: element.dataset.component,
    element_href: element instanceof HTMLAnchorElement ? element.href : undefined,
    element_id: element.id || undefined,
    is_footer: element.closest('footer') !== null,
    is_header: element.closest('header') !== null,
    is_navigation: element.closest('nav') !== null,
    section_id: element.closest('section')?.id || undefined,
    element_section: elementSection
  }
}

// Track clicks
export const trackClick = (element: HTMLElement) => {
  trackEvent({
    name: 'click',
    properties: getElementDetails(element)
  })
}

// Track errors
export const trackError = (error: Error, errorInfo: { componentStack: string }) => {
  const lineMatch = error.stack?.split('\n')[1]?.match(/:(\d+):\d+/)
  const errorLine = lineMatch?.[1] ? parseInt(lineMatch[1], 10) : undefined

  trackEvent({
    name: 'error',
    properties: {
      error_file: error.stack?.split('\n')[1]?.match(/\((.*?)\)/)?.[1] || 'unknown',
      error_line: errorLine,
      error_message: error.message,
      error_stack: error.stack || 'no stack trace',
      error_component: errorInfo.componentStack
    }
  })
}

type AnalyticsMetrics = {
  active_time?: number
  engagement_time?: number
  scroll_depth?: number
  time_on_page?: number
}

// Add metrics tracking
export const trackMetrics = (metrics: AnalyticsMetrics): void => {
  if (!window.gtag) return

  window.gtag('event', 'custom_metrics', {
    ...metrics,
    send_to: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  })
}

// Track scroll depth
export const trackScrollDepth = (): (() => void) => {
  let maxScroll = 0
  
  const calculateScrollDepth = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight - windowHeight
    const scrollTop = window.scrollY
    const scrollPercentage = Math.round((scrollTop / documentHeight) * 100)
    
    if (scrollPercentage > maxScroll) {
      maxScroll = scrollPercentage
      // Track as standard GA4 scroll event
      trackStandardEvents.scroll(maxScroll)
      // Track as custom metric
      trackCustomMetrics.scrollDepth(maxScroll)
    }
  }

  window.addEventListener('scroll', calculateScrollDepth)
  return () => window.removeEventListener('scroll', calculateScrollDepth)
}

// Track active time
export const trackActiveTime = (): (() => void) => {
  let startTime = Date.now()
  let isActive = true
  
  const updateActiveTime = () => {
    if (isActive) {
      const activeTime = Math.round((Date.now() - startTime) / 1000)
      trackCustomMetrics.activeTime(activeTime)
      trackCustomMetrics.engagementTime(activeTime)
    }
  }

  const resetTimer = () => {
    if (!isActive) {
      isActive = true
      startTime = Date.now()
    }
  }

  const markInactive = () => {
    isActive = false
  }

  const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart']
  events.forEach(event => window.addEventListener(event, resetTimer))
  
  const inactivityTimer = setInterval(markInactive, 60000)
  const trackingInterval = setInterval(updateActiveTime, 5000)

  return () => {
    events.forEach(event => window.removeEventListener(event, resetTimer))
    clearInterval(inactivityTimer)
    clearInterval(trackingInterval)
  }
}

// Track time on page
export const trackTimeOnPage = (): (() => void) => {
  const startTime = Date.now()
  
  const updateTimeOnPage = () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000)
    trackCustomMetrics.timeOnPage(timeOnPage)
  }

  const interval = setInterval(updateTimeOnPage, 5000)
  return () => clearInterval(interval)
}

// Standard GA4 Events (these are built-in GA4 events)
export const trackStandardEvents = {
  pageView: (url: string): void => {
    trackEvent({
      name: 'page_view', // Standard GA4 event
      properties: {
        page_location: window.location.href,
        page_path: url,
        page_title: document.title
      }
    })
  },

  scroll: (depth: number): void => {
    trackEvent({
      name: 'scroll', // Standard GA4 event
      properties: {
        percent_scrolled: depth
      }
    })
  },

  firstVisit: (): void => {
    const isFirstVisit = !localStorage.getItem('has_visited')
    if (isFirstVisit) {
      trackEvent({
        name: 'first_visit', // Standard GA4 event
        properties: {
          referrer: document.referrer,
          landing_page: window.location.pathname
        }
      })
      localStorage.setItem('has_visited', 'true')
    }
  },

  sessionStart: (): void => {
    trackEvent({
      name: 'session_start', // Standard GA4 event
      properties: {
        session_id: Date.now().toString(),
        engagement_time_msec: 0
      }
    })
  }
}

// Custom Definitions (these need to be configured in GA4)
export const trackCustomMetrics = {
  activeTime: (seconds: number): void => {
    trackEvent({
      name: 'custom_metric', // Custom event for metrics
      properties: {
        metric_name: 'active_time',
        metric_value: seconds,
        metric_unit: 'seconds'
      }
    })
  },

  engagementTime: (seconds: number): void => {
    trackEvent({
      name: 'custom_metric',
      properties: {
        metric_name: 'engagement_time',
        metric_value: seconds,
        metric_unit: 'seconds'
      }
    })
  },

  scrollDepth: (percentage: number): void => {
    trackEvent({
      name: 'custom_metric',
      properties: {
        metric_name: 'scroll_depth',
        metric_value: percentage,
        metric_unit: 'percentage'
      }
    })
  },

  timeOnPage: (seconds: number): void => {
    trackEvent({
      name: 'custom_metric',
      properties: {
        metric_name: 'time_on_page',
        metric_value: seconds,
        metric_unit: 'seconds'
      }
    })
  }
} 