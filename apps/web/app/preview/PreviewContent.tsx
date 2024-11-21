'use client'

import * as React from 'react'
import type { ResumeConfig } from '@/types'

interface PreviewContentProps {
  config: ResumeConfig
}

export default function PreviewContent({ config }: PreviewContentProps) {
  return (
    <div className="w-[1200px] h-[627px] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white m-0 p-0">
      <div className="flex flex-col items-center p-10 max-w-[1000px]">
        <h1 className="text-6xl font-bold mb-6 text-center">
          {config.personal.name}
        </h1>
        <h2 className="text-3xl text-gray-300 mb-12 text-center">
          {config.personal.description}
        </h2>
      </div>
    </div>
  )
} 