import { useState } from 'react'
import { couple, navLinks } from '../data/weddingData'

const MENU_LINKS = [
  ...navLinks,
  { label: 'Venue', href: '#venue', icon: '📍' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#home" onClick={() => setIsOpen(false)}>
        <span className="navbar__brand-mark" aria-hidden="true">
          ❦
        </span>
        <span className="navbar__brand-text">
          <span className="navbar__initials">
            {couple.groomName.charAt(0)} &amp; {couple.brideName.charAt(0)}
          </span>
          <span className="navbar__tagline">{couple.subheading}</span>
        </span>
      </a>

      <nav
        id="primary-menu"
        className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`.trim()}
      >
        {MENU_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className={`navbar__toggle ${isOpen ? 'is-open' : ''}`.trim()}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="primary-menu"
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
