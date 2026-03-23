import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import OpenInquiryButton from '@/components/OpenInquiryButton'
import ProductFaq from '@/components/ProductFaq'
import ScrollToIdButton from '@/components/ScrollToIdButton'

const features = [
  { title: 'SLAM 3.0 Navigation', desc: 'Advanced LiDAR + Vision fusion for obstacle avoidance in crowded spaces. Self-charging, automatic elevator calling, multi-floor delivery.', points: ['360° environment perception', 'Dynamic path planning in real-time', '1cm positioning accuracy'] },
  { title: 'Modular Tray System', desc: '4-layer adjustable trays supporting dishes, drinks, and hotpot. Food-grade materials, automatic tray detection, spill-proof design.', points: ['4 independent trays (15kg each)', 'Height adjustable (10cm range)', 'Easy cleaning & disinfection'] },
  { title: 'Smart Interaction', desc: '13.3" HD touchscreen + voice commands in 8 languages. Customizable branding, multimedia ads, customer satisfaction ratings.', points: ['Natural language understanding', 'Animated facial expressions', 'Real-time data analytics dashboard'] },
]

const specs = [
  ['Model', 'CADEBOT L100', false], ['Dimensions (H×W×D)', '1250×490×545 mm', false], ['Weight', '58 kg', false],
  ['Max Payload', '60 kg', true], ['Tray Config', '4 layers (15 kg each)', false], ['Navigation', 'LiDAR + RGB-D Camera SLAM 3.0', false],
  ['Speed', '0.3–1.2 m/s (adjustable)', false], ['Battery', '24V/60Ah (8–12h runtime)', false], ['Charging', 'Auto docking (3h full)', false],
  ['Display', '13.3" HD Touchscreen', false], ['Voice Languages', '8 (EN/ZH/ES/FR/DE/JP/KR/AR)', false], ['Connectivity', 'Wi-Fi 6, 4G LTE (optional)', false],
  ['Operating Temp', '0°C ~ 40°C', false], ['Certification', 'CE, FCC, RoHS, ISO 13482', false], ['Warranty', '2 Years + Lifetime Support', true],
]

const scenarios = [
  { title: 'Restaurants & Cafés', img: '/images/products/cadebot-l100/scene-restaurant.jpg', points: ['Deliver food from kitchen to tables', 'Return dirty dishes to washing area', 'Reduce staff walking distance by 70%'] },
  { title: 'Hotels & Resorts', img: '/images/products/cadebot-l100/scene-hotel.jpg', points: ['24/7 room service delivery', 'Linen & amenities transport', 'Enhance guest experience & ratings'] },
  { title: 'Hospitals & Clinics', img: '/images/products/cadebot-l100/scene-hospital.jpg', points: ['Medicine & meal delivery to wards', 'Medical waste & linen collection', 'Reduce infection risk & nurse workload'] },
  { title: 'Corporate Offices', img: '/images/products/cadebot-l100/scene-office.jpg', points: ['Inter-department document delivery', 'Cafeteria food distribution', 'Modern workplace image upgrade'] },
]

const faqs = [
  { q: 'How long does deployment take?', a: 'Initial setup takes 2–4 hours including map creation. Our engineers provide on-site training. Most restaurants are fully operational within 1 day. Remote support available 24/7.' },
  { q: 'What is the typical ROI timeline?', a: 'Average ROI is 8–12 months based on reduced labor costs, increased table turnover, and improved customer experience. Financing options available.' },
  { q: 'Can it work with our existing POS system?', a: 'Yes. CADEBOT L100 integrates with major POS systems via API (Toast, Square, Lightspeed, etc.). We also provide a standalone tablet interface. Custom integrations available.' },
  { q: 'What routine maintenance is required?', a: 'Daily: wipe trays & sensors (5 min). Weekly: check wheels & charging contacts. Monthly: automatic software updates. Annual: professional servicing included in warranty.' },
  { q: 'Is it safe around customers and staff?', a: '360° sensors detect people 5 meters away. Automatic speed reduction near obstacles. Emergency stop button. Certified to ISO 13482 (service robot safety). 10M+ km driven globally with zero injury incidents.' },
]

const related = [
  { name: 'CLEINBOT M79', img: '/images/home/cleinbot-m79.png', cat: 'Smart Cleaning Robot', desc: 'Autonomous floor scrubbing. 2,000 m²/h efficiency.', href: '/products/cleinbot-m79' },
  { name: 'CLEINBOT CC201', img: '/images/home/cleinbot-cc201.png', cat: 'Sweeping Robot', desc: 'Deep cleaning for hotels & offices. IoT-enabled.', href: '/products/cleinbot-cc201' },
  { name: 'CRUZR', img: '/images/home/cruzr.png', cat: 'Humanoid Service Robot', desc: 'Interactive reception & guidance. Perfect for retail.', href: '/products/cruzr' },
]

