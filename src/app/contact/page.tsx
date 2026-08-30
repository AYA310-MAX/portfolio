import { PageShell } from '@/components/PageShell'
import { profile } from '@/content/profile'

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Where the path leads"
      title="Contact"
      lede="The next chapter is unwritten. Perhaps it starts with you."
    >
      <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
        <li>
          <a
            href={`mailto:${profile.contact.email}`}
            className="font-ui border-b border-gold-bright/30 pb-0.5 text-base text-gold-bright no-underline hover:border-gold-bright"
          >
            {profile.contact.email}
          </a>
        </li>
        <li>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-ui border-b border-gold-bright/30 pb-0.5 text-base text-gold-bright no-underline hover:border-gold-bright"
          >
            LinkedIn ↗
          </a>
        </li>
        <li>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="font-ui border-b border-gold-bright/30 pb-0.5 text-base text-gold-bright no-underline hover:border-gold-bright"
          >
            GitHub ↗
          </a>
        </li>
      </ul>
    </PageShell>
  )
}
