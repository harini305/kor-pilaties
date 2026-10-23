// Business facts verified in docs/source-audit/03 §1.
export const site = {
  name: 'KOR Pilates Bali',
  tagline: 'KOR: More Than Pilates',
  // Canonical URLs and the sitemap: an explicit NEXT_PUBLIC_SITE_URL wins, then the
  // Vercel production domain (provided at build time), then localhost for local work.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
    'http://localhost:3000',
  email: 'operations@korbyhouseofpilates.com',
  phoneDisplay: '+62 811 3830 5165',
  phoneHref: 'tel:+6281138305165',
  whatsapp: 'https://wa.me/6281138305165',
  instagram: 'https://www.instagram.com/kor.bali/',
  instagramHandle: '@kor.bali',
};

export const nav = [
  { href: '/classes', label: 'Classes' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/timetable', label: 'Timetable' },
  { href: '/studios', label: 'Studios' },
  { href: '/team', label: 'Team' },
  { href: '/faq', label: 'FAQ' },
];
