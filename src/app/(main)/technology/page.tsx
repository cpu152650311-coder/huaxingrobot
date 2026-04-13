import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import OpenInquiryButton from '@/components/OpenInquiryButton'

const pillars = [
  {
    gradient: 'from-brand to-teal',
    title: 'Motion Control & Servos',
    desc: 'High-torque servo motors with 0.001° precision enabling human-like agility. 40+ degrees of freedom for complex movements.',
    features: ['Real-time force feedback', 'Collision avoidance algorithms', 'Dynamic balance on uneven surfaces'],
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    gradient: 'from-teal to-brand',
    title: 'Computer Vision AI',
    desc: 'Multi-modal visual perception with RGB-D cameras, LiDAR, and stereo vision for 360° environment understanding.',
    features: ['Face & gesture recognition (99.9% accuracy)', '3D object detection & tracking', 'Semantic scene understanding'],
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    gradient: 'from-brand to-[#1A1A1A]',
    title: 'Voice Interaction',
    desc: 'Natural language processing with multi-language support, emotion recognition, and contextual conversation capabilities.',
    features: ['50+ languages & dialects', 'Noise cancellation up to 85dB', 'Intent classification with 96% accuracy'],
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
  },
  {
    gradient: 'from-teal to-[#1A1A1A]',
    title: 'SLAM & Navigation',
    desc: 'Simultaneous Localization and Mapping with cm-level precision. Dynamic path planning in real-time crowded environments.',
    features: ['Multi-floor mapping support', 'Elevator & automatic door integration', 'Crowd navigation with social awareness'],
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  },
  {
    gradient: 'from-brand to-teal',
    title: 'Cloud Intelligence Platform',
    desc: 'Centralized fleet management, continuous learning from big data, and remote monitoring with real-time analytics dashboard.',
    features: ['OTA updates & remote diagnostics', 'Multi-robot task coordination', 'Predictive maintenance AI'],
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  },
  {
    gradient: 'from-[#1A1A1A] to-brand',
    title: 'Emotional Intelligence',
    desc: 'Affective computing engine enabling robots to recognize, interpret, and respond to human emotions naturally and empathetically.',
    features: ['Facial expression analysis (7 emotions)', 'Tone & sentiment detection', 'Personalized interaction memory'],
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

const patentBreakdown = [
  { label: 'AI & Machine Learning', pct: 45 },
  { label: 'Motion Control & Robotics', pct: 30 },
  { label: 'Computer Vision & Sensors', pct: 15 },
  { label: 'Cloud & IoT Infrastructure', pct: 10 },
]

const techPartners = ['Tencent', 'Huawei', 'NVIDIA', 'MIT', 'Qualcomm', 'Intel']

const partnerStats = [
  { value: '50+', title: 'Strategic Partners', desc: 'Tech giants & universities worldwide' },
  { value: '15', title: 'Innovation Labs', desc: 'Across China, US, Japan, Europe' },
  { value: '$200M+', title: 'Annual R&D Investment', desc: '15% of revenue reinvested' },
]

export const metadata: Metadata = {
  title: 'Robotics Technology | AOMAN FUTURE',
  description: 'Discover AOMAN FUTURE core robotics technologies including SLAM navigation, computer vision, voice AI, cloud fleet management, and intelligent control.',
  alternates: {
    canonical: '/technology',
  },
  openGraph: {
    title: 'Robotics Technology | AOMAN FUTURE',
    description: 'Discover AOMAN FUTURE core robotics technologies including SLAM navigation, computer vision, voice AI, cloud fleet management, and intelligent control.',
    url: '/technology',
    siteName: 'AOMAN FUTURE',
    type: 'website',
  },
}

export default function TechnologyPage() {
  return (
    <main className="text-ink">

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand rounded-full blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div className="space-y-8 animate-fadeInUp">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-teal mr-2 animate-pulse" />
                Full-Stack AI Technology
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                Innovation Through<br />
                <span className="gradient-text">Technology</span>
              </h1>
              <p className="text-xl text-white/75 leading-relaxed">
                Pioneering the future of robotics with <strong className="text-white">1,800+ patents</strong> in AI, motion control, computer vision, and intelligent interaction systems.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[['1,800+', 'Patents Filed'], ['15+', 'Tech Centers'], ['500+', 'R&D Engineers']].map(([v, l]) => (
                  <div key={l} className="text-center border-r last:border-0 border-white/20">
                    <div className="text-3xl font-black text-teal mb-1">{v}</div>
                    <div className="text-xs text-white/60">{l}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <OpenInquiryButton className="inline-flex items-center justify-center bg-white text-brand px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                  Partner with Us →
                </OpenInquiryButton>
                <a href="#tech-overview" className="inline-flex items-center justify-center border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                  Explore Tech Stack
                </a>
              </div>
            </div>

            {/* Right: hero visual */}
            <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <Image
                src="/images/technology/hero-visual.jpg"
                alt="AI Technology Visualization"
                width={600}
                height={700}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl shadow-2xl animate-pulse-glow w-full"
              />
              <div className="absolute -top-5 -right-5 bg-white text-brand px-5 py-3 rounded-full shadow-xl font-bold text-sm flex items-center gap-2">
                <span className="text-xl">🧠</span> Neural Networks
              </div>
              <div className="absolute bottom-10 -left-5 bg-teal text-white px-5 py-3 rounded-full shadow-xl font-bold text-sm flex items-center gap-2">
                <span className="text-xl">👁️</span> Computer Vision
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH PILLARS ───────────────────────────────────── */}
      <section id="tech-overview" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">Core Technology</span>
            <h2 className="text-4xl md:text-5xl font-black text-ink">5 Core Technology Pillars</h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">
              Our full-stack AI architecture powers robots with human-level intelligence, precision motion, and seamless interaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-surface-subtle border-2 border-line rounded-2xl p-8 hover:border-brand hover:shadow-xl transition-all duration-300 card-hover">
                <div className={`w-18 h-18 w-16 h-16 bg-gradient-to-br ${p.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={p.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{p.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                      <svg className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PATENTS & R&D ──────────────────────────────────── */}
      <section className="py-24 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-teal-light px-4 py-1.5 rounded-full mb-4">R&D Strength</span>
                <h2 className="text-4xl md:text-5xl font-black text-ink">
                  Innovation Powered by<br /><span className="gradient-text">1,800+ Patents</span>
                </h2>
              </div>
              <p className="text-xl text-ink-muted leading-relaxed">
                Our R&D team of 500+ engineers across 15 global innovation centers continuously push the boundaries of robotics technology.
              </p>
              <div className="space-y-6">
                {patentBreakdown.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-ink text-sm">{item.label}</span>
                      <span className="text-brand font-bold text-sm">{item.pct}%</span>
                    </div>
                    <div className="h-2.5 bg-line rounded-full overflow-hidden">
                      <div className="h-full hero-gradient rounded-full transition-all duration-1000" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <OpenInquiryButton className="inline-flex items-center justify-center bg-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-hover transition">
                  License Our Technology
                </OpenInquiryButton>
                <Link href="/about" className="inline-flex items-center justify-center border-2 border-brand text-brand px-8 py-4 rounded-xl font-bold hover:bg-brand hover:text-white transition text-center">
                  R&D Centers
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/technology/rd-lab.jpg"
                alt="AOMAN R&D Lab"
                width={640}
                height={720}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute top-8 -left-6 bg-white p-5 rounded-xl shadow-xl border-2 border-teal">
                <div className="text-3xl font-black text-brand mb-1">1,800+</div>
                <div className="text-xs font-semibold text-ink-muted">Granted Patents</div>
              </div>
              <div className="absolute bottom-12 -right-6 bg-white p-5 rounded-xl shadow-xl border-2 border-brand">
                <div className="text-3xl font-black text-teal mb-1">500+</div>
                <div className="text-xs font-semibold text-ink-muted">R&D Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GLOBAL PARTNERSHIPS ────────────────────────────── */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-white/10 px-4 py-1.5 rounded-full">Collaboration</span>
            <h2 className="text-4xl md:text-5xl font-black">Global Technology Partnerships</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">Collaborating with world-leading tech giants and research institutions.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto mb-14">
            {techPartners.map((p) => (
              <div key={p} className="bg-white/10 backdrop-blur-sm p-5 rounded-xl flex items-center justify-center h-20 hover:bg-white/20 transition">
                {/* /images/technology/partner-{name}.png */}
                <Image
                  src={`https://placehold.co/140x48/FFFFFF/1A1A1A?text=${encodeURIComponent(p)}`}
                  alt={p}
                  width={120}
                  height={40}
                  sizes="120px"
                  className="h-9 w-auto opacity-80"
                />
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {partnerStats.map((s, i) => (
              <div key={s.title} className={`text-center ${i === 1 ? 'border-l border-r border-white/20 px-8' : ''}`}>
                <div className="text-5xl font-black text-teal mb-2">{s.value}</div>
                <div className="text-lg font-semibold mb-1">{s.title}</div>
                <p className="text-sm text-white/50">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-7">
            <h2 className="text-4xl lg:text-5xl font-black text-white">Ready to Integrate Our Technology?</h2>
            <p className="text-xl text-white/80">Whether you&apos;re building custom robotics solutions, licensing our AI, or partnering on R&D — let&apos;s innovate together.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OpenInquiryButton className="inline-flex items-center justify-center bg-white text-brand px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                Schedule Tech Consultation
              </OpenInquiryButton>
              <OpenInquiryButton className="inline-flex items-center justify-center border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                Developer Support →
              </OpenInquiryButton>
            </div>
            <p className="text-white/50 text-sm">✅ Open API Access &nbsp;•&nbsp; ✅ Technology Licensing &nbsp;•&nbsp; ✅ Custom R&D</p>
          </div>
        </div>
      </section>

    </main>
  )
}
