import { MetadataRoute } from 'next'
import { resumeConfig } from '@/config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: resumeConfig.personal.name,
    short_name: resumeConfig.personal.name.split(' ')[0],
    description: resumeConfig.personal.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000'
  }
} 