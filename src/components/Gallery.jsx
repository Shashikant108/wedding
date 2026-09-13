import { useState } from 'react'
import heroPhoto from '../assets/hero-photo.jpg'
import galleryOne from '../assets/gallery-photo-1.jpg'
import galleryTwo from '../assets/gallery-photo-2.jpg'
import galleryThree from '../assets/gallery-photo-3.jpg'
import SectionHeader from './SectionHeader'
import Lightbox from './ui/Lightbox'

const GALLERY_ITEMS = [
  { src: heroPhoto, alt: 'Ramlakhan and Sangeeta', focus: 'right' },
  { src: galleryOne, alt: 'Rituals before the wedding day' },
  { src: galleryTwo, alt: 'Family together at the celebration' },
  { src: galleryThree, alt: 'Friends with the couple' },
]

function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="gallery" className="gallery">
      <SectionHeader title="Our Journey So Far" subtitle="Moments we hold close" />

      <div className="gallery__grid">
        {GALLERY_ITEMS.map((item, index) => (
          <button
            type="button"
            className="gallery__item"
            key={item.src}
            aria-label={`View ${item.alt}`}
            onClick={() => setOpenIndex(index)}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              style={item.focus ? { objectPosition: item.focus } : undefined}
            />
          </button>
        ))}
      </div>

      <Lightbox
        items={GALLERY_ITEMS}
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  )
}

export default Gallery
