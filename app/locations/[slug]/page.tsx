import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Reviews from '@/components/Reviews'
import { getLocationBySlug, DYNAMIC_LOCATION_SLUGS } from '@/lib/locations'
import { breadcrumbSchema, locationSchema, faqSchema } from '@/lib/schema'

export const dynamic = 'force-static'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return DYNAMIC_LOCATION_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const loc = getLocationBySlug(slug)
  if (!loc) return {}
  const url = `https://carkeysleeds.co.uk/locations/${loc.slug}`
  return {
    title: loc.metaTitle,
    description: loc.metaDesc,
    alternates: { canonical: url },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDesc,
      url,
      type: 'website',
    },
  }
}

const SERVICES = [
  { title: 'Car Key Replacement', href: '/services/car-key-replacement', desc: 'Lost all your keys? We cut and programme replacements on-site, same day.' },
  { title: 'Emergency Car Lockout', href: '/services/car-lockout', desc: 'Locked keys inside? We use non-destructive techniques — no damage to your vehicle.' },
  { title: 'Transponder Key Programming', href: '/services/transponder-key-programming', desc: 'Key cut but engine won\'t start? We programme the transponder chip to your ECU on-site.' },
  { title: 'Spare Key Cutting', href: '/services/spare-key-cutting', desc: 'Get a backup key before you need one — cheaper than an emergency callout later.' },
]

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const loc = getLocationBySlug(slug)
  if (!loc) notFound()

  const pageUrl = `https://carkeysleeds.co.uk/locations/${loc.slug}`

  const locSchema = locationSchema({
    name: loc.name,
    locality: loc.locality,
    url: pageUrl,
    postcode: loc.postcode,
    lat: loc.lat,
    lng: loc.lng,
    description: loc.metaDesc,
    areaNames: [
      `${loc.name}, ${loc.postcode}`,
      ...loc.nearby.map(n => `${n.name}, ${n.postcode}`),
    ],
  })

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', item: 'https://carkeysleeds.co.uk' },
    { name: 'Locations', item: 'https://carkeysleeds.co.uk/locations' },
    { name: `${loc.name} LS Locksmith` },
  ])

  const localFaqSchema = loc.faqs.length
    ? faqSchema(loc.faqs.map(f => ({ q: f.q, a: f.a })))
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {localFaqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localFaqSchema) }} />
      )}

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-16 px-4 sm:px-6 lg:px-8" aria-label={`Auto locksmith in ${loc.name} hero`}>
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/locations" className="hover:text-amber-400 transition-colors">Locations</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{loc.name}</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {loc.badge}
          </div>

          <h1 id="location-heading" className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Auto Locksmith in {loc.name}
            <span className="block text-amber-400 text-3xl sm:text-4xl mt-1">
              {loc.postcode} — {loc.responseTime} Response
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-4 max-w-2xl leading-relaxed" id="location-intro">
            {loc.intro}
          </p>
          <p className="text-slate-400 text-sm mb-8">
            MLA Approved · All makes covered · Fixed price quoted over the phone · No call-out charge
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+447309903243"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-200"
              aria-label="Call Car Keys Leeds on 07309 903243"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call 07309 903243
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Main content ───────────────────────────────────────────── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          {[
            { label: 'Response Time', value: loc.responseTime },
            { label: 'Availability', value: '24/7' },
            { label: 'MLA Approved', value: '✓' },
            { label: 'Rating', value: '4.9 ★' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-brand-navy">{stat.value}</div>
              <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Local content */}
        {loc.paragraphs.length > 0 && (
          <section className="mb-12" aria-labelledby="about-location">
            <h2 id="about-location" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-5">
              Car Key Specialist in {loc.name}, {loc.postcode}
            </h2>
            <div className="space-y-4">
              {loc.paragraphs.map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
              ))}
            </div>
          </section>
        )}

        {/* Services in this area */}
        <section className="mb-12" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            Auto Locksmith Services in {loc.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map(svc => (
              <Link
                key={svc.href}
                href={svc.href}
                className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-md transition-all duration-200"
                aria-label={`${svc.title} in ${loc.name}`}
              >
                <h3 className="font-bold text-brand-navy mb-1.5">{svc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-brand-blue text-sm font-semibold mt-3">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Common vehicles */}
        {loc.vehicles.length > 0 && (
          <section className="mb-12" aria-labelledby="vehicles-heading">
            <h2 id="vehicles-heading" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
              Vehicles We Commonly Work On in {loc.name}
            </h2>
            <p className="text-slate-600 mb-4">
              Based on our callout history in {loc.postcode}, these are the vehicles we see most frequently in this area:
            </p>
            <div className="flex flex-wrap gap-2.5 mb-4">
              {loc.vehicles.map(v => (
                <span key={v} className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-1.5 rounded-full">
                  {v}
                </span>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              Don&apos;t see your make? We cover 100+ vehicle makes. Call and we&apos;ll confirm straight away.
            </p>
          </section>
        )}

        {/* Local FAQs */}
        {loc.faqs.length > 0 && (
          <section className="mb-12" aria-labelledby="local-faq-heading">
            <h2 id="local-faq-heading" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
              Questions from {loc.name} Customers
            </h2>
            <div className="space-y-4">
              {loc.faqs.map((faq, i) => (
                <div key={i} className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h3 className="font-bold text-brand-navy mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Nearby areas */}
        {loc.nearby.length > 0 && (
          <section className="mb-12" aria-labelledby="nearby-heading">
            <h2 id="nearby-heading" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
              We Also Cover Areas Near {loc.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {loc.nearby.map(area => (
                <Link
                  key={area.slug}
                  href={`/locations/${area.slug}`}
                  className="flex items-center gap-2 bg-slate-100 hover:bg-brand-navy hover:text-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
                  aria-label={`Auto locksmith in ${area.name} ${area.postcode}`}
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {area.name}
                  <span className="text-slate-400 text-xs group-hover:text-slate-300">{area.postcode}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Trust box */}
        <div className="bg-brand-navy rounded-2xl p-7 text-white">
          <h3 className="font-bold text-lg mb-4">Why {loc.name} Drivers Choose Car Keys Leeds</h3>
          <ul className="space-y-2.5 text-slate-300 text-sm">
            {[
              `${loc.responseTime} response time to ${loc.name} — faster than any competitor from a dealer`,
              'Fixed price quoted over the phone before we travel — no hidden fees',
              'MLA Approved Company No. 003625 — professionally vetted and insured',
              'All makes and models covered — Ford, Vauxhall, VW, Audi, BMW, Nissan and 100+ more',
              'Fully equipped van on-site — most jobs completed in a single visit',
              '24 hours a day, 7 days a week — including bank holidays and Christmas',
            ].map(point => (
              <li key={point} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <Reviews />
      <FAQ />
      <CTA
        heading={`Need a Locksmith in ${loc.name}?`}
        subheading={`We cover ${loc.name} ${loc.postcode} 24/7. Call now for a fixed price and ${loc.responseTime} response.`}
      />
    </>
  )
}
