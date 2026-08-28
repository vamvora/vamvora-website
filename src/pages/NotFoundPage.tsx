import React from 'react';
import { Link } from 'react-router-dom';
import { Home, HelpCircle } from 'lucide-react';


export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-44 sm:pt-48 pb-24 min-h-[70vh] flex items-center justify-center bg-[#F8FAFC]">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 border border-blue-200 mx-auto flex items-center justify-center font-mono font-black text-2xl shadow-sm">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600">
            The page you requested may have moved or does not exist. Explore our primary navigation below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/faq"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold px-5 py-3 rounded-xl border border-slate-200 transition-all"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Knowledge Base</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
