import { Link } from 'react-router-dom'
import type { DoorData, DoorGlyph } from '../content/doors.data'
import './Door.css'

const GLYPHS: Record<DoorGlyph, React.ReactNode> = {
  about: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  projects: (
    <>
      <rect x="4.5" y="13" width="3.2" height="6.5" />
      <rect x="10.4" y="8.5" width="3.2" height="11" />
      <rect x="16.3" y="4.5" width="3.2" height="15" />
    </>
  ),
  skills: <polygon points="12,3.5 19.5,8 19.5,16 12,20.5 4.5,16 4.5,8" />,
  leadership: <path d="M12 3.5c3 3.5 5.5 6.8 5.5 10a5.5 5.5 0 1 1-11 0c0-1.9.9-3.6 2-5-0.1 1.4.6 2.3 1.4 2.2-0.4-2.6.6-5.1 2.1-7.2z" />,
  contact: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <line x1="12" y1="2.5" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="21.5" />
      <line x1="2.5" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="21.5" y2="12" />
    </>
  ),
}

export function Door({ data }: { data: DoorData }) {
  return (
    <Link to={data.routePath} className="door">
      <span className="door-frame">
        <span className="door-circuit" aria-hidden="true" />
        <svg className="door-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">
          {GLYPHS[data.glyph]}
        </svg>
      </span>
      <span className="door-title">{data.title}</span>
      <span className="door-subtitle">{data.subtitle}</span>
    </Link>
  )
}
