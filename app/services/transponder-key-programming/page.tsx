import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import { faqSchema as buildFaqSchema } from '@/lib/schema'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Transponder Key Programming Leeds | All Makes | On-Site',
  description:
    "Car key cut but won't start the engine? We programme transponder chips to your car's ECU on-site in Leeds. All makes. 30–60 min response. Call 07309 903243.",
  alternates: { canonical: 'https://carkeysleeds.co.uk/services/transponder-key-programming' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transponder Key Programming Leeds',
  description:
    "Professional transponder key programming service in Leeds. We programme car keys to your vehicle's ECU on-site using professional diagnostic equipment.",
  provider: {
    '@type': 'LocksmithBusiness',
    name: 'Car Keys Leeds',
    telephone: '+447309903243',
    url: 'https://carkeysleeds.co.uk',
  },
  areaServed: { '@type': 'City', name: 'Leeds' },
  offers: {
    '@type': 'Offer',
    priceRange: '£60 - £180',
    priceCurrency: 'GBP',
  },
}

const transponderFaqs = [
  { q: "What happens if I use a transponder key that hasn't been programmed?", a: "The key will turn in the ignition (assuming it's cut correctly) but the engine won't start. The immobiliser warning light — usually a padlock or car symbol on the dashboard — will flash or stay on. The car's ECU is receiving the key but doesn't recognise its chip code, so it keeps the fuel injection and ignition disabled." },
  { q: 'Can I programme a transponder key myself at home?', a: "Not for most vehicles. Programming requires a direct connection to the OBD diagnostic port using specialist automotive tools that read and write encrypted ECU data. Generic OBD readers available to consumers don't have this capability. Some very old or basic vehicles allowed self-programming via a specific ignition-turn sequence, but this has been phased out from most modern cars." },
  { q: "Why would a newly cut key not start the engine?", a: "A freshly cut key that fails to start the engine has almost certainly not been programmed — or has been programmed to a different vehicle. A key being cut correctly (so it turns) and a key being programmed correctly (so the ECU accepts it) are two separate processes. If you had a key cut at a hardware shop or market stall, they almost certainly only cut the blade without any transponder programming." },
  { q: 'Can you programme a key bought from eBay or an online marketplace?', a: "Sometimes — it depends on the key type. Genuine OEM blanks or quality aftermarket blanks can often be programmed to your vehicle. However, some online keys are counterfeits with incompatible chips, or are the wrong key type for your model. Call us before purchasing online and we'll advise whether the listing you're looking at is likely to be programmable for your specific vehicle." },
  { q: "Can you erase a stolen or lost key from my car's system?", a: "Yes. We connect to the ECU and remove the lost key's chip code from the authorised list, so that key can no longer start the car. This is an important security measure, particularly if keys were stolen with documents that reveal your home address. We can then programme new keys so only your current set works." },
  { q: "Does programming a new key remove or affect my other existing keys?", a: "No. Programming an additional key adds its chip code to the ECU's authorised list without removing others. However, if you request an all-keys reset (e.g. after theft), we do need to re-programme all keys including your existing ones — which we do in the same visit." },
  { q: "What is the difference between transponder programming and remote/fob programming?", a: "Transponder programming writes the immobiliser chip code to the ECU so the car will start. Remote/fob programming syncs the wireless signal so the central locking and alarm respond to button presses. Some keys require both; some only require transponder programming (the remote may self-sync when the car is started). We handle both in the same visit where required." },
  { q: "My car is older — does it even have a transponder?", a: "Most cars from approximately 1996 onwards have some form of immobiliser, and the majority from 2000 onwards use transponder chips. Pre-1995 vehicles typically used basic cut keys with no chip. If you're unsure, call us with the year, make, and model and we'll check immediately. Older non-transponder keys are actually quicker and simpler for us to cut." },
]

const transponderFaqSchema = buildFaqSchema(transponderFaqs)

