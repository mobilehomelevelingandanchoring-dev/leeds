import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you were looking for could not be found. Return to Car Keys Leeds.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold text-slate-200 mb-4" aria-hidden="true">404</div>
        <h1 className="text-2xl font-bold text-brand-navy mb-3">Page not found</h1>
        <p className="text-slate-600 mb-8">
          The page you were looking for doesn&apos;t exist. It may have been moved or the URL is incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">Back to Homepage</Link>
          <a href="tel:+447309903243" className="btn-emergency">Call 07309 903243</a>
        </div>
      </div>
    </div>
  )
}
