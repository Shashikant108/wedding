// Central place for all wedding details.
// Update dates, venues and route here — every section reads from this file.
// Use null for anything not finalised yet; the UI will show "Coming Soon".

export const couple = {
  groomName: 'Ramlakhan',
  brideName: 'Sangeeta',
  tagline: 'Together Forever',
  subheading: 'Two Souls, One Journey',
  heroEyebrow: 'Two Souls  One Journey',
  heroLines: ['Different hearts', 'Same dreams', 'A lifetime together'],
  heroCta: 'Join Our Celebration',
  quoteOne: 'Two Hearts',
  quoteTwo: 'One Beautiful Journey',
  cornerNote: 'A new chapter begins...',
  footerQuote: 'It feels like home when you are with me.',
  bottomTagline: 'Better Together Forever',
  thankYouTagline: 'Thank you for being a part of our story.',
}

// The date the main countdown on the hero section counts down to.
export const weddingDate = '2026-11-30T00:00:00'

// Shared location, so the address and its map link live in one place only.
const BYAHUT_BHAWAN = {
  location: 'Byahut Bhawan',
  place: 'Bhikhabandh',
  mapUrl:
    'https://www.google.com/maps/place/Badi+Durga+Mandir/@26.0983058,84.5319715,47m/data=!3m1!1e3!4m6!3m5!1s0x3992e980d2d69d7d:0xbdb5ca9df1ae1930!8m2!3d26.0983787!4d84.5320158!16s%2Fg%2F11jh_893lj',
}

export const events = [
  {
    id: 'tilak',
    title: 'Tilak Ceremony',
    icon: '🪔',
    date: '2026-11-25',
    time: '10:00 AM',
    ...BYAHUT_BHAWAN,
  },
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    icon: '🌼',
    date: null,
    time: '10:00 AM',
    ...BYAHUT_BHAWAN,
  },
  {
    id: 'mehendi',
    title: 'Mehendi Night',
    icon: '🌿',
    date: '2026-11-24',
    time: '06:00 PM',
    ...BYAHUT_BHAWAN,
  },
  {
    id: 'barat',
    title: 'Barat (Wedding)',
    icon: '🐎',
    date: '2026-11-30',
    time: '07:00 PM',
    isRoute: true,
    from: 'Bhikhabandh',
    to: 'Maharajganj',
  },
]

export const venue = {
  name: BYAHUT_BHAWAN.location,
  addressLine1: BYAHUT_BHAWAN.place,
  addressLine2: 'Siwan',
  mapQuery: `${BYAHUT_BHAWAN.location}, ${BYAHUT_BHAWAN.place}, Siwan`,
}

export const specialNote = {
  heading: 'You Are Special',
  body: "Let's create beautiful memories together.",
  fullBody:
    'Your presence will make our wedding more special. We would be honoured to have you with us on this beautiful journey of love, laughter and togetherness.',
  sideText: ['Family', 'Friends', 'Forever'],
}

export const navLinks = [
  { label: 'Home', href: '#home', icon: '🏠' },
  { label: 'Events', href: '#events', icon: '🗓️' },
  { label: 'Gallery', href: '#gallery', icon: '🖼️' },
  { label: 'RSVP', href: '#rsvp', icon: '💌' },
]
