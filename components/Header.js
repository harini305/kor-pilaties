'use client';

import Link from '@/components/Link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import ButtonLink from './ButtonLink';
import { WhatsAppIcon } from './Icons';
import { nav, site } from '@/config/site';
import { booking } from '@/config/booking';

function isCurrent(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  // Close on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    document.documentElement.dataset.menu = open ? 'open' : 'closed';
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1100) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="KOR Pilates Bali, home">
          <img src="/brand/kor-logo-white.webp" alt="" width={285} height={160} />
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="header-login" href={booking.account} target="_blank" rel="noopener noreferrer">
            Log in
          </a>
          <a
            className="header-wa"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with KOR on WhatsApp (opens in a new tab)"
          >
            <WhatsAppIcon />
          </a>
          <ButtonLink href="/timetable" variant="light" size="sm" className="header-book">
            Book a class
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span className="menu-toggle-bars" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" data-open={open} inert={!open || undefined}>
        <div className="container">
          <nav aria-label="Main">
            <ul>
              {[...nav, { href: '/contact', label: 'Contact' }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="mobile-menu-link"
                    aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-menu-actions">
            <ButtonLink href="/timetable" variant="light">
              Book a class
            </ButtonLink>
            <ButtonLink href={site.whatsapp} variant="outline-light" icon={<WhatsAppIcon />} newTab>
              WhatsApp us
            </ButtonLink>
            <ButtonLink href={booking.account} variant="outline-light">
              Log in or view my bookings
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
