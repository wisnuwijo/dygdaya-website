import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dygdaya Technology',
    short_name: 'Dygdaya',
    description:
      'Dygdaya Technology is an independent research company specializing in software engineering and practical artificial intelligence implementation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/assets/logo-1.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/assets/logo-1.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
