import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { MetricsSection } from '../components/home/MetricsSection';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { BlogPreview } from '../components/home/BlogPreview';
import { HomepageFAQ } from '../components/home/HomepageFAQ';

export const HomePage: React.FC = () => {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.vamvoratech.com/#organization',
        name: 'Vamvora Tech',
        url: 'https://www.vamvoratech.com/',
        logo: 'https://www.vamvoratech.com/logo.png',
        description: 'Vamvora Tech provides Google Workspace, Microsoft 365 and Zoho solutions in Erode with competitive pricing, professional implementation and reliable ongoing support.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-63821-14955',
          contactType: 'sales',
          email: 'sales@vamvoratech.com',
          availableLanguage: ['English', 'Tamil']
        },
        sameAs: [
          'https://x.com/Vamvora_Tech',
          'https://www.instagram.com/vamvora_technologies/',
          'https://www.youtube.com/@Vamvora_Technologies'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.vamvoratech.com/#website',
        url: 'https://www.vamvoratech.com/',
        name: 'Vamvora Tech',
        publisher: {
          '@id': 'https://www.vamvoratech.com/#organization'
        }
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.vamvoratech.com/#localbusiness',
        name: 'Vamvora Tech',
        image: 'https://www.vamvoratech.com/logo.png',
        url: 'https://www.vamvoratech.com/',
        telephone: '+91-63821-14955',
        email: 'sales@vamvoratech.com',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '19/1, Kongu Nagar second street, Municipal Colony Main Rd, near Anna theatre',
          addressLocality: 'Erode',
          addressRegion: 'Tamil Nadu',
          postalCode: '638004',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '11.3456',
          longitude: '77.7098'
        }
      }
    ]
  };

  return (
    <main className="bg-[#F1F5F9] min-h-screen text-slate-900">
      <SEO
        title="Google Workspace, Microsoft 365 & Zoho Partner in Erode | Vamvora Tech"
        description="Vamvora Tech provides Google Workspace, Microsoft 365 and Zoho solutions in Erode with competitive pricing, professional implementation and reliable ongoing support."
        canonicalUrl="https://www.vamvoratech.com/"
        schemaJson={homeSchema}
      />
      {/* 1. Hero Section with Cinematic HLS Video Background */}
      <Hero />

      {/* 2. Trusted Technology Solutions (Ecosystem Integrations) */}
      <TrustStrip />

      {/* 3. Key Metrics & Impact Track Record */}
      <MetricsSection />

      {/* 4. Service Cards Side by Side (Heavy Glassmorphism & Custom Icons) */}
      <FeaturedServices />

      {/* 5. Blog Insights */}
      <BlogPreview />

      {/* 6. Frequently Asked Questions */}
      <HomepageFAQ />
    </main>
  );
};


