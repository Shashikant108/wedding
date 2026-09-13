import { useEffect } from 'react'
import Modal from './Modal'

// Reusable full screen image viewer. Built on Modal, adds arrow key navigation.
function Lightbox({ items, index, onClose, onChange }) {
  const isOpen = index !== null && index >= 0 && index < items.length

  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') onChange((index + 1) % items.length)
      if (event.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, index, items.length, onChange])

  if (!isOpen) return null

  const item = items[index]

  return (
    <Modal isOpen onClose={onClose} label={item.alt} className="lightbox">
      <figure className="lightbox__figure">
        <img className="lightbox__image" src={item.src} alt={item.alt} />
        <figcaption className="lightbox__caption">{item.alt}</figcaption>
      </figure>

      {items.length > 1 && (
        <>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous image"
            onClick={() => onChange((index - 1 + items.length) % items.length)}
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next image"
            onClick={() => onChange((index + 1) % items.length)}
          >
            ›
          </button>
        </>
      )}
    </Modal>
  )
}

export default Lightbox
