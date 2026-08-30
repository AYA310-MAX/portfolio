import { Link } from 'react-router-dom'
import { projects } from '../content/projects.data'
import { profile } from '../content/profile'
import '../styles/page.css'
import './ProjectsPage.css'

export function ProjectsPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <p className="eyebrow">What has been built</p>
        <h1 className="page-title">Projects</h1>
        <p className="page-lede">What the builder leaves along the way.</p>

        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.id} className="project-card">
              <div className="project-card-head">
                {project.flagship && <span className="project-flagship">Flagship</span>}
                <h2 className="project-title">{project.title}</h2>
              </div>
              <p className="project-summary">{project.summary}</p>
              <ul className="project-tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="project-foot">
                <span className="project-status">{project.status}</span>
                {project.publicRepo ? (
                  <a href={profile.contact.github} target="_blank" rel="noreferrer">
                    View on GitHub ↗
                  </a>
                ) : (
                  <span className="project-pending">Repository not yet public</span>
                )}
              </div>
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
