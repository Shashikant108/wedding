import { useEffect, useState } from 'react'

// Reusable auto-rotating index. Pass the number of items and the delay in ms.
// Returns { index, setIndex } so any slider can drive itself from it.
export function useAutoRotate(count, intervalMs = 3000, isPaused = false) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (count < 2 || isPaused) return undefined

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [count, intervalMs, isPaused])

  useEffect(() => {
    setIndex((current) => (current < count ? current : 0))
  }, [count])

  return { index, setIndex }
}
