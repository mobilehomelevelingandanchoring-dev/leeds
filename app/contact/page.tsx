import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Car Keys Leeds | 24/7 Auto Locksmith',
  description:
    'Contact Car Keys Leeds for emergency auto locksmith services. Available 24/7 across all Leeds areas. Call 07940 757717 for immediate assistance.',
  alternates: { canonical: 'https://carkeysleeds.co.uk/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-navy py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 text-xl">
            For the fastest response, always call. We answer 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-extrabold text-brand-navy mb-6">Get in Touch</h2>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-brand-navy">Phone (24/7)</div>
                  <a href="tel:+447940757717" className="text-red-600 font-bold text-xl hover:text-red-500 transition-colors">
                    07940 757717
                  </a>
                  <p className="text-slate-500 text-sm mt-1">Always call for fastest response. We answer day and night.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-brand-navy">Email</div>
                  <a href="mailto:info@carkeysleeds.co.uk" className="text-brand-blue hover:text-amber-600 transition-colors">
                    info@carkeysleeds.co.uk
                  </a>
                  <p className="text-slate-500 text-sm mt-1">For non-urgent enquiries. We aim to respond within 4 hours.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-brand-navy">Service Area</div>
                  <p className="text-slate-600">Middleton, Leeds LS10 (base area)</p>
                  <p className="text-slate-500 text-sm mt-1">We cover all Leeds postcodes LS1–LS29 and surrounding areas.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-brand-navy">Hours</div>
                  <p className="text-slate-600">24 hours, 7 days a week</p>
                  <p className="text-slate-500 text-sm mt-1">Including weekends, bank holidays, and Christmas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info panel */}
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
            <h3 className="font-bold text-brand-navy text-lg mb-4">Before You Call — Useful Info</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              When you call, it helps to have the following ready so we can give you an accurate quote and fast response:
            </p>
            <ul className="space-y-2.5 text-slate-600 text-sm">
              {[
                'Your vehicle make, model, and year',
                'Your exact location (street name + postcode)',
                'How many working keys you currently have',
                'Whether the vehicle is accessible or locked',
                'Your V5C or insurance document if keys are totally lost',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-slate-200">
              <a
                href="tel:+447940757717"
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call 07940 757717 Now
              </a>
            </div>
          </div>
        </div>

        {/* Coverage areas */}
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-brand-navy mb-4">Coverage Areas</h2>
          <p className="text-slate-600 mb-4">
            We operate across the whole of Leeds. Our primary base is Middleton (LS10), giving us fast response times throughout South Leeds:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Middleton LS10','Beeston LS11','Hunslet LS10','Morley LS27','Rothwell LS26',
              'City Centre LS1','Headingley LS6','Chapel Allerton LS7','Roundhay LS8','Seacroft LS14',
              'Garforth LS25','Crossgates LS15','Horsforth LS18','Pudsey LS28','Armley LS12',
              'Bramley LS13','Holbeck LS11','Otley LS21','Guiseley LS20','Wetherby LS22',
            ].map((area) => (
              <span key={area} className="bg-slate-100 text-slate-600 text-sm px-3 py-1.5 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 bg-brand-navy rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold">Need help now? Browse our services first:</p>
          <div className="flex gap-3">
            <Link href="/services/car-key-replacement" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
              Key Replacement
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/services/car-lockout" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
              Car Lockout
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/locations/middleton-leeds" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
              Middleton Leeds
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
