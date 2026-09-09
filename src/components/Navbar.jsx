import { useState } from 'react'
import { couple } from '../data/weddingData'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#our-story' },
  { label: 'Wedding Events', href: '#events' },
  { label: 'Venue', href: '#venue' },
  { label: 'RSVP', href: '#rsvp' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#home">
        <span aria-hidden="true">💕</span>
        <span className="navbar__brand-text">
          {couple.groomName.charAt(0)} &amp; {couple.brideName.charAt(0)}
        </span>
      </a>

      <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="navbar__cta" href="#rsvp">
        ♥ You're Invited
      </a>

      <button
        type="button"
        className="navbar__toggle"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default Navbar
