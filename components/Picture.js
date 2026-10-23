import manifest from '@/data/image-manifest.json';

// Responsive <img> over the locally generated WebP derivatives (scripts/build-images.mjs).
// next/image runs unoptimized in this project, so srcset is built here instead.
export default function Picture({ name, alt, sizes = '100vw', priority = false, className, style }) {
  const entry = manifest[name];
  if (!entry) return null;
  const { widths, ratio } = entry;
  const largest = widths[widths.length - 1];
  const fallback = widths.find((w) => w >= 1000) || largest;

  return (
    <img
      src={`/images/${name}-${fallback}.webp`}
      srcSet={widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes}
      width={largest}
      height={Math.round(largest / ratio)}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
      style={style}
    />
  );
}
