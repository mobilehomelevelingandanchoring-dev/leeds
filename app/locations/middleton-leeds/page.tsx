import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Reviews from '@/components/Reviews'
import { locationSchema, breadcrumbSchema } from '@/lib/schema'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Auto Locksmith Middleton Leeds LS10 | Car Keys | 20–35 Min Response',
  description:
    'Mobile auto locksmith in Middleton, Leeds LS10. Car key replacement, lockouts & programming. Fastest response in South Leeds — typically 20–35 mins. Call 07940 757717.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/locations/middleton-leeds' },
  openGraph: {
    title: 'Auto Locksmith Middleton Leeds | Car Keys LS10',
    description: 'Middleton Leeds car key specialist. 20–35 min response. All makes. 24/7.',
  },
}

const PAGE_URL = 'https://carkeysleeds.co.uk/locations/middleton-leeds'

const localBusinessSchema = locationSchema({
  name: 'Middleton',
  locality: 'Middleton',
  url: PAGE_URL,
  postcode: 'LS10',
  lat: '53.7638',
  lng: '-1.5438',
  description: 'Mobile auto locksmith based in Middleton, Leeds LS10. Fastest response in South Leeds — typically 20–35 minutes for Middleton, Beeston, Hunslet, and surrounding LS10/LS11 areas.',
  areaNames: ['Middleton LS10', 'Belle Isle LS10', 'Hunslet LS10', 'Beeston LS11', 'Morley LS27', 'Rothwell LS26'],
})

const crumbSchema = breadcrumbSchema([
  { name: 'Home', item: 'https://carkeysleeds.co.uk' },
  { name: 'Locations', item: 'https://carkeysleeds.co.uk/locations' },
  { name: 'Middleton Leeds', item: PAGE_URL },
])

const nearbyAreas = [
  { name: 'Belle Isle', postcode: 'LS10' },
  { name: 'Hunslet', postcode: 'LS10' },
  { name: 'Beeston', postcode: 'LS11' },
  { name: 'Holbeck', postcode: 'LS11' },
  { name: 'Morley', postcode: 'LS27' },
  { name: 'Rothwell', postcode: 'LS26' },
  { name: 'Churwell', postcode: 'LS27' },
  { name: 'Robin Hood', postcode: 'LS26' },
]

