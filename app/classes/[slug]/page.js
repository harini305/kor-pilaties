import Link from '@/components/Link';
import { notFound } from 'next/navigation';
import ClassMedia from '@/components/ClassMedia';
import ClassFacts from '@/components/ClassFacts';
import ButtonLink from '@/components/ButtonLink';
import CtaBand from '@/components/CtaBand';
import { WhatsAppIcon } from '@/components/Icons';
import { classes, getClass, classesIn, categories, guidelines } from '@/data/classes';
import { privatePackage, formatRp } from '@/data/packages';
import { packageUrl } from '@/config/booking';
import { site } from '@/config/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return classes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getClass(slug);
  if (!item) return {};
  const studio = item.category === 'mat' ? 'KOR Pererenan' : 'KOR Berawa';
  return {
    title: item.name,
    description: `${item.name}: ${item.duration}-minute ${categories[item.category].title.toLowerCase()} class at ${studio}, Bali. ${item.description[0]}`.slice(0, 300),
    alternates: { canonical: `/classes/${slug}` },
  };
}

function BookingActions({ item }) {
  if (item.category === 'private') {
    return (
      <>
        <p>
          <strong style={{ color: 'var(--black)' }}>{formatRp(privatePackage.price)}</strong> per session, valid for{' '}
          {privatePackage.validity} after purchase.
        </p>
        <div className="row-actions">
          <ButtonLink href={packageUrl(privatePackage.id)}>Buy a private session</ButtonLink>
          <ButtonLink href={site.whatsapp} variant="outline" icon={<WhatsAppIcon />} newTab>
            Ask about times
          </ButtonLink>
        </div>
      </>
    );
  }
  return (
    <div className="row-actions">
      <ButtonLink href="/timetable">Book this class</ButtonLink>
      <ButtonLink href={`/pricing#${item.category}`} variant="outline">
        {categories[item.category].title} prices
      </ButtonLink>
    </div>
  );
}

export default async function ClassDetailPage({ params }) {
  const { slug } = await params;
  const item = getClass(slug);
  if (!item) notFound();

  const related = classes.filter((c) => c.slug !== item.slug && (c.category === item.category || item.category === 'private'));
  const others = related.length ? related : classesIn('reformer');

  return (
    <>
      <div className="container page-intro">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li>
              <Link href="/classes">Classes</Link>
            </li>
            <li>
              <Link href={`/classes#${item.category}`}>{categories[item.category].title}</Link>
            </li>
            <li aria-current="page">{item.name}</li>
          </ol>
        </nav>

        <div className="detail">
          <div className="detail-body">
            <h1>{item.name}</h1>
            <ClassFacts item={item} />
            <div className="prose">
              {item.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {item.note && <p className="note">{item.note}</p>}
            <BookingActions item={item} />
          </div>
          <ClassMedia item={item} sizes="(min-width: 900px) 50vw, 100vw" priority />
        </div>
      </div>

      <section className="section section--tight" aria-labelledby="bring-title">
        <div className="container prep-grid">
          <div>
            <h2 id="bring-title">What to bring</h2>
            <ul className="check-list">
              {item.needs.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
          {item.category !== 'private' && (
            <div>
              <h2>Class guidelines</h2>
              <ul className="check-list">
                {guidelines.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="related-title">
        <div className="container">
          <h2 id="related-title" style={{ marginBottom: 20 }}>
            {item.category === 'private' ? 'Group classes' : `More ${categories[item.category].title} classes`}
          </h2>
          <ul className="related">
            {others.map((c) => (
              <li key={c.slug}>
                <Link href={`/classes/${c.slug}`}>
                  <span>{c.name}</span>
                  <span>{c.duration} min</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
