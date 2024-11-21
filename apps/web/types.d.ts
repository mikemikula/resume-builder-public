/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly NEXT_PUBLIC_GA_MEASUREMENT_ID: string
    readonly NEXT_PUBLIC_DOMAIN: string
    readonly NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: string
  }
} 