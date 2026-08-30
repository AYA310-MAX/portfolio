import './HomePage.css'

export function HomePage() {
  return (
    <main className="home">
      <div className="home-glow" aria-hidden="true" />
      <div className="home-content">
        <p className="eyebrow">Ayanda Dlamini</p>
        <h1 className="home-title">
          Dusk to Dawn
          <span>Walk with me</span>
        </h1>
        <p className="home-copy">The doors are still being carved — the full journey arrives next.</p>
      </div>
    </main>
  )
}
