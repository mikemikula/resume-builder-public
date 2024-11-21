/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_DOMAIN 
    : '',
  experimental: {
    optimizeCss: false,
    optimizePackageImports: [
      '@heroicons/react',
      'framer-motion',
      'geist'
    ],
  },
  env: {
    NEXT_PUBLIC_VERCEL_ENV: process.env.NODE_ENV
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'named',
        chunkIds: 'named',
        splitChunks: {
          cacheGroups: {
            default: false,
            vendors: false
          }
        }
      }
    }
    return config
  },
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json'
  },
}

export default nextConfig 