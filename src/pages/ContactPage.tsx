import { Link } from 'react-router-dom'
import { profile } from '../content/profile'
import '../styles/page.css'
import './ContactPage.css'

export function ContactPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <p className="eyebrow">Where the path leads</p>
        <h1 className="page-title">Contact</h1>
        <p className="page-lede">The next chapter is unwritten. Perhaps it starts with you.</p>

        <ul className="contact-list">
          <li>
            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
          </li>
          <li>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href={profile.contact.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </li>
        </ul>

        <Link to="/" className="page-back">
          ← Back to the doors
        </Link>
      </div>
    </main>
  )
}
