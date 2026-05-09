import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'
import { breadcrumbSchema, SITE } from '@/lib/schema'
import { brands } from '@/lib/brands'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Car Keys by Make Leeds | Ford BMW Audi VW Mercedes | 07309 903243',
  description:
    'Mobile car key replacement in Leeds for all makes — Ford, BMW, Audi, VW, Mercedes, Toyota, Vauxhall and more. On-site, 24/7, fixed price. Call 07309 903243.',
  alternates: { canonical: `${SITE}/makes` },
}

const crumbSchema = breadcrumbSchema([
  { name: 'Home', item: SITE },
  { name: 'Car Keys by Make', item: `${SITE}/makes` },
])

export default function MakesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />

      <section className="bg-brand-navy py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Car Keys by Make</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Car Key Replacement Leeds
            <span className="block text-amber-400 text-3xl sm:text-4xl mt-1">All Makes — On-Site, 24/7</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            We programme car keys for every major brand sold in the UK — Ford to Land Rover, Vauxhall to Volvo. Select your make below for model-specific pricing, key technology, and FAQs.
          </p>
          <a href="tel:+447309903243" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call 07309 903243
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-green-50 rounded-2xl border border-green-200">
          {[
            { label: 'Makes covered', value: '20+' },
            { label: 'Response (Leeds)', value: '25–45 min' },
            { label: 'Availability', value: '24/7' },
            { label: 'Rating', value: '4.9 ★' },
          ].map(f => (
            <div key={f.label} className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-brand-navy">{f.value}</div>
              <div className="text-slate-500 text-xs sm:text-sm mt-1">{f.label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">Select Your Car Make</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {brands.map(brand => (
            <Link
              key={brand.slug}
              href={`/makes/${brand.slug}`}
              className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-brand-navy text-lg group-hover:text-brand-blue transition-colors">
                  {brand.name}
                </h3>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-slate-500 text-sm mt-1 leading-snug line-clamp-2">{brand.metaDesc.split('.')[0]}.</p>
            </Link>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 mb-10">
          <h2 className="text-xl font-extrabold text-brand-navy mb-4">Why Does the Make Matter for Key Replacement?</h2>
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>Every car manufacturer uses a different immobiliser system, transponder chip type, and programming protocol. A Ford PATS key cannot be programmed with the same equipment as a BMW CAS module, and a VW ID48 job requires different tools than a Renault card key UCH synchronisation.</p>
            <p>This is why it matters to use a locksmith who is familiar with your specific make and model — not just a generic key cutter. We carry manufacturer-specific programming data, chip blanks, and diagnostic interfaces for all 20 brands listed on this page.</p>
            <p>Select your make above for a detailed breakdown of which key system your car uses, what the job involves, and what it costs in Leeds.</p>
          </div>
        </div>

        <div className="bg-brand-navy rounded-2xl p-7 text-white">
          <h3 className="font-bold text-lg mb-4">Also See</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/car-key-replacement" className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200">Car Key Replacement</Link>
            <Link href="/services/car-lockout" className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200">Emergency Lockout</Link>
            <Link href="/services/transponder-key-programming" className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200">Transponder Programming</Link>
            <Link href="/services/spare-key-cutting" className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200">Spare Key Cutting</Link>
            <Link href="/services/van-keys" className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200">Van Keys</Link>
            <Link href="/locations" className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200">Areas We Cover</Link>
          </div>
        </div>

      </section>

      <CTA heading="Need a Car Key Specialist in Leeds?" subheading="We cover all makes across Leeds — 24/7, fixed price quoted over the phone before we travel." />
    </>
  )
}
