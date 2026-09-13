import venueImage from '../assets/venue-illustration.svg'
import { specialNote, venue } from '../data/weddingData'
import Card from './ui/Card'
import Chevron from './ui/Chevron'
import IconTile from './ui/IconTile'

function VenueSection() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venue.mapQuery,
  )}`

  const address = [venue.addressLine1, venue.addressLine2]
    .filter(Boolean)
    .join(', ')

  return (
    <section id="venue" className="venue">
      <Card className="venue__card">
        <img src={venueImage} alt={venue.name} className="venue__image" />

        <div className="venue__details">
          <p className="venue__label">Venue</p>
          <p className="venue__name">{venue.name}</p>
          <p className="venue__address">{address}</p>
        </div>

        <a
          className="venue__cta"
          href={mapsHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`Get directions to ${venue.name}`}
        >
          <span aria-hidden="true">→</span>
        </a>
      </Card>

      <Card as="a" className="venue__note" href="#rsvp">
        <IconTile icon="♥" tone="rose" />

        <div className="venue__note-body">
          <p className="venue__note-heading">{specialNote.heading}</p>
          <p className="venue__note-text">{specialNote.body}</p>
        </div>

        <Chevron className="venue__note-chevron" />
      </Card>
    </section>
  )
}

export default VenueSection
