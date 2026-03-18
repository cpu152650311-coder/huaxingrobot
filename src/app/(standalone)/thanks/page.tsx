import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | AOMAN FUTURE',
  description: 'Thank you for contacting AOMAN FUTURE. Our robotics team will respond to your inquiry within 24 hours.',
  alternates: {
    canonical: '/thanks',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">

      {/* Logo */}
      <div className="mb-12">
        <Image
          src="/logo.png"
          alt="AOMAN FUTURE"
          width={180}
          height={48}
          className="h-11 w-auto object-contain mx-auto"
        />
      </div>

      {/* Checkmark circle */}
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center mb-8 mx-auto"
        style={{ background: 'linear-gradient(135deg, #0066FF 0%, #00D4AA 100%)' }}
      >
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-black text-ink mb-4">
        Thank You!
      </h1>

      {/* Subtext */}
      <p className="text-lg text-ink-muted leading-relaxed max-w-md mb-10">
        Your inquiry has been received. Our team will get back to you within{' '}
        <span className="font-bold text-ink">24 hours</span>.
      </p>

      {/* Back Home button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-brand text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-brand-hover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
      >
        ← Back Home
      </Link>

      {/* Trust note */}
      <p className="mt-8 text-sm text-ink-subtle">
        No commitment required · Available in 100+ countries
      </p>

    </main>
  )
}
