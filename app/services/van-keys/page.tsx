import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Van Key Replacement Leeds | Transit, Sprinter, Vivaro | 24/7',
  description:
    'Mobile van key replacement and lockout service in Leeds. Ford Transit, Mercedes Sprinter, VW Transporter, Vauxhall Vivaro and more. Call 07309 903243.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/services/van-keys' },
}

const vans = [
  'Ford Transit', 'Ford Transit Connect', 'Ford Transit Custom',
  'Mercedes Sprinter', 'Mercedes Vito', 'Mercedes Citan',
  'VW Transporter', 'VW Crafter', 'VW Caddy',
  'Vauxhall Vivaro', 'Vauxhall Movano',
  'Renault Trafic', 'Renault Master', 'Renault Kangoo',
  'Peugeot Partner', 'Peugeot Expert', 'Peugeot Boxer',
  'Citroën Berlingo', 'Citroën Dispatch', 'Citroën Relay',
  'Nissan NV200', 'Nissan NV300', 'Nissan NV400',
  'Fiat Doblo', 'Fiat Ducato', 'Iveco Daily',
]

export default function VanKeysPage() {
  return (
    <>
      <section className="bg-brand-navy py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Van Key Services</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            All Major Commercial Vans Covered
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Van Key Replacement &amp; Lockout Service — Leeds
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            A locked-out van or a lost set of van keys means your working day stops. We cover all major commercial vans across Leeds — fast response, fixed price, back on the road quickly.
          </p>
          <a
            href="tel:+447309903243"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call 07309 903243 — Van Emergency
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          {[
            { label: 'From', value: '£90' },
            { label: 'Response', value: '30–60 min' },
            { label: 'Availability', value: '24/7' },
            { label: 'Van makes', value: '25+' },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <div className="text-2xl font-extrabold text-brand-navy">{f.value}</div>
              <div className="text-slate-500 text-sm">{f.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-10" aria-labelledby="van-services">
          <h2 id="van-services" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            Van Locksmith Services We Provide in Leeds
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Van Key Replacement', desc: 'Lost your van keys or down to your last set? We cut and programme replacement keys for all major van makes on-site — no towing needed.' },
              { title: 'Van Lockout / Emergency Access', desc: "Locked out of your van on a job? We use non-destructive entry techniques to get you back in without damage to the vehicle." },
              { title: 'Van Transponder Programming', desc: 'Key turns but van won\'t start? The transponder chip needs programming to the ECU. We carry equipment for all major commercial van brands.' },
              { title: 'Spare Van Key Cutting', desc: "If you're running a single van on one key set, get a spare cut now. Fleet managers: we offer multi-vehicle visits." },
              { title: 'Van Remote / Key Fob', desc: 'Broken central locking remote on your Transit or Sprinter? We replace and programme van remotes and fobs on-site.' },
              { title: 'Fleet Key Services', desc: 'Managing a fleet? We can visit your depot and cut or programme multiple vehicles in a single session. Call to discuss.' },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-white border border-slate-200 rounded-xl">
                <h3 className="font-bold text-brand-navy mb-1.5">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10" aria-labelledby="van-makes">
          <h2 id="van-makes" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            Commercial Vans We Cover
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {vans.map((van) => (
              <span key={van} className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-full">
                {van}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4">Not listed? Call us — we cover most commercial vans on UK roads.</p>
        </section>

        <section className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-7" aria-labelledby="van-pricing">
          <h2 id="van-pricing" className="text-2xl font-extrabold text-brand-navy mb-4">
            Van Key &amp; Lockout Prices — Leeds
          </h2>
          <div className="space-y-3">
            {[
              ['Van lockout / emergency access', '£80 – £120'],
              ['Van key replacement (standard)', '£90 – £160'],
              ['Van key replacement (smart / proximity)', '£150 – £250'],
              ['Van transponder programming only', '£70 – £120'],
              ['Van spare key cut + programming', '£90 – £160'],
            ].map(([svc, price]) => (
              <div key={svc} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                <span className="text-slate-700 text-sm">{svc}</span>
                <span className="font-bold text-brand-navy text-sm ml-4">{price}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4">Fixed prices confirmed over the phone. VAT receipts provided.</p>
        </section>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="font-bold text-brand-navy mb-3">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/car-key-replacement" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Car Key Replacement</Link>
            <Link href="/services/car-lockout" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Car Lockout Service</Link>
            <Link href="/services/spare-key-cutting" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Spare Key Cutting</Link>
            <Link href="/locations/middleton-leeds" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Middleton Leeds</Link>
          </div>
        </div>
      </article>

      <CTA
        heading="Van Locked Out or Lost Van Keys in Leeds?"
        subheading="We respond 24/7 across all Leeds areas. Call now for a fast response — your working day doesn't have to stop."
      />
    </>
  )
}
