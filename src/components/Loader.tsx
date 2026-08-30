import { useEffect, useState } from 'react'
import './Loader.css'

const PHRASES = ['deciphering the words', 'loading', 'almost there', 'a little more']

export function Loader({ label = 'the land is waking' }: { label?: string }) {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % PHRASES.length)
    }, 1900)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loader" role="status" aria-live="polite">
      <svg className="loader-sigil" viewBox="0 0 120 120" aria-hidden="true">
        <circle className="loader-sigil-ring" cx="60" cy="60" r="46" />
        <g className="loader-sigil-marks">
          <line x1="60" y1="8" x2="60" y2="24" />
          <line x1="60" y1="96" x2="60" y2="112" />
          <line x1="8" y1="60" x2="24" y2="60" />
          <line x1="96" y1="60" x2="112" y2="60" />
        </g>
        <rect className="loader-sigil-core" x="48" y="48" width="24" height="24" transform="rotate(45 60 60)" />
      </svg>

      <p className="loader-eyebrow">{label}</p>
      <p key={phraseIndex} className="loader-phrase">
        {PHRASES[phraseIndex]}
      </p>
    </div>
  )
}
