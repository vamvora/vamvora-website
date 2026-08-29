import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useConsultationModal } from '../../context/ModalContext';

// Import custom uploaded service icons
import googleIcon from '../../assets/icons/google.png';
import msIcon from '../../assets/icons/microsoft.png';

import { BlurReveal } from '../common/BlurReveal';

export const FeaturedServices: React.FC = () => {
  const { openConsultation } = useConsultationModal();

  return (
    <section id="services-section" className="py-14 sm:py-16 lg:py-20 bg-[#F1F5F9] relative overflow-hidden">
      {/* Hyper-Saturated Analogous Ambient Engine via native GPU radial gradients */}
      <div className="absolute top-10 left-10 w-[650px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.15)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />
      <div className="absolute top-1/2 right-10 w-[650px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(1,69,242,0.14)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />
      <div className="absolute bottom-10 left-1/3 w-[550px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,153,0.12)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header with BlurReveal */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-3xl mx-auto text-center">
            <span className="block">Engineered For High Performance,</span>
            <span className="block">Security And Scale.</span>
          </h2>
          <p className="text-base sm:text-lg font-body font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto pt-2">
            Tailored enterprise solutions designed to modernize workloads, streamline operations, and defend your business.
          </p>
        </BlurReveal>

        {/* 2 Primary Featured Service Cards on Homepage: Google Workspace & Microsoft 365 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-10">
          
          {/* Card 01: Google Workspace with BlurReveal */}
          <BlurReveal delay={0.1} className="deep-glass rounded-3xl p-8 sm:p-12 flex flex-col justify-between group relative transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              
              {/* Icon & Service Name Pair */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-white p-2.5 shadow-md border border-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img src={googleIcon} alt="Google Workspace" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-body font-semibold uppercase tracking-wider text-[#0145F2] block">
                      Workplace Collaboration
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-heading text-slate-900 font-bold group-hover:text-[#0145F2] transition-colors">
                      Google Workspace
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-body font-semibold text-slate-600 deep-glass-inner px-3 py-1 rounded-full hidden sm:inline-block">
                  Enterprise Suite
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 font-body text-sm sm:text-base leading-relaxed">
                Enable your teams with Gmail, Drive, Docs, Meet, Calendar, and other Google Workspace applications with zero data loss.
              </p>

              {/* 6 Capabilities with Multi-Layered Inner Sub-Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200/70 font-body">
                {[
                  'Google Workspace Setup',
                  'Email Migration',
                  'User Management',
                  'Security Configuration',
                  'Admin Support',
                  'Training & Consultation',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium px-3 py-2 rounded-xl deep-glass-inner">
                    <CheckCircle2 className="w-4 h-4 text-[#0145F2] flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer Actions in Glassmorphism */}
            <div className="pt-8 mt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                type="button"
                onClick={() => openConsultation('Google Workspace')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-body font-semibold px-6 py-3.5 rounded-full shadow-md transition-all group/btn bg-[#0145F2] hover:bg-[#0038D1] cursor-pointer hover:shadow-[0_8px_20px_rgba(1,69,242,0.4)]"
              >
                <span>Get Started Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
              <Link
                to="/services/google-workspace"
                className="deep-glass-inner w-full sm:w-auto text-xs sm:text-sm font-body font-semibold text-slate-800 hover:text-[#0145F2] px-5 py-3.5 rounded-full transition-all text-center cursor-pointer hover:bg-white hover:border-[#0145F2]/40 hover:shadow-[0_8px_22px_rgba(1,69,242,0.18)] hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center gap-2 group/arch"
              >
                <span>Technical Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover/arch:text-[#0145F2] group-hover/arch:translate-x-1 transition-all" />
              </Link>
            </div>
          </BlurReveal>

          {/* Card 02: Microsoft 365 with BlurReveal */}
          <BlurReveal delay={0.2} className="deep-glass rounded-3xl p-8 sm:p-12 flex flex-col justify-between group relative transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              
              {/* Icon & Service Name Pair */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-white p-2.5 shadow-md border border-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img src={msIcon} alt="Microsoft 365" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-body font-semibold uppercase tracking-wider text-blue-600 block">
                      Modern Workplace
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-heading text-slate-900 font-bold group-hover:text-[#0145F2] transition-colors">
                      Microsoft 365
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-body font-semibold text-slate-600 deep-glass-inner px-3 py-1 rounded-full hidden sm:inline-block">
                  Productivity & Cloud
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 font-body text-sm sm:text-base leading-relaxed">
                Enhance teamwork with Microsoft 365’s secure collaboration and productivity tools for efficient teamwork, and smarter business operations.
              </p>

              {/* 6 Capabilities with Multi-Layered Inner Sub-Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200/70 font-body">
                {[
                  'Microsoft 365 Deployment',
                  'Exchange Online',
                  'Microsoft Teams',
                  'SharePoint & OneDrive',
                  'Technical Support',
                  'License Management',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium px-3 py-2 rounded-xl deep-glass-inner">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer Actions in Glassmorphism */}
            <div className="pt-8 mt-8 border-t border-slate-200/70 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                type="button"
                onClick={() => openConsultation('Microsoft 365')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-body font-semibold px-6 py-3.5 rounded-full shadow-md transition-all group/btn bg-[#0145F2] hover:bg-[#0038D1] cursor-pointer hover:shadow-[0_8px_20px_rgba(1,69,242,0.4)]"
              >
                <span>Get Started Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
              <Link
                to="/services/microsoft-365"
                className="deep-glass-inner w-full sm:w-auto text-xs sm:text-sm font-body font-semibold text-slate-800 hover:text-[#0145F2] px-5 py-3.5 rounded-full transition-all text-center cursor-pointer hover:bg-white hover:border-[#0145F2]/40 hover:shadow-[0_8px_22px_rgba(1,69,242,0.18)] hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center gap-2 group/arch"
              >
                <span>Technical Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover/arch:text-[#0145F2] group-hover/arch:translate-x-1 transition-all" />
              </Link>
            </div>
          </BlurReveal>

        </div>

        {/* Centered All Services Action Button with BlurReveal */}
        <BlurReveal delay={0.25} className="flex justify-center pt-2">
          <Link
            to="/services"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-body font-semibold text-white bg-[#0145F2] hover:bg-[#0038D1] shadow-lg hover:shadow-[0_12px_30px_rgba(1,69,242,0.4)] transition-all cursor-pointer hover:scale-[1.02] group"
          >
            <span>All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </BlurReveal>

      </div>
    </section>
  );
};


