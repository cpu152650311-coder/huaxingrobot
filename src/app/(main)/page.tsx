import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import OpenInquiryButton from '@/components/OpenInquiryButton'

const partners = [
  { name: 'Tencent', src: '/images/home/partner-tencent.webp' },
  { name: 'Huawei', src: '/images/home/partner-huawei.webp' },
  { name: 'China Mobile', src: '/images/home/partner-china-mobile.webp' },
  { name: 'China Unicom', src: '/images/home/partner-china-unicom.webp' },
  { name: 'China Telecom', src: '/images/home/partner-china-telecom.webp' },
  { name: 'ICBC', src: '/images/home/partner-icbc.webp' },
  { name: 'Bank of China', src: '/images/home/partner-bank-of-china.webp' },
  { name: 'China Merchants Bank', src: '/images/home/partner-china-merchants-bank.webp' },
  { name: 'HSBC', src: '/images/home/partner-hsbc.webp' },
  { name: 'State Grid', src: '/images/home/partner-state-grid.webp' },
  { name: 'Tsinghua University', src: '/images/home/partner-tsinghua.webp' },
  { name: 'University of Sydney', src: '/images/home/partner-sydney.webp' },
]

const products = [
  {
    name: 'CADEBOT L100',
    badge: 'Delivery',
    badgeColor: 'bg-brand-light text-brand',
    desc: 'Autonomous delivery robot for hotels, hospitals, and office buildings.',
    features: ['40 kg load capacity', 'Multi-elevator navigation', 'Smart obstacle avoidance'],
    href: '/products/cadebot-l100',
    img: '/images/home/cadebot-l100.png',
    imgAlt: 'CADEBOT L100 Delivery Robot',
  },
  {
    name: 'CLEINBOT M79',
    badge: 'Cleaning',
    badgeColor: 'bg-teal-light text-teal-dark',
    desc: 'Intelligent floor-cleaning robot for large commercial spaces.',
    features: ['2,000 m²/h efficiency', 'Auto-return docking', 'Multi-surface support'],
    href: '/products/cleinbot-m79',
    img: '/images/home/cleinbot-m79.png',
    imgAlt: 'CLEINBOT M79 Cleaning Robot',
  },
  {
    name: 'CLEINBOT CC201',
    badge: 'Sweeping',
    badgeColor: 'bg-teal-light text-teal-dark',
    desc: 'Commercial sweeping robot with deep-clean capabilities for outdoor & indoor areas.',
    features: ['AI path planning', 'Auto dust-bin emptying', 'Weather-resistant'],
    href: '/products/cleinbot-cc201',
    img: '/images/home/cleinbot-cc201.png',
    imgAlt: 'CLEINBOT CC201 Sweeping Robot',
  },
  {
    name: 'CRUZR',
    badge: 'Service',
    badgeColor: 'bg-brand-light text-brand',
    desc: 'Humanoid customer-service robot with voice interaction and facial recognition.',
    features: ['Natural voice interaction', 'Facial recognition', 'App ecosystem'],
    href: '/products/cruzr',
    img: '/images/home/cruzr.png',
    imgAlt: 'CRUZR Service Robot',
  },
]

const solutions = [
  {
    title: 'Hospitality',
    desc: 'Automate in-room delivery, concierge, and lobby service — reduce operating costs by up to 35%.',
    img: '/images/home/solution-hospitality.jpg',
    icon: '🏨',
  },
  {
    title: 'Healthcare',
    desc: 'Contactless medication delivery, patient guidance, and cleaning in clinical environments.',
    img: '/images/home/solution-healthcare.jpg',
    icon: '🏥',
  },
  {
    title: 'Commercial & Retail',
    desc: 'Boost customer experience with AI-powered product navigation and autonomous floor cleaning.',
    img: '/images/home/solution-commercial.jpg',
    icon: '🏢',
  },
]

const cases = [
  {
    company: 'Marriott International',
    result: 'Deployed 120+ CADEBOT units across 18 properties — reduced delivery labor costs by 40%.',
    category: 'Hospitality',
    color: 'from-brand to-brand-hover',
  },
  {
    company: 'Shenzhen University Hospital',
    result: 'CLEINBOT M79 handles overnight disinfection across 30,000 m² of clinical space.',
    category: 'Healthcare',
    color: 'from-teal to-teal-hover',
  },
  {
    company: 'Foxconn Industrial Park',
    result: 'Fleet of 60 CADEBOT units enabled 24/7 parts delivery, cutting logistics time by 60%.',
    category: 'Manufacturing',
    color: 'from-brand to-teal',
  },
]

const techHighlights = [
  { icon: '🧠', title: 'SLAM Navigation', desc: 'Centimeter-accurate real-time positioning in dynamic environments — no magnetic strips required.' },
  { icon: '👁️', title: 'Computer Vision', desc: '3D depth cameras and multi-sensor fusion for reliable object detection and safety compliance.' },
  { icon: '🗣️', title: 'Voice AI', desc: 'Multi-language NLP engine with >95% recognition rate in noisy real-world settings.' },
  { icon: '☁️', title: 'Cloud Fleet Management', desc: 'Monitor, schedule, and update your entire robot fleet remotely from a single dashboard.' },
]

