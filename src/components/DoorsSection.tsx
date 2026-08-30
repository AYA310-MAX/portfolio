'use client'

import { motion } from 'framer-motion'
import { doors } from '../content/doors.data'
import { Door } from './Door'

export function DoorsSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-2 px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow">Five doors, one journey</p>
        <h2 className="mb-12 text-[clamp(1.4rem,3vw,1.9rem)]">Choose where to walk</h2>
      </motion.div>

      <motion.div
        className="flex max-w-4xl flex-wrap justify-center gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.09 } },
        }}
      >
        {doors.map((door) => (
          <motion.div
            key={door.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <Door data={door} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
