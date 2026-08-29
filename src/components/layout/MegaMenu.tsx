import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

// Import custom uploaded service icons
import cloudIcon from '../../assets/icons/cloud.png';
import aiIcon from '../../assets/icons/ai-brain.png';
import googleIcon from '../../assets/icons/google.png';
import msIcon from '../../assets/icons/microsoft.png';
import cyberIcon from '../../assets/icons/cybersecurity.png';

interface MegaMenuProps {
  onClose: () => void;
}

const serviceIconsMap: Record<string, string> = {
  'cloud-solutions': cloudIcon,
  'google-workspace': googleIcon,
  'microsoft-365': msIcon,
  'ai-solutions': aiIcon,
  'cybersecurity': cyberIcon
};

export const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  return (
    <div 
      className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-5xl pt-3 px-4 z-50 transition-all duration-300 transform origin-top animate-in fade-in zoom-in-95"
      role="menu"
      aria-label="Services Menu"
    >
      <div className="deep-glass rounded-3xl p-6 lg:p-7 relative overflow-hidden shadow-[0_25px_60px_rgba(1,69,242,0.12)]">
        {/* Ambient Background Glow via native GPU radial gradients */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.15)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(1,69,242,0.12)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />

        {/* 5 Service Columns - Clean Deep Glass Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {servicesData.map((service, idx) => (
            <div 
              key={service.id} 
              className="flex flex-col justify-between p-4 rounded-2xl deep-glass-inner hover:bg-white hover:border-[#0145F2]/40 hover:shadow-lg transition-all duration-200 group/card cursor-pointer"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div>
                {/* Service Header Link with Custom Icon & Name */}
                <Link
                  to={`/services/${service.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-2.5 pb-3 mb-3 border-b border-slate-100 group-hover/card:border-blue-100 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 p-1.5 flex items-center justify-center group-hover/card:scale-110 shadow-2xs transition-all duration-200 flex-shrink-0">
                    <img src={serviceIconsMap[service.id]} alt={service.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 group-hover/card:text-[#0145F2] transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                </Link>

                {/* Sub-capabilities list */}
                <ul className="space-y-1.5 font-body">
                  {service.capabilities.slice(0, 3).map((cap) => (
                    <li key={cap.name}>
                      <Link
                        to={`/services/${service.slug}#${cap.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        onClick={onClose}
                        className="text-[11px] text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5 py-0.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-slate-300 group-hover/card:bg-blue-500 transition-colors"></span>
                        <span className="line-clamp-1">{cap.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Service Page CTA */}
              <Link
                to={`/services/${service.slug}`}
                onClick={onClose}
                className="mt-3 pt-2 text-[11px] font-body font-semibold text-blue-600 hover:text-blue-700 flex items-center justify-between group-hover/card:translate-x-0.5 transition-transform"
              >
                <span>Explore</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

