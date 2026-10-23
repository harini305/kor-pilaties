import Link from '@/components/Link';
import { nav, site } from '@/config/site';
import { booking } from '@/config/booking';
import { studios } from '@/data/studios';

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/brand/kor-logo-white.webp" alt="KOR Pilates Bali" width={285} height={160} loading="lazy" />
            <p>Reformer classes in Berawa. Mat classes in Pererenan.</p>
          </div>

          <div className="footer-col">
            <h2>Studios</h2>
            {Object.values(studios).map((s) => (
              <div className="footer-venue" key={s.id}>
                <strong>
                  {s.name}, {s.short}
                </strong>
                {s.address[0]}
                <br />
                {s.directions}
              </div>
            ))}
          </div>

          <div className="footer-col">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h2>Explore</h2>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>Copyright © 2026 KOR Pilates Bali</span>
          <a href={booking.account} target="_blank" rel="noopener noreferrer">
            Log in or view my bookings
          </a>
        </div>
      </div>
    </footer>
  );
}
