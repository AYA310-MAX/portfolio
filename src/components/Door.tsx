'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { DoorData, DoorGlyph } from '../content/doors.data'
import styles from './Door.module.css'

const GLYPHS: Record<DoorGlyph, React.ReactNode> = {
  about: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  projects: (
    <>
      <rect x="4.5" y="13" width="3.2" height="6.5" />
      <rect x="10.4" y="8.5" width="3.2" height="11" />
      <rect x="16.3" y="4.5" width="3.2" height="15" />
    </>
  ),
  skills: <polygon points="12,3.5 19.5,8 19.5,16 12,20.5 4.5,16 4.5,8" />,
  leadership: (
    <path d="M12 3.5c3 3.5 5.5 6.8 5.5 10a5.5 5.5 0 1 1-11 0c0-1.9.9-3.6 2-5-0.1 1.4.6 2.3 1.4 2.2-0.4-2.6.6-5.1 2.1-7.2z" />
  ),
  contact: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <line x1="12" y1="2.5" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="21.5" />
      <line x1="2.5" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="21.5" y2="12" />
    </>
  ),
}

export function Door({ data }: { data: DoorData }) {
  return (
    <Link href={data.routePath} className="group flex w-38 flex-col items-center gap-2.5 py-4 no-underline text-bone">
      <motion.span
        className={`${styles.frame} relative flex h-34 w-26 items-end justify-center overflow-hidden pb-4.5`}
        initial="rest"
        whileHover="active"
        whileFocus="active"
        animate="rest"
      >
        <motion.span
          className={styles.circuit}
          variants={{ rest: { height: 0 }, active: { height: '3.6rem' } }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.svg
          className="relative h-7.5 w-7.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.1}
          aria-hidden="true"
          variants={{
            rest: { color: 'var(--gold-ember)', filter: 'drop-shadow(0 0 0px transparent)' },
            active: { color: 'var(--gold-bright)', filter: 'drop-shadow(0 0 6px rgba(244,201,122,0.6))' },
          }}
          transition={{ duration: 0.35 }}
        >
          {GLYPHS[data.glyph]}
        </motion.svg>
      </motion.span>
      <span className="font-display text-[0.95rem] tracking-wide">{data.title}</span>
      <span className="font-ui text-center text-[0.68rem] tracking-wide text-bone-dim">{data.subtitle}</span>
    </Link>
  )
}
