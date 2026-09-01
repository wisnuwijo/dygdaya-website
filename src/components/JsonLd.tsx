import React from 'react';

export const JsonLd: React.FC = () => {
  const baseUrl = 'https://dygdaya.com';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ResearchOrganization',
    '@id': `${baseUrl}/#organization`,
    name: 'Dygdaya Technology',
    legalName: 'Dygdaya Technology',
    alternateName: ['Dygdaya', 'Dygdaya Tech', 'Dygdaya AI', 'PT Dygdaya Technology'],
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/assets/logo-1.jpg`,
      caption: 'Dygdaya Technology Logo',
      width: '800',
      height: '800'
    },
    image: `${baseUrl}/assets/logo-1.jpg`,
    email: 'hi@dygdaya.com',
    description:
      'Dygdaya Technology is an independent research company specializing in software engineering and practical artificial intelligence implementation for real-life applications.',
    slogan: 'Research in software engineering and real-world AI implementation',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'hi@dygdaya.com',
        contactType: 'general inquiries',
        availableLanguage: ['English', 'Indonesian']
      }
    ],
    knowsAbout: [
      'Software Engineering Research',
      'Artificial Intelligence Implementation',
      'Software Systems Architecture',
      'Applied Machine Learning',
      'Practical AI Solutions',
      'System Reliability & Code Maintainability',
      'Real-World Automation'
    ],
    sameAs: [
      'https://github.com/dygdaya',
      'https://twitter.com/dygdaya'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Dygdaya Technology',
    alternateName: 'Dygdaya',
    description:
      'Official website of Dygdaya Technology — Research in software engineering and real-world AI implementation.',
    publisher: {
      '@id': `${baseUrl}/#organization`
    },
    inLanguage: ['en-US', 'id-ID']
  };

  const siteNavigationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'About Dygdaya',
        description: 'About Dygdaya Technology and our research mission.',
        url: `${baseUrl}/#about`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Research Focus Areas',
        description: 'Software engineering and real-world AI implementation research focus.',
        url: `${baseUrl}/#focus`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Contact & Inquiries',
        description: 'Reach out to Dygdaya Technology via hi@dygdaya.com.',
        url: `${baseUrl}/#contact`
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Privacy Policy',
        description: 'Dygdaya Technology Privacy Policy and data protection standards.',
        url: `${baseUrl}/privacy`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />
    </>
  );
};
