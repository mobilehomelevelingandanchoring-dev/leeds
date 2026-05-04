import Link from 'next/link'
import Image from 'next/image'

const PHONE = '07940 757717'
const PHONE_HREF = 'tel:+447940757717'
const EMAIL = 'info@carkeysleeds.co.uk'

const serviceLinks = [
  { label: 'Car Key Replacement Leeds', href: '/services/car-key-replacement' },
  { label: 'Car Lockout Service Leeds', href: '/services/car-lockout' },
  { label: 'Transponder Key Programming', href: '/services/transponder-key-programming' },
  { label: 'Spare Key Cutting Leeds', href: '/services/spare-key-cutting' },
  { label: 'Remote & Key Fob Replacement', href: '/services/remote-key-fob' },
  { label: 'Van Key Services Leeds', href: '/services/van-keys' },
]

const locationLinks = [
  { label: 'Auto Locksmith Middleton LS10', href: '/locations/middleton-leeds' },
  { label: 'Auto Locksmith Beeston LS11', href: '/locations/beeston-leeds' },
  { label: 'Auto Locksmith Morley LS27', href: '/locations/morley-leeds' },
  { label: 'Auto Locksmith Rothwell LS26', href: '/locations/rothwell-leeds' },
  { label: 'Auto Locksmith City Centre LS1', href: '/locations/leeds-city-centre' },
  { label: 'Auto Locksmith Garforth LS25', href: '/locations/garforth-leeds' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Motorkeys Auto Locksmiths - Home">
              <Image
                src="/images/logo.webp"
                alt="Motorkeys Auto Locksmiths"
                width={140}
                height={56}
                className="h-12 w-auto object-contain brightness-200"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Motorkeys Auto Locksmiths — MLA-approved mobile auto locksmith based in Middleton, Leeds. Serving all LS postcodes 24 hours a day, 7 days a week.
            </p>
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full">
                🏅 MLA Approved · No. 003625
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={PHONE_HREF} className="text-white font-bold hover:text-amber-400 transition-colors">{PHONE}</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-slate-400">Middleton, Leeds, LS10 (mobile — we come to you)</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://www.facebook.com/mickkirk61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  aria-label="Car Keys Leeds on Facebook"
                >
                  <svg className="w-4 h-4 text-[#1877F2] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                  <span className="text-sm">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Service Areas</h3>
            <ul className="space-y-2.5">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & trust */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Opening Hours</h3>
            <div className="space-y-1.5 text-sm mb-6">
              {[
                ['Monday – Friday', '24 hours'],
                ['Saturday', '24 hours'],
                ['Sunday', '24 hours'],
                ['Bank Holidays', '24 hours'],
              ].map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-4">
                  <span className="text-slate-400">{day}</span>
                  <span className="text-green-400 font-semibold">{hours}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-white block mb-1">Fully Insured &amp; MLA Approved</strong>
                MLA Approved Company, Membership No. 003625. Also a member of the Auto Locksmiths Association (ALA). All work fully insured with public liability cover.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Car Keys Leeds. All rights reserved. carkeysleeds.co.uk</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
