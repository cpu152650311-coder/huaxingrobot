import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import OpenInquiryButton from '@/components/OpenInquiryButton'

const solutions = [
  {
    title: 'Smart Catering Solution',
    tag: 'Hospitality',
    tagColor: 'bg-brand text-white',
    desc: 'Revolutionize restaurant operations with AI-powered delivery robots. Reduce labor costs by 60%, increase table turnover by 40%.',
    features: ['Autonomous navigation & obstacle avoidance', 'Multi-table delivery capacity', 'POS & kitchen system integration'],
    img: '/images/solutions/smart-catering.jpg',
  },
  {
    title: 'Smart Cleaning Solution',
    tag: 'Facility Management',
    tagColor: 'bg-teal text-white',
    desc: '24/7 autonomous cleaning for airports, malls, offices. Cut cleaning costs by 50%, improve hygiene standards significantly.',
    features: ['Intelligent path planning & mapping', 'Multi-mode cleaning (scrub/vacuum/mop)', 'Cloud-based fleet management'],
    img: '/images/solutions/smart-cleaning.jpg',
  },
  {
    title: 'Smart Exhibition Solution',
    tag: 'Events & Museums',
    tagColor: 'bg-[#FF6B6B] text-white',
    desc: 'Enhance visitor experience with interactive guide robots. Multilingual support, AR content, 24/7 availability.',
    features: ['AI-powered voice interaction (10+ languages)', 'Guided tour & exhibition introduction', 'Visitor analytics & heat mapping'],
    img: '/images/solutions/smart-exhibition.jpg',
  },
  {
    title: 'Smart Logistics Solution',
    tag: 'Warehousing',
    tagColor: 'bg-[#FF9F43] text-white',
    desc: 'Optimize warehouse operations with intelligent material handling. Boost efficiency by 3x, reduce errors by 95%.',
    features: ['Autonomous picking & transporting', 'WMS/ERP system integration', 'Multi-robot fleet coordination'],
    img: '/images/solutions/smart-logistics.jpg',
  },
  {
    title: 'Smart Healthcare Solution',
    tag: 'Healthcare',
    tagColor: 'bg-teal text-white',
    desc: 'Support medical staff with intelligent delivery & disinfection. Reduce infection risk, improve operational efficiency.',
    features: ['Medicine & medical supply delivery', 'UV-C disinfection capabilities', 'HIS/EMR system integration'],
    img: '/images/solutions/smart-healthcare.jpg',
  },
  {
    title: 'Smart Retail Solution',
    tag: 'Retail',
    tagColor: 'bg-[#A29BFE] text-white',
    desc: 'Elevate shopping experience with interactive service robots. Product recommendations, inventory check, customer engagement.',
    features: ['AI-powered product recommendations', 'Customer behavior analytics', 'Promotional content display'],
    img: '/images/solutions/smart-retail.jpg',
  },
]

const industries = [
  { icon: '🏨', label: 'Hotels & Resorts' },
  { icon: '✈️', label: 'Airports' },
  { icon: '🏬', label: 'Shopping Malls' },
  { icon: '🏥', label: 'Hospitals' },
  { icon: '🎓', label: 'Universities' },
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '🏛️', label: 'Government' },
  { icon: '🏢', label: 'Office Buildings' },
  { icon: '🎭', label: 'Entertainment' },
  { icon: '🚆', label: 'Railways' },
]

const cases = [
  {
    location: 'AVIATION · PARIS, FRANCE',
    name: 'Paris Charles de Gaulle Airport',
    desc: 'Deployed 50+ CRUZR service robots for passenger guidance, info queries, and wayfinding.',
    metrics: [{ label: 'Passenger Satisfaction', value: '+35%' }, { label: 'Staff Workload', value: '-40%' }, { label: 'Languages Supported', value: '12+' }],
    color: 'from-brand to-brand-hover',
    img: '/images/solutions/case-paris-airport.jpg',
  },
  {
    location: 'MANUFACTURING · SHENZHEN, CHINA',
    name: 'BYD Smart Factory',
    desc: 'Integrated 120+ logistics robots for material handling and inventory management.',
    metrics: [{ label: 'Operational Efficiency', value: '+250%' }, { label: 'Error Rate', value: '-95%' }, { label: 'ROI Achieved', value: '8 mo.' }],
    color: 'from-[#FF6B6B] to-[#FF9F43]',
    img: '/images/solutions/case-byd-factory.jpg',
  },
  {
    location: 'HOSPITALITY · BEIJING, CHINA',
    name: 'Haidilao Smart Restaurant',
    desc: '30+ delivery robots serving 200+ tables daily in flagship location.',
    metrics: [{ label: 'Labor Cost Savings', value: '-60%' }, { label: 'Table Turnover', value: '+45%' }, { label: 'Satisfaction', value: '98.7%' }],
    color: 'from-teal to-teal-hover',
    img: '/images/solutions/case-haidilao.jpg',
  },
]

const reasons = [
  { icon: '🏆', title: 'Industry Pioneer', desc: 'First company to develop humanoid robots in China. Over a decade of commercial robotics R&D and deployment expertise.' },
  { icon: '🔬', title: 'Deep Tech Expertise', desc: '1,800+ patents filed globally. Full-stack AI & robotics R&D capabilities in-house.' },
  { icon: '🌍', title: 'Global Presence', desc: '70+ countries & regions served. 24/7 technical support & on-site training.' },
  { icon: '🤝', title: 'Proven Track Record', desc: '1,000+ enterprise clients. 50,000+ robots in operation worldwide.' },
]

