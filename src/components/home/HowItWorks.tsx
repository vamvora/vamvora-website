import React from 'react';
import { Search, BarChart3, Lightbulb, Cog, LifeBuoy } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      tagline: 'Understand challenges',
      description: 'Understand your business objectives, operational workflows, and existing technology bottlenecks.',
      icon: Search
    },
    {
      step: '02',
      title: 'Assess',
      tagline: 'Analyze environment',
      description: 'Analyze your current cloud, software licensing, endpoint vulnerabilities, and compliance rules.',
      icon: BarChart3
    },
    {
      step: '03',
      title: 'Recommend',
      tagline: 'Identify solution',
      description: 'Identify the appropriate technology architecture with transparent timelines and budget models.',
      icon: Lightbulb
    },
    {
      step: '04',
      title: 'Implement',
      tagline: 'Configure & deploy',
      description: 'Configure, migrate, and deploy the solution with zero data loss and minimal business interruption.',
      icon: Cog
    },
    {
      step: '05',
      title: 'Support',
      tagline: 'Continuous governance',
      description: 'Continue helping your business thrive through 24/7 proactive monitoring, training, and SLA support.',
      icon: LifeBuoy
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            From Challenge to Solution
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our 5-step engagement model ensures complete predictability, transparent milestones, and zero business disruption from discovery to ongoing support.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs card-hover flex flex-col justify-between"
              >
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-blue-600/30 font-mono">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0B132B]">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 block">
                    {item.tagline}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Timeline Indicator */}
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-bold uppercase text-slate-400">
                  <span>Phase {item.step}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
