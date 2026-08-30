import { profile } from '@/content/profile'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="eyebrow">Where the path leads</p>
      <h2 className="mt-1.5 mb-4 text-[clamp(1.6rem,3.5vw,2.2rem)]">Contact</h2>
      <p className="font-body mb-8 text-bone-dim">The next chapter is unwritten. Perhaps it starts with you.</p>

      <div className="flex flex-col items-center gap-3">
        <a href={`mailto:${profile.contact.email}`} className="font-ui text-base text-gold-bright">
          {profile.contact.email}
        </a>
        <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="font-ui text-base text-gold-bright">
          LinkedIn ↗
        </a>
        <a href={profile.contact.github} target="_blank" rel="noreferrer" className="font-ui text-base text-gold-bright">
          GitHub ↗
        </a>
      </div>
    </section>
  )
}
