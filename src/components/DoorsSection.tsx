import { doors } from '../content/doors.data'
import { Door } from './Door'
import './DoorsSection.css'

export function DoorsSection() {
  return (
    <section className="doors-section">
      <p className="eyebrow">Five doors, one journey</p>
      <h2 className="doors-heading">Choose where to walk</h2>
      <div className="doors-row">
        {doors.map((door) => (
          <Door key={door.id} data={door} />
        ))}
      </div>
    </section>
  )
}
