'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PHRASES = ['deciphering the words', 'loading', 'almost there', 'a little more']

export function Loader({ label = 'the land is waking' }: { label?: string }) {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % PHRASES.length)
    }, 1900)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center gap-4 [background:radial-gradient(circle_at_50%_42%,var(--indigo-lift),var(--indigo-void)_68%)]"
      role="status"
      aria-live="polite"
    >
      <svg className="h-22 w-22" viewBox="0 0 120 120" aria-hidden="true">
        <motion.circle
          cx="60"
          cy="60"
          r="46"
          fill="none"
          stroke="var(--gold-ember)"
          strokeWidth={1.2}
          opacity={0.55}
          style={{ transformOrigin: '60px 60px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
        <g stroke="var(--gold-ember)" strokeWidth={2} strokeLinecap="round">
          <line x1="60" y1="8" x2="60" y2="24" />
          <line x1="60" y1="96" x2="60" y2="112" />
          <line x1="8" y1="60" x2="24" y2="60" />
          <line x1="96" y1="60" x2="112" y2="60" />
        </g>
        <motion.rect
          x="48"
          y="48"
          width="24"
          height="24"
          fill="var(--gold-bright)"
          style={{ transformOrigin: '60px 60px' }}
          animate={{ rotate: 45, opacity: [0.35, 1, 0.35], scale: [0.85, 1.05, 0.85] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      <p className="font-ui mt-2 text-[0.7rem] tracking-[0.28em] text-bone-dim uppercase">{label}</p>
      <AnimatePresence mode="wait">
        <motion.p
          key={phraseIndex}
          className="font-ui m-0 min-h-[1.4em] text-[0.95rem] tracking-wide text-gold-bright"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {PHRASES[phraseIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
