// Small gold chevron used as the "open" affordance on every tappable card.
function Chevron({ className = '' }) {
  return (
    <svg
      className={`chevron ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

export default Chevron
