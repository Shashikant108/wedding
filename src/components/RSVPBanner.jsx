import { useState } from 'react'
import { couple } from '../data/weddingData'
import Confetti from './ui/Confetti'
import Modal from './ui/Modal'

function RSVPBanner() {
  const [response, setResponse] = useState(null)
  const [isCelebrating, setIsCelebrating] = useState(false)

  const acceptInvite = () => {
    setResponse('yes')
    setIsCelebrating(true)
  }

  return (
    <section id="rsvp" className="rsvp">
      <span className="rsvp__icon" aria-hidden="true">♥</span>
      <h2 className="rsvp__title">Will you be a part of our special day?</h2>
      <p className="rsvp__subtitle">Kindly Confirm Your Presence</p>

      <div className="rsvp__actions">
        <button
          type="button"
          className={`rsvp__btn rsvp__btn--yes ${response === 'yes' ? 'is-selected' : ''}`}
          onClick={acceptInvite}
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

      <Modal
        isOpen={isCelebrating}
        onClose={() => setIsCelebrating(false)}
        label="निमंत्रण स्वीकार करने के लिए धन्यवाद"
        className="celebrate"
      >
        <Confetti isActive={isCelebrating} />

        <div className="celebrate__body">
          <span className="celebrate__icon" aria-hidden="true">🎉</span>
          <p className="celebrate__eyebrow">आप आ रहे हैं</p>
          <h3 className="celebrate__title">धन्यवाद</h3>
          <p className="celebrate__text">
            आपकी उपस्थिति हमारे इस खास दिन को पूर्ण बनाएगी। हम आपके साथ यह खुशी
            बाँटने के लिए बेसब्री से इंतज़ार कर रहे हैं।
          </p>
          <p className="celebrate__signature">
            {couple.groomName} &amp; {couple.brideName}
          </p>

          <button
            type="button"
            className="rsvp__btn rsvp__btn--yes celebrate__close"
            onClick={() => setIsCelebrating(false)}
          >
            See You There
          </button>
        </div>
      </Modal>
    </section>
  )
}

export default RSVPBanner
