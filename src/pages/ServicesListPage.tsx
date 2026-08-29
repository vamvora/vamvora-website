import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useConsultationModal } from '../context/ModalContext';
import { BlurReveal } from '../components/common/BlurReveal';

import cloudIcon from '../assets/icons/cloud.png';
import aiIcon from '../assets/icons/ai-brain.png';
import googleIcon from '../assets/icons/google.png';
import msIcon from '../assets/icons/microsoft.png';
import cyberIcon from '../assets/icons/cybersecurity.png';

interface ServiceCardItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  icon: string;
  badge: string;
  badgeColor: string;
  description: string;
  capabilities: string[];
}

const allServices: ServiceCardItem[] = [
  {
    id: 'cloud-solutions',
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    category: 'Enterprise Infrastructure',
    icon: cloudIcon,
    badge: '99.99% Availability',
    badgeColor: 'text-blue-600 bg-blue-50 border-blue-200',
    description: 'We design, deploy, and manage cloud infrastructure that is secure, scalable, and cost-effective.',
    capabilities: [
      'Cloud Migration',
      'Cloud Infrastructure',
      'Backup & Disaster Recovery',
      'Cloud Storage',
      'Virtual Servers',
      'Virtual Cloud Management'
    ]
  },
  {
    id: 'google-workspace',
    slug: 'google-workspace',
    title: 'Google Workspace',
    category: 'Workplace Productivity',
    icon: googleIcon,
    badge: 'Collaboration Suite',
    badgeColor: 'text-blue-600 bg-blue-50 border-blue-200',
    description: 'Enable your teams with Gmail, Drive, Docs, Meet, Calendar, and other Google Workspace applications.',
    capabilities: [
      'Google Workspace Setup',
      'Email Migration',
      'User Management',
      'Security Configuration',
      'Admin Support',
      'Training & Consultation'
    ]
  },
  {
    id: 'microsoft-365',
    slug: 'microsoft-365',
    title: 'Microsoft 365',
    category: 'Modern Workplace',
    icon: msIcon,
    badge: 'Enterprise Productivity',
    badgeColor: 'text-blue-600 bg-blue-50 border-blue-200',
    description: 'Enhance teamwork with Microsoft 365’s secure collaboration and productivity tools for efficient teamwork, and smarter business operations..',
    capabilities: [
      'Microsoft 365 Deployment',
      'Exchange Online',
      'Microsoft Teams',
      'SharePoint & OneDrive',
      'Technical Support',
      'License Management'
    ]
  },
  {
    id: 'ai-solutions',
    slug: 'ai-solutions',
    title: 'AI Solutions',
    category: 'Intelligent Automation',
    icon: aiIcon,
    badge: 'Custom Workflows',
    badgeColor: 'text-purple-600 bg-purple-50 border-purple-200',
    description: 'Transform business operations through intelligent automation and AI-driven workflows that save time, reduce costs, and improve decision-making.',
    capabilities: [
      'AI Chatbots',
      'Business Automation',
      'AI Assistants',
      'Workflow Automation',
      'Data Intelligence',
      'AI Consulting'
    ]
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cyber Security',
    category: 'Zero-Trust Defense',
    icon: cyberIcon,
    badge: 'Continuous Protection',
    badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    description: 'Our comprehensive cybersecurity solutions safeguard your data, infrastructure, and digital assets.',
    capabilities: [
      'Endpoint Security',
      'Email Security',
      'Firewall Management',
      'Network Security',
      'Vulnerability Assessment',
      'Security Monitoring'
    ]
  }
];

export const ServicesListPage: React.FC = () => {
  const { openConsultation } = useConsultationModal();

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-20 min-h-screen bg-[#F1F5F9] relative overflow-hidden">
      {/* Hyper-Saturated Ambient Background Glow via native GPU radial gradients */}
      <div className="absolute top-10 left-10 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.15)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />
      <div className="absolute top-1/3 right-10 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(1,69,242,0.14)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,153,0.12)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />

      {/* 12-Column Responsive Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* Page Header with BlurReveal */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.1] text-center mx-auto">
            <span className="block">Comprehensive IT Services</span>
            <span className="block">Built For Resilience & Scale.</span>
          </h1>
          <p className="text-base sm:text-lg font-body font-normal text-[#475569] leading-relaxed max-w-2xl mx-auto pt-1">
            Explore our certified cloud, workspace, AI automation, and cybersecurity practices designed for modern high-growth businesses.
          </p>
        </BlurReveal>

        {/* 12-Column Responsive Grid with Staggered BlurReveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
          {allServices.map((service, index) => {
            const colSpan = index === allServices.length - 1 && allServices.length % 2 !== 0 
              ? 'lg:col-span-12' 
              : 'lg:col-span-6';

            return (
              <BlurReveal
                key={service.id}
                delay={index * 0.1}
                className={`${colSpan} deep-glass rounded-3xl p-8 sm:p-10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="space-y-6">
                  
                  {/* Card Header with Icon & Category */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white p-2.5 shadow-md border border-white flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                        <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <span className="text-xs font-body font-semibold uppercase tracking-wider text-slate-500 block">
                          {service.category}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-heading text-[#0F172A] font-bold group-hover:text-[#0145F2] transition-colors">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full deep-glass-inner ${service.badgeColor} hidden sm:inline-block`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#475569] font-body text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* 6 Capabilities Grid with Deep Glass Sub-Cards */}
                  <div className="pt-4 border-t border-slate-200/70 font-body">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                      Core Capabilities:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium px-3 py-2 rounded-xl deep-glass-inner">
                          <CheckCircle2 className="w-4 h-4 text-[#0145F2] flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-8 mt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openConsultation(service.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-body font-semibold px-6 py-3.5 rounded-full shadow-md transition-all group/btn bg-[#0145F2] hover:bg-[#0038D1] cursor-pointer hover:shadow-[0_8px_20px_rgba(1,69,242,0.4)]"
                  >
                    <span>Get Started Now</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                  <Link
                    to={`/services/${service.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-body font-semibold text-slate-800 hover:text-[#0145F2] px-5 py-3.5 rounded-full transition-all text-center deep-glass-inner hover:bg-white hover:border-[#0145F2]/40 hover:shadow-[0_8px_22px_rgba(1,69,242,0.18)] hover:scale-[1.03] active:scale-[0.98] group/arch cursor-pointer"
                  >
                    <span>Technical Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover/arch:text-[#0145F2] group-hover/arch:translate-x-1 transition-all" />
                  </Link>
                </div>
              </BlurReveal>
            );
          })}
        </div>

        {/* Global Bottom CTA Banner with BlurReveal */}
        <BlurReveal delay={0.2} className="deep-glass rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl border border-white">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
            <span className="block">Need A Tailored Multi-Cloud,</span>
            <span className="block">AI, Or Cybersecurity Roadmap?</span>
          </h2>
          <p className="text-sm sm:text-base font-body text-[#475569] max-w-xl mx-auto">
            Book a strategy consultation with our senior architects to review your infrastructure, compliance requirements, and business goals.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => openConsultation()}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-body font-semibold text-white bg-[#0145F2] hover:bg-[#0038D1] shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-[1.02]"
            >
              <span>Book a Consultation Call</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </BlurReveal>

      </div>
    </div>
  );
};

export default ServicesListPage;
