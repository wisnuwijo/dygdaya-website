import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#000000' },
  ],
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dygdaya.com'),
  title: {
    default: 'Dygdaya Technology | Research in Software Engineering & Real-World AI',
    template: '%s | Dygdaya Technology',
  },
  description:
    'Dygdaya Technology is an independent research company specializing in software engineering and practical artificial intelligence implementation for real-life applications.',
  applicationName: 'Dygdaya Technology',
  keywords: [
    'Dygdaya',
    'Dygdaya Technology',
    'Dygdaya Tech',
    'Dygdaya AI',
    'Software Engineering Research',
    'Artificial Intelligence Implementation',
    'Real-World AI',
    'Applied AI Research',
    'Software Systems Engineering',
    'Practical AI Solutions',
    'Software Architecture',
    'AI Research Lab',
    'System Reliability'
  ],
  authors: [
    { name: 'Dygdaya Technology', url: 'https://dygdaya.com' },
  ],
  creator: 'Dygdaya Technology',
  publisher: 'Dygdaya Technology',
  category: 'Technology & Research',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://dygdaya.com',
    languages: {
      'en-US': 'https://dygdaya.com',
      'id-ID': 'https://dygdaya.com',
      'x-default': 'https://dygdaya.com',
    },
  },
  openGraph: {
    title: 'Dygdaya Technology | Research in Software Engineering & Real-World AI',
    description:
      'Dygdaya Technology is an independent research company specializing in software engineering and practical artificial intelligence implementation for real-life applications.',
    url: 'https://dygdaya.com',
    siteName: 'Dygdaya Technology',
    images: [
      {
        url: '/assets/logo-1.jpg',
        width: 800,
        height: 800,
        alt: 'Dygdaya Technology Logo - Software Engineering and AI Research',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['id_ID'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    site: '@dygdaya',
    creator: '@dygdaya',
    title: 'Dygdaya Technology | Research in Software Engineering & Real-World AI',
    description:
      'Dygdaya Technology is an independent research company specializing in software engineering and practical artificial intelligence implementation for real-life applications.',
    images: {
      url: '/assets/logo-1.jpg',
      alt: 'Dygdaya Technology Logo',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/logo-1.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/assets/logo-1.jpg', sizes: '192x192', type: 'image/jpeg' },
      { url: '/assets/logo-1.jpg', sizes: '512x512', type: 'image/jpeg' },
    ],
    shortcut: '/assets/logo-1.jpg',
    apple: [
      { url: '/assets/logo-1.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
  other: {
    'distribution': 'global',
    'rating': 'general',
    'revisit-after': '7 days',
    'geo.region': 'ID',
    'geo.placename': 'Indonesia',
    'target': 'all',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="canonical" href="https://dygdaya.com" />
      </head>
      <body className="vbg-report bg-black text-[#ededed] min-h-screen antialiased flex flex-col">
        <div className="vbg-shell flex flex-col min-h-screen">
          <a className="vbg-skip-link" href="#main">
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1 w-full max-w-[960px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
            {children}
          </main>
          <Footer />
        </div>
        <JsonLd />
      </body>
    </html>
  );
}
