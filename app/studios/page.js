import PageIntro from '@/components/PageIntro';
import Picture from '@/components/Picture';
import VenueColumns from '@/components/VenueColumns';
import CtaBand from '@/components/CtaBand';
import { ImageReveal } from '@/components/Motion';
import { studios, openingHours } from '@/data/studios';
import { site } from '@/config/site';

export const metadata = {
  title: 'Studios',
  description:
    'KOR Berawa (Reformer, entrance behind MMART, 2nd floor) and KOR Pererenan (Mat, 2nd floor of CRATE Café Pererenan). Addresses, directions and opening hours.',
  alternates: { canonical: '/studios' },
};

export default function StudiosPage() {
  const photo = studios.berawa.image;
  return (
    <>
      <PageIntro
        title="Studios"
        split
        lead="Two studios, each with its own classes and packages. Reformer runs at Berawa; Mat runs on the second floor of CRATE Café in Pererenan."
      />

      <section className="section" style={{ paddingTop: 0 }} aria-label="Studio locations">
        <div className="container">
          <VenueColumns detailed />
        </div>
      </section>

      <section className="section" aria-labelledby="hours-title">
        <div className="container split">
          <figure className="figure">
            <ImageReveal className="media media--wide">
              <Picture name={photo.name} alt={photo.alt} sizes="(min-width: 900px) 50vw, 100vw" />
            </ImageReveal>
            <figcaption className="meta">The reformer studio at KOR Berawa.</figcaption>
          </figure>
          <div className="stack" style={{ '--stack': '20px' }}>
            <h2 id="hours-title">Opening hours</h2>
            <table className="hours">
              <caption className="visually-hidden">Opening hours</caption>
              <tbody>
                {openingHours.map((h) => (
                  <tr key={h.days}>
                    <th scope="row">{h.days}</th>
                    <td>{h.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="meta">
              As published on the booking system for the week of 23 October 2026. For holidays or anything unusual,
              message us on{' '}
              <a href={site.whatsapp} className="text-link" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
