import Link from 'next/link'

const services = [
  {
    title: 'Car Key Replacement',
    description:
      'Lost all your keys or need a replacement? We cut and program new keys on-site for virtually all makes, including Ford, Vauxhall, VW, BMW, Audi, Mercedes, Toyota and more.',
    href: '/services/car-key-replacement',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    tag: 'Most Popular',
  },
  {
    title: 'Car Lockout / Emergency Opening',
    description:
      'Locked your keys inside? Left them on the seat? We use non-destructive entry methods to get you back in your vehicle quickly, without any damage.',
    href: '/services/car-lockout',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    tag: '24/7 Emergency',
  },
  {
    title: 'Transponder Key Programming',
    description:
      'Modern cars require keys to be coded to the ECU. We carry professional-grade programming equipment for all major manufacturers — no need for an expensive dealer visit.',
    href: '/services/transponder-key-programming',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tag: null,
  },
  {
    title: 'Spare Key Cutting',
    description:
      "A spare key is the cheapest insurance you'll ever buy. We can cut and program an additional key at your home or workplace — much cheaper than sorting it after you've lost the original.",
    href: '/services/spare-key-cutting',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    tag: null,
  },
  {
    title: 'Remote & Key Fob Replacement',
    description:
      'Broken remote buttons, a dead key fob, or a proximity key that stopped working? We supply and program replacement remotes for all models on-site.',
    href: '/services/remote-key-fob',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    tag: null,
  },
  {
    title: 'Van Key Services',
    description:
      'Transit, Sprinter, Vivaro, Trafic — we cover all major commercial vans. Whether you need a replacement key, lockout help, or additional keys for your fleet, we have you covered.',
    href: '/services/van-keys',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    tag: null,
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white" aria-labelledby="services-heading">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
            Auto Locksmith Services in Leeds
          </h2>
          <p className="text-slate-600 text-lg">
            From lost car keys to emergency lockouts — fully mobile, fully equipped, straight to your location.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service.title} className="relative card group hover:border-brand-blue hover:border flex flex-col">
              {service.tag && (
                <span className="absolute -top-3 left-4 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              )}
              <div className="text-brand-blue mb-4 group-hover:text-amber-500 transition-colors duration-200">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">{service.description}</p>
              <Link
                href={service.href}
                className="mt-4 inline-flex items-center gap-1 text-brand-blue font-semibold text-sm hover:text-amber-600 transition-colors"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4">Not sure what you need? Give us a call — we&apos;ll advise you for free.</p>
          <a href="tel:+447309903243" className="btn-emergency">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            07309 903243 — Call Free Advice
          </a>
        </div>
      </div>
    </section>
  )
}
