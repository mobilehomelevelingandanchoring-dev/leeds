import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Car Keys Leeds',
  description: 'Terms and conditions for Car Keys Leeds auto locksmith services.',
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-extrabold text-brand-navy mb-2">Terms &amp; Conditions</h1>
      <p className="text-slate-500 text-sm mb-8">Last updated: May 2025</p>

      <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-brand-navy">Our Services</h2>
          <p>Car Keys Leeds provides mobile auto locksmith services including car key replacement, vehicle access, and key programming. All services are carried out by trained, insured technicians.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Pricing</h2>
          <p>We provide fixed price quotes over the phone before we travel. The quoted price is the price you pay — there are no hidden charges or call-out fees unless otherwise stated. Prices may vary from estimates if additional work is required once on-site, in which case we will advise you before proceeding.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Proof of Ownership</h2>
          <p>For all-keys-lost situations and certain programming jobs, we require proof that you are the registered keeper or owner of the vehicle. Acceptable documents include a V5C logbook, insurance certificate, or registered keeper letter. We reserve the right to decline service if satisfactory proof cannot be provided.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Guarantee</h2>
          <p>All work is guaranteed for 90 days from the date of service. If a fault arises with work we have carried out within this period, we will return to rectify it at no charge. This does not cover damage caused by third parties or misuse.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Liability</h2>
          <p>We carry full public liability insurance. Our liability is limited to the value of the work carried out. We are not liable for any indirect or consequential losses.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Cancellation</h2>
          <p>If you need to cancel after we have already travelled to your location, a call-out fee may apply. We will always inform you of this before we proceed.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-navy">Contact</h2>
          <p>For any queries about these terms, contact us at <a href="mailto:info@carkeysleeds.co.uk" className="text-brand-blue hover:underline">info@carkeysleeds.co.uk</a> or call 07700 900000.</p>
        </section>
      </div>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link href="/" className="text-brand-blue hover:text-amber-600 font-medium transition-colors">← Back to homepage</Link>
      </div>
    </div>
  )
}
