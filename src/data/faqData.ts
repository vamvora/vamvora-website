import type { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  // General (Top 3 for Homepage)
  {
    id: 'gen-1',
    question: 'What services does VAM VORA Technologies provide?',
    answer: 'VAM VORA Technologies is an enterprise B2B technology partner specializing in five core disciplines: Cloud Solutions (migration, infrastructure, disaster recovery), Google Workspace deployment & security, Microsoft 365 enterprise architecture, AI Solutions (chatbots, workflow automation, private knowledge assistants), and Proactive Cybersecurity (EDR, email security, Zero-Trust network defense).',
    category: 'General'
  },
  {
    id: 'gen-2',
    question: 'How does the consultation process work?',
    answer: 'Our consultation begins with a free 30-minute discovery session to understand your business objectives and technology bottlenecks. We then assess your current architecture, deliver a structured recommendations blueprint with transparent pricing, and present a clear deployment timeline with zero business downtime guarantees.',
    category: 'General'
  },
  {
    id: 'gen-3',
    question: 'How is the pricing for your services determined?',
    answer: 'Our pricing is structured with 100% transparency. Depending on the service, we offer fixed-scope project pricing (e.g. cloud migrations or AI prototype deployments), predictable per-user monthly management tiers (e.g. Microsoft 365 / Google Workspace governance), and customized retainer agreements for continuous cybersecurity & cloud management.',
    category: 'General'
  },

  // Cloud Solutions
  {
    id: 'cloud-1',
    question: 'How do you guarantee zero downtime during cloud migrations?',
    answer: 'We deploy an incremental replication model where databases and file assets synchronize in the background while your live legacy environment operates normally. The final DNS switchover is scheduled during an off-peak window, ensuring seamless business continuity.',
    category: 'Cloud Solutions'
  },
  {
    id: 'cloud-2',
    question: 'Can you help optimize our existing high AWS/Azure cloud bills?',
    answer: 'Yes. Our FinOps cloud audit analyzes reserved instance coverage, unattached storage volumes, over-provisioned compute, and data egress channels. Clients routinely see a 25% to 40% reduction in monthly cloud expenditure within 30 days.',
    category: 'Cloud Solutions'
  },
  {
    id: 'cloud-3',
    question: 'What backup frequency and recovery speed (RTO/RPO) do you support?',
    answer: 'We architect immutable cloud backup tiers with custom RPO (as low as 15 minutes) and RTO (recovery in under 1 hour). All backups are air-gapped and protected against ransomware with automated periodic restore drills.',
    category: 'Cloud Solutions'
  },

  // Google Workspace
  {
    id: 'gw-1',
    question: 'Can you migrate all our existing emails, calendar invites, and files from our current provider?',
    answer: 'Yes. We migrate 100% of mailbox history, folder trees, calendars, and shared files from IMAP/POP3, cPanel, Exchange, or Microsoft 365 into Google Workspace without losing email metadata or attachments.',
    category: 'Google Workspace'
  },
  {
    id: 'gw-2',
    question: 'How do you prevent data leaks on Google Workspace?',
    answer: 'We configure granular Data Loss Prevention (DLP) rules that detect and block sensitive information (such as credit card numbers, social security IDs, and confidential documents) from being shared outside the organization.',
    category: 'Google Workspace'
  },

  // Microsoft 365
  {
    id: 'm365-1',
    question: 'Which Microsoft 365 license plan is right for our team size?',
    answer: 'For small-to-mid enterprises, Microsoft 365 Business Premium offers the ideal balance of Office apps, advanced Defender security, and Intune device management. For larger enterprises or strict regulatory requirements, we guide selections between E3 and E5 tiers.',
    category: 'Microsoft 365'
  },
  {
    id: 'm365-2',
    question: 'How does Microsoft Intune protect company data on employee personal phones?',
    answer: 'Intune uses Mobile Application Management (MAM) to containerize corporate data inside Outlook and Teams. If an employee leaves or loses their phone, you can remotely wipe company data without affecting their private photos or apps.',
    category: 'Microsoft 365'
  },

  // AI Solutions
  {
    id: 'ai-1',
    question: 'Is our proprietary company data safe when using your custom AI models?',
    answer: 'Absolutely. We use enterprise-grade private API pipelines and dedicated vector stores. Your company data and intellectual property are never sent to public training datasets or stored by third-party model providers.',
    category: 'AI Solutions'
  },
  {
    id: 'ai-2',
    question: 'What business workflows yield the highest return on investment (ROI) with AI?',
    answer: 'High-ROI workflows typically include 24/7 intelligent customer support chatbots, automated invoice/receipt data ingestion, AI-powered sales quote drafting from emails, and internal employee policy & documentation query assistants.',
    category: 'AI Solutions'
  },

  // Cybersecurity
  {
    id: 'sec-1',
    question: 'Why is traditional antivirus no longer enough for our company?',
    answer: 'Traditional antivirus relies on historical signature databases and fails against zero-day exploits, fileless ransomware, and stolen credential attacks. We deploy Endpoint Detection & Response (EDR) that monitors system behavioral anomalies and isolates threats in real time.',
    category: 'Cybersecurity'
  },
  {
    id: 'sec-2',
    question: 'Can you help our company qualify for and maintain Cyber Insurance?',
    answer: 'Yes. Most cyber insurance underwriters mandate MFA, immutable backups, EDR, and regular vulnerability scans. We implement all required security controls and provide the necessary compliance audit reports.',
    category: 'Cybersecurity'
  },

  // Consultation
  {
    id: 'con-1',
    question: 'Is the initial consultation completely free of charge?',
    answer: 'Yes. Our initial 30-minute consultation and technology assessment is 100% complimentary with zero obligation. You will receive a high-level roadmap and architectural recommendations.',
    category: 'Consultation'
  },
  {
    id: 'con-2',
    question: 'Who will participate in our consultation meeting?',
    answer: 'You will meet directly with a Senior Solutions Architect and a Technology Strategist who have deep industry experience in cloud, cybersecurity, and enterprise workplace systems.',
    category: 'Consultation'
  },

  // Pricing & Payments
  {
    id: 'prc-1',
    question: 'Do you offer monthly payment terms or annual contracts?',
    answer: 'We provide both flexible month-to-month management plans as well as discounted annual agreements depending on your preference and budget structure.',
    category: 'Pricing & Payments'
  },
  {
    id: 'prc-2',
    question: 'Are software licenses (Microsoft / Google / AWS) included in the billing?',
    answer: 'We can either consolidate your software licensing directly onto a single, clear monthly invoice or manage your tenant while you pay the vendor directly.',
    category: 'Pricing & Payments'
  },

  // Support
  {
    id: 'sup-1',
    question: 'What are your support hours and guaranteed response times (SLAs)?',
    answer: 'We provide 24/7 critical incident response for cybersecurity and infrastructure outages with response times as low as 15 minutes. For standard administrative requests, our help desk operates during standard business hours with a 1-hour SLA.',
    category: 'Support'
  },
  {
    id: 'sup-2',
    question: 'How do our employees submit support requests or tickets?',
    answer: 'Your team can submit tickets via dedicated email, secure web portal, or integrated Microsoft Teams / Slack bot channels with instant tracking.',
    category: 'Support'
  }
];
