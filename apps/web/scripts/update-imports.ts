#!/usr/bin/env node
import * as fs from 'fs'
import * as path from 'path'
import glob from 'fast-glob'

interface ImportUpdates {
  [key: string]: string
}

const updateImports = async () => {
  const webDir = path.resolve(__dirname, '..')
  console.log('📁 Working directory:', webDir)
  
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['**/node_modules/**', '**/.next/**', '**/dist/**', '**/scripts/**'],
    cwd: webDir,
    absolute: true
  })

  const importUpdates: ImportUpdates = {
    '@/config/resume': '@/config',
    '@/types/resume': '@/types',
    '@/hooks/useSection': '@/hooks',
    '@/lib/theme': '@/lib',
    '@/lib/generatePDF': '@/lib',
    '@/components/JsonLd': '@/components',
    '@/components/WorkExperienceJsonLd': '@/components',
    '@/components/BreadcrumbJsonLd': '@/components'
  }

  const typeParameterFixes: ImportUpdates = {
    'map\\((\\w+)\\s*=>': 'map(($1: any) =>',
    'map\\((\\w+),\\s*(\\w+)\\s*=>': 'map(($1: any, $2: number) =>',
    'find\\((\\w+)\\s*=>': 'find(($1: any) =>',
    '\\.map\\(l\\s*=>': '.map((l: ContactLink) =>',
    '\\.map\\(cert\\s*=>': '.map((cert: Certification) =>',
    '\\.map\\(job\\s*=>': '.map((job: Job) =>',
    '\\.map\\(section\\s*=>': '.map((section: Section) =>',
    '\\.map\\(competency\\s*=>': '.map((competency: string) =>',
    '\\.map\\(link\\s*=>': '.map((link: ContactLink) =>',
    '\\.map\\((\\w+):\\s*\\w+,\\s*index\\)': '.map(($1: any, index: number)',
    'sections\\.map\\((section,\\s*index)': 'sections.map((section: Section, index: number)',
    'competencies\\.map\\((competency,\\s*index)': 'competencies.map((competency: string, index: number)',
    'links\\.map\\((link,\\s*index)': 'links.map((link: ContactLink, index: number)'
  }

  let totalUpdates = 0

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8')
    let hasChanges = false

    // Update import paths
    Object.entries(importUpdates).forEach(([oldImport, newImport]) => {
      if (content.includes(oldImport)) {
        content = content.replace(new RegExp(oldImport, 'g'), newImport)
        hasChanges = true
        totalUpdates++
      }
    })

    // Update type parameters
    Object.entries(typeParameterFixes).forEach(([pattern, replacement]) => {
      const regex = new RegExp(pattern, 'g')
      if (regex.test(content)) {
        content = content.replace(regex, replacement)
        hasChanges = true
        totalUpdates++
      }
    })

    if (hasChanges) {
      fs.writeFileSync(file, content)
      console.log(`✅ Updated imports and types in ${path.relative(webDir, file)}`)
    }
  }

  console.log(`\n🎉 Total updates made: ${totalUpdates}`)
}

try {
  updateImports().catch(error => {
    console.error('❌ Error updating imports:', error)
    process.exit(1)
  })
} catch (error) {
  console.error('❌ Error updating imports:', error)
  process.exit(1)
} 