// Centralised schema.org graph — all entities share stable @id anchors so
// Google can merge them into a single Knowledge Graph node.

export const SITE = 'https://carkeysleeds.co.uk'
export const PHONE_E164 = '+447940757717'
export const PHONE_DISPLAY = '07940 757717'
export const BUSINESS_NAME = 'Car Keys Leeds'
export const BUSINESS_ALT = 'Motorkeys Auto Locksmiths'

// ─── Breadcrumbs ─────────────────────────────────────────────────────────────

export type Crumb = { name: string; item?: string }

export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, item }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      ...(item && { item }),
    })),
  }
}

// ─── WebSite (enables Sitelinks Search Box in SERP) ──────────────────────────

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: SITE,
    name: BUSINESS_NAME,
    publisher: { '@id': `${SITE}/#business` },
  }
}

// ─── Organization (establishes entity for Knowledge Panel) ───────────────────

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocksmithBusiness'],
    '@id': `${SITE}/#business`,
    name: BUSINESS_NAME,
    alternateName: BUSINESS_ALT,
    url: SITE,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE}/images/logo.webp`,
      width: 280,
      height: 112,
    },
    image: `${SITE}/images/business-banner.webp`,
    telephone: PHONE_E164,
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Middleton',
      addressLocality: 'Leeds',
      addressRegion: 'West Yorkshire',
      postalCode: 'LS10',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '53.7638',
      longitude: '-1.5438',
    },
    areaServed: [
      { '@type': 'City', name: 'Leeds', addressCountry: 'GB' },
      { '@type': 'AdministrativeArea', name: 'West Yorkshire', addressCountry: 'GB' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Master Locksmiths Association Approved Company',
        credentialCategory: 'Professional Membership',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Master Locksmiths Association',
          url: 'https://www.locksmiths.co.uk',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Auto Locksmiths Association Member',
        credentialCategory: 'Professional Membership',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Auto Locksmiths Association',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '143',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.facebook.com/mickkirk61',
    ],
  }
}

// ─── Service page schema ──────────────────────────────────────────────────────

export function serviceSchema(opts: {
  name: string
  url: string
  description: string
  priceRange: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${opts.url}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: opts.url,
    provider: { '@id': `${SITE}/#business` },
    areaServed: { '@type': 'City', name: 'Leeds', addressCountry: 'GB' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      priceRange: opts.priceRange,
      availability: 'https://schema.org/InStock',
    },
  }
}

// ─── Location / service-area page schema ─────────────────────────────────────

export function locationSchema(opts: {
  name: string
  locality: string
  url: string
  postcode: string
  lat: string
  lng: string
  description: string
  areaNames: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocksmithBusiness',
    '@id': `${opts.url}#location`,
    name: `${BUSINESS_NAME} — ${opts.name}`,
    description: opts.description,
    url: opts.url,
    telephone: PHONE_E164,
    branchOf: { '@id': `${SITE}/#business` },
    address: {
      '@type': 'PostalAddress',
      addressLocality: opts.locality,
      addressRegion: 'West Yorkshire',
      postalCode: opts.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: opts.lat,
      longitude: opts.lng,
    },
    areaServed: opts.areaNames.map(n => ({ '@type': 'Place', name: n })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  }
}

// ─── FAQ page schema ──────────────────────────────────────────────────────────

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

// ─── HowTo schema (service process sections) ─────────────────────────────────

export function howToSchema(opts: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

// ─── Speakable (voice search / AI Overviews eligibility) ─────────────────────

export function speakableSchema(pageUrl: string, selectors: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    isPartOf: { '@id': `${SITE}/#website` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: selectors,
    },
  }
}

// ─── WebPage (general page entity) ───────────────────────────────────────────

export function webPageSchema(opts: {
  url: string
  name: string
  description: string
  breadcrumb?: Crumb[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#business` },
    ...(opts.breadcrumb && {
      breadcrumb: breadcrumbSchema(opts.breadcrumb),
    }),
  }
}
