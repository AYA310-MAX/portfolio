import { Link } from 'react-router-dom'
import { profile } from '../content/profile'
import '../styles/page.css'

export function AboutPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <p className="eyebrow">Who walks this path</p>
        <h1 className="page-title">{profile.name}</h1>
        <p className="page-lede">{profile.tagline}</p>
        {profile.bio.map((paragraph) => (
          <p key={paragraph} className="page-body">
            {paragraph}
          </p>
        ))}
        <Link to="/" className="page-back">
          ← Back to the doors
        </Link>
      </div>
    </main>
  )
}
