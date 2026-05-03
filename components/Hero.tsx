import Link from 'next/link'

const PHONE = '07700 900000'
const PHONE_HREF = 'tel:+447700900000'

const trustBadges = [
  { icon: '⏱', text: '30–60 Min Response' },
  { icon: '🔒', text: 'Fully Insured' },
  { icon: '🚗', text: 'All Makes & Models' },
  { icon: '⭐', text: '4.9★ Rating' },
]

export default function Hero() {
  return (
    <section
      className="relative bg-brand-navy overflow-hidden"
      aria-label="Emergency auto locksmith hero"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-navy opacity-90" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Emergency badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse inline-block" aria-hidden="true" />
            24/7 Emergency Service — Leeds &amp; All Surrounding Areas
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Lost Your Car Keys{' '}
            <span className="text-amber-400">in Leeds?</span>
            <br />
            We&apos;ll Be There Fast.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 mb-4 max-w-2xl leading-relaxed">
            Mobile auto locksmith covering the whole of Leeds. Whether you&apos;re locked out at midnight in Middleton or need a replacement key cut and programmed in Headingley — we come to you, wherever you are.
          </p>

          <p className="text-slate-400 mb-8 text-sm">
            No call-out charge. No waiting at a dealer for days. One call and we&apos;re on our way.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 transform"
              aria-label={`Call Car Keys Leeds now on ${PHONE}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call {PHONE}
            </a>
            <Link
              href="/services/car-key-replacement"
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
