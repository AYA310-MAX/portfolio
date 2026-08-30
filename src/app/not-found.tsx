'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const pages = [
  { delay: 0, lines: 3 },
  { delay: 1.27, lines: 2 },
  { delay: 2.54, lines: 3 },
]

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center [background:radial-gradient(circle_at_50%_32%,var(--indigo-lift),var(--indigo-void)_70%)]">
      <div className="mb-11 [perspective:1100px]">
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div
            className="relative h-52 w-42"
            style={{ transform: 'rotateX(8deg) rotateY(-14deg)', transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 w-4 rounded-l-[5px] [background:linear-gradient(180deg,var(--gold-ember),var(--clay-rose))]" />
            <div className="absolute inset-0 rounded-l-[5px] rounded-r-xl border-[1.5px] border-gold-ember [background:linear-gradient(155deg,var(--indigo-lift),var(--indigo-deep)_60%)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]" />
            {pages.map((page, i) => (
              <motion.div
                key={i}
                className="absolute top-2.5 right-2.5 bottom-2.5 left-6 flex flex-col gap-1.5 rounded-r-lg p-4.5 [background:linear-gradient(120deg,var(--bone)_0%,#f6efdc_100%)]"
                style={{ transformOrigin: 'left center' }}
                animate={{ rotateY: [0, 0, -172, -172, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: page.delay,
                  times: [0, 0.08, 0.5, 0.92, 1],
                }}
              >
                {Array.from({ length: page.lines }).map((_, li) => (
                  <span
                    key={li}
                    className="block h-0.5 rounded-full bg-indigo-void/18"
                    style={{ width: li === 1 ? '70%' : '100%' }}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="eyebrow">404</p>
      <h1 className="mx-auto max-w-104 text-[clamp(1.5rem,3vw,2.1rem)]">This page was never written.</h1>
      <p className="font-body mt-2 mb-7 text-bone-dim italic">The book doesn&apos;t hold a chapter for this path.</p>
      <Link
        href="/"
        className="font-ui border-b border-gold-bright/40 pb-0.5 text-[0.85rem] text-gold-bright no-underline hover:border-gold-bright"
      >
        ← Return to the beginning
      </Link>
    </main>
  )
}
