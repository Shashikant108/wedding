function Tagline({ text }) {
  return (
    <div className="tagline">
      <span className="tagline__ornament" aria-hidden="true">❧</span>
      <p className="tagline__text">{text}</p>
      <span className="tagline__ornament" aria-hidden="true">❧</span>
    </div>
  )
}

export default Tagline
