import { formatDate, formatTime } from '../utils/formatDate'
import Card from './ui/Card'
import Chevron from './ui/Chevron'
import IconTile from './ui/IconTile'

function EventCard({ event }) {
  const { title, icon, date, time, location, place, mapUrl, isRoute, from, to } =
    event

  const placeLine = isRoute
    ? [from, to].filter(Boolean).join(' to ') || 'Coming Soon'
    : [location, place].filter(Boolean).join(', ') || 'Coming Soon'

  return (
    <Card as="article" className="event-card">
      <IconTile icon={icon} />

      <div className="event-card__body">
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__date">{formatDate(date)}</p>
        <p className="event-card__time">{formatTime(time)}</p>

        {mapUrl ? (
          <a
            className="event-card__place event-card__place--link"
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${placeLine} on Google Maps`}
          >
            <span aria-hidden="true">📍</span>
            {placeLine}
          </a>
        ) : (
          <p className="event-card__place">{placeLine}</p>
        )}
      </div>

      <Chevron className="event-card__chevron" />
    </Card>
  )
}

export default EventCard
