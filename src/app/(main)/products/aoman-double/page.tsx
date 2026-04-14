import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import OpenInquiryButton from '@/components/OpenInquiryButton'
import ProductFaq from '@/components/ProductFaq'
import ScrollToIdButton from '@/components/ScrollToIdButton'

const features = [
  {
    title: 'Super-Large 70L Dual Cabin',
    desc: 'Upper cabin (40L) and lower cabin (30L) with embedded open/close doors that do not occupy surrounding space. Accommodates 2-inch pizzas, 67 bottles of 550ml water, or double-layer cakes.',
    points: ['Upper: 320×315×409mm / Lower: 320×235×409mm', 'In-cabin UV disinfection option available', 'In-cabin load: 15 kg'],
  },
  {
    title: 'Fingerprint ID & Voice Interaction',
    desc: 'Fingerprint unlocking ensures exclusive access and creates traceable digital records of every delivery. Natural semantic voice interaction makes the robot a "social talent" in your hotel.',
    points: ['Authorized fingerprint management', 'Digital operation logs for performance appraisal', '6 microphones for accurate voice positioning'],
  },
  {
    title: 'Slim Body & Comprehensive Passability',
    desc: '"Slim" 420mm width passes through 60cm passages with ease. Goes straight in/out of elevators without turning. Handles 25mm hurdles, 40mm ditch crossings, and 13° slopes.',
    points: ['Minimum passing width: 55 cm', 'Max hurdle: 25 mm / Max slope: 13°', 'No secondary environment transformation needed'],
  },
]

const specs = [
  ['Model', 'AOMAN DOUBLE', false],
  ['Overall Dimensions (L×W×H)', '490 × 420 × 975 mm', false],
  ['Body Weight', '63 kg', false],
  ['In-Cabin Load', '15 kg', true],
  ['Cabin Volume', 'Upper 40L + Lower 30L (70L total)', true],
  ['Min. Passing Width', '55 cm', false],
  ['Moving Speed', '0.9–1.5 m/s', false],
  ['Max Hurdle Height', '25 mm', false],
  ['Max Ditch Crossing', '40 mm', false],
  ['Max Slope', '13°', false],
  ['Voice Interaction', '6-mic array, semantic NLP', false],
  ['Fingerprint Auth', 'Built-in fingerprint sensor', false],
  ['Charging', 'Multi-pile / multi-location standby', false],
  ['HDOS Integration', 'Seamless HDOS 2.0 connection', false],
  ['Optional Modules', 'UV disinfection / Security patrol', false],
]

const scenarios = [
  {
    title: 'Hotel Room Service',
    img: '/images/products/aoman-double/scene-01.webp',
    points: ['24/7 in-room amenity & food delivery', 'Fingerprint for secure guest access', 'Voice interaction enhances guest experience'],
  },
  {
    title: 'Restaurant & F&B Delivery',
    img: '/images/products/aoman-double/scene-02.webp',
    points: ['Takeout delivery between floors', 'Multi-location standby scheduling', 'Reduce staff walking distance significantly'],
  },
  {
    title: 'Hospital & Healthcare',
    img: '/images/products/aoman-double/scene-03.webp',
    points: ['Contactless medicine & supply delivery', 'UV disinfection option for hygiene', 'Traceable delivery records for compliance'],
  },
  {
    title: 'Corporate Office Buildings',
    img: '/images/products/aoman-double/scene-04.webp',
    points: ['Inter-department document & parcel delivery', 'AI security patrol mode available', 'Seamless multi-floor elevator navigation'],
  },
]

const faqs = [
  { q: 'How does the fingerprint system work?', a: 'The fingerprint sensor allows pre-registered staff or guests to unlock cabins exclusively. Every operation is timestamped and logged digitally, enabling performance appraisal and accountability tracking.' },
  { q: 'Can it connect to our existing HDOS system?', a: 'Yes. AOMAN DOUBLE is designed for seamless integration with the HDOS 2.0 Hotel Digital Operation System. No additional containers are needed — it connects instantly as a first choice for new hotel robots. Yunku-model containers are also supported.' },
  { q: 'How does multi-pile standby work?', a: 'One robot can correspond to multiple charging piles at different locations. For example, the robot can stand by in the lobby during the day for delivery tasks, and automatically move to the housekeeping floor at night for guest needs delivery.' },
  { q: 'What is the UV disinfection module?', a: 'The optional in-cabin UV lamp provides 360° disinfection without dead ends. When items are stored and the door is closed, UV automatically activates. When the cabin door opens, UV automatically deactivates — convenient and safe for guests and staff.' },
  { q: 'Can it be customized?', a: 'Yes. AOMAN DOUBLE supports two customized models: a disinfection-style for healthcare and food safety applications, and a security-style that adds AI video analysis for detecting dangerous behaviors and abnormal activity to raise hotel security levels.' },
]

