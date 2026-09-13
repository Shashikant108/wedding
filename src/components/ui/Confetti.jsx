import { useMemo } from 'react'

const COLORS = ['var(--gold)', 'var(--gold-light)', 'var(--rose)', '#ffffff']

// Reusable CSS confetti burst. No dependencies, honours reduced motion via App.css.
function Confetti({ pieces = 40, isActive = true }) {
  const items = useMemo(
    () =>
      Array.from({ length: pieces }, (_, index) => ({
        id: index,
        left: `${(index * 97) % 100}%`,
        delay: `${((index * 137) % 100) / 50}s`,
        duration: `${2.4 + (((index * 53) % 100) / 100) * 1.8}s`,
        color: COLORS[index % COLORS.length],
        size: 6 + (index % 4) * 2,
        round: index % 3 === 0,
      })),
    [pieces],
  )

  if (!isActive) return null

  return (
    <div className="confetti" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className={`confetti__piece ${item.round ? 'confetti__piece--round' : ''}`.trim()}
          style={{
            left: item.left,
            width: `${item.size}px`,
            height: `${item.size * (item.round ? 1 : 1.6)}px`,
            background: item.color,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