export default function MiddletonLeedsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />

      {/* Hero */}
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
            <span className="text-white">Middleton Leeds</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            Primary Base Area — Fastest Response
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Auto Locksmith Middleton Leeds
            <span className="block text-amber-400 text-3xl sm:text-4xl mt-1">LS10 — 20 to 35 Minutes</span>
          </h1>

          <p className="text-xl text-slate-300 mb-4 max-w-2xl leading-relaxed">
            We&apos;re based in Middleton — so if you need a car key replacement or emergency lockout service in LS10, we&apos;re closer than anyone else in Leeds.
          </p>
          <p className="text-slate-400 mb-8">
            Serving Middleton Park, Belle Isle, Cottingley, Hunslet, and all LS10 postcodes — plus Beeston, Morley, and Rothwell just next door.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+447940757717"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call 07940 757717
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Response time feature */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-green-50 rounded-2xl border border-green-200">
          {[
            { label: 'Response (Middleton)', value: '20–35 min' },
            { label: 'Response (Beeston/Morley)', value: '25–40 min' },
            { label: 'Service', value: '24/7' },
            { label: 'Rating', value: '4.9 ★' },
          ].map((fact) => (
            <div key={fact.label} className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-brand-navy">{fact.value}</div>
              <div className="text-slate-500 text-xs sm:text-sm mt-1">{fact.label}</div>
            </div>
          ))}
        </div>

        {/* About the area */}
        <section className="mb-12" aria-labelledby="about-middleton">
          <h2 id="about-middleton" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            Car Key Specialist in Middleton, Leeds LS10
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Middleton is where we&apos;re based, so it&apos;s where we know best. We regularly cover Middleton Park estate, Throstle Road, Ring Road Middleton, Belle Isle, and down towards Hunslet and the LS10 industrial areas. Whether you&apos;re locked out on a residential side street or need a key programming at a business park — we know the area and we won&apos;t get lost trying to find you.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Middleton is a predominantly residential area with a high density of Ford Fiestas, Vauxhall Astras, and Nissan Qashqais — the most common vehicles we work on. We stock keys for all of these, so jobs in LS10 are typically straightforward single-visit affairs.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We also cover businesses on the Middleton Park industrial estate and the surrounding commercial areas on the A653 and A61 corridors. If you run a vehicle fleet or have a company car situation, call us to discuss priority account options.
          </p>
        </section>

        {/* Services in Middleton */}
        <section className="mb-12" aria-labelledby="middleton-services">
          <h2 id="middleton-services" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            Auto Locksmith Services in Middleton LS10
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Car Key Replacement',
                description: 'Lost your keys in Middleton or Belle Isle? We cut and programme replacements on-site. All makes, same day.',
                href: '/services/car-key-replacement',
              },
              {
                title: 'Emergency Car Lockout',
                description: 'Locked out on Middleton Park estate or around Hunslet? We reach you in 20–35 minutes, day or night.',
                href: '/services/car-lockout',
              },
              {
                title: 'Transponder Key Programming',
                description: "Already have the key cut but it won't start the engine? We programme transponder chips to your ECU in the LS10 area.",
                href: '/services/transponder-key-programming',
              },
              {
                title: 'Spare Key Cutting',
                description: 'Get a backup key cut while you still have the original. The smartest £80–£120 you can spend as a Middleton driver.',
                href: '/services/spare-key-cutting',
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-md transition-all duration-200"
                aria-label={`${service.title} in Middleton Leeds`}
              >
                <h3 className="font-bold text-brand-navy mb-1.5">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
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

        {/* Nearby areas */}
        <section className="mb-12" aria-labelledby="nearby-areas">
          <h2 id="nearby-areas" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            We Also Cover Areas Near Middleton
          </h2>
          <p className="text-slate-600 mb-5">
            Middleton is our primary base, but we cover the whole of South Leeds. These nearby areas are typically reachable in under 40 minutes:
          </p>
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.name}
                href={`/locations/${area.name.toLowerCase().replace(' ', '-')}-leeds`}
                className="flex items-center gap-2 bg-slate-100 hover:bg-brand-navy hover:text-white text-slate-700 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
                aria-label={`Auto locksmith in ${area.name}, ${area.postcode}`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {area.name} <span className="text-slate-400 text-xs">{area.postcode}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Local FAQ */}
        <section className="mb-12" aria-labelledby="middleton-faq">
          <h2 id="middleton-faq" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            Questions from Middleton Leeds Customers
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How quickly can you reach me in Middleton LS10?',
                a: "Middleton is our primary base area. We aim for 20–35 minutes for LS10 postcodes — faster than any competitor coming from elsewhere in Leeds. At night, when roads are clear, we're often under 20 minutes.",
              },
              {
                q: 'Do you cover Belle Isle and Hunslet as well?',
                a: "Yes. Belle Isle, Hunslet, Stourton, and the wider LS10 postcode area are all covered. These are effectively on our doorstep.",
              },
              {
                q: 'Can you programme a key for my Ford Fiesta in Middleton?',
                a: "Absolutely. Ford Fiestas are one of the most common vehicles we work on in this area. We carry Ford transponder keys in stock, so we can usually complete the job in a single visit without ordering parts.",
              },
              {
                q: "I'm on the Middleton Park estate — can you find me easily?",
                a: "We know Middleton Park estate well. Just give us the road name and nearby landmark when you call and we'll find you without any issues.",
              },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="font-bold text-brand-navy mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust signals */}
        <div className="bg-brand-navy rounded-2xl p-7 text-white">
          <h3 className="font-bold text-lg mb-4">Why Middleton Drivers Choose Car Keys Leeds</h3>
          <ul className="space-y-2.5 text-slate-300 text-sm">
            {[
              "We're based in Middleton — shortest response time in South Leeds",
              "No call-out charge for LS10 and surrounding postcodes",
              "Fixed prices quoted over the phone — no surprises",
              "Fully insured, professional equipment, 4.9★ rated",
              "We stock keys for all common Middleton vehicles — Ford, Vauxhall, VW",
              "Available 24 hours — even Christmas and bank holidays",
            ].map((point) => (
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
        heading="Need a Locksmith in Middleton Leeds?"
        subheading="We're based right here in LS10. Call now and we'll be with you in 20–35 minutes."
      />
    </>
  )
}
