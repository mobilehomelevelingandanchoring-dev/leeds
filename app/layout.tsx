import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallButton from '@/components/StickyCallButton'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Car Keys Leeds | Mobile Auto Locksmith | 24/7 Emergency Service',
    template: '%s | Car Keys Leeds',
  },
  description:
    'Emergency mobile auto locksmith in Leeds. Lost car keys, locked out, key programming. 30–60 min response across all Leeds areas. Available 24/7. Call now.',
  keywords: [
    'car keys Leeds',
    'auto locksmith Leeds',
    'lost car keys Leeds',
    'car lockout Leeds',
    'car key replacement Leeds',
    'key programming Leeds',
    'emergency locksmith Leeds',
    'mobile locksmith Leeds',
    'Middleton Leeds locksmith',
  ],
  metadataBase: new URL('https://carkeysleeds.co.uk'),
  alternates: { canonical: 'https://carkeysleeds.co.uk' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://carkeysleeds.co.uk',
    siteName: 'Car Keys Leeds',
    title: 'Car Keys Leeds | Mobile Auto Locksmith | 24/7',
    description:
      "Leeds' fastest mobile auto locksmith. 30–60 min response. Lost keys, lockouts & programming.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Car Keys Leeds' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Keys Leeds | 24/7 Mobile Auto Locksmith',
    description: 'Emergency car key replacement across Leeds. Fast response, all makes covered.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocksmithBusiness',
  '@id': 'https://carkeysleeds.co.uk/#business',
  name: 'Car Keys Leeds',
  description:
    'Mobile auto locksmith serving Leeds and surrounding areas. Specialists in car key replacement, key programming, and emergency vehicle access.',
  url: 'https://carkeysleeds.co.uk',
  telephone: '+447700900000',
  priceRange: '££',
  image: 'https://carkeysleeds.co.uk/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Middleton',
    addressRegion: 'Leeds',
    postalCode: 'LS10',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '53.7638',
    longitude: '-1.5438',
  },
  areaServed: {
    '@type': 'City',
    name: 'Leeds',
    addressCountry: 'GB',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Auto Locksmith Services Leeds',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Car Key Replacement Leeds' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Car Lockout Service Leeds' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Transponder Key Programming Leeds' },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '143',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.facebook.com/carkeysleeds',
    'https://www.google.com/maps?cid=carkeysleeds',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  )
}
