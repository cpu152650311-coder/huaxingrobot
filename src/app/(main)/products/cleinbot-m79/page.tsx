import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import OpenInquiryButton from '@/components/OpenInquiryButton'
import ProductFaq from '@/components/ProductFaq'
import ScrollToIdButton from '@/components/ScrollToIdButton'

const features = [
  { title: 'Intelligent Mapping & Planning', desc: 'AI-powered simultaneous mapping and path planning adapts to any floor layout. Supports multi-zone scheduling and automatic re-routing.', points: ['Dynamic obstacle avoidance', 'Auto-resume after interruption', 'Multi-zone intelligent scheduling'] },
  { title: 'Multi-mode Cleaning System', desc: 'Combines scrubbing, vacuuming, and mopping in a single pass. Adjustable water flow and pressure for different floor types.', points: ['Dry vacuum + wet scrub + mopping', 'Adjustable water output (0–300 mL/min)', 'Self-cleaning brush roll'] },
  { title: 'Cloud Fleet Management', desc: 'Real-time monitoring and scheduling from any device. OTA firmware updates and predictive maintenance alerts keep your fleet running.', points: ['Real-time status & coverage map', 'Automated scheduling & task queues', 'Remote diagnostics & OTA updates'] },
]

const specs = [
  ['Model', 'CLEINBOT M79', false], ['Dimensions (H×W×D)', '960×720×350 mm', false], ['Weight', '95 kg', false],
  ['Cleaning Width', '720 mm', true], ['Cleaning Efficiency', '2,000 m²/h', true], ['Water Tank', '45L clean + 40L dirty', false],
  ['Navigation', 'LiDAR SLAM + RGB-D Camera', false], ['Speed', '0.2–0.8 m/s (adjustable)', false], ['Battery', '48V/120Ah (8h runtime)', false],
  ['Charging', 'Auto docking (4h full)', false], ['Slope Capability', '≤5°', false], ['Connectivity', 'Wi-Fi 5GHz, 4G LTE', false],
  ['Operating Temp', '5°C ~ 45°C', false], ['Certification', 'CE, FCC, RoHS, IP67', false], ['Warranty', '2 Years + Fleet Support', true],
]

const scenarios = [
  { title: 'Shopping Malls', img: '/images/products/cleinbot-m79/scene-shopping-mall.jpg', points: ['Clean open concourses overnight', 'Automated multi-level scheduling', 'Reduce custodial headcount by 50%'] },
  { title: 'International Airports', img: '/images/products/cleinbot-m79/scene-airport.jpg', points: ['24/7 terminal floor cleaning', 'Works alongside passengers safely', 'GPS-level tracking per zone'] },
  { title: 'Hotels & Lobbies', img: '/images/products/cleinbot-m79/scene-hotel-lobby.jpg', points: ['Silent night cleaning mode', 'Auto-return to dock before opening', 'Hygiene audit logs for compliance'] },
  { title: 'Hospitals & Clinics', img: '/images/products/cleinbot-m79/scene-hospital-clinic.jpg', points: ['Clinical-grade disinfection cycles', 'UV-C add-on module available', 'HIS-integrated scheduling'] },
]

const faqs = [
  { q: 'How does it handle furniture and obstacles?', a: 'CLEINBOT M79 uses a combination of LiDAR and RGB-D cameras to build a real-time map. It detects static and moving obstacles up to 3 meters away and re-routes automatically, with a safety stop if needed.' },
  { q: 'What is the noise level during operation?', a: 'CLEINBOT M79 operates at approximately 65dB(A) in standard mode and 58dB(A) in quiet mode — comparable to a normal conversation. It is suitable for use in occupied spaces.' },
  { q: 'How often does it need water/dirty-water servicing?', a: 'At maximum efficiency, the 45L clean-water tank lasts approximately 45 minutes of active cleaning. The robot alerts operators when tanks need servicing via the mobile app.' },
  { q: 'Can it clean multiple floors?', a: 'Yes. With elevator integration enabled, CLEINBOT M79 can independently enter and exit elevators to clean across multiple floors. Multi-floor maps are created once during initial setup.' },
]

const related = [
  { name: 'CLEINBOT C2 Pro', img: '/images/home/cleinbot-c2pro.png', cat: 'Commercial Cleaning Robot', desc: 'Fully automated cleaning with auto water exchange. 500–800 m²/h.', href: '/products/cleinbot-c2pro' },
  { name: 'CADEBOT L100', img: '/images/home/cadebot-l100.png', cat: 'Smart Delivery Robot', desc: 'Autonomous delivery for restaurants, hotels, and hospitals.', href: '/products/cadebot-l100' },
  { name: 'CRUZR', img: '/images/home/cruzr.png', cat: 'Humanoid Service Robot', desc: 'AI-powered reception and customer guidance robot.', href: '/products/cruzr' },
]

