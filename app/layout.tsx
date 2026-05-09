import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCallButton from '@/components/StickyCallButton'
import { websiteSchema, organizationSchema } from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  themeColor: '#0b1d35',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Car Keys Leeds | Mobile Auto Locksmith | 24/7 Emergency Service',
    template: '%s | Car Keys Leeds',
  },
  description:
    'Emergency mobile auto locksmith in Leeds. Lost car keys, locked out, key programming. 30–60 min response across all Leeds areas. MLA approved. Available 24/7. Call now.',
  metadataBase: new URL('https://carkeysleeds.co.uk'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://carkeysleeds.co.uk',
    siteName: 'Car Keys Leeds',
    title: 'Car Keys Leeds | Mobile Auto Locksmith | 24/7',
    description:
      "Leeds' MLA-approved mobile auto locksmith. 30–60 min response. Lost keys, lockouts & programming.",
    images: [
      {
        url: '/images/business-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Car Keys Leeds — Motorkeys Auto Locksmiths mobile service van',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Keys Leeds | 24/7 Mobile Auto Locksmith',
    description: 'Emergency car key replacement across Leeds. Fast response, all makes covered. MLA approved.',
    images: ['/images/business-banner.webp'],
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
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/images/logo.webp',
    apple: '/images/logo.webp',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* Entity graph — WebSite anchors the domain; Organization anchors the business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  )
}
