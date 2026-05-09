'use client'

import { useState, useEffect } from 'react'

const PHONE = '07309 903243'
const PHONE_HREF = 'tel:+447309903243'

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-label="Sticky call button"
    >
      <div className="bg-white border-t border-slate-200 px-4 py-3 shadow-2xl">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold text-base py-4 rounded-xl shadow-lg transition-colors"
          aria-label={`Emergency call to Car Keys Leeds on ${PHONE}`}
        >
          <div className="relative">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-xs font-normal opacity-80 leading-none mb-0.5">Tap to call now — 24/7</div>
            <div className="text-lg leading-none">{PHONE}</div>
          </div>
        </a>
      </div>
    </div>
  )
}
