import heroBannerOne from '../assets/hero-banner.jpg'
import heroBannerTwo from '../assets/hero-banner-2.jpg'
import { couple, weddingDate } from '../data/weddingData'
import Countdown from './Countdown'
import Carousel from './ui/Carousel'

const HERO_SLIDES = [
  { src: heroBannerOne, alt: `${couple.groomName} and ${couple.brideName}` },
  { src: heroBannerTwo, alt: `${couple.groomName} and ${couple.brideName}` },
]

function Hero() {
  return (
    <section id="home" className="hero">
      <Carousel
        slides={HERO_SLIDES}
        intervalMs={3000}
        className="hero__carousel"
        label={`${couple.groomName} and ${couple.brideName}`}
      />

      <div className="hero__countdown-wrap">
        <Countdown targetDate={weddingDate} title="Our Special Day In" />
      </div>
    </section>
  )
}

export default Hero
