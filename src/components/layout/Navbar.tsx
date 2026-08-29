import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, Home, Info, Layers, BookOpen, Mail } from 'lucide-react';
import { Logo } from '../common/Logo';
import { useConsultationModal } from '../../context/ModalContext';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  
  const { openConsultation } = useConsultationModal();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isHeroNav = isHome && !isPastHero;

  // Scroll listener for hero section boundary with requestAnimationFrame throttling for ultra-smooth performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 20);

          if (isHome) {
            const heroEl = document.getElementById('hero');
            const heroThreshold = heroEl ? heroEl.offsetHeight - 90 : window.innerHeight - 90;
            setIsPastHero(scrollY >= heroThreshold);
          } else {
            setIsPastHero(true);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => {
    if (isHeroNav) {
      return `text-xs font-body font-semibold transition-all py-2 px-4 rounded-full inline-flex items-center gap-1 relative ${
        isActive
          ? 'text-white bg-white/25 shadow-xs border border-white/40 font-bold backdrop-blur-md'
          : 'text-white/85 hover:text-white hover:bg-white/15'
      }`;
    }

    return `text-xs font-body font-semibold transition-all py-2 px-4 rounded-full inline-flex items-center gap-1 relative ${
      isActive
        ? 'text-white bg-[#0145F2] shadow-xs font-bold'
        : 'text-slate-700 hover:text-[#0145F2] hover:bg-slate-200/60'
    }`;
  };

  const [codeCopied, setCodeCopied] = useState(false);
  const handleCopyCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('FIRST15');
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-200 flex flex-col items-center">
      {/* Full-Width Top Promotional Bar (Present on ALL Pages, Strictly Single Line on Mobile) */}
      <div 
        className={`w-full py-1.5 px-2 sm:px-4 border-b pointer-events-auto flex items-center justify-center transition-all duration-200 relative overflow-hidden group ${
          isHeroNav
            ? 'bg-slate-950/70 border-white/15 text-white shadow-xs backdrop-blur-md'
            : 'bg-white/95 border-slate-200/90 text-slate-800 shadow-xs'
        }`}
      >
        <div className="relative z-10 flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs font-medium tracking-tight text-center max-w-5xl mx-auto whitespace-nowrap overflow-hidden">
          <span className={`font-semibold ${isHeroNav ? 'text-white/95' : 'text-slate-800'}`}>
            Free on orders over $150
          </span>
          <span className={`opacity-40 ${isHeroNav ? 'text-white' : 'text-slate-400'}`}>•</span>
          <span className={isHeroNav ? 'text-white/90' : 'text-slate-600'}>
            Code:
          </span>
          <button
            type="button"
            onClick={handleCopyCode}
            title="Click to copy code"
            className="font-bold bg-[#0145F2] hover:bg-[#0038D1] text-white px-2 py-0.5 rounded-full text-[9.5px] sm:text-[11px] tracking-wider shadow-xs border border-white/30 transition-all active:scale-95 cursor-pointer inline-flex items-center flex-shrink-0"
          >
            <span>{codeCopied ? 'COPIED!' : 'FIRST15'}</span>
          </button>
          <span className={isHeroNav ? 'text-white/90' : 'text-slate-600'}>
            for 15% off
          </span>
        </div>
      </div>

      {/* Clean High-Opacity Floating Navbar Container */}
      <div className="w-full pt-2.5 sm:pt-3.5 px-3 sm:px-6 flex justify-center">
        <div 
          className={`w-full max-w-[1240px] pointer-events-auto transition-all duration-200 rounded-full px-4 sm:px-7 py-2 sm:py-2.5 flex items-center justify-between relative transform-gpu ${
          isHeroNav
            ? isScrolled
              ? 'shadow-[0_16px_40px_rgba(0,0,0,0.35)] border border-white/25 bg-slate-950/80 backdrop-blur-md'
              : 'shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-white/20 bg-slate-950/40 backdrop-blur-md'
            : 'deep-glass-navbar'
        }`}
      >
        {/* Brand Logo */}
        <div className="flex-shrink-0 z-10">
          <Logo variant={isHeroNav ? 'light' : 'dark'} />
        </div>

        {/* Centered Desktop & Tablet Navigation */}
        <nav 
          className={`hidden lg:flex items-center gap-1 p-1 rounded-full shadow-2xs transition-all duration-200 ${
            isHeroNav 
              ? 'bg-white/10 border border-white/20 backdrop-blur-md' 
              : 'deep-glass-nav-pill'
          }`} 
          aria-label="Main Navigation"
        >
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClasses}>
            About Us
          </NavLink>

          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>

          <NavLink to="/blog" className={navLinkClasses}>
            Insights
          </NavLink>

          <NavLink to="/contact" className={navLinkClasses}>
            Contact Us
          </NavLink>
        </nav>

        {/* Right High-Contrast CTA (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 z-10">
          <button
            type="button"
            onClick={() => openConsultation()}
            className="text-white text-xs font-body font-semibold px-5 py-2.5 rounded-full shadow-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer group bg-[#0145F2] hover:bg-[#0038D1] border-[1.5px] border-white/60 shadow-[0_4px_16px_rgba(1,69,242,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.7)] hover:shadow-[0_6px_22px_rgba(1,69,242,0.5)] active:scale-[0.98]"
          >
            <span>Book a Consultation Call</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center lg:hidden z-10">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer ${
              isHeroNav
                ? 'bg-white/15 hover:bg-white/25 border border-white/30 text-white'
                : 'bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={`w-5 h-5 ${isHeroNav ? 'text-white' : 'text-slate-900'}`} />
            ) : (
              <Menu className={`w-5 h-5 ${isHeroNav ? 'text-white' : 'text-slate-900'}`} />
            )}
          </button>
        </div>
      </div>
      </div>

      {/* Advanced Glassmorphism Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-0 bg-slate-950/40 backdrop-blur-xl z-40 flex flex-col justify-between pointer-events-auto animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="w-full max-w-md ml-auto h-full bg-white/95 backdrop-blur-md border-l border-white/60 p-6 pt-20 flex flex-col justify-between shadow-2xl overflow-y-auto transform-gpu"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Header */}
            <div className="space-y-4 font-body">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-2">
                <span className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                  NAVIGATION
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#0145F2] text-white shadow-md'
                      : 'text-slate-800 hover:bg-slate-100/80'
                  }`
                }
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#0145F2] text-white shadow-md'
                      : 'text-slate-800 hover:bg-slate-100/80'
                  }`
                }
              >
                <Info className="w-4 h-4" />
                <span>About Us</span>
              </NavLink>

              <NavLink
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#0145F2] text-white shadow-md'
                      : 'text-slate-800 hover:bg-slate-100/80'
                  }`
                }
              >
                <Layers className="w-4 h-4" />
                <span>Services</span>
              </NavLink>

              <NavLink
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#0145F2] text-white shadow-md'
                      : 'text-slate-800 hover:bg-slate-100/80'
                  }`
                }
              >
                <BookOpen className="w-4 h-4" />
                <span>Insights & Blog</span>
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#0145F2] text-white shadow-md'
                      : 'text-slate-800 hover:bg-slate-100/80'
                  }`
                }
              >
                <Mail className="w-4 h-4" />
                <span>Contact Us</span>
              </NavLink>
            </div>

            {/* Bottom Modal CTA in Drawer */}
            <div className="pt-6 border-t border-slate-200/80 mt-6 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full bg-[#0145F2] hover:bg-[#0038D1] text-white font-body font-bold py-3.5 px-4 rounded-full text-center flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(1,69,242,0.35)] cursor-pointer active:scale-98 transition-all"
              >
                <span>Book a Consultation Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1 font-body">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero-obligation technology assessment</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
