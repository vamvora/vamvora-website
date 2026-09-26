import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Layers, 
  Grid, 
  Briefcase, 
  Mail, 
  Phone 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { BlurReveal } from '../components/common/BlurReveal';
import { useConsultationModal } from '../context/ModalContext';

export const SupportPage: React.FC = () => {
  const { openConsultation } = useConsultationModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const supportServices = [
    {
      title: 'Google Workspace Support',
      icon: Layers,
      accent: 'text-amber-600 bg-amber-50 border-amber-200',
      link: '/google-workspace',
      description: 'Dedicated Google Workspace technical support in Erode. Troubleshooting for Gmail, user permissions, DNS security, and admin console settings.',
      features: ['Admin assistance', 'Mailbox & sync troubleshooting', 'Security & DLP reviews', 'Domain DNS management']
    },
    {
      title: 'Microsoft 365 Support',
      icon: Grid,
      accent: 'text-blue-600 bg-blue-50 border-blue-200',
      link: '/microsoft-365',
      description: 'Dependable Microsoft 365 technical support in Erode. Help desk for Outlook sync, Teams calling, SharePoint permissions, and tenant security.',
      features: ['Outlook & Exchange support', 'Teams & SharePoint help', 'License optimization', 'Entra ID & MFA config']
    },
    {
      title: 'Zoho Business Software Support',
      icon: Briefcase,
      accent: 'text-red-600 bg-red-50 border-red-200',
      link: '/zoho',
      description: 'Local Zoho support in Erode for Zoho CRM, Zoho Books, Zoho Workplace, and Zoho One. Workflow tweaks, custom reports, and user training.',
      features: ['Zoho CRM automation help', 'Zoho Books GST billing support', 'Zoho Mail domain sync', 'User onboarding & training']
    },
    {
      title: 'Cloud & Business IT Support',
      icon: Headphones,
      accent: 'text-cyan-600 bg-cyan-50 border-cyan-200',
      link: '/services/cloud-solutions',
      description: 'Comprehensive business IT support and cloud technical support in Erode. Continuous monitoring, backup management, and server administration.',
      features: ['Cloud infrastructure monitoring', 'Data backup verification', 'Security patch management', 'Network & endpoint support']
    }
  ];

  const supportFaqs = [
    {
      question: 'What IT and cloud software support does Vamvora Tech provide in Erode?',
      answer: 'Vamvora Tech provides business IT support, cloud support, and software technical support in Erode. We support Google Workspace, Microsoft 365, Zoho applications, cloud infrastructure, and business email systems.'
    },
    {
      question: 'Do you provide ongoing support after initial setup or migration?',
      answer: 'Yes. Reliable after-sales support is one of our primary business advantages. We provide continuous support, periodic tenant reviews, license optimization, and prompt troubleshooting so your team always has expert assistance.'
    },
    {
      question: 'How fast does your technical support team respond to inquiries?',
      answer: 'We prioritize customer issues with fast, dependable response SLAs. Standard business support requests are typically addressed promptly during business hours, while critical service interruptions receive immediate priority triage.'
    },
    {
      question: 'Can you support small businesses in Erode that don’t have an internal IT team?',
      answer: 'Yes. Many small and growing businesses in Erode partner with Vamvora Tech as their outsourced technology partner. We manage user accounts, security, backups, and software licensing so you can focus on running your business.'
    }
  ];

  const supportSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.vamvoratech.com/support#service',
        name: 'IT & Cloud Support Services in Erode',
        description: 'Dependable IT and cloud support in Erode for Google Workspace, Microsoft 365 and Zoho. Reliable ongoing business tech support from Vamvora Tech.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Vamvora Tech',
          url: 'https://www.vamvoratech.com/',
          telephone: '+91-63821-14955',
          email: 'sales@vamvoratech.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '19/1, Kongu Nagar second street, Municipal Colony Main Rd, near Anna theatre',
            addressLocality: 'Erode',
            addressRegion: 'Tamil Nadu',
            postalCode: '638004',
            addressCountry: 'IN'
          }
        },
        url: 'https://www.vamvoratech.com/support',
        areaServed: {
          '@type': 'City',
          name: 'Erode'
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.vamvoratech.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Support',
            item: 'https://www.vamvoratech.com/support'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: supportFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-20 min-h-screen bg-[#F1F5F9] relative overflow-hidden font-sans">
      <SEO
        title="IT & Cloud Support Services in Erode | Vamvora Tech"
        description="Dependable IT and cloud support in Erode for Google Workspace, Microsoft 365 and Zoho. Get reliable ongoing business tech support from Vamvora Tech."
        canonicalUrl="https://www.vamvoratech.com/support"
        schemaJson={supportSchema}
      />

      {/* Ambient Lighting */}
      <div className="absolute top-10 left-10 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.15)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />
      <div className="absolute top-1/3 right-10 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(1,69,242,0.14)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs font-body font-medium text-slate-500 mb-6">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#0145F2] font-semibold">Support</span>
        </div>

        {/* Page Header */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider font-mono shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Reliable Business IT Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.1]">
            Dependable IT & Cloud Support in Erode
          </h1>
          <p className="text-base sm:text-lg font-body text-slate-600 leading-relaxed max-w-2xl mx-auto pt-1">
            Strong after-sales service and ongoing technical support for Google Workspace, Microsoft 365, Zoho, and business cloud solutions.
          </p>
        </BlurReveal>

        {/* Support Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {supportServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="deep-glass rounded-3xl p-8 sm:p-10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border p-2.5 flex items-center justify-center ${svc.accent} shadow-2xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-body font-semibold text-slate-500 deep-glass-inner px-3 py-1 rounded-full">
                      Ongoing Support
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 group-hover:text-[#0145F2] transition-colors mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-sm font-body text-slate-600 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-200/70 font-body">
                    {svc.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0145F2] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center justify-between">
                  <Link
                    to={svc.link}
                    className="text-xs sm:text-sm font-semibold text-[#0145F2] hover:underline inline-flex items-center gap-1.5 group/link"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => openConsultation(svc.title)}
                    className="text-xs font-semibold px-4 py-2 rounded-full bg-[#0145F2] hover:bg-[#0038D1] text-white shadow-xs transition-all cursor-pointer"
                  >
                    Request Support
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Advantages Banner */}
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 mb-20 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-[#0145F2] text-xs font-mono font-bold tracking-widest uppercase block">
              WHY PARTNER WITH VAMVORA TECH
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
              Reliable Support Is Our Core Business Advantage
            </h2>
            <p className="text-sm sm:text-base font-body text-slate-300 leading-relaxed">
              We believe great business software is only as good as the support behind it. Our certified engineers in Erode provide direct, trustworthy assistance, competitive pricing on renewals, and ongoing guidance as your business grows.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/pricing"
                className="deep-glass-inner text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                <span>Explore Pricing & Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="bg-[#0145F2] hover:bg-[#0038D1] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Contact Our Support Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-8 mb-20">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950">
              Support Frequently Asked Questions
            </h2>
            <p className="text-sm font-body text-slate-600">
              Answers regarding our business IT support, service levels, and ongoing assistance.
            </p>
          </div>

          <div className="space-y-4 font-body">
            {supportFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-all"
                >
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

        {/* Direct Contact Options */}
        <div className="text-center max-w-xl mx-auto pt-6 border-t border-slate-200/70 font-body text-sm text-slate-600">
          <p className="mb-3 font-medium text-slate-800">Need Immediate Assistance?</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm">
            <a href="tel:+916382114955" className="inline-flex items-center gap-2 text-[#0145F2] hover:underline font-semibold">
              <Phone className="w-4 h-4" />
              <span>+91 63821 14955</span>
            </a>
            <span className="text-slate-300">•</span>
            <a href="mailto:sales@vamvoratech.com" className="inline-flex items-center gap-2 text-[#0145F2] hover:underline font-semibold">
              <Mail className="w-4 h-4" />
              <span>sales@vamvoratech.com</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportPage;