const news = [
  {
    date: 'Feb 2025',
    tag: 'Product',
    title: 'CADEBOT L100 Gen 2 Launches with 60% Improved Battery Life',
    summary: 'The new generation features a 48V lithium pack and smart charging, enabling 20-hour continuous operation.',
    img: '/images/home/news-cadebot-gen2.jpg',
  },
  {
    date: 'Jan 2025',
    tag: 'Partnership',
    title: 'AOMAN Signs Strategic Partnership with Siemens Smart Infrastructure',
    summary: 'The collaboration will integrate AOMAN robots into Siemens building management systems across 30+ countries.',
    img: '/images/home/news-siemens-partnership.jpg',
  },
  {
    date: 'Dec 2024',
    tag: 'Award',
    title: 'CLEINBOT M79 Wins CES 2025 Innovation Award in Robotics Category',
    summary: 'Recognized for breakthrough autonomous navigation and industry-leading cleaning efficiency.',
    img: '/images/home/news-ces2025-award.jpg',
  },
]

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'AOMAN FUTURE',
      url: 'https://aomanbot.com',
      logo: 'https://aomanbot.com/logo.png',
      email: 'info@aomanbot.com',
    },
    {
      '@type': 'WebSite',
      name: 'AOMAN FUTURE',
      url: 'https://aomanbot.com',
    },
  ],
}

export const metadata: Metadata = {
  title: 'AOMAN FUTURE | Intelligent Service Robots',
  description: 'Discover AOMAN FUTURE service robots for delivery, cleaning, and humanoid interaction across hospitality, healthcare, retail, and enterprise scenarios.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AOMAN FUTURE | Intelligent Service Robots',
    description: 'Discover AOMAN FUTURE service robots for delivery, cleaning, and humanoid interaction across hospitality, healthcare, retail, and enterprise scenarios.',
    url: '/',
    siteName: 'AOMAN FUTURE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AOMAN FUTURE | Intelligent Service Robots',
    description: 'Discover AOMAN FUTURE service robots for delivery, cleaning, and humanoid interaction across hospitality, healthcare, retail, and enterprise scenarios.',
  },
}

