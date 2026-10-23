'use client';

import { useEffect, useRef, useState } from 'react';
import Picture from './Picture';
import { CloseIcon } from './Icons';

// Portrait grid with a bio dialog. Members without a bio on record get no bio button.
export default function TeamGrid({ members }) {
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) dialog.showModal();
  }, [active]);

  // Deep link from the home page (/team#slug) opens that bio.
  useEffect(() => {
    const slug = window.location.hash.slice(1);
    const match = members.find((m) => m.slug === slug && m.bio);
    if (match) setActive(match);
  }, [members]);

  const open = (member, e) => {
    openerRef.current = e.currentTarget;
    setActive(member);
  };

  const close = () => dialogRef.current?.close();

  const onClose = () => {
    setActive(null);
    openerRef.current?.focus();
  };

  return (
    <>
      <ul className="team-grid">
        {members.map((m) => (
          <li key={m.slug} id={m.slug} className="team-member">
            <div className="media media--portrait">
              <Picture
                name={`team-${m.slug}`}
                alt={`Portrait of ${m.name}`}
                sizes="(min-width: 1100px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </div>
            <h2 className="person-name">{m.name}</h2>
            <p className="person-role">{m.role}</p>
            <p className="team-teaches">{m.teaches}</p>
            {m.bio && (
              <button type="button" className="bio-button" onClick={(e) => open(m, e)} aria-haspopup="dialog">
                Read {m.name.split(' ')[0]}’s bio
              </button>
            )}
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="bio-dialog"
        aria-labelledby="bio-title"
        onClose={onClose}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {active && (
          <div className="bio-dialog-inner">
            <button type="button" className="bio-close" onClick={close} aria-label="Close bio">
              <CloseIcon />
            </button>
            <div className="media">
              <Picture name={`team-${active.slug}`} alt="" sizes="(min-width: 768px) 380px, 100vw" />
            </div>
            <div className="bio-dialog-text">
              <div>
                <h2 id="bio-title">{active.name}</h2>
                <p className="person-role">
                  {active.role}, {active.teaches.toLowerCase()}
                </p>
              </div>
              <div className="prose">
                {active.bio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
