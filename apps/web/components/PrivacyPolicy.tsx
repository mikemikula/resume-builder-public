'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { SITE_CONFIG } from '@/lib/constants'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 left-0 right-0 bg-surface/80 backdrop-blur-sm border-b border-border z-40">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="py-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm 
                bg-surface/10 hover:bg-surface/20 rounded-lg 
                text-text-secondary hover:text-text-primary 
                transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto px-4 py-8 space-y-6 text-text-secondary"
      >
        <h1 className="text-3xl font-bold text-text-primary mb-8">Privacy Policy</h1>
        
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-text-primary">Data Collection</h2>
          <p>This website uses Google Analytics to understand visitor behavior. The following data may be collected:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pages visited and time spent</li>
            <li>Referring websites</li>
            <li>Approximate geographic location</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-text-primary">Cookie Usage</h2>
          <p>We use cookies to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Remember your cookie preferences</li>
            <li>Analyze site traffic and user behavior</li>
            <li>Improve site performance</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-text-primary">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Opt-out of analytics tracking</li>
            <li>Request deletion of your data</li>
            <li>Access your collected data</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-text-primary">Contact</h2>
          <p>For privacy-related inquiries, please contact:</p>
          <p>Email: {SITE_CONFIG.email}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-text-primary">Updates</h2>
          <p>This privacy policy was last updated on {new Date().toLocaleDateString()}.</p>
        </section>
      </motion.div>
    </div>
  )
} 