export default function TransponderProgrammingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transponderFaqSchema) }} />

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
            <span className="text-white">Transponder Key Programming</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Transponder Key Programming in Leeds
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Key turns in the lock but the engine won&apos;t start? The transponder chip needs programming to your car&apos;s ECU. We do this on-site, anywhere in Leeds, in under an hour.
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          {[
            { label: 'From', value: '£60' },
            { label: 'Response', value: '30–60 min' },
            { label: 'Availability', value: '24/7' },
            { label: 'Makes covered', value: '100+' },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <div className="text-2xl font-extrabold text-brand-navy">{f.value}</div>
              <div className="text-slate-500 text-sm">{f.label}</div>
            </div>
          ))}
        </div>

        <section className="mb-10" aria-labelledby="what-is-transponder">
          <h2 id="what-is-transponder" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            What Is a Transponder Key?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A transponder key (from <em>transmitter + responder</em>) contains a small RFID microchip embedded in the plastic head. When you insert the key and turn it, the car&apos;s immobiliser antenna ring sends a radio signal to the chip. If the chip responds with the correct, pre-programmed code, the immobiliser deactivates and the engine can start.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            This is a security feature on virtually all cars manufactured after 2000, and most cars from the mid-1990s onwards. A physically correct key that hasn&apos;t been programmed — or has been programmed to a different vehicle — will turn in the ignition but cause the immobiliser warning light to flash and prevent the engine from starting.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Programming a transponder key requires specialist automotive diagnostic equipment that reads your car&apos;s existing immobiliser data and writes the new key&apos;s chip ID into the ECU. This is not something that can be done with a generic key cutter — it requires the same calibre of tools used by main dealers, which is what we carry.
          </p>
        </section>

        <section className="mb-10" aria-labelledby="when-you-need-it">
          <h2 id="when-you-need-it" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            When Do You Need Transponder Key Programming?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'New Replacement Key', desc: "You've had a key cut (or bought one online) but the engine won't start. The physical cut is correct but the chip hasn't been programmed." },
              { title: 'Second-Hand Key', desc: "You've bought a spare key from eBay or a salvage yard. The key may be correct for your model but is coded to the previous vehicle." },
              { title: 'Spare Key Needed', desc: "You want an additional working key. We cut the blade and programme the chip in a single visit." },
              { title: 'All Keys Lost', desc: "We create a new key from scratch and programme it to your vehicle. Proof of ownership required." },
              { title: 'Erase Lost Keys', desc: "If a key has been stolen, we can erase it from your ECU so it can no longer start the car — and programme new keys." },
              { title: 'ECU Replacement', desc: "If your ECU has been replaced, all existing keys need re-programming. We handle this on-site." },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-white border border-slate-200 rounded-xl">
                <h3 className="font-bold text-brand-navy mb-1.5">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-7" aria-labelledby="programming-prices">
          <h2 id="programming-prices" className="text-2xl font-extrabold text-brand-navy mb-4">
            Transponder Programming Prices — Leeds
          </h2>
          <div className="space-y-3">
            {[
              ['Programming only (key already cut)', '£60 – £100'],
              ['Key cut + transponder programming', '£80 – £160'],
              ['Smart key / proximity key programming', '£120 – £200'],
              ['Erase stolen key + re-programme', '£80 – £140'],
              ['All-keys-lost programming', '£150 – £280'],
            ].map(([svc, price]) => (
              <div key={svc} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                <span className="text-slate-700 text-sm">{svc}</span>
                <span className="font-bold text-brand-navy text-sm whitespace-nowrap ml-4">{price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Page-specific FAQ */}
        <section className="mb-10" aria-labelledby="transponder-faq">
          <h2 id="transponder-faq" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            Transponder Programming — Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {transponderFaqs.map((item) => (
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
            <Link href="/services/spare-key-cutting" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Spare Key Cutting</Link>
            <Link href="/services/remote-key-fob" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Remote Key Fob</Link>
            <Link href="/locations/middleton-leeds" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Middleton Leeds</Link>
          </div>
        </div>
      </article>

      <FAQ />
      <CTA heading="Need a Key Programmed in Leeds?" subheading="On-site transponder programming anywhere in Leeds. Call for a fixed price — we'll be with you in 30–60 minutes." />
    </>
  )
}
