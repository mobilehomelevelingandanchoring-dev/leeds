import Image from 'next/image'

export default function Accreditations() {
  return (
    <section className="section-pad bg-slate-50 border-y border-slate-200" aria-labelledby="accreditations-heading">
      <div className="container-max">
        <div className="text-center mb-10">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Credentials</p>
          <h2 id="accreditations-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3">
            Fully Accredited — Not Just Anyone with a Van
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Motorkeys Auto Locksmiths is an approved member of both the Master Locksmiths Association and the Auto Locksmiths Association. These aren&apos;t self-certifications — they require professional vetting, ongoing training, and compliance checks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">

          {/* MLA Certificate */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
            <div className="relative h-72 bg-slate-100">
              <Image
                src="/images/mla-certificate.webp"
                alt="Master Locksmiths Association Approved Company certificate for Motorkeys Auto Locksmiths, Membership No. 003625, valid until 30 June 2026"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy">Master Locksmiths Association</h3>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    MLA Approved Company — Membership No. <strong>003625</strong>. Independently verified and vetted to MLA professional standards.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-green-600 font-semibold mt-2 bg-green-50 px-2.5 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Valid until 30 June 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Van + ALA + About */}
          <div className="space-y-5">
            {/* Real van photo */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/van.webp"
                  alt="Motorkeys Auto Locksmiths fully equipped service van — Vauxhall Vivaro MK60 KEY — Middleton Leeds"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-brand-navy text-sm">Our Fully-Equipped Service Van</h3>
                <p className="text-slate-600 text-sm mt-1">
                  The van you see arriving is stocked with professional key-cutting machines and diagnostic programming equipment — not a basic kit. We carry stock for the most common Leeds vehicles so most jobs are completed in a single visit.
                </p>
              </div>
            </div>

            {/* ALA badge */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-blue-700 text-sm">
                ALA
              </div>
              <div>
                <h3 className="font-bold text-brand-navy">Auto Locksmiths Association</h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Also a member of the ALA — the UK&apos;s specialist trade body for automotive locksmiths. ALA membership signals dedicated expertise in vehicle security specifically, not just general locksmithing.
                </p>
              </div>
            </div>

            {/* Why it matters */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <h3 className="font-bold text-brand-navy text-sm mb-2">Why Accreditation Matters to You</h3>
              <ul className="space-y-1.5 text-slate-600 text-sm">
                {[
                  'Your insurer may require an MLA-approved locksmith for claims',
                  'Accredited locksmiths carry verified insurance',
                  'Training is assessed — not self-declared',
                  'You have a formal complaints process if anything goes wrong',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
