import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';


export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Trusted by Businesses. Built for Results.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Discover how leading organizations modernize their operations, eliminate downtime, and accelerate growth with VAM VORA.
          </p>
        </div>

        {/* EXACTLY THREE TESTIMONIALS (3 cards in 1 row desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200/80 card-hover flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              {/* Author & Company Details */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0B132B]">
                    {item.customerName}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.jobTitle}
                  </p>
                  <p className="text-xs font-semibold text-blue-600 mt-0.5">
                    {item.company}
                  </p>
                </div>

                {item.metricHighlight && (
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{item.metricHighlight}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
