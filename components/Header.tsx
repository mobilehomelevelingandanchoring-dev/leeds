'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const PHONE = '07700 900000'
const PHONE_HREF = 'tel:+447700900000'

const services = [
  { label: 'Car Key Replacement', href: '/services/car-key-replacement' },
  { label: 'Car Lockout Service', href: '/services/car-lockout' },
  { label: 'Transponder Key Programming', href: '/services/transponder-key-programming' },
  { label: 'Spare Key Cutting', href: '/services/spare-key-cutting' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white shadow-md' : 'bg-white border-b border-slate-100'}`}>
      {/* Top emergency bar */}
      <div className="bg-brand-navy text-white text-sm py-1.5 px-4 text-center hidden sm:block">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
          <strong>Available Now — 24/7 Emergency Response Across Leeds</strong>
          <span className="mx-2 opacity-40">|</span>
          <a href={PHONE_HREF} className="font-bold text-amber-400 hover:text-amber-300 transition-colors">
            {PHONE}
          </a>
        </span>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Car Keys Leeds — Home">
            <div className="w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.65 10A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-brand-navy text-lg leading-none block">Car Keys</span>
              <span className="text-amber-500 font-semibold text-sm leading-none">Leeds</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700" aria-label="Main navigation">
            <Link href="/" className="hover:text-brand-navy transition-colors">Home</Link>

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                className="flex items-center gap-1 hover:text-brand-navy transition-colors py-2"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-navy transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/locations/middleton-leeds" className="hover:text-brand-navy transition-colors">Areas</Link>
            <Link href="/contact" className="hover:text-brand-navy transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden sm:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label={`Call Car Keys Leeds on ${PHONE}`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {PHONE}
            </a>
            <a
              href={PHONE_HREF}
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors shadow-md"
              aria-label="Call us now"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-brand-navy"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1" role="navigation" aria-label="Mobile navigation">
          <Link href="/" className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
          <div className="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">Services</div>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block px-6 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50"
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <Link href="/locations/middleton-leeds" className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium" onClick={() => setMenuOpen(false)}>Coverage Areas</Link>
          <Link href="/contact" className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="pt-2">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-bold py-3 rounded-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
