'use client'

import { motion } from 'framer-motion'
import { profile } from '@/content/profile'

const easeOut = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[20%] [background:radial-gradient(circle_at_50%_42%,#fff6e2_0%,var(--gold-bright)_18%,var(--gold-ember)_38%,transparent_66%)]"
        initial={{ opacity: 0.95, scale: 0.35 }}
        animate={{ opacity: 0, scale: 1.7 }}
        transition={{ duration: 2.6, ease: easeOut }}
      />

      <div className="relative z-10">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.55 }}
        >
          {profile.name}
        </motion.p>

        <motion.h1
          className="my-4 flex flex-col gap-2 text-[clamp(2.2rem,6vw,3.6rem)] [text-shadow:0_0_40px_rgba(244,201,122,0.35)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.8 }}
        >
          Dusk to Dawn
          <span className="font-body text-[0.4em] font-normal tracking-wide text-gold-bright italic">
            Walk with me
          </span>
        </motion.h1>

        <motion.p
          className="font-ui mx-auto mb-8 max-w-md text-[0.95rem] tracking-wide text-bone-dim"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 1.1 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 1.35 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="font-ui rounded-full bg-gold-ember px-6 py-3 text-sm font-medium text-indigo-void no-underline"
          >
            View my work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, borderColor: 'var(--gold-bright)' }}
            whileTap={{ scale: 0.97 }}
            className="font-ui rounded-full border border-gold-bright/40 px-6 py-3 text-sm text-gold-bright no-underline"
          >
            Let&apos;s connect
          </motion.a>
        </motion.div>
      </div>

      <motion.span
        aria-hidden="true"
        className="absolute bottom-20 left-1/2 h-12 w-px -translate-x-1/2 [background:linear-gradient(180deg,transparent,var(--gold-ember))]"
        animate={{ opacity: [0.25, 0.9, 0.25], scaleY: [0.7, 1, 0.7] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
}
