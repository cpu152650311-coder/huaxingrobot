import type { MetadataRoute } from 'next'

const routes = [
  '',
  '/about',
  '/solutions',
  '/technology',
  '/products/cadebot-l100',
  '/products/cleinbot-m79',
  '/products/cleinbot-cc201',
  '/products/cruzr',
  '/thanks',
  '/welcome',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `https://aomanbot.com${route}`,
    lastModified,
    changeFrequency: route.startsWith('/products/') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/products/') ? 0.8 : 0.7,
  }))
}
