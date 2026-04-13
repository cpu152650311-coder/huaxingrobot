import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import OpenInquiryButton from '@/components/OpenInquiryButton'
import ProductFaq from '@/components/ProductFaq'
import ScrollToIdButton from '@/components/ScrollToIdButton'

const features = [
  { title: 'Voice AI & NLP', desc: 'State-of-the-art natural language understanding enables fluid, context-aware conversations in 50+ languages with 96% intent accuracy.', points: ['50+ languages & dialects supported', 'Context-aware multi-turn dialogue', 'Custom knowledge base integration'] },
  { title: 'Face Recognition & Emotion AI', desc: 'RGB-D cameras combined with deep learning models identify registered visitors, detect mood, and tailor responses for personalized interactions.', points: ['Face recognition in 0.3 seconds', '7-category emotion detection', 'Personalized greeting & interaction history'] },
  { title: 'Open App Ecosystem', desc: 'A rich SDK and pre-built application marketplace lets enterprises deploy custom scenarios — from receptionist workflows to interactive kiosks.', points: ['SDK: Python, Java, Node.js, REST API', '200+ pre-built apps in marketplace', 'Custom UI design tool (no-code)'] },
]

const specs = [
  ['Model', 'CRUZR', false], ['Height', '1,450 mm', false], ['Weight', '78 kg', false],
  ['Display', '8" Chest Screen + 14" Facial LED Array', true], ['Voice Languages', '50+', true], ['Navigation', 'LiDAR + RGB-D SLAM', false],
  ['Speed', '0–0.8 m/s (adjustable)', false], ['Battery', '48V/60Ah (10h runtime)', false], ['Charging', 'Auto docking (3.5h full)', false],
  ['Emotional Expression', '36 facial expressions', false], ['Arms', '2× 6-DOF articulated arms', false], ['Connectivity', 'Wi-Fi 6, 4G LTE, Bluetooth 5.0', false],
  ['Operating Temp', '0°C ~ 40°C', false], ['Certification', 'CE, FCC, ISO 13482', false], ['Warranty', '2 Years + Software Updates', true],
]

const scenarios = [
  { title: 'Hotel Reception', img: '/images/products/cruzr/scene-hotel-reception.jpg', points: ['Check-in guidance & floor directions', 'Concierge FAQ in guest\'s language', 'Upsell services with personalized offers'] },
  { title: 'Retail & Showrooms', img: '/images/products/cruzr/scene-retail-showroom.jpg', points: ['Product introduction & recommendations', 'Queue management & promotion display', 'CRM data integration for VIP customers'] },
  { title: 'Exhibition Halls', img: '/images/products/cruzr/scene-exhibition-hall.jpg', points: ['Multilingual guided tours', 'Interactive exhibit explanations', 'Visitor flow analytics & heat maps'] },
  { title: 'Corporate Lobbies', img: '/images/products/cruzr/scene-corporate-lobby.jpg', points: ['Visitor registration & badge printing', 'Meeting room wayfinding', 'Guest notification to host employee'] },
]

const faqs = [
  { q: 'How does CRUZR handle unfamiliar questions?', a: 'CRUZR uses a tiered response system: first it checks the configured knowledge base, then its general AI model. If it cannot answer, it gracefully escalates to a human agent or offers an alternative action, ensuring the conversation never dead-ends.' },
  { q: 'Can CRUZR be customized to match our brand?', a: 'Yes. CRUZR\'s chest screen, LED face display, and voice persona are all configurable. Branded uniforms, logos, and custom interaction scripts can be set up via the AOMAN Cloud dashboard without coding.' },
  { q: 'How secure is the face recognition data?', a: 'All biometric data is encrypted at rest and in transit. GDPR-compliant data retention policies are included. Face data can optionally be stored exclusively on-premise with no cloud sync.' },
  { q: 'Can multiple CRUZR units work together?', a: 'Yes. AOMAN\'s fleet management platform allows centralized scheduling, task assignment, and performance monitoring across unlimited CRUZR units. Units can hand off guests between each other in large venues.' },
  { q: 'What ongoing software support is included?', a: 'All CRUZR units receive free OTA updates for the 2-year warranty period. Extended software maintenance plans are available. Our developer community and API documentation are publicly accessible.' },
]

const related = [
  { name: 'CADEBOT L100', img: '/images/home/cadebot-l100.png', cat: 'Smart Delivery Robot', desc: 'Autonomous food & goods delivery for restaurants and hotels.', href: '/products/cadebot-l100' },
  { name: 'CLEINBOT M79', img: '/images/home/cleinbot-m79.png', cat: 'Floor Cleaning Robot', desc: 'Intelligent 24/7 floor scrubbing for large commercial spaces.', href: '/products/cleinbot-m79' },
  { name: 'CLEINBOT CC201', img: '/images/home/cleinbot-cc201.png', cat: 'Sweeping Robot', desc: 'All-weather outdoor sweeping for plazas and campuses.', href: '/products/cleinbot-cc201' },
]

