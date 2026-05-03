import type { MetadataRoute } from 'next'

const BASE_URL = 'https://carkeysleeds.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const services = [
    'car-key-replacement',
    'car-lockout',
    'transponder-key-programming',
    'spare-key-cutting',
    'remote-key-fob',
    'van-keys',
  ]

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

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...services.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    {
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...locations.map((slug) => ({
      url: `${BASE_URL}/locations/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: slug === 'middleton-leeds' ? 0.9 : 0.7,
    })),
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
