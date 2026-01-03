import { FC } from 'react';

const BusinessSchema: FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Reitanlage Bosel',
    image: [
      'https://reitanlage-bosel.de/Bosel-Logo.webp',
      'https://reitanlage-bosel.de/og-image.webp'
    ],
    '@id': 'https://reitanlage-bosel.de',
    url: 'https://reitanlage-bosel.de',
    telephone: '+493523774500',
    priceRange: '€€',
    description: 'Professioneller Reitunterricht & Pferdepension in Coswig bei Dresden. Erleben Sie unvergessliche Reiterferien für die ganze Familie.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Köhlerstraße 107',
      addressLocality: 'Coswig',
      addressRegion: 'Sachsen',
      postalCode: '01640',
      addressCountry: 'DE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.1333',
      longitude: '13.5833'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '08:00',
      closes: '20:00'
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61574104532123',
      'https://www.instagram.com/reit_anlage'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Reitangebote',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reiterferien in Dresden',
            description: 'Professioneller Reitunterricht und unvergessliche Reiterferien für Kinder und Erwachsene',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Reitanlage Bosel'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pferdepension',
            description: 'Professionelle Pferdepension mit modernen Stallungen und individueller Betreuung',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Reitanlage Bosel'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reitunterricht',
            description: 'Qualifizierter Reitunterricht für Anfänger und Fortgeschrittene',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Reitanlage Bosel'
            }
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50'
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5'
      },
      author: {
        '@type': 'Person',
        name: 'Familie Schmidt'
      },
      reviewBody: 'Ausgezeichnete Reitanlage mit professionellem Unterricht und toller Atmosphäre.'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default BusinessSchema; 