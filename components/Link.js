import NextLink from 'next/link';

// next/link with automatic prefetching off. Navigation stays client-side, but a page's
// data is fetched only when the visitor actually clicks, instead of prefetching every
// link in view (which roughly doubled requests per page view).
export default function Link({ prefetch = false, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />;
}
