import { PageShell } from '@/components/PageShell'
import { leadershipRoles } from '@/content/leadership.data'

export default function LeadershipPage() {
  return (
    <PageShell
      eyebrow="Who else walks with me"
      title="Leadership"
      lede="The coldest hour belongs to the fire. This is where the land speaks of its people."
    >
      <ul className="m-0 flex list-none flex-col p-0">
        {leadershipRoles.map((role, i) => (
          <li key={role.title} className={`py-4 ${i > 0 ? 'border-t border-gold-ember/18' : ''}`}>
            <h2 className="text-[1.05rem]">{role.title}</h2>
            <p className="font-ui my-1.5 text-[0.72rem] tracking-wide text-gold-ember">{role.org}</p>
            <p className="font-body m-0 leading-relaxed text-bone-dim">{role.summary}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  )
}