export const metadata: Metadata = {
  title: 'CRUZR Humanoid Service Robot | AOMAN FUTURE',
  description: 'Explore CRUZR, the AOMAN FUTURE humanoid service robot for hospitality, retail, exhibitions, reception, and multilingual customer engagement.',
  alternates: {
    canonical: '/products/cruzr',
  },
  openGraph: {
    title: 'CRUZR Humanoid Service Robot | AOMAN FUTURE',
    description: 'Explore CRUZR, the AOMAN FUTURE humanoid service robot for hospitality, retail, exhibitions, reception, and multilingual customer engagement.',
    url: '/products/cruzr',
    siteName: 'AOMAN FUTURE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRUZR Humanoid Service Robot | AOMAN FUTURE',
    description: 'Explore CRUZR, the AOMAN FUTURE humanoid service robot for hospitality, retail, exhibitions, reception, and multilingual customer engagement.',
  },
}

export default function CruzrPage() {
  return (
    <main className="text-ink">

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative product-hero-bg text-ink overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-[0.25] pointer-events-none" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center bg-brand-light border border-brand/20 px-4 py-2 rounded-full text-sm font-semibold text-brand">
                🌟 Most Deployed Humanoid Service Robot in Asia
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                CRUZR<br /><span className="text-teal">Humanoid Service Robot</span>
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                The most human-like AI service robot for hospitality, retail, and exhibitions. Delivers <strong className="text-teal">immersive interactions</strong> in 50+ languages, 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                {[['50+', 'Languages'], ['10 h', 'Battery Life'], ['0.3 s', 'Face Recog.']].map(([v, l]) => (
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
                src="/images/products/cruzr/hero-robot.png"
                alt="CRUZR Humanoid Service Robot"
                width={480}
                height={680}
                priority
                sizes="(max-width: 768px) 100vw, 384px"
                className="w-full max-w-sm"
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
            <h2 className="text-4xl font-black text-ink">Why Choose CRUZR?</h2>
            <p className="text-xl text-ink-muted max-w-2xl mx-auto">Designed to embody your brand and delight every visitor with genuine AI-powered warmth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group bg-surface-subtle rounded-2xl p-8 border-2 border-line hover:border-brand hover:shadow-xl transition-all duration-300">
                <div className="hero-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">Specifications</span>
            <h2 className="text-4xl font-black text-ink">Technical Specifications</h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            {/* /images/products/cruzr/tech-drawing.png */}
            <Image
              src="/images/products/cruzr/tech-drawing.png"
              alt="CRUZR Technical Drawing"
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
            <h2 className="text-4xl font-black text-ink">Where CRUZR Thrives</h2>
            <p className="text-xl text-ink-muted">Deployed in 1,000+ venues across 70 countries.</p>
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

      {/* ─── CASE HIGHLIGHT ─────────────────────────────────── */}
      <section className="py-20 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto hero-gradient rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-[1.65fr_1fr] gap-0 md:items-stretch">
              <div className="relative min-w-0 w-full aspect-[3/2]">
                <Image src="/images/products/cruzr/case-airport.jpg" alt="Paris Airport CRUZR" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 62vw" />
              </div>
              <div className="p-10 text-white flex flex-col justify-center">
                <div className="inline-flex bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-5 w-fit">✈️ Featured Case Study</div>
                <h2 className="text-3xl font-black mb-5">Paris CDG Airport<br />50+ CRUZR Units</h2>
                <ul className="space-y-3 mb-8">
                  {['<strong>+35%</strong> passenger satisfaction score', '<strong>-40%</strong> staff workload for wayfinding', '<strong>12</strong> languages served simultaneously', '<strong>98%</strong> query resolution rate'].map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-base" dangerouslySetInnerHTML={{ __html: pt }} />
                    </li>
                  ))}
                </ul>
                <OpenInquiryButton className="bg-white text-brand px-8 py-3.5 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all w-fit">
                  Get Your Demo →
                </OpenInquiryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-ink mb-3">Frequently Asked Questions</h2>
          </div>
          <ProductFaq items={faqs} accent="brand" />
          <div className="text-center mt-10">
            <OpenInquiryButton className="hero-gradient text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Talk to Our Robotics Expert →
            </OpenInquiryButton>
          </div>
        </div>
      </section>

      {/* ─── RELATED ────────────────────────────────────────── */}
      <section className="py-24 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12"><h2 className="text-4xl font-black text-ink">Complete Your Smart Service Fleet</h2></div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {related.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl overflow-hidden border border-line card-hover flex flex-col">
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  <Image src={r.img} alt={r.name} width={200} height={200} sizes="200px" className="w-full h-full object-contain" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-ink">{r.name}</h3>
                  <p className="text-brand text-xs font-semibold mb-2">{r.cat}</p>
                  <p className="text-ink-muted text-sm mb-5">{r.desc}</p>
                  <div className="flex gap-3">
                    <Link href={r.href} className="flex-1 text-center border border-brand text-brand py-2.5 rounded-lg font-semibold text-sm hover:bg-brand hover:text-white transition">{`View ${r.name} — ${r.cat}`}</Link>
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
          <h2 className="text-4xl font-black text-white mb-5">Ready to Elevate Your Customer Experience?</h2>
          <p className="text-xl text-white/80 mb-9">Join 1,000+ venues worldwide using CRUZR. Schedule your personalized demo today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenInquiryButton className="inline-flex items-center justify-center bg-white text-brand px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
              Get a Quote Now →
            </OpenInquiryButton>
          </div>
        </div>
      </section>

    </main>
  )
}
