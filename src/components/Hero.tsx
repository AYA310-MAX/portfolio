import { profile } from '@/content/profile'

export function Hero() {
  return (
    <section id="top" className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="eyebrow">{profile.name}</p>
      <h1 className="my-4 flex flex-col gap-2 text-[clamp(2.2rem,6vw,3.6rem)]">
        Dusk to Dawn
        <span className="font-body text-[0.4em] font-normal tracking-wide text-gold-bright italic">
          Walk with me
        </span>
      </h1>
      <p className="font-ui mb-8 max-w-md text-[0.95rem] text-bone-dim">{profile.tagline}</p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="font-ui rounded-full bg-gold-ember px-6 py-3 text-sm font-medium text-indigo-void no-underline"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="font-ui rounded-full border border-gold-bright/40 px-6 py-3 text-sm text-gold-bright no-underline"
        >
          Let&apos;s connect
        </a>
      </div>
    </section>
  )
}
