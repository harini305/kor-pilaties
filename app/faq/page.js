import PageIntro from '@/components/PageIntro';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBand from '@/components/CtaBand';
import { faqGroups } from '@/data/faq';

export const metadata = {
  title: 'FAQ',
  description:
    'New to KOR Pilates Bali? Which class to start with, when to arrive, grip socks, what to wear, packages and how to find our Berawa and Pererenan studios.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a.join(' ') },
      }))
    ),
  };

  return (
    <>
      <PageIntro
        title="Frequently asked questions"
        split
        lead="New to KOR? Start here: what to bring, how packages work, and how to find each studio."
      />

      <section className="section" style={{ paddingTop: 0 }} aria-label="Questions">
        <div className="container faq-layout">
          <nav className="faq-nav" aria-label="FAQ topics">
            <div className="chip-nav">
              {faqGroups.map((g) => (
                <a key={g.id} href={`#${g.id}`} className="chip">
                  {g.title}
                </a>
              ))}
            </div>
          </nav>
          <div>
            {faqGroups.map((g) => (
              <section key={g.id} id={g.id} className="faq-group" aria-labelledby={`${g.id}-title`}>
                <h2 id={`${g.id}-title`}>{g.title}</h2>
                <FaqAccordion group={g} />
              </section>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Still have a question?" text="Message us on WhatsApp and the team will help, or book straight in on the live timetable." />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
