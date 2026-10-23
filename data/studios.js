// Two venues registered as facilities of the single Rezerv location (audit 03 §1, 08 A2).
export const studios = {
  berawa: {
    id: 'berawa',
    name: 'KOR Berawa',
    facility: 'Group Reformer Studio – Berawa',
    teaches: 'Reformer group classes and 1-on-1 private sessions',
    short: 'Reformer',
    address: [
      'Gg. Pisang, Jl. Karang Suwung',
      'Tibubeneng, Kec. Kuta Utara',
      'Kabupaten Badung, Bali 80361',
    ],
    directions: 'Entrance behind MMART, 2nd floor',
    // Three different Google Maps links were found for Berawa (audit 08 A3).
    // Left empty until the client confirms one; the UI then offers "Copy address" instead.
    mapUrl: null,
    image: { name: 'studio-berawa', alt: 'Reformer machines lined up in the KOR Berawa studio' },
  },
  pererenan: {
    id: 'pererenan',
    name: 'KOR Pererenan',
    facility: 'Group Mat Studio – Pererenan',
    teaches: 'Mat group classes',
    short: 'Mat',
    address: ['Jl. Sempol No.8, Pererenan', 'Kec. Mengwi, Kabupaten Badung', 'Bali 80351'],
    directions: '2nd floor of CRATE Café Pererenan',
    // Same link used on both the packages page and the FAQ.
    mapUrl: 'https://maps.app.goo.gl/uff143y2en8a7MtH6',
    image: null,
  },
};

// Location-level hours as published for the week of 23 Oct 2026 (audit 08 A16).
export const openingHours = [
  { days: 'Monday – Friday', hours: '7am – 6pm' },
  { days: 'Saturday', hours: '8am – 11am' },
  { days: 'Sunday', hours: '9am – 11am' },
];
