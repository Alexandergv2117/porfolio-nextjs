import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
   return {
      rules: {
         userAgent: '*',
         allow: '/',
      },
      sitemap: 'https://alexandergv2117.dev/sitemap.xml',
   };
}
