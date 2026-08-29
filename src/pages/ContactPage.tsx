import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, ArrowUpRight } from 'lucide-react';
import { useConsultationModal } from '../context/ModalContext';
import { WhatsAppIcon } from '../components/common/WhatsAppButton';

export const ContactPage: React.FC = () => {
  const { openConsultation } = useConsultationModal();
  
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 sm:pt-36 lg:pt-40 pb-20 min-h-screen bg-[#F1F5F9] relative overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header with BlurReveal */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOBAL ENGAGEMENT DESK</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.1] text-center mx-auto">
            <span className="block">Get In Touch With Our</span>
            <span className="block">Engineering Specialists.</span>
          </h1>
          <p className="text-base sm:text-lg font-body text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Have a project in mind or need expert advice on cloud infrastructure, AI solutions, or cybersecurity? We are ready to assist.
          </p>
        </div>

        {/* 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact & Strategy Call Option (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Strategy Call Feature Card */}
            <div className="deep-glass rounded-3xl p-8 sm:p-10 shadow-lg border border-white space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#0145F2] tracking-wider uppercase block">
                  RECOMMENDED
                </span>
                <h2 className="text-2xl font-heading font-bold text-slate-950 leading-tight">
                  Book a Dedicated Consultation Call
                </h2>
                <p className="text-sm font-body text-slate-600 leading-relaxed">
                  Skip email threads. Schedule a direct 30-minute discovery session with a certified technology specialist.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openConsultation()}
                className="w-full bg-[#0145F2] hover:bg-[#0038D1] text-white font-body font-semibold px-6 py-4 rounded-full shadow-[0_8px_25px_rgba(1,69,242,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Launch Consultation Request</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 font-body">
              {/* WhatsApp Instant Chat Card */}
              <a
                href="https://wa.me/916382114955?text=Hello%20VAM%20VORA%20Technologies,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 rounded-3xl liquid-glass-light shadow-xs hover:border-emerald-300/80 hover:bg-emerald-50/20 transition-all group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                    WhatsApp Chat
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors block">
                    +91 63821 14955
                  </span>
                  <p className="text-xs text-emerald-600 font-medium mt-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Instant WhatsApp response</span>
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 rounded-3xl liquid-glass-light shadow-xs">
                <div className="w-11 h-11 rounded-2xl bg-white text-blue-600 shadow-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <a href="mailto:sales@vamvoratech.com" className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    sales@vamvoratech.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Average response under 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-3xl liquid-glass-light shadow-xs">
                <div className="w-11 h-11 rounded-2xl bg-white text-blue-600 shadow-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Telephone Hotline
                  </span>
                  <a href="tel:+916382114955" className="text-sm sm:text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    +91 63821 14955
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Mon–Fri 8:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-3xl liquid-glass-light shadow-xs">
                <div className="w-11 h-11 rounded-2xl bg-white text-emerald-600 shadow-sm flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Operational SLA
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-900">
                    24/7/365 Incident Response
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">For active SLA clients</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/@11.3456197,77.7097794,21z?authuser=0&entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 rounded-3xl liquid-glass-light shadow-xs hover:border-blue-300 transition-all group cursor-pointer"
                title="View on Google Maps"
              >
                <div className="w-11 h-11 rounded-2xl bg-white text-blue-600 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-[#0145F2] group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Office Location
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    19/1, Kongu Nagar second street, Municipal Colony Main Rd, near Anna theatre, Erode, Tamil Nadu 638004
                  </p>
                  <p className="text-xs text-blue-600 font-medium mt-1">Click to view on Google Maps →</p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: General Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 font-body">
            <div className="liquid-glass-light rounded-3xl p-8 sm:p-12 shadow-md">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading italic font-bold text-slate-900">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for contacting VAM VORA. Our client services representative will contact you at <strong>{form.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', company: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="text-xs font-bold text-blue-600 hover:underline pt-4 block mx-auto cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-200/70 pb-5 mb-2">
                    <h2 className="text-2xl sm:text-3xl font-heading italic font-bold text-slate-950">
                      Send a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Send us your general questions, inquiries, or feedback.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Rachel Adams"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200/90 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="e.g. Sterling Enterprises"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200/90 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="rachel@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200/90 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 63821-14955"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200/90 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200/90 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Cloud Architecture Inquiry">Cloud Architecture Inquiry</option>
                      <option value="Google Workspace Setup">Google Workspace Setup</option>
                      <option value="Microsoft 365 Licensing">Microsoft 365 Licensing</option>
                      <option value="AI Automation Solutions">AI Automation Solutions</option>
                      <option value="Cybersecurity & Compliance">Cybersecurity & Compliance</option>
                      <option value="Billing & Partner Relations">Billing & Partner Relations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Your Message <span className="text-slate-400 font-normal text-xs">(Optional)</span>
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please describe your question or requirements (optional)..."
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200/90 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white font-bold py-4 px-6 rounded-full transition-all shadow-lg flex items-center justify-center gap-2.5 cursor-pointer bg-[#0145F2] hover:bg-[#0038D1] hover:shadow-[0_10px_30px_rgba(1,69,242,0.4)] hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