export const metadata: Metadata = {
  title: 'Robotics Solutions | AOMAN FUTURE',
  description: 'Explore AOMAN FUTURE robotics solutions for hospitality, healthcare, logistics, retail, exhibitions, and commercial automation.',
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'Robotics Solutions | AOMAN FUTURE',
    description: 'Explore AOMAN FUTURE robotics solutions for hospitality, healthcare, logistics, retail, exhibitions, and commercial automation.',
    url: '/solutions',
    siteName: 'AOMAN FUTURE',
    type: 'website',
  },
}

export default function SolutionsPage() {
  return (
    <main className="text-ink">

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Industry-Leading Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Transform Your Business with<br />
              <span className="text-teal">Intelligent Robotics</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/85 leading-relaxed max-w-3xl mx-auto">
              From smart catering to intelligent cleaning, AOMAN provides end-to-end automation solutions
              trusted by 1,000+ enterprises worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OpenInquiryButton className="inline-flex items-center justify-center bg-white text-brand px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                Request Custom Solution →
              </OpenInquiryButton>
              <a href="#solutions-grid" className="inline-flex items-center justify-center border-2 border-white/60 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                Explore Solutions
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-white/20">
              {[['1,000+', 'Enterprise Clients'], ['50,000+', 'Robots Deployed'], ['20+', 'Industries Served'], ['98.5%', 'Client Satisfaction']].map(([v, l]) => (
                <div key={l}>
                  <div className="text-4xl font-black mb-1">{v}</div>
                  <div className="text-white/70 text-sm">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS GRID ─────────────────────────────────── */}
      <section id="solutions-grid" className="py-24 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-black text-ink">Comprehensive Robotics Solutions</h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">Industry-specific automation designed to boost efficiency, reduce costs, and enhance customer experience.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl overflow-hidden border border-line card-hover flex flex-col">
                <div className="aspect-[3/2] relative">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                  <div className={`absolute top-4 right-4 ${s.tagColor} text-xs font-bold px-3 py-1.5 rounded-full`}>{s.tag}</div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-ink mb-3">{s.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                        <svg className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <OpenInquiryButton className="w-full bg-brand text-white py-3 rounded-xl font-semibold hover:bg-brand-hover transition-colors text-sm">
                    Get Quote →
                  </OpenInquiryButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-teal-light px-4 py-1.5 rounded-full">Coverage</span>
            <h2 className="text-4xl font-black text-ink">Trusted Across 20+ Industries</h2>
            <p className="text-xl text-ink-muted max-w-3xl mx-auto">From Fortune 500 companies to government agencies, our solutions are deployed worldwide.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {industries.map((ind) => (
              <div key={ind.label} className="text-center group">
                <div className="w-18 h-18 w-16 h-16 mx-auto mb-3 hero-gradient rounded-2xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  {ind.icon}
                </div>
                <p className="font-semibold text-ink-muted text-sm">{ind.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES ───────────────────────────────────── */}
      <section className="py-24 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">Case Studies</span>
            <h2 className="text-4xl font-black text-ink">Real Results from Real Clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div key={c.name} className="bg-white rounded-2xl overflow-hidden border border-line card-hover flex flex-col">
                <div className="aspect-[2/1] relative overflow-hidden">
                  <Image src={c.img} alt={c.name} fill className="object-cover object-center" />
                  <div className={`absolute inset-0 bg-gradient-to-b ${c.color} opacity-60`} />
                </div>
                <div className="p-7">
                  <span className="text-xs font-bold uppercase tracking-widest text-ink-subtle">{c.location}</span>
                  <h3 className="text-lg font-bold text-ink mt-1 mb-2">{c.name}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-5">{c.desc}</p>
                  <div className="space-y-2 pt-4 border-t border-line">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="flex justify-between items-center">
                        <span className="text-sm text-ink-muted">{m.label}</span>
                        <span className="text-teal font-bold text-lg">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY AOMAN ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand-light px-4 py-1.5 rounded-full">Why Us</span>
            <h2 className="text-4xl font-black text-ink">Why Leading Enterprises Choose AOMAN</h2>
            <p className="text-xl text-ink-muted">Full-stack technology, proven expertise, global support.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-6xl mx-auto">
            {reasons.map((r) => (
              <div key={r.title} className="text-center p-8 rounded-2xl bg-surface-subtle border border-line hover:border-brand/30 hover:shadow-lg transition-all">
                <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">{r.icon}</div>
                <h3 className="text-lg font-bold text-ink mb-2">{r.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{r.desc}</p>
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
            <h2 className="text-4xl lg:text-5xl font-black text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/80">Join 1,000+ enterprises who trusted AOMAN to automate operations, reduce costs, and delight customers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OpenInquiryButton className="inline-flex items-center justify-center bg-white text-brand px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                Get Custom Solution →
              </OpenInquiryButton>
              <Link href="/products/cruzr" className="inline-flex items-center justify-center border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                View All Products
              </Link>
            </div>
            <p className="text-white/50 text-sm">✅ Free consultation &nbsp;•&nbsp; ✅ ROI analysis &nbsp;•&nbsp; ✅ Pilot program available</p>
          </div>
        </div>
      </section>

    </main>
  )
}
