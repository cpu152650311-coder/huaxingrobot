'use client'

import { useModalStore } from '@/store/modal'
import { useEffect, useState } from 'react'

export default function InquiryModal() {
  const { isOpen, closeModal } = useModalStore()
  const [nextUrl, setNextUrl] = useState('')

  // Set _next URL after mount (absolute URL required by formsubmit.co)
  useEffect(() => {
    setNextUrl(`${window.location.origin}/thanks`)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeModal()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeModal])

  return (
    <div
      id="inquiryModal"
      className={`modal-overlay ${isOpen ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
    >
      <div className="modal-panel">

        {/* Header */}
        <div className="modal-header-bg">
          <button className="modal-close-btn" onClick={closeModal} aria-label="Close">
            <svg width={14} height={14} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 10, padding: 8, display: 'inline-flex', flexShrink: 0 }}>
                <svg width={20} height={20} fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.375rem', fontWeight: 800, lineHeight: 1.2, margin: 0 }}>
                Get a Free Quote
              </h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.838rem', lineHeight: 1.5, margin: 0, paddingLeft: 44 }}>
              Tell us your needs — we&apos;ll respond within <strong style={{ color: '#fff' }}>24 hours</strong>
            </p>
          </div>
        </div>

        {/* Form Body */}
        <div className="modal-body">
          <form
            action="https://formsubmit.co/3ad82ea13d809fc02ae68f17c2ef5603"
            method="POST"
          >
            {/* FormSubmit hidden config */}
            <input type="hidden" name="_subject" value="New Robotics Inquiry"/>
            <input type="hidden" name="_template" value="table"/>
            {nextUrl && <input type="hidden" name="_next" value={nextUrl}/>}
            <input type="text" name="_honey" style={{ display: 'none', visibility: 'hidden', position: 'absolute' }}/>

            {/* Name + Company */}
            <div className="modal-row">
              <div>
                <label className="modal-label">
                  <span className="required-dot"/>Name
                </label>
                <div className="input-wrapper">
                  <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <input type="text" name="name" className="modal-input" placeholder="Full name" required autoComplete="name"/>
                </div>
              </div>
              <div>
                <label className="modal-label">Company</label>
                <div className="input-wrapper">
                  <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  <input type="text" name="company" className="modal-input" placeholder="Company name" autoComplete="organization"/>
                </div>
              </div>
            </div>

            {/* Phone + Email */}
            <div className="modal-row">
              <div>
                <label className="modal-label">
                  <span className="required-dot"/>Phone
                </label>
                <div className="input-wrapper">
                  <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <input type="tel" name="phone" className="modal-input" placeholder="+86 / +1 / ..." required autoComplete="tel"/>
                </div>
              </div>
              <div>
                <label className="modal-label">
                  <span className="required-dot"/>Email
                </label>
                <div className="input-wrapper">
                  <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <input type="email" name="email" className="modal-input" placeholder="your@email.com" required autoComplete="email"/>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="modal-field">
              <label className="modal-label">Message</label>
              <div className="input-wrapper textarea-wrapper">
                <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
                <textarea name="message" className="modal-input" placeholder="Which product interests you? Tell us your scenario or questions…"/>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="modal-submit-btn">
              Send Inquiry <span style={{ display: 'inline-block', marginLeft: 6 }}>→</span>
            </button>

            {/* Privacy */}
            <p style={{ marginTop: 12, fontSize: '0.72rem', color: '#9CA3AF', textAlign: 'center', lineHeight: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <svg width={12} height={12} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} style={{ color: '#00D4AA', flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              Your info is secure &amp; will never be shared. Response within 24 hrs.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
