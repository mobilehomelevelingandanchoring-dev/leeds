import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Car Lockout Service Leeds | Emergency Vehicle Access | 24/7',
  description:
    'Locked out of your car in Leeds? Our mobile auto locksmith reaches you in 30–60 minutes, 24/7. Non-destructive entry. All makes covered. Call 07940 757717.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/services/car-lockout' },
  openGraph: {
    title: 'Car Lockout Leeds | Emergency Access | 24/7',
    description: 'Locked out in Leeds? We come to you in 30–60 minutes. Non-destructive. All makes.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Car Lockout Service Leeds',
  description:
    'Emergency vehicle access service in Leeds. We use non-destructive methods to open your car when you are locked out. 24/7 availability, 30–60 min response.',
  provider: {
    '@type': 'LocksmithBusiness',
    name: 'Car Keys Leeds',
    url: 'https://carkeysleeds.co.uk',
    telephone: '+447940757717',
  },
  areaServed: { '@type': 'City', name: 'Leeds' },
  offers: {
    '@type': 'Offer',
    priceRange: '£60 - £120',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
  },
  serviceType: 'Lockout Service',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://carkeysleeds.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://carkeysleeds.co.uk/services' },
    { '@type': 'ListItem', position: 3, name: 'Car Lockout Service Leeds', item: 'https://carkeysleeds.co.uk/services/car-lockout' },
  ],
}

const lockoutScenarios = [
  {
    icon: '🔑',
    title: 'Keys Left Inside',
    description: "You've locked the car and left the keys on the seat, in the boot, or in the footwell. We use specialist slim-jim and air wedge techniques to open the vehicle without any damage.",
  },
  {
    icon: '🔒',
    title: 'Key Won\'t Turn',
    description: "Worn keys, a faulty lock barrel, or a seized mechanism — if your key won't turn in the lock or ignition, we diagnose and fix the issue on-site.",
  },
  {
    icon: '🔐',
    title: 'Central Locking Fault',
    description: "If your central locking has failed and the car is locked, we can gain entry and assess whether the fault is the key, the receiver, or the lock mechanism itself.",
  },
  {
    icon: '💔',
    title: 'Snapped Key in Lock',
    description: "Don't try to extract it yourself — it pushes the broken piece further in. We use professional extraction tools to remove it cleanly, then cut and programme a new key.",
  },
  {
    icon: '🚘',
    title: 'Child or Pet Locked In',
    description: "This is a genuine emergency. Call 999 if there is any immediate risk. For non-emergency situations, we treat these as priority call-outs — fastest possible response.",
  },
  {
    icon: '🅿️',
    title: 'Roadside or Car Park Lockout',
    description: "Whether you're on a residential street in Middleton, in a multi-storey in Leeds city centre, or parked up on a trading estate in Morley — we come to you.",
  },
]

