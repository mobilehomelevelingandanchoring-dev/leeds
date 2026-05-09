import type { MetadataRoute } from 'next'
import { brandSlugs } from '@/lib/brands'

const BASE = 'https://carkeysleeds.co.uk'

// Use real dates — not new Date() — so Googlebot doesn't see every page
// as "modified today" on every deploy, wasting crawl budget.
const SITE_LAUNCH = new Date('2025-04-01')
const CONTENT_UPDATED = new Date('2025-10-01')
const BRANDS_UPDATED = new Date('2026-05-09')

const services = [
  'car-key-replacement',
  'car-lockout',
  'transponder-key-programming',
  'spare-key-cutting',
  'remote-key-fob',
  'van-keys',
]

// All 23 location slugs — matching the actual pages that now exist
const locations = [
  'middleton-leeds',
  'beeston-leeds',
  'morley-leeds',
  'rothwell-leeds',
  'leeds-city-centre',
  'headingley-leeds',
  'chapel-allerton-leeds',
  'roundhay-leeds',
  'seacroft-leeds',
  'garforth-leeds',
  'crossgates-leeds',
  'horsforth-leeds',
  'pudsey-leeds',
  'armley-leeds',
  'bramley-leeds',
  'holbeck-leeds',
  'wortley-leeds',
  'otley-leeds',
  'guiseley-leeds',
  'hunslet-leeds',
  'yeadon-leeds',
  'kippax-leeds',
  'wetherby',
]

// Primary location pages get higher priority
const PRIMARY_LOCATIONS = new Set(['middleton-leeds', 'beeston-leeds', 'morley-leeds', 'rothwell-leeds', 'leeds-city-centre', 'holbeck-leeds', 'hunslet-leeds', 'armley-leeds'])

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/services`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...services.map(slug => ({
      url: `${BASE}/services/${slug}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    {
      url: `${BASE}/locations`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...locations.map(slug => ({
      url: `${BASE}/locations/${slug}`,
      lastModified: PRIMARY_LOCATIONS.has(slug) ? CONTENT_UPDATED : SITE_LAUNCH,
      changeFrequency: 'monthly' as const,
      priority: slug === 'middleton-leeds' ? 0.9 : PRIMARY_LOCATIONS.has(slug) ? 0.8 : 0.7,
    })),
    {
      url: `${BASE}/makes`,
      lastModified: BRANDS_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...brandSlugs.map(slug => ({
      url: `${BASE}/makes/${slug}`,
      lastModified: BRANDS_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/contact`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
