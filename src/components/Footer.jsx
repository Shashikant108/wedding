import { couple, weddingDate } from '../data/weddingData'
import { formatDate } from '../utils/formatDate'

const SOCIAL_LINKS = [
  { label: 'WhatsApp', icon: '💬', href: '#' },
  { label: 'Instagram', icon: '📷', href: '#' },
  { label: 'Facebook', icon: '📘', href: '#' },
  { label: 'YouTube', icon: '▶️', href: '#' },
]

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__brand">
        {couple.groomName} &amp; {couple.brideName}
      </p>
      <p className="footer__meta">
        A Celebration of Love &nbsp;|&nbsp; {formatDate(weddingDate.slice(0, 10))}
        &nbsp;|&nbsp; Maharajganj
      </p>
      <div className="footer__social">
        {SOCIAL_LINKS.map((social) => (
          <a key={social.label} href={social.href} aria-label={social.label}>
            {social.icon}
          </a>
        ))}
      </div>
      <p className="footer__save-date">
        Save The Date: {formatDate(weddingDate.slice(0, 10))}
      </p>
    </footer>
  )
}

export default Footer
