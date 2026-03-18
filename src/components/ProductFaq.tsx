'use client'

import { useState } from 'react'

type FaqItem = {
  q: string
  a: string
}

type ProductFaqProps = {
  items: FaqItem[]
  accent?: 'brand' | 'teal'
}

const themeClasses = {
  brand: {
    item: 'bg-surface-subtle',
    hover: 'hover:bg-brand-light/30',
    icon: 'text-brand',
  },
  teal: {
    item: 'bg-white',
    hover: 'hover:bg-teal-light/30',
    icon: 'text-teal',
  },
} as const

export default function ProductFaq({
  items,
  accent = 'brand',
}: ProductFaqProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const theme = themeClasses[accent]

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((faq, i) => (
        <div key={faq.q} className={`${theme.item} rounded-xl border border-line overflow-hidden`}>
          <button
            type="button"
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className={`w-full flex items-center justify-between p-5 text-left transition ${theme.hover}`}
          >
            <span className="font-bold text-ink pr-4 text-sm">{faq.q}</span>
            <svg
              className={`w-5 h-5 flex-shrink-0 transition-transform ${theme.icon} ${openFaq === i ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openFaq === i && (
            <div className="px-5 pb-5 text-ink-muted text-sm leading-relaxed border-t border-line pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
