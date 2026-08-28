import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { MetricsSection } from '../components/home/MetricsSection';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { BlogPreview } from '../components/home/BlogPreview';
import { HomepageFAQ } from '../components/home/HomepageFAQ';

export const HomePage: React.FC = () => {
  return (
    <main className="bg-[#F1F5F9] min-h-screen text-slate-900">
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


