import type { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = {
  title: 'Car Key Replacement Leeds | All Makes & Models | Same Day',
  description:
    'Lost your car keys in Leeds? We replace car keys for all makes and models — cut and programmed on-site, same day. No dealer wait. From £80. Call 07940 757717.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/services/car-key-replacement' },
  openGraph: {
    title: 'Car Key Replacement Leeds | All Makes | Same Day',
    description: 'Mobile car key replacement in Leeds. We come to you. All makes covered. From £80.',
  },
}

const makes = [
  'Ford', 'Vauxhall', 'Volkswagen', 'Audi', 'BMW', 'Mercedes-Benz',
  'Toyota', 'Honda', 'Nissan', 'Renault', 'Peugeot', 'Citroën',
  'Hyundai', 'Kia', 'Seat', 'Skoda', 'Fiat', 'Volvo',
  'Land Rover', 'Jeep', 'Mazda', 'Subaru', 'Mitsubishi', 'Suzuki',
]

const process = [
  {
    step: '1',
    title: 'Call Us',
    description: "Phone us on 07940 757717. Tell us your vehicle make, model, and year, and where you are in Leeds. We'll confirm we can help and give you a fixed price straight away.",
  },
  {
    step: '2',
    title: 'We Come to You',
    description: "A fully-equipped technician heads to your location. We cover all Leeds postcodes — LS1 to LS29 and beyond. Most of South Leeds within 20–35 minutes.",
  },
  {
    step: '3',
    title: 'Key Cut & Programmed',
    description: "We cut a new key to match your lock profile, then connect to your car's ECU to programme the transponder chip. Both steps happen at your location — no towing, no workshop.",
  },
  {
    step: '4',
    title: 'Drive Away',
    description: "We test the key fully — locks, ignition, central locking, and remote functions. You're back on the road, usually within 30–60 minutes of our arrival.",
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Car Key Replacement Leeds',
  description:
    'Mobile car key replacement service in Leeds. We cut and programme replacement keys for all makes and models on-site at your location. Same-day service available.',
  provider: {
    '@type': 'LocksmithBusiness',
    name: 'Car Keys Leeds',
    url: 'https://carkeysleeds.co.uk',
    telephone: '+447940757717',
    areaServed: { '@type': 'City', name: 'Leeds', addressCountry: 'GB' },
  },
  areaServed: { '@type': 'City', name: 'Leeds' },
  offers: {
    '@type': 'Offer',
    priceRange: '£80 - £280',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
  },
  serviceType: 'Car Key Replacement',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://carkeysleeds.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://carkeysleeds.co.uk/services' },
    { '@type': 'ListItem', position: 3, name: 'Car Key Replacement Leeds', item: 'https://carkeysleeds.co.uk/services/car-key-replacement' },
  ],
}