const related = [
  { name: 'CADEBOT L100', img: '/images/home/cadebot-l100.webp', cat: 'Smart Delivery Robot', desc: 'Autonomous food & goods delivery for restaurants, hotels and hospitals.', href: '/products/cadebot-l100' },
  { name: 'CLEINBOT C2 Pro', img: '/images/home/cleinbot-c2pro.webp', cat: 'Commercial Cleaning Robot', desc: 'Fully automated cleaning robot with auto water exchange. 500–800 m²/h.', href: '/products/cleinbot-c2pro' },
  { name: 'CLEINBOT M79', img: '/images/home/cleinbot-m79.webp', cat: 'Industrial Scrubbing Robot', desc: 'Heavy-duty floor scrubbing for airports and large commercial spaces.', href: '/products/cleinbot-m79' },
]

export const metadata: Metadata = {
  title: 'AOMAN DOUBLE Hotel Transport Robot | AOMAN FUTURE',
  description: 'AOMAN DOUBLE — 70L dual-cabin hotel transport robot. Fingerprint unlock, voice interaction, UV disinfection, HDOS 2.0 integration. Perfect for hotels and healthcare.',
  alternates: { canonical: '/products/aoman-double' },
  openGraph: {
    title: 'AOMAN DOUBLE Hotel Transport Robot | AOMAN FUTURE',
    description: 'AOMAN DOUBLE — 70L dual-cabin hotel transport robot. Fingerprint unlock, voice interaction, UV disinfection, HDOS 2.0 integration.',
    url: '/products/aoman-double',
    siteName: 'AOMAN FUTURE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AOMAN DOUBLE Hotel Transport Robot | AOMAN FUTURE',
    description: 'AOMAN DOUBLE — 70L dual-cabin hotel transport robot. Fingerprint unlock, voice interaction, UV disinfection, HDOS 2.0 integration.',
  },
}

