import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'
import { faqSchema as buildFaqSchema } from '@/lib/schema'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Remote Key Fob Replacement Leeds | All Makes | Programmed On-Site',
  description:
    'Broken remote, dead key fob or unresponsive smart key in Leeds? We supply and programme replacements on-site for all makes. Call 07309 903243.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/services/remote-key-fob' },
}

const fobFaqs = [
  { q: 'Why has my key fob suddenly stopped working?', a: 'The most common cause is a flat battery — key fob batteries (usually CR2032 or CR2025) typically last 1–3 years. Other causes include: water damage to the circuit board, a broken antenna inside the fob housing, the fob losing sync with the car\'s receiver, or a fault with the receiver unit in the vehicle itself. We diagnose over the phone to narrow it down before coming out.' },
  { q: 'Is it always worth trying a new battery first?', a: "Yes — always. A new battery takes 2 minutes and costs under £3 from any petrol station. If a new battery doesn't fix the issue, the problem is electronic (chip or circuit) and you'll need us. Tell us when you call whether you've already tried a battery change — it helps us diagnose faster." },
  { q: 'Can you re-programme my existing fob without replacing it?', a: 'Yes, in many cases. If the fob has lost sync with your vehicle (sometimes happens after battery replacement or after a flat car battery), we can re-sync it on-site without replacing the fob itself. This is significantly cheaper than a full replacement. Call us and describe the symptoms — we\'ll advise whether a re-programme is likely to resolve it.' },
  { q: 'The blade on my key still works but the remote buttons do nothing — what is this?', a: 'This is a classic fob-only fault. The physical transponder chip is still working (so the car starts), but the radio transmitter that controls central locking has failed. This could be a dead battery, a broken circuit, or a lost sync. We can diagnose and repair or replace just the remote element without touching the key blade.' },
  { q: 'Can you programme an aftermarket or universal remote to my car?', a: 'For many vehicles — yes. Quality aftermarket remotes are available for most common makes and cost significantly less than OEM replacements. However, some vehicles require OEM-only remotes due to proprietary encryption. We carry stock of aftermarket remotes for the most common models and will advise whether an aftermarket option is available for your specific vehicle.' },
  { q: 'My key fob range has shortened dramatically — it only works when I am very close. What causes this?', a: "Reduced range almost always indicates a failing battery. The transmitter still works but at reduced signal strength. Try a fresh battery first. If range is still poor after a new battery, the antenna or transmitter circuit in the fob may be degrading and replacement is the fix." },
  { q: "My car's keyless entry isn't detecting the smart key even when I'm standing next to it — what's wrong?", a: "Proximity key detection failures have several causes: a flat key fob battery, metal objects in your pocket or bag shielding the signal, interference from other devices, a failed antenna in the car door, or occasionally a fault with the car's BCM (body control module). We diagnose which element is at fault before recommending a fix." },
  { q: 'Can you replace just the key fob casing if the electronics still work?', a: "Yes. If the buttons have worn through or the housing is cracked but the circuit board and chip are intact, we can transfer the electronics into a new housing. This is the cheapest repair option when the fault is purely cosmetic or mechanical (broken button spring, cracked case) rather than electronic." },
]

const fobFaqSchema = buildFaqSchema(fobFaqs)

export default function RemoteKeyFobPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fobFaqSchema) }} />

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
            <span className="text-white">Remote &amp; Key Fob Replacement</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Remote &amp; Key Fob Replacement in Leeds
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Broken buttons, cracked housing, or a fob that stopped locking the car — we supply and programme replacement remotes on-site across all of Leeds.
          </p>
          <a
            href="tel:+447309903243"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call 07309 903243
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <section className="mb-10" aria-labelledby="fob-types">
          <h2 id="fob-types" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            Types of Remote Key We Replace
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flip / Folding Keys', desc: 'Fold-away blade with integrated remote buttons. We replace the housing, cut a new blade, and programme the transponder and remote sync.' },
              { title: 'Smart / Proximity Keys', desc: 'Push-button start and keyless entry. We supply and programme these for most popular models — BMW, VW, Ford, Nissan, and more.' },
              { title: 'Remote Head Keys', desc: 'Standard blade with remote buttons built in — common on Ford, Vauxhall, and VW. We replace blade, housing, and programme the chip.' },
              { title: 'Separate Key Fobs', desc: 'Older vehicles with a separate physical key and standalone fob. We re-programme existing fobs or supply replacements.' },
              { title: 'Card Keys', desc: 'Renault Clio, Megane and others use credit card-style keys. We replace and programme these on-site.' },
              { title: 'Aftermarket Remotes', desc: 'Quality aftermarket remotes for models where genuine parts are costly — at significantly less than dealer prices.' },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-white border border-slate-200 rounded-xl">
                <h3 className="font-bold text-brand-navy mb-1.5">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 bg-blue-50 border border-blue-200 rounded-2xl p-7" aria-labelledby="fob-tips">
          <h2 id="fob-tips" className="text-xl font-extrabold text-brand-navy mb-3">
            Before You Call — Quick Checks
          </h2>
          <p className="text-slate-700 text-sm mb-3">These quick steps resolve a surprising number of fob issues:</p>
          <ol className="space-y-2 text-slate-700 text-sm">
            {[
              'Replace the battery — usually CR2032 or CR2025, available at any petrol station.',
              'Try operating the fob from 1–2 metres away.',
              'Test whether the physical key blade still operates the door lock.',
              'Try a second key fob if you have one.',
            ].map((step, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-bold text-brand-blue shrink-0">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            If none of these help, the issue is likely a failed chip, a faulty receiver in the car, or a dead remote. Call us and we&apos;ll diagnose it over the phone before you commit to a visit.
          </p>
        </section>

        <section className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-7" aria-labelledby="fob-pricing">
          <h2 id="fob-pricing" className="text-2xl font-extrabold text-brand-navy mb-4">
            Remote Key Fob Prices — Leeds
          </h2>
          <div className="space-y-3">
            {[
              ['Remote re-programming (existing fob)', '£40 – £70'],
              ['Remote head key replacement + programming', '£90 – £150'],
              ['Flip key replacement + programming', '£100 – £180'],
              ['Smart / proximity key replacement', '£140 – £240'],
              ['Card key (Renault etc.) replacement', '£120 – £200'],
            ].map(([svc, price]) => (
              <div key={svc} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                <span className="text-slate-700 text-sm">{svc}</span>
                <span className="font-bold text-brand-navy text-sm ml-4">{price}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4">Fixed prices confirmed over the phone before we travel.</p>
        </section>

        {/* Page-specific FAQ */}
        <section className="mb-10" aria-labelledby="fob-faq">
          <h2 id="fob-faq" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            Remote Key Fob — Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {fobFaqs.map((item) => (
              <div key={item.q} className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="font-bold text-brand-navy mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <h3 className="font-bold text-brand-navy mb-3">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/car-key-replacement" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Car Key Replacement</Link>
            <Link href="/services/transponder-key-programming" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Transponder Programming</Link>
            <Link href="/services/spare-key-cutting" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Spare Key Cutting</Link>
            <Link href="/locations/middleton-leeds" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Middleton Leeds</Link>
          </div>
        </div>
      </article>

      <CTA heading="Need a Replacement Key Fob in Leeds?" subheading="We come to you across all Leeds areas. Call for a fixed quote — we'll diagnose it over the phone first." />
    </>
  )
}
