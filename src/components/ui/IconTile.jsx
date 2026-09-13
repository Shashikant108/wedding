// Rounded square icon tile shared by event cards, the venue row and the note card.
function IconTile({ icon, tone = 'gold', size = 'md' }) {
  return (
    <span
      className={`icon-tile icon-tile--${tone} icon-tile--${size}`}
      aria-hidden="true"
    >
      {icon}
    </span>
  )
}

export default IconTile
