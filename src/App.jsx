import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WeddingEvents from './components/WeddingEvents'
import Tagline from './components/Tagline'
import VenueSection from './components/VenueSection'
import Gallery from './components/Gallery'
import RSVPBanner from './components/RSVPBanner'
import Footer from './components/Footer'
import { couple } from './data/weddingData'
import floralCorner from './assets/floral-corner.svg'

function App() {
  return (
    <div className="frame">
      <img className="frame__corner frame__corner--tl" src={floralCorner} alt="" aria-hidden="true" />
      <img className="frame__corner frame__corner--tr" src={floralCorner} alt="" aria-hidden="true" />
      <img className="frame__corner frame__corner--bl" src={floralCorner} alt="" aria-hidden="true" />
      <img className="frame__corner frame__corner--br" src={floralCorner} alt="" aria-hidden="true" />

      <div className="page">
        <Navbar />
        <Hero />
        <WeddingEvents />

        <Tagline text={couple.bottomTagline} />

        <VenueSection />
        <Gallery />

        <Tagline text={couple.thankYouTagline} />

        <RSVPBanner />
        <Footer />
      </div>
    </div>
  )
}

export default App
