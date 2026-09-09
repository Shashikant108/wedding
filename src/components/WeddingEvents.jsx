import { events } from '../data/weddingData'
import EventCard from './EventCard'

function WeddingEvents() {
  return (
    <section id="events" className="events">
      <h2 className="section-title">Wedding Celebrations</h2>
      <div className="section-title__underline" aria-hidden="true" />

      <div className="events__grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default WeddingEvents
