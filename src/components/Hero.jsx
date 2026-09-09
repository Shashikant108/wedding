import heroPhoto from '../assets/hero-photo.jpg'
import { couple, weddingDate } from '../data/weddingData'
import Countdown from './Countdown'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__banner">
        <img
          src={heroPhoto}
          alt={`${couple.groomName} and ${couple.brideName}`}
          className="hero__banner-img"
        />
      </div>

      <div className="hero__countdown-wrap">
        <Countdown targetDate={weddingDate} title="Our Special Day In" />
      </div>
    </section>
  )
}

export default Hero
