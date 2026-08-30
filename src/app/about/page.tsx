import { PageShell } from '@/components/PageShell'
import { profile } from '@/content/profile'

export default function AboutPage() {
  return (
    <PageShell eyebrow="Who walks this path" title={profile.name} lede={profile.tagline}>
      {profile.bio.map((paragraph) => (
        <p key={paragraph} className="font-body mb-4 text-base leading-7 text-bone">
          {paragraph}
        </p>
      ))}
    </PageShell>
  )
}
