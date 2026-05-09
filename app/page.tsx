import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import Accreditations from '@/components/Accreditations'
import Areas from '@/components/Areas'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Link from 'next/link'
import Image from 'next/image'
import { breadcrumbSchema, speakableSchema, webPageSchema } from '@/lib/schema'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Car Keys Leeds | Mobile Auto Locksmith | 24/7 Emergency Service',
  description:
    'Emergency mobile auto locksmith serving all of Leeds. Lost car keys, locked out, key programming. 30–60 min response. MLA approved. Fully insured. Call 07309 903243.',
  alternates: { canonical: 'https://carkeysleeds.co.uk' },
  openGraph: {
    url: 'https://carkeysleeds.co.uk',
    title: 'Car Keys Leeds | Mobile Auto Locksmith | 24/7',
    description: "Leeds' MLA-approved mobile auto locksmith. 30–60 min response, all makes covered.",
  },
}

const whyUsPoints = [
  {
    title: 'We Come to You',
    description:
      "There's no workshop to visit, no towing required. We arrive at your home, workplace, or roadside with all the equipment needed to sort your keys on the spot.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Half the Dealer Price',
    description:
      'Main dealers often charge £200–£500 and make you wait days or even weeks. We typically cost 40–60% less and are with you the same day — often within the hour.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Professional Equipment',
    description:
      'We use the same calibre of automotive locksmith tools that dealers use — not generic key cutters. Your replacement key is cut and programmed to OEM specification.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Transparent Pricing',
    description:
      "We give you a fixed price over the phone before we travel. No surprise charges, no hidden fees. What we quote is what you pay — even for complex jobs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

export default function HomePage() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', item: 'https://carkeysleeds.co.uk' },
  ])

  const speakable = speakableSchema('https://carkeysleeds.co.uk', [
    'h1',
    '#service-summary',
    '#faq',
  ])

  const webPage = webPageSchema({
    url: 'https://carkeysleeds.co.uk',
    name: 'Car Keys Leeds — Mobile Auto Locksmith 24/7',
    description: 'Emergency mobile auto locksmith serving all of Leeds. MLA approved. 30–60 min response.',
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />

      <Hero />
      <TrustBar />
      <Services />
      <Accreditations />

      {/* Why Choose Us */}
      <section className="section-pad bg-slate-50" aria-labelledby="why-us-heading">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Why Motorkeys</p>
              <h2 id="why-us-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
                Your Local Leeds Auto Locksmith — Not a National Call Centre
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6" id="service-summary">
                When you call us, you speak directly to Mick — the locksmith who&apos;s coming out to you. No middlemen, no outsourcing to whoever is cheapest on the day. We&apos;re based in Middleton and have been serving Leeds motorists for years. You might have seen the van on the Middleton Park estate, parked up in Beeston, or on a callout in Morley town centre.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We carry stock for the most common Leeds vehicles — Ford Fiestas, Vauxhall Astras, VW Golfs, Nissan Qashqais — meaning we can often complete the job in a single visit without ordering parts.
              </p>
              <Link
                href="/locations/middleton-leeds"
                className="btn-primary"
                aria-label="Learn more about our Middleton Leeds auto locksmith coverage"
              >
                Our Leeds Coverage
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="space-y-5">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-100">
                <Image
                  src="/images/renault-key-job.webp"
                  alt="Completed Renault car key replacement job — new key on steering wheel, programmed on-site in Leeds by Motorkeys Auto Locksmiths"
                  width={600}
                  height={340}
                  className="w-full object-cover max-h-52"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent px-4 py-3">
                  <p className="text-white text-sm font-semibold">Real job — Renault key replacement, completed on-site in Leeds</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUsPoints.map((point) => (
                  <div key={point.title} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                    <div className="text-brand-blue mb-3">{point.icon}</div>
                    <h3 className="font-bold text-brand-navy mb-1.5">{point.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <div className="bg-amber-500 py-5 px-4">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-900 font-bold text-lg text-center sm:text-left">
            Locked out right now? Call us — we&apos;ll be there within the hour.
          </p>
          <a
            href="tel:+447309903243"
            className="shrink-0 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3 rounded-lg transition-colors shadow-md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            07309 903243
          </a>
        </div>
      </div>

      <Areas />
      <Reviews />
      <FAQ />
      <CTA />
    </>
  )
}
