import Link from '@/components/Link';
import PageIntro from '@/components/PageIntro';
import PriceTable from '@/components/PriceTable';
import ButtonLink from '@/components/ButtonLink';
import CtaBand from '@/components/CtaBand';
import { WhatsAppIcon } from '@/components/Icons';
import { reformerPackages, matPackages, privatePackage, packageTerms, packageScope, formatRp } from '@/data/packages';
import { guidelines } from '@/data/classes';
import { studios } from '@/data/studios';
import { booking, packageUrl } from '@/config/booking';
import { site } from '@/config/site';

export const metadata = {
  title: 'Pricing',
  description:
    'KOR Pilates Bali packages in Indonesian rupiah: Reformer group classes at KOR Berawa from Rp250,000, Mat classes at KOR Pererenan from Rp200,000, and 1-on-1 private sessions.',
  alternates: { canonical: '/pricing' },
};

const sections = [
  {
    id: 'reformer',
    title: 'Reformer group classes',
    studio: studios.berawa,
    packages: reformerPackages,
    classes: 'Reformer Flow, Reformer Strength and Reformer Abs n’ Ass',
    buyLabel: 'Buy a Reformer package',
  },
  {
    id: 'mat',
    title: 'Mat group classes',
    studio: studios.pererenan,
    packages: matPackages,
    classes: 'Mat Flow, Booty Lab and Mat Burn',
    buyLabel: 'Buy a Mat package',
  },
];

export default function PricingPage() {
  return (
    <>
      <PageIntro
        title="Pricing"
        split
        lead="All prices are in Indonesian rupiah. Reformer and Mat packages are separate: each is used at its own studio."
      >
        <nav className="chip-nav" aria-label="Package types">
          <a href="#reformer" className="chip">
            Reformer
          </a>
          <a href="#mat" className="chip">
            Mat
          </a>
          <a href="#private" className="chip">
            Private
          </a>
        </nav>
      </PageIntro>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="price-section" aria-labelledby={`${s.id}-title`}>
              <div className="price-head">
                <div className="stack" style={{ '--stack': '10px' }}>
                  <h2 id={`${s.id}-title`}>{s.title}</h2>
                  <p>
                    At {s.studio.name}: {s.classes}. 50-minute sessions, open to all levels.
                  </p>
                </div>
                <ButtonLink href={booking.packages}>{s.buyLabel}</ButtonLink>
              </div>

              <PriceTable caption={`${s.title} packages at ${s.studio.name}`} packages={s.packages} />

              <details className="disclosure">
                <summary>
                  What’s included and package terms
                  <span className="plus" aria-hidden="true" />
                </summary>
                <div className="disclosure-body stack">
                  <p>
                    {packageScope} Packages are for {s.id === 'mat' ? 'Mat classes at KOR Pererenan' : 'Reformer group classes at KOR Berawa'}.
                    Limited spots, so booking in advance is recommended.
                  </p>
                  <ul className="check-list">
                    {guidelines.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                  <p className="meta">{packageTerms}</p>
                </div>
              </details>
            </section>
          ))}

          <section id="private" className="price-section" aria-labelledby="private-title">
            <div className="private-card on-dark">
              <div className="stack" style={{ '--stack': '10px' }}>
                <h2 id="private-title">{privatePackage.name}</h2>
                <p>{privatePackage.description}</p>
              </div>
              <div className="stack" style={{ '--stack': '8px' }}>
                <span className="price-figure">{formatRp(privatePackage.price)}</span>
                <dl className="facts">
                  <div>
                    <dt>Session</dt>
                    <dd>60 min</dd>
                  </div>
                  <div>
                    <dt>Studio</dt>
                    <dd>KOR Berawa</dd>
                  </div>
                  <div>
                    <dt>Valid for</dt>
                    <dd>{privatePackage.validity}</dd>
                  </div>
                </dl>
              </div>
              <div className="row-actions">
                <ButtonLink href={packageUrl(privatePackage.id)} variant="light">
                  Buy a private session
                </ButtonLink>
                <ButtonLink href={site.whatsapp} variant="outline-light" icon={<WhatsAppIcon />} newTab>
                  Ask about times
                </ButtonLink>
              </div>
            </div>
            <p className="meta" style={{ marginTop: 16 }}>
              Buying opens the KOR booking site, where you sign in to pay. Questions about packages?{' '}
              <Link href="/faq#packages" className="text-link">
                Read the package FAQs
              </Link>
              .
            </p>
          </section>
        </div>
      </div>

      <CtaBand title="Ready to book?" />
    </>
  );
}
