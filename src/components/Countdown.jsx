import { useCountdown } from '../hooks/useCountdown'

const UNITS = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

function Countdown({ targetDate, title }) {
  const timeLeft = useCountdown(targetDate)

  return (
    <div className="countdown">
      {title && <p className="countdown__title">{title}</p>}
      <div className="countdown__grid">
        {UNITS.map((unit) => (
          <div className="countdown__unit" key={unit.key}>
            <span className="countdown__value">
              {timeLeft.isPast ? '00' : String(timeLeft[unit.key]).padStart(2, '0')}
            </span>
            <span className="countdown__label">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
