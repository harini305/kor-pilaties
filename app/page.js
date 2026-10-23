import Link from '@/components/Link';
import Picture from '@/components/Picture';
import ButtonLink from '@/components/ButtonLink';
import CtaBand from '@/components/CtaBand';
import VenueColumns from '@/components/VenueColumns';
import { HeroMotion, ImageReveal } from '@/components/Motion';
import { classesIn, getClass } from '@/data/classes';
import { reformerPackages, matPackages, privatePackage, formatRp } from '@/data/packages';
import { studios, openingHours } from '@/data/studios';
import { team } from '@/data/team';

export const metadata = {
  title: { absolute: 'KOR Pilates Bali | Reformer and Mat Pilates in Berawa and Pererenan' },
  alternates: { canonical: '/' },
};

const featuredTeam = ['june-louie', 'charlotte-oktaviana-chandra', 'xavier-fabrega', 'christophe-blanc'];

export default function HomePage() {
  const reformer = classesIn('reformer');
  const mat = classesIn('mat');
  const privateClass = getClass('1-on-1-private-reformer-session');

  return (
    <>
      <HeroMotion className="hero">
        <div className="hero-media">
          <Picture
            name="hero-studio"
            alt="Rows of reformers in the bright KOR Berawa studio with floor-to-ceiling windows"
            sizes="100vw"
            priority
          />
        </div>
        <div className="container hero-content on-dark">
          <h1 data-hero-item>KOR: More Than Pilates</h1>
          <p className="hero-text" data-hero-item>
            Here, we move with purpose and feel deeply alive. Reformer classes in Berawa, Mat classes in
            Pererenan.
          </p>
          <div className="row-actions" data-hero-item>
            <ButtonLink href="/pricing" variant="light">
              Book your first class
            </ButtonLink>
            <ButtonLink href="/faq" variant="outline-light">
              New to KOR: FAQs
            </ButtonLink>
          </div>
        </div>
      </HeroMotion>

      <section className="section" aria-labelledby="classes-title">
        <div className="container">
          <div className="section-head section-head--split">
            <h2 id="classes-title">Our classes</h2>
            <p>
              From strength-building to mindful reformer sessions, our classes are crafted to challenge and restore at
              every level. Browse the schedule and find the one that moves you.
            </p>
          </div>

          <div className="practice-grid">
            {[
              { list: reformer, studio: studios.berawa, title: 'Reformer at Berawa', anchor: 'reformer', img: getClass('reformer-abs-n-ass').image },
              { list: mat, studio: studios.pererenan, title: 'Mat at Pererenan', anchor: 'mat', img: getClass('mat-flow').image },
            ].map((p) => (
              <article className="practice" key={p.anchor}>
                <ImageReveal className="media media--4x3">
                  <Picture name={p.img.name} alt={p.img.alt} sizes="(min-width: 768px) 50vw, 100vw" />
                </ImageReveal>
                <h3>{p.title}</h3>
                <p>
                  {p.studio.facility}. {p.studio.directions}.
                </p>
                <ul className="class-lines">
                  {p.list.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/classes/${c.slug}`}>
                        <span>{c.name}</span>
                        <span>{c.duration} min</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="private-strip">
            <div>
              <h3>{privateClass.name}</h3>
              <p className="meta">
                {privateClass.duration} minutes at KOR Berawa, {formatRp(privatePackage.price)} per session. Book your
                favorite instructor when the studio is available.
              </p>
            </div>
            <div className="row-actions">
              <ButtonLink href="/classes" variant="dark">
                See all classes
              </ButtonLink>
              <ButtonLink href="/timetable" variant="outline">
                View the timetable
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--panel" aria-labelledby="pricing-title">
        <div className="container price-snapshot">
          <div className="stack">
            <h2 id="pricing-title">Start with a single session</h2>
            <p className="lead">
              No package needed to try a class. Packs of 3 are marked best for first timers, and per-class prices drop
              as packs get bigger.
            </p>
            <p>
              <Link href="/pricing" className="text-link">
                Compare all 11 packages
              </Link>
            </p>
          </div>
          <div className="price-pair">
            {[
              { title: 'Reformer, KOR Berawa', list: reformerPackages },
              { title: 'Mat, KOR Pererenan', list: matPackages },
            ].map((col) => (
              <div key={col.title}>
                <h3>{col.title}</h3>
                <dl>
                  {col.list.slice(0, 3).map((p) => (
                    <div key={p.id}>
                      <dt>{p.name}</dt>
                      <dd>{formatRp(p.price)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="team-title">
        <div className="container">
          <div className="section-head section-head--split">
            <h2 id="team-title">The people teaching</h2>
            <p>
              Two lead instructors, one with more than 13 years in Pilates and one with over two decades in fitness,
              alongside a team that teaches group and private reformer classes.{' '}
              <Link href="/team" className="text-link">
                Meet the team
              </Link>
            </p>
          </div>
          <ul className="team-strip" style={{ listStyle: 'none' }}>
            {featuredTeam.map((slug) => {
              const m = team.find((t) => t.slug === slug);
              return (
                <li key={slug}>
                  <Link href={`/team#${slug}`} className="person-link">
                    <div className="media media--portrait">
                      <Picture name={`team-${slug}`} alt={`Portrait of ${m.name}`} sizes="(min-width: 1000px) 25vw, 60vw" />
                    </div>
                    <p className="person-name">{m.name}</p>
                    <p className="person-role">{m.role}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="studios-title">
        <div className="container">
          <div className="section-head section-head--split">
            <h2 id="studios-title">Find us</h2>
            <p>
              Open Monday to Friday {openingHours[0].hours}, Saturday {openingHours[1].hours}, Sunday{' '}
              {openingHours[2].hours}.{' '}
              <Link href="/studios" className="text-link">
                Directions and hours
              </Link>
            </p>
          </div>
          <VenueColumns headingLevel="h3" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
