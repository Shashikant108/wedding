import { useEffect, useState } from 'react'

const DAY = 1000 * 60 * 60 * 24
const HOUR = 1000 * 60 * 60
const MINUTE = 1000 * 60

function getTimeParts(targetDate) {
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  }

  return {
    days: Math.floor(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / 1000),
    isPast: false,
  }
}

// Reusable live countdown hook — pass any target date, get back
// { days, hours, minutes, seconds, isPast } updated every second.
export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeParts(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeParts(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}
