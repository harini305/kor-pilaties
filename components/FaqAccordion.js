'use client';

import Link from '@/components/Link';
import { useState } from 'react';
import { site } from '@/config/site';

// Accessible accordion: buttons expose aria-expanded / aria-controls; panels animate
// height via grid-template-rows and are hidden from assistive tech while closed.
export default function FaqAccordion({ group }) {
  const [openIds, setOpenIds] = useState(() => new Set());

  const toggle = (id) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <ul className="faq-list">
      {group.items.map((item, i) => {
        const id = `${group.id}-${i}`;
        const isOpen = openIds.has(id);
        return (
          <li key={id} className="faq-item">
            <h3>
              <button
                type="button"
                className="faq-trigger"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                id={`${id}-button`}
                onClick={() => toggle(id)}
              >
                {item.q}
                <span className="plus" aria-hidden="true" />
              </button>
            </h3>
            <div
              className="faq-panel"
              id={`${id}-panel`}
              role="region"
              aria-labelledby={`${id}-button`}
              data-open={isOpen}
              inert={!isOpen || undefined}
            >
              <div>
                <div className="faq-answer">
                  {item.a.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {(item.link || item.whatsapp) && (
                    <p>
                      {item.link && (
                        <Link href={item.link.href} className="text-link">
                          {item.link.label}
                        </Link>
                      )}
                      {item.link && item.whatsapp && ' or '}
                      {item.whatsapp && (
                        <a href={site.whatsapp} className="text-link" target="_blank" rel="noopener noreferrer">
                          Message us on WhatsApp
                        </a>
                      )}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
