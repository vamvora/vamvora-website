import React from 'react';
import { Server, Activity, ShieldCheck, Award } from 'lucide-react';

interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: React.ElementType;
  accent: string;
}

const metrics: MetricItem[] = [
  {
    id: 'migrations',
    value: '120+',
    label: 'Migrations delivered',
    description: 'Enterprise cloud & workspace migrations executed with zero business downtime.',
    icon: Server,
    accent: 'text-[#0145F2] bg-blue-50/80 border-blue-200/80',
  },
  {
    id: 'uptime',
    value: '99.9%',
    label: 'Managed uptime',
    description: 'Mission-critical availability across multi-cloud and SaaS environments.',
    icon: Activity,
    accent: 'text-emerald-600 bg-emerald-50/80 border-emerald-200/80',
  },
  {
    id: 'monitoring',
    value: '24/7',
    label: 'Monitoring coverage',
    description: 'Continuous real-time threat detection, anomaly monitoring, and incident triage.',
    icon: ShieldCheck,
    accent: 'text-cyan-600 bg-cyan-50/80 border-cyan-200/80',
  },
  {
    id: 'experience',
    value: '8+ yrs',
    label: 'Average engineer experience',
    description: 'Certified cloud architects, security analysts, and AI automation specialists.',
    icon: Award,
    accent: 'text-purple-600 bg-purple-50/80 border-purple-200/80',
  },
];

import { BlurReveal } from '../common/BlurReveal';

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F1F5F9] relative overflow-hidden border-b border-slate-200/70">
      {/* Hyper-Saturated Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#00C2FF]/18 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#0145F2]/16 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header with BlurReveal */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-3xl mx-auto text-center">
            <span className="block">Engineering Outcomes That</span>
            <span className="block">Scale Business Performance.</span>
          </h2>
          <p className="text-sm sm:text-base font-body font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto pt-1">
            Backed by certified technical talent, rigorous SLAs, and a decade of enterprise cloud deployments.
          </p>
        </BlurReveal>

        {/* 4-Card Responsive Metric Grid with Staggered BlurReveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <BlurReveal
                key={metric.id}
                delay={idx * 0.12}
                className="deep-glass rounded-3xl p-7 lg:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Top Row: Icon Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl border p-2.5 flex items-center justify-center ${metric.accent} shadow-2xs group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#0145F2]/40 group-hover:bg-[#0145F2] transition-colors" />
                </div>

                {/* Main Metric Stat & Label */}
                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-heading text-slate-950 tracking-tight group-hover:text-[#0145F2] transition-colors">
                    {metric.value}
                  </div>
                  <h3 className="text-sm sm:text-base font-heading text-slate-900 leading-snug">
                    {metric.label}
                  </h3>
                  <p className="text-xs font-body text-slate-500 leading-relaxed pt-1">
                    {metric.description}
                  </p>
                </div>
              </BlurReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MetricsSection;
