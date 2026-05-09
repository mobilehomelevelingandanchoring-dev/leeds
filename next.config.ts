import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Compression at the Node layer (Vercel's edge also compresses, belt-and-braces)
  compress: true,

  // Remove X-Powered-By: Next.js fingerprinting header
  poweredByHeader: false,

  images: {
    // Serve AVIF first (smallest), WebP as fallback
    formats: ['image/avif', 'image/webp'],
    // Cover all common breakpoints including retina
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Aggressive caching — images don't change between deploys
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  async headers() {
    return [
      {
        // Security + performance headers on every route
        source: '/(.*)',
        headers: [
          // Strict Transport Security — force HTTPS for 2 years, include subdomains
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Block clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // Refer only the origin on cross-origin requests (not full path)
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Enable browser DNS prefetch for assets
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          // Permissions policy — disable unneeded browser APIs
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
        ],
      },
      {
        // Long-lived cache on static image assets
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache Next.js static chunks aggressively (they're content-hashed)
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig
