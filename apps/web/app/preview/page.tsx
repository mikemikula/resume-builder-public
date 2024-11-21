import PreviewContent from './PreviewContent'
import { resumeConfig } from '@/config'
import type { ResumeConfig } from '@/types'

export default function PreviewPage(): React.JSX.Element {
  const achievements = Array.isArray(resumeConfig.achievements) 
    ? { items: resumeConfig.achievements }
    : resumeConfig.achievements

  const previewConfig: ResumeConfig = {
    ...resumeConfig,
    achievements
  }

  return <PreviewContent config={previewConfig} />
} 