import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Auto Locksmith Coverage Areas Leeds | All LS Postcodes',
  description:
    'Mobile auto locksmith covering all Leeds postcodes and surrounding areas. Based in Middleton LS10 — 30–60 min response across Leeds. Call 07700 900000.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/locations' },
}

const areas = [
  { name: 'Middleton', postcode: 'LS10', slug: 'middleton-leeds', time: '20–35 min', primary: true },
  { name: 'Beeston', postcode: 'LS11', slug: 'beeston-leeds', time: '25–35 min', primary: false },
  { name: 'Hunslet', postcode: 'LS10', slug: 'hunslet-leeds', time: '20–30 min', primary: false },
  { name: 'Morley', postcode: 'LS27', slug: 'morley-leeds', time: '25–40 min', primary: false },
  { name: 'Rothwell', postcode: 'LS26', slug: 'rothwell-leeds', time: '25–40 min', primary: false },
  { name: 'Leeds City Centre', postcode: 'LS1', slug: 'leeds-city-centre', time: '25–40 min', primary: false },
  { name: 'Headingley', postcode: 'LS6', slug: 'headingley-leeds', time: '35–50 min', primary: false },
  { name: 'Chapel Allerton', postcode: 'LS7', slug: 'chapel-allerton-leeds', time: '35–50 min', primary: false },
  { name: 'Roundhay', postcode: 'LS8', slug: 'roundhay-leeds', time: '35–50 min', primary: false },
  { name: 'Seacroft', postcode: 'LS14', slug: 'seacroft-leeds', time: '35–50 min', primary: false },
  { name: 'Garforth', postcode: 'LS25', slug: 'garforth-leeds', time: '40–55 min', primary: false },
  { name: 'Crossgates', postcode: 'LS15', slug: 'crossgates-leeds', time: '35–50 min', primary: false },
  { name: 'Horsforth', postcode: 'LS18', slug: 'horsforth-leeds', time: '40–55 min', primary: false },
  { name: 'Pudsey', postcode: 'LS28', slug: 'pudsey-leeds', time: '40–55 min', primary: false },
  { name: 'Armley', postcode: 'LS12', slug: 'armley-leeds', time: '30–45 min', primary: false },
  { name: 'Bramley', postcode: 'LS13', slug: 'bramley-leeds', time: '35–50 min', primary: false },
  { name: 'Holbeck', postcode: 'LS11', slug: 'holbeck-leeds', time: '25–40 min', primary: false },
  { name: 'Wortley', postcode: 'LS12', slug: 'wortley-leeds', time: '30–45 min', primary: false },
  { name: 'Otley', postcode: 'LS21', slug: 'otley-leeds', time: '45–60 min', primary: false },
  { name: 'Guiseley', postcode: 'LS20', slug: 'guiseley-leeds', time: '45–60 min', primary: false },
  { name: 'Yeadon', postcode: 'LS19', slug: 'yeadon-leeds', time: '45–60 min', primary: false },
  { name: 'Kippax', postcode: 'LS25', slug: 'kippax-leeds', time: '40–55 min', primary: false },
  { name: 'Wetherby', postcode: 'LS22', slug: 'wetherby', time: '45–60 min', primary: false },
  { name: 'Churwell', postcode: 'LS27', slug: 'churwell-leeds', time: '25–40 min', primary: false },
]

export default function LocationsPage() {
  return (
    <>
      <section className="bg-brand-navy py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Coverage Areas</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Auto Locksmith Coverage — All of Leeds
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Based in Middleton LS10, we respond to callouts across the whole of Leeds and surrounding areas. Most of South Leeds in under 40 minutes.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/locations/${area.slug}`}
              className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
                area.primary
                  ? 'bg-amber-50 border-amber-300 hover:border-amber-400'
                  : 'bg-white border-slate-200 hover:border-brand-blue'
              }`}
              aria-label={`Auto locksmith in ${area.name}, ${area.postcode} — ${area.time} response`}
            >
              <div>
                <div className={`font-bold ${area.primary ? 'text-brand-navy' : 'text-slate-800'}`}>
                  {area.name}
                  {area.primary && (
                    <span className="ml-2 text-xs bg-amber-500 text-slate-900 px-2 py-0.5 rounded-full font-bold">Primary</span>
                  )}
                </div>
                <div className="text-slate-500 text-sm">{area.postcode}</div>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-semibold text-sm">{area.time}</div>
                <div className="text-slate-400 text-xs">response</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-brand-navy rounded-2xl p-7 text-white">
          <h2 className="text-xl font-bold mb-3">Not Listed? We May Still Cover Your Area</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            We operate throughout West Yorkshire and can reach many areas outside of Leeds itself. If you&apos;re not sure whether we cover your location, just call — we&apos;ll let you know immediately.
          </p>
          <a href="tel:+447700900000" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Check Your Area — Call 07700 900000
          </a>
        </div>
      </section>

      <CTA heading="Need a Locksmith in Leeds?" subheading="We cover all Leeds postcodes. Call now for a fast response and fixed price quote." />
    </>
  )
}
