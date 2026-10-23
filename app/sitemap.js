import { site } from '@/config/site';
import { classes } from '@/data/classes';

export default function sitemap() {
  const routes = ['', '/classes', '/pricing', '/timetable', '/studios', '/team', '/faq', '/contact'];
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}`, changeFrequency: 'monthly', priority: r === '' ? 1 : 0.8 })),
    ...classes.map((c) => ({ url: `${site.url}/classes/${c.slug}`, changeFrequency: 'monthly', priority: 0.6 })),
  ];
}
