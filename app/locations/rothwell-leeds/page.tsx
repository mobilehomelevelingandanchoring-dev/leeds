import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Auto Locksmith Rothwell Leeds LS26 | Car Keys | 25–40 Min',
  description:
    'Mobile auto locksmith in Rothwell, Leeds LS26. Car key replacement, lockouts & key programming. 25–40 min response. All makes. Call 07940 757717.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/locations/rothwell-leeds' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocksmithBusiness',
  name: 'Car Keys Leeds — Rothwell',
  description: 'Mobile auto locksmith serving Rothwell, Leeds LS26. 25–40 minute response.',
  url: 'https://carkeysleeds.co.uk/locations/rothwell-leeds',
  telephone: '+447940757717',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rothwell',
    addressRegion: 'Leeds',
    postalCode: 'LS26',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '53.7496', longitude: '-1.4875' },
  areaServed: { '@type': 'Place', name: 'Rothwell, Leeds LS26' },
}

export default function RothwellLeedsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="bg-brand-navy py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/locations" className="hover:text-amber-400 transition-colors">Locations</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Rothwell Leeds</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Auto Locksmith Rothwell Leeds
            <span className="block text-amber-400 text-3xl sm:text-4xl mt-1">LS26 — 25 to 40 Minutes</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Rothwell is a quick hop from our Middleton base via the A654. Whether you need a replacement car key or you&apos;re locked out in LS26, we respond 24 hours a day.
          </p>
          <a href="tel:+447940757717" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call 07940 757717
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-green-50 rounded-2xl border border-green-200">
          {[
            { label: 'Response (Rothwell)', value: '25–40 min' },
            { label: 'Service', value: '24/7' },
            { label: 'Key types', value: 'All' },
            { label: 'Rating', value: '4.9 ★' },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-brand-navy">{f.value}</div>
              <div className="text-slate-500 text-xs sm:text-sm mt-1">{f.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-10" aria-labelledby="about-rothwell">
          <h2 id="about-rothwell" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            Car Key Specialist Covering Rothwell LS26
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Rothwell is a well-connected South Leeds suburb — close to the M62, easy access via the A654 from Middleton, and a mix of residential estates, retail areas, and industrial zones near the motorway junction. We regularly work in Rothwell covering Royds Lane, Oulton, Robin Hood, and the newer residential developments around Commercial Road.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            The M62 proximity makes Rothwell a common spot for motorway-adjacent lockouts — drivers stopping off the motorway, or commuters who find issues when they return to their car. We respond to roadside situations in this area as well as home and workplace call-outs.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Common vehicles in the LS26 area include a high proportion of newer SUVs and crossovers — Nissan Qashqai, Ford Kuga, Hyundai Tucson — alongside standard Fiestas, Corsas, and Astras. We carry programming data for all of these.
          </p>
        </section>

        <section className="mb-10" aria-labelledby="rothwell-services">
          <h2 id="rothwell-services" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-5">
            Services in Rothwell LS26
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Car Key Replacement Rothwell', desc: 'Full key replacement — cut and programmed on-site in Rothwell. All makes, from Ford to BMW.', href: '/services/car-key-replacement' },
              { title: 'Emergency Lockout Rothwell', desc: 'Locked out in Rothwell or nearby Oulton? We reach LS26 in 25–40 minutes, any time of day or night.', href: '/services/car-lockout' },
              { title: 'Transponder Programming LS26', desc: 'Key physically works but engine immobilised? On-site ECU programming at your Rothwell location.', href: '/services/transponder-key-programming' },
              { title: 'Spare Key — Rothwell', desc: 'Get a spare key made before you need it. We visit your Rothwell home or workplace in a single visit.', href: '/services/spare-key-cutting' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-md transition-all duration-200">
                <h3 className="font-bold text-brand-navy mb-1.5">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-brand-navy rounded-2xl p-7 text-white">
          <h3 className="font-bold text-lg mb-4">Nearby Areas</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Middleton LS10', href: '/locations/middleton-leeds' },
              { name: 'Morley LS27', href: '/locations/morley-leeds' },
              { name: 'Garforth LS25', href: '/locations/garforth-leeds' },
              { name: 'Kippax LS25', href: '/locations/kippax-leeds' },
              { name: 'Beeston LS11', href: '/locations/beeston-leeds' },
            ].map((area) => (
              <Link key={area.name} href={area.href} className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </article>

      <CTA heading="Need a Locksmith in Rothwell?" subheading="25–40 minute response to LS26, 24/7. Call now for a fixed price quote." />
    </>
  )
}
