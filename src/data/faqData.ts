import type { FAQItem } from '../types';

export const faqData: FAQItem[] = [
  // General (Top 3 for Homepage)
  {
    id: 'gen-1',
    question: 'What services does Vamvora Tech provide in Erode?',
    answer: 'Vamvora Tech is an IT and cloud solutions partner based in Erode, Tamil Nadu. We specialize in Google Workspace deployment & business email, Microsoft 365 implementation & support, Zoho business solutions (CRM, Books, Workplace & Zoho One), Cloud infrastructure & migration, and cybersecurity with competitive pricing and dependable ongoing support.',
    category: 'General'
  },
  {
    id: 'gen-2',
    question: 'Do you provide ongoing support after software setup?',
    answer: 'Yes. Reliable after-sales support and ongoing assistance are core advantages of working with Vamvora Tech. We provide dependable technical support, troubleshooting, user management, and regular security health checks for all Google Workspace, Microsoft 365, and Zoho clients.',
    category: 'General'
  },
  {
    id: 'gen-3',
    question: 'Which business cloud solution is right for my business—Google Workspace, Microsoft 365, or Zoho?',
    answer: 'The ideal choice depends on your daily workflows. Google Workspace is perfect for fast, real-time collaboration with Gmail and Google Docs. Microsoft 365 is standard for organizations relying heavily on desktop Excel, Outlook, and Teams. Zoho delivers an integrated business operating suite with CRM, GST invoicing, and business email. Our team in Erode evaluates your requirements and recommends the most cost-effective solution.',
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

  // Zoho
  {
    id: 'zoho-1',
    question: 'Does Vamvora Tech provide Zoho implementation and support in Erode?',
    answer: 'Yes. As a Zoho partner and reseller in Erode, Vamvora Tech provides complete end-to-end Zoho implementation, configuration, data migration, and dependable ongoing support for businesses across Erode and Tamil Nadu.',
    category: 'Zoho'
  },
  {
    id: 'zoho-2',
    question: 'What is Zoho One and is it suitable for small businesses?',
    answer: 'Zoho One provides access to over 45 integrated business applications for CRM, accounting (Zoho Books), business email (Zoho Mail), HR, and operations under a single, cost-effective license. It is ideal for small and growing businesses wanting an all-in-one platform with competitive pricing.',
    category: 'Zoho'
  },
  {
    id: 'zoho-3',
    question: 'Can you migrate our existing accounting and email data to Zoho?',
    answer: 'Yes. We execute structured migrations from legacy accounting software, Excel spreadsheets, cPanel/Google Workspace emails, and older CRM systems into Zoho with zero data loss.',
    category: 'Zoho'
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
    answer: 'High-ROI workflows typically include intelligent customer support chatbots, automated invoice/receipt data ingestion, AI-powered sales quote drafting from emails, and internal employee policy & documentation query assistants.',
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
    question: 'Are software licenses (Microsoft / Google / Zoho / AWS) included in the billing?',
    answer: 'We can either consolidate your software licensing directly onto a single, clear monthly invoice or manage your tenant while you pay the vendor directly.',
    category: 'Pricing & Payments'
  },

  // Support
  {
    id: 'sup-1',
    question: 'What are your support hours and guaranteed response times (SLAs)?',
    answer: 'We provide prompt critical incident response for cybersecurity and infrastructure outages. For standard administrative requests, our help desk operates during business hours with rapid SLA response.',
    category: 'Support'
  },
  {
    id: 'sup-2',
    question: 'How do our employees submit support requests or tickets?',
    answer: 'Your team can submit tickets via dedicated email, secure web portal, or integrated Microsoft Teams / Slack bot channels with instant tracking.',
    category: 'Support'
  }
];
