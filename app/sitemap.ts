import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://marimetechsolutions.com';
  return ['', '/about', '/services', '/founder', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date('2026-08-01'),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
