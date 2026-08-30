import { Link } from 'react-router-dom'
import './NotFoundPage.css'

export function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="notfound-scene" aria-hidden="true">
        <div className="notfound-book-float">
          <div className="notfound-book">
            <div className="notfound-book-spine" />
            <div className="notfound-book-cover" />
            <div className="notfound-book-page">
              <span />
              <span />
              <span />
            </div>
            <div className="notfound-book-page">
              <span />
              <span />
            </div>
            <div className="notfound-book-page">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <p className="eyebrow">404</p>
      <h1>This page was never written.</h1>
      <p className="notfound-copy">The book doesn't hold a chapter for this path.</p>
      <Link to="/" className="notfound-link">
        ← Return to the beginning
      </Link>
    </div>
  )
}
