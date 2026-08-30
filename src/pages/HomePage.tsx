import { DoorsSection } from '../components/DoorsSection'
import './HomePage.css'

export function HomePage() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-glow" aria-hidden="true" />
        <div className="home-content">
          <p className="eyebrow">Ayanda Dlamini</p>
          <h1 className="home-title">
            Dusk to Dawn
            <span>Walk with me</span>
          </h1>
          <p className="home-copy">Scroll to find the doors.</p>
        </div>
        <span className="home-scroll-cue" aria-hidden="true" />
      </section>
      <DoorsSection />
    </main>
  )
}
