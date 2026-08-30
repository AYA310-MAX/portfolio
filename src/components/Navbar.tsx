const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-4">
      <a href="#top" className="font-display text-lg text-bone no-underline">
        Ayanda
      </a>
      <nav className="font-ui flex gap-6 text-sm text-bone-dim">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="no-underline hover:text-gold-bright">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
