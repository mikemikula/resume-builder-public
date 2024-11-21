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
          <h2 className="text-xl font-semibold text-text-primary">Information Collection</h2>
          <p>This website collects analytics data to improve user experience. The following information may be collected:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Page navigation patterns</li>
            <li>Source of website visits</li>
            <li>General location data</li>
            <li>Technical specifications</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-text-primary">Use of Cookies</h2>
          <p>Cookies are utilized for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Storing user preferences</li>
            <li>Understanding visitor patterns</li>
            <li>Optimizing website functionality</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-text-primary">User Rights</h2>
          <p>Visitors have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Disable analytics collection</li>
            <li>Request data removal</li>
            <li>Access collected information</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-text-primary">Contact Information</h2>
          <p>For privacy-related questions, please contact:</p>
          <p>Email: {SITE_CONFIG.email}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-text-primary">Policy Updates</h2>
          <p>This privacy policy was last updated on {new Date().toLocaleDateString()}.</p>
          <p>We reserve the right to update this policy as needed to comply with relevant regulations.</p>
        </section>
      </motion.div>
    </div>
  )
} 