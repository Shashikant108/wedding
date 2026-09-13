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
      <h2 className="rsvp__title">क्या आप हमारे इस खास दिन का हिस्सा बनेंगे?</h2>
      <p className="rsvp__subtitle">कृपया अपनी उपस्थिति की पुष्टि करें</p>

      <div className="rsvp__actions">
        <button
          type="button"
          className={`rsvp__btn rsvp__btn--yes ${response === 'yes' ? 'is-selected' : ''}`}
          onClick={acceptInvite}
        >
          ♥ हाँ, मैं ज़रूर आऊँगा
        </button>
        <button
          type="button"
          className={`rsvp__btn rsvp__btn--no ${response === 'no' ? 'is-selected' : ''}`}
          onClick={() => setResponse('no')}
        >
          ✕ क्षमा करें, नहीं आ पाऊँगा
        </button>
      </div>

      {response && (
        <p className="rsvp__ack">
          {response === 'yes'
            ? 'धन्यवाद! हम आपके साथ यह खुशी बाँटने के लिए उत्सुक हैं।'
            : 'बताने के लिए धन्यवाद। आपकी कमी ज़रूर खलेगी।'}
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
