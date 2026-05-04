const PHONE = '07940 757717'
const PHONE_HREF = 'tel:+447940757717'

interface CTAProps {
  heading?: string
  subheading?: string
  variant?: 'default' | 'minimal'
}

export default function CTA({
  heading = "Locked Out or Lost Your Keys?",
  subheading = "Don't wait around. One call and we'll be on our way to you anywhere in Leeds.",
  variant = 'default',
}: CTAProps) {
  if (variant === 'minimal') {
    return (
      <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-200">
        <h3 className="text-xl font-bold text-brand-navy mb-2">{heading}</h3>
        <p className="text-slate-600 text-sm mb-5">{subheading}</p>
        <a
          href={PHONE_HREF}
          className="btn-emergency"
          aria-label={`Call Car Keys Leeds on ${PHONE}`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call {PHONE}
        </a>
      </div>
    )
  }

  return (
    <section className="section-pad bg-gradient-to-br from-brand-navy via-brand-blue to-slate-900" aria-label="Call to action">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse inline-block" aria-hidden="true" />
            Available Right Now — All of Leeds
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{heading}</h2>
          <p className="text-slate-300 text-lg mb-8">{subheading}</p>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={PHONE_HREF}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xl px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-200 hover:-translate-y-0.5 transform"
              aria-label={`Emergency call to Car Keys Leeds on ${PHONE}`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {PHONE}
            </a>
          </div>

          {/* Reassurances */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {[
              'No call-out charge',
              'Fixed price before we arrive',
              'Fully insured',
              'All makes covered',
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
