'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How quickly can you get to me in Leeds?',
    answer:
      'For most of Leeds we aim to be with you within 30–60 minutes. If you\'re in South Leeds — Middleton, Beeston, Morley, Rothwell or Hunslet — we\'re usually there in 20–35 minutes as that\'s our primary base area. Outer areas like Wetherby, Otley or Garforth may take up to 60 minutes. We\'ll give you an accurate ETA when you call.',
  },
  {
    question: 'Can you replace a car key without the original?',
    answer:
      'Yes, in most cases. For the majority of vehicles we can create a fully working replacement key from scratch using the vehicle identification number (VIN). We\'ll need proof that you own the vehicle — a V5 logbook, insurance document, or similar. Once verified, we cut the new key and programme it to your car on-site.',
  },
  {
    question: 'How much does car key replacement cost in Leeds?',
    answer:
      'Prices vary depending on the make, model, and key type. A basic transponder key starts from around £80–£120. Smart keys, proximity keys, and high-security keys for premium brands (BMW, Audi, Mercedes) typically range from £150–£280. We\'ll give you an exact quote over the phone before we come out — no surprises.',
  },
  {
    question: 'Do you work on all makes and models?',
    answer:
      'We cover the vast majority of vehicles on UK roads, including Ford, Vauxhall, Volkswagen, Audi, BMW, Mercedes-Benz, Toyota, Honda, Nissan, Renault, Peugeot, Citroën, Hyundai, Kia, and more. We also cover most commercial vans. If you\'re unsure whether we can help with your specific vehicle, just call — we\'ll tell you straight.',
  },
  {
    question: 'Are you available 24 hours, including weekends?',
    answer:
      'Yes. We operate 24 hours a day, 7 days a week, including weekends, bank holidays, and Christmas. Losing your car key doesn\'t work to a schedule, and neither do we.',
  },
  {
    question: 'What is a transponder key and do I need one?',
    answer:
      'Most cars made after 2000 use transponder keys — the key contains a small microchip that communicates with your car\'s immobiliser. If the chip isn\'t programmed to your specific vehicle, the engine won\'t start even if the key is cut correctly. We handle both the cutting and the programming, so the key works for the lock and the ignition.',
  },
  {
    question: 'Can you help if I\'ve snapped a key in the lock or ignition?',
    answer:
      'Yes. Key extraction is one of our most common call-outs. We use specialist tools to remove the broken piece without damaging your lock or ignition barrel. Once extracted, we can cut and programme a new key on the spot. Don\'t try to remove a snapped key yourself — it usually makes the situation worse.',
  },
  {
    question: 'Will my insurance cover the cost of a replacement car key?',
    answer:
      'Many comprehensive car insurance policies include cover for lost or stolen keys — sometimes under a separate \'key cover\' add-on. We recommend checking your policy documents or calling your insurer directly. We can provide a VAT receipt and job report that most insurers will accept for a claim.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="section-pad bg-white" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
              Common Questions About Our Leeds Locksmith Service
            </h2>
            <p className="text-slate-600">
              Can&apos;t find your answer? Call us — we&apos;re happy to talk through your situation for free.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-brand-navy hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span itemProp="name">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-amber-500 shrink-0 ml-4 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  itemScope
                  itemType="https://schema.org/Answer"
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100" itemProp="text">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
