// Ten FAQs in their three published groups (audit 03 §6).
// Answers are verbatim except: the sharing and validity-start answers, which conflict
// with system settings (08 A4, A5) and are reworded so they don't state either side as
// fact; the Berawa map link, which conflicts with two other links (08 A3); and the
// "grips socks" typo.

export const faqGroups = [
  {
    id: 'getting-ready',
    title: 'Getting ready for class',
    items: [
      {
        q: 'I am new to Pilates, which class should I start with?',
        a: [
          'All our classes are designed to welcome every level, so you can jump in anywhere. That said, if you want to truly connect with the spirit and essence of Pilates, we recommend starting with our Reformer Flow class.',
        ],
        link: { href: '/classes/reformer-flow', label: 'About Reformer Flow' },
      },
      {
        q: 'How early should I arrive before the class?',
        a: [
          'We recommend arriving at least 10 minutes early so you have time to settle in, meet your instructor, and set up your reformer at ease.',
          'First time on the reformer? Even better reason to arrive early — our team is happy to walk you through the setup and answer any questions before class begins.',
        ],
      },
      {
        q: 'Do I need grip socks for the class?',
        a: [
          "Yes! Grip socks are required for every session — they keep you safely anchored on the reformer and help maintain studio hygiene. Don't have a pair? No worries, we have some available for purchase at the studio.",
        ],
      },
      {
        q: 'What should I wear for class?',
        a: [
          "Comfortable, fitted activewear works best — breathable fabrics let you move freely, while a closer fit keeps you safe from getting caught in the reformer's springs and mechanics.",
          'If you have long hair, we recommend tying it back to keep it out of the way as well.',
        ],
      },
      {
        q: 'Is all the equipment provided?',
        a: [
          "Yes! At KÔR, we provide the reformer and all the props you'll need for class, plus hand towels available at reception. Just bring your workout gear, grip socks, and great energy — we've got the rest covered.",
        ],
      },
    ],
  },
  {
    id: 'packages',
    title: 'Packages',
    items: [
      {
        q: 'Do I need to buy a multi-session package?',
        a: ['Not at all — you can drop in with a single session, available for 7 days after purchase.'],
        link: { href: '/pricing', label: 'See all prices' },
      },
      {
        q: 'Can I share my package with my friends?',
        a: ['Please message us on WhatsApp before buying a package to share, and we’ll confirm what’s possible for your package.'],
        whatsapp: true,
      },
      {
        q: 'When does the validity period start?',
        a: [
          'For most packages, validity starts from your purchase date. If you’re unsure when yours starts, message us and we’ll check for you.',
        ],
        whatsapp: true,
      },
      {
        q: 'How long is my 10-session package valid?',
        a: ['Your 10-session package is valid for 2 months from the date of purchase.'],
      },
    ],
  },
  {
    id: 'location',
    title: 'Location',
    items: [
      {
        q: 'Can you share your Google Maps location?',
        a: [
          'Group Reformer Studio – Berawa: located on the second floor, behind MMART.',
          'Group Mat Studio – Pererenan: located on the second floor of CRATE Café Pererenan.',
        ],
        link: { href: '/studios', label: 'Addresses and directions' },
      },
    ],
  },
];
