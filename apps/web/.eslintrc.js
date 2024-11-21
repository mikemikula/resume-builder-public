module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@next/next/no-html-link-for-pages': 'off'
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'dist/',
    'out/',
    'coverage/',
    'public/',
    '*.d.ts'
  ],
  settings: {
    next: {
      rootDir: 'apps/web'
    }
  },
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ]
} 