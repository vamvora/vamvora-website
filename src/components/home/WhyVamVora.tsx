import React from 'react';
import { Target, ShieldCheck, TrendingUp, Headphones } from 'lucide-react';

export const WhyVamVora: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Business-First Approach',
      description: 'Technology decisions based on business goals rather than unnecessary complexity.',
      details: 'We begin by diagnosing unit economics, revenue bottlenecks, and operational costs before recommending any code or cloud resource.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure by Design',
      description: 'Security integrated into infrastructure, workplace and business systems.',
      details: 'Zero-Trust architecture, continuous threat isolation, and rigorous compliance are baked into every environment from day one.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Technology that can evolve alongside your organization.',
      details: 'Modular cloud frameworks, containerized microservices, and elastic licensing that seamlessly scale as your headcount and traffic expand.'
    },
    {
      icon: Headphones,
      title: 'Ongoing Expertise',
      description: 'Support and guidance beyond initial implementation.',
      details: 'Dedicated SLA-backed engineering teams providing continuous monitoring, periodic security drills, and proactive cost governance.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Technology Partner Built Around Your Business
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            We partner with businesses to eliminate IT complexity, secure critical assets, and build high-performance systems with measurable ROI.
          </p>
        </div>

        {/* 4 Cards Grid (12-column grid, 4-column span desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all card-hover flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80">
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
