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
        '@id': 'https://vamvoratech.com/#organization',
        name: 'VAM VORA Technologies',
        url: 'https://vamvoratech.com/',
        logo: 'https://vamvoratech.com/logo.png',
        description: 'VAM VORA Technologies provides enterprise IT solutions and business technology services including cloud solutions, Google Workspace, Microsoft 365, AI solutions and cybersecurity.',
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
        '@id': 'https://vamvoratech.com/#website',
        url: 'https://vamvoratech.com/',
        name: 'VAM VORA Technologies',
        publisher: {
          '@id': 'https://vamvoratech.com/#organization'
        }
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://vamvoratech.com/#localbusiness',
        name: 'VAM VORA Technologies',
        image: 'https://vamvoratech.com/logo.png',
        url: 'https://vamvoratech.com/',
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
        title="IT Solutions & Services | VAM VORA Technologies"
        description="VAM VORA Technologies provides IT solutions and business technology services including cloud solutions, Google Workspace, Microsoft 365, AI solutions and cybersecurity."
        canonicalUrl="https://vamvoratech.com/"
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


