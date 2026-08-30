import { Link } from 'react-router-dom'
import { leadershipRoles } from '../content/leadership.data'
import '../styles/page.css'
import './LeadershipPage.css'

export function LeadershipPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <p className="eyebrow">Who else walks with me</p>
        <h1 className="page-title">Leadership</h1>
        <p className="page-lede">The coldest hour belongs to the fire. This is where the land speaks of its people.</p>

        <ul className="leadership-list">
          {leadershipRoles.map((role) => (
            <li key={role.title} className="leadership-item">
              <h2 className="leadership-title">{role.title}</h2>
              <p className="leadership-org">{role.org}</p>
              <p className="leadership-summary">{role.summary}</p>
            </li>
          ))}
        </ul>

        <Link to="/" className="page-back">
          ← Back to the doors
        </Link>
      </div>
    </main>
  )
}
