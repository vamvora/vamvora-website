import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  X, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  HelpCircle, 
  Calendar, 
  Clock, 
  Building, 
  User, 
  Mail, 
  Phone, 
  AlertCircle, 
  RotateCcw,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useConsultationModal } from '../../context/ModalContext';
import type { ConsultationFormData } from '../../types';
import { sendContactEmail } from '../../services/emailService';

// Import custom uploaded service icons
import cloudIcon from '../../assets/icons/cloud.png';
import aiIcon from '../../assets/icons/ai-brain.png';
import googleIcon from '../../assets/icons/google.png';
import msIcon from '../../assets/icons/microsoft.png';
import cyberIcon from '../../assets/icons/cybersecurity.png';

const serviceOptions = [
  { id: 'Cloud Solutions', label: 'Cloud Solutions', desc: 'Migration, infrastructure, backups', iconImg: cloudIcon },
  { id: 'Google Workspace', label: 'Google Workspace', desc: 'Setup, email migration, DLP', iconImg: googleIcon },
  { id: 'Microsoft 365', label: 'Microsoft 365', desc: 'M365, Teams, SharePoint, Intune', iconImg: msIcon },
  { id: 'AI Solutions', label: 'AI Solutions', desc: 'Custom AI chatbots, automations', iconImg: aiIcon },
  { id: 'Cybersecurity', label: 'Cybersecurity', desc: 'EDR, Zero-Trust, email defense', iconImg: cyberIcon },
  { id: 'Not Sure', label: 'Not Sure / Multiple', desc: 'Need holistic technology advice', iconImg: null },
];

const initialFormData: ConsultationFormData = {
  fullName: '',
  workEmail: '',
  phone: '',
  companyName: '',
  service: '',
  industry: 'Technology & Software',
  companySize: '10-50 employees',
  requirement: '',
  preferredContact: 'email',
  preferredDate: '',
  preferredTime: 'Morning (9 AM - 12 PM)',
  additionalNotes: ''
};