export default function AomanDoublePage() {
  return (
    <main className="text-ink">

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative product-hero-bg text-ink overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-[0.25] pointer-events-none" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center bg-brand-light border border-brand/20 px-4 py-2 rounded-full text-sm font-semibold text-brand">
                🏨 Aoman Transport Robot — DOUBLE
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                AOMAN DOUBLE<br /><span className="text-brand">Hotel Transport Robot</span>
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                Super-large <strong className="text-brand">70L dual-cabin</strong> capacity, fingerprint identification, and intelligent voice interaction. The first choice for modern hospitality service automation.
              </p>
              <div className="flex flex-wrap gap-4">
                {[['70 L', 'Total Cabin Volume'], ['55 cm', 'Min. Passing Width'], ['1.5 m/s', 'Max Speed']].map(([v, l]) => (
                  <div key={l} className="bg-surface-subtle border border-line px-6 py-3 rounded-xl">
                    <div className="text-2xl font-black text-brand">{v}</div>
                    <div className="text-sm text-ink-muted">{l}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <OpenInquiryButton className="inline-flex items-center justify-center bg-brand text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-hover hover:shadow-xl transition-all">
                  Request Demo →
                </OpenInquiryButton>
                <ScrollToIdButton targetId="specs" className="inline-flex items-center justify-center border-2 border-brand text-brand px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-light transition-all">
                  View Specs
                </ScrollToIdButton>
              </div>
            </div>
            <div className="flex justify-center hero-image-blend">
              <Image
                src="/images/products/aoman-double/hero-robot.webp"
                alt="AOMAN DOUBLE Hotel Transport Robot"
                width={520}
                height={620}
                priority
                sizes="(max-width: 768px) 100vw, 448px"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">Key Features</span>
            <h2 className="text-4xl font-black text-ink">Why Choose AOMAN DOUBLE?</h2>
            <p className="text-xl text-ink-muted max-w-2xl mx-auto">Smaller body, larger capacity. Designed to make human beings happier in hospitality environments.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group bg-surface-subtle rounded-2xl p-8 border-2 border-line hover:border-brand hover:shadow-xl transition-all duration-300">
                <div className="hero-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{f.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-4">{f.desc}</p>
                <ul className="space-y-2">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-ink-muted">
                      <svg className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPECS ──────────────────────────────────────────── */}
      <section id="specs" className="py-24 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-teal-light px-4 py-1.5 rounded-full">Specifications</span>
            <h2 className="text-4xl font-black text-ink">Product Parameters</h2>
            <p className="text-xl text-ink-muted">Engineered for the most demanding hospitality environments.</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <Image
              src="/images/products/aoman-double/tech-drawing.webp"
              alt="AOMAN DOUBLE Technical Drawing"
              width={560}
              height={700}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full rounded-2xl shadow-lg"
            />
            <div>
              {specs.map(([label, value, highlight]) => (
                <div key={String(label)} className="flex border-b border-line py-3.5 px-3 rounded-lg hover:bg-brand-light/30 transition-colors">
                  <div className="w-1/2 text-sm font-semibold text-ink-muted">{String(label)}</div>
                  <div className={`w-1/2 text-sm ${highlight ? 'font-bold text-brand' : 'text-ink'}`}>{String(value)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCENARIOS ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">Use Cases</span>
            <h2 className="text-4xl font-black text-ink">Built for Modern Hospitality</h2>
            <p className="text-xl text-ink-muted">Serving more than 500 million people across 20,000+ hotels.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((sc) => (
              <div key={sc.title} className="bg-white rounded-2xl overflow-hidden border border-line card-hover flex flex-col">
                <div className="aspect-[3/2] relative">
                  <Image
                    src={sc.img}
                    alt={sc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-ink mb-3 text-base">{sc.title}</h3>
                  <ul className="space-y-1.5">
                    {sc.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-ink-muted">
                        <span className="text-teal font-bold mt-0.5">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HDOS INTEGRATION HIGHLIGHT ─────────────────────── */}
      <section className="py-20 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto hero-gradient rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-[1.65fr_1fr] gap-0 md:items-stretch">
              <div className="relative min-w-0 w-full aspect-[3/2]">
                <Image
                  src="/images/products/aoman-double/scene-02.webp"
                  alt="AOMAN DOUBLE in hotel environment"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 62vw"
                />
              </div>
              <div className="p-10 text-white flex flex-col justify-center">
                <div className="inline-flex bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-5 w-fit">HDOS 2.0 Ready</div>
                <h2 className="text-3xl font-black mb-5">Hotel Digital Operation System</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    '<strong>1 billion+</strong> elevator rides completed',
                    '<strong>41 million+</strong> kilometers traveled',
                    '<strong>500 million+</strong> people served',
                    '<strong>5.9 million+</strong> positive reviews',
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-base" dangerouslySetInnerHTML={{ __html: pt }} />
                    </li>
                  ))}
                </ul>
                <OpenInquiryButton className="bg-white text-brand px-8 py-3.5 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all w-fit">
                  Learn About HDOS →
                </OpenInquiryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-black text-ink">Frequently Asked Questions</h2>
            <p className="text-xl text-ink-muted">Everything you need to know about AOMAN DOUBLE.</p>
          </div>
          <ProductFaq items={faqs} accent="brand" />
          <div className="text-center mt-10">
            <OpenInquiryButton className="hero-gradient text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Talk to Our Hospitality Robot Expert →
            </OpenInquiryButton>
          </div>
        </div>
      </section>

      {/* ─── RELATED ────────────────────────────────────────── */}
      <section className="py-24 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-black text-ink">Complete Your Smart Service Fleet</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {related.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl overflow-hidden border border-line card-hover flex flex-col">
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  <Image src={r.img} alt={r.name} width={200} height={200} sizes="200px" className="w-full h-full object-contain" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-ink">{r.name}</h3>
                  <p className="text-teal text-xs font-semibold mb-2">{r.cat}</p>
                  <p className="text-ink-muted text-sm mb-5">{r.desc}</p>
                  <div className="flex gap-3">
                    <Link href={r.href} className="flex-1 text-center border border-brand text-brand py-2.5 rounded-lg font-semibold text-sm hover:bg-brand hover:text-white transition">{`View ${r.name}`}</Link>
                    <OpenInquiryButton className="flex-1 bg-brand text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-hover transition">Inquire</OpenInquiryButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div className="hero-gradient absolute inset-0" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-black text-white mb-5">Ready to Elevate Your Guest Experience?</h2>
          <p className="text-xl text-white/80 mb-9">Join 20,000+ hotels worldwide using Aoman robots. Schedule your demo today.</p>
          <OpenInquiryButton className="inline-flex items-center justify-center bg-white text-brand px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
            Get a Quote Now →
          </OpenInquiryButton>
        </div>
      </section>

    </main>
  )
}
