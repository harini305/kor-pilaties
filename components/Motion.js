'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const MOTION_OK = '(prefers-reduced-motion: no-preference)';

// Home hero entrance: a single orchestrated sequence. Content is pre-hidden by CSS only
// when JS and motion are available (html.js), with a CSS fallback that reveals it anyway.
export function HeroMotion({ children, className }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const root = ref.current;
      const items = root.querySelectorAll('[data-hero-item]');
      const img = root.querySelector('.hero-media img');
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      if (img) tl.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 1.8, ease: 'power2.out' }, 0);
      tl.fromTo(items, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.15);
      return () => tl.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}

// Image that settles from a slight zoom as it scrolls into view.
export function ImageReveal({ children, className }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const img = ref.current.querySelector('img');
      if (!img) return;
      gsap.fromTo(
        img,
        { scale: 1.12 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom 40%', scrub: 0.6 },
        }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
