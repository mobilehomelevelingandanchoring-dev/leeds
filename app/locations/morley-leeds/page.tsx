import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'
import { locationSchema, breadcrumbSchema } from '@/lib/schema'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Auto Locksmith Morley Leeds LS27 | Car Key Replacement | 24/7',
  description:
    'Mobile auto locksmith in Morley, Leeds LS27. Car key replacement, lockouts & programming. 25–40 min response. All makes covered. Call 07309 903243.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/locations/morley-leeds' },
}

const PAGE_URL = 'https://carkeysleeds.co.uk/locations/morley-leeds'

const locSchema = locationSchema({
  name: 'Morley',
  locality: 'Morley',
  url: PAGE_URL,
  postcode: 'LS27',
  lat: '53.7437',
  lng: '-1.5998',
  description: 'Mobile auto locksmith serving Morley, Leeds LS27. 25–40 minute response from our Middleton base.',
  areaNames: ['Morley LS27', 'Churwell LS27', 'Gildersome LS27', 'Tingley LS27', 'Rothwell LS26'],
})

const crumbSchema = breadcrumbSchema([
  { name: 'Home', item: 'https://carkeysleeds.co.uk' },
  { name: 'Locations', item: 'https://carkeysleeds.co.uk/locations' },
  { name: 'Morley Leeds', item: PAGE_URL },
])

export default function MorleyLeedsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />

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
            <span className="text-white">Morley Leeds</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Auto Locksmith Morley Leeds
            <span className="block text-amber-400 text-3xl sm:text-4xl mt-1">LS27 — 25 to 40 Minutes</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Morley is one of our most frequent call-out areas in South Leeds. Locked out of your car on Queen Street? Lost your keys near Morley town centre? We&apos;ll be there fast.
          </p>
          <a href="tel:+447309903243" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call 07309 903243
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-green-50 rounded-2xl border border-green-200">
          {[
            { label: 'Response (Morley)', value: '25–40 min' },
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

        <section className="mb-10" aria-labelledby="about-morley">
          <h2 id="about-morley" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            Car Key Services in Morley LS27
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Morley sits south-west of Middleton via the A650 and A643 — a comfortable 25–40 minute run from our base depending on time of day. We cover all parts of Morley, including the town centre around Queen Street and Albion Street, the residential areas off Fountain Street, the Churwell side, and out towards the Gildersome junction.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Morley is a busy commuter town with a lot of daily drivers, and car key issues are a common call-out here. We&apos;ve replaced keys in Morley car parks, on residential driveways, and at roadside when people have found themselves stranded before the morning commute.
          </p>
          <p className="text-slate-600 leading-relaxed">
            The most common vehicles we work on in LS27 are Ford Focus, Nissan Qashqai, Kia Sportage, and Vauxhall Astra — all of which we carry key stock for, enabling single-visit completion in most cases.
          </p>
        </section>

        <section className="mb-10" aria-labelledby="morley-services">
          <h2 id="morley-services" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-5">
            Services Available in Morley LS27
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Car Key Replacement Morley', desc: 'Lost all keys or need a spare? We replace and programme car keys on-site in Morley — no dealer, no waiting.', href: '/services/car-key-replacement' },
              { title: 'Emergency Lockout Morley', desc: 'Locked out anywhere in LS27? We respond 24 hours a day and aim to reach Morley in 25–40 minutes.', href: '/services/car-lockout' },
              { title: 'Transponder Key Programming', desc: "Have a key cut but the engine won't start? We programme chips to your car's ECU at your Morley location.", href: '/services/transponder-key-programming' },
              { title: 'Van Keys Morley', desc: 'Working van locked out or lost van keys in the Morley area? We cover all major commercial vans.', href: '/services/van-keys' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-md transition-all duration-200">
                <h3 className="font-bold text-brand-navy mb-1.5">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-brand-navy rounded-2xl p-7 text-white">
          <h3 className="font-bold text-lg mb-4">Nearby Areas We Also Cover</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Middleton LS10', href: '/locations/middleton-leeds' },
              { name: 'Rothwell LS26', href: '/locations/rothwell-leeds' },
              { name: 'Churwell LS27', href: '/locations/churwell-leeds' },
              { name: 'Beeston LS11', href: '/locations/beeston-leeds' },
              { name: 'Batley WF17', href: '/locations/batley' },
              { name: 'Gildersome LS27', href: '/locations/gildersome' },
            ].map((area) => (
              <Link key={area.name} href={area.href} className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </article>

      <CTA heading="Need a Locksmith in Morley Leeds?" subheading="We cover LS27 fully — 25 to 40 minute response, 24/7. Fixed price quoted over the phone." />
    </>
  )
}
