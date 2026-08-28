import type { ServiceDetail } from '../types';

export const servicesData: ServiceDetail[] = [
  {
    id: 'cloud-solutions',
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDescription: 'Build a secure, scalable technology foundation that grows with your business.',
    heroHeadline: 'Build A Cloud Environment\nReady For What\'s Next.',
    heroSubheadline: 'Secure, scalable cloud infrastructure designed around your business requirements, enabling high availability, reduced overhead, and seamless continuity.',
    badge: 'Enterprise Infrastructure',
    icon: 'Cloud',
    color: 'from-blue-600 to-indigo-700',
    problemStatement: {
      title: 'Outdated Infrastructure Limits Business Agility And Drives Unpredictable Costs.',
      description: 'Legacy servers, unmanaged sprawl, and fragile backup routines expose modern organizations to unplanned downtime, performance bottlenecks, and compliance vulnerabilities.',
      painPoints: [
        'High hardware maintenance and renewal overheads',
        'Single points of failure risking catastrophic data loss',
        'Inability to scale capacity rapidly during business spikes',
        'Complex multi-system management without centralized observability'
      ]
    },
    solutionOverview: {
      title: 'Architected For Resilience, Performance, And Predictable Cloud Economics.',
      description: 'VAM VORA designs, migrates, and manages enterprise-grade cloud environments tailored to your specific workloads, ensuring maximum uptime, strict compliance, and automated continuity.',
      highlights: [
        'Zero-data-loss migration methodologies',
        'Automated disaster recovery and geo-redundancy',
        'Cost optimization and FinOps resource governance',
        '24/7 proactive health monitoring and patching'
      ]
    },
    capabilities: [
      {
        name: 'Cloud Migration',
        summary: 'Seamless, structured transition of databases, applications, and workloads without business disruption.',
        details: [
          'Pre-migration workload dependency mapping and risk modeling',
          'Phased cutover strategy with rollback mechanisms',
          'Minimal-downtime database and asset replication',
          'Post-migration validation and performance benchmarking'
        ]
      },
      {
        name: 'Cloud Infrastructure',
        summary: 'High-availability infrastructure designed for elasticity, speed, and enterprise security standards.',
        details: [
          'Multi-region virtual private clouds (VPC) and subnets',
          'Load balancing and auto-scaling group configuration',
          'Infrastructure-as-Code (IaC) governance',
          'Strict identity access management and network segmentation'
        ]
      },
      {
        name: 'Backup & Disaster Recovery',
        summary: 'Resilient data protection guaranteeing rapid recovery time (RTO) and recovery point (RPO) objectives.',
        details: [
          'Immutable, air-gapped backup snapshots against ransomware',
          'Automated daily and incremental cloud synchronization',
          'Routine automated recovery drills and verification',
          'Compliance-ready retention schedules'
        ]
      },
      {
        name: 'Cloud Storage',
        summary: 'Scalable, encrypted object and file storage optimized for fast retrieval and cost efficiency.',
        details: [
          'Tiered storage lifecycle policies (Hot, Cool, Archive)',
          'AES-256 at-rest and TLS in-transit encryption',
          'High-throughput distributed file systems',
          'Unified access controls and audit logging'
        ]
      },
      {
        name: 'Virtual Servers',
        summary: 'Configured compute instances engineered for compute-heavy, memory-intensive, and mission-critical apps.',
        details: [
          'Right-sized virtual compute provisioning',
          'Custom kernel and OS hardening (Linux & Windows)',
          'Dedicated CPU and memory reservations',
          'Containerized workload deployment (Docker/Kubernetes)'
        ]
      },
      {
        name: 'Cloud Management',
        summary: 'Continuous 24/7 telemetry, security enforcement, cost governance, and infrastructure maintenance.',
        details: [
          'Proactive telemetry alerting and anomaly detection',
          'Monthly FinOps billing analysis and waste reduction',
          'Automated OS security patching and vulnerability remediation',
          'Dedicated cloud architecture reviews'
        ]
      }
    ],
    benefits: [
      {
        title: '99.99% Guaranteed Availability',
        description: 'Eliminate single points of failure with multi-zone redundancy and automatic failovers.',
        metric: '99.99% Uptime'
      },
      {
        title: '30-40% Infrastructure Cost Reduction',
        description: 'Eliminate on-premise hardware capital expenditures and pay only for utilized compute.',
        metric: '35% Avg. Savings'
      },
      {
        title: 'Instant Operational Scalability',
        description: 'Spin up new resources, services, or branch offices in minutes instead of weeks.',
        metric: '< 5 Mins Scaling'
      },
      {
        title: 'Continuous Compliance & Security',
        description: 'Built-in ISO 27001, SOC 2, and GDPR-aligned architectural frameworks.',
        metric: 'Enterprise Grade'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Cloud Readiness Audit',
        description: 'We analyze your legacy workloads, dependencies, compliance rules, and performance metrics.'
      },
      {
        step: '02',
        title: 'Architecture Blueprint',
        description: 'We construct a customized target cloud blueprint with security, networking, and cost models.'
      },
      {
        step: '03',
        title: 'Pilot & Staging',
        description: 'A sandbox deployment verifies workload compatibility and validates benchmark metrics.'
      },
      {
        step: '04',
        title: 'Cutover & Migration',
        description: 'Precision cutover scheduled during low-traffic windows to guarantee zero business downtime.'
      },
      {
        step: '05',
        title: 'Ongoing Management',
        description: 'Continuous 24/7 observability, automated backups, and monthly performance tuning.'
      }
    ],
    useCases: [
      {
        industry: 'Financial & FinTech',
        challenge: 'Strict regulatory audits and need for sub-second database transactions with zero data loss.',
        solution: 'Configured private cloud enclave with automated encryption and multi-region disaster replication.',
        result: 'Achieved full compliance readiness and reduced query latencies by 62%.'
      },
      {
        industry: 'E-commerce & Retail',
        challenge: 'Server crashes during seasonal flash sales causing significant lost revenue.',
        solution: 'Deployed elastic auto-scaling infrastructure with global CDN and automated load balancing.',
        result: 'Handled 5x traffic surges smoothly with zero downtime during peak sales.'
      }
    ],
    technologies: [
      { name: 'Amazon Web Services (AWS)', category: 'Cloud Infrastructure' },
      { name: 'Microsoft Azure', category: 'Cloud Infrastructure' },
      { name: 'Google Cloud Platform (GCP)', category: 'Cloud Infrastructure' },
      { name: 'Terraform & Ansible', category: 'Infrastructure as Code' },
      { name: 'Kubernetes & Docker', category: 'Container Orchestration' },
      { name: 'Veeam & Acronis', category: 'Disaster Recovery' }
    ],
    faqs: [
      {
        question: 'Will our business operations experience downtime during cloud migration?',
        answer: 'We design our migration procedures with phased cutovers and real-time data replication. Migrations are executed during non-business hours or scheduled maintenance windows to ensure zero disruption to your daily operations.'
      },
      {
        question: 'Which cloud provider (AWS, Azure, Google Cloud) is best for our company?',
        answer: 'We evaluate your existing software stack, licensing agreements, team skills, and compliance needs to recommend the best fit. Organizations heavy on Microsoft 365 often gain synergies with Azure, while AI-focused workloads frequently benefit from AWS or GCP.'
      },
      {
        question: 'How do you ensure our data remains secure and compliant?',
        answer: 'We implement end-to-end encryption (AES-256), strict Role-Based Access Controls (RBAC), multi-factor authentication, network isolation via VPCs, and automated audit trails aligned with SOC 2, HIPAA, and GDPR standards.'
      }
    ]
  },
  {
    id: 'google-workspace',
    slug: 'google-workspace',
    title: 'Google Workspace',
    shortDescription: 'Empower seamless collaboration, enterprise productivity, and intelligent cloud office tools.',
    heroHeadline: 'Modernize Your Workplace With\nIntelligent Google Workspace Deployment.',
    heroSubheadline: 'Transition your workforce to a friction-free, secure collaboration ecosystem with expert deployment, seamless email migration, and comprehensive admin governance.',
    badge: 'Workplace Productivity',
    icon: 'Layers',
    color: 'from-amber-500 to-red-600',
    problemStatement: {
      title: 'Fragmented Communication Tools Lead To Lost Files, Security Gaps, And Frustrated Teams.',
      description: 'Disjointed email systems, cumbersome file-sharing methods, and lack of mobile device controls slow down your staff and create serious data exposure risks.',
      painPoints: [
        'Messy email archives trapped in legacy IMAP/POP3 hosts',
        'Duplicate file versions scattered across personal drives',
        'Lack of granular administrative visibility over company documents',
        'Employee resistance and confusion during software transitions'
      ]
    },
    solutionOverview: {
      title: 'A Unified, Real-Time Collaboration Hub Backed By Enterprise-Grade Governance.',
      description: 'VAM VORA manages your entire Google Workspace lifecycle—from seamless domain setup and historical mailbox migration to advanced data loss prevention (DLP) and employee onboarding.',
      highlights: [
        '100% mailbox and calendar migration with zero message loss',
        'Centralized Google Admin console security configuration',
        'Shared Drives structure tailored to your departmental hierarchy',
        'Tailored team training sessions for immediate adoption'
      ]
    },
    capabilities: [
      {
        name: 'Workspace Setup',
        summary: 'Comprehensive domain DNS configuration, MX records, DKIM/DMARC/SPF authentication, and organizational units.',
        details: [
          'Custom domain verification and enterprise DNS optimization',
          'SPF, DKIM, and DMARC anti-spoofing security setup',
          'Organizational Unit (OU) role hierarchy architecture',
          'Single Sign-On (SSO) and 2-Step Verification enforcement'
        ]
      },
      {
        name: 'Email Migration',
        summary: 'Flawless transfer of email history, folders, contacts, calendars, and rules from any legacy host.',
        details: [
          'Direct migration from cPanel, Exchange, IMAP, or Microsoft 365',
          'Pre-migration mailbox audit and deduplication',
          'Incremental delta sync ensuring no lost incoming messages',
          'End-user client configuration (Gmail web, iOS, Android)'
        ]
      },
      {
        name: 'User Management',
        summary: 'Automated user provisioning, license allocation, security group assignments, and offboarding workflows.',
        details: [
          'Directory sync with HR and Active Directory systems',
          'Automated onboarding templates with default permissions',
          'Secure offboarding protocol to archive departing staff data',
          'Dynamic group management for cross-functional teams'
        ]
      },
      {
        name: 'Security Configuration',
        summary: 'Advanced Data Loss Prevention (DLP), contextual access rules, endpoint management, and phishing protection.',
        details: [
          'Data Loss Prevention (DLP) rules preventing credit card/PII leaks',
          'Context-Aware Access rules based on device compliance and IP',
          'Mobile Device Management (MDM) for remote wipe capability',
          'Google Vault configuration for legal hold and eDiscovery'
        ]
      },
      {
        name: 'Admin Support',
        summary: 'Ongoing tenant administration, user requests, policy tweaks, and escalation assistance.',
        details: [
          'Direct SLA-backed admin support channel for your IT lead',
          'Quarterly security posture and policy reviews',
          'Domain health monitoring and alert management',
          'License optimization to prevent over-subscription'
        ]
      },
      {
        name: 'Training & Consultation',
        summary: 'Hands-on workshops, custom cheat sheets, and best practice workflows to maximize your team\'s productivity.',
        details: [
          'Interactive training webinars for departments and leadership',
          'Best practices for Google Docs, Sheets, Meet, and Shared Drives',
          'Custom automation workflows using Google Apps Script',
          'Executive 1-on-1 productivity coaching'
        ]
      }
    ],
    benefits: [
      {
        title: 'Accelerated Team Collaboration',
        description: 'Real-time co-authoring, smart canvas, and instant Google Meet video conferences directly in Docs.',
        metric: '3x Faster Workflows'
      },
      {
        title: 'Fortified Email Security',
        description: 'Google’s AI blocks 99.9% of spam, phishing attempts, and malicious email attachments.',
        metric: '99.9% Spam Block'
      },
      {
        title: 'Centralized Administrative Control',
        description: 'Manage users, devices, security policies, and compliance archiving from a single console.',
        metric: '100% Visibility'
      },
      {
        title: 'Predictable Per-User Licensing',
        description: 'Flexible monthly or annual billing with transparent tier recommendations.',
        metric: 'Zero Waste'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Tenant & Security Assessment',
        description: 'We evaluate your existing email volume, domain records, and compliance prerequisites.'
      },
      {
        step: '02',
        title: 'Domain & Security Setup',
        description: 'We configure DNS, SPF/DKIM/DMARC authentication, and organizational hierarchy.'
      },
      {
        step: '03',
        title: 'Mailbox & File Migration',
        description: 'We run background migrations of all historical emails, calendars, and contacts.'
      },
      {
        step: '04',
        title: 'DNS Cutover & Launch',
        description: 'Smooth live switchover with live tech support to assist team members.'
      },
      {
        step: '05',
        title: 'Training & Governance',
        description: 'Staff training, Shared Drive organization, and continuous administrative support.'
      }
    ],
    useCases: [
      {
        industry: 'Marketing & Digital Agency',
        challenge: 'Staff struggling with bulky email attachments and slow collaborative pitch deck reviews.',
        solution: 'Deployed Google Workspace Enterprise with Shared Drives, Google Meet rooms, and Gemini AI.',
        result: 'Client turnaround time decreased by 40% with zero lost project assets.'
      },
      {
        industry: 'Professional Services Firm',
        challenge: 'Phishing attacks impersonating leadership and exposing client correspondence.',
        solution: 'Configured strict DMARC enforcement, 2SV security keys, and Google DLP rules.',
        result: 'Zero phishing incidents recorded post-deployment with 100% compliant data retention.'
      }
    ],
    technologies: [
      { name: 'Google Gmail & Calendar', category: 'Communication' },
      { name: 'Google Meet & Chat', category: 'Collaboration' },
      { name: 'Google Docs, Sheets, Slides', category: 'Productivity' },
      { name: 'Google Drive & Shared Drives', category: 'Cloud Storage' },
      { name: 'Google Vault & DLP', category: 'Compliance & Security' },
      { name: 'Gemini for Workspace', category: 'AI Assistance' }
    ],
    faqs: [
      {
        question: 'Will our emails be lost during the transition to Google Workspace?',
        answer: 'No. We perform verified migrations where all past emails, folders, contacts, and calendar events are synced in advance. The final DNS switchover happens smoothly with zero data loss.'
      },
      {
        question: 'Can we use our own custom domain name (e.g., name@yourcompany.com)?',
        answer: 'Yes, Google Workspace operates completely on your company domain name with professional email addresses and customized branding.'
      },
      {
        question: 'Can we manage employee mobile devices accessing company email?',
        answer: 'Yes. We enable Google Endpoint Management, allowing you to enforce screen locks, require encryption, and remotely wipe company data if an employee device is lost or stolen.'
      }
    ]
  },
  {
    id: 'microsoft-365',
    slug: 'microsoft-365',
    title: 'Microsoft 365',
    shortDescription: 'Enterprise productivity, cloud communication, and device security powered by Microsoft.',
    heroHeadline: 'Unlock The Full Power Of\nEnterprise Microsoft 365 Ecosystems.',
    heroSubheadline: 'Modernize your organization with secure Microsoft 365 deployment, Exchange Online migrations, Microsoft Teams telephony, and automated SharePoint architecture.',
    badge: 'Enterprise Ecosystem',
    icon: 'Grid',
    color: 'from-blue-600 to-cyan-700',
    problemStatement: {
      title: 'Misconfigured Microsoft Tenants Lead To Wasted Licenses, Security Gaps, And Cluttered Files.',
      description: 'Many organizations pay for Microsoft 365 licenses without utilizing security tools, while unorganized SharePoint libraries and unmanaged Teams channels create confusion.',
      painPoints: [
        'Overpaying for redundant or unassigned M365 licenses',
        'Disorganized SharePoint folder structures causing file permission leaks',
        'Complex hybrid Active Directory setups requiring modernization',
        'Lack of Intune endpoint management for remote worker devices'
      ]
    },
    solutionOverview: {
      title: 'Engineered For Enterprise Security, Compliance, And Frictionless Teamwork.',
      description: 'VAM VORA configures your Microsoft 365 tenant to Microsoft best practices—optimizing licensing costs, securing endpoints with Microsoft Defender and Intune, and designing structured SharePoint architecture.',
      highlights: [
        'Clean Exchange Online tenant-to-tenant and hybrid migrations',
        'Enterprise SharePoint Intranet and OneDrive governance',
        'Microsoft Teams calling, channels, and bot integrations',
        'Microsoft Entra ID (Azure AD) Conditional Access policies'
      ]
    },
    capabilities: [
      {
        name: 'Microsoft 365 Deployment',
        summary: 'End-to-end tenant setup, Entra ID identity synchronization, and tenant hardening against cyber threats.',
        details: [
          'Microsoft Entra ID Connect hybrid identity sync',
          'Conditional Access policies and Multi-Factor Authentication (MFA)',
          'Privileged Identity Management (PIM) for administrative roles',
          'Tenant baseline hardening aligned with CIS benchmarks'
        ]
      },
      {
        name: 'Exchange Online',
        summary: 'Enterprise cloud email migration, shared mailboxes, calendar sharing, and spam/malware filtering.',
        details: [
          'Staged and cutover Exchange hybrid migrations',
          'Shared mailbox and distribution list optimization',
          'Exchange Online Protection (EOP) and Defender for Office 365',
          'Automated email archival and retention tags'
        ]
      },
      {
        name: 'Microsoft Teams',
        summary: 'Structured team governance, Teams Phone telephony, meeting room systems, and integrated bots.',
        details: [
          'Standardized team and channel taxonomy templates',
          'Teams Phone System and Direct Routing configuration',
          'Guest access policies and external collaboration controls',
          'App store governance and custom bot integrations'
        ]
      },
      {
        name: 'SharePoint & OneDrive',
        summary: 'Custom Intranet portals, secure document libraries, automated metadata, and granular sharing permissions.',
        details: [
          'Modern SharePoint Hub site and department Intranet architecture',
          'Metadata classification and search index optimization',
          'External sharing and link expiration policies',
          'File server to SharePoint document migration'
        ]
      },
      {
        name: 'Technical Support',
        summary: 'Dedicated Tier-2 and Tier-3 engineers for rapid issue resolution, tenant troubleshooting, and user support.',
        details: [
          'Rapid response SLA for critical tenant issues',
          'Desktop Office suite configuration and troubleshooting',
          'Outlook sync, calendar, and delegate permissions support',
          'Periodic tenant health reports and advisory reviews'
        ]
      },
      {
        name: 'License Management',
        summary: 'Continuous license audit to eliminate waste, align subscription tiers (Business Standard, E3, E5), and maximize ROI.',
        details: [
          'Inactive user and orphaned license identification',
          'Feature utilization audit to avoid unnecessary tier upgrades',
          'CSP direct billing and consolidated invoice management',
          'Annual renewal budgeting and strategic advisory'
        ]
      }
    ],
    benefits: [
      {
        title: 'All-in-One Enterprise Platform',
        description: 'Industry-standard desktop apps (Word, Excel, PowerPoint) integrated with cloud services.',
        metric: 'Standard Stack'
      },
      {
        title: 'Comprehensive Device Security',
        description: 'Protect company data across Windows, Mac, iOS, and Android with Microsoft Intune.',
        metric: 'Endpoint Control'
      },
      {
        title: '25-35% License Cost Optimization',
        description: 'Right-size your user licenses across Business Premium, E3, and E5 tiers.',
        metric: '30% Cost Saving'
      },
      {
        title: 'Seamless Copilot AI Readiness',
        description: 'Structured permissions and clean data hierarchy preparing your company for Microsoft Copilot AI.',
        metric: 'AI-Ready Tenant'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Tenant & License Discovery',
        description: 'We audit your current subscriptions, identity sources, security scores, and file shares.'
      },
      {
        step: '02',
        title: 'Architecture & Security Design',
        description: 'We blueprint Entra ID policies, SharePoint hierarchies, and Defender protections.'
      },
      {
        step: '03',
        title: 'Migration Execution',
        description: 'Background synchronization of mailboxes, SharePoint files, and Teams configurations.'
      },
      {
        step: '04',
        title: 'Security Enforcement & Pilot',
        description: 'Enable MFA, Intune enrollment, and run pilot validation with select departments.'
      },
      {
        step: '05',
        title: 'Enterprise Rollout & Support',
        description: 'Full organization go-live with responsive desk support and ongoing license governance.'
      }
    ],
    useCases: [
      {
        industry: 'Manufacturing & Distribution',
        challenge: 'Scattered file servers across 4 regional warehouses causing version conflicts and delayed shipments.',
        solution: 'Migrated 12TB of file servers to structured SharePoint Hubs with offline OneDrive sync on tablets.',
        result: 'Eliminated regional VPN dependency and reduced order processing lag by 50%.'
      },
      {
        industry: 'Healthcare & Clinical Services',
        challenge: 'Need strict HIPAA compliance, mobile device encryption, and secure patient communications.',
        solution: 'Configured Microsoft 365 E5 with Microsoft Purview DLP, Intune MDM, and encrypted email.',
        result: 'Passed external HIPAA audit with zero non-conformances.'
      }
    ],
    technologies: [
      { name: 'Microsoft 365 & Office Apps', category: 'Productivity' },
      { name: 'Exchange Online', category: 'Cloud Email' },
      { name: 'Microsoft Teams & Teams Phone', category: 'Unified Communications' },
      { name: 'SharePoint Online & OneDrive', category: 'Content Management' },
      { name: 'Microsoft Entra ID (Azure AD)', category: 'Identity & Access' },
      { name: 'Microsoft Intune & Defender', category: 'Endpoint Security' }
    ],
    faqs: [
      {
        question: 'Can you help us migrate from Google Workspace or on-premise Exchange to Microsoft 365?',
        answer: 'Yes. We specialize in cross-platform tenant migrations, including Google-to-M365 and on-premise Exchange migrations, ensuring all mail, calendars, contacts, and drive contents transfer seamlessly.'
      },
      {
        question: 'How does Microsoft Intune protect our company data on personal employee phones?',
        answer: 'With Mobile Application Management (MAM), Intune secures company data inside the Outlook and Teams apps without accessing or wiping the employee\'s personal photos, messages, or apps.'
      },
      {
        question: 'How do you prevent our company from overpaying for unused Microsoft licenses?',
        answer: 'We conduct regular license audits to reassign unallocated seats, downgrade users who don\'t need enterprise tiers, and ensure you only pay for active team members.'
      }
    ]
  },
  {
    id: 'ai-solutions',
    slug: 'ai-solutions',
    title: 'AI Solutions',
    shortDescription: 'Transform repetitive business processes into intelligent, automated workflows.',
    heroHeadline: 'Deploy Practical AI That\nDrives Tangible Business Outcomes.',
    heroSubheadline: 'Move beyond AI hype. VAM VORA builds custom enterprise AI chatbots, intelligent document processing pipelines, workflow automations, and proprietary knowledge assistants.',
    badge: 'Intelligent Automation',
    icon: 'Cpu',
    color: 'from-violet-600 to-indigo-700',
    problemStatement: {
      title: 'Manual Data Entry And Repetitive Workflows Drain High-Value Employee Hours.',
      description: 'Your skilled staff spends hours answering repetitive customer queries, re-typing invoice data, and searching across internal wikis instead of growing the business.',
      painPoints: [
        'Slow customer support response times outside business hours',
        'Manual document data extraction prone to human error',
        'Valuable company knowledge buried across PDFs, Slack, and emails',
        'Complex business processes requiring manual human coordination'
      ]
    },
    solutionOverview: {
      title: 'Custom AI Agents And Automation Pipelines Engineered For Enterprise Privacy.',
      description: 'We build secure, private AI solutions that connect directly with your company databases, CRM, and documents—delivering instant answers, automated workflows, and data intelligence.',
      highlights: [
        'Custom Retrieval-Augmented Generation (RAG) knowledge bots',
        'Zero data leakage—your data is never used to train public models',
        'End-to-end workflow automation connecting your CRM, ERP, and email',
        'High-accuracy intelligent document processing (IDP) pipelines'
      ]
    },
    capabilities: [
      {
        name: 'AI Chatbots',
        summary: '24/7 intelligent customer-facing and internal conversational agents trained exclusively on your business data.',
        details: [
          'Omnichannel deployment (Website, WhatsApp, Slack, MS Teams)',
          'Natural conversational flow with custom brand tone and guardrails',
          'Seamless human agent handoff when complex escalation is needed',
          'Multilingual customer support with automatic language detection'
        ]
      },
      {
        name: 'Business Automation',
        summary: 'End-to-end integration pipelines that automate repetitive operational tasks across multiple SaaS apps.',
        details: [
          'API integrations between CRM, ERP, accounting, and communication tools',
          'Automated invoice ingestion, verification, and ledger posting',
          'Customer onboarding and contract generation workflows',
          'Real-time automated alerting on critical business exceptions'
        ]
      },
      {
        name: 'AI Assistants',
        summary: 'Internal knowledge assistants that allow employees to query company manuals, policies, and codebases in natural language.',
        details: [
          'Private RAG architecture indexing internal PDFs, Notion, Drive, SharePoint',
          'Source citation and page-level references for complete verification',
          'Role-based access filtering so users only see authorized data',
          'Executive briefing summaries and automated report generation'
        ]
      },
      {
        name: 'Workflow Automation',
        summary: 'Intelligent trigger-and-action logic combining LLM decision-making with business rules.',
        details: [
          'Email triage and intelligent ticket categorization',
          'Automated lead qualification and CRM enrichment',
          'Custom approval matrices with multi-stage sign-offs',
          'Automated compliance document checklist verification'
        ]
      },
      {
        name: 'Data Intelligence',
        summary: 'Transform unstructured business data into actionable predictive insights, trends, and automated dashboards.',
        details: [
          'Customer feedback sentiment analysis and churn prediction',
          'Unstructured text classification and anomaly detection',
          'Automated BI chart synthesis and executive commentary',
          'Historical trend modeling for inventory and revenue forecasting'
        ]
      },
      {
        name: 'AI Consulting',
        summary: 'Strategic AI readiness audits, ROI feasibility studies, architecture design, and governance frameworks.',
        details: [
          'AI Opportunity identification and prioritization matrix',
          'Total cost of ownership (TCO) and token economics modeling',
          'Data privacy, security, and ethical governance policies',
          'Proof-of-Concept (PoC) rapid development and validation'
        ]
      }
    ],
    benefits: [
      {
        title: '70% Faster Response Times',
        description: 'Instant 24/7 responses to customer inquiries and employee requests without staffing bottlenecks.',
        metric: '24/7 Instant'
      },
      {
        title: '85% Reduction in Manual Tasks',
        description: 'Eliminate tedious copy-pasting, data extraction, and cross-application status updates.',
        metric: '85% Time Saved'
      },
      {
        title: 'Enterprise Data Privacy',
        description: 'Your proprietary company data is isolated and never shared with public model training sets.',
        metric: '100% Private'
      },
      {
        title: 'Rapid Return on Investment',
        description: 'Measurable cost savings and employee productivity gains achieved within 60-90 days.',
        metric: '< 90 Days ROI'
      }
    ],
    process: [
      {
        step: '01',
        title: 'AI Opportunity Audit',
        description: 'We evaluate your business workflows to pinpoint high-ROI, low-risk automation targets.'
      },
      {
        step: '02',
        title: 'Data Curation & Architecture',
        description: 'We clean and index your documentation into secure, private vector databases.'
      },
      {
        step: '03',
        title: 'PoC & Guardrail Calibration',
        description: 'We develop a functioning prototype with strict factual guardrails and tone tuning.'
      },
      {
        step: '04',
        title: 'System Integration',
        description: 'We connect the AI solution with your live CRM, ticketing, and communications software.'
      },
      {
        step: '05',
        title: 'Continuous Evaluation',
        description: 'Ongoing accuracy monitoring, token optimization, and periodic model improvements.'
      }
    ],
    useCases: [
      {
        industry: 'Legal & Compliance Consultancy',
        challenge: 'Paralegals spending 15+ hours reviewing 100-page vendor contracts for non-standard indemnity clauses.',
        solution: 'Built custom AI contract analysis engine that highlights deviations and drafts recommended revisions.',
        result: 'Contract review turnaround dropped from 3 days to 25 minutes with 99.4% clause detection accuracy.'
      },
      {
        industry: 'B2B Logistics & Freight',
        challenge: 'Support team overwhelmed by 800+ daily email requests for shipment quotes and cargo status.',
        solution: 'Deployed custom AI email assistant that extracts cargo dimensions, queries ERP, and drafts instant quotes.',
        result: 'Quote dispatch time reduced from 4 hours to 90 seconds, driving a 28% increase in deal conversion.'
      }
    ],
    technologies: [
      { name: 'OpenAI Enterprise & Claude 3.5', category: 'LLM Foundations' },
      { name: 'LangChain & LlamaIndex', category: 'AI Orchestration' },
      { name: 'Pinecone & Qdrant', category: 'Vector Databases' },
      { name: 'Make & n8n Enterprise', category: 'Workflow Automation' },
      { name: 'Python & FastAPI', category: 'Custom AI Microservices' },
      { name: 'AWS Bedrock & Azure OpenAI', category: 'Secure Cloud Enclaves' }
    ],
    faqs: [
      {
        question: 'Will our proprietary company data be used to train public AI models?',
        answer: 'Never. We strictly utilize enterprise API endpoints with zero-data-retention agreements and private cloud instances. Your data remains 100% confidential and is never used for foundation model training.'
      },
      {
        question: 'How do you prevent the AI from making up false answers (hallucinations)?',
        answer: 'We use strict Retrieval-Augmented Generation (RAG) architectures with citation requirements and deterministic guardrails. If the AI cannot find the verified answer in your private knowledge base, it transparently states so or routes to a human.'
      },
      {
        question: 'How long does it take to implement a custom AI solution for our company?',
        answer: 'A focused Proof of Concept (PoC) is typically delivered within 2–3 weeks. Full production deployment with enterprise integrations and staff onboarding takes 4–8 weeks.'
      }
    ]
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription: 'Protect your business systems, endpoints, networks, and data against modern threats.',
    heroHeadline: 'Safeguard Your Business With\nProactive, Multi-Layered Cyber Defense.',
    heroSubheadline: 'Defend your critical assets against ransomware, phishing, credential theft, and data breaches with comprehensive enterprise cybersecurity architecture and continuous monitoring.',
    badge: 'Zero-Trust Defense',
    icon: 'ShieldCheck',
    color: 'from-slate-800 to-blue-900',
    problemStatement: {
      title: 'Cyber Attacks Are Increasingly Targeting Small And Mid-Market Businesses.',
      description: 'Sophisticated phishing campaigns, unpatched vulnerabilities, and weak identity access controls expose businesses to catastrophic operational halts and regulatory fines.',
      painPoints: [
        'Ransomware threats capable of encrypting critical databases',
        'Phishing emails deceiving employees into credential disclosure',
        'Unmanaged personal devices accessing sensitive customer data',
        'Lack of 24/7 threat detection and incident response capabilities'
      ]
    },
    solutionOverview: {
      title: 'Zero-Trust Defense Architecture Built For Resilience And Continuous Compliance.',
      description: 'VAM VORA implements defense-in-depth across your endpoints, emails, firewalls, and cloud assets. We harden your attack surface and provide continuous threat monitoring.',
      highlights: [
        'Endpoint Detection & Response (EDR) with automated threat containment',
        'Next-Gen Firewall and micro-segmented network security',
        'Multi-factor authentication (MFA) and Zero-Trust identity policies',
        'Comprehensive vulnerability assessment and penetration testing'
      ]
    },
    capabilities: [
      {
        name: 'Endpoint Security',
        summary: 'Next-generation antivirus, EDR/XDR agents, and automated device isolation stopping malware in real time.',
        details: [
          'Behavioral analysis detecting zero-day ransomware execution',
          'Automated isolation of infected laptops and servers',
          'Disk encryption enforcement (BitLocker and FileVault)',
          'Centralized patch management and application whitelisting'
        ]
      },
      {
        name: 'Email Security',
        summary: 'AI-powered anti-phishing, spoofing prevention (DMARC/DKIM), and weaponized link/attachment sandboxing.',
        details: [
          'Advanced inbound email sandbox scanning attachments for malware',
          'Domain spoofing protection with 100% strict DMARC enforcement',
          'Business Email Compromise (BEC) and executive impersonation detection',
          'Automated employee phishing simulation and training modules'
        ]
      },
      {
        name: 'Firewall Management',
        summary: 'Next-Generation Firewall (NGFW) deployment, intrusion prevention (IPS), and secure branch SD-WAN.',
        details: [
          'Deep packet inspection and SSL/TLS traffic decryption',
          'Intrusion Prevention System (IPS) rule tuning and threat feeds',
          'Secure branch-to-cloud VPN tunnels and SD-WAN architecture',
          '24/7 firewall firmware upgrades and rulebase auditing'
        ]
      },
      {
        name: 'Network Security',
        summary: 'Zero-Trust network access (ZTNA), internal VLAN segmentation, and encrypted remote worker access.',
        details: [
          'Zero-Trust Network Access (ZTNA) replacing vulnerable legacy VPNs',
          'VLAN micro-segmentation isolating sensitive servers and IoT devices',
          '802.1X network access control for corporate Wi-Fi and wired ports',
          'Rogue device detection and automated quarantine'
        ]
      },
      {
        name: 'Vulnerability Assessment',
        summary: 'Regular internal and external vulnerability scans, configuration audits, and risk remediation roadmaps.',
        details: [
          'Automated external IP and web perimeter vulnerability scanning',
          'Internal asset discovery and outdated software inventory',
          'Prioritized remediation reports with step-by-step guidance',
          'Compliance readiness audits for ISO 27001, SOC 2, and GDPR'
        ]
      },
      {
        name: 'Security Monitoring',
        summary: 'Centralized Security Information & Event Management (SIEM) with continuous threat detection.',
        details: [
          'Unified log aggregation across cloud, firewalls, and endpoints',
          'AI-driven correlation identifying multi-stage cyber attacks',
          'Actionable alert triage eliminating false-positive fatigue',
          'Documented Incident Response playbook and emergency hotlines'
        ]
      }
    ],
    benefits: [
      {
        title: 'Zero Ransomware Disruption',
        description: 'Multi-tiered defenses isolate suspicious processes before files can be encrypted.',
        metric: 'Zero-Day Shield'
      },
      {
        title: 'Complete Compliance Readiness',
        description: 'Meet cyber insurance requirements and pass external audits with confidence.',
        metric: 'Audit-Ready'
      },
      {
        title: '24/7 Peace of Mind',
        description: 'Continuous monitoring ensures potential threats are intercepted before damage occurs.',
        metric: '24/7 Vigilance'
      },
      {
        title: 'Educated & Alert Workforce',
        description: 'Turn your employees from your greatest risk into your strongest first line of defense.',
        metric: '80% Less Risk'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Security Posture Assessment',
        description: 'We perform non-intrusive vulnerability scans and evaluate your security policies.'
      },
      {
        step: '02',
        title: 'Zero-Trust Roadmap',
        description: 'We draft a prioritized action plan addressing high-risk vulnerabilities immediately.'
      },
      {
        step: '03',
        title: 'Defense Deployment',
        description: 'Rollout of EDR agents, next-gen firewalls, and MFA access protections.'
      },
      {
        step: '04',
        title: 'Employee Training & Drills',
        description: 'We conduct controlled phishing simulations and staff awareness workshops.'
      },
      {
        step: '05',
        title: 'Continuous Monitoring',
        description: 'Ongoing log analysis, automated patch verification, and quarterly security reviews.'
      }
    ],
    useCases: [
      {
        industry: 'Accounting & Wealth Advisory',
        challenge: 'Targeted by sophisticated spear-phishing attempts aiming to intercept high-value wire transfers.',
        solution: 'Implemented Defender for Office 365, DMARC enforcement, and hardware security keys for advisors.',
        result: '100% of malicious wire interception attempts blocked with zero financial loss.'
      },
      {
        industry: 'Regional Healthcare Clinic',
        challenge: 'Unsecured clinic workstations and medical devices vulnerable to network-wide malware propagation.',
        solution: 'Deployed VLAN micro-segmentation, CrowdStrike EDR agents, and automated patch management.',
        result: 'Secured 350+ endpoints and achieved full HIPAA compliance certification.'
      }
    ],
    technologies: [
      { name: 'CrowdStrike Falcon & SentinelOne', category: 'Endpoint Detection (EDR)' },
      { name: 'Microsoft Defender for Business', category: 'Unified Security' },
      { name: 'Fortinet & SonicWall NGFW', category: 'Next-Gen Firewalls' },
      { name: 'Cloudflare Zero Trust', category: 'ZTNA & Perimeter Security' },
      { name: 'KnowBe4 Security Awareness', category: 'Phishing Training' },
      { name: 'Tenable & Qualys', category: 'Vulnerability Management' }
    ],
    faqs: [
      {
        question: 'We already have standard antivirus. Do we really need EDR or cybersecurity consulting?',
        answer: 'Traditional antivirus relies on known malware signatures and easily misses modern fileless attacks, zero-day exploits, and stolen credential abuse. EDR monitors behavior continuously and can immediately isolate a compromised machine before ransomware spreads.'
      },
      {
        question: 'Can you help us qualify for Cyber Insurance policies?',
        answer: 'Yes. Most cyber insurance providers require MFA, immutable backups, EDR, and vulnerability scanning. We implement all required controls and provide the technical documentation needed for policy approval.'
      },
      {
        question: 'How do you handle remote and hybrid employees working outside the office?',
        answer: 'We deploy Zero-Trust Network Access (ZTNA) and cloud-managed endpoint agents, ensuring remote laptops maintain the exact same security policies and encrypted connections as on-premise machines.'
      }
    ]
  }
];
