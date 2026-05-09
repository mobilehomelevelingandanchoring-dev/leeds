// Location data for all 23 service areas.
// Each entry has genuine locally-specific content — not template filler.

export interface NearbyArea {
  name: string
  slug: string
  postcode: string
}

export interface LocationFaq {
  q: string
  a: string
}

export interface LocationData {
  slug: string
  name: string              // Display name e.g. "Leeds City Centre"
  locality: string          // For PostalAddress schema e.g. "Leeds City Centre"
  postcode: string          // Primary postcode e.g. "LS1"
  lat: string
  lng: string
  responseTime: string      // e.g. "25–40 min"
  badge: string             // Hero badge text
  metaTitle: string         // Under 60 chars
  metaDesc: string          // Under 155 chars
  h1: string
  intro: string             // 1–2 sentence hook
  paragraphs: string[]      // 3 unique body paragraphs with local detail
  vehicles: string[]        // Common vehicles in this area
  nearby: NearbyArea[]
  faqs: LocationFaq[]
  isPrimary?: boolean
}

export const locations: LocationData[] = [
  // ── EXISTING STATIC PAGES (data used for cross-linking only) ──────────────

  {
    slug: 'middleton-leeds',
    name: 'Middleton',
    locality: 'Middleton',
    postcode: 'LS10',
    lat: '53.7638',
    lng: '-1.5438',
    responseTime: '20–35 min',
    badge: 'Primary Base — Fastest Response in Leeds',
    metaTitle: 'Auto Locksmith Middleton Leeds LS10 | 20–35 Min Response',
    metaDesc: 'Mobile auto locksmith in Middleton LS10. Car key replacement, lockouts & programming. Based here — 20–35 min response. Call 07940 757717.',
    h1: 'Auto Locksmith in Middleton Leeds',
    intro: 'Middleton is where we operate from — so LS10 callouts get the fastest response in the whole of Leeds.',
    paragraphs: [],
    vehicles: ['Ford Fiesta', 'Vauxhall Astra', 'Nissan Qashqai', 'VW Golf'],
    nearby: [
      { name: 'Beeston', slug: 'beeston-leeds', postcode: 'LS11' },
      { name: 'Hunslet', slug: 'hunslet-leeds', postcode: 'LS10' },
      { name: 'Morley', slug: 'morley-leeds', postcode: 'LS27' },
      { name: 'Rothwell', slug: 'rothwell-leeds', postcode: 'LS26' },
    ],
    faqs: [],
    isPrimary: true,
  },
  {
    slug: 'beeston-leeds',
    name: 'Beeston',
    locality: 'Beeston',
    postcode: 'LS11',
    lat: '53.7735',
    lng: '-1.5648',
    responseTime: '25–35 min',
    badge: 'Serving Beeston LS11',
    metaTitle: 'Auto Locksmith Beeston Leeds LS11 | 25–35 Min Response',
    metaDesc: 'Mobile auto locksmith in Beeston LS11. Car keys, lockouts, programming. 25–35 min response. MLA approved. Call 07940 757717.',
    h1: 'Auto Locksmith in Beeston Leeds',
    intro: 'Just a few minutes from our Middleton base, Beeston gets one of the fastest response times in South Leeds.',
    paragraphs: [],
    vehicles: ['Ford Fiesta', 'Vauxhall Corsa', 'Renault Clio', 'Nissan Micra'],
    nearby: [
      { name: 'Middleton', slug: 'middleton-leeds', postcode: 'LS10' },
      { name: 'Holbeck', slug: 'holbeck-leeds', postcode: 'LS11' },
      { name: 'Morley', slug: 'morley-leeds', postcode: 'LS27' },
      { name: 'Armley', slug: 'armley-leeds', postcode: 'LS12' },
    ],
    faqs: [],
  },
  {
    slug: 'morley-leeds',
    name: 'Morley',
    locality: 'Morley',
    postcode: 'LS27',
    lat: '53.7437',
    lng: '-1.5998',
    responseTime: '25–40 min',
    badge: 'Serving Morley LS27',
    metaTitle: 'Auto Locksmith Morley Leeds LS27 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Morley LS27. Lost car keys, lockouts, transponder programming. 25–40 min response. Call 07940 757717.',
    h1: 'Auto Locksmith in Morley Leeds',
    intro: 'Morley is one of our most regular callout areas — we know the town centre, the estates, and the roads in.',
    paragraphs: [],
    vehicles: ['Ford Focus', 'Vauxhall Astra', 'VW Polo', 'Hyundai Tucson'],
    nearby: [
      { name: 'Middleton', slug: 'middleton-leeds', postcode: 'LS10' },
      { name: 'Beeston', slug: 'beeston-leeds', postcode: 'LS11' },
      { name: 'Rothwell', slug: 'rothwell-leeds', postcode: 'LS26' },
      { name: 'Wortley', slug: 'wortley-leeds', postcode: 'LS12' },
    ],
    faqs: [],
  },
  {
    slug: 'rothwell-leeds',
    name: 'Rothwell',
    locality: 'Rothwell',
    postcode: 'LS26',
    lat: '53.7496',
    lng: '-1.4875',
    responseTime: '25–40 min',
    badge: 'Serving Rothwell LS26',
    metaTitle: 'Auto Locksmith Rothwell Leeds LS26 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Rothwell LS26. Car key replacement, lockouts, programming. 25–40 min response. Call 07940 757717.',
    h1: 'Auto Locksmith in Rothwell Leeds',
    intro: 'Rothwell is a regular part of our South Leeds run — accessible from the M1 and the A61 corridor.',
    paragraphs: [],
    vehicles: ['Ford Kuga', 'Nissan Qashqai', 'Kia Sportage', 'Vauxhall Astra'],
    nearby: [
      { name: 'Middleton', slug: 'middleton-leeds', postcode: 'LS10' },
      { name: 'Morley', slug: 'morley-leeds', postcode: 'LS27' },
      { name: 'Kippax', slug: 'kippax-leeds', postcode: 'LS25' },
      { name: 'Garforth', slug: 'garforth-leeds', postcode: 'LS25' },
    ],
    faqs: [],
  },

  // ── DYNAMIC PAGES (no static file — handled by [slug] route) ─────────────

  {
    slug: 'leeds-city-centre',
    name: 'Leeds City Centre',
    locality: 'Leeds City Centre',
    postcode: 'LS1',
    lat: '53.7996',
    lng: '-1.5491',
    responseTime: '25–40 min',
    badge: 'Serving Leeds City Centre LS1',
    metaTitle: 'Auto Locksmith Leeds City Centre LS1 | 24/7 Car Keys',
    metaDesc: 'Mobile auto locksmith covering Leeds city centre LS1. Car key replacement, lockouts & programming at NCP car parks, offices & roadside. Call 07940 757717.',
    h1: 'Auto Locksmith Leeds City Centre',
    intro: 'Whether you\'re locked out of your car in a Trinity Leeds car park or stranded outside your office on Park Row, we reach the city centre in 25–40 minutes, day or night.',
    paragraphs: [
      'Leeds city centre is one of our busiest callout areas — and for good reason. Multi-storey car parks like the NCP on Merrion Street, the Q-Park on Sovereign Street, and the Trinity Leeds car park generate regular lockout calls, particularly in the evenings when people come back to their cars after a meal or a night out and find themselves locked out or with a flat key fob battery.',
      'The city centre also means a high concentration of company fleet vehicles. We regularly attend to Ford Mondeos, Volkswagen Passat, and BMW 3 Series company cars in the LS1 and LS2 areas — particularly around Whitehall Road, Aire Street, and the business quarter near Leeds Station. Fleet drivers often don\'t carry a spare key, so our ability to do a complete cut-and-programme on the spot is particularly valuable.',
      'Parking restrictions and double yellows in the centre mean we keep callouts quick. We know the access routes into the city and aim for the 25–40 minute window consistently. Call us with your specific location — road name, car park level, or nearby landmark — and we\'ll find you without fuss.',
    ],
    vehicles: ['Ford Mondeo', 'VW Passat', 'BMW 3 Series', 'Toyota Prius'],
    nearby: [
      { name: 'Holbeck', slug: 'holbeck-leeds', postcode: 'LS11' },
      { name: 'Armley', slug: 'armley-leeds', postcode: 'LS12' },
      { name: 'Beeston', slug: 'beeston-leeds', postcode: 'LS11' },
      { name: 'Chapel Allerton', slug: 'chapel-allerton-leeds', postcode: 'LS7' },
    ],
    faqs: [
      {
        q: 'Can you reach me in the NCP or Trinity Leeds car park?',
        a: 'Yes — we attend car parks in the city centre regularly. Let us know the car park name and level when you call and we\'ll come straight to you. Multi-storey car parks are no problem.',
      },
      {
        q: 'I\'m locked out of my company car in Leeds city centre — can you help?',
        a: 'Absolutely. Company car lockouts are one of our most common city centre callouts. We handle fleet vehicles from most manufacturers and can gain non-destructive access, then cut and programme a replacement key if needed.',
      },
      {
        q: 'How long will you be getting to Leeds city centre?',
        a: 'Typically 25–40 minutes from our Middleton base. Road access into the city is straightforward via the A61 and A643. We\'ll give you a precise ETA when you call.',
      },
    ],
  },

  {
    slug: 'headingley-leeds',
    name: 'Headingley',
    locality: 'Headingley',
    postcode: 'LS6',
    lat: '53.8199',
    lng: '-1.5727',
    responseTime: '35–50 min',
    badge: 'Serving Headingley LS6',
    metaTitle: 'Auto Locksmith Headingley Leeds LS6 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Headingley LS6. Car key replacement, lockouts & programming. 35–50 min response, 24/7. MLA approved. Call 07940 757717.',
    h1: 'Auto Locksmith in Headingley Leeds',
    intro: 'From Otley Road student digs to the Victorian terraces around Hyde Park, we provide full auto locksmith cover across Headingley LS6 — typically arriving in 35–50 minutes.',
    paragraphs: [
      'Headingley is one of Leeds\'s most distinctive areas — home to the famous cricket ground, a large student population centred around Hyde Park and Woodhouse, and rows of Victorian terraces on side streets off Otley Road. It\'s also an area where older, higher-mileage vehicles are common: we regularly work on pre-2015 Ford Fiestas, Vauxhall Corsas, and older VW Polos in this area, vehicles where remote fobs fail, keys wear out, or locks need attention.',
      'Student callouts follow predictable patterns: lost keys during a night out, keys left inside after unloading shopping, or fobs that stop working in winter when batteries die. We carry battery replacements and programming equipment for most common key fob types on board, so many of these jobs are resolved in minutes on-site.',
      'For residents in the LS6 area — particularly around Cardigan Road, Kirkstall Road, and Headingley Lane — parking is often on-street, meaning a lockout can block traffic or put you in an unsafe situation. We prioritise getting to you quickly and work efficiently from the kerbside.',
    ],
    vehicles: ['Ford Fiesta', 'Vauxhall Corsa', 'VW Polo', 'Fiat 500'],
    nearby: [
      { name: 'Chapel Allerton', slug: 'chapel-allerton-leeds', postcode: 'LS7' },
      { name: 'Armley', slug: 'armley-leeds', postcode: 'LS12' },
      { name: 'Horsforth', slug: 'horsforth-leeds', postcode: 'LS18' },
      { name: 'Leeds City Centre', slug: 'leeds-city-centre', postcode: 'LS1' },
    ],
    faqs: [
      {
        q: 'Can you come to the Otley Road or Hyde Park area of Headingley?',
        a: 'Yes — Otley Road and Hyde Park are both well within our Headingley coverage. We cover the full LS6 postcode. Just give us your street name when you call.',
      },
      {
        q: 'I have an older car — do you cover pre-2010 keys?',
        a: 'Definitely. Older vehicles are actually often simpler to work on. Pre-2010 keys are frequently non-transponder or early-transponder, which we program easily. Call with your make, model, and year.',
      },
      {
        q: 'Can you replace a key fob battery on-site in Headingley?',
        a: 'Yes. We carry common key fob batteries on board. If your fob has just stopped working, there\'s a good chance it\'s just a battery replacement, which we can do at your location in minutes.',
      },
    ],
  },

  {
    slug: 'chapel-allerton-leeds',
    name: 'Chapel Allerton',
    locality: 'Chapel Allerton',
    postcode: 'LS7',
    lat: '53.8230',
    lng: '-1.5334',
    responseTime: '35–50 min',
    badge: 'Serving Chapel Allerton LS7',
    metaTitle: 'Auto Locksmith Chapel Allerton Leeds LS7 | Car Keys',
    metaDesc: 'Mobile auto locksmith in Chapel Allerton LS7, Leeds. Lost car keys, lockouts & programming. 35–50 min response, 24/7. Call 07940 757717.',
    h1: 'Auto Locksmith in Chapel Allerton Leeds',
    intro: 'Chapel Allerton\'s mix of young professionals, cafés, and on-street parking makes it one of the more common north Leeds areas for lockout callouts — we cover all of LS7 in 35–50 minutes.',
    paragraphs: [
      'Chapel Allerton has developed into one of Leeds\'s more sought-after residential neighbourhoods — known for its independent restaurants on Harrogate Road, the farmers\' market, and a demographic that tends to drive newer, technology-rich vehicles. Smart keys, proximity keys, and key fob combos are the norm here, and we\'re fully equipped to program or replace all of them on-site.',
      'On-street parking in the side streets between Stainbeck Lane and Chapeltown Road means lockouts are a real inconvenience. We arrive in 35–50 minutes to your location and work entirely from the kerbside — no need to move or tow your vehicle. If you\'re locked out after a dinner at one of the local restaurants, we\'ll be there before you\'ve had time to worry.',
      'Chapel Allerton is also close to several GP surgeries and healthcare businesses, so we do attend commercial vehicle lockouts during business hours. If you need a fleet vehicle sorted, call us with your vehicle details and postcode and we\'ll confirm we can help and give you a fixed price over the phone.',
    ],
    vehicles: ['Volkswagen Golf', 'Audi A3', 'BMW 1 Series', 'Nissan Qashqai'],
    nearby: [
      { name: 'Roundhay', slug: 'roundhay-leeds', postcode: 'LS8' },
      { name: 'Headingley', slug: 'headingley-leeds', postcode: 'LS6' },
      { name: 'Seacroft', slug: 'seacroft-leeds', postcode: 'LS14' },
      { name: 'Leeds City Centre', slug: 'leeds-city-centre', postcode: 'LS1' },
    ],
    faqs: [
      {
        q: 'Can you replace a smart key or proximity key in Chapel Allerton?',
        a: 'Yes. Smart and proximity keys are common in LS7 and we carry programming equipment for most major brands. Call with your vehicle make, model, and year for a fixed quote.',
      },
      {
        q: 'How do you find me if I\'m parked on a side street?',
        a: 'We use a combination of what3words and standard navigation. Just give us the street name or a nearby landmark on Harrogate Road when you call, and we\'ll locate you without any fuss.',
      },
      {
        q: 'Do you work on weekend evenings in Chapel Allerton?',
        a: 'Yes — 24 hours a day, 7 days a week including weekends. Evening callouts are very common in the Chapel Allerton restaurant and bar area and we\'re always available.',
      },
    ],
  },

  {
    slug: 'roundhay-leeds',
    name: 'Roundhay',
    locality: 'Roundhay',
    postcode: 'LS8',
    lat: '53.8318',
    lng: '-1.5087',
    responseTime: '35–50 min',
    badge: 'Serving Roundhay LS8',
    metaTitle: 'Auto Locksmith Roundhay Leeds LS8 | BMW, Audi & All Makes',
    metaDesc: 'Mobile auto locksmith in Roundhay LS8. Car key replacement for BMW, Audi, Mercedes & all makes. 35–50 min response. MLA approved. Call 07940 757717.',
    h1: 'Auto Locksmith in Roundhay Leeds',
    intro: 'Roundhay is home to some of Leeds\'s most desirable residential streets — and to a high proportion of premium vehicles. We handle BMW, Audi, Mercedes, and Jaguar key work at the roadside in 35–50 minutes.',
    paragraphs: [
      'Roundhay Park — the largest urban park in Europe — draws visitors from across Leeds every weekend, and lost or locked-in keys near the park\'s car parks are a frequent callout. Whether you\'re at the Waterloo Lake end or the Princes Avenue entrance, we reach you and complete the job on-site. Roundhay is also home to Tropical World and the Roundhay Park Café, so there\'s rarely a shortage of activity even during winter.',
      'The residential streets around Wetherby Road, Street Lane, and Oakwood Parade tend towards higher-value vehicles: BMWs, Range Rovers, Audis, and Mercedes are all common in the LS8 postcode. These vehicles require specialist programming equipment for key replacement — and we carry it. We do not outsource or subcontract, so the person who arrives at your door is the same person who programmes your key.',
      'Roundhay is also close to several private schools and healthcare facilities, so morning callouts — parents in a rush before school drop-off — are something we handle regularly. We understand the urgency and work quickly without cutting corners.',
    ],
    vehicles: ['BMW 3 Series', 'Audi A4', 'Range Rover Sport', 'Mercedes C-Class'],
    nearby: [
      { name: 'Chapel Allerton', slug: 'chapel-allerton-leeds', postcode: 'LS7' },
      { name: 'Seacroft', slug: 'seacroft-leeds', postcode: 'LS14' },
      { name: 'Crossgates', slug: 'crossgates-leeds', postcode: 'LS15' },
      { name: 'Headingley', slug: 'headingley-leeds', postcode: 'LS6' },
    ],
    faqs: [
      {
        q: 'Can you replace a BMW key fob in Roundhay?',
        a: 'Yes. BMW key replacement is one of our specialisms. We carry BMW transponder keys and program them on-site using professional BMW-compatible diagnostics. Price depends on the model — call for a fixed quote.',
      },
      {
        q: 'I\'m locked out near Roundhay Park — how quickly can you reach me?',
        a: 'Roundhay Park is a regular callout for us. From our Middleton base it\'s typically 35–50 minutes. We\'ll ask for your precise location — car park entrance, road, or postcode — and head straight to you.',
      },
      {
        q: 'Do you carry Mercedes key fobs in stock?',
        a: 'We stock keys for the most common Mercedes models (C-Class, E-Class, A-Class) and can source others. Call with your model and year and we\'ll confirm stock and give you a price.',
      },
    ],
  },

  {
    slug: 'seacroft-leeds',
    name: 'Seacroft',
    locality: 'Seacroft',
    postcode: 'LS14',
    lat: '53.8192',
    lng: '-1.4767',
    responseTime: '35–50 min',
    badge: 'Serving Seacroft LS14',
    metaTitle: 'Auto Locksmith Seacroft Leeds LS14 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Seacroft LS14, Leeds. Lost car keys, lockouts & key programming. 35–50 min response, 24/7. Call 07940 757717.',
    h1: 'Auto Locksmith in Seacroft Leeds',
    intro: 'Seacroft is one of East Leeds\'s largest residential areas — we cover all of LS14 including the estate, York Road, and the Seacroft Green area, typically arriving in 35–50 minutes.',
    paragraphs: [
      'Seacroft is home to a large residential community, Seacroft Town Centre (one of the first UK indoor shopping centres), and a significant industrial and distribution zone along Seacroft Avenue. We work across all of these environments — residential lockouts on the estate, commercial vehicle issues at the industrial units, and everything in between. The Tesco distribution centre and nearby business park generate regular van key callouts.',
      'In terms of vehicles, Seacroft is typical working Leeds: Ford Fiestas, Vauxhall Astras, and Corsa Ds are the most common vehicles we work on in this area. We carry keys in stock for all three, meaning most jobs are single-visit completions without ordering parts. If your car is more unusual, call and we\'ll confirm whether we can help over the phone.',
      'For overnight and early morning lockouts — common in an area with shift workers heading to early starts — we are available 24 hours. There\'s no additional charge for out-of-hours callouts in Seacroft. The A64 York Road gives us a direct route from South Leeds, making our response time consistent regardless of traffic.',
    ],
    vehicles: ['Ford Fiesta', 'Vauxhall Astra', 'Vauxhall Corsa', 'Renault Megane'],
    nearby: [
      { name: 'Crossgates', slug: 'crossgates-leeds', postcode: 'LS15' },
      { name: 'Roundhay', slug: 'roundhay-leeds', postcode: 'LS8' },
      { name: 'Chapel Allerton', slug: 'chapel-allerton-leeds', postcode: 'LS7' },
      { name: 'Garforth', slug: 'garforth-leeds', postcode: 'LS25' },
    ],
    faqs: [
      {
        q: 'Do you cover the Seacroft estate residential streets?',
        a: 'Yes — the full LS14 postcode including the estate, Seacroft Avenue, and all residential roads. Give us your street name and we\'ll find you.',
      },
      {
        q: 'Can you help with a van lockout near the Seacroft industrial area?',
        a: 'Absolutely. Commercial vehicle lockouts at industrial units and distribution centres are a regular callout for us. We cover all major van makes — Ford Transit, Vauxhall Vivaro, Mercedes Sprinter, and others.',
      },
      {
        q: 'What\'s your response time to Seacroft at night?',
        a: 'At night the A64 is clear and we\'re typically 30–40 minutes to Seacroft. We\'re available 24/7 with no additional out-of-hours charge.',
      },
    ],
  },

  {
    slug: 'garforth-leeds',
    name: 'Garforth',
    locality: 'Garforth',
    postcode: 'LS25',
    lat: '53.7985',
    lng: '-1.3889',
    responseTime: '40–55 min',
    badge: 'Serving Garforth LS25',
    metaTitle: 'Auto Locksmith Garforth Leeds LS25 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Garforth LS25. Lost car keys, lockouts & programming. 40–55 min response, 24/7. MLA approved. Call 07940 757717.',
    h1: 'Auto Locksmith in Garforth Leeds',
    intro: 'Garforth is a busy commuter town east of Leeds — we cover all of LS25 including Kippax, Micklefield, and Great Preston, reaching you in 40–55 minutes.',
    paragraphs: [
      'Garforth sits on the M1 and A63 corridors, making it a commuter hub with a high proportion of family SUVs and estate cars. Residents here tend to drive Nissan Qashqais, Kia Sportages, Toyota RAV4s, and Ford Kugas — vehicles with sophisticated key systems that require professional programming equipment. We bring that equipment to you, wherever you are in the LS25 area.',
      'Main Street, Ninelands Lane, and the residential streets around Garforth train station are all familiar to us. If you\'ve lost your car keys at Garforth station or need a spare cut while you\'re still at home, we come to you — no need to arrange a tow to a dealer. We\'ve found that the dealer quote for many Garforth vehicles (particularly Nissan and Kia) is significantly higher than ours for the same key, cut and programmed on-site.',
      'For businesses on the industrial estates near the M1 junction at Garforth, we also attend commercial vehicle lockouts. If you have a company vehicle issue and need it resolved quickly to keep operations moving, call us with the vehicle details and we\'ll confirm whether we can attend and give you a fixed price.',
    ],
    vehicles: ['Nissan Qashqai', 'Kia Sportage', 'Ford Kuga', 'Toyota RAV4'],
    nearby: [
      { name: 'Kippax', slug: 'kippax-leeds', postcode: 'LS25' },
      { name: 'Crossgates', slug: 'crossgates-leeds', postcode: 'LS15' },
      { name: 'Rothwell', slug: 'rothwell-leeds', postcode: 'LS26' },
      { name: 'Seacroft', slug: 'seacroft-leeds', postcode: 'LS14' },
    ],
    faqs: [
      {
        q: 'How do you reach Garforth from your base in Middleton?',
        a: 'We use the M621 and M1 or the A63 depending on traffic. Typical journey time is 35–50 minutes. We\'ll confirm your ETA when you call.',
      },
      {
        q: 'Can you replace a Nissan Qashqai key in Garforth?',
        a: 'The Nissan Qashqai is one of our most common key jobs. We carry Nissan transponder keys and program them using professional Nissan-compatible diagnostics. Give us a call for a fixed price.',
      },
      {
        q: 'Do you cover Kippax and Micklefield as well as Garforth?',
        a: 'Yes — Kippax, Micklefield, and Great Preston are all within our Garforth/LS25 coverage zone. Response time from Middleton is similar — typically 40–55 minutes.',
      },
    ],
  },

  {
    slug: 'crossgates-leeds',
    name: 'Crossgates',
    locality: 'Crossgates',
    postcode: 'LS15',
    lat: '53.8088',
    lng: '-1.4712',
    responseTime: '35–50 min',
    badge: 'Serving Crossgates LS15',
    metaTitle: 'Auto Locksmith Crossgates Leeds LS15 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Crossgates LS15, Leeds. Car key replacement, lockouts, programming. 35–50 min response 24/7. Call 07940 757717.',
    h1: 'Auto Locksmith in Crossgates Leeds',
    intro: 'Crossgates Shopping Centre, Crossgates station, and the surrounding LS15 streets are all covered — we\'re typically with you in 35–50 minutes.',
    paragraphs: [
      'Crossgates has one of the busiest retail car parks in East Leeds — Crossgates Shopping Centre draws shoppers from across LS14, LS15, and LS25 daily. Car park lockouts, particularly in the ASDA and Crossgates Centre car parks, are a regular call-out for us. We\'re experienced working in car park environments and complete jobs efficiently without blocking other vehicles.',
      'Crossgates train station connects commuters to Leeds city centre and York, which means we also see a fair number of emergency calls from people who\'ve left their keys on the train or found their car won\'t start after a long journey. We cover Austhorpe Road, Station Road, and the residential side streets between York Road and the ring road.',
      'The mix of housing in Crossgates — semi-detached family homes and newer builds — comes with a mix of vehicles. Ford Focus, Renault Megane, and Hyundai Tucson are all common here. We carry stock for these makes and complete most jobs in a single visit without needing to order parts.',
    ],
    vehicles: ['Ford Focus', 'Renault Megane', 'Hyundai Tucson', 'Vauxhall Zafira'],
    nearby: [
      { name: 'Seacroft', slug: 'seacroft-leeds', postcode: 'LS14' },
      { name: 'Garforth', slug: 'garforth-leeds', postcode: 'LS25' },
      { name: 'Roundhay', slug: 'roundhay-leeds', postcode: 'LS8' },
      { name: 'Kippax', slug: 'kippax-leeds', postcode: 'LS25' },
    ],
    faqs: [
      {
        q: 'Can you come to the Crossgates Shopping Centre car park?',
        a: 'Yes — we attend Crossgates Shopping Centre, the ASDA car park, and surrounding roads regularly. Let us know the car park name and your bay if you have one, and we\'ll find you.',
      },
      {
        q: 'I\'m locked out near Crossgates station — how long will you be?',
        a: 'Crossgates station area is typically 35–45 minutes from our Middleton base via the A64. We\'ll confirm your exact ETA when you call.',
      },
    ],
  },

  {
    slug: 'horsforth-leeds',
    name: 'Horsforth',
    locality: 'Horsforth',
    postcode: 'LS18',
    lat: '53.8411',
    lng: '-1.6328',
    responseTime: '40–55 min',
    badge: 'Serving Horsforth LS18',
    metaTitle: 'Auto Locksmith Horsforth Leeds LS18 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Horsforth LS18. Lost car keys, lockouts & key programming. 40–55 min response 24/7. MLA approved. Call 07940 757717.',
    h1: 'Auto Locksmith in Horsforth Leeds',
    intro: 'Horsforth — one of North West Leeds\'s most popular commuter villages — gets full mobile auto locksmith coverage from us, arriving in 40–55 minutes across the whole LS18 area.',
    paragraphs: [
      'Horsforth is consistently ranked among the most popular places to live in Leeds, with a vibrant town centre on Town Street, good transport links, and a strong sense of community. Its residents tend to drive family-size vehicles — Volvo XC40s, Skoda Octavias, Toyota Corollas, and Honda CR-Vs are all common — and we\'re equipped to work on all of them.',
      'Town Street, Low Lane, and the cul-de-sac estates around New Road Side are well-known to us. If you\'re locked out on a school morning or have lost your keys after an evening at one of the Town Street pubs, we can be with you in 40–55 minutes. Our Middleton base gives us clear routes via the A6120 ring road to reach North West Leeds efficiently.',
      'We also cover the Rawdon and Yeadon fringes where LS18 meets LS19 — areas close to Leeds Bradford Airport. Travellers returning to find car issues at the airport or in the long-stay car parks are something we handle regularly. Call us wherever you are in the LS18 or LS19 area.',
    ],
    vehicles: ['Volvo XC40', 'Skoda Octavia', 'Toyota Corolla', 'Honda CR-V'],
    nearby: [
      { name: 'Yeadon', slug: 'yeadon-leeds', postcode: 'LS19' },
      { name: 'Guiseley', slug: 'guiseley-leeds', postcode: 'LS20' },
      { name: 'Bramley', slug: 'bramley-leeds', postcode: 'LS13' },
      { name: 'Headingley', slug: 'headingley-leeds', postcode: 'LS6' },
    ],
    faqs: [
      {
        q: 'Can you reach me in Horsforth Town Centre?',
        a: 'Yes — Town Street and the surrounding LS18 area are fully covered. Typical response time is 40–55 minutes from Middleton.',
      },
      {
        q: 'Do you cover Rawdon and the areas near Leeds Bradford Airport?',
        a: 'Yes. Rawdon, Yeadon, and the Leeds Bradford Airport area are all within our coverage. We specifically mention airport callouts — travellers returning to find key issues are a common scenario.',
      },
    ],
  },

  {
    slug: 'pudsey-leeds',
    name: 'Pudsey',
    locality: 'Pudsey',
    postcode: 'LS28',
    lat: '53.7959',
    lng: '-1.6609',
    responseTime: '40–55 min',
    badge: 'Serving Pudsey LS28',
    metaTitle: 'Auto Locksmith Pudsey Leeds LS28 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Pudsey LS28, between Leeds and Bradford. Lost car keys, lockouts, programming. 40–55 min response 24/7. Call 07940 757717.',
    h1: 'Auto Locksmith in Pudsey Leeds',
    intro: 'Pudsey sits between Leeds and Bradford on the A647 corridor — we cover all of LS28 including Stanningley, Farsley, and Calverley, arriving in 40–55 minutes.',
    paragraphs: [
      'Pudsey is famous across the UK as the birthplace of Pudsey Bear — but to local residents, it\'s a busy West Leeds town with a town centre, retail parks, and easy access to the M621 and M62. This makes it a well-connected area for commuters, and we see a wide range of vehicles here from Seat Ibizas and Peugeot 208s to larger family estates.',
      'The A647 corridor runs through Stanningley and into Pudsey town centre, giving us a reliable route from South Leeds. Calverley, Farsley, and Swinnow are all within the LS28 coverage area. If you\'re locked out in a retail car park on Cemetery Road or stranded outside your home after an early shift, we\'re the same-day solution.',
      'Pudsey\'s mix of older stone terraces and newer housing developments means keys vary widely — from basic-cut older keys to modern smart keys. We carry equipment and blanks for the full range and quote a fixed price over the phone before travelling.',
    ],
    vehicles: ['Seat Ibiza', 'Peugeot 208', 'Ford Ka', 'Vauxhall Mokka'],
    nearby: [
      { name: 'Bramley', slug: 'bramley-leeds', postcode: 'LS13' },
      { name: 'Armley', slug: 'armley-leeds', postcode: 'LS12' },
      { name: 'Horsforth', slug: 'horsforth-leeds', postcode: 'LS18' },
      { name: 'Wortley', slug: 'wortley-leeds', postcode: 'LS12' },
    ],
    faqs: [
      {
        q: 'Do you cover Stanningley and Farsley as part of Pudsey?',
        a: 'Yes — Stanningley, Farsley, Calverley, and Swinnow are all within our LS28 coverage area. Response time is the same as Pudsey town centre — 40–55 minutes.',
      },
      {
        q: 'Can you reach me on the A647 or near the Pudsey retail park?',
        a: 'Yes. The A647 is our main route in from South Leeds and we\'re familiar with Pudsey town centre and the retail areas. Just let us know your location and we\'ll find you.',
      },
    ],
  },

  {
    slug: 'armley-leeds',
    name: 'Armley',
    locality: 'Armley',
    postcode: 'LS12',
    lat: '53.7978',
    lng: '-1.5841',
    responseTime: '30–45 min',
    badge: 'Serving Armley LS12',
    metaTitle: 'Auto Locksmith Armley Leeds LS12 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Armley LS12. Lost car keys, lockouts & programming. 30–45 min response, 24/7. MLA approved. Call 07940 757717.',
    h1: 'Auto Locksmith in Armley Leeds',
    intro: 'Armley is inner West Leeds — just over 3 miles from our Middleton base via the A643 and ring road. We typically reach LS12 in 30–45 minutes.',
    paragraphs: [
      'Armley Town Street is the heart of this inner-west Leeds neighbourhood, flanked by Victorian terraces, a busy retail strip, and the Armley Gyratory road system. The area has a high proportion of working vehicles — older Fords, Vauxhalls, and Renaults — which are precisely the vehicles we\'re geared for. Transponder key replacement for pre-2015 high-volume vehicles is one of our fastest jobs.',
      'Town Street, Whingate Road, and the streets around Branch Road are all well within our coverage. Armley is bordered by Kirkstall, Wortley, and Farnley — all also covered — so if your address is anywhere in the LS12 postcode, we\'re your nearest professional auto locksmith in South Leeds terms.',
      'The proximity of the MYLA (Armley Prison, now a museum) and the Kirkstall Road corridor means there\'s a mix of residential, retail, and industrial use in the area. Commercial lockouts at the businesses on Armley Road and the Canal Road industrial corridor are all part of our regular coverage.',
    ],
    vehicles: ['Ford Fiesta', 'Vauxhall Corsa', 'Renault Clio', 'Toyota Yaris'],
    nearby: [
      { name: 'Wortley', slug: 'wortley-leeds', postcode: 'LS12' },
      { name: 'Bramley', slug: 'bramley-leeds', postcode: 'LS13' },
      { name: 'Holbeck', slug: 'holbeck-leeds', postcode: 'LS11' },
      { name: 'Leeds City Centre', slug: 'leeds-city-centre', postcode: 'LS1' },
    ],
    faqs: [
      {
        q: 'How far is Armley from your Middleton base?',
        a: 'About 4–5 miles via the ring road or A643. We typically reach Armley in 30–45 minutes. Ring road traffic at peak times can add 5–10 minutes.',
      },
      {
        q: 'Do you cover the Kirkstall area as well as Armley?',
        a: 'Yes — Kirkstall falls within the LS5/LS12 boundary and is covered. We handle it with the same response time as Armley, roughly 35–50 minutes from Middleton.',
      },
    ],
  },

  {
    slug: 'bramley-leeds',
    name: 'Bramley',
    locality: 'Bramley',
    postcode: 'LS13',
    lat: '53.8110',
    lng: '-1.6156',
    responseTime: '35–50 min',
    badge: 'Serving Bramley LS13',
    metaTitle: 'Auto Locksmith Bramley Leeds LS13 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Bramley LS13, West Leeds. Lost car keys, lockouts & programming. 35–50 min response 24/7. Call 07940 757717.',
    h1: 'Auto Locksmith in Bramley Leeds',
    intro: 'Bramley is a residential West Leeds area served by us at 35–50 minutes. We cover Town Street, Bramley Shopping Centre, and all LS13 postcodes.',
    paragraphs: [
      'Bramley sits between Armley and Pudsey in West Leeds, with Town Street as its main high street and a range of housing from inter-war semis to 1970s estates. It\'s a solidly residential area where lost keys, spare key requests, and the occasional lockout are our most common call types.',
      'We\'re familiar with the roads in — the A647 from Leeds city centre is our primary route, giving us consistent access to Bramley Town Street, Whitecote Road, and the estates towards Rodley and Farsley. Typical response time is 35–50 minutes depending on traffic on the ring road.',
      'Bramley Shopping Centre and the ASDA on Broad Lane are common locations for car park lockouts in the area. If you find yourself in the car park with your keys locked inside, we\'ll come to you rather than requiring you to walk to a garage — same for any roadside or residential location in the LS13 postcode.',
    ],
    vehicles: ['Ford Focus', 'Vauxhall Astra', 'Peugeot 107', 'Citroen C1'],
    nearby: [
      { name: 'Armley', slug: 'armley-leeds', postcode: 'LS12' },
      { name: 'Pudsey', slug: 'pudsey-leeds', postcode: 'LS28' },
      { name: 'Horsforth', slug: 'horsforth-leeds', postcode: 'LS18' },
      { name: 'Wortley', slug: 'wortley-leeds', postcode: 'LS12' },
    ],
    faqs: [
      {
        q: 'Can you come to the Bramley Shopping Centre or ASDA car park?',
        a: 'Yes — car park lockouts at Bramley Shopping Centre and ASDA Broad Lane are both within our coverage. We attend car parks regularly and work efficiently from the kerbside.',
      },
    ],
  },

  {
    slug: 'holbeck-leeds',
    name: 'Holbeck',
    locality: 'Holbeck',
    postcode: 'LS11',
    lat: '53.7875',
    lng: '-1.5491',
    responseTime: '25–40 min',
    badge: 'Serving Holbeck LS11',
    metaTitle: 'Auto Locksmith Holbeck Leeds LS11 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Holbeck LS11. Close to Leeds city centre. Car key replacement, lockouts & programming. 25–40 min response. Call 07940 757717.',
    h1: 'Auto Locksmith in Holbeck Leeds',
    intro: 'Holbeck Urban Village sits on the South Bank of Leeds — just minutes from the city centre and a short drive from our Middleton base. We reach LS11 in 25–40 minutes.',
    paragraphs: [
      'Holbeck has undergone a significant transformation in recent years, evolving into one of Leeds\'s creative and tech quarters. The South Bank regeneration area — centred on the historic Round Foundry and extending to the Leeds Dock area on Clarence Dock — is home to digital agencies, architecture studios, and co-working spaces. We regularly attend commercial vehicle lockouts at these business premises, as well as residential callouts on the Victorian terraces that characterise this area.',
      'Water Lane, Domestic Road, and Sweet Street run through the core of Holbeck Urban Village, with the M621 providing easy access to and from the south. We use the A653 to reach Holbeck in 25–40 minutes from our Middleton base — one of the shorter response times for an inner-Leeds area.',
      'Holbeck is also bordered by Beeston, Hunslet, and the city centre, making it a natural stopping point when we\'re already in the south Leeds area. If you need an auto locksmith in LS11 — whether for a personal vehicle on the terraces or a commercial van at one of the business units — we\'re your closest MLA-approved option.',
    ],
    vehicles: ['Volkswagen Up', 'Ford Fiesta', 'Mini One', 'Renault Zoe'],
    nearby: [
      { name: 'Beeston', slug: 'beeston-leeds', postcode: 'LS11' },
      { name: 'Hunslet', slug: 'hunslet-leeds', postcode: 'LS10' },
      { name: 'Leeds City Centre', slug: 'leeds-city-centre', postcode: 'LS1' },
      { name: 'Armley', slug: 'armley-leeds', postcode: 'LS12' },
    ],
    faqs: [
      {
        q: 'Can you get to Holbeck Urban Village or the Leeds Dock area?',
        a: 'Yes — Water Lane, Clarence Dock, and the Round Foundry area are all within our Holbeck coverage. We\'re typically 25–40 minutes from our Middleton base.',
      },
      {
        q: 'Do you handle lockouts at commercial premises in Holbeck?',
        a: 'Yes. Business lockouts at offices, co-working spaces, and business units are all part of our service. We work on all types of commercial vehicles and attend business premises as readily as residential.',
      },
    ],
  },

  {
    slug: 'wortley-leeds',
    name: 'Wortley',
    locality: 'Wortley',
    postcode: 'LS12',
    lat: '53.7915',
    lng: '-1.5810',
    responseTime: '30–45 min',
    badge: 'Serving Wortley LS12',
    metaTitle: 'Auto Locksmith Wortley Leeds LS12 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Wortley LS12, West Leeds. Car key replacement, lockouts & programming. 30–45 min response 24/7. Call 07940 757717.',
    h1: 'Auto Locksmith in Wortley Leeds',
    intro: 'Wortley is a residential West Leeds neighbourhood within the LS12 postcode — reachable in 30–45 minutes via the ring road from our Middleton base.',
    paragraphs: [
      'Wortley sits between Armley and Lower Wortley, covering residential streets including Lower Wortley Road, Old Road, and the estates running north towards the A58(M). It\'s a compact area but we cover it as part of our regular West Leeds route along with Armley and Beeston.',
      'The vehicle mix in Wortley is similar to neighbouring Armley and Holbeck — older high-volume vehicles with transponder keys or basic cut keys, plus a growing number of newer registered cars as the area continues to regenerate. We\'re equipped for all of them and carry stock for the most common makes in this postcode.',
      'Response time from Middleton is consistently 30–45 minutes using the ring road and A643. Evening and overnight callouts to Wortley are straightforward — the ring road is clear after 9pm and we can often arrive faster than the quoted window.',
    ],
    vehicles: ['Ford Fiesta', 'Vauxhall Corsa', 'Renault Clio', 'Nissan Micra'],
    nearby: [
      { name: 'Armley', slug: 'armley-leeds', postcode: 'LS12' },
      { name: 'Holbeck', slug: 'holbeck-leeds', postcode: 'LS11' },
      { name: 'Beeston', slug: 'beeston-leeds', postcode: 'LS11' },
      { name: 'Bramley', slug: 'bramley-leeds', postcode: 'LS13' },
    ],
    faqs: [
      {
        q: 'How do you access Wortley from your base?',
        a: 'We use the ring road or the A643 through Beeston and Holbeck. It\'s typically 30–45 minutes. At night, ring road access makes it faster — often under 30 minutes.',
      },
    ],
  },

  {
    slug: 'otley-leeds',
    name: 'Otley',
    locality: 'Otley',
    postcode: 'LS21',
    lat: '53.9050',
    lng: '-1.6896',
    responseTime: '45–60 min',
    badge: 'Serving Otley LS21',
    metaTitle: 'Auto Locksmith Otley LS21 | Car Keys & Lockouts Wharfedale',
    metaDesc: 'Mobile auto locksmith serving Otley LS21 and the Wharfedale area. Lost car keys, lockouts & programming. 45–60 min response 24/7. Call 07940 757717.',
    h1: 'Auto Locksmith in Otley',
    intro: 'Otley is a historic market town in Wharfedale, around 11 miles from our Middleton base — we cover the full LS21 area including the town centre, Pool, and Farnley Tyas, typically arriving in 45–60 minutes.',
    paragraphs: [
      'Otley\'s Market Place and Boroughgate area are the commercial heart of one of West Yorkshire\'s finest market towns. With strong links to farming, rural businesses, and a working population that commutes into both Leeds and Harrogate, Otley has a diverse vehicle profile — from modern commuter cars to older Land Rovers and agricultural vehicles. We cover all of these.',
      'The Chevin — the dramatic ridge overlooking the town — and the surrounding rural roads mean Otley residents are sometimes stranded in locations that are harder to reach for a non-local locksmith. We know the area and are happy to come to you wherever you are in the LS21 postcode. We\'ve attended callouts on the Chevin itself, in Pool-in-Wharfedale, and on remote farm approaches near Weston.',
      'At 45–60 minutes from our Middleton base, Otley is one of our further coverage areas — but we don\'t charge extra for the journey. You get the same fixed, transparent price whether you\'re in Middleton or Otley. Call us with your vehicle details and we\'ll confirm the price and ETA over the phone.',
    ],
    vehicles: ['Land Rover Discovery', 'Toyota Land Cruiser', 'VW Touareg', 'Subaru Outback'],
    nearby: [
      { name: 'Guiseley', slug: 'guiseley-leeds', postcode: 'LS20' },
      { name: 'Yeadon', slug: 'yeadon-leeds', postcode: 'LS19' },
      { name: 'Horsforth', slug: 'horsforth-leeds', postcode: 'LS18' },
    ],
    faqs: [
      {
        q: 'Is Otley too far for you to cover?',
        a: 'No — we cover Otley and all of LS21. It\'s 45–60 minutes from Middleton, and there\'s no extra charge for the distance. Fixed price quoted over the phone.',
      },
      {
        q: 'Do you cover rural areas near Otley like Farnley Tyas or Pool-in-Wharfedale?',
        a: 'Yes. We cover the LS21 postcode fully, including rural locations, farms, and countryside addresses. Just give us the nearest road name or a what3words location.',
      },
    ],
  },

  {
    slug: 'guiseley-leeds',
    name: 'Guiseley',
    locality: 'Guiseley',
    postcode: 'LS20',
    lat: '53.8752',
    lng: '-1.6862',
    responseTime: '45–60 min',
    badge: 'Serving Guiseley LS20',
    metaTitle: 'Auto Locksmith Guiseley Leeds LS20 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Guiseley LS20 and Aireborough area. Lost car keys, lockouts & programming. 45–60 min response 24/7. Call 07940 757717.',
    h1: 'Auto Locksmith in Guiseley Leeds',
    intro: 'Guiseley is part of the Aireborough area between Leeds and Ilkley — we cover all of LS20 including Yeadon, Rawdon, and Menston, arriving in 45–60 minutes.',
    paragraphs: [
      'Guiseley is best known nationally as the original home of Harry Ramsden\'s fish and chip restaurant, but to locals it\'s a thriving commuter settlement with good transport links on the Wharfedale and Airedale rail lines. The vehicle mix here tends towards newer family cars and SUVs — residents of Guiseley, Rawdon, and Yeadon often commute to Leeds, Bradford, or Harrogate, and their vehicles reflect those professional lifestyles.',
      'Oxford Road, Town Street, and the residential streets on both sides of the A65 make up the bulk of our Guiseley callouts. The area is also close to Leeds Bradford International Airport — and travellers who arrive back from a trip to find their car has a flat key fob battery or keys locked inside do call us from the long-stay car parks at the airport.',
      'From our Middleton base, the A6120 ring road and then the A65 gives us a reliable route. We quote 45–60 minutes for Guiseley and stick to it. If you\'re stranded anywhere in the LS20 postcode — town centre, residential, or in a car park — call us for a fixed price and a firm ETA.',
    ],
    vehicles: ['Audi A1', 'BMW 1 Series', 'Volvo V40', 'Ford S-Max'],
    nearby: [
      { name: 'Yeadon', slug: 'yeadon-leeds', postcode: 'LS19' },
      { name: 'Horsforth', slug: 'horsforth-leeds', postcode: 'LS18' },
      { name: 'Otley', slug: 'otley-leeds', postcode: 'LS21' },
    ],
    faqs: [
      {
        q: 'Do you cover Rawdon and Menston near Guiseley?',
        a: 'Yes — Rawdon, Menston, and Yeadon all fall within our Aireborough/LS20 coverage. Response time is similar to Guiseley — 45–60 minutes from Middleton.',
      },
      {
        q: 'Can you help at Leeds Bradford Airport near Guiseley?',
        a: 'Yes. The airport long-stay and short-stay car parks are all within our response area. We attend airport callouts regularly — travellers returning to find key or access issues.',
      },
    ],
  },

  {
    slug: 'hunslet-leeds',
    name: 'Hunslet',
    locality: 'Hunslet',
    postcode: 'LS10',
    lat: '53.7763',
    lng: '-1.5424',
    responseTime: '20–30 min',
    badge: 'Serving Hunslet LS10 — Very Fast Response',
    metaTitle: 'Auto Locksmith Hunslet Leeds LS10 | 20–30 Min Response',
    metaDesc: 'Mobile auto locksmith in Hunslet LS10. Car key replacement, lockouts & programming. 20–30 min response — close to our Middleton base. Call 07940 757717.',
    h1: 'Auto Locksmith in Hunslet Leeds',
    intro: 'Hunslet is part of the LS10 postcode and sits just minutes north of our Middleton base — giving it one of the fastest response times in all of Leeds at 20–30 minutes.',
    paragraphs: [
      'Hunslet is an industrial and residential area directly south of Leeds city centre, connected by the A639 Hunslet Road. The Hunslet Industrial Estate, Hunslet Business Park, and the Stourton distribution areas are all part of our regular route, meaning we often come through Hunslet on our way to and from South Leeds callouts. If you\'re in Hunslet, there\'s a very good chance we can reach you faster than any competitor in the city.',
      'Church Street Hunslet, Hunslet Road, and the residential streets of the LS10 2 and LS10 3 sub-postcodes are all covered. Van lockouts at the business parks and residential lockouts on the housing side are both common call types for us here. We carry a full range of van keys and residential vehicle keys in stock.',
      'Hunslet\'s proximity to Middleton also means we frequently stock Ford Fiestas, Vauxhall Astras, and Nissan Micras — the most common vehicles in the LS10 area — allowing us to complete most jobs without ordering parts. A 20–30 minute response and a single-visit completion is our norm for Hunslet callouts.',
    ],
    vehicles: ['Ford Fiesta', 'Vauxhall Astra', 'Nissan Micra', 'Fiat Punto'],
    nearby: [
      { name: 'Middleton', slug: 'middleton-leeds', postcode: 'LS10' },
      { name: 'Beeston', slug: 'beeston-leeds', postcode: 'LS11' },
      { name: 'Holbeck', slug: 'holbeck-leeds', postcode: 'LS11' },
      { name: 'Leeds City Centre', slug: 'leeds-city-centre', postcode: 'LS1' },
    ],
    faqs: [
      {
        q: 'How quickly can you reach Hunslet from Middleton?',
        a: 'Hunslet is our nearest significant area — typically 10–20 minutes from our Middleton base via the A639 or through Belle Isle. We quote 20–30 minutes to be safe, but often beat that window.',
      },
      {
        q: 'Do you cover the Hunslet Business Park and industrial areas?',
        a: 'Yes — van lockouts and commercial vehicle key issues at the business park and distribution areas are regular callouts. We cover all commercial vehicles including Ford Transit, Mercedes Sprinter, and Vauxhall Vivaro.',
      },
    ],
  },

  {
    slug: 'yeadon-leeds',
    name: 'Yeadon',
    locality: 'Yeadon',
    postcode: 'LS19',
    lat: '53.8652',
    lng: '-1.6878',
    responseTime: '45–60 min',
    badge: 'Serving Yeadon LS19 — Near Leeds Bradford Airport',
    metaTitle: 'Auto Locksmith Yeadon Leeds LS19 | Airport & Local Cover',
    metaDesc: 'Mobile auto locksmith in Yeadon LS19, near Leeds Bradford Airport. Lost car keys, lockouts, programming. 45–60 min response 24/7. Call 07940 757717.',
    h1: 'Auto Locksmith in Yeadon Leeds',
    intro: 'Yeadon sits right next to Leeds Bradford Airport — we cover the full LS19 area including the airport car parks, and we\'re a frequent call for returning travellers dealing with car key problems.',
    paragraphs: [
      'Yeadon is a small market town in the Aireborough district, best known locally as the location closest to Leeds Bradford International Airport. Travellers returning from holiday or business trips to find their car battery dead, keys locked inside, or a key fob that\'s stopped responding account for a significant number of our LS19 callouts. We cover the long-stay car parks at the airport and can arrange to attend while you clear customs if you call ahead.',
      'High Street, Henshaw Lane, and the residential areas around Westfield Drive make up the residential core of Yeadon. New developments on the edge of the town have added a number of newer-build properties, often paired with newer vehicles. Key fob and smart key issues are the dominant job type here alongside the more traditional spare key and lockout services.',
      'From Middleton, the A6120 ring road and the A65 give us a reliable 45–60 minute journey. There is no additional charge for the distance. We quote a fixed price over the phone and arrive as advertised. For airport callouts, please call as early as possible so we can time our arrival to meet you as you exit the terminal.',
    ],
    vehicles: ['Nissan Qashqai', 'Toyota RAV4', 'Ford Edge', 'Hyundai i30'],
    nearby: [
      { name: 'Guiseley', slug: 'guiseley-leeds', postcode: 'LS20' },
      { name: 'Horsforth', slug: 'horsforth-leeds', postcode: 'LS18' },
      { name: 'Bramley', slug: 'bramley-leeds', postcode: 'LS13' },
    ],
    faqs: [
      {
        q: 'Can you meet me at Leeds Bradford Airport when I land?',
        a: 'Yes. Call us when you\'re through customs or know your landing time and we\'ll aim to be at the car parks as you arrive. We cover both the short-stay and long-stay car parks at the airport.',
      },
      {
        q: 'I left my keys at home before my flight — can you get into my car in the airport car park?',
        a: 'Yes. If you have proof of ownership, we can gain non-destructive access to your vehicle in the car park and arrange a replacement key. Call us as soon as you realise.',
      },
    ],
  },

  {
    slug: 'kippax-leeds',
    name: 'Kippax',
    locality: 'Kippax',
    postcode: 'LS25',
    lat: '53.7682',
    lng: '-1.3856',
    responseTime: '40–55 min',
    badge: 'Serving Kippax LS25',
    metaTitle: 'Auto Locksmith Kippax Leeds LS25 | Car Keys & Lockouts',
    metaDesc: 'Mobile auto locksmith in Kippax LS25, East Leeds. Car key replacement, lockouts & programming. 40–55 min response 24/7. Call 07940 757717.',
    h1: 'Auto Locksmith in Kippax Leeds',
    intro: 'Kippax is a village in the east of the Leeds district, close to Garforth and the M1. We cover all of the LS25 postcode east of Garforth in 40–55 minutes.',
    paragraphs: [
      'Kippax is a residential village with a traditional high street feel, known locally for its strong community and ties to the former mining industry. Vehicle-wise, Kippax is practical rather than premium — family hatchbacks, estate cars, and smaller SUVs dominate, and we stock keys and blanks for the most common types to enable single-visit completions.',
      'High Street and the residential roads running off it make up most of Kippax\'s built environment. It\'s close enough to Garforth that we treat the LS25 postcode east of Garforth as a single service zone — so if you\'re in Allerton Bywater, Micklefield, or Ledston, we cover those too.',
      'The M1 at junction 44 (Rothwell/Oulton) gives us the most direct route from Middleton. Response time to Kippax is consistently 40–55 minutes. For urgent callouts — particularly overnight or early morning — the motorway route makes our arrival more predictable than back-road alternatives.',
    ],
    vehicles: ['Ford Focus', 'Vauxhall Astra', 'Peugeot 307', 'Renault Scenic'],
    nearby: [
      { name: 'Garforth', slug: 'garforth-leeds', postcode: 'LS25' },
      { name: 'Rothwell', slug: 'rothwell-leeds', postcode: 'LS26' },
      { name: 'Crossgates', slug: 'crossgates-leeds', postcode: 'LS15' },
    ],
    faqs: [
      {
        q: 'Do you cover Allerton Bywater and Micklefield near Kippax?',
        a: 'Yes — Allerton Bywater, Micklefield, and Ledston are all in our east LS25 coverage area alongside Kippax. Same response time — 40–55 minutes.',
      },
    ],
  },

  {
    slug: 'wetherby',
    name: 'Wetherby',
    locality: 'Wetherby',
    postcode: 'LS22',
    lat: '53.9282',
    lng: '-1.3889',
    responseTime: '45–60 min',
    badge: 'Serving Wetherby LS22 & Harewood',
    metaTitle: 'Auto Locksmith Wetherby LS22 | Car Keys & Lockouts A1',
    metaDesc: 'Mobile auto locksmith in Wetherby LS22. Lost car keys, lockouts & key programming. 45–60 min response. Serving A1 corridor & Harewood. Call 07940 757717.',
    h1: 'Auto Locksmith in Wetherby',
    intro: 'Wetherby is a market town on the A1(M) near the North Yorkshire border — we cover all of LS22 including Boston Spa, Collingham, and Harewood, reaching you in 45–60 minutes.',
    paragraphs: [
      'Wetherby sits on the A1(M) at the junction of West Yorkshire and North Yorkshire, making it a well-connected town that serves both commuters heading into Leeds and travellers on the A1 corridor. The town itself — centred on Market Place, North Street, and Bridge Street — has a mix of independent businesses, a busy town centre, and residential streets that extend towards the River Wharfe.',
      'Wetherby Racecourse brings seasonal visitors to the area and we do attend race day callouts — both in the racecourse car park and on the residential roads around the course when parking overflow happens. We also regularly attend callouts on the A1(M) services lay-by and the surrounding roads for motorists who have broken down or been locked out while in transit.',
      'The vehicle profile in Wetherby leans towards the executive end — Jaguars, Lexus, and high-spec BMWs are more common here than in South Leeds. We carry specialist programming equipment for all premium makes and can handle complex high-security key systems. Call us with your vehicle details and we\'ll confirm capability and pricing over the phone before we travel.',
    ],
    vehicles: ['Jaguar XE', 'BMW 5 Series', 'Lexus RX', 'Mercedes E-Class'],
    nearby: [
      { name: 'Garforth', slug: 'garforth-leeds', postcode: 'LS25' },
      { name: 'Kippax', slug: 'kippax-leeds', postcode: 'LS25' },
      { name: 'Crossgates', slug: 'crossgates-leeds', postcode: 'LS15' },
    ],
    faqs: [
      {
        q: 'Can you attend at Wetherby Racecourse or the A1 services?',
        a: 'Yes — Wetherby Racecourse, the A1(M) services, and all locations within the LS22 postcode are covered. Response time is 45–60 minutes. No extra charge for distance.',
      },
      {
        q: 'Do you cover Boston Spa and Collingham near Wetherby?',
        a: 'Yes — Boston Spa, Collingham, and Harewood are all within our Wetherby coverage area. Same response window — 45–60 minutes from Middleton.',
      },
      {
        q: 'Can you replace a Jaguar or BMW key in Wetherby?',
        a: 'Yes. Premium vehicle keys require specialist programming equipment and we carry it. Jaguar, BMW, and Mercedes keys are all within our capability — call for a fixed price quote.',
      },
    ],
  },
]

// Lookup helpers

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find(l => l.slug === slug)
}

// Slugs handled by the dynamic [slug] route (static pages exist for the others)
export const DYNAMIC_LOCATION_SLUGS = [
  'leeds-city-centre',
  'headingley-leeds',
  'chapel-allerton-leeds',
  'roundhay-leeds',
  'seacroft-leeds',
  'garforth-leeds',
  'crossgates-leeds',
  'horsforth-leeds',
  'pudsey-leeds',
  'armley-leeds',
  'bramley-leeds',
  'holbeck-leeds',
  'wortley-leeds',
  'otley-leeds',
  'guiseley-leeds',
  'hunslet-leeds',
  'yeadon-leeds',
  'kippax-leeds',
  'wetherby',
] as const
