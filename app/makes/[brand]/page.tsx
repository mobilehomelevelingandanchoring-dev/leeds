import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import CTA from '@/components/CTA'
import { breadcrumbSchema, faqSchema, serviceSchema, SITE, PHONE_E164, PHONE_DISPLAY } from '@/lib/schema'
import { brands } from '@/lib/brands'

export const revalidate = false

export async function generateStaticParams() {
  return brands.map(b => ({ brand: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand: slug } = await params
  const brand = brands.find(b => b.slug === slug)
  if (!brand) return {}
  return {
    title: brand.metaTitle,
    description: brand.metaDesc,
    alternates: { canonical: `${SITE}/makes/${brand.slug}` },
  }
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: slug } = await params
  const brand = brands.find(b => b.slug === slug)
  if (!brand) return notFound()

  const pageUrl = `${SITE}/makes/${brand.slug}`

  const svcSchema = serviceSchema({
    name: `${brand.name} Car Key Replacement Leeds`,
    url: pageUrl,
    description: brand.metaDesc,
    priceRange: '£80-£380',
    serviceType: 'Auto Locksmith',
  })

  const crumbSchema = breadcrumbSchema([
    { name: 'Home', item: SITE },
    { name: 'Car Keys by Make', item: `${SITE}/makes` },
    { name: `${brand.name} Keys Leeds`, item: pageUrl },
  ])

  const faqSchemaJson = faqSchema(brand.faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      {/* Hero */}
      <section className="bg-brand-navy py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/makes" className="hover:text-amber-400 transition-colors">Car Keys by Make</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{brand.name} Keys Leeds</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            {brand.name} Specialist — All Models Covered
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {brand.h1}
            <span className="block text-amber-400 text-2xl sm:text-3xl mt-2">Cut &amp; Programmed On-Site — 24/7</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            {brand.intro}
          </p>
          <a
            href={`tel:${PHONE_E164}`}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-green-50 rounded-2xl border border-green-200">
          {[
            { label: 'Response (Leeds)', value: '25–45 min' },
            { label: 'Availability', value: '24/7' },
            { label: 'Models covered', value: 'All' },
            { label: 'Rating', value: '4.9 ★' },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-brand-navy">{f.value}</div>
              <div className="text-slate-500 text-xs sm:text-sm mt-1">{f.label}</div>
            </div>
          ))}
        </div>

        {/* Key technology */}
        <section className="mb-10" aria-labelledby={`${slug}-tech`}>
          <h2 id={`${slug}-tech`} className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            {brand.name} Key Technology — What We Work With
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {brand.keyTech}
          </p>
        </section>

        {/* Models covered */}
        <section className="mb-10" aria-labelledby={`${slug}-models`}>
          <h2 id={`${slug}-models`} className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-4">
            {brand.name} Models We Cover
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {brand.models.map(model => (
              <span key={model} className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-full">
                {model}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4">Not listed? Call us — we cover all {brand.name} models sold in the UK.</p>
        </section>

        {/* Pricing */}
        <section className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-7" aria-labelledby={`${slug}-pricing`}>
          <h2 id={`${slug}-pricing`} className="text-2xl font-extrabold text-brand-navy mb-4">
            {brand.name} Key Prices — Leeds
          </h2>
          <div className="space-y-3">
            {brand.pricingRows.map(([svc, price]) => (
              <div key={svc} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                <span className="text-slate-700 text-sm">{svc}</span>
                <span className="font-bold text-brand-navy text-sm ml-4">{price}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs mt-4">Fixed prices confirmed over the phone before we travel. VAT receipts provided on completion.</p>
        </section>

        {/* Services */}
        <section className="mb-10" aria-labelledby={`${slug}-services`}>
          <h2 id={`${slug}-services`} className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-5">
            {brand.name} Key Services in Leeds
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: `${brand.name} Key Replacement`, desc: `Lost or broken ${brand.name} key? We cut and programme replacement keys on-site for all ${brand.name} models — no dealer booking needed.`, href: '/services/car-key-replacement' },
              { title: `${brand.name} Car Lockout`, desc: `Locked out of your ${brand.name} anywhere in Leeds? Non-destructive entry, 24/7, response in 25–45 minutes.`, href: '/services/car-lockout' },
              { title: `${brand.name} Transponder Programming`, desc: `Key cuts but won't start the engine? We programme the transponder chip to your ${brand.name} ECU on-site.`, href: '/services/transponder-key-programming' },
              { title: `${brand.name} Spare Key`, desc: `Get a spare ${brand.name} key cut and programmed before you need it. We come to your Leeds home or workplace.`, href: '/services/spare-key-cutting' },
            ].map(s => (
              <Link key={s.title} href={s.href} className="block p-5 bg-white border border-slate-200 rounded-xl hover:border-brand-blue hover:shadow-md transition-all duration-200">
                <h3 className="font-bold text-brand-navy mb-1.5">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10" aria-labelledby={`${slug}-faq`}>
          <h2 id={`${slug}-faq`} className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-6">
            {brand.name} Car Key Questions — Answered
          </h2>
          <div className="space-y-5">
            {brand.faqs.map(item => (
              <div key={item.q} className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="font-bold text-brand-navy mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other makes + services */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-brand-navy rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-4">Other Makes We Cover</h3>
            <div className="flex flex-wrap gap-2">
              {brands
                .filter(b => b.slug !== slug)
                .slice(0, 10)
                .map(b => (
                  <Link key={b.slug} href={`/makes/${b.slug}`} className="bg-white/10 hover:bg-amber-500 hover:text-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200">
                    {b.name}
                  </Link>
                ))}
              <Link href="/makes" className="bg-amber-500 text-slate-900 text-sm font-bold px-3 py-1.5 rounded-full">
                All Makes →
              </Link>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 className="font-bold text-brand-navy mb-4">Key Services</h3>
            <div className="space-y-2">
              <Link href="/services/car-key-replacement" className="block text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Car Key Replacement</Link>
              <Link href="/services/car-lockout" className="block text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Emergency Lockout</Link>
              <Link href="/services/transponder-key-programming" className="block text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Transponder Programming</Link>
              <Link href="/services/spare-key-cutting" className="block text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Spare Key Cutting</Link>
              <Link href="/services/remote-key-fob" className="block text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Remote Key Fob</Link>
              <Link href="/services/van-keys" className="block text-sm text-brand-blue hover:text-amber-600 font-medium transition-colors">→ Van Keys</Link>
            </div>
          </div>
        </div>

      </article>

      <CTA
        heading={`Need a ${brand.name} Locksmith in Leeds?`}
        subheading={`We cover all ${brand.name} models across Leeds — 24/7, fixed price quoted over the phone.`}
      />
    </>
  )
}
