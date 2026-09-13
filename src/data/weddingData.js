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

export const events = [
  {
    id: 'tilak',
    title: 'Tilak Ceremony',
    icon: '🪔',
    date: '2026-11-25',
    time: '10:00 AM',
    location: 'Byahut Bhawan',
    place: 'Bhikhabandh',
  },
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    icon: '🌼',
    date: null,
    time: '10:00 AM',
    location: 'Byahut Bhawan',
    place: 'Bhikhabandh',
  },
  {
    id: 'mehendi',
    title: 'Mehendi Night',
    icon: '🌿',
    date: '2026-11-24',
    time: '06:00 PM',
    location: 'Byahut Bhawan',
    place: 'Bhikhabandh',
  },
  {
    id: 'barat',
    title: 'Barat (Wedding)',
    icon: '🐎',
    date: '2026-11-30',
    time: '07:00 PM',
    isRoute: true,
    from: 'Mahadevganj',
    to: 'Ayodhya Bhawan',
  },
]

export const venue = {
  name: 'Ayodhya Bhawan',
  addressLine1: 'Mahadevganj',
  addressLine2: 'Uttar Pradesh',
  mapQuery: 'Ayodhya Bhawan, Mahadevganj, Uttar Pradesh',
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
