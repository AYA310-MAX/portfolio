import { Link } from 'react-router-dom'
import { skillGroups } from '../content/skills.data'
import '../styles/page.css'
import './SkillsPage.css'

export function SkillsPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <p className="eyebrow">The tools carried</p>
        <h1 className="page-title">Skills</h1>
        <p className="page-lede">Ranges take years to cross.</p>

        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h2 className="skill-group-title">{group.title}</h2>
            <ul className="skill-chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <Link to="/" className="page-back">
          ← Back to the doors
        </Link>
      </div>
    </main>
  )
}
