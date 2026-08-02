import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://marimetechsolutions.com';
  return ['', '/about', '/services', '/founder', '/insights', '/podcast', '/books', '/contact'].map((path) => ({
    url: `${base}${path}`, lastModified: new Date(), changeFrequency: 'monthly', priority: path === '' ? 1 : 0.7
  }));
}