export default function HomePage() {
  return (
    <main className="text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-24 pb-20">
        {/* Dot-grid background */}
        <div className="dot-grid-bg absolute inset-0 opacity-[0.35] pointer-events-none" />
        {/* Gradient orbs */}
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
          style={{ background: 'var(--color-brand)' }} />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: 'var(--color-teal)' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[580px]">

            {/* Left: Text */}
            <div className="space-y-8 animate-fadeInUp">
              {/* Badge — no stock code */}
              <div className="inline-flex items-center gap-2 bg-brand-light border border-brand/20 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <span className="text-sm font-semibold text-brand">Award-winning AI Robotics Platform</span>
              </div>

              <h1 className="text-5xl lg:text-[3.5rem] font-black text-ink leading-[1.1] tracking-tight">
                Intelligent<br />
                <span className="gradient-text">Service Robots</span><br />
                for Modern Business
              </h1>

              <p className="text-xl text-ink-muted leading-relaxed max-w-lg">
                AI-powered robots that handle delivery, cleaning, and customer interaction —
                24/7, zero downtime. Trusted by 500+ global enterprises across 100+ countries.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <OpenInquiryButton
                  className="inline-flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-brand-hover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 animate-pulse-glow"
                >
                  Get a Free Quote →
                </OpenInquiryButton>
                <Link
                  href="/products/cruzr"
                  className="inline-flex items-center justify-center gap-2 border-2 border-line text-ink px-8 py-4 rounded-xl font-bold text-base hover:border-brand hover:text-brand transition-all duration-200"
                >
                  Explore Products
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-line">
                {[
                  { val: '1,800+', label: 'Patents Filed' },
                  { val: '100+', label: 'Countries' },
                  { val: '50,000+', label: 'Robots Deployed' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-black text-brand">{s.val}</div>
                    <div className="text-sm text-ink-subtle mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Hero image — 1:1 方框，渐入无浮动 */}
            <div className="relative animate-fadeInUp" style={{ animationDelay: '0.25s' }}>
              <div className="relative rounded-3xl overflow-hidden aspect-square max-w-[560px] mx-auto"
                style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDFA 100%)' }}>
                <div className="p-6">
                  <Image
                    src="/images/home/hero-robot.png"
                    alt="AOMAN AI Service Robot"
                    width={560}
                    height={560}
                    priority
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="w-full h-full object-contain animate-fadeIn"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-line">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-black text-ink">ISO 13482</div>
                    <div className="text-xs text-ink-subtle">Safety Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUSTED BY ────────────────────────────────────────────────── */}
      <section className="bg-surface-subtle border-y border-line py-12">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-semibold text-ink-subtle uppercase tracking-widest mb-8">
            Trusted by global enterprises
          </p>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 items-center">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center">
                {/* /images/home/partner-{name}.png */}
                <Image
                  src={p.src}
                  alt={p.name}
                  width={100}
                  height={36}
                  className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ──────────────────────────────────────────────────── */}
      <section className="bg-surface-subtle py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">
              Product Line
            </span>
            <h2 className="text-4xl font-black text-ink">Four Robots. One Platform.</h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              From delivery to deep cleaning to customer service — deploy the right robot for every scenario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-line card-hover overflow-hidden flex flex-col">
                <div className="aspect-square w-full flex items-center justify-center p-5 bg-white">
                  <Image
                    src={p.img}
                    alt={p.imgAlt}
                    width={280}
                    height={280}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-sm text-ink-muted mb-4 flex-1">{p.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-ink-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 mt-auto">
                    <Link
                      href={p.href}
                      className="flex-1 text-center border border-line text-ink text-sm font-semibold py-2.5 rounded-lg hover:border-brand hover:text-brand transition-colors"
                    >
                      {`View ${p.name} — ${p.badge} robot specs`}
                    </Link>
                    <OpenInquiryButton
                      className="flex-1 bg-brand text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-brand-hover transition-colors"
                    >
                      Get Quote
                    </OpenInquiryButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-dark bg-teal-light px-4 py-1.5 rounded-full">
              Solutions
            </span>
            <h2 className="text-4xl font-black text-ink">Built for Your Industry</h2>
            <p className="text-lg text-ink-muted max-w-2xl mx-auto">
              Purpose-built robot solutions tailored to the workflows and compliance requirements of each vertical.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-line card-hover overflow-hidden group flex flex-col">
                <div className="aspect-[3/2] relative overflow-hidden">
                  {/* /images/solutions/{slug}.jpg */}
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{s.icon}</span>
                    <h3 className="text-xl font-bold text-ink">{s.title}</h3>
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed mb-5">{s.desc}</p>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center text-sm font-semibold text-brand hover:gap-2 gap-1.5 transition-all"
                  >
                    View Case Studies →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ──────────────────────────────────────────────── */}
      <section className="bg-surface-subtle py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">
              Success Stories
            </span>
            <h2 className="text-4xl font-black text-ink">Real Results, Real Enterprises</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.company} className="bg-white rounded-2xl border border-line overflow-hidden card-hover">
                <div className={`h-2 bg-gradient-to-r ${c.color}`} />
                <div className="p-7">
                  <span className="text-xs font-bold uppercase tracking-widest text-ink-subtle">{c.category}</span>
                  <h3 className="text-lg font-bold text-ink mt-2 mb-3">{c.company}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{c.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <OpenInquiryButton
              className="inline-flex items-center gap-2 border-2 border-brand text-brand font-bold px-8 py-4 rounded-xl hover:bg-brand hover:text-white transition-all duration-200"
            >
              Discuss Your Use Case →
            </OpenInquiryButton>
          </div>
        </div>
      </section>

      {/* ─── TECHNOLOGY ────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-dark bg-teal-light px-4 py-1.5 rounded-full">
                Core Technology
              </span>
              <h2 className="text-4xl font-black text-ink">
                Built on a Decade of<br />
                <span className="gradient-text">AI Research</span>
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed">
                1,800+ patents across navigation, computer vision, and speech AI.
                Our technology stack is designed for enterprise reliability — not lab demonstrations.
              </p>
              <OpenInquiryButton
                className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-xl font-bold hover:bg-brand-hover transition-colors"
              >
                Request a Tech Demo →
              </OpenInquiryButton>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {techHighlights.map((t) => (
                <div key={t.title} className="bg-surface-subtle rounded-2xl p-6 border border-line hover:border-brand/30 hover:bg-brand-light/30 transition-all duration-200">
                  <div className="text-3xl mb-4">{t.icon}</div>
                  <h3 className="font-bold text-ink mb-2">{t.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWS ──────────────────────────────────────────────────────── */}
      <section className="bg-surface-subtle py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">
                Latest News
              </span>
              <h2 className="text-4xl font-black text-ink">News & Updates</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((n) => (
              <article key={n.title} className="bg-white rounded-2xl border border-line overflow-hidden card-hover flex flex-col">
                <div className="aspect-[3/2] relative">
                  {/* /images/home/news-{slug}.jpg */}
                  <Image
                    src={n.img}
                    alt={n.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold bg-brand-light text-brand px-2.5 py-1 rounded-full">{n.tag}</span>
                    <span className="text-xs text-ink-subtle">{n.date}</span>
                  </div>
                  <h3 className="font-bold text-ink leading-snug mb-3 line-clamp-2">{n.title}</h3>
                  <p className="text-sm text-ink-muted line-clamp-3">{n.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28">
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute inset-0 dot-grid-bg opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready to Deploy Intelligent Robots<br />in Your Business?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Get a free consultation with our robotics specialists. We&apos;ll design a solution
              tailored to your specific operational needs and ROI targets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OpenInquiryButton
                className="inline-flex items-center justify-center gap-2 bg-white text-brand px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
              >
                Request Free Consultation →
              </OpenInquiryButton>
              <Link
                href="/products/cruzr"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-200"
              >
                View All Products
              </Link>
            </div>
            <p className="text-white/50 text-sm">
              No commitment required · Response within 24 hours · Available in 100+ countries
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
