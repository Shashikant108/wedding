import { events } from '../data/weddingData'
import EventCard from './EventCard'
import SectionHeader from './SectionHeader'

function WeddingEvents() {
  return (
    <section id="events" className="events">
      <SectionHeader
        title="Wedding Celebrations"
        subtitle="Moments that last forever"
      />

      <div className="events__grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default WeddingEvents
