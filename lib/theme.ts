const THEME_KEY = 'resume-theme'

export const getStoredTheme = (): 'dark' | 'light' | null => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(THEME_KEY) as 'dark' | 'light' | null
}

export const setStoredTheme = (theme: 'dark' | 'light') => {
  if (typeof window === 'undefined') return
  localStorage.setItem(THEME_KEY, theme)
} 