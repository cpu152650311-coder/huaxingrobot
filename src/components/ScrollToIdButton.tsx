'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ScrollToIdButtonProps = {
  targetId: string
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function ScrollToIdButton({
  targetId,
  children,
  onClick,
  type = 'button',
  ...props
}: ScrollToIdButtonProps) {
  return (
    <button
      {...props}
      type={type}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented) return
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      {children}
    </button>
  )
}
