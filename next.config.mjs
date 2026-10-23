// Legacy Rezerv storefront URLs mapped to the new routes (see docs/source-audit/09 §1).
const legacyClassIds = {
  'dd015b92-691c-446c-888a-b0da88ce62a2': 'reformer-abs-n-ass',
  '42760f99-f1f5-462f-a303-b02818bbaba7': 'reformer-strength',
  'ba503425-ecf4-42fb-b4af-bfb7c9515eb0': 'booty-lab',
  'faf30fb1-566c-4574-9efa-0810b798c074': 'mat-flow',
  'd010cea6-06e1-4443-a70a-c5119498001e': 'mat-burn',
  '300cf28e-b757-41fc-a118-6f20e7930996': 'reformer-flow',
  '6ee0ec8f-2bad-44a5-8b98-0c2af8ab8760': '1-on-1-private-reformer-session',
};

// Files in public/ keep the same name when unchanged, so browsers and the CDN can reuse
// them for 30 days instead of revalidating on every visit. If an image is replaced,
// give it a new filename (scripts/build-images.mjs encodes the width in each name).
const staticAssetCache = [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  poweredByHeader: false,
  async headers() {
    return [
      { source: '/images/:path*', headers: staticAssetCache },
      { source: '/brand/:path*', headers: staticAssetCache },
      { source: '/og-image.jpg', headers: staticAssetCache },
    ];
  },
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/class', destination: '/classes', permanent: true },
      // UUID aliases must resolve before the generic slug rule.
      ...Object.entries(legacyClassIds).map(([id, slug]) => ({
        source: `/class/${id}`,
        destination: `/classes/${slug}`,
        permanent: true,
      })),
      { source: '/class/:slug', destination: '/classes/:slug', permanent: true },
      { source: '/package', destination: '/pricing', permanent: true },
      { source: '/membership', destination: '/pricing', permanent: true },
      { source: '/location', destination: '/studios', permanent: true },
      { source: '/location/:path*', destination: '/studios', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/faqs', destination: '/faq', permanent: true },
      { source: '/course', destination: '/classes', permanent: true },
      { source: '/appointment', destination: '/classes', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
