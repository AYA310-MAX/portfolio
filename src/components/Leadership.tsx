import { leadershipRoles } from '@/content/leadership.data'

export function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-2xl px-4 py-24">
      <p className="eyebrow">Who else walks with me</p>
      <h2 className="mt-1.5 mb-10 text-[clamp(1.6rem,3.5vw,2.2rem)]">Leadership</h2>

      <ul className="m-0 flex list-none flex-col p-0">
        {leadershipRoles.map((role, i) => (
          <li key={role.title} className={`py-4 ${i > 0 ? 'border-t border-gold-ember/18' : ''}`}>
            <h3 className="text-[1.05rem]">{role.title}</h3>
            <p className="font-ui my-1.5 text-[0.72rem] tracking-wide text-gold-ember">{role.org}</p>
            <p className="font-body m-0 leading-relaxed text-bone-dim">{role.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
