import { formatDate, formatTime } from '../utils/formatDate'

function EventCard({ event }) {
  const { title, icon, date, time, location, place, isRoute, from, to } = event

  return (
    <article className="event-card">
      <div className="event-card__icon" aria-hidden="true">
        {icon}
      </div>

      <div className="event-card__body">
        <h3 className="event-card__title">{title}</h3>

        <p className="event-card__row">
          <span className="event-card__icon-small" aria-hidden="true">📅</span>
          {formatDate(date)}
        </p>

        <p className="event-card__row">
          <span className="event-card__icon-small" aria-hidden="true">🕐</span>
          {formatTime(time)}
        </p>

        {isRoute ? (
          <p className="event-card__row event-card__row--route">
            <span className="event-card__icon-small" aria-hidden="true">📍</span>
            <span>
              From: <strong>{from || 'Coming Soon'}</strong>
              <br />
              To: {to || 'Coming Soon'}
            </span>
          </p>
        ) : (
          <p className="event-card__row">
            <span className="event-card__icon-small" aria-hidden="true">📍</span>
            <span>
              <strong>{location || 'Coming Soon'}</strong>
              {place ? <><br />{place}</> : null}
            </span>
          </p>
        )}
      </div>
    </article>
  )
}

export default EventCard
