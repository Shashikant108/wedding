import { useState } from 'react'
import { useAutoRotate } from '../../hooks/useAutoRotate'

// Reusable image carousel. Slides move right to left and auto advance.
function Carousel({ slides, intervalMs = 3000, className = '', label = 'Slideshow' }) {
  const [isPaused, setIsPaused] = useState(false)
  const { index, setIndex } = useAutoRotate(slides.length, intervalMs, isPaused)

  if (!slides.length) return null

  return (
    <div
      className={`carousel ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className="carousel__slide"
            loading={slideIndex === 0 ? 'eager' : 'lazy'}
            aria-hidden={slideIndex === index ? undefined : 'true'}
          />
        ))}
      </div>

      {slides.length > 1 && (
        <div className="carousel__dots">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              className={`carousel__dot ${
                slideIndex === index ? 'is-active' : ''
              }`.trim()}
              aria-label={`Show slide ${slideIndex + 1}`}
              aria-current={slideIndex === index ? 'true' : undefined}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
