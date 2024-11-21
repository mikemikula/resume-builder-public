import fs from 'fs'
import path from 'path'

export function verifyImageExists(imagePath: string): boolean {
  const fullPath = path.join(process.cwd(), 'public', imagePath)
  try {
    return fs.existsSync(fullPath)
  } catch (error) {
    console.error(`Error verifying image at ${fullPath}:`, error)
    return false
  }
} 