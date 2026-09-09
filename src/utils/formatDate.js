// Formats an ISO date string ("2026-11-25") into a readable form
// like "25 Nov 2026". Returns a fallback label when the date is unknown.
export function formatDate(isoDate, fallback = 'Coming Soon') {
  if (!isoDate) return fallback

  const date = new Date(`${isoDate}T00:00:00`)
  if (Number.isNaN(date.getTime())) return fallback

  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function formatTime(time, fallback = 'Coming Soon') {
  return time || fallback
}
