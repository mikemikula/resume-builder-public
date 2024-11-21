'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type ConsentSettings = {
  analytics: boolean
  advertising: boolean
  personalization: boolean
  functionality: boolean
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consentSettings, setConsentSettings] = useState<ConsentSettings>({
    analytics: false,
    advertising: false,
    personalization: false,
    functionality: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowConsent(true)
    } else if (consent === 'accepted' && typeof window.gtag === 'function') {
      initializeGA()
    }
  }, [])

  const initializeGA = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
    if (typeof window.gtag === 'function') {
      initializeGA()
    }
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowConsent(false)
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }
  }

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    if (typeof window.gtag === 'function') {
      if (consentSettings.analytics) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        })
      } else {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied'
        })
      }
      if (consentSettings.advertising) {
        window.gtag('consent', 'update', {
          advertising_storage: 'granted'
        })
      } else {
        window.gtag('consent', 'update', {
          advertising_storage: 'denied'
        })
      }
      if (consentSettings.personalization) {
        window.gtag('consent', 'update', {
          personalization_storage: 'granted'
        })
      } else {
        window.gtag('consent', 'update', {
          personalization_storage: 'denied'
        })
      }
      if (consentSettings.functionality) {
        window.gtag('consent', 'update', {
          functionality_storage: 'granted'
        })
      } else {
        window.gtag('consent', 'update', {
          functionality_storage: 'denied'
        })
      }
    }
  }

  const handleSettingChange = (setting: keyof ConsentSettings) => {
    setConsentSettings((prev: ConsentSettings) => ({
      ...prev,
      [setting]: !prev[setting]
    }))
  }

  if (!showConsent) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg"
    >
      <div className="max-w-[1200px] mx-auto px-4 py-4 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary text-center md:text-left">
            This website uses cookies to enhance your experience and analyze site traffic.{' '}
            <Link href="/privacy" className="text-accent hover:underline">
              See our Privacy Policy
            </Link>{' '}
            for details.
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Cookie Settings
            </button>
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Decline All
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>

        {showSettings && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="space-y-4 border-t border-border pt-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 p-3 bg-surface/10 rounded-lg">
                <input
                  type="checkbox"
                  checked={consentSettings.analytics}
                  onChange={() => handleSettingChange('analytics')}
                  className="h-4 w-4 rounded border-border"
                />
                <div>
                  <p className="text-sm font-medium text-text-primary">Analytics Cookies</p>
                  <p className="text-xs text-text-secondary">Help us understand how visitors interact with the website</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 bg-surface/10 rounded-lg">
                <input
                  type="checkbox"
                  checked={consentSettings.advertising}
                  onChange={() => handleSettingChange('advertising')}
                  className="h-4 w-4 rounded border-border"
                />
                <div>
                  <p className="text-sm font-medium text-text-primary">Advertising Cookies</p>
                  <p className="text-xs text-text-secondary">Used to provide relevant advertisements</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 bg-surface/10 rounded-lg">
                <input
                  type="checkbox"
                  checked={consentSettings.personalization}
                  onChange={() => handleSettingChange('personalization')}
                  className="h-4 w-4 rounded border-border"
                />
                <div>
                  <p className="text-sm font-medium text-text-primary">Personalization</p>
                  <p className="text-xs text-text-secondary">Allow personalized content and recommendations</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 bg-surface/10 rounded-lg">
                <input
                  type="checkbox"
                  checked={consentSettings.functionality}
                  onChange={() => handleSettingChange('functionality')}
                  className="h-4 w-4 rounded border-border"
                />
                <div>
                  <p className="text-sm font-medium text-text-primary">Functionality Cookies</p>
                  <p className="text-xs text-text-secondary">Enable enhanced functionality and personalization</p>
                </div>
              </label>
            </div>
            <button
              onClick={() => {
                savePreferences()
                setShowSettings(false)
              }}
              className="w-full px-4 py-2 text-sm bg-surface/10 text-text-primary rounded-lg hover:bg-surface/20 transition-colors"
            >
              Save Preferences
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
} 