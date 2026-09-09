import { useState } from 'react'

function RSVPBanner() {
  const [response, setResponse] = useState(null)

  return (
    <section id="rsvp" className="rsvp">
      <span className="rsvp__icon" aria-hidden="true">♥</span>
      <h2 className="rsvp__title">Will you be a part of our special day?</h2>
      <p className="rsvp__subtitle">Kindly Confirm Your Presence</p>

      <div className="rsvp__actions">
        <button
          type="button"
          className={`rsvp__btn rsvp__btn--yes ${response === 'yes' ? 'is-selected' : ''}`}
          onClick={() => setResponse('yes')}
        >
          ♥ Yes, I'll Be There
        </button>
        <button
          type="button"
          className={`rsvp__btn rsvp__btn--no ${response === 'no' ? 'is-selected' : ''}`}
          onClick={() => setResponse('no')}
        >
          ✕ Sorry, Can't Make It
        </button>
      </div>

      {response && (
        <p className="rsvp__ack">
          {response === 'yes'
            ? 'Thank you! We cannot wait to celebrate with you.'
            : "Thanks for letting us know. You'll be missed!"}
        </p>
      )}
    </section>
  )
}

export default RSVPBanner
