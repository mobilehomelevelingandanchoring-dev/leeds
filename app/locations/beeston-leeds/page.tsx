import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'
import Reviews from '@/components/Reviews'
import { locationSchema, breadcrumbSchema } from '@/lib/schema'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Auto Locksmith Beeston Leeds LS11 | Car Keys | Fast Response',
  description:
    'Mobile auto locksmith in Beeston, Leeds LS11. Car key replacement, lockouts & key programming. 25–35 min response from our Middleton base. Call 07309 903243.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/locations/beeston-leeds' },
}

const PAGE_URL = 'https://carkeysleeds.co.uk/locations/beeston-leeds'

const locSchema = locationSchema({
  name: 'Beeston',
  locality: 'Beeston',
  url: PAGE_URL,
  postcode: 'LS11',
  lat: '53.7735',
  lng: '-1.5648',
  description: 'Mobile auto locksmith serving Beeston, Leeds LS11 and surrounding areas. 25–35 minute response from our Middleton base.',
  areaNames: ['Beeston LS11', 'Holbeck LS11', 'Middleton LS10', 'Morley LS27'],
})

const crumbSchema = breadcrumbSchema([
  { name: 'Home', item: 'https://carkeysleeds.co.uk' },
  { name: 'Locations', item: 'https://carkeysleeds.co.uk/locations' },
  { name: 'Beeston Leeds', item: PAGE_URL },
])

export default function BeestonLeedsPage() {
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
            <span className="text-white">Beeston Leeds</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Auto Locksmith Beeston Leeds
            <span className="block text-amber-400 text-3xl sm:text-4xl mt-1">LS11 — 25 to 35 Minutes</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Just up the road from our Middleton base, Beeston LS11 is one of our fastest response areas. Lost keys, locked out, or need a spare key programmed — we&apos;re with you quickly.
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
            { label: 'Response (Beeston)', value: '25–35 min' },
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

        <section className="mb-10" aria-labelledby="about-beeston">
          <h2 id="about-beeston" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            Car Key Services in Beeston LS11
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Beeston sits just north of Middleton along the A653 Dewsbury Road corridor — one of the most direct routes out of South Leeds. From our base in Middleton, we can reach Beeston, Holbeck, and the Cottingley Drive area in 25–35 minutes in normal conditions.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Beeston has a mix of residential streets around Beeston Hill, terraced housing near Dewsbury Road, and newer builds around the ring road. We&apos;ve covered lockouts on all of them. Whether you&apos;re on Beeston Road, around the Cross Flatts Park area, or tucked away on one of the side streets off Town Street — we&apos;ll find you.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We regularly carry stock for the most common Beeston vehicles — Ford Fiestas and Focus, Vauxhall Corsa and Astra, and VW Polos. Single-visit jobs are the norm for these models.
          </p>
        </section>

        <section className="mb-10" aria-labelledby="beeston-services">
          <h2 id="beeston-services" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-5">
            Services Available in Beeston Leeds
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Car Key Replacement Beeston', desc: 'Lost your keys in LS11? We replace car keys for all makes on-site — cut and programmed at your location.', href: '/services/car-key-replacement' },
              { title: 'Emergency Lockout Beeston', desc: 'Locked out in Beeston? We reach LS11 in 25–35 minutes, 24 hours a day. Non-destructive entry, no damage.', href: '/services/car-lockout' },
              { title: 'Transponder Programming', desc: "Key cut but engine won't start? We programme transponder chips to your ECU on Beeston driveways and streets.", href: '/services/transponder-key-programming' },
              { title: 'Spare Key Cutting', desc: 'Get a spare cut while you still have the original. We come to your Beeston home — takes 30–45 minutes.', href: '/services/spare-key-cutting' },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-md transition-all duration-200">
                <h3 className="font-bold text-brand-navy mb-1.5">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-brand-navy rounded-2xl p-7 text-white mb-10">
          <h3 className="font-bold text-lg mb-4">Nearby Areas We Also Cover</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { name: 'Middleton LS10', href: '/locations/middleton-leeds' },
              { name: 'Holbeck LS11', href: '/locations/holbeck-leeds' },
              { name: 'Hunslet LS10', href: '/locations/hunslet-leeds' },
              { name: 'Morley LS27', href: '/locations/morley-leeds' },
              { name: 'Leeds City Centre LS1', href: '/locations/leeds-city-centre' },
              { name: 'Armley LS12', href: '/locations/armley-leeds' },
            ].map((area) => (
              <Link key={area.name} href={area.href} className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Reviews />
      <CTA heading="Need a Locksmith in Beeston Leeds?" subheading="We're 25–35 minutes from LS11. Call now — available 24/7, fixed prices quoted over the phone." />
    </>
  )
}
