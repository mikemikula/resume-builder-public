import { resumeConfig } from '@/config'

export function useSection(sectionId: string) {
  const section = resumeConfig.navigation.sections.find((s: { id: string }) => s.id === sectionId)
  
  return {
    title: section?.label || '',
    short: section?.short || '',
    id: section?.id || ''
  }
} 