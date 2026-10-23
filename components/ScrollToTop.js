'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// Every page navigation starts at the top. Anchor links (e.g. /pricing#mat) keep
// their target, and the first load keeps the browser's own position.
export default function ScrollToTop() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
