import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import OpenInquiryButton from '@/components/OpenInquiryButton'
import ProductFaq from '@/components/ProductFaq'
import ScrollToIdButton from '@/components/ScrollToIdButton'

const features = [
  { title: 'AI Path Planning', desc: 'Centimeter-accurate GPS + LiDAR fusion enables precise sweeping paths in both indoor and outdoor environments without manual programming.', points: ['Automatic boundary detection', 'Slope & curb detection up to 8°', 'Weather-adaptive route optimization'] },
  { title: 'Auto Dust-Bin Emptying', desc: 'A high-capacity 130L dust container with an auto-dump station means the robot can operate for a full shift without human intervention.', points: ['130L sealed dust container', 'Auto-emptying docking station', 'PM2.5 air filtration (HEPA)'] },
  { title: 'All-Weather Durability', desc: 'IP67-rated enclosure and UV-stabilized materials allow year-round outdoor operation in rain, dust, and temperature extremes.', points: ['IP67 waterproof & dustproof', 'Operating range: -10°C ~ 50°C', 'Corrosion-resistant aluminum chassis'] },
]

const specs = [
  ['Model', 'CLEINBOT CC201', false], ['Dimensions (H×W×D)', '1400×1020×840 mm', false], ['Weight', '310 kg', false],
  ['Sweeping Width', '1,020 mm', true], ['Cleaning Efficiency', '3,000 m²/h', true], ['Dust Container', '130L (auto-emptying)', false],
  ['Navigation', 'GPS + LiDAR + IMU Fusion', false], ['Speed', '0.5–1.5 m/s (adjustable)', false], ['Battery', '72V/150Ah (10h runtime)', false],
  ['Charging', 'Auto docking (5h full)', false], ['Slope Capability', '≤8°', false], ['Water Resistance', 'IP67', false],
  ['Operating Temp', '-10°C ~ 50°C', false], ['Certification', 'CE, FCC, RoHS, IP67', false], ['Warranty', '2 Years + Fleet Support', true],
]

const scenarios = [
  { title: 'Outdoor Plazas', img: '/images/products/cleinbot-cc201/scene-outdoor-plaza.jpg', points: ['Large area sweeping in a single pass', 'Leaf, debris, and fine dust removal', 'Night shift operation with obstacle lights'] },
  { title: 'Parking Lots', img: '/images/products/cleinbot-cc201/scene-parking-lot.jpg', points: ['Navigate between parked vehicles', 'Deep gutter and curb cleaning', 'Completes 50,000 m² overnight'] },
  { title: 'University Campuses', img: '/images/products/cleinbot-cc201/scene-university.jpg', points: ['Multi-path route programming', 'Auto-skip pedestrian zones by schedule', 'Audit-ready cleaning logs'] },
  { title: 'Industrial Parks', img: '/images/products/cleinbot-cc201/scene-industrial-park.jpg', points: ['Heavy debris and construction dust', 'Integration with security gate systems', 'Reduces headcount by 70%'] },
]

const faqs = [
  { q: 'Can CLEINBOT CC201 work in rainy conditions?', a: 'Yes. With IP67 certification, CLEINBOT CC201 is fully waterproof and can operate in rain. It is also equipped with a rain sensor that automatically adjusts routes to avoid puddle buildup.' },
  { q: 'How does it avoid pedestrians outdoors?', a: 'CLEINBOT CC201 uses a forward-facing 3D LiDAR combined with ultrasonic sensors for 180° obstacle detection at up to 15 meters. It automatically reduces speed and diverts around pedestrians.' },
  { q: 'What is the auto-emptying capacity?', a: 'The 130L sealed dust container is sufficient for approximately 3 hours of continuous sweeping. The auto-emptying station can hold up to 800L, allowing full-shift unattended operation.' },
  { q: 'How is it programmed for a new site?', a: 'Our technician maps the site during a 2-hour onboarding visit. Routes, restricted zones, and schedules are configured via the cloud dashboard. Subsequent modifications can be made remotely.' },
]

