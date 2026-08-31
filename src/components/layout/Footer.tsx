import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { useConsultationModal } from '../../context/ModalContext';
import { WhatsAppIcon } from '../common/WhatsAppButton';
import logoImg from '../../assets/vam-logo.png';

// Clean SVG Icons for Social Networks
const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const { openConsultation } = useConsultationModal();

  return (
    <footer className="bg-[#060B13] text-white pt-12 sm:pt-16 pb-6 sm:pb-8 px-6 sm:px-10 lg:px-16 border-t border-slate-800/80 relative overflow-hidden font-sans">
      {/* Subtle Dot Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Ambient Blue Glow via native GPU radial gradient */}
      <div className="absolute top-1/4 left-1/3 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(1,69,242,0.14)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />

      <div className="max-w-[1360px] mx-auto">
        
        {/* Tier 1: Top Consultation Call-to-Action Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-10 sm:pb-12 border-b border-white/10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[#0145F2] text-xs font-mono font-bold tracking-widest uppercase block">
              HAVE AN IDEA WORTH BUILDING?
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Let's Engineer Resilient Infrastructure For Your Business Scale.
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0">
            <button
              type="button"
              onClick={() => openConsultation()}
              className="px-7 py-3.5 rounded-full bg-[#0145F2] hover:bg-[#0038D1] border-[1.5px] border-white/50 text-white text-sm sm:text-base font-semibold inline-flex items-center gap-2.5 shadow-[0_8px_25px_rgba(1,69,242,0.4),inset_0_1.5px_1px_rgba(255,255,255,0.7)] hover:shadow-[0_12px_35px_rgba(1,69,242,0.6)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Book a Consultation Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="inline-flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>available for new engagements</span>
            </div>
          </div>
        </div>

        {/* Tier 2: Enterprise Directory with Brand Identity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 py-10 sm:py-12 border-b border-white/10">
          
          {/* Brand Identity Column with Video Background Animation */}
          <div className="md:col-span-2 lg:col-span-4 relative rounded-3xl p-6 sm:p-7 overflow-hidden bg-[#1e4fc0] shadow-[0_12px_40px_rgba(21,76,189,0.25)] border border-white/20 flex flex-col justify-between gap-5 group">
            {/* Background Video Animation */}
            <video
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4" type="video/mp4" />
            </video>

            {/* Subtle Contrast Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35 pointer-events-none z-[1]" />

            {/* Card Content Inside Animation */}
            <div className="relative z-10 space-y-4">
              <Link to="/" className="inline-block group/logo select-none">
                <img 
                  src={logoImg} 
                  alt="VAM VORA Technologies" 
                  className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover/logo:scale-105 brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]" 
                />
              </Link>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] font-medium">
                Architecting resilient cloud ecosystems, intelligent workplace suites, AI automations, and zero-trust cybersecurity for modern enterprises.
              </p>
            </div>

            <div className="relative z-10 inline-flex items-center gap-2 text-xs text-white/90 font-mono drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="font-semibold text-white/95">Enterprise Engineering • Verified Partner</span>
            </div>
          </div>

          {/* Column 1: SERVICES */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0145F2]" />
              <h4 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
                SERVICES
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-normal">
              <li>
                <Link to="/services/cloud-solutions" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Cloud Infrastructure & Migration
                </Link>
              </li>
              <li>
                <Link to="/services/google-workspace" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Google Workspace
                </Link>
              </li>
              <li>
                <Link to="/services/microsoft-365" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Microsoft 365
                </Link>
              </li>
              <li>
                <Link to="/services/ai-solutions" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  AI Solutions & Automation
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurity" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Cybersecurity & Zero-Trust
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: COMPANY */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0145F2]" />
              <h4 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
                COMPANY
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-normal">
              <li>
                <Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Insights & Perspectives
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: CONTACT */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0145F2]" />
              <h4 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
                CONTACT
              </h4>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-normal">
              <li>
                <a href="tel:+916382114955" className="hover:text-white transition-colors inline-flex items-center gap-2 font-medium text-slate-200 group">
                  <div className="w-6 h-6 rounded-lg bg-[#0145F2]/20 flex items-center justify-center text-[#0145F2] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span>+91 63821 14955 (Hotline)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@vamvoratech.com&su=Inquiry%20from%20VAM%20VORA%20Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 text-slate-200 group"
                  title="Compose email via Gmail"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#0145F2]/20 flex items-center justify-center text-[#0145F2] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="group-hover:underline">sales@vamvoratech.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/@11.3456197,77.7097794,21z?authuser=0&entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-xs text-slate-400 hover:text-white transition-colors leading-relaxed pt-0.5 group"
                  title="View on Google Maps"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#0145F2]/20 flex items-center justify-center text-[#0145F2] flex-shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-[#0145F2] group-hover:text-white transition-all">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="group-hover:underline">19/1, Kongu Nagar second street, Municipal Colony Main Rd, near Anna theatre, Erode, Tamil Nadu 638004</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: SOCIALS */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0145F2]" />
              <h4 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
                SOCIALS
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-normal">
              <li>
                <a 
                  href="https://wa.me/916382114955?text=Hello%20VAM%20VORA%20Technologies%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20enterprise%20IT%20services%20(Cloud%20Infrastructure%2C%20AI%20Solutions%2C%20Cybersecurity%2C%20and%20Modern%20Workplace).%20Please%20let%20me%20know%20how%20we%20can%20connect." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-all inline-flex items-center justify-between w-full group py-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/vamvora_technologies/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-all inline-flex items-center justify-between w-full group py-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <InstagramIcon className="w-4 h-4 text-[#0145F2] group-hover:scale-110 transition-transform" />
                    <span>Instagram</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-all inline-flex items-center justify-between w-full group py-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#0145F2] group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/Vamvora_Tech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-all inline-flex items-center justify-between w-full group py-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <XIcon className="w-4 h-4 text-[#0145F2] group-hover:scale-110 transition-transform" />
                    <span>X (Twitter)</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@Vamvora_Technologies" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-all inline-flex items-center justify-between w-full group py-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <YoutubeIcon className="w-4 h-4 text-[#0145F2] group-hover:scale-110 transition-transform" />
                    <span>YouTube</span>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Tier 3: Utility / SLA Bar (Aligned Centrally) */}
        <div className="pt-6 pb-2 flex flex-col sm:flex-row items-center justify-center text-xs text-slate-400 font-mono gap-3 sm:gap-6 md:gap-8 border-b border-white/5 text-center flex-wrap">
          <a href="https://www.vamvoratech.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <span className="w-2 h-2 bg-[#0145F2] rounded-xs" />
            <span className="text-slate-300 font-medium hover:underline">www.vamvoratech.com</span>
          </a>

          <span className="hidden sm:inline-block text-slate-600">•</span>

          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>99.99% Availability SLA • Global Support</span>
          </div>

          <span className="hidden sm:inline-block text-slate-600">•</span>

          <div>
            <span>© 2026 VAM VORA Technologies. All rights reserved.</span>
          </div>
        </div>

        {/* Tier 4: Massive Brand Typography - Fully Visible */}
        <div className="relative w-full pt-8 sm:pt-12 pb-4 sm:pb-6 text-center select-none flex items-center justify-center">
          <span className="text-[12vw] sm:text-[13.5vw] font-black tracking-tighter leading-none block font-heading uppercase transition-transform hover:scale-[1.01] duration-300 drop-shadow-[0_15px_45px_rgba(1,69,242,0.3)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#0145F2]">
              VAM
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
              VORA
            </span>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
