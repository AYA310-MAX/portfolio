import { skillGroups } from '@/content/skills.data'
import { Reveal, RevealGroup, RevealItem } from './Reveal'

export function Technologies() {
  return (
    <section id="technologies" className="mx-auto max-w-3xl px-4 py-24">
      <Reveal>
        <p className="eyebrow">The tools carried</p>
        <h2 className="mt-1.5 mb-10 text-[clamp(1.6rem,3.5vw,2.2rem)]">Technologies</h2>
      </Reveal>

      <RevealGroup stagger={0.12}>
        {skillGroups.map((group) => (
          <RevealItem key={group.title} className="mb-7">
            <h3 className="font-ui mb-2.5 text-[0.72rem] tracking-wider text-gold-ember uppercase">{group.title}</h3>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-body rounded-full border border-gold-ember/22 px-3.5 py-1.5 text-sm text-bone transition-colors duration-300 hover:border-gold-bright/60 [background:linear-gradient(155deg,var(--indigo-lift),var(--indigo-deep))]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
