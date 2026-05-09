'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How quickly can you get to me in Leeds?',
    answer:
      "For most of Leeds we aim to be with you within 30–60 minutes. If you're in South Leeds — Middleton, Beeston, Morley, Rothwell or Hunslet — we're usually there in 20–35 minutes as that's our primary base area. Outer areas like Wetherby, Otley or Garforth may take up to 60 minutes. We'll give you an accurate ETA when you call.",
  },
  {
    question: 'Can you replace a car key without the original?',
    answer:
      "Yes, in most cases. For the majority of vehicles we can create a fully working replacement key from scratch using the vehicle identification number (VIN) and lock data. We'll need proof that you own the vehicle — a V5 logbook, insurance document, or similar. Once verified, we cut the new key and programme it to your car on-site.",
  },
  {
    question: 'How much does car key replacement cost in Leeds?',
    answer:
      "Prices vary depending on the make, model, and key type. A basic transponder key starts from around £80–£120. Smart keys, proximity keys, and high-security keys for premium brands (BMW, Audi, Mercedes) typically range from £150–£280. We'll give you an exact quote over the phone before we come out — no surprises.",
  },
  {
    question: 'Do you work on all makes and models?',
    answer:
      "We cover the vast majority of vehicles on UK roads, including Ford, Vauxhall, Volkswagen, Audi, BMW, Mercedes-Benz, Toyota, Honda, Nissan, Renault, Peugeot, Citroën, Hyundai, Kia, and more. We also cover most commercial vans. If you're unsure whether we can help with your specific vehicle, just call — we'll tell you straight.",
  },
  {
    question: 'Are you available 24 hours, including weekends?',
    answer:
      "Yes. We operate 24 hours a day, 7 days a week, including weekends, bank holidays, and Christmas. Losing your car key doesn't work to a schedule, and neither do we.",
  },
  {
    question: 'What is a transponder key and do I need one?',
    answer:
      "Most cars made after 2000 use transponder keys — the key contains a small microchip that communicates with your car's immobiliser. If the chip isn't programmed to your specific vehicle, the engine won't start even if the key is cut correctly. We handle both the cutting and the programming, so the key works for the lock and the ignition.",
  },
  {
    question: "Can you help if I've snapped a key in the lock or ignition?",
    answer:
      "Yes. Key extraction is one of our most common call-outs. We use specialist tools to remove the broken piece without damaging your lock or ignition barrel. Once extracted, we can cut and programme a new key on the spot. Don't try to remove a snapped key yourself — it usually makes the situation worse.",
  },
  {
    question: 'Will my insurance cover the cost of a replacement car key?',
    answer:
      "Many comprehensive car insurance policies include cover for lost or stolen keys — sometimes under a separate 'key cover' add-on. We recommend checking your policy documents or calling your insurer directly. We can provide a VAT receipt and job report that most insurers will accept for a claim.",
  },
  {
    question: 'Do you charge a call-out fee?',
    answer:
      "No separate call-out fee. The price we quote over the phone is the total price — it includes travel to your location, the key cutting, and the programming. There are no hidden charges added after the job.",
  },
  {
    question: 'What do I need to prove I own the vehicle?',
    answer:
      "We require one form of acceptable proof of ownership before we cut or programme any key. The V5C logbook is the standard document, but we also accept a valid insurance certificate showing your name and the vehicle registration, a finance agreement, or a purchase receipt. If you're not the registered keeper (e.g. a company car), call us and we'll advise what documentation works.",
  },
  {
    question: 'What is the difference between key cutting and key programming?',
    answer:
      "Key cutting shapes the physical blade so it operates the locks and ignition mechanically. Key programming writes a unique code from the key's transponder chip into your car's ECU so the immobiliser recognises it. Both are required for a complete working key on any post-2000 vehicle. A key that's cut but not programmed will turn in the lock but won't start the engine.",
  },
  {
    question: 'Do I need to go to a dealer for a replacement car key?',
    answer:
      "No. We carry the same calibre of diagnostic and programming equipment used by main dealers. We come to you, which saves you the cost of towing and the wait time of several days that dealers often require. Our prices are also significantly lower — dealer key replacement frequently costs £250–£400+, while we start from £80.",
  },
  {
    question: 'How long does a car key replacement take from start to finish?',
    answer:
      "Once we arrive at your location, most standard key replacements take 30–60 minutes. This covers cutting the blade, programming the transponder, and testing the key fully — locks, ignition, central locking, and remote. Rare exceptions include all-keys-lost situations on high-security vehicles, which may take slightly longer due to additional security authorisation steps.",
  },
  {
    question: "Can you erase a lost or stolen key from my car's system?",
    answer:
      "Yes. If a key has been lost or stolen, we can connect to your vehicle's ECU and remove that key's code from the system — so it can no longer start your car. We can then programme new keys so only your current set will work. This is an important security step if keys have been stolen alongside a bag containing your home address.",
  },
  {
    question: 'Do you cover smart keys and keyless entry systems?',
    answer:
      "Yes. Smart keys (proximity/push-button start) require specialist programming equipment, which we carry for most major brands including Ford, VW, Audi, BMW, Mercedes, Nissan, Kia, Hyundai, and Toyota. Call us with your specific model and year and we'll confirm before travelling.",
  },
  {
    question: 'Can you programme a key I bought online or from eBay?',
    answer:
      "Sometimes — but it depends on the key type and the vehicle. Keys bought from online marketplaces are often genuine OEM blanks that we can programme, but some are incompatible counterfeits or wrong-model blanks. Call us before purchasing: we can advise whether the key you're looking at is programmable for your specific vehicle, saving you a wasted purchase.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      "We accept cash, bank transfer (BACS), and all major debit and credit cards. Payment is taken on completion of the job. We provide a full VAT receipt on request.",
  },
  {
    question: 'Do you cover commercial vans?',
    answer:
      "Yes. We cover all major commercial van makes including Ford Transit, Mercedes Sprinter, VW Transporter, Vauxhall Vivaro, Renault Trafic, Peugeot Expert, Citroën Dispatch, and more. Van key replacement starts from £90. If your van is your livelihood, we understand the urgency and treat van call-outs with the same priority as any other job.",
  },
  {
    question: 'What if my car is very old — pre-2000?',
    answer:
      "Older vehicles are often easier to work on. Pre-2000 cars typically use basic cut keys without transponder chips — we cut these quickly on our mobile machine, often in minutes. Some late-1990s vehicles do have early transponder systems, which we can also handle. Call us with the year, make, and model and we'll confirm.",
  },
  {
    question: 'Can you help in the middle of the night or early morning?',
    answer:
      "Yes — we operate 24 hours. Night-time and early-morning call-outs are common, particularly for shift workers, people returning from a night out, or early-morning commuters. Response times at night are often faster because roads are clear. There may be a small night-rate premium depending on the job and time; we'll be transparent about this over the phone.",
  },
  {
    question: 'Will getting a new key programmed affect my car warranty?',
    answer:
      "No. Programming a key to your vehicle using professional automotive diagnostic equipment does not affect your manufacturer's warranty. We connect to the standard OBD diagnostic port using approved tools — the same process a main dealer uses. We do not modify the ECU or alter any vehicle settings.",
  },
  {
    question: 'Do you provide a VAT receipt or invoice?',
    answer:
      "Yes. We provide a full VAT receipt for every job on request. This is accepted by most insurers for key insurance claims and can be used for business expense purposes if the vehicle is a company car or van.",
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
