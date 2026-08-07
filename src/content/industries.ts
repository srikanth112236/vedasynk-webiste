import type { FAQ } from "./types";

export type Industry = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  challenges: string[];
  solutions: string[];
  relevantServiceSlugs: string[];
  faqs: FAQ[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    metaTitle: "Healthcare Software & Digital Services",
    metaDescription:
      "Vedasynk builds booking platforms, patient-facing experiences, and operations tools for clinics and healthcare groups that need reliable digital systems.",
    heroHeadline: "Digital systems that respect clinical and front-desk reality",
    heroSubhead:
      "From multi-clinic booking to patient communication and internal ops, we build software staff will use and patients can trust.",
    challenges: [
      "Scheduling fragmented across phones, chats, and separate calendars",
      "No-shows and poor reminder follow-through",
      "Limited visibility of utilisation across locations",
      "Patient-facing sites that fail to convert inquiries into bookings",
      "Manual reporting that arrives too late for decisions",
    ],
    solutions: [
      "Clinic booking and reminder platforms",
      "Provider calendars and role-based staff tools",
      "Patient-facing websites with clear service journeys",
      "Operations dashboards for leadership",
      "Integrations with existing practice systems where needed",
    ],
    relevantServiceSlugs: [
      "software-development",
      "web-development",
      "mobile-app-development",
      "ui-ux-design",
      "maintenance-support",
    ],
    faqs: [
      {
        question: "Do you build for hospitals or clinics?",
        answer:
          "We primarily support clinics, outpatient groups, and healthcare operators with clear workflow ownership. Larger hospital programs are evaluated case by case.",
      },
      {
        question: "Can you handle appointment reminders?",
        answer:
          "Yes. SMS and messaging reminders are commonly part of booking platforms, designed around consent and clinic operating hours.",
      },
      {
        question: "How do you approach patient data carefully?",
        answer:
          "We design access controls, audit-friendly logs, and hosting choices appropriate to your risk and regulatory context, and we keep data minimisation in scope discussions.",
      },
      {
        question: "Can you improve our healthcare website only?",
        answer:
          "Absolutely. Many engagements start with a clearer service site and inquiry flow, then expand into operations tools.",
      },
    ],
  },
  {
    slug: "education",
    title: "Education",
    metaTitle: "Education Technology & Digital Platforms",
    metaDescription:
      "Custom learning platforms, admissions experiences, and school or edtech product builds from Vedasynk Technologies in Bangalore.",
    heroHeadline: "Learning and admissions experiences that reduce friction",
    heroSubhead:
      "We help schools, institutes, and edtech teams ship clearer digital journeys for students, parents, and administrators.",
    challenges: [
      "Admissions and inquiry flows that lose interested families",
      "Content and course experiences that are hard to navigate",
      "Admin work trapped in spreadsheets and disconnected tools",
      "Weak mobile experience for students and parents",
      "Brand presence that does not match institutional quality",
    ],
    solutions: [
      "Admissions and inquiry websites",
      "Learner and parent portals",
      "Course and content product UX",
      "Admin tools for cohorts and operations",
      "Brand and digital marketing for enrolments",
    ],
    relevantServiceSlugs: [
      "web-development",
      "saas-development",
      "ui-ux-design",
      "branding",
      "digital-marketing",
    ],
    faqs: [
      {
        question: "Do you build full LMS platforms?",
        answer:
          "We build focused learning and admin products when a full off-the-shelf LMS is a poor fit. For standard LMS needs we may recommend integrating rather than reinventing.",
      },
      {
        question: "Can you support edtech startups?",
        answer:
          "Yes. MVP and SaaS product development for education founders is a common engagement type.",
      },
      {
        question: "Do you handle student mobile apps?",
        answer:
          "We do. Mobile is often the right surface for attendance, schedules, or learning reminders depending on the audience.",
      },
      {
        question: "Can marketing and the product site be one project?",
        answer:
          "Yes. Enrolment campaigns work better when brand, site, and inquiry CRM hooks are designed together.",
      },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    metaTitle: "Real Estate Websites & Digital Solutions",
    metaDescription:
      "Property marketing sites, lead systems, and custom tools for real estate developers and agencies from Vedasynk Technologies.",
    heroHeadline: "Property experiences that turn interest into qualified leads",
    heroSubhead:
      "We build project sites, listing experiences, and lead workflows that help sales teams follow up faster with better context.",
    challenges: [
      "Project websites that look dated and load slowly on mobile",
      "Lead forms that dump into unmanaged inboxes",
      "Inconsistent branding across towers, campaigns, and brokers",
      "Difficulty showcasing inventory and amenities clearly",
      "Paid traffic wasted on pages that do not convert",
    ],
    solutions: [
      "High-performance project and developer websites",
      "Listing and inquiry experiences",
      "Lead capture integrations for sales teams",
      "Brand systems for multi-project portfolios",
      "SEO and performance marketing foundations",
    ],
    relevantServiceSlugs: [
      "web-development",
      "ui-ux-design",
      "branding",
      "seo",
      "digital-marketing",
    ],
    faqs: [
      {
        question: "Can you build microsites for each project?",
        answer:
          "Yes. We often create a reusable project template system so new launches stay on-brand without starting from zero.",
      },
      {
        question: "Do you integrate with CRM tools?",
        answer:
          "We connect inquiry forms to the CRM or lead tools your sales team already uses whenever APIs allow.",
      },
      {
        question: "Can you help with virtual tours or media?",
        answer:
          "We structure pages and media workflows for tours, galleries, and brochures. Heavy 3D production can be coordinated with specialist partners.",
      },
      {
        question: "Do you support broker or channel partner portals?",
        answer:
          "Yes, when the workflow and permissions are clear—those portals are a strong fit for custom software.",
      },
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    metaTitle: "Hospitality Websites & Digital Experiences",
    metaDescription:
      "Hotel and hospitality digital experiences from Vedasynk—booking-led websites, brand systems, and guest journey improvements.",
    heroHeadline: "Hospitality brands that feel as considered as the stay",
    heroSubhead:
      "We design websites, brand systems, and guest-facing flows that convert browsers into bookings and reflect on-property quality.",
    challenges: [
      "Websites that fail to convey atmosphere or convert direct bookings",
      "Brand inconsistency across property, social, and OTA presence",
      "Slow mobile experiences during high-intent browsing",
      "Seasonal campaigns that reinvent creative every time",
      "Guest inquiries handled without a clear follow-up system",
    ],
    solutions: [
      "Direct-booking-oriented websites",
      "Brand identity and visual systems",
      "Campaign landing pages and creative kits",
      "SEO for destination and property discovery",
      "Lightweight tools for inquiry and packages",
    ],
    relevantServiceSlugs: [
      "web-development",
      "branding",
      "graphic-design",
      "seo",
      "ui-ux-design",
    ],
    faqs: [
      {
        question: "Do you integrate booking engines?",
        answer:
          "Yes. We commonly embed or integrate the booking engine you already use and design the journey around it.",
      },
      {
        question: "Can you work with multi-property groups?",
        answer:
          "Yes. We design systems that keep properties distinct while sharing brand and component foundations.",
      },
      {
        question: "Is SEO useful for hospitality?",
        answer:
          "For destination and property discovery, yes—especially when content and technical performance support local and intent-led queries.",
      },
      {
        question: "Do you redesign print or in-stay materials too?",
        answer:
          "Brand engagements can include collateral guidelines and templates for in-stay and sales materials.",
      },
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    metaTitle: "Retail & Ecommerce Digital Services",
    metaDescription:
      "Ecommerce growth, brand systems, and retail digital experiences from Vedasynk—built to improve conversion and channel efficiency.",
    heroHeadline: "Retail brands with coherent stores, sites, and campaigns",
    heroSubhead:
      "We connect identity, ecommerce experience, and acquisition so every channel reinforces the same offer and story.",
    challenges: [
      "Rising paid acquisition costs with flat conversion",
      "Inconsistent brand across packaging, social, and site",
      "Category pages that do not match search intent",
      "Fragmented analytics across ads, store, and ecommerce",
      "Creative production too slow for meaningful testing",
    ],
    solutions: [
      "Ecommerce UX and storefront improvements",
      "Brand and packaging systems",
      "SEO and content foundations",
      "Paid media and creative systems",
      "Analytics cleanup and reporting",
    ],
    relevantServiceSlugs: [
      "web-development",
      "branding",
      "digital-marketing",
      "seo",
      "graphic-design",
    ],
    faqs: [
      {
        question: "Do you work on Shopify and custom stacks?",
        answer:
          "Yes. We work with Shopify and custom Next.js or headless setups depending on catalogue complexity and performance needs.",
      },
      {
        question: "Can you improve conversion without a full rebuild?",
        answer:
          "Often. Template and journey improvements, clearer offers, and faster pages can move conversion before a larger replatform.",
      },
      {
        question: "Do you support offline retail brands going online?",
        answer:
          "Yes. Brand and digital systems for boutiques and multi-store retailers expanding ecommerce are a strong fit.",
      },
      {
        question: "How do you measure success?",
        answer:
          "We agree metrics up front—conversion rate, CAC, organic sessions, AOV—and report against them on a fixed cadence.",
      },
    ],
  },
  {
    slug: "finance",
    title: "Finance",
    metaTitle: "Fintech & Finance Product Development",
    metaDescription:
      "Fintech MVPs, secure customer apps, and finance digital products from Vedasynk—built with clear flows, APIs, and production discipline.",
    heroHeadline: "Finance products that earn trust through clarity and craft",
    heroSubhead:
      "We help fintech and financial services teams ship wallets, portals, and internal tools with journeys users can understand and systems operators can audit.",
    challenges: [
      "Complex compliance flows that cause drop-off",
      "Prototypes that are not production-ready",
      "Unclear money movement and status communication",
      "API and partner integrations under time pressure",
      "Brand and product UX that do not feel credible",
    ],
    solutions: [
      "MVP and product builds for fintech teams",
      "Customer web and mobile applications",
      "KYC and onboarding journey design",
      "API development and partner integrations",
      "Admin tools and operational dashboards",
    ],
    relevantServiceSlugs: [
      "mvp-development",
      "mobile-app-development",
      "api-development",
      "ui-ux-design",
      "saas-development",
    ],
    faqs: [
      {
        question: "Do you handle regulated product requirements?",
        answer:
          "We implement the controls and workflows your compliance stakeholders define, and we plan architecture with auditability in mind. Legal and licensing advice remains with your counsel.",
      },
      {
        question: "Can you work with payment providers?",
        answer:
          "Yes. Payment and KYC provider integrations are a common part of fintech engagements.",
      },
      {
        question: "How do you keep UX simple for complex products?",
        answer:
          "We design around progressive disclosure, clear states, and plain language—especially for balances, transfers, and verification.",
      },
      {
        question: "Do you only work with startups?",
        answer:
          "No. We also support established finance teams modernising portals and internal tools.",
      },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    metaTitle: "Logistics Software & Operations Apps",
    metaDescription:
      "Field apps, dispatch tools, and logistics operations software from Vedasynk—built to replace spreadsheet handoffs with live status.",
    heroHeadline: "Logistics software for the people moving work on the ground",
    heroSubhead:
      "We build dispatch consoles, driver apps, and exception workflows that give operations live status instead of delayed spreadsheet updates.",
    challenges: [
      "Status chasing through calls and shared sheets",
      "Inconsistent proof of delivery and exception handling",
      "Poor ETA communication to customers",
      "Dispatch tools that do not match real route constraints",
      "Integrations missing between ops and billing systems",
    ],
    solutions: [
      "Driver and field operations apps",
      "Dispatch and assignment consoles",
      "Proof-of-delivery and exception flows",
      "Customer status notifications",
      "API integrations with billing and WMS tools",
    ],
    relevantServiceSlugs: [
      "mobile-app-development",
      "enterprise-software",
      "api-development",
      "devops",
      "software-development",
    ],
    faqs: [
      {
        question: "Do you support GPS and maps?",
        answer:
          "Yes. Location-aware status and mapping integrations are common in field operations apps.",
      },
      {
        question: "Can you roll out hub by hub?",
        answer:
          "That is our preferred approach—pilot a region, refine workflows, then expand.",
      },
      {
        question: "Offline use for drivers?",
        answer:
          "Where network is unreliable, we design for resilient capture and sync. Exact offline depth depends on device and workflow needs.",
      },
      {
        question: "Will this replace our TMS?",
        answer:
          "Sometimes we extend a TMS; sometimes we replace a thin sheet-based process. We clarify systems of record before build.",
      },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    metaTitle: "Manufacturing Digital Tools & Software",
    metaDescription:
      "Custom manufacturing software, portals, and digital experiences from Vedasynk for operators modernising workflows and customer communication.",
    heroHeadline: "Practical digital tools for manufacturing operators",
    heroSubhead:
      "We modernise order portals, internal workflows, and customer-facing sites so production and sales teams share one clearer picture.",
    challenges: [
      "Order and status communication stuck in email threads",
      "Quality or production data trapped in local files",
      "Dealer or distributor portals that are outdated",
      "Websites that under-represent capability and certifications",
      "Manual reporting across plants or lines",
    ],
    solutions: [
      "Dealer and customer portals",
      "Internal workflow and tracking tools",
      "Capability and corporate websites",
      "Integrations with existing ERP where APIs allow",
      "Dashboards for operational visibility",
    ],
    relevantServiceSlugs: [
      "enterprise-software",
      "web-development",
      "api-development",
      "cloud-solutions",
      "ui-ux-design",
    ],
    faqs: [
      {
        question: "Do you replace ERP systems?",
        answer:
          "Rarely as a first step. We usually build the workflows and portals ERP systems handle poorly, and integrate carefully.",
      },
      {
        question: "Can shop-floor users adopt the tools?",
        answer:
          "We design for the real device and literacy constraints of the users who will touch the system daily.",
      },
      {
        question: "Is cloud mandatory?",
        answer:
          "Not always. Hosting follows your IT and security preferences, including hybrid approaches when required.",
      },
      {
        question: "Can you improve our B2B website only?",
        answer:
          "Yes. Many manufacturers start with a clearer capability site and inquiry flow before deeper systems work.",
      },
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    metaTitle: "Construction Websites & Project Digital Tools",
    metaDescription:
      "Construction company websites, project showcases, and digital tools from Vedasynk for builders and developers who need clearer client communication.",
    heroHeadline: "Construction brands and tools that communicate progress clearly",
    heroSubhead:
      "We help builders and developers present projects professionally and give stakeholders better visibility into status and documentation.",
    challenges: [
      "Corporate sites that look interchangeable and outdated",
      "Project updates shared inconsistently with clients",
      "Document handoffs scattered across drives and chats",
      "Lead inquiries from architecture or fit-out work poorly tracked",
      "Brand not strong enough for competitive bids",
    ],
    solutions: [
      "Corporate and project portfolio websites",
      "Client update and document portals",
      "Brand systems for proposals and site presence",
      "Lead capture for services and tenders",
      "Lightweight internal tracking tools",
    ],
    relevantServiceSlugs: [
      "web-development",
      "branding",
      "graphic-design",
      "software-development",
      "seo",
    ],
    faqs: [
      {
        question: "Can you showcase active and completed projects?",
        answer:
          "Yes. Project libraries with structured case layouts are a core part of construction website work.",
      },
      {
        question: "Do you build full project management suites?",
        answer:
          "We build focused portals and tracking tools. For full PM suites we often integrate established products rather than recreating them.",
      },
      {
        question: "Can branding help with tenders?",
        answer:
          "A coherent brand and proposal visual system helps teams look as capable as their delivery record.",
      },
      {
        question: "Mobile access for site teams?",
        answer:
          "When portals or tools are in scope, we design for mobile use in the field.",
      },
    ],
  },
  {
    slug: "saas",
    title: "SaaS",
    metaTitle: "SaaS Product Design & Development",
    metaDescription:
      "SaaS design and engineering from Vedasynk—multi-tenant products, onboarding UX, analytics, and growth sites for B2B software teams.",
    heroHeadline: "SaaS partners for product craft and sustainable delivery",
    heroSubhead:
      "We help SaaS teams ship features customers adopt—clean UX, solid tenancy, and marketing sites that match the product story.",
    challenges: [
      "Onboarding that stalls before time-to-value",
      "Feature velocity without design consistency",
      "Analytics and admin tools lagging customer needs",
      "Marketing site messaging disconnected from product reality",
      "Technical debt slowing releases as the customer base grows",
    ],
    solutions: [
      "Product UX and design systems",
      "Feature and platform engineering",
      "Multi-tenant architecture improvements",
      "Customer-facing analytics modules",
      "Product marketing sites and launch systems",
    ],
    relevantServiceSlugs: [
      "saas-development",
      "ui-ux-design",
      "api-development",
      "cloud-solutions",
      "web-development",
    ],
    faqs: [
      {
        question: "Can you embed with our existing product team?",
        answer:
          "Yes. We can own a module end-to-end or augment your roadmap with clear interface ownership.",
      },
      {
        question: "Do you help with packaging and plans?",
        answer:
          "We implement entitlement-friendly architecture and can advise on how UX should reflect plans. Pricing strategy remains yours.",
      },
      {
        question: "What about legacy codebases?",
        answer:
          "We work in existing codebases when healthy enough, or carve a strangler path when parts need isolation and rewrite.",
      },
      {
        question: "Can brand and PLG site be included?",
        answer:
          "Yes. Product-led growth works better when the site, signup, and first-run experience share one narrative.",
      },
    ],
  },
  {
    slug: "startups",
    title: "Startups",
    metaTitle: "Startup MVP, Brand & Product Development",
    metaDescription:
      "Startup partners for MVP development, branding, and go-to-market systems from Vedasynk Technologies—Bangalore founders shipping with focus.",
    heroHeadline: "A product and brand partner for ambitious startup teams",
    heroSubhead:
      "From first MVP to early growth, we help founders ship focused products and a market presence that can earn trust quickly.",
    challenges: [
      "Too many features planned for the first release",
      "Limited engineering bandwidth with investor timelines",
      "Brand that looks unfinished next to the ambition of the pitch",
      "No clear analytics or learning loop after launch",
      "Vendors who understand either code or marketing—not both",
    ],
    solutions: [
      "Scoped MVP development",
      "Founding brand identity and launch kits",
      "Marketing sites that convert early interest",
      "Mobile or web product builds",
      "Post-launch iteration and growth foundations",
    ],
    relevantServiceSlugs: [
      "mvp-development",
      "branding",
      "web-development",
      "mobile-app-development",
      "digital-marketing",
    ],
    faqs: [
      {
        question: "How early can we work with you?",
        answer:
          "From pre-seed idea shaping through post-seed product expansion. The earlier we clarify the bet, the cleaner the build.",
      },
      {
        question: "Do you take equity?",
        answer:
          "Engagements are typically fee-based. Alternative structures can be discussed only when both sides want that relationship.",
      },
      {
        question: "Can you move fast for a demo day?",
        answer:
          "Yes, with ruthless scope. We will tell you what quality requires and what must wait.",
      },
      {
        question: "Who will we work with day to day?",
        answer:
          "Founder-level attention from product/engineering and brand/growth leadership, supported by the delivery team on the engagement.",
      },
    ],
  },
  {
    slug: "ngos",
    title: "NGOs",
    metaTitle: "NGO Websites, Branding & Digital Systems",
    metaDescription:
      "Mission-led websites, donation experiences, and digital systems for NGOs and nonprofits from Vedasynk Technologies.",
    heroHeadline: "Digital presence that helps missions earn trust and support",
    heroSubhead:
      "We help NGOs present impact clearly, make giving and volunteering easier, and run lighter operations with better tools.",
    challenges: [
      "Websites that bury impact under clutter",
      "Donation and volunteer flows that cause drop-off",
      "Brand assets inconsistent across campaigns and partners",
      "Reporting to donors assembled manually under pressure",
      "Limited budgets that still need professional outcomes",
    ],
    solutions: [
      "Impact-led websites and content structures",
      "Donation and volunteer journey design",
      "Brand systems for campaigns and partners",
      "Lightweight CRM or form-to-ops workflows",
      "SEO and storytelling for discovery",
    ],
    relevantServiceSlugs: [
      "web-development",
      "branding",
      "graphic-design",
      "seo",
      "software-development",
    ],
    faqs: [
      {
        question: "Do you offer nonprofit-friendly scoping?",
        answer:
          "We scope tightly to mission outcomes and can phase work so essential journeys ship first within budget realities.",
      },
      {
        question: "Can you integrate donation providers?",
        answer:
          "Yes. We integrate established payment and donation tools rather than building payment rails from scratch.",
      },
      {
        question: "Will you train our team to update the site?",
        answer:
          "Training and a simple CMS workflow are part of most NGO website deliveries.",
      },
      {
        question: "Can you help with campaign creatives?",
        answer:
          "Brand and graphic design support for campaigns is available alongside the core digital presence.",
      },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((industry) => industry.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return INDUSTRIES.map((industry) => industry.slug);
}
