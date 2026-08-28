import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ScreenPreloader } from '../components/common/ScreenPreloader';

export const LogoRevealPage: React.FC = () => {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden select-none">
      {/* Return to Home / Website Floating Action */}
      <div className="absolute top-6 left-6 z-[100000] pointer-events-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg text-xs font-semibold font-body transition-all hover:scale-105 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Website</span>
        </Link>
      </div>

      {/* Standalone ScreenPreloader Player */}
      <ScreenPreloader isStandalone={true} />
    </div>
  );
};

export default LogoRevealPage;
