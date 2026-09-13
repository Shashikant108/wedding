import { useEffect, useState } from 'react'
import { navLinks } from '../data/weddingData'

const SECTION_IDS = navLinks.map((link) => link.href.replace('#', ''))

// App-style bottom tab bar for small screens. Highlights the section in view.
function BottomNav() {
  const [activeId, setActiveId] = useState(SECTION_IDS[0])

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    )
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="bottom-nav" aria-label="Sections">
      {navLinks.map((link) => {
        const id = link.href.replace('#', '')
        const isActive = id === activeId

        return (
          <a
            key={link.href}
            href={link.href}
            className={`bottom-nav__item ${isActive ? 'is-active' : ''}`.trim()}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="bottom-nav__icon" aria-hidden="true">
              {link.icon}
            </span>
            <span className="bottom-nav__label">{link.label}</span>
          </a>
        )
      })}
    </nav>
  )
}

export default BottomNav
