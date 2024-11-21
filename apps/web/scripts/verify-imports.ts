#!/usr/bin/env node
import { spawnSync } from 'child_process'
import { resolve } from 'path'

function verifyImports() {
  console.log('🔍 Verifying TypeScript imports...')
  
  const result = spawnSync('pnpm', ['tsc', '--noEmit'], {
    stdio: 'inherit',
    shell: true,
    cwd: resolve(__dirname, '..')
  })

  if (result.status === 0) {
    console.log('✅ All imports verified')
    return true
  } else {
    console.error('❌ Import verification failed')
    return false
  }
}

function main() {
  const isValid = verifyImports()
  if (!isValid) {
    process.exit(1)
  }
}

main() 