import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Auto Locksmith Services Leeds | Car Keys & Lockouts | 24/7',
  description:
    'Full range of mobile auto locksmith services in Leeds. Car key replacement, lockouts, transponder programming, spare keys, van keys. 30–60 min response. Call 07940 757717.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/services' },
}

const services = [
  {
    title: 'Car Key Replacement',
    description:
      'Lost all your keys, or down to your last one? We cut and programme replacement keys for all makes on-site — no dealer wait, no towing required.',
    href: '/services/car-key-replacement',
    price: 'From £80',
    tag: 'Most Popular',
    icon: '🔑',
  },
  {
    title: 'Car Lockout / Emergency Access',
    description:
      'Locked your keys inside? Left them on the seat? We use non-destructive techniques to get you back in without any damage to your vehicle.',
    href: '/services/car-lockout',
    price: 'From £60',
    tag: '24/7 Emergency',
    icon: '🔓',
  },
  {
    title: 'Transponder Key Programming',
    description:
      "Have the key cut but it won't start the engine? We programme transponder chips to your ECU using professional diagnostic tools — for all major makes.",
    href: '/services/transponder-key-programming',
    price: 'From £60',
    tag: null,
    icon: '📡',
  },
  {
    title: 'Spare Key Cutting',
    description:
      "The best time to get a spare key is before you need one. We cut and programme backup keys at your home or workplace — far cheaper than an emergency call-out later.",
    href: '/services/spare-key-cutting',
    price: 'From £80',
    tag: 'Recommended',
    icon: '🗝️',
  },
  {
    title: 'Remote & Key Fob Replacement',
    description:
      'Broken remote, dead key fob, or a proximity key that stopped responding? We supply and programme replacement remotes for all models on-site.',
    href: '/services/remote-key-fob',
    price: 'From £70',
    tag: null,
    icon: '📻',
  },
  {
    title: 'Van Key Services',
    description:
      'Ford Transit, Mercedes Sprinter, VW Transporter, Vauxhall Vivaro — we cover all major commercial vans with replacement keys, lockouts, and fleet key management.',
    href: '/services/van-keys',
    price: 'From £90',
    tag: null,
    icon: '🚐',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://carkeysleeds.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://carkeysleeds.co.uk/services' },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-brand-navy py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Auto Locksmith Services in Leeds
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Fully mobile — we bring everything to you. All services available 24 hours a day, 7 days a week, across the whole of Leeds.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service.title} className="relative bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-brand-blue transition-all duration-200 flex flex-col">
              {service.tag && (
                <span className="absolute -top-3 left-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              )}
              <div className="text-3xl mb-3" aria-hidden="true">{service.icon}</div>
              <h2 className="text-xl font-bold text-brand-navy mb-2">{service.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">{service.description}</p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-brand-navy font-bold">{service.price}</span>
                <Link
                  href={service.href}
                  className="text-sm text-brand-blue hover:text-amber-600 font-semibold transition-colors inline-flex items-center gap-1"
                >
                  Full details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center">
          <h2 className="text-2xl font-extrabold text-brand-navy mb-3">Not Sure What You Need?</h2>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Give us a call and describe the situation — we&apos;ll tell you exactly what&apos;s involved, whether we can help, and how much it will cost. Free advice, no obligation.
          </p>
          <a href="tel:+447940757717" className="btn-emergency">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call 07940 757717 — Free Advice
          </a>
        </div>
      </section>

      <CTA />
    </>
  )
}
