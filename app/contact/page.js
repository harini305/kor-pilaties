import Link from '@/components/Link';
import PageIntro from '@/components/PageIntro';
import { WhatsAppIcon, PhoneIcon, MailIcon, InstagramIcon, ExternalIcon } from '@/components/Icons';
import { site } from '@/config/site';
import { studios, openingHours } from '@/data/studios';

export const metadata = {
  title: 'Contact',
  description: `Contact KOR Pilates Bali on WhatsApp or by phone at ${site.phoneDisplay}, by email at ${site.email}, or on Instagram ${site.instagramHandle}.`,
  alternates: { canonical: '/contact' },
};

const channels = [
  { href: site.whatsapp, icon: WhatsAppIcon, label: 'WhatsApp', value: site.phoneDisplay, note: 'The quickest way to reach us', external: true },
  { href: site.phoneHref, icon: PhoneIcon, label: 'Phone', value: site.phoneDisplay, note: 'Call the studio' },
  { href: `mailto:${site.email}`, icon: MailIcon, label: 'Email', value: site.email, note: 'For anything that needs more detail' },
  { href: site.instagram, icon: InstagramIcon, label: 'Instagram', value: site.instagramHandle, note: 'Follow KOR Bali', external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro title="Contact" split lead="We’re here to help. Message us on WhatsApp, call, email, or find us on Instagram." />

      <section className="section" style={{ paddingTop: 0 }} aria-label="Contact details">
        <div className="container contact-grid">
          <ul className="contact-list">
            {channels.map(({ href, icon: Icon, label, value, note, external }) => (
              <li key={label}>
                <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  <Icon />
                  <span>
                    <small>{label}</small>
                    <strong>{value}</strong>
                    <small>{note}</small>
                  </span>
                  <span className="go" aria-hidden="true">
                    <ExternalIcon width={18} height={18} />
                  </span>
                  {external && <span className="visually-hidden"> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>

          <aside>
            <div className="aside-block">
              <h2>New to KOR?</h2>
              <p>
                Check out our{' '}
                <Link href="/faq" className="text-link">
                  frequently asked questions
                </Link>{' '}
                on which class to start with, what to bring and how packages work.
              </p>
            </div>
            <div className="aside-block">
              <h2>Studios</h2>
              {Object.values(studios).map((s) => (
                <p key={s.id} style={{ marginBottom: 12 }}>
                  <strong style={{ color: 'var(--black)', fontWeight: 500 }}>
                    {s.name}, {s.short}
                  </strong>
                  <br />
                  {s.address.join(', ')}. {s.directions}.
                </p>
              ))}
              <Link href="/studios" className="text-link">
                Directions and details
              </Link>
            </div>
            <div className="aside-block">
              <h2>Opening hours</h2>
              <table className="hours">
                <tbody>
                  {openingHours.map((h) => (
                    <tr key={h.days}>
                      <th scope="row">{h.days}</th>
                      <td>{h.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
