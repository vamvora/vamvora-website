import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  ArrowUpRight, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Activity,
  Layers,
  Globe,
  Quote
} from 'lucide-react';
import { useConsultationModal } from '../context/ModalContext';
import { BlurReveal } from '../components/common/BlurReveal';
import balajiImg from '../assets/balaji-iyer.jpg';

export const AboutPage: React.FC = () => {
  const { openConsultation } = useConsultationModal();

  const values = [
    {
      icon: Cloud,
      title: 'Cloud-First Architecture',
      description: 'We architect enterprise systems designed for elastic scale, disaster resilience, and cost efficiency across multi-cloud environments.',
      accent: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Trust Security',
      description: 'Security is never an afterthought. Every identity, endpoint, and data pipeline is continuously verified, defended, and monitored.',
      accent: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      icon: Cpu,
      title: 'Intelligent AI Automation',
      description: 'We integrate production-grade AI agents and autonomous workflows that streamline operations and drive decision intelligence.',
      accent: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      icon: Activity,
      title: '24/7 Operational SLA',
      description: 'Dedicated engineers providing around-the-clock telemetry, incident triage, and uptime guarantees for mission-critical workloads.',
      accent: 'text-cyan-600 bg-cyan-50 border-cyan-200'
    }
  ];

  const milestones = [
    { year: '120+', title: 'Enterprise Migrations', desc: 'Seamless cloud migrations executed with zero downtime.' },
    { year: '99.9%', title: 'Managed Uptime SLA', desc: 'Continuous availability across global infrastructure.' },
    { year: '24/7', title: 'Security Coverage', desc: 'Real-time threat monitoring and incident response.' },
    { year: '8+ Yrs', title: 'Average Experience', desc: 'Certified architects across AWS, Azure, Google & M365.' }
  ];

  const principles = [
    {
      number: '01',
      title: 'Resilience by Design',
      description: 'We reject single points of failure. Every architecture is engineered with active multi-zone redundancy, automated healing, and verified zero-downtime failover.',
      icon: Layers,
      tag: 'Zero-Downtime Guarantee',
      accent: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      number: '02',
      title: 'Zero-Trust Rigor',
      description: 'Security is treated as a continuous operational posture. We implement strict identity verification, micro-segmentation, and proactive telemetry at every node.',
      icon: ShieldCheck,
      tag: 'Defensive Cyber Posture',
      accent: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      number: '03',
      title: 'Pragmatic Innovation',
      description: 'We deploy modern cloud and AI capabilities only when they tangibly reduce complexity, compress latency, and unlock measurable enterprise productivity.',
      icon: Sparkles,
      tag: 'High-ROI Engineering',
      accent: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      number: '04',
      title: 'Cross-Border Integrity',
      description: 'Seamlessly merging US-grade enterprise execution benchmarks with localized responsiveness, transparent communication, and long-term client stewardship.',
      icon: Globe,
      tag: 'Global Standards • Local Heart',
      accent: 'text-cyan-600 bg-cyan-50 border-cyan-200'
    }
  ];

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-20 min-h-screen bg-[#F1F5F9] relative overflow-hidden font-sans">
      {/* Hyper-Saturated Ambient Background Glow via native GPU radial gradients */}
      <div className="absolute top-10 left-10 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.15)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />
      <div className="absolute top-1/3 right-10 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(1,69,242,0.14)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,153,0.12)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* 1. HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <BlurReveal className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.1] max-w-4xl mx-auto text-center">
              <span className="block">Engineering Resilient Digital</span>
              <span className="block">Foundations For Modern Enterprises.</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-body text-slate-600 leading-relaxed max-w-2xl mx-auto pt-2">
              We are a team of certified cloud architects, cybersecurity specialists, and AI engineers dedicated to transforming how businesses operate, innovate, and scale.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => openConsultation()}
                className="px-8 py-4 rounded-full bg-[#0145F2] hover:bg-[#0038D1] border-[1.5px] border-white/50 text-white text-base sm:text-lg font-semibold inline-flex items-center gap-2 shadow-[0_10px_30px_rgba(1,69,242,0.4),inset_0_1.5px_1px_rgba(255,255,255,0.7)] hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Book a Consultation Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <Link
                to="/services"
                className="glass-cta px-8 py-4 rounded-full text-slate-900 hover:text-[#0145F2] text-sm sm:text-base font-semibold inline-flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </BlurReveal>
        </section>

        {/* 2. OUR STORY & MISSION */}
        <section className="mb-20">
          <BlurReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-950 tracking-tight leading-snug">
                <span className="block">Our Mission: Bridging Complexity</span>
                <span className="block">And Cloud Excellence.</span>
              </h2>
              <p className="text-sm sm:text-base font-body text-slate-600 leading-relaxed">
                Founded with a conviction that enterprise technology should empower businesses rather than encumber them, VAM VORA delivers turnkey architectures across cloud infrastructure, workplace productivity, AI automations, and zero-trust cybersecurity.
              </p>
              <p className="text-sm sm:text-base font-body text-slate-600 leading-relaxed">
                Whether deploying hybrid clouds, migrating complex SaaS suites, or hardening defensive perimeters, we design systems engineered for sovereign reliability, compliance, and long-term agility.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="deep-glass-inner p-4 rounded-2xl">
                  <span className="text-xs font-mono font-bold text-[#0145F2] block mb-1">01. RELIABILITY</span>
                  <span className="text-xs font-body text-slate-700 font-medium">Zero-downtime migrations & proactive health telemetry.</span>
                </div>
                <div className="deep-glass-inner p-4 rounded-2xl">
                  <span className="text-xs font-mono font-bold text-[#0145F2] block mb-1">02. SECURITY</span>
                  <span className="text-xs font-body text-slate-700 font-medium">Zero-trust baseline protection built into every workflow.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 deep-glass rounded-3xl p-8 sm:p-10 space-y-6 shadow-lg border border-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0145F2]/10 border border-[#0145F2]/30 flex items-center justify-center text-[#0145F2]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900">
                  What Sets Us Apart
                </h3>
              </div>

              <div className="space-y-4 font-body text-sm text-slate-700">
                {[
                  'Direct access to Senior Solutions Architects without layers of bureaucracy.',
                  'Vendor-neutral recommendations optimized for performance and budget.',
                  'Comprehensive post-deployment monitoring, governance, and user training.',
                  'Strict compliance standards aligned with SOC 2, HIPAA, and ISO benchmarks.'
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 deep-glass-inner p-3.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#0145F2] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </BlurReveal>
        </section>

        {/* 3. CORE PILLARS & VALUES */}
        <section className="mb-20">
          <BlurReveal className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-950 tracking-tight text-center mx-auto">
              <span className="block">Our Core</span>
              <span className="block">Technical Disciplines</span>
            </h2>
            <p className="text-sm sm:text-base font-body text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Built on decades of combined engineering experience across enterprise environments.
            </p>
          </BlurReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <BlurReveal
                  key={val.title}
                  delay={idx * 0.1}
                  className="deep-glass rounded-3xl p-7 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl border p-2.5 flex items-center justify-center ${val.accent} shadow-2xs mb-5 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-body font-semibold text-[#0145F2]">
                    <span>Verified Practice</span>
                  </div>
                </BlurReveal>
              );
            })}
          </div>
        </section>

        {/* 4. TRACK RECORD METRICS */}
        <section className="mb-20">
          <BlurReveal className="deep-glass rounded-3xl p-8 sm:p-12 shadow-lg border border-white">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
              {milestones.map((m) => (
                <div key={m.title} className="space-y-1.5 p-2 group cursor-pointer transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-4xl sm:text-5xl font-heading font-black text-slate-950 group-hover:text-[#0145F2] transition-colors duration-300">
                    {m.year}
                  </div>
                  <h4 className="text-sm font-heading font-bold text-slate-900 group-hover:text-[#0145F2] transition-colors duration-300">
                    {m.title}
                  </h4>
                  <p className="text-xs font-body text-slate-600 max-w-[200px] mx-auto group-hover:text-slate-900 transition-colors duration-300">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </BlurReveal>
        </section>

        {/* 5. LEADERSHIP & INNOVATION SECTION */}
        <section className="mb-20 sm:mb-24">
          <BlurReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-950 tracking-tight text-center mx-auto">
              <span className="block">Leadership and</span>
              <span className="block">Innovation</span>
            </h2>
            <p className="text-sm sm:text-base font-body text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Guiding global enterprise transformation through transcontinental engineering vision, operational rigor, and deep-rooted trust.
            </p>
          </BlurReveal>

          <BlurReveal className="deep-glass rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl border border-white relative overflow-hidden">
            {/* Ambient Accent Orbs via GPU radial gradients */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(1,69,242,0.12)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.12)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column: Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 group">
                  <img 
                    src={balajiImg} 
                    alt="Balaji Iyer - Founder & Chief Innovation Officer" 
                    className="w-full h-auto object-cover object-top aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column: Bio & Quote */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-950 tracking-tight leading-tight">
                    Balaji Iyer
                  </h3>
                  <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#0145F2] uppercase block">
                    FOUNDER & CHIEF INNOVATION OFFICER
                  </span>
                </div>

                <div className="space-y-4 font-body text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    With over 8 years of specialized experience in enterprise infrastructure, Balaji Iyer has been the driving force behind VAM VORA's global trajectory. His unique perspective stems from a deep-rooted foundation in Tamil Nadu (Chennai), combined with extensive experience as a US NRI operating at the highest levels of tech leadership.
                  </p>
                  <p>
                    This transcontinental journey has shaped a leadership style that seamlessly blends rigorous technical standards with an empathetic understanding of global market nuances. Under his guidance, VAM VORA has consistently delivered robust, scalable solutions that empower global enterprises to operate with confidence.
                  </p>
                </div>

                {/* Quote Callout Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/95 to-slate-50/90 border border-slate-200/90 shadow-sm relative space-y-2">
                  <Quote className="w-6 h-6 text-[#0145F2] opacity-80" />
                  <p className="font-heading italic text-sm sm:text-base text-slate-800 font-semibold leading-snug">
                    "Innovation is not just about technology; it's about building trust that spans continents."
                  </p>
                </div>
              </div>

            </div>
          </BlurReveal>
        </section>

        {/* 6. PRINCIPLES THAT DRIVE US */}
        <section className="mb-20 sm:mb-24">
          <BlurReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-950 tracking-tight text-center mx-auto">
              <span className="block">Principles That</span>
              <span className="block">Drive Us</span>
            </h2>
            <p className="text-sm sm:text-base font-body text-slate-600 leading-relaxed max-w-2xl mx-auto">
              The foundational engineering discipline, security rigor, and transcontinental trust that guide every architecture we deploy.
            </p>
          </BlurReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <BlurReveal
                  key={item.title}
                  delay={idx * 0.1}
                  className="deep-glass rounded-3xl p-7 sm:p-8 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 relative border border-white shadow-md hover:shadow-xl hover:border-blue-200/80"
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl border p-2.5 flex items-center justify-center ${item.accent} shadow-2xs group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-mono font-bold text-slate-300 group-hover:text-[#0145F2] transition-colors duration-300">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-950 mb-2.5 group-hover:text-[#0145F2] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-[11px] font-mono font-semibold text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0145F2]" />
                    <span>{item.tag}</span>
                  </div>
                </BlurReveal>
              );
            })}
          </div>
        </section>

        {/* 7. GLOBAL CTA BANNER */}
        <section>
          <BlurReveal className="deep-glass rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6 shadow-xl border border-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-950 tracking-tight text-center mx-auto">
              <span className="block">Ready To Modernize</span>
              <span className="block">Your Infrastructure?</span>
            </h2>
            <p className="text-sm sm:text-base font-body text-slate-600 max-w-xl mx-auto leading-relaxed">
              Book a strategy call with our senior architects to review your technical roadmap, cybersecurity stance, or cloud migration requirements.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openConsultation()}
                className="px-8 py-4 rounded-full bg-[#0145F2] hover:bg-[#0038D1] text-white text-base sm:text-lg font-semibold inline-flex items-center gap-2 shadow-[0_10px_30px_rgba(1,69,242,0.4)] hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Book a Consultation Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </BlurReveal>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
