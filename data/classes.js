// Seven published classes (audit 03 §3). Descriptions are verbatim except for the
// fixes listed in 08 C: class names restored at the start of sentences, doubled
// periods and missing final periods corrected. Display names use title case.

export const guidelines = [
  'Please bring your own tumbler to stay hydrated.',
  'Grip socks are required for safety and hygiene.',
  'Late arrivals of more than 5 minutes will not be permitted to join the class.',
];

export const classes = [
  {
    slug: 'reformer-flow',
    name: 'Reformer Flow',
    category: 'reformer',
    duration: 50,
    level: 'Open to all',
    summary: 'Designed to cater to all levels of experience.',
    description: [
      'Designed to cater to all levels of experience. Master the essentials then leave the class feeling good and energized.',
    ],
    note: 'Our recommended first class if you are new to Pilates.',
    needs: ['Grip socks', 'Water bottle', 'Hand towel'],
    image: { name: 'class-reformer-flow', alt: 'Instructor guiding a client through a Reformer Flow exercise' },
  },
  {
    slug: 'reformer-strength',
    name: 'Reformer Strength',
    category: 'reformer',
    duration: 50,
    level: 'Open to all',
    summary: 'Full body strength training on a reformer.',
    description: ['Full body strength training on a reformer.'],
    needs: ['Grip socks', 'Water bottle', 'Towel'],
    image: { name: 'class-reformer-strength', alt: 'Clients holding a kneeling plank on the reformer carriage' },
  },
  {
    slug: 'reformer-abs-n-ass',
    name: "Reformer Abs n' Ass",
    category: 'reformer',
    duration: 50,
    level: 'Open to all',
    summary: "This isn't just about crunches and squats.",
    description: [
      "This isn't just about crunches and squats; it's about sculpting a to-die-for tush and sizzling abs.",
    ],
    needs: ['Grip socks', 'Water bottle', 'Towel'],
    image: { name: 'class-reformer-abs-n-ass', alt: 'A group class stretching on reformers by the studio windows' },
  },
  {
    slug: 'mat-flow',
    name: 'Mat Flow',
    category: 'mat',
    duration: 50,
    level: 'Open to all',
    summary: 'Classical technique meets contemporary movement.',
    description: [
      'Mat Flow is a full-body Pilates experience that fuses classical technique with contemporary movement for strength, balance, and energy.',
      'Guided by the core principles of precision, focus, and flow, each class leaves you feeling grounded, centered, and revitalized. Perfect for all levels — just bring your grip socks and open mind.',
    ],
    needs: ['Grip socks', 'Water bottle', 'Towel'],
    image: { name: 'class-mat-flow', alt: 'Instructor holding a bird-dog balance on a mat' },
  },
  {
    slug: 'booty-lab',
    name: 'Booty Lab',
    category: 'mat',
    duration: 50,
    level: 'Open to all',
    summary: 'Glutes, legs and core through dynamic, controlled movement.',
    description: [
      'Booty Lab is a Mat Pilates class focused on sculpting the glutes, legs, and core through dynamic yet controlled movement.',
      'Blending Pilates precision with strength training principles, each session challenges your power and endurance while keeping you supported and energized from start to finish.',
    ],
    needs: ['Grip socks', 'Water bottle', 'Towel'],
    image: null,
  },
  {
    slug: 'mat-burn',
    name: 'Mat Burn',
    category: 'mat',
    duration: 50,
    // Level withheld: the description says advanced, the system says open to all (08 A9).
    level: null,
    summary: 'Built on Mat Flow, for those ready to go further.',
    description: [
      'Mat Burn is an advanced mat Pilates class built on the foundations of Mat Flow, designed for those ready to take their practice further.',
      'Each session delivers higher physical intensity while maintaining the Pilates focus on control, precision, and flow. Supportive yet challenging, this class is ideal for experienced movers seeking deeper strength and refined technique.',
    ],
    needs: ['Grip socks', 'Water bottle', 'Towel'],
    image: null,
  },
  {
    slug: '1-on-1-private-reformer-session',
    name: '1 on 1 Private Reformer',
    category: 'private',
    duration: 60,
    level: 'Open to all',
    summary: 'Tailor made for your own objective.',
    description: [
      '1 on 1 sessions are tailor made for your own objective.',
      'Schedule a time with your favorite instructor and get your goal nailed.',
    ],
    needs: ['Grip socks', 'Water bottle'],
    image: { name: 'class-private-reformer', alt: 'Instructor adjusting a client on the reformer during a private session' },
  },
];

export const categories = {
  reformer: {
    id: 'reformer',
    title: 'Reformer',
    studio: 'berawa',
    intro:
      'Group classes on the reformer that help improve strength, flexibility, and posture through guided, full-body workouts.',
  },
  mat: {
    id: 'mat',
    title: 'Mat',
    studio: 'pererenan',
    intro:
      'Mat Pilates group classes that help improve coordination, strength, flexibility, and posture through guided, full-body workouts.',
  },
  private: {
    id: 'private',
    title: 'Private',
    studio: 'berawa',
    intro: 'One instructor, one reformer, and a session built around your goal.',
  },
};

export function getClass(slug) {
  return classes.find((c) => c.slug === slug);
}

export function classesIn(category) {
  return classes.filter((c) => c.category === category);
}

export function slugForClassName(name) {
  const n = name.toLowerCase();
  return classes.find((c) => c.name.toLowerCase() === n)?.slug;
}
