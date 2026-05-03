import Link from 'next/link'

const areas = [
  { name: 'Middleton', postcode: 'LS10', slug: 'middleton-leeds', primary: true },
  { name: 'Beeston', postcode: 'LS11', slug: 'beeston-leeds', primary: false },
  { name: 'Hunslet', postcode: 'LS10', slug: 'hunslet-leeds', primary: false },
  { name: 'Morley', postcode: 'LS27', slug: 'morley-leeds', primary: false },
  { name: 'Rothwell', postcode: 'LS26', slug: 'rothwell-leeds', primary: false },
  { name: 'Leeds City Centre', postcode: 'LS1', slug: 'leeds-city-centre', primary: false },
  { name: 'Headingley', postcode: 'LS6', slug: 'headingley-leeds', primary: false },
  { name: 'Chapel Allerton', postcode: 'LS7', slug: 'chapel-allerton-leeds', primary: false },
  { name: 'Roundhay', postcode: 'LS8', slug: 'roundhay-leeds', primary: false },
  { name: 'Seacroft', postcode: 'LS14', slug: 'seacroft-leeds', primary: false },
  { name: 'Garforth', postcode: 'LS25', slug: 'garforth-leeds', primary: false },
  { name: 'Crossgates', postcode: 'LS15', slug: 'crossgates-leeds', primary: false },
  { name: 'Horsforth', postcode: 'LS18', slug: 'horsforth-leeds', primary: false },
  { name: 'Pudsey', postcode: 'LS28', slug: 'pudsey-leeds', primary: false },
  { name: 'Armley', postcode: 'LS12', slug: 'armley-leeds', primary: false },
  { name: 'Bramley', postcode: 'LS13', slug: 'bramley-leeds', primary: false },
  { name: 'Holbeck', postcode: 'LS11', slug: 'holbeck-leeds', primary: false },
  { name: 'Wortley', postcode: 'LS12', slug: 'wortley-leeds', primary: false },
  { name: 'Otley', postcode: 'LS21', slug: 'otley-leeds', primary: false },
  { name: 'Guiseley', postcode: 'LS20', slug: 'guiseley-leeds', primary: false },
  { name: 'Kippax', postcode: 'LS25', slug: 'kippax-leeds', primary: false },
  { name: 'Wetherby', postcode: 'LS22', slug: 'wetherby', primary: false },
  { name: 'Yeadon', postcode: 'LS19', slug: 'yeadon-leeds', primary: false },
  { name: 'Churwell', postcode: 'LS27', slug: 'churwell-leeds', primary: false },
]

export default function Areas() {
  return (
    <section id="areas" className="section-pad bg-brand-navy" aria-labelledby="areas-heading">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">Coverage</p>
          <h2 id="areas-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            We Cover All of Leeds
          </h2>
          <p className="text-slate-300 text-lg">
            Based in Middleton, we respond to callouts across the whole of Leeds. Most areas within 30–60 minutes, 24 hours a day.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/locations/${area.slug}`}
              className={`flex flex-col items-center text-center px-3 py-3 rounded-xl transition-all duration-200 ${
                area.primary
                  ? 'bg-amber-500 text-slate-900 font-bold hover:bg-amber-400'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
              }`}
              aria-label={`Auto locksmith in ${area.name}, ${area.postcode}`}
            >
              <span className="font-semibold text-sm">{area.name}</span>
              <span className={`text-xs mt-0.5 ${area.primary ? 'text-slate-700' : 'text-slate-400'}`}>
                {area.postcode}
              </span>
              {area.primary && (
                <span className="text-xs mt-1 bg-slate-900/20 px-2 py-0.5 rounded-full">Primary Area</span>
              )}
            </Link>
          ))}
        </div>

        {/* Response time note */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-bold text-sm uppercase tracking-wide">Response Times</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            <strong className="text-white">South Leeds (Middleton, Beeston, Morley, Rothwell):</strong> typically 20–35 minutes.<br />
            <strong className="text-white">Leeds City Centre & Inner Leeds:</strong> 25–45 minutes.<br />
            <strong className="text-white">Outer Leeds (Garforth, Otley, Wetherby, Horsforth):</strong> 40–60 minutes.
          </p>
        </div>
      </div>
    </section>
  )
}
