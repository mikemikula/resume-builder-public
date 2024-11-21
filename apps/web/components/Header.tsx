'use client'

import { motion } from 'framer-motion'
import { resumeConfig } from '@/config'
import { useSection } from '@/hooks'

export default function Header() {
  const { personal } = resumeConfig
  const { id } = useSection('header')

  return (
    <header id={id} className="py-8">
      <div className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-text-primary"
        >
          {personal.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-text-secondary"
        >
          {personal.description}
        </motion.p>
      </div>
    </header>
  )
} 