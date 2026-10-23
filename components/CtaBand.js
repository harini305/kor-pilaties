import ButtonLink from './ButtonLink';
import { WhatsAppIcon } from './Icons';
import { site } from '@/config/site';

// Closing booking prompt, used at the end of most pages.
export default function CtaBand({
  title = 'Book your next class',
  text = 'See the schedule and pick a time. Questions first? Message us on WhatsApp.',
  bookHref = '/timetable',
  bookLabel = 'Book a class',
}) {
  return (
    <section className="section section--panel" aria-labelledby="cta-title">
      <div className="container cta-band">
        <div className="stack">
          <h2 id="cta-title">{title}</h2>
          <p className="lead">{text}</p>
        </div>
        <div className="row-actions">
          <ButtonLink href={bookHref}>{bookLabel}</ButtonLink>
          <ButtonLink href={site.whatsapp} variant="outline" icon={<WhatsAppIcon />} newTab>
            WhatsApp us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
