import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import OpenInquiryButton from '@/components/OpenInquiryButton'

const metrics = [
  { value: '1,800+', label: 'Patents Awarded', icon: 'M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' },
  { value: '70+', label: 'Countries Served', icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z' },
  { value: '50,000+', label: 'Robots Deployed', icon: 'M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' },
  { value: '50+', label: 'Fortune 500 Clients', icon: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' },
]

const timeline = [
  {
    year: '2012',
    title: 'Company Founded',
    desc: 'AOMAN Robotics established in Shenzhen, China, with a mission to bring intelligent humanoid robots into daily life. Initial focus on servo motor technology.',
    accent: 'brand',
  },
  {
    year: '2016',
    title: 'Alpha Humanoid Robots',
    desc: 'Launched Alpha series humanoid robots, achieving breakthrough in consumer robotics. Featured at CES, winning multiple international innovation awards.',
    accent: 'teal',
  },
  {
    year: '2018',
    title: 'Enterprise Market Entry',
    desc: 'Strategic pivot to B2B sector with CRUZR service robot. Deployed at major international airports and Fortune 500 corporate headquarters.',
    accent: 'brand',
  },
  {
    year: '2020',
    title: 'Product Portfolio Expansion',
    desc: 'Launched CADEBOT delivery robots and CLEINBOT cleaning machines. Major partnerships with global hospitality chains and real estate developers.',
    accent: 'teal',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    desc: 'Established subsidiaries in USA, Japan, and Europe. Achieved 10,000+ robots deployed milestone across 50+ countries.',
    accent: 'brand',
  },
  {
    year: '2023',
    title: 'Capital Investment & Next-Gen R&D',
    desc: 'Secured major funding round to accelerate next-generation humanoid robot and AI research programs. Expanded global service network to 70+ countries.',
    accent: 'teal',
    highlight: true,
  },
]

const values = [
  { color: 'bg-brand', title: 'Innovation First', desc: 'We relentlessly pursue cutting-edge technology and breakthrough solutions, never settling for incremental improvements when revolutionary advancements are possible.', icon: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z' },
  { color: 'bg-teal', title: 'Customer Success', desc: "Our customers' success is our success. We listen deeply, respond quickly, and continuously adapt our solutions to meet evolving needs and exceed expectations.", icon: 'M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z' },
  { color: 'bg-brand', title: 'Pursuit of Excellence', desc: 'Quality is non-negotiable. From design to deployment, we demand the highest standards in every aspect of our work, ensuring reliability and longevity.', icon: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' },
  { color: 'bg-teal', title: 'Teamwork & Openness', desc: 'Great achievements require collective effort. We foster a culture of collaboration, knowledge sharing, and mutual respect across all teams and partner organizations.', icon: 'M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' },
  { color: 'bg-brand', title: 'Integrity & Responsibility', desc: 'We uphold the highest ethical standards, taking full responsibility for our actions and their impact on society, the environment, and future generations.', icon: 'M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' },
  { color: 'bg-teal', title: 'Speed & Adaptability', desc: 'In a rapidly evolving industry, agility is survival. We move fast, learn faster, and pivot decisively to seize opportunities and overcome challenges.', icon: 'M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z' },
]

const awards = [
  { title: 'CES Innovation Award', sub: '2019 · 2020 · 2021', icon: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' },
  { title: 'Red Dot Design Award', sub: 'Best of the Best 2020', icon: 'M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' },
  { title: 'Forbes Asia 100', sub: 'Companies to Watch 2022', icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' },
  { title: 'Tech Innovation Leader', sub: 'China Tech Awards 2023', icon: 'M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' },
]

const aboutPartners = [
  { name: 'Tencent', src: '/images/about/partner-tencent.webp' },
  { name: 'Huawei', src: '/images/about/partner-huawei.webp' },
  { name: 'China Mobile', src: '/images/about/partner-china-mobile.webp' },
  { name: 'China Unicom', src: '/images/about/partner-china-unicom.webp' },
  { name: 'ICBC', src: '/images/about/partner-icbc.webp' },
  { name: 'Bank of China', src: '/images/about/partner-bank-of-china.webp' },
]

export const metadata: Metadata = {
  title: 'About AOMAN FUTURE | Robotics Company Overview',
  description: 'Learn about AOMAN FUTURE, our robotics history, R&D milestones, global deployment footprint, and the values behind our intelligent service robots.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About AOMAN FUTURE | Robotics Company Overview',
    description: 'Learn about AOMAN FUTURE, our robotics history, R&D milestones, global deployment footprint, and the values behind our intelligent service robots.',
    url: '/about',
    siteName: 'AOMAN FUTURE',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="text-ink">

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative hero-gradient text-white py-28 overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Global Leader in AI-Powered Robotics
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Pioneering the Future of<br />
            <span className="text-teal">Intelligent Robotics</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-white/85 leading-relaxed max-w-3xl mx-auto">
            Since 2012, AOMAN Robotics has been at the forefront of humanoid robots and AI-powered
            service robotics, revolutionizing industries with cutting-edge innovation and full-stack technology.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <OpenInquiryButton
              className="inline-flex items-center justify-center bg-white text-brand px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Partner With Us
            </OpenInquiryButton>
            <a
              href="#company-story"
              className="inline-flex items-center justify-center border-2 border-white/60 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Our Story →
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ─── KEY METRICS ──────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {metrics.map((m) => (
              <div key={m.label} className="text-center group">
                <div className="hero-gradient w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d={m.icon} />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-black text-ink mb-2">{m.value}</div>
                <p className="text-ink-muted font-semibold text-sm">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────────────────── */}
      <section id="company-story" className="bg-surface-subtle py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-ink">
              Our Journey to <span className="gradient-text">Robotics Leadership</span>
            </h2>
            <p className="text-xl text-ink-muted leading-relaxed">
              From a visionary startup in Shenzhen to a global robotics powerhouse —
              a story of relentless innovation and unwavering commitment to excellence.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Center line (desktop) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 hero-gradient hidden md:block" />

            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={item.year} className={`flex flex-col md:flex-row items-center mb-14 last:mb-0 animate-fadeInUp`}
                  style={{ animationDelay: `${i * 100}ms` }}>

                  {/* Left slot */}
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-14 md:text-right' : 'hidden md:block'}`}>
                    {isLeft && (
                      <div className={`inline-block rounded-2xl p-8 ${item.highlight ? 'hero-gradient text-white shadow-2xl' : 'bg-white border border-line shadow-md hover:shadow-xl transition-shadow'}`}>
                        <div className={`text-5xl font-black mb-3 ${item.highlight ? 'text-white' : 'text-brand'}`}>{item.year}</div>
                        <h3 className={`text-xl font-bold mb-2 ${item.highlight ? 'text-white' : 'text-ink'}`}>{item.title}</h3>
                        <p className={`text-sm leading-relaxed ${item.highlight ? 'text-white/85' : 'text-ink-muted'}`}>{item.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="relative flex-shrink-0 w-14 h-14 hero-gradient rounded-full flex items-center justify-center shadow-xl z-10 my-4 md:my-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item.highlight && (
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-teal rounded-full animate-pulse" />
                    )}
                  </div>

                  {/* Right slot */}
                  <div className={`md:w-1/2 ${!isLeft ? 'md:pl-14 md:text-left' : 'hidden md:block'}`}>
                    {!isLeft && (
                      <div className={`inline-block rounded-2xl p-8 ${item.highlight ? 'hero-gradient text-white shadow-2xl' : 'bg-white border border-line shadow-md hover:shadow-xl transition-shadow'}`}>
                        <div className={`text-5xl font-black mb-3 ${item.highlight ? 'text-white' : 'text-brand'}`}>{item.year}</div>
                        <h3 className={`text-xl font-bold mb-2 ${item.highlight ? 'text-white' : 'text-ink'}`}>{item.title}</h3>
                        <p className={`text-sm leading-relaxed ${item.highlight ? 'text-white/85' : 'text-ink-muted'}`}>{item.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile card (always visible on small screens) */}
                  <div className={`md:hidden w-full mt-2 rounded-2xl p-6 text-center ${item.highlight ? 'hero-gradient text-white shadow-xl' : 'bg-white border border-line'}`}>
                    <div className={`text-4xl font-black mb-2 ${item.highlight ? 'text-white' : 'text-brand'}`}>{item.year}</div>
                    <h3 className={`text-lg font-bold mb-1 ${item.highlight ? 'text-white' : 'text-ink'}`}>{item.title}</h3>
                    <p className={`text-sm ${item.highlight ? 'text-white/85' : 'text-ink-muted'}`}>{item.desc}</p>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-teal-light px-4 py-1.5 rounded-full">
              Purpose
            </span>
            <h2 className="text-4xl font-black text-ink">Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="rounded-3xl p-10 border border-brand/20 bg-brand-light/40 hover:shadow-xl transition-shadow">
              <div className="hero-gradient w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-ink mb-4">Our Mission</h3>
              <p className="text-lg text-ink-muted leading-relaxed mb-6">
                To make intelligent robots accessible and beneficial for everyone, transforming how businesses
                operate and how people live through innovative robotics solutions powered by artificial intelligence.
              </p>
              <ul className="space-y-3">
                {['Democratize advanced robotics technology', 'Enhance operational efficiency across industries', 'Improve quality of life through intelligent automation'].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ink-muted">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="rounded-3xl p-10 border border-teal/20 bg-teal-light/40 hover:shadow-xl transition-shadow">
              <div className="bg-teal w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-ink mb-4">Our Vision</h3>
              <p className="text-lg text-ink-muted leading-relaxed mb-6">
                To become the world&apos;s most trusted and innovative robotics company, leading the transition
                into a future where intelligent robots and humans coexist harmoniously, creating unprecedented
                value for society.
              </p>
              <ul className="space-y-3">
                {['Global leadership in humanoid robotics', 'Ecosystem of seamlessly integrated AI robotics', 'Sustainable and ethical robotics development'].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ink-muted">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ──────────────────────────────────────────────── */}
      <section className="bg-surface-subtle py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">
              Core Values
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-ink">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-ink-muted">These principles guide every decision we make and every robot we build.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-line card-hover">
                <div className={`${v.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={v.icon} clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{v.title}</h3>
                <p className="text-ink-muted leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AWARDS ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-white/10 px-4 py-1.5 rounded-full">
              Recognition
            </span>
            <h2 className="text-4xl md:text-5xl font-black">
              Awards & <span className="text-teal">Recognition</span>
            </h2>
            <p className="text-xl text-white/60">Our innovation and excellence have been recognized by leading industry organizations worldwide.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {awards.map((a) => (
              <div key={a.title}
                className="bg-white rounded-2xl p-7 text-center hover:scale-105 transition-transform duration-300 border border-line text-ink">
                <div className="hero-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d={a.icon} />
                  </svg>
                </div>
                <h4 className="font-bold text-base mb-1.5 text-ink">{a.title}</h4>
                <p className="text-xs text-ink-muted">{a.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STRATEGIC PARTNERS ───────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">
              Partners
            </span>
            <h2 className="text-4xl font-black text-ink">
              Trusted by <span className="gradient-text">Global Leaders</span>
            </h2>
            <p className="text-xl text-ink-muted">We collaborate with Fortune 500 companies and leading institutions worldwide.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">
            {aboutPartners.map((p) => (
              <div key={p.name} className="flex items-center justify-center p-5 bg-surface-subtle rounded-xl border border-line hover:border-brand/30 hover:bg-brand-light/20 transition-all">
                {/* /images/about/partner-{name}.webp */}
                <Image
                  src={p.src}
                  alt={p.name}
                  width={120}
                  height={45}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 120px"
                  className="h-10 w-auto opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28">
        <div className="hero-gradient absolute inset-0" />
        <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Join 50+ Fortune 500 companies and 50,000+ deployed robots worldwide.
              Let&apos;s discuss how AOMAN can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OpenInquiryButton
                className="inline-flex items-center justify-center gap-2 bg-white text-brand px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200"
              >
                Schedule a Consultation →
              </OpenInquiryButton>
              <Link
                href="/products/cruzr"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-200"
              >
                Explore Products
              </Link>
            </div>
            <p className="text-white/50 text-sm">✉️ info@aomanbot.com</p>
          </div>
        </div>
      </section>

    </main>
  )
}
