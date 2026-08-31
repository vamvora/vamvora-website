import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { useConsultationModal } from '../../context/ModalContext';

export const FinalCTA: React.FC = () => {
  const { openConsultation } = useConsultationModal();

  return (
    <section className="py-20 lg:py-24 bg-[#0B132B] relative overflow-hidden text-white border-t border-slate-800">
      {/* Background ambient lighting via native GPU radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18)_0%,transparent_70%)] pointer-events-none transform-gpu" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:32px_32px] opacity-15" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready To Transform Your Business Technology?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tell us what you're trying to achieve. Our team will help you identify the right technology solution with a clear, zero-risk roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => openConsultation()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-blue-600 active:bg-blue-700 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer group"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contact-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white text-lg font-semibold px-7 py-4 rounded-xl border border-slate-700 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Us</span>
            </a>
          </div>

          <div className="pt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>30-minute discovery call • No commitment • Dedicated enterprise architect</span>
          </div>

        </div>
      </div>
    </section>
  );
};
