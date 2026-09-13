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

function App() {
  return (
    <div className="frame">
      <div className="page">
        <Navbar />
        <Hero />
        <WeddingEvents />
        <VenueSection />

        <Tagline text={couple.bottomTagline} />

        <Gallery />

        <Tagline text={couple.thankYouTagline} />

        <RSVPBanner />
        <Footer />
      </div>
    </div>
  )
}

export default App
