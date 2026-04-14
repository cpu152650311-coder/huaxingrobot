import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import OpenInquiryButton from '@/components/OpenInquiryButton'
import ProductFaq from '@/components/ProductFaq'
import ScrollToIdButton from '@/components/ScrollToIdButton'

const features = [
  {
    title: 'Fully Automated 24/7 Cleaning',
    desc: 'Automated docking station handles recharging and water exchange automatically, minimizing manual intervention. 24/7 continuous operation with no supervision required.',
    points: ['Auto water refill & drainage at dock', 'Self-recharging when battery is low', 'Resumes cleaning from stopped position'],
  },
  {
    title: 'Multi-Function Cleaning System',
    desc: 'Integrates scrubbing, vacuuming, mopping, and sweeping in a single robot. Zoned task scheduling automatically switches cleaning modes by floor type.',
    points: ['Scrubbing + vacuuming + mopping + sweeping', '0-Edge cleaning — no missed corners', 'Dry in 1 second, no residue'],
  },
  {
    title: 'UAV-Level Smart Navigation',
    desc: '2D LiDAR + 6-axis IMU + ultrasonic radar + structured light camera for millimeter precision. Smart route planning updates in real time within 1 second.',
    points: ['±1cm positioning accuracy', 'Auto elevator riding & gate passing', 'Supports 100,000 m²+ mapping area'],
  },
]

const specs = [
  ['Model', 'CLEINBOT C2 Pro', false],
  ['Dimensions (L×W×H)', '503 × 503 × 629 mm', false],
  ['Weight', '42 kg', false],
  ['Cleaning Width', '440 mm', true],
  ['Cleaning Efficiency', '500–800 m²/h', true],
  ['Water Tank', '10L clean + 10L dirty', false],
  ['Downward Pressure', '20–40 N', false],
  ['Suction Power', '20 kPa maximum', false],
  ['Speed', '0.1–0.8 m/s (adjustable)', false],
  ['Battery', 'LiFePO4 25.6V 36Ah', false],
  ['Runtime', '5–12 h', false],
  ['Charging Time', '3 h', false],
  ['Noise Level', '≤ 65 dB', false],
  ['IP Rating', 'IP34', false],
  ['Communication', '4G / Wi-Fi', false],
  ['Certification', 'CE, FCC, UKCA, CB, TELEC, JATE', false],
]

const scenarios = [
  {
    title: 'Shopping Malls',
    img: '/images/products/cleinbot-c2pro/scene-01.webp',
    points: ['Overnight automated cleaning across all floors', 'Auto elevator riding for multi-level coverage', 'Reduce custodial headcount by up to 50%'],
  },
  {
    title: 'Airports & Terminals',
    img: '/images/products/cleinbot-c2pro/scene-02.webp',
    points: ['24/7 terminal floor cleaning without interruption', 'Safe operation alongside passengers', 'GPS-level tracking per zone'],
  },
  {
    title: 'Hospitals & Healthcare',
    img: '/images/products/cleinbot-c2pro/scene-03.webp',
    points: ['Clinical-grade scrubbing for infection control', 'Scheduled zoned task execution', 'Remote monitoring and compliance logs'],
  },
  {
    title: 'Corporate & Office',
    img: '/images/products/cleinbot-c2pro/scene-04.webp',
    points: ['Silent night-mode for occupied buildings', 'App-based scheduling and reporting', 'Automated water tank exchange at dock'],
  },
]

const faqs = [
  { q: 'What is the difference between C2 and C2 Pro?', a: 'C2 is the cost-effective flagship for 1,000–2,000 m² spaces with self-recharging and self-cleaning. C2 Pro adds an automated docking station for hands-free water refill and drainage, making it ideal for 24/7 unattended operation in larger spaces.' },
  { q: 'How large an area can it map and clean?', a: 'C2 Pro supports maps of over 100,000 m². High mapping precision reaches ±1cm accuracy. Smart route planning re-calculates in real time within 1 second if cleaning conditions change.' },
  { q: 'Can it handle different floor surfaces?', a: 'Yes. The cleaning mechanism auto-adjusts for tile floors (scrubbing), carpets (vacuuming), and heavily stained areas (combined scrubbing & vacuuming). Side brushes provide 0-edge coverage with no missed corners.' },
  { q: 'Does it require water supply connection?', a: 'The standard model uses its internal 10L+10L tanks. If plumbing modification is not possible, an optional external mobile water tank is available for flexible installation without complex plumbing changes.' },
  { q: 'How do I manage the fleet remotely?', a: 'The companion app (iOS & Android) and web dashboard provide real-time coverage maps, task scheduling, notifications, and remote diagnostics. OTA firmware updates are delivered automatically via 4G/Wi-Fi.' },
]

