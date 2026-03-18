'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useModalStore } from '@/store/modal'

type OpenInquiryButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function OpenInquiryButton({
  children,
  onClick,
  type = 'button',
  ...props
}: OpenInquiryButtonProps) {
  const { openModal } = useModalStore()

  return (
    <button
      {...props}
      type={type}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) openModal()
      }}
    >
      {children}
    </button>
  )
}
