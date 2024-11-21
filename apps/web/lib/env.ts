// Define environment variable types
declare global {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_DOMAIN: string;
    readonly NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
    readonly NEXT_PUBLIC_ENV: 'development' | 'production' | 'test';
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}

// Environment variables with type safety
export const env = {
  SITE_URL: process.env.NEXT_PUBLIC_DOMAIN ?? 'http://localhost:3000',
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '',
  ENV: process.env.NEXT_PUBLIC_ENV ?? 'development',
} as const;

// Export type for use in other files
export type Env = typeof env;

// Ensure this file is treated as a module
export {}; 