const related = [
  { name: 'CLEINBOT M79', img: '/images/home/cleinbot-m79.png', cat: 'Industrial Scrubbing Robot', desc: 'Heavy-duty floor scrubbing for airports and large malls. 2,000 m²/h efficiency.', href: '/products/cleinbot-m79' },
  { name: 'AOMAN DOUBLE', img: '/images/home/aoman-double.webp', cat: 'Hotel Transport Robot', desc: '70L dual-cabin delivery robot. Fingerprint unlock, voice interaction.', href: '/products/aoman-double' },
  { name: 'CADEBOT L100', img: '/images/home/cadebot-l100.png', cat: 'Smart Delivery Robot', desc: 'Autonomous food & goods delivery for restaurants, hotels and hospitals.', href: '/products/cadebot-l100' },
]

export const metadata: Metadata = {
  title: 'CLEINBOT C2 Pro Cleaning Robot | AOMAN FUTURE',
  description: 'CLEINBOT C2 Pro — fully automated commercial cleaning robot. Auto water exchange, 24/7 operation, 500–800 m²/h efficiency. For malls, airports, hospitals and offices.',
  alternates: { canonical: '/products/cleinbot-c2pro' },
  openGraph: {
    title: 'CLEINBOT C2 Pro Cleaning Robot | AOMAN FUTURE',
    description: 'CLEINBOT C2 Pro — fully automated commercial cleaning robot. Auto water exchange, 24/7 operation, 500–800 m²/h efficiency.',
    url: '/products/cleinbot-c2pro',
    siteName: 'AOMAN FUTURE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLEINBOT C2 Pro Cleaning Robot | AOMAN FUTURE',
    description: 'CLEINBOT C2 Pro — fully automated commercial cleaning robot. Auto water exchange, 24/7 operation, 500–800 m²/h efficiency.',
  },
}

