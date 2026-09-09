// Central place for all wedding details.
// Update dates, venues and route here — every section reads from this file.
// Use null for anything not finalised yet; the UI will show "Coming Soon".

export const couple = {
  groomName: 'Ramlakhan',
  brideName: 'Sangeeta',
  tagline: 'Together Forever',
  subheading: 'ARE GETTING MARRIED',
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
    time: null,
    location: 'Byahut Bhawan',
    place: 'Bhikhabandh',
  },
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    icon: '🌼',
    date: null,
    time: null,
    location: null,
    place: null,
  },
  {
    id: 'mehendi',
    title: 'Mehendi Night',
    icon: '🤲',
    date: null,
    time: null,
    location: null,
    place: null,
  },
  {
    id: 'barat',
    title: 'Barat (Wedding)',
    icon: '🐎',
    date: '2026-11-30',
    time: null,
    isRoute: true,
    from: 'Bhikhabandh',
    to: 'Maharajganj',
  },
]

export const venue = {
  name: 'Byahut Bhawan',
  addressLine1: 'Bhikhabandh',
  addressLine2: 'Maharajganj',
  mapQuery: 'Byahut Bhawan, Bhikhabandh',
}

export const specialNote = {
  heading: 'You Are Special',
  body:
    'Your presence will make our wedding more special. We would be honoured to have you with us on this beautiful journey of love, laughter and togetherness.',
  sideText: ['Family', 'Friends', 'Forever'],
}