const related = [
  { name: 'CLEINBOT C2 Pro', img: '/images/home/cleinbot-c2pro.png', cat: 'Commercial Cleaning Robot', desc: 'Fully automated cleaning with auto water exchange. 500–800 m²/h.', href: '/products/cleinbot-c2pro' },
  { name: 'CLEINBOT M79', img: '/images/home/cleinbot-m79.png', cat: 'Floor Cleaning Robot', desc: 'Indoor floor scrubbing for large commercial spaces.', href: '/products/cleinbot-m79' },
  { name: 'CADEBOT L100', img: '/images/home/cadebot-l100.png', cat: 'Smart Delivery Robot', desc: 'Autonomous delivery for restaurants, hotels, and hospitals.', href: '/products/cadebot-l100' },
]

export const metadata: Metadata = {
  title: 'CLEINBOT CC201 Sweeping Robot | AOMAN FUTURE',
  description: 'Explore CLEINBOT CC201, the AOMAN FUTURE autonomous sweeping robot for campuses, plazas, parking lots, and industrial outdoor cleaning.',
  alternates: {
    canonical: '/products/cleinbot-cc201',
  },
  openGraph: {
    title: 'CLEINBOT CC201 Sweeping Robot | AOMAN FUTURE',
    description: 'Explore CLEINBOT CC201, the AOMAN FUTURE autonomous sweeping robot for campuses, plazas, parking lots, and industrial outdoor cleaning.',
    url: '/products/cleinbot-cc201',
    siteName: 'AOMAN FUTURE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLEINBOT CC201 Sweeping Robot | AOMAN FUTURE',
    description: 'Explore CLEINBOT CC201, the AOMAN FUTURE autonomous sweeping robot for campuses, plazas, parking lots, and industrial outdoor cleaning.',
  },
}

export default function CleinbotCC201Page() {
  return (
    <main className="text-ink">

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative product-hero-bg text-ink overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-[0.25] pointer-events-none" />
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center bg-teal-light border border-teal/20 px-4 py-2 rounded-full text-sm font-semibold text-teal">
                🌿 IP67 All-Weather Rated
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                CLEINBOT CC201<br /><span className="text-teal">Smart Sweeping Robot</span>
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                Autonomous outdoor & indoor sweeping for plazas, campuses, and industrial parks. Cut cleaning costs by <strong className="text-teal">70%</strong> around the clock.
              </p>
              <div className="flex flex-wrap gap-4">
                {[['3,000 m²/h', 'Cleaning Rate'], ['10 h', 'Battery Life'], ['130 L', 'Dust Container']].map(([v, l]) => (
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
                src="/images/products/cleinbot-cc201/hero-robot.png"
                alt="CLEINBOT CC201"
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
            <h2 className="text-4xl font-black text-ink">Why Choose CLEINBOT CC201?</h2>
            <p className="text-xl text-ink-muted max-w-2xl mx-auto">Built for the harshest outdoor environments, yet smart enough to operate completely unattended.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group bg-surface-subtle rounded-2xl p-8 border-2 border-line hover:border-teal hover:shadow-xl transition-all duration-300">
                <div className="bg-teal w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
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
            {/* /images/products/cleinbot-cc201/tech-drawing.png */}
            <Image
              src="/images/products/cleinbot-cc201/tech-drawing.png"
              alt="CLEINBOT CC201 Technical Drawing"
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
            <h2 className="text-4xl font-black text-ink">Built for Outdoor & Semi-Outdoor Environments</h2>
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
          <div className="text-center mb-12"><h2 className="text-4xl font-black text-ink mb-3">Frequently Asked Questions</h2></div>
          <ProductFaq items={faqs} accent="teal" />
          <div className="text-center mt-10">
            <OpenInquiryButton className="bg-teal text-white px-10 py-4 rounded-xl font-bold hover:bg-teal-hover hover:shadow-xl transition-all">
              Speak to Our Outdoor Cleaning Expert →
            </OpenInquiryButton>
          </div>
        </div>
      </section>

      {/* ─── RELATED ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12"><h2 className="text-4xl font-black text-ink">Explore More Robots</h2></div>
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
      <section className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(135deg, #0F172A, #00BF99)' }}>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-black text-white mb-5">Ready to Automate Outdoor Sweeping?</h2>
          <p className="text-xl text-white/80 mb-9">Join 400+ properties using CLEINBOT CC201. Schedule a site visit today.</p>
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