export const metadata: Metadata = {
  title: 'CLEINBOT M79 Cleaning Robot | AOMAN FUTURE',
  description: 'Explore CLEINBOT M79, the AOMAN FUTURE autonomous floor cleaning robot for malls, airports, hotels, hospitals, and large commercial spaces.',
  alternates: {
    canonical: '/products/cleinbot-m79',
  },
  openGraph: {
    title: 'CLEINBOT M79 Cleaning Robot | AOMAN FUTURE',
    description: 'Explore CLEINBOT M79, the AOMAN FUTURE autonomous floor cleaning robot for malls, airports, hotels, hospitals, and large commercial spaces.',
    url: '/products/cleinbot-m79',
    siteName: 'AOMAN FUTURE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLEINBOT M79 Cleaning Robot | AOMAN FUTURE',
    description: 'Explore CLEINBOT M79, the AOMAN FUTURE autonomous floor cleaning robot for malls, airports, hotels, hospitals, and large commercial spaces.',
  },
}

export default function CleinbotM79Page() {
  return (
    <main className="text-ink">

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative product-hero-bg text-ink overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-[0.25] pointer-events-none" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center bg-teal-light border border-teal/20 px-4 py-2 rounded-full text-sm font-semibold text-teal">
                🌿 ISO 14001 Environmentally Certified
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                CLEINBOT M79<br /><span className="text-teal">Smart Floor Cleaning Robot</span>
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                24/7 autonomous floor scrubbing for airports, malls, and hospitals. Cut cleaning costs by <strong className="text-teal">50%</strong> and raise hygiene standards.
              </p>
              <div className="flex flex-wrap gap-4">
                {[['2,000 m²/h', 'Cleaning Rate'], ['8 h', 'Battery Life'], ['65 dB', 'Noise Level']].map(([v, l]) => (
                  <div key={l} className="bg-surface-subtle border border-line px-6 py-3 rounded-xl">
                    <div className="text-2xl font-black text-teal">{v}</div>
                    <div className="text-sm text-ink-muted">{l}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <OpenInquiryButton className="inline-flex items-center justify-center bg-teal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-hover hover:shadow-xl transition-all">
                  Request Demo →
                </OpenInquiryButton>
                <ScrollToIdButton targetId="specs" className="inline-flex items-center justify-center border-2 border-teal text-teal px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-light transition-all">
                  View Specs
                </ScrollToIdButton>
              </div>
            </div>
            <div className="flex justify-center hero-image-blend">
              <Image
                src="/images/products/cleinbot-m79/hero-robot.png"
                alt="CLEINBOT M79"
                width={520}
                height={520}
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
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-teal-light px-4 py-1.5 rounded-full">Key Features</span>
            <h2 className="text-4xl font-black text-ink">Why Choose CLEINBOT M79?</h2>
            <p className="text-xl text-ink-muted max-w-2xl mx-auto">The most intelligent floor-cleaning robot for enterprise environments. 800+ units in operation globally.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group bg-surface-subtle rounded-2xl p-8 border-2 border-line hover:border-teal hover:shadow-xl transition-all duration-300">
                <div className="bg-teal w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
            {/* /images/products/cleinbot-m79/tech-drawing.png */}
            <Image
              src="/images/products/cleinbot-m79/tech-drawing.png"
              alt="CLEINBOT M79 Technical Drawing"
              width={560}
              height={700}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full rounded-2xl shadow-lg"
            />
            <div>
              {specs.map(([label, value, highlight]) => (
                <div key={String(label)} className="flex border-b border-line py-3.5 px-3 rounded-lg hover:bg-teal-light/30 transition-colors">
                  <div className="w-1/2 text-sm font-semibold text-ink-muted">{String(label)}</div>
                  <div className={`w-1/2 text-sm ${highlight ? 'font-bold text-teal' : 'text-ink'}`}>{String(value)}</div>
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
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-teal-light px-4 py-1.5 rounded-full">Applications</span>
            <h2 className="text-4xl font-black text-ink">Ideal for Large Commercial Spaces</h2>
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

      {/* ─── FAQ ────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-ink mb-3">Frequently Asked Questions</h2>
          </div>
          <ProductFaq items={faqs} accent="teal" />
          <div className="text-center mt-10">
            <OpenInquiryButton className="bg-teal text-white px-10 py-4 rounded-xl font-bold hover:bg-teal-hover hover:shadow-xl transition-all">
              Talk to Our Cleaning Expert →
            </OpenInquiryButton>
          </div>
        </div>
      </section>

      {/* ─── RELATED ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
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
                  <p className="text-teal text-xs font-semibold mb-2">{r.cat}</p>
                  <p className="text-ink-muted text-sm mb-5">{r.desc}</p>
                  <div className="flex gap-3">
                    <Link href={r.href} className="flex-1 text-center border border-teal text-teal py-2.5 rounded-lg font-semibold text-sm hover:bg-teal hover:text-white transition">{`View ${r.name} — ${r.cat}`}</Link>
                    <OpenInquiryButton className="flex-1 bg-teal text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-hover transition">Inquire</OpenInquiryButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(135deg, #00D4AA, #0066FF)' }}>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-black text-white mb-5">Ready to Automate Your Cleaning Operations?</h2>
          <p className="text-xl text-white/80 mb-9">Join 800+ facilities using CLEINBOT M79. Schedule a live demo at your location.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <OpenInquiryButton className="inline-flex items-center justify-center bg-white text-teal px-12 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
              Get a Quote Now →
            </OpenInquiryButton>
          </div>
        </div>
      </section>

    </main>
  )
}
