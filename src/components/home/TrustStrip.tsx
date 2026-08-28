import React from 'react';
import { Link } from 'react-router-dom';
import cloudIcon from '../../assets/icons/cloud.png';
import aiIcon from '../../assets/icons/ai-brain.png';
import googleIcon from '../../assets/icons/google.png';
import msIcon from '../../assets/icons/microsoft.png';
import cyberIcon from '../../assets/icons/cybersecurity.png';

interface TechItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  link: string;
  badgeColor: string;
}

const techItems: TechItem[] = [
  {
    id: 'ms-365',
    name: 'Microsoft 365',
    category: 'Enterprise Productivity & Teams',
    icon: msIcon,
    link: '/services/microsoft-365',
    badgeColor: 'border-blue-200/80 bg-blue-50/50'
  },
  {
    id: 'google-ws',
    name: 'Google Workspace',
    category: 'Cloud Collaboration & Gmail',
    icon: googleIcon,
    link: '/services/google-workspace',
    badgeColor: 'border-red-200/80 bg-red-50/50'
  },
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    category: 'Intelligent RAG & Workflows',
    icon: aiIcon,
    link: '/services/ai-solutions',
    badgeColor: 'border-purple-200/80 bg-purple-50/50'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'Zero-Trust & Managed EDR',
    icon: cyberIcon,
    link: '/services/cybersecurity',
    badgeColor: 'border-emerald-200/80 bg-emerald-50/50'
  },
  {
    id: 'cloud-services',
    name: 'Cloud Solutions',
    category: 'AWS, Azure & Cloud Infra',
    icon: cloudIcon,
    link: '/services/cloud-solutions',
    badgeColor: 'border-blue-200/80 bg-blue-50/50'
  }
];

import { BlurReveal } from '../common/BlurReveal';

// Duplicate items for infinite seamless looping
const row1Items = [...techItems, ...techItems, ...techItems, ...techItems];

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#F1F5F9] relative overflow-hidden z-20 border-b border-slate-200/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#0EA5E9]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <BlurReveal className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 mb-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-950 tracking-tight leading-tight max-w-3xl mx-auto text-center">
          <span className="block">Trusted Enterprise Solutions</span>
          <span className="block">For Modern Businesses</span>
        </h2>
        <p className="text-sm sm:text-base font-body text-slate-600 font-normal max-w-2xl mx-auto mt-3 leading-relaxed">
          Certified partner expertise delivering enterprise-grade cloud, workplace, AI and security infrastructure.
        </p>
      </BlurReveal>

      {/* Side-Faded Single Floating Horizontal Carousel */}
      <div className="relative w-full overflow-hidden py-3 mask-carousel-fade">
        {/* Left and Right Side Fade Overlay Gradients for smooth fade edge */}
        <div className="absolute inset-y-0 left-0 w-28 sm:w-48 bg-gradient-to-r from-[#F1F5F9] via-[#F1F5F9]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 sm:w-48 bg-gradient-to-l from-[#F1F5F9] via-[#F1F5F9]/80 to-transparent z-10 pointer-events-none" />

        {/* Carousel Row 1 (Floating Left) */}
        <div className="flex gap-6 w-max animate-scroll-left">
          {row1Items.map((item, idx) => (
            <Link
              key={`r1-${item.id}-${idx}`}
              to={item.link}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl deep-glass hover:bg-white transition-all shadow-xs hover:shadow-xl hover:scale-[1.03] flex-shrink-0 group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-white p-2 shadow-2xs border border-slate-200/80 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <div className="text-left font-body">
                <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0145F2] transition-colors block">
                  {item.name}
                </span>
                <span className="text-xs text-slate-500 font-normal block truncate max-w-[200px] mt-0.5">
                  {item.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};


