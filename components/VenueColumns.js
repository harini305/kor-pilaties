import Link from '@/components/Link';
import ButtonLink from './ButtonLink';
import CopyAddress from './CopyAddress';
import { studios } from '@/data/studios';
import { classesIn } from '@/data/classes';

const classLinks = {
  berawa: [...classesIn('reformer'), ...classesIn('private')],
  pererenan: classesIn('mat'),
};

// Both venues side by side with identical rows (CSS subgrid), so names, addresses,
// directions and actions line up across the two columns.
export default function VenueColumns({ headingLevel = 'h2', detailed = false }) {
  const Heading = headingLevel;
  return (
    <div className={`venue-cols${detailed ? ' venue-cols--detailed' : ''}`}>
      {Object.values(studios).map((s) => (
        <section key={s.id} id={detailed ? s.id : undefined} className="venue-col" aria-labelledby={`venue-${s.id}`}>
          <Heading id={`venue-${s.id}`} className="venue-name">
            {s.name}
          </Heading>
          <p className="venue-teaches">{s.teaches}</p>
          <dl className="venue-fact">
            <dt>Address</dt>
            <dd>
              <address className="address">
                {s.address.map((line) => (
                  <span key={line} style={{ display: 'block' }}>
                    {line}
                  </span>
                ))}
              </address>
            </dd>
          </dl>
          <dl className="venue-fact">
            <dt>Finding us</dt>
            <dd>{s.directions}</dd>
          </dl>
          {detailed && (
            <dl className="venue-fact">
              <dt>Classes here</dt>
              <dd>
                {classLinks[s.id].map((c, idx) => (
                  <span key={c.slug}>
                    {idx > 0 && ', '}
                    <Link href={`/classes/${c.slug}`} className="text-link">
                      {c.name}
                    </Link>
                  </span>
                ))}
              </dd>
            </dl>
          )}
          {detailed && (
            <div className="venue-action">
              {s.mapUrl ? (
                <div className="row-actions">
                  <ButtonLink href={s.mapUrl} variant="outline">
                    Open in Google Maps
                  </ButtonLink>
                </div>
              ) : (
                <CopyAddress text={`${s.name}, ${s.address.join(', ')} (${s.directions})`} />
              )}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