export const ConsultationModal: React.FC = () => {
  const { isConsultationOpen, preselectedService, closeConsultation } = useConsultationModal();
  
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<ConsultationFormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'failure'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const modalRef = useRef<HTMLDivElement>(null);

  // Sync preselected service from context
  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleClose = useCallback(() => {
    closeConsultation();
    if (status === 'success') {
      setStatus('idle');
      setStep(1);
      setFormData(initialFormData);
    }
  }, [closeConsultation, status]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isConsultationOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isConsultationOpen]);

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isConsultationOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isConsultationOpen, handleClose]);

  if (!isConsultationOpen) return null;

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please enter a valid work email address';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.service) errs.service = 'Please select a service or choose Not Sure';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.requirement.trim()) {
      errs.requirement = 'Please briefly describe your requirement';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3 && validateStep3()) setStep(4);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const notes = [
        `Service Requested: ${formData.service || 'General Consulting'}`,
        `Industry: ${formData.industry}`,
        `Company Size: ${formData.companySize}`,
        `Requirement: ${formData.requirement || 'Not specified'}`,
        `Preferred Contact Method: ${formData.preferredContact}`,
        `Preferred Date/Time: ${formData.preferredDate || 'Flexible'} (${formData.preferredTime})`,
        `Additional Notes: ${formData.additionalNotes || 'None'}`
      ].join('\n');

      const result = await sendContactEmail({
        name: formData.fullName,
        email: formData.workEmail,
        phone: formData.phone,
        company: formData.companyName,
        subject: `Consultation Booking: ${formData.service || 'Technology Advisory'}`,
        message: notes,
      });

      if (result.success) {
        setStatus('success');
      } else {
        console.error('Consultation booking error:', result.error);
        setStatus('failure');
      }
    } catch (_err) {
      setStatus('failure');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="relative deep-glass rounded-3xl shadow-[0_20px_50px_rgba(1,69,242,0.15)] w-full max-w-2xl overflow-hidden my-auto text-slate-900 font-body border-white transform-gpu"
      >
        {/* Modal Top Header */}
        <div className="deep-glass-inner px-7 py-5 flex items-center justify-between border-b border-slate-200/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#0145F2] flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-4 h-4 text-cyan-200" />
            </div>
            <div>
              <h2 id="modal-title" className="font-heading text-xl font-bold text-slate-950 leading-tight">
                Book a Consultation Call
              </h2>
              <p className="text-xs text-slate-500 font-normal">
                1-on-1 assessment with Senior Solutions Architects
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close consultation modal"
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-200/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          
          {/* SUCCESS STATE */}
          {status === 'success' ? (
            <div className="py-6 space-y-6 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center shadow-md">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading italic text-3xl font-bold text-slate-950">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for sharing your requirements, <strong className="text-slate-900">{formData.fullName}</strong>. Our architecture team will review your business needs and contact you shortly at <strong className="text-slate-900">{formData.workEmail}</strong>.
                </p>
              </div>

              {/* Consultation Roadmap Timeline */}
              <div className="liquid-glass-light rounded-3xl p-6 text-left max-w-lg mx-auto shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-4">
                  What Happens Next
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
                  <div className="space-y-1">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold font-heading">1</span>
                    <h4 className="text-xs font-bold text-slate-900">Request Logged</h4>
                    <p className="text-[11px] text-slate-500">In system</p>
                  </div>
                  <div className="space-y-1">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-bold font-heading">2</span>
                    <h4 className="text-xs font-bold text-slate-900">Review</h4>
                    <p className="text-[11px] text-slate-500">Lead assigned</p>
                  </div>
                  <div className="space-y-1">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-bold font-heading">3</span>
                    <h4 className="text-xs font-bold text-slate-900">Strategy Call</h4>
                    <p className="text-[11px] text-slate-500">30-min call</p>
                  </div>
                  <div className="space-y-1">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-bold font-heading">4</span>
                    <h4 className="text-xs font-bold text-slate-900">Proposal</h4>
                    <p className="text-[11px] text-slate-500">Fixed roadmap</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="bg-slate-900 hover:bg-black text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : status === 'failure' ? (
            /* FAILURE STATE */
            <div className="py-6 space-y-6 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-3xl bg-red-50 text-red-500 border border-red-200 mx-auto flex items-center justify-center shadow-md">
                <AlertCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading italic text-3xl font-bold text-slate-950">
                  Something Went Wrong
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  We couldn't submit your consultation request at this moment. Your entered details have been preserved.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white text-base font-semibold px-6 py-3 rounded-full transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>
                <a
                  href="mailto:sales@vamvoratech.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-base font-semibold px-6 py-3 rounded-full transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Directly</span>
                </a>
              </div>
            </div>
          ) : (
            /* MULTI-STEP FORM FLOW */
            <div>
              {/* Step Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span className={step >= 1 ? 'text-slate-950 font-bold' : ''}>01 Details</span>
                  <span className="text-slate-300">→</span>
                  <span className={step >= 2 ? 'text-slate-950 font-bold' : ''}>02 Service</span>
                  <span className="text-slate-300">→</span>
                  <span className={step >= 3 ? 'text-slate-950 font-bold' : ''}>03 Requirements</span>
                  <span className="text-slate-300">→</span>
                  <span className={step >= 4 ? 'text-slate-950 font-bold' : ''}>04 Schedule</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-slate-950 h-full rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* STEP 1: Your Details */}
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-200">
                    <div>
                      <h3 className="font-heading italic text-xl font-bold text-slate-950">Step 1: Your Details</h3>
                      <p className="text-xs text-slate-500">Provide your contact details so our engineering leads can reach you.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 placeholder:text-slate-400 outline-none transition-all"
                        />
                      </div>
                      {errors.workEmail && <p className="text-xs text-red-500 mt-1">{errors.workEmail}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 63821-14955"
                            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 placeholder:text-slate-400 outline-none transition-all"
                          />
                        </div>
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            required
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            placeholder="e.g. Acme Corp"
                            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 placeholder:text-slate-400 outline-none transition-all"
                          />
                        </div>
                        {errors.companyName && <p className="text-xs text-red-500 mt-1">{errors.companyName}</p>}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: What do you need help with? */}
                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-200">
                    <div>
                      <h3 className="font-heading italic text-xl font-bold text-slate-950">Step 2: What Do You Need Help With?</h3>
                      <p className="text-xs text-slate-500">Select the technology domain closest to your business requirements.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((opt) => {
                        const isSelected = formData.service === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: opt.id })}
                            className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                              isSelected
                                ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10 shadow-sm'
                                : 'border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                            }`}
                          >
                            <div className="w-9 h-9 rounded-xl bg-slate-100 p-1.5 flex items-center justify-center flex-shrink-0">
                              {opt.iconImg ? (
                                <img src={opt.iconImg} alt={opt.label} className="w-full h-full object-contain" />
                              ) : (
                                <HelpCircle className="w-5 h-5 text-slate-600" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-heading italic text-sm font-bold text-slate-950 block">
                                {opt.label}
                              </span>
                              <span className="text-xs text-slate-500 block truncate">
                                {opt.desc}
                              </span>
                            </div>
                            {isSelected && (
                              <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                  </div>
                )}

                {/* STEP 3: Business Requirements */}
                {step === 3 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-200">
                    <div>
                      <h3 className="font-heading italic text-xl font-bold text-slate-950">Step 3: Business Requirements</h3>
                      <p className="text-xs text-slate-500">Help us tailor our architectural recommendations.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Industry / Vertical
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 bg-white text-slate-900 outline-none"
                        >
                          <option>Technology & Software</option>
                          <option>Financial & Banking</option>
                          <option>Healthcare & Biotech</option>
                          <option>Manufacturing & Logistics</option>
                          <option>Retail & E-commerce</option>
                          <option>Legal & Professional Services</option>
                          <option>Other / General</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Company Size
                        </label>
                        <select
                          value={formData.companySize}
                          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 bg-white text-slate-900 outline-none"
                        >
                          <option>1 - 10 employees</option>
                          <option>10 - 50 employees</option>
                          <option>50 - 250 employees</option>
                          <option>250+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Requirement / Challenge Overview <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        placeholder="Tell us what you're trying to achieve (e.g. migrate 50 mailboxes, audit cloud security, build an AI proposal assistant)..."
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 placeholder:text-slate-400 outline-none"
                      />
                      {errors.requirement && <p className="text-xs text-red-500 mt-1">{errors.requirement}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { id: 'email', label: 'Email' },
                          { id: 'phone', label: 'Phone Call' },
                          { id: 'teams', label: 'MS Teams' },
                          { id: 'google-meet', label: 'Google Meet' }
                        ].map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContact: m.id as any })}
                            className={`py-2 px-3 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                              formData.preferredContact === m.id
                                ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Schedule & Submit */}
                {step === 4 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-200">
                    <div>
                      <h3 className="font-heading italic text-xl font-bold text-slate-950">Step 4: Timing & Final Submit</h3>
                      <p className="text-xs text-slate-500">Pick an optional preferred schedule window for our call.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Preferred Date (Optional)
                        </label>
                        <div className="relative">
                          <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Preferred Time Window
                        </label>
                        <div className="relative">
                          <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 bg-white text-slate-900 outline-none"
                          >
                            <option>Morning (9 AM - 12 PM EST)</option>
                            <option>Afternoon (1 PM - 4 PM EST)</option>
                            <option>Late Afternoon (4 PM - 6 PM EST)</option>
                            <option>Flexible / Any time</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Summary Card */}
                    <div className="liquid-glass-light rounded-2xl p-5 space-y-2 text-xs shadow-xs">
                      <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">Request Summary</span>
                      <div className="grid grid-cols-2 gap-2.5 text-slate-600">
                        <div><strong className="text-slate-900">Contact:</strong> {formData.fullName}</div>
                        <div><strong className="text-slate-900">Company:</strong> {formData.companyName}</div>
                        <div><strong className="text-slate-900">Domain:</strong> {formData.service || 'General'}</div>
                        <div><strong className="text-slate-900">Method:</strong> {formData.preferredContact}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Zero-obligation consultation. We respect your data confidentiality.</span>
                    </div>
                  </div>
                )}

                {/* Form Buttons */}
                <div className="mt-8 pt-5 border-t border-slate-200/80 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-950 px-4 py-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : <div />}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-full transition-all shadow-md cursor-pointer"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 text-sm font-semibold bg-slate-900 hover:bg-black text-white px-7 py-3 rounded-full transition-all shadow-md disabled:opacity-70 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};
