import { PageShell } from '@/components/PageShell'
import { skillGroups } from '@/content/skills.data'

export default function SkillsPage() {
  return (
    <PageShell eyebrow="The tools carried" title="Skills" lede="Ranges take years to cross.">
      {skillGroups.map((group) => (
        <div key={group.title} className="mb-7">
          <h2 className="font-ui mb-2.5 text-[0.72rem] tracking-wider text-gold-ember uppercase">{group.title}</h2>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {group.items.map((item) => (
              <li
                key={item}
                className="font-body rounded-full border border-gold-ember/22 px-3.5 py-1.5 text-sm text-bone [background:linear-gradient(155deg,var(--indigo-lift),var(--indigo-deep))]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </PageShell>
  )
}
