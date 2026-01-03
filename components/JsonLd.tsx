import { FC } from 'react';

interface JsonLdData {
  name: string;
  description: string;
  address?: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    "@type": string;
    latitude: string;
    longitude: string;
  };
  url?: string;
  telephone?: string;
  openingHoursSpecification?: {
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  priceRange?: string;
  image?: string;
  aggregateRating?: {
    "@type": string;
    ratingValue: string;
    reviewCount: string;
  };
  [key: string]: unknown;
}

interface JsonLdProps {
  type: 'TouristAttraction' | 'LocalBusiness';
  data: JsonLdData;
}

const JsonLd: FC<JsonLdProps> = ({ type, data }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd; 