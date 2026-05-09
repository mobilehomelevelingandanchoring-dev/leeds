import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Car Keys Leeds',
  description: 'Privacy policy for Car Keys Leeds — how we collect, use and protect your personal information.',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-extrabold text-brand-navy mb-2">Privacy Policy</h1>
      <p className="text-slate-500 text-sm mb-8">Last updated: May 2025</p>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Who We Are</h2>
          <p>Car Keys Leeds is a mobile auto locksmith business operating in Leeds, West Yorkshire, UK. Our website is <strong>carkeysleeds.co.uk</strong>. You can contact us at info@carkeysleeds.co.uk or 07309 903243.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">What Information We Collect</h2>
          <p>When you contact us by phone, email or via our website, we may collect:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Your name and contact details (phone number, email address)</li>
            <li>Your vehicle details (make, model, registration)</li>
            <li>Your location at time of service</li>
            <li>Payment information (processed securely — we do not store card details)</li>
          </ul>
          <p className="mt-3">We also collect standard website analytics data (page views, browser type, location) via anonymised analytics tools.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and arrange the locksmith services you request</li>
            <li>To contact you about your booking or enquiry</li>
            <li>To provide VAT receipts and job records</li>
            <li>To improve our website and services</li>
          </ul>
          <p className="mt-3">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Your Rights</h2>
          <p>Under UK GDPR, you have the right to access, correct, or request deletion of your personal data. Contact us at info@carkeysleeds.co.uk to exercise these rights.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Cookies</h2>
          <p>Our website uses essential cookies for functionality and anonymised analytics cookies. No personally identifiable tracking cookies are used without your consent.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Contact</h2>
          <p>For any privacy-related queries, email us at <a href="mailto:info@carkeysleeds.co.uk" className="text-brand-blue hover:underline">info@carkeysleeds.co.uk</a>.</p>
        </section>
      </div>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link href="/" className="text-brand-blue hover:text-amber-600 font-medium transition-colors">← Back to homepage</Link>
      </div>
    </div>
  )
}
