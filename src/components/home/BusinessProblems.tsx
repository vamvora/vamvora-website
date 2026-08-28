import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Users, Bot, Shield, ArrowRight } from 'lucide-react';

export const BusinessProblems: React.FC = () => {
  const problems = [
    {
      icon: Server,
      title: 'Modernize Your Infrastructure',
      problem: 'Struggling with aging on-premise hardware, server outages, and unpredictable maintenance costs.',
      solution: 'Move from outdated infrastructure toward resilient, scalable cloud environments with automated disaster recovery.',
      serviceLink: '/services/cloud-solutions',
      serviceName: 'Cloud Solutions',
      color: 'border-blue-200 hover:border-blue-500 bg-blue-50/30'
    },
    {
      icon: Users,
      title: 'Connect Your Workplace',
      problem: 'Disorganized communication, scattered documents, and employee friction across remote or hybrid teams.',
      solution: 'Improve communication, collaboration and productivity with unified Google Workspace & Microsoft 365 tools.',
      serviceLink: '/services/google-workspace',
      serviceName: 'Workplace Systems',
      color: 'border-indigo-200 hover:border-indigo-500 bg-indigo-50/30'
    },
    {
      icon: Bot,
      title: 'Automate Repetitive Work',
      problem: 'Valuable employee hours lost to manual data re-entry, slow customer response times, and static wikis.',
      solution: 'Use private AI chatbots and automated workflow pipelines to eliminate manual operational bottlenecks.',
      serviceLink: '/services/ai-solutions',
      serviceName: 'AI & Automation',
      color: 'border-violet-200 hover:border-violet-500 bg-violet-50/30'
    },
    {
      icon: Shield,
      title: 'Protect What Matters',
      problem: 'Heightened vulnerability to ransomware, phishing attacks, unmanaged laptops, and compliance penalties.',
      solution: 'Secure business systems, endpoints, networks and data with proactive Zero-Trust cyber defenses.',
      serviceLink: '/services/cybersecurity',
      serviceName: 'Cybersecurity',
      color: 'border-slate-200 hover:border-slate-800 bg-slate-50/50'
    }
  ];

  return (
    <section id="business-problems" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight">
            Technology Challenges. Business Solutions.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We don't sell technology for its own sake. We identify the operational friction slowing down your business and deploy the exact architecture to solve it.
          </p>
        </div>

        {/* 4 Problem-Focused Blocks Grid (12-col desktop, 2x2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`p-7 lg:p-8 rounded-2xl bg-white border ${item.color} card-hover flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0B132B]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Challenge description */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      The Challenge
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  {/* VAM VORA Solution */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                      Our Business Solution
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Explore Domain
                  </span>
                  <Link
                    to={item.serviceLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:translate-x-1 transition-all"
                  >
                    <span>{item.serviceName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
