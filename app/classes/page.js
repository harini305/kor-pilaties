import Link from '@/components/Link';
import PageIntro from '@/components/PageIntro';
import ClassMedia from '@/components/ClassMedia';
import ButtonLink from '@/components/ButtonLink';
import CtaBand from '@/components/CtaBand';
import ClassFacts from '@/components/ClassFacts';
import { categories, classesIn, guidelines } from '@/data/classes';
import { studios } from '@/data/studios';
import { privatePackage, formatRp } from '@/data/packages';

export const metadata = {
  title: 'Classes',
  description:
    'Reformer Flow, Reformer Strength and Reformer Abs n’ Ass at KOR Berawa; Mat Flow, Booty Lab and Mat Burn at KOR Pererenan; plus 1-on-1 private reformer sessions.',
  alternates: { canonical: '/classes' },
};

export default function ClassesPage() {
  return (
    <>
      <PageIntro
        title="Classes"
        split
        lead="Reformer classes at our Berawa studio, Mat classes on the second floor of CRATE Café in Pererenan, and private sessions on the reformer."
      >
        <nav className="chip-nav" aria-label="Class types">
          {Object.values(categories).map((c) => (
            <a key={c.id} href={`#${c.id}`} className="chip">
              {c.title}
            </a>
          ))}
        </nav>
      </PageIntro>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {Object.values(categories).map((cat) => {
            const studio = studios[cat.studio];
            return (
              <section key={cat.id} id={cat.id} className="category" aria-labelledby={`${cat.id}-title`}>
                <div className="category-head">
                  <h2 id={`${cat.id}-title`}>{cat.title}</h2>
                  <div className="stack" style={{ '--stack': '6px' }}>
                    <p>{cat.intro}</p>
                    <p className="meta">
                      {studio.facility}. {studio.directions}.
                    </p>
                  </div>
                </div>

                <div className={cat.id === 'private' ? 'class-feature' : 'class-grid'}>
                  {classesIn(cat.id).map((item) => (
                    <article key={item.slug} className="class-card">
                      <Link href={`/classes/${item.slug}`} tabIndex={-1} aria-hidden="true" className="class-card-media">
                        <ClassMedia
                          item={item}
                          sizes={cat.id === 'private' ? '(min-width: 900px) 50vw, 100vw' : '(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw'}
                        />
                      </Link>
                      <h3>
                        <Link href={`/classes/${item.slug}`}>{item.name}</Link>
                      </h3>
                      <ClassFacts item={item} />
                      <div className="class-card-text">
                        {(cat.id === 'private' ? item.description : item.description.slice(0, 1)).map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                        {item.note && <p className="note">{item.note}</p>}
                        {cat.id === 'private' && (
                          <p>
                            <span className="price-figure">{formatRp(privatePackage.price)}</span> per session, valid{' '}
                            {privatePackage.validity} from purchase.
                          </p>
                        )}
                      </div>
                      <div className="row-actions">
                        <ButtonLink href={`/classes/${item.slug}`} variant="outline" size="sm">
                          Class details
                        </ButtonLink>
                        {cat.id === 'private' && (
                          <ButtonLink href="/pricing#private" size="sm">
                            Private pricing
                          </ButtonLink>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <section className="section" aria-labelledby="prep-title">
        <div className="container prep-grid">
          <div>
            <h2 id="prep-title">Before group classes</h2>
            <p className="prose">These guidelines apply to every Reformer and Mat group class.</p>
          </div>
          <ul className="check-list">
            {guidelines.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
