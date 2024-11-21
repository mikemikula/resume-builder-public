export type Theme = 'light' | 'dark'

export const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'
  
  const savedTheme = localStorage.getItem('theme') as Theme | null
  if (savedTheme) return savedTheme

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export const applyTheme = (theme: Theme): void => {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  localStorage.setItem('theme', theme)
} 