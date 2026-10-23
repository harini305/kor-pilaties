import Link from '@/components/Link';
import { ExternalIcon } from './Icons';

// Pill button for internal routes and external destinations (booking, WhatsApp, maps).
// External links get an icon and a screen-reader hint so it's clear they open elsewhere.
export default function ButtonLink({ href, variant = 'dark', size, external, newTab: newTabProp, className = '', children, icon, ...rest }) {
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  // Web destinations (Rezerv booking, WhatsApp, Maps) open in a new tab so the KOR site stays open.
  const newTab = newTabProp ?? /^https?:/.test(href);
  const classes = ['btn', `btn--${variant}`, size && `btn--${size}`, className].filter(Boolean).join(' ');

  if (!isExternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {icon}
      {children}
      {!icon && /^https?:/.test(href) && <ExternalIcon />}
      {newTab && <span className="visually-hidden"> (opens in a new tab)</span>}
    </a>
  );
}
