/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'surface': {
          DEFAULT: 'var(--surface)',
          hover: 'var(--surface-hover)',
        },
        'text': {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
} 