import heroPhoto from '../assets/hero-photo.jpg'
import galleryTwo from '../assets/gallery-1.svg'
import galleryThree from '../assets/gallery-2.svg'
import galleryFour from '../assets/gallery-3.svg'

const GALLERY_ITEMS = [
  { src: heroPhoto, alt: 'Ramlakhan and Sangeeta', focus: 'right' },
  { src: galleryTwo, alt: 'More moments coming soon' },
  { src: galleryThree, alt: 'Photo coming soon' },
  { src: galleryFour, alt: 'Together always' },
]

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">Our Journey So Far</h2>
      <div className="section-title__underline" aria-hidden="true" />

      <div className="gallery__grid">
        {GALLERY_ITEMS.map((item) => (
          <div className="gallery__item" key={item.src}>
            <img
              src={item.src}
              alt={item.alt}
              style={item.focus ? { objectPosition: item.focus } : undefined}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
