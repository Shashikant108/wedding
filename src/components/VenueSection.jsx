import venueImage from '../assets/venue-illustration.svg'
import { specialNote, venue } from '../data/weddingData'

function VenueSection() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venue.mapQuery,
  )}`

  return (
    <section id="venue" className="venue">
      <div className="venue__card">
        <img src={venueImage} alt={venue.name} className="venue__image" />
        <div className="venue__details">
          <h3>Venue</h3>
          <p className="venue__name">{venue.name}</p>
          <p className="venue__address">
            📍 {venue.addressLine1}
            {venue.addressLine2 ? `, ${venue.addressLine2}` : ''}
          </p>
          <a
            className="venue__cta"
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            📍 Get Directions
          </a>
        </div>
      </div>

      <div className="venue__note">
        <p className="venue__note-heading">♥ {specialNote.heading}</p>
        <p className="venue__note-body">{specialNote.body}</p>
        <p className="venue__note-side">
          {specialNote.sideText.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </p>
      </div>
    </section>
  )
}

export default VenueSection
