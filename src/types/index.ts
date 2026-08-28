export interface ServiceCapability {
  title: string;
  description: string;
  points: string[];
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  badge: string;
  icon: string;
  color: string;
  problemStatement: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solutionOverview: {
    title: string;
    description: string;
    highlights: string[];
  };
  capabilities: {
    name: string;
    summary: string;
    details: string[];
  }[];
  benefits: {
    title: string;
    description: string;
    metric?: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  useCases: {
    industry: string;
    challenge: string;
    solution: string;
    result: string;
  }[];
  technologies: {
    name: string;
    category: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  customerName: string;
  jobTitle: string;
  company: string;
  serviceCategory: string;
  metricHighlight?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Cloud' | 'AI' | 'Cybersecurity' | 'Microsoft 365' | 'Google Workspace';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 
    | 'General'
    | 'Cloud Solutions'
    | 'Google Workspace'
    | 'Microsoft 365'
    | 'AI Solutions'
    | 'Cybersecurity'
    | 'Consultation'
    | 'Pricing & Payments'
    | 'Support';
}

export interface ConsultationFormData {
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  service: string;
  industry: string;
  companySize: string;
  requirement: string;
  preferredContact: 'email' | 'phone' | 'teams' | 'google-meet';
  preferredDate?: string;
  preferredTime?: string;
  additionalNotes?: string;
}
