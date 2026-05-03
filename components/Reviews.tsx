const reviews = [
  {
    name: 'David H.',
    location: 'Beeston, Leeds',
    rating: 5,
    date: 'March 2025',
    text: "Called at 10pm after locking my keys in the boot of my Golf. Andy arrived in under 40 minutes, got the car open without a scratch, and had a new key cut and coded on the spot. Proper professional job. I've already recommended him to my brother.",
  },
  {
    name: 'Sarah M.',
    location: 'Middleton, LS10',
    rating: 5,
    date: 'February 2025',
    text: "Lost all three of my car keys — no idea how. The dealer wanted over £300 and a two-week wait. Car Keys Leeds came out next morning, programmed a new key at my driveway, and charged half the price. Can't fault it.",
  },
  {
    name: 'James W.',
    location: 'Morley, Leeds',
    rating: 5,
    date: 'January 2025',
    text: "Used them twice now. Once for a lockout on the motorway slip road and once for a replacement Astra key. Both times: fast response, fair price, no messing. Will always use these lads over a dealer.",
  },
  {
    name: 'Lisa P.',
    location: 'Headingley, Leeds',
    rating: 5,
    date: 'April 2025',
    text: "Key snapped in the ignition at 7am before work. Absolute panic. One phone call and someone was with me in 35 minutes. Extracted the broken key, cut a new one, programmed it all at the roadside. Lifesaver.",
  },
  {
    name: 'Mark T.',
    location: 'Leeds City Centre',
    rating: 5,
    date: 'March 2025',
    text: "Locked out of the company van in the city centre at lunchtime. Couldn't afford to lose the afternoon. Came within 45 mins, sorted it efficiently, no drama. The team were brilliant — very knowledgeable about Transits.",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-amber-400' : 'text-slate-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: reviews.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Review',
        author: { '@type': 'Person', name: r.name },
        reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
        reviewBody: r.text,
        datePublished: r.date,
        itemReviewed: {
          '@type': 'LocksmithBusiness',
          name: 'Car Keys Leeds',
        },
      },
    })),
  }

  return (
    <section id="reviews" className="section-pad bg-slate-50" aria-labelledby="reviews-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Customer Reviews</p>
          <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
            What Leeds Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-brand-navy text-lg">4.9 / 5</span>
            <span className="text-slate-500 text-sm">from 143 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-bold text-brand-navy" itemProp="author">{review.name}</div>
                  <div className="text-slate-500 text-xs">{review.location}</div>
                </div>
                <span className="text-xs text-slate-400">{review.date}</span>
              </div>
              <Stars count={review.rating} />
              <blockquote className="mt-3 text-slate-600 text-sm leading-relaxed" itemProp="reviewBody">
                &ldquo;{review.text}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Reviews collected from Google My Business and Checkatrade.
          <span className="inline-flex items-center gap-1 ml-2 text-green-600 font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Verified
          </span>
        </p>
      </div>
    </section>
  )
}
