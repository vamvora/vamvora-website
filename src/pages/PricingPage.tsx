import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Layers, 
  Grid, 
  Briefcase, 
  Sparkles, 
  Phone, 
  Mail,
  ShieldCheck
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { BlurReveal } from '../components/common/BlurReveal';
import { useConsultationModal } from '../context/ModalContext';

export const PricingPage: React.FC = () => {
  const { openConsultation } = useConsultationModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pricingCards = [
    {
      title: 'Google Workspace Plans',
      badge: 'Google Partner',
      icon: Layers,
      accent: 'text-amber-600 bg-amber-50 border-amber-200',
      description: 'Competitive pricing for Google Workspace in Erode. Professional business email, cloud storage, Google Meet, and administrative security.',
      link: '/google-workspace',
      plans: [
        'Business Starter (30 GB storage & custom email)',
        'Business Standard (2 TB storage & Meet recording)',
        'Business Plus (5 TB storage & advanced security)',
        'Enterprise Editions for custom scalability'
      ],
      includes: [
        'Domain verification & DNS setup',
        'Email migration assistance',
        'Ongoing administrator support',
        'Competitive per-user billing'
      ]
    },
    {
      title: 'Microsoft 365 Plans',
      badge: 'Microsoft Partner',
      icon: Grid,
      accent: 'text-blue-600 bg-blue-50 border-blue-200',
      description: 'Transparent Microsoft 365 pricing and license optimization in Erode. Exchange email, desktop Office apps, Teams, and Intune security.',
      link: '/microsoft-365',
      plans: [
        'Microsoft 365 Business Basic (Cloud email & Teams)',
        'Microsoft 365 Business Standard (Desktop Office apps)',
        'Microsoft 365 Business Premium (Intune & Defender)',
        'Enterprise E3 & E5 Tiers for compliance'
      ],
      includes: [
        'License audit & cost right-sizing',
        'Exchange Online mailbox migration',
        'Dependable technical support',
        'Flexible monthly or annual billing'
      ]
    },
    {
      title: 'Zoho Business Solutions',
      badge: 'Zoho Partner',
      icon: Briefcase,
      accent: 'text-red-600 bg-red-50 border-red-200',
      description: 'Affordable Zoho software solutions in Erode. Integrated sales, accounting, business email, and all-in-one suite licensing.',
      link: '/zoho',
      plans: [
        'Zoho Workplace (Secure email & office suite)',
        'Zoho Books (GST-ready accounting & invoicing)',
        'Zoho CRM (Sales automation & lead tracking)',
        'Zoho One (Complete 45+ business app suite)'
      ],
      includes: [
        'End-to-end setup & data migration',
        'Custom workflow automations',
        'Staff training & onboarding',
        'Reliable after-sales service'
      ]
    }
  ];

  const pricingFaqs = [
    {
      question: 'How is pricing determined for Google Workspace, Microsoft 365, and Zoho in Erode?',
      answer: 'Pricing is structured based on official vendor subscription tiers, number of user seats, and scope of implementation. At Vamvora Tech, we provide competitive pricing with full transparency, helping you select the ideal tier without paying for unused features.'
    },
    {
      question: 'Do you offer monthly or annual payment options?',
      answer: 'Yes. We offer both flexible month-to-month plans and discounted annual commitment subscriptions depending on your organizational cash flow and preferences.'
    },
    {
      question: 'Are migration and onboarding included in the subscription cost?',
      answer: 'We provide structured implementation packages that bundle domain verification, email data migration, security configuration, and initial team training alongside your subscription licensing.'
    },
    {
      question: 'Can you help our company reduce existing software license costs?',
      answer: 'Yes. We conduct license audits for Microsoft 365 and Google Workspace to identify unassigned seats, redundant add-ons, and over-provisioned plans. Clients routinely save on recurring software expenditure by right-sizing licenses.'
    }
  ];

  const pricingSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.vamvoratech.com/pricing#webpage',
        name: 'Cloud Solutions & Business Software Pricing in Erode | Vamvora Tech',
        description: 'Competitive pricing on Google Workspace, Microsoft 365 and Zoho plans in Erode. Get transparent pricing, license guidance and support from Vamvora Tech.',
        url: 'https://www.vamvoratech.com/pricing',
        publisher: {
          '@type': 'LocalBusiness',
          name: 'Vamvora Tech',
          telephone: '+91-63821-14955',
          email: 'sales@vamvoratech.com'
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
            name: 'Pricing',
            item: 'https://www.vamvoratech.com/pricing'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: pricingFaqs.map((faq) => ({
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
        title="Cloud Solutions & Business Software Pricing in Erode | Vamvora Tech"
        description="Competitive pricing on Google Workspace, Microsoft 365 and Zoho plans in Erode. Get transparent pricing, license guidance and support from Vamvora Tech."
        canonicalUrl="https://www.vamvoratech.com/pricing"
        schemaJson={pricingSchema}
      />

      {/* Ambient Lighting */}
      <div className="absolute top-10 left-10 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.15)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />
      <div className="absolute top-1/3 right-10 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(1,69,242,0.14)_0%,transparent_70%)] pointer-events-none -z-10 transform-gpu" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs font-body font-medium text-slate-500 mb-6">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#0145F2] font-semibold">Pricing</span>
        </div>

        {/* Page Header */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider font-mono shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Competitive Pricing & Transparent Plans</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.1]">
            Business Software & Cloud Solutions Pricing in Erode
          </h1>
          <p className="text-base sm:text-lg font-body text-slate-600 leading-relaxed max-w-2xl mx-auto pt-1">
            Competitive pricing and licensing consultation for Google Workspace, Microsoft 365, and Zoho solutions backed by reliable ongoing support.
          </p>
        </BlurReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pricingCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="deep-glass rounded-3xl p-8 sm:p-9 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border p-2.5 flex items-center justify-center ${card.accent} shadow-2xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-body font-semibold text-slate-600 deep-glass-inner px-3 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 group-hover:text-[#0145F2] transition-colors mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-body text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-200/70 font-body">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Available Plans & Tiers:
                    </span>
                    {card.plans.map((plan) => (
                      <div key={plan} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0145F2] mt-1.5 flex-shrink-0" />
                        <span>{plan}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-200/70 font-body">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Included With Vamvora Tech:
                    </span>
                    {card.includes.map((inc) => (
                      <div key={inc} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-200/70 space-y-3">
                  <button
                    type="button"
                    onClick={() => openConsultation(card.title)}
                    className="w-full py-3.5 px-4 rounded-full bg-[#0145F2] hover:bg-[#0038D1] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer inline-flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                  <Link
                    to={card.link}
                    className="w-full py-2.5 px-4 text-center text-xs font-semibold text-slate-600 hover:text-[#0145F2] block transition-colors"
                  >
                    View Comprehensive Technical Specs
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Strip */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 mb-20 shadow-sm font-body">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#0145F2] mx-auto md:mx-0" />
              <h3 className="font-heading font-bold text-slate-900 text-lg">No Hidden Surcharges</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clear, transparent billing with detailed itemization of software licenses and deployment services.
              </p>
            </div>
            <div className="space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto md:mx-0" />
              <h3 className="font-heading font-bold text-slate-900 text-lg">Official Partner Pricing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Authorized reseller access ensuring competitive licensing rates for businesses in Erode and Tamil Nadu.
              </p>
            </div>
            <div className="space-y-2">
              <Sparkles className="w-6 h-6 text-purple-600 mx-auto md:mx-0" />
              <h3 className="font-heading font-bold text-slate-900 text-lg">Flexible Growth</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Add or adjust user seats seamlessly as your team expands with pro-rated billing and zero lock-in penalties.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto space-y-8 mb-20">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-950">
              Pricing Frequently Asked Questions
            </h2>
            <p className="text-sm font-body text-slate-600">
              Common questions on software licensing, plans, and commercial terms.
            </p>
          </div>

          <div className="space-y-4 font-body">
            {pricingFaqs.map((faq, idx) => {
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

        {/* Contact CTA */}
        <div className="text-center max-w-xl mx-auto pt-6 border-t border-slate-200/70 font-body text-sm text-slate-600">
          <p className="mb-3 font-medium text-slate-800">Need a tailored proposal for your business?</p>
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

export default PricingPage;