export default function CarKeyReplacementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Page hero */}
      <section className="bg-brand-navy py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Car Key Replacement</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Same Day Service Available
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Car Key Replacement in Leeds
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl leading-relaxed">
            Lost all your car keys? Need a spare? Whether you have one key left or none at all, we can cut and programme a fully working replacement — at your location, same day.
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
            <Link
              href="/services/car-lockout"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              Locked Out Instead?
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Quick facts bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          {[
            { label: 'From', value: '£80' },
            { label: 'Response', value: '30–60 min' },
            { label: 'Availability', value: '24/7' },
            { label: 'Makes covered', value: '100+' },
          ].map((fact) => (
            <div key={fact.label} className="text-center">
              <div className="text-2xl font-extrabold text-brand-navy">{fact.value}</div>
              <div className="text-slate-500 text-sm">{fact.label}</div>
            </div>
          ))}
        </div>

        {/* What we do */}
        <section className="mb-12" aria-labelledby="what-we-do">
          <h2 id="what-we-do" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            What Does Car Key Replacement Involve?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Modern car keys are more than a piece of metal — they contain a transponder chip that communicates with your vehicle&apos;s immobiliser. Without that chip being programmed to your specific car, the engine simply won&apos;t start, even if the key is physically cut correctly.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Car key replacement is therefore a two-stage process: cutting the key blade to match your lock profile, then programming the transponder to your car&apos;s ECU. We do both on-site using professional automotive diagnostic equipment — the same tools used by franchised dealers, but at roadside or on your driveway.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If you have no original key at all, we can usually still help. We use your vehicle&apos;s VIN number and lock data to create a replacement from scratch. You&apos;ll need to prove ownership (V5C, insurance document, or similar), and we may need to check a couple of extra things depending on your vehicle — but for the majority of makes we can do a full zero-key replacement in a single visit.
          </p>
        </section>

        {/* Key types */}
        <section className="mb-12" aria-labelledby="key-types">
          <h2 id="key-types" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            Types of Car Key We Replace
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                type: 'Transponder Keys',
                detail: 'The most common type for post-2000 vehicles. A chip inside the key handle communicates with the immobiliser. We cut and programme these for most makes.',
              },
              {
                type: 'Remote / Key Fob Combos',
                detail: 'Keys with integrated central locking remotes. We replace the blade, programme the immobiliser chip, and sync the remote function.',
              },
              {
                type: 'Smart / Proximity Keys',
                detail: "Keyless entry and push-button start. These require specialist programming. We cover most common models including Ford Fiesta, VW Golf, BMW, and Nissan Qashqai.",
              },
              {
                type: 'Flip Keys',
                detail: 'Keys with a folding blade mechanism. We replace broken housings, cut new blades, and re-programme transponders.',
              },
              {
                type: 'Basic Cut Keys',
                detail: "For older vehicles without immobilisers — we cut and profile these quickly, usually in minutes.",
              },
              {
                type: 'VAT Keys & High Security',
                detail: 'High-security keys for Land Rover, Jaguar, and high-end BMWs. These require additional authorisation steps — call us to discuss.',
              },
            ].map((item) => (
              <div key={item.type} className="p-5 bg-white border border-slate-200 rounded-xl">
                <h3 className="font-bold text-brand-navy mb-1.5">{item.type}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-12" aria-labelledby="how-it-works">
          <h2 id="how-it-works" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            How It Works
          </h2>
          <div className="space-y-4">
            {process.map((step) => (
              <div key={step.step} className="flex gap-5 items-start">
                <div className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Makes covered */}
        <section className="mb-12" aria-labelledby="makes-covered">
          <h2 id="makes-covered" className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            Vehicle Makes We Cover
          </h2>
          <p className="text-slate-600 mb-5">
            We carry keys and programming data for over 100 vehicle makes. Here&apos;s a selection of the most common in Leeds:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {makes.map((make) => (
              <span key={make} className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-full">
                {make}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4">
            Don&apos;t see your make? Call us — we&apos;ll confirm availability over the phone.
          </p>
        </section>

        {/* Pricing */}
        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-7" aria-labelledby="pricing">
          <h2 id="pricing" className="text-2xl font-extrabold text-brand-navy mb-4">
            Car Key Replacement Prices — Leeds
          </h2>
          <p className="text-slate-600 text-sm mb-5">
            Prices vary by vehicle make, model, key type, and how many working keys remain. Below are typical ranges:
          </p>
          <div className="space-y-3">
            {[
              ['Basic transponder key (common models)', '£80 – £120'],
              ['Remote / flip key with programming', '£110 – £180'],
              ['Smart / proximity key (most models)', '£150 – £240'],
              ['Zero-key replacement (all keys lost)', '£150 – £280'],
              ['Premium brands (BMW, Audi, Mercedes)', '£180 – £280'],
            ].map(([service, price]) => (
              <div key={service} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                <span className="text-slate-700 text-sm">{service}</span>
                <span className="font-bold text-brand-navy text-sm whitespace-nowrap ml-4">{price}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4">
            * All prices include call-out, key cutting, and programming. VAT receipts provided. We quote fixed prices over the phone.
          </p>
        </section>

        {/* Internal links */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-12 border border-slate-200">
          <h3 className="font-bold text-brand-navy mb-3">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/car-lockout" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">
              → Car Lockout Service
            </Link>
            <Link href="/services/transponder-key-programming" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">
              → Transponder Programming
            </Link>
            <Link href="/services/spare-key-cutting" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">
              → Spare Key Cutting
            </Link>
            <Link href="/locations/middleton-leeds" className="text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">
              → Middleton Leeds Coverage
            </Link>
          </div>
        </div>
      </article>

      <Reviews />
      <FAQ />
      <CTA heading="Need a Replacement Car Key in Leeds?" subheading="Call now for a fixed price quote. We'll be with you in 30–60 minutes." />
    </>
  )
}
