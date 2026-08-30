'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-500 ${
        scrolled ? 'border-b border-gold-ember/15 bg-indigo-void/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <a href="#top" className="font-display text-lg text-bone no-underline">
        Ayanda
      </a>

      <nav className="font-ui hidden gap-6 text-sm text-bone-dim sm:flex">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="no-underline transition-colors hover:text-gold-bright">
            {link.label}
          </a>
        ))}
      </nav>

      <button
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
      >
        <motion.span
          className="h-px w-6 bg-bone"
          animate={menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
        />
        <motion.span className="h-px w-6 bg-bone" animate={{ opacity: menuOpen ? 0 : 1 }} />
        <motion.span
          className="h-px w-6 bg-bone"
          animate={menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
        />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="font-display fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-indigo-void text-2xl sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-bone no-underline"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
