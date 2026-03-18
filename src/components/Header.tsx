'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useModalStore } from '@/store/modal'

export default function Header() {
  const { openModal } = useModalStore()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.10)' : '0 1px 20px rgba(0,0,0,0.06)',
          transition: 'box-shadow 0.3s ease',
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
        }}
      >
        <nav className="container mx-auto px-6 h-[70px] flex items-center justify-between gap-8">

          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="AOMAN FUTURE"
                width={280}
                height={70}
                priority
                sizes="210px"
                className="h-[52px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-7 flex-1 justify-center">
            <li>
              <Link href="/" className="nav-link">Home</Link>
            </li>

            {/* Products Dropdown */}
            <li className="nav-dropdown-wrapper">
              <div className="flex items-center gap-1 cursor-default nav-link">
                <span>Products</span>
                <svg className="nav-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} width={14} height={14} style={{ color: '#9CA3AF', flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
              <div className="nav-dropdown-panel">
                <Link href="/products/cruzr" className="dropdown-item">
                  <div className="dropdown-item-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} width={18} height={18}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">CRUZR</span>
                    <span className="dropdown-item-sub">Humanoid Service Robot</span>
                  </div>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/products/cleinbot-m79" className="dropdown-item">
                  <div className="dropdown-item-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} width={18} height={18}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">CLEINBOT M79</span>
                    <span className="dropdown-item-sub">Industrial Scrubbing Robot</span>
                  </div>
                </Link>
                <Link href="/products/cleinbot-cc201" className="dropdown-item">
                  <div className="dropdown-item-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} width={18} height={18}>
                      <circle cx="12" cy="12" r="7"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 003-3"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 01-3 3"/>
                      <circle cx="12" cy="7.5" r="0.6" fill="currentColor" stroke="none"/>
                    </svg>
                  </div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">CLEINBOT CC201</span>
                    <span className="dropdown-item-sub">Compact Cleaning Machine</span>
                  </div>
                </Link>
                <div className="dropdown-divider" />
                <Link href="/products/cadebot-l100" className="dropdown-item">
                  <div className="dropdown-item-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} width={18} height={18}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 11h16"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 11a6 6 0 0112 0"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 14h18"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v2a1 1 0 001 1h6a1 1 0 001-1v-2"/>
                      <circle cx="9.5" cy="19" r="1"/>
                      <circle cx="14.5" cy="19" r="1"/>
                    </svg>
                  </div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">CADEBOT L100</span>
                    <span className="dropdown-item-sub">Restaurant Delivery Robot</span>
                  </div>
                </Link>
              </div>
            </li>

            <li><Link href="/solutions" className="nav-link">Solutions</Link></li>
            <li><Link href="/technology" className="nav-link">Technology</Link></li>
            <li><Link href="/about" className="nav-link">About Us</Link></li>
          </ul>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button onClick={openModal} className="header-cta-btn hidden md:block">
              Get a Quote
            </button>
            <button
              className="mobile-menu-btn md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
            <div className="container mx-auto px-6 py-4">
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="block py-2.5 text-sm font-medium text-gray-700 border-b border-black/[0.04] hover:text-[#0066FF] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <div
                    className="flex items-center justify-between py-2.5 text-sm font-medium text-gray-700 border-b border-black/[0.04] cursor-pointer hover:text-[#0066FF] transition-colors"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  >
                    <span>Products</span>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} width={16} height={16}
                      style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: mobileProductsOpen ? '#0066FF' : '#9CA3AF' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                  {mobileProductsOpen && (
                    <div style={{ paddingLeft: 16, paddingTop: 4, paddingBottom: 4, background: 'rgba(0,102,255,0.02)', borderRadius: 8, marginTop: 4 }}>
                      <Link href="/products/cruzr" className="block py-2 px-3 text-sm text-gray-500 rounded-md hover:text-[#0066FF] hover:bg-[#0066FF]/5 transition-colors">CRUZR – Humanoid Service Robot</Link>
                      <Link href="/products/cleinbot-m79" className="block py-2 px-3 text-sm text-gray-500 rounded-md hover:text-[#0066FF] hover:bg-[#0066FF]/5 transition-colors">CLEINBOT M79 – Industrial Scrubbing Robot</Link>
                      <Link href="/products/cleinbot-cc201" className="block py-2 px-3 text-sm text-gray-500 rounded-md hover:text-[#0066FF] hover:bg-[#0066FF]/5 transition-colors">CLEINBOT CC201 – Compact Cleaning Machine</Link>
                      <Link href="/products/cadebot-l100" className="block py-2 px-3 text-sm text-gray-500 rounded-md hover:text-[#0066FF] hover:bg-[#0066FF]/5 transition-colors">CADEBOT L100 – Restaurant Delivery Robot</Link>
                    </div>
                  )}
                </li>
                <li><Link href="/solutions" className="block py-2.5 text-sm font-medium text-gray-700 border-b border-black/[0.04] hover:text-[#0066FF] transition-colors">Solutions</Link></li>
                <li><Link href="/technology" className="block py-2.5 text-sm font-medium text-gray-700 border-b border-black/[0.04] hover:text-[#0066FF] transition-colors">Technology</Link></li>
                <li><Link href="/about" className="block py-2.5 text-sm font-medium text-gray-700 border-b border-black/[0.04] hover:text-[#0066FF] transition-colors">About Us</Link></li>
                <li className="pt-2">
                  <button onClick={openModal} className="w-full header-cta-btn text-center">
                    Get a Quote
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
      {/* Spacer for fixed header */}
      <div className="h-[70px]" />
    </>
  )
}