export default function CleinbotC2ProPage() {
  return (
    <main className="text-ink">

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative product-hero-bg text-ink overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-[0.25] pointer-events-none" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center bg-teal-light border border-teal/20 px-4 py-2 rounded-full text-sm font-semibold text-teal-dark">
                ✨ Upgrade: Fully Automated — C2 Pro Series
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                CLEINBOT C2 Pro<br /><span className="text-teal">Commercial Cleaning Robot</span>
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                Fully automated scrubbing, vacuuming, mopping, and sweeping. Auto water exchange at docking station — <strong className="text-teal">zero manual intervention</strong> for 24/7 operation.
              </p>
              <div className="flex flex-wrap gap-4">
                {[['800 m²/h', 'Cleaning Efficiency'], ['24/7', 'Autonomous Work'], ['±1 cm', 'Positioning Accuracy']].map(([v, l]) => (
                  <div key={l} className="bg-surface-subtle border border-line px-6 py-3 rounded-xl">
                    <div className="text-2xl font-black text-teal">{v}</div>
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
                src="/images/products/cleinbot-c2pro/hero-robot.webp"
                alt="CLEINBOT C2 Pro Commercial Cleaning Robot"
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

      {/* ─── MODEL COMPARISON ───────────────────────────────── */}
      <section className="py-16 bg-white border-b border-line">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-teal-light px-4 py-1.5 rounded-full">Product Series</span>
            <h2 className="text-3xl font-black text-ink">Choose the Right Model</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'C2', tag: 'Flagship · Cost-Effective', area: '1,000–2,000 m²', highlights: ['Scrubbing + vacuuming + mopping', 'Self-recharging & self-cleaning', 'Modular quick-release design'] },
              { name: 'C2 Pro', tag: 'Upgrade · Fully Automated', area: '2,000–10,000 m²', highlights: ['All C2 features plus sweeping', 'Auto water refill & drainage', '24/7 unattended operation'], featured: true },
              { name: 'C3 Mini', tag: 'Compact · Smaller Spaces', area: '100–1,000 m²', highlights: ['Sweeping + vacuuming + scrubbing', 'Compact 50 cm body, 60 cm width', 'Low noise ≤ 60 dB'] },
            ].map((m) => (
              <div key={m.name} className={`rounded-2xl p-7 border-2 flex flex-col gap-3 ${m.featured ? 'border-teal bg-teal-light/30 shadow-lg' : 'border-line bg-surface-subtle'}`}>
                {m.featured && <div className="text-xs font-bold uppercase tracking-widest text-teal">★ Recommended</div>}
                <h3 className={`text-2xl font-black ${m.featured ? 'text-teal-dark' : 'text-ink'}`}>{m.name}</h3>
                <p className="text-xs font-semibold text-ink-muted">{m.tag}</p>
                <p className="text-sm text-brand font-bold">{m.area} coverage</p>
                <ul className="space-y-1.5 mt-1">
                  {m.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-ink-muted">
                      <svg className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">Key Features</span>
            <h2 className="text-4xl font-black text-ink">Why Choose CLEINBOT C2 Pro?</h2>
            <p className="text-xl text-ink-muted max-w-2xl mx-auto">Pioneered modular commercial cleaning robot. Powerful, cost-effective, and easy to maintain.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group bg-surface-subtle rounded-2xl p-8 border-2 border-line hover:border-teal hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #0d9488, #14b8a6)' }}>
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
            <h2 className="text-4xl font-black text-ink">Technical Specifications</h2>
            <p className="text-xl text-ink-muted">Enterprise-grade hardware built for 24/7 commercial operations.</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            <Image
              src="/images/products/cleinbot-c2pro/tech-drawing.webp"
              alt="CLEINBOT C2 Pro Technical Drawing"
              width={560}
              height={700}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full rounded-2xl shadow-lg"
            />
            <div>
              {specs.map(([label, value, highlight]) => (
                <div key={String(label)} className="flex border-b border-line py-3.5 px-3 rounded-lg hover:bg-teal-light/20 transition-colors">
                  <div className="w-1/2 text-sm font-semibold text-ink-muted">{String(label)}</div>
                  <div className={`w-1/2 text-sm ${highlight ? 'font-bold text-teal-dark' : 'text-ink'}`}>{String(value)}</div>
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
            <h2 className="text-4xl font-black text-ink">Perfect for Multiple Scenarios</h2>
            <p className="text-xl text-ink-muted">Distributed globally to Europe, America, Japan, Korea, Australia, Middle East, and Southeast Asia.</p>
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

      {/* ─── ADVANTAGE HIGHLIGHT ────────────────────────────── */}
      <section className="py-20 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #0d9488, #0284c7)' }}>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-0 md:items-stretch">
              <div className="relative min-w-0 w-full aspect-[3/2]">
                <Image
                  src="/images/products/cleinbot-c2pro/scene-05.webp"
                  alt="CLEINBOT C2 Pro in operation"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
              <div className="p-10 text-white flex flex-col justify-center">
                <div className="inline-flex bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-5 w-fit">Market Leader</div>
                <h2 className="text-3xl font-black mb-5">Secured a 1,000-Unit Order</h2>
                <ul className="space-y-3 mb-8">
                  {[
                    '<strong>Global Distribution</strong> — Europe, Americas, Japan, Korea, Australia',
                    '<strong>Modular Design</strong> — Non-specialists can replace parts in minutes',
                    '<strong>Leading 3D Navigation</strong> — Stable performance proven in global deployments',
                    '<strong>IoT Integration</strong> — Auto elevator riding and access gate passing',
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-white/70 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm" dangerouslySetInnerHTML={{ __html: pt }} />
                    </li>
                  ))}
                </ul>
                <OpenInquiryButton className="bg-white text-teal-dark px-8 py-3.5 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all w-fit">
                  Get a Quote →
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
            <p className="text-xl text-ink-muted">Everything you need to know about CLEINBOT C2 Pro.</p>
          </div>
          <ProductFaq items={faqs} accent="teal" />
          <div className="text-center mt-10">
            <OpenInquiryButton className="text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all" style={{ background: 'linear-gradient(135deg, #0d9488, #0284c7)' }}>
              Talk to Our Cleaning Robot Expert →
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
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0d9488, #0284c7)' }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-black text-white mb-5">Ready to Automate Your Cleaning Operations?</h2>
          <p className="text-xl text-white/80 mb-9">Join businesses worldwide using CLEINBOT C2 Pro. Schedule your demo today.</p>
          <OpenInquiryButton className="inline-flex items-center justify-center bg-white text-teal-dark px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
            Get a Quote Now →
          </OpenInquiryButton>
        </div>
      </section>

    </main>
  )
}
