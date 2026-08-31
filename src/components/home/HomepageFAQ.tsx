import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { faqData } from '../../data/faqData';
import { BlurReveal } from '../common/BlurReveal';

export const HomepageFAQ: React.FC = () => {
  // Homepage displays EXACTLY 3 questions from General category
  const topQuestions = faqData.slice(0, 3);
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F1F5F9] border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Centered Section Header with BlurReveal */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-3xl mx-auto text-center">
            <span className="block">Frequently Asked</span>
            <span className="block">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg font-body font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto pt-1">
            Quick answers to common questions regarding our cloud architecture, AI workflows, and consulting engagements.
          </p>
        </BlurReveal>

        {/* EXACTLY THREE ACCORDION ITEMS with BlurReveal */}
        <BlurReveal delay={0.15} className="max-w-3xl mx-auto space-y-4">
          {topQuestions.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden deep-glass ${
                  isOpen
                    ? 'border-[#0145F2]/40 bg-white/95 shadow-lg'
                    : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-heading italic font-bold text-slate-900">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'bg-slate-900 text-white rotate-180 shadow-sm' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 pt-1 text-xs sm:text-sm font-body text-slate-600 font-normal leading-relaxed animate-in fade-in duration-200">
                    <div className="pt-4 border-t border-slate-100">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </BlurReveal>

        {/* Contact Us FAQ CTA in Glassmorphism with BlurReveal */}
        <BlurReveal delay={0.2} className="text-center mt-10">
          <Link
            to="/contact"
            className="deep-glass-inner inline-flex items-center gap-2 text-sm sm:text-base font-body font-semibold px-8 py-4 rounded-full text-slate-900 hover:bg-white shadow-sm transition-all"
          >
            <span>Have More Questions? Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </BlurReveal>

      </div>
    </section>
  );
};


