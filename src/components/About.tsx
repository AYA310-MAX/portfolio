import { profile } from '@/content/profile'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-2xl px-4 py-24">
      <p className="eyebrow">Who walks this path</p>
      <h2 className="mt-1.5 mb-6 text-[clamp(1.6rem,3.5vw,2.2rem)]">About</h2>
      {profile.bio.map((paragraph) => (
        <p key={paragraph} className="font-body mb-4 text-base leading-7 text-bone">
          {paragraph}
        </p>
      ))}
    </section>
  )
}
