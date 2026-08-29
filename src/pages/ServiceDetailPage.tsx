import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { useConsultationModal } from '../context/ModalContext';
import { 
  ArrowUpRight,
  CheckCircle2, 
  ChevronDown, 
  Check, 
  Building2, 
  Server
} from 'lucide-react';

// Import custom uploaded service icons
import cloudIcon from '../assets/icons/cloud.png';
import aiIcon from '../assets/icons/ai-brain.png';
import googleIcon from '../assets/icons/google.png';
import msIcon from '../assets/icons/microsoft.png';
import cyberIcon from '../assets/icons/cybersecurity.png';

const serviceIconsMap: Record<string, string> = {
  'cloud-solutions': cloudIcon,
  'google-workspace': googleIcon,
  'microsoft-365': msIcon,
  'ai-solutions': aiIcon,
  'cybersecurity': cyberIcon
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openConsultation } = useConsultationModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const currentIcon = serviceIconsMap[service.id] || cloudIcon;

  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-16 min-h-screen bg-[#F1F5F9] relative overflow-hidden">
      
      {/* 1. SERVICE HERO */}
      <section className="relative pb-12 lg:pb-16 overflow-hidden">
        {/* Hyper-Saturated Ambient Background Glow via native GPU radial gradients */}
        <div className="absolute top-10 left-10 w-[650px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.15)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />
        <div className="absolute top-1/2 right-10 w-[650px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(1,69,242,0.14)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs font-body font-medium text-slate-500 mb-6">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-slate-900 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#0145F2] font-semibold">{service.title}</span>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-3 shadow-md border border-white flex items-center justify-center mb-1">
              <img src={currentIcon} alt={service.title} className="w-full h-full object-contain" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.1] max-w-4xl mx-auto text-center">
              {service.heroHeadline.split('\n').map((line, idx) => (
                <span key={idx} className="block">{line}</span>
              ))}
            </h1>

            <p className="text-base sm:text-lg font-body text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {service.heroSubheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => openConsultation(service.title)}
                className="bg-[#0145F2] hover:bg-[#0038D1] text-white font-body font-semibold px-8 py-4 rounded-full shadow-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2 group hover:scale-[1.02]"
              >
                <span>Book {service.title} Strategy Call</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="#service-capabilities"
                className="deep-glass-inner hover:bg-white text-slate-800 font-body font-semibold px-7 py-4 rounded-full shadow-xs transition-all text-center"
              >
                <span>Explore Capabilities</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM & BUSINESS CHALLENGE */}
      <section className="py-24 bg-white border-y border-slate-200/70">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-heading italic font-bold text-slate-950 tracking-tight leading-tight">
                {service.problemStatement.title}
              </h2>
              <p className="text-sm sm:text-base font-body text-slate-600 leading-relaxed">
                {service.problemStatement.description}
              </p>
            </div>

            <div className="lg:col-span-7 liquid-glass-light rounded-3xl p-8 sm:p-10 shadow-md">
              <h3 className="text-xs font-body font-bold uppercase tracking-wider text-slate-500 mb-6">
                Key Vulnerabilities & Obstacles
              </h3>
              <div className="space-y-3.5 font-body">
                {service.problemStatement.painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3.5 bg-white/90 p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">✕</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-700">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SOLUTION OVERVIEW */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading italic font-bold text-slate-950 tracking-tight">
              {service.solutionOverview.title}
            </h2>
            <p className="text-base sm:text-lg font-body text-slate-600 leading-relaxed">
              {service.solutionOverview.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.solutionOverview.highlights.map((item) => (
              <div key={item} className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3.5 font-body">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE CAPABILITIES (6 CAPABILITIES GRID) */}
      <section id="service-capabilities" className="py-24 lg:py-32 bg-white border-t border-slate-200/70">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-heading italic font-bold text-slate-950 tracking-tight">
              Core Service Capabilities
            </h2>
            <p className="text-base sm:text-lg font-body text-slate-600 leading-relaxed">
              Structured engineering and management deliverables tailored to your operational prerequisites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.capabilities.map((cap) => (
              <div
                key={cap.name}
                id={cap.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="liquid-glass-light rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-heading italic font-bold text-slate-950 mb-2">
                      {cap.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">
                      {cap.summary}
                    </p>
                  </div>

                  {/* Bullet Details */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-200/70 font-body">
                    {cap.details.map((detail) => (
                      <li key={detail} className="text-xs text-slate-700 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC BENEFITS */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-heading italic text-white tracking-tight">
              Business Outcomes & Measurable ROI
            </h2>
            <p className="text-base sm:text-lg font-body text-slate-300 leading-relaxed">
              Measurable returns in security posture, operational velocity, and cloud cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="liquid-glass-strong p-8 rounded-3xl flex flex-col justify-between shadow-xl">
                <div>
                  {benefit.metric && (
                    <div className="text-3xl font-heading italic font-bold text-blue-300 mb-3">
                      {benefit.metric}
                    </div>
                  )}
                  <h3 className="text-lg font-heading italic font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-body text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK (SERVICE PROCESS) */}
      <section className="py-24 bg-white border-t border-slate-200/70">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading italic font-bold text-slate-950">
              How We Execute
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 font-body">
            {service.process.map((step) => (
              <div key={step.step} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-xs">
                <span className="text-3xl font-heading italic font-bold text-blue-600 block">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REAL-WORLD USE CASES */}
      <section className="py-24 bg-[#F8FAFC] border-t border-slate-200/70">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading italic font-bold text-slate-950">
              Real-World Client Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
            {service.useCases.map((uc) => (
              <div key={uc.industry} className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-md space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full w-fit border border-blue-200">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{uc.industry}</span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-900 block mb-1">The Challenge:</strong>
                    <p className="text-slate-600 leading-relaxed">{uc.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">VAM VORA Implementation:</strong>
                    <p className="text-slate-600 leading-relaxed">{uc.solution}</p>
                  </div>
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                    <strong className="text-emerald-950 block mb-1">Achieved Result:</strong>
                    <p className="text-emerald-800 font-medium">{uc.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGIES & INTEGRATIONS */}
      <section className="py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 text-center space-y-8">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-heading italic font-bold text-slate-950">
              Enterprise Ecosystem Integrations
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 font-body">
            {service.technologies.map((tech) => (
              <div key={tech.name} className="px-4 py-2.5 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-800 shadow-2xs flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-blue-600" />
                <span>{tech.name}</span>
                <span className="text-[10px] text-slate-400 font-normal">({tech.category})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SERVICE-SPECIFIC FAQ */}
      <section className="py-24 bg-[#F8FAFC] border-t border-slate-200/70">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading italic font-bold text-slate-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 font-body">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={faq.question} className="rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-xs">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base font-heading italic font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL SERVICE CTA */}
      <section className="py-24 bg-slate-950 text-white border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-heading italic text-white leading-tight">
            Ready To Deploy Enterprise {service.title}?
          </h2>
          <p className="text-base sm:text-lg font-body font-light text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Schedule a discovery strategy call with our certified technology leads. We will review your current architecture and provide a fixed-scope roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => openConsultation(service.title)}
              className="liquid-glass-light w-full sm:w-auto bg-white/90 hover:bg-white text-slate-950 font-body font-semibold px-8 py-4 rounded-full shadow-xl transition-all cursor-pointer"
            >
              Book {service.title} Call
            </button>
            <Link
              to="/contact"
              className="liquid-glass-strong w-full sm:w-auto text-white font-body font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