export const metadata: Metadata = {
  title: 'CADEBOT L100 Delivery Robot | AOMAN FUTURE',
  description: 'Explore CADEBOT L100, the AOMAN FUTURE autonomous delivery robot for restaurants, hotels, hospitals, and enterprise logistics.',
  alternates: {
    canonical: '/products/cadebot-l100',
  },
  openGraph: {
    title: 'CADEBOT L100 Delivery Robot | AOMAN FUTURE',
    description: 'Explore CADEBOT L100, the AOMAN FUTURE autonomous delivery robot for restaurants, hotels, hospitals, and enterprise logistics.',
    url: '/products/cadebot-l100',
    siteName: 'AOMAN FUTURE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CADEBOT L100 Delivery Robot | AOMAN FUTURE',
    description: 'Explore CADEBOT L100, the AOMAN FUTURE autonomous delivery robot for restaurants, hotels, hospitals, and enterprise logistics.',
  },
}

export default function CadebotL100Page() {
  return (
    <main className="text-ink">

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative product-hero-bg text-ink overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-[0.25] pointer-events-none" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center bg-brand-light border border-brand/20 px-4 py-2 rounded-full text-sm font-semibold text-brand">
                🏆 2024 Red Dot Design Award Winner
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                CADEBOT L100<br /><span className="text-teal">Smart Delivery Robot</span>
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                AI-powered autonomous delivery for restaurants, hotels, and hospitals. Reduce labor costs by <strong className="text-teal">40%</strong> while improving service efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                {[['60 kg', 'Max Payload'], ['24 h', 'Continuous Work'], ['99.8%', 'Accuracy']].map(([v, l]) => (
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
                src="/images/products/cadebot-l100/hero-robot.png"
                alt="CADEBOT L100 Smart Delivery Robot"
                width={520}
                height={620}
                priority
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
            <h2 className="text-4xl font-black text-ink">Why Choose CADEBOT L100?</h2>
            <p className="text-xl text-ink-muted max-w-2xl mx-auto">Revolutionary AI technology meets practical business needs. Proven in 500+ locations worldwide.</p>
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
            <h2 className="text-4xl font-black text-ink">Technical Specifications</h2>
            <p className="text-xl text-ink-muted">Enterprise-grade hardware built for 24/7 operations.</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            {/* /images/products/cadebot-l100/tech-drawing.png */}
            <Image
              src="/images/products/cadebot-l100/tech-drawing.png"
              alt="CADEBOT L100 Technical Drawing"
              width={560}
              height={700}
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
            <h2 className="text-4xl font-black text-ink">Perfect for Multiple Scenarios</h2>
            <p className="text-xl text-ink-muted">Proven in 500+ locations across 20 countries.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((sc, i) => (
              <div key={sc.title} className="bg-white rounded-2xl overflow-hidden border border-line card-hover flex flex-col">
                <div className="aspect-[3/2] relative">
                  <Image
                    src={sc.img}
                    alt={sc.title}
                    fill
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
                <Image
                  src="/images/products/cadebot-l100/case-haidilao.jpg"
                  alt="Haidilao Case Study"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 62vw"
                />
              </div>
              <div className="p-10 text-white flex flex-col justify-center">
                <div className="inline-flex bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-5 w-fit">🏆 Featured Case Study</div>
                <h2 className="text-3xl font-black mb-5">Haidilao Hotpot<br />300+ Robots Deployed</h2>
                <ul className="space-y-3 mb-8">
                  {['<strong>40%</strong> reduction in labor costs', '<strong>200+</strong> delivery trips per robot daily', '<strong>8-month</strong> ROI period', '<strong>95%</strong> customer satisfaction increase'].map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-base" dangerouslySetInnerHTML={{ __html: pt }} />
                    </li>
                  ))}
                </ul>
                <OpenInquiryButton className="bg-white text-brand px-8 py-3.5 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all w-fit">
                  Get Your ROI Analysis →
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
            <p className="text-xl text-ink-muted">Everything you need to know about CADEBOT L100.</p>
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
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-black text-ink">Complete Your Smart Service Fleet</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {related.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl overflow-hidden border border-line card-hover flex flex-col">
                <div className="aspect-square bg-white flex items-center justify-center p-4">
                  <Image src={r.img} alt={r.name} width={200} height={200} className="w-full h-full object-contain" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-ink">{r.name}</h3>
                  <p className="text-teal text-xs font-semibold mb-2">{r.cat}</p>
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
          <h2 className="text-4xl font-black text-white mb-5">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/80 mb-9">Join 500+ businesses worldwide using CADEBOT L100. Schedule your demo today.</p>
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
