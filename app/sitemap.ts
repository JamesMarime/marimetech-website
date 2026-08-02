export const dynamic = "force-static";

import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://marimetechsolutions.com';
  return [
    { url: base, priority: 1 },
    { url: `${base}/launch-your-business/`, priority: .95 },
    { url: `${base}/services/`, priority: .85 },
    { url: `${base}/about/`, priority: .7 },
    { url: `${base}/insights/`, priority: .7 },
    { url: `${base}/contact/`, priority: .9 },
  ];
}
