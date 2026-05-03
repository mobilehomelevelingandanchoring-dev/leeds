import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Spare Car Key Cutting Leeds | Programmed On-Site | From £80',
  description:
    'Get a spare car key cut and programmed in Leeds before you lose your original. Mobile service — we come to you. All makes. From £80. Call 07700 900000.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/services/spare-key-cutting' },
}

export default function SpareKeyCuttingPage() {
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
            <span className="text-white">Spare Key Cutting</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Best Done Before You Need It
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Spare Car Key Cutting in Leeds
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            A spare key is the cheapest insurance you&apos;ll ever buy. We cut and programme an additional key at your home or workplace — much less painful now than after you&apos;ve lost the original.
          </p>
          <a
            href="tel:+447700900000"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Book a Spare Key — 07700 900000
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          {[
            { label: 'From', value: '£80' },
            { label: 'Time on-site', value: '30–45 min' },
            { label: 'Availability', value: '7 days' },
            { label: 'Makes covered', value: '100+' },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <div className="text-2xl font-extrabold text-brand-navy">{f.value}</div>
              <div className="text-slate-500 text-sm">{f.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-10" aria-labelledby="why-spare">
          <h2 id="why-spare" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            Why Get a Spare Key Now?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Most people think about a spare key at one of two moments: when they&apos;ve just picked up a new car that came with only one key, or after they&apos;ve lost their only key and are standing on a pavement in Leeds wondering what to do next.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            The difference in cost is significant. Getting a spare cut and programmed while you still have a working key is a routine job — typically done in 30–45 minutes at your home, starting from £80. Doing it after you&apos;ve lost everything is more complex and starts from £150, because we have to source key data directly from the vehicle rather than cloning an existing key.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If you&apos;ve just bought a second-hand car in Leeds and it came with only one key — call us. It&apos;s one of the best-value things you can do as a car owner.
          </p>
        </section>

        <section className="mb-10" aria-labelledby="spare-process">
          <h2 id="spare-process" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            How We Cut Your Spare Key
          </h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Call Us', desc: 'Tell us your vehicle make, model, year, and location. We confirm availability and give you a fixed price over the phone.' },
              { step: '2', title: 'We Come to You', desc: "We travel to your home or workplace across Leeds. You don't need to visit us or tow the vehicle anywhere." },
              { step: '3', title: 'Key is Cut', desc: "We use your existing working key to cut a perfectly matched blade on our mobile key-cutting machine." },
              { step: '4', title: 'Chip Programmed', desc: "We connect to your car's OBD port and programme the new key's transponder chip to your vehicle's ECU." },
              { step: '5', title: 'Both Keys Tested', desc: 'We test both keys fully — locks, ignition, central locking, and remote. You leave with two fully working keys.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-7" aria-labelledby="spare-pricing">
          <h2 id="spare-pricing" className="text-2xl font-extrabold text-brand-navy mb-4">
            Spare Key Prices — Leeds
          </h2>
          <div className="space-y-3">
            {[
              ['Standard transponder spare key', '£80 – £120'],
              ['Remote / flip key spare', '£100 – £160'],
              ['Smart / proximity spare key', '£130 – £220'],
              ['Van spare key', '£90 – £160'],
            ].map(([svc, price]) => (
              <div key={svc} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                <span className="text-slate-700 text-sm">{svc}</span>
                <span className="font-bold text-brand-navy text-sm ml-4">{price}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4">Fixed prices confirmed over the phone before we travel.</p>
        </section>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="font-bold text-brand-navy mb-3">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/car-key-replacement" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Car Key Replacement</Link>
            <Link href="/services/transponder-key-programming" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Transponder Programming</Link>
            <Link href="/services/remote-key-fob" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Remote Key Fob</Link>
            <Link href="/locations/middleton-leeds" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Middleton Leeds</Link>
          </div>
        </div>
      </article>

      <CTA heading="Get a Spare Key Cut in Leeds Today" subheading="Mobile service across all Leeds areas. Don't wait until it's an emergency — call now." />
    </>
  )
}
