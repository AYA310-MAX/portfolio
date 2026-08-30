'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function PageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string
  title: string
  lede: string
  children?: ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-20 pb-12 [background:radial-gradient(circle_at_50%_0%,var(--indigo-lift),var(--indigo-void)_60%)]">
      <motion.div
        className="w-full max-w-160"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-1.5 mb-7 text-[clamp(1.8rem,4vw,2.6rem)]">{title}</h1>
        <p className="font-body mb-12 max-w-136 text-[1.05rem] text-bone-dim">{lede}</p>

        {children}

        <Link
          href="/"
          className="font-ui mt-12 inline-flex items-center gap-1.5 border-b border-gold-bright/35 pb-0.5 text-[0.8rem] text-gold-bright no-underline hover:border-gold-bright"
        >
          ← Back to the doors
        </Link>
      </motion.div>
    </main>
  )
}
