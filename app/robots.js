import { site } from '@/config/site';

// Indexable by default. The old Rezerv storefront's robots settings don't carry over.
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
