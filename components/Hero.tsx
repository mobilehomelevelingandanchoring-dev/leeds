import Link from 'next/link'
import Image from 'next/image'

const PHONE = '07940 757717'
const PHONE_HREF = 'tel:+447940757717'

const trustBadges = [
  { icon: '⏱', text: '30–60 Min Response' },
  { icon: '🏅', text: 'MLA Approved' },
  { icon: '🚗', text: 'All Makes & Models' },
  { icon: '⭐', text: '4.9★ Rated' },
]

export default function Hero() {
  return (
    <section className="relative bg-brand-navy overflow-hidden" aria-label="Emergency auto locksmith hero">
      {/* Real van background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/van.webp"
          alt="Motorkeys Auto Locksmiths service van — MK60 KEY"
          fill
          className="object-cover object-center opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-navy/85 to-brand-blue/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse inline-block" aria-hidden="true" />
              24/7 Emergency Service — Leeds &amp; All Surrounding Areas
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Lost Your Car Keys{' '}
              <span className="text-amber-400">in Leeds?</span>
              <br />
              We&apos;ll Be There Fast.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-3 leading-relaxed">
              Motorkeys Auto Locksmiths — Leeds&apos; MLA-approved mobile auto locksmith. Whether you&apos;re locked out at midnight in Middleton or need a key cut and programmed in Morley, we come straight to you.
            </p>
            <p className="text-slate-400 mb-8 text-sm">
              No call-out charge. No dealer waiting. Fixed price quoted over the phone before we travel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 transform"
                aria-label={`Call Motorkeys on ${PHONE}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white hover:text-brand-navy font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200"
              >
                Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" role="list" aria-label="Trust indicators">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  role="listitem"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2.5"
                >
                  <span className="text-lg" aria-hidden="true">{badge.icon}</span>
                  <span className="text-white text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — real van photo */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/van.webp"
                alt="Motorkeys Auto Locksmiths Vauxhall Vivaro van — MK60 KEY — ready to respond across Leeds"
                width={600}
                height={420}
                className="w-full object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 to-transparent px-5 py-4">
                <p className="text-white font-bold text-sm">Our van — ready to respond across Leeds, 24/7</p>
                <p className="text-slate-300 text-xs mt-0.5">MLA Approved · ALA Member · Fully Insured</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 48h1440V24C1200 44 960 52 720 44 480 36 240 16 0 24V48z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
