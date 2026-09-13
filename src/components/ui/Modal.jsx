import { useEffect } from 'react'
import { createPortal } from 'react-dom'

// Reusable centered modal: backdrop click, Escape and a close button all dismiss it.
function Modal({ isOpen, onClose, label, className = '', children }) {
  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="modal" role="presentation" onClick={onClose}>
      <div
        className={`modal__panel card ${className}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}

export default Modal