export default function CarLockoutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
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
            <span className="text-white">Car Lockout Service</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse inline-block" aria-hidden="true" />
            Emergency Call-Out — Leeds 24/7
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Locked Out of Your Car in Leeds?
          </h1>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl leading-relaxed">
            It happens to everyone. We&apos;ll be with you in 30–60 minutes across Leeds — using non-destructive methods to get you back in your vehicle without any damage.
          </p>
          <p className="text-slate-400 mb-8">
            No damage to your locks. No damage to your paintwork. Fixed price agreed before we travel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+447940757717"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call 07940 757717 Now
            </a>
            <Link
              href="/services/car-key-replacement"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Also Need a New Key?
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Quick facts */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          {[
            { label: 'From', value: '£60' },
            { label: 'Response', value: '30–60 min' },
            { label: 'Availability', value: '24/7' },
            { label: 'Damage', value: 'Zero' },
          ].map((fact) => (
            <div key={fact.label} className="text-center">
              <div className="text-2xl font-extrabold text-brand-navy">{fact.value}</div>
              <div className="text-slate-500 text-sm">{fact.label}</div>
            </div>
          ))}
        </div>

        {/* Non-destructive entry */}
        <section className="mb-12" aria-labelledby="non-destructive">
          <h2 id="non-destructive" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            Non-Destructive Entry — No Damage, Ever
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The most important thing to understand about a professional car lockout service is that it should never involve breaking anything. We use a combination of long-reach tools, air wedges, and slim-jim techniques that create a small, safe gap in the door seal or frame — enough to manipulate the interior handle or lock button without touching the paintwork or damaging the window seal.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            We&apos;ve been doing this for years across Leeds, on everything from a battered old Corsa parked on the Middleton estate to a brand-new Range Rover in a Roundhay driveway. The technique is adapted to the vehicle — older cars are often easier; newer ones require more care, but the result is always the same: you get in, nothing is damaged.
          </p>
          <p className="text-slate-600 leading-relaxed">
            <strong>Never try to open a car yourself with a coat hanger or wedge.</strong> Modern cars have multiple layers of sealing and electronic sensors. Improvised attempts almost always result in scratched paintwork, bent door frames, or a broken window — costing far more than our call-out fee.
          </p>
        </section>

        {/* Lockout scenarios */}
        <section className="mb-12" aria-labelledby="scenarios">
          <h2 id="scenarios" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            Common Lockout Situations We Handle in Leeds
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {lockoutScenarios.map((scenario) => (
              <div key={scenario.title} className="p-5 bg-white border border-slate-200 rounded-xl">
                <div className="text-2xl mb-2" aria-hidden="true">{scenario.icon}</div>
                <h3 className="font-bold text-brand-navy mb-1.5">{scenario.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{scenario.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What to do when locked out */}
        <section className="mb-12 bg-blue-50 border border-blue-200 rounded-2xl p-7" aria-labelledby="what-to-do">
          <h2 id="what-to-do" className="text-xl font-extrabold text-brand-navy mb-4">
            What to Do Right Now if You&apos;re Locked Out in Leeds
          </h2>
          <ol className="space-y-3 text-slate-700 text-sm">
            {[
              "Stay calm. If you're on a busy road, move to a safe location away from traffic.",
              "Check all doors and the boot — occasionally a door is still open.",
              "If a child or pet is locked inside and distressed, call 999 immediately.",
              "Call us on 07940 757717. Tell us your location and vehicle make/model.",
              "We'll confirm a fixed price and give you an accurate ETA.",
              "Wait in a safe, visible spot. We'll call you when we're 10 minutes away.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-6 h-6 bg-brand-navy text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Pricing */}
        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-7" aria-labelledby="lockout-pricing">
          <h2 id="lockout-pricing" className="text-2xl font-extrabold text-brand-navy mb-4">
            Car Lockout Prices in Leeds
          </h2>
          <div className="space-y-3">
            {[
              ['Standard vehicle lockout (day)', '£60 – £80'],
              ['Standard vehicle lockout (night / weekend)', '£70 – £100'],
              ['Van / commercial vehicle lockout', '£80 – £120'],
              ['Snapped key extraction only', '£60 – £90'],
              ['Lockout + new key programming', 'From £150'],
            ].map(([service, price]) => (
              <div key={service} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                <span className="text-slate-700 text-sm">{service}</span>
                <span className="font-bold text-brand-navy text-sm whitespace-nowrap ml-4">{price}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4">
            * Fixed price confirmed over the phone before we travel. No surprise charges.
          </p>
        </section>

        {/* Internal links */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-4 border border-slate-200">
          <h3 className="font-bold text-brand-navy mb-3">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/car-key-replacement" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">
              → Car Key Replacement
            </Link>
            <Link href="/services/transponder-key-programming" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">
              → Transponder Key Programming
            </Link>
            <Link href="/locations/middleton-leeds" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">
              → Middleton Leeds Coverage
            </Link>
          </div>
        </div>
      </article>

      <FAQ />
      <CTA
        heading="Locked Out in Leeds Right Now?"
        subheading="Call immediately — we respond 24/7 and aim to reach you within 30–60 minutes anywhere in Leeds."
      />
    </>
  )
}
