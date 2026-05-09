import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Car Keys Leeds — Auto Locksmith',
    short_name: 'Car Keys Leeds',
    description: '24/7 mobile auto locksmith in Leeds. Lost keys, lockouts, key programming.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1d35',
    theme_color: '#0b1d35',
    orientation: 'portrait',
    categories: ['automotive', 'local business', 'utilities'],
    icons: [
      {
        src: '/images/logo.webp',
        sizes: 'any',
        type: 'image/webp',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'Call Now',
        short_name: 'Call',
        description: 'Call Car Keys Leeds directly',
        url: 'tel:+447940757717',
        icons: [{ src: '/images/logo.webp', sizes: '96x96' }],
      },
    ],
  }
}
