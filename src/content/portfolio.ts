export type PortfolioProject = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  tech: string[];
  year: string;
};

export const PROJECTS: PortfolioProject[] = [
  {
    slug: "fintech-wallet-mvp",
    title: "Digital wallet MVP for a Series A fintech",
    client: "Series A Fintech",
    category: "Fintech · MVP",
    summary:
      "A production-ready wallet MVP that let a funded fintech validate peer transfers, KYC flows, and merchant payments with early users.",
    challenge:
      "The team had investor pressure to ship a credible product experience quickly, but an internal prototype was brittle, incomplete on compliance flows, and not ready for real traffic or app-store review.",
    solution:
      "We rebuilt the core wallet around clear transfer and KYC journeys, hardened APIs, and a mobile-first interface that matched the brand. Launch included monitoring, role-based admin tools, and a roadmap for the next payment rails.",
    results: [
      "MVP live in 12 weeks from kickoff",
      "First 2,000 funded wallets activated in the pilot window",
      "App-store submission approved on first review cycle",
      "Support tickets for core flows stayed under 3% of active users",
    ],
    services: [
      "mvp-development",
      "mobile-app-development",
      "api-development",
      "ui-ux-design",
    ],
    tech: [
      "React Native",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Stripe Connect",
    ],
    year: "2025",
  },
  {
    slug: "clinic-booking-platform",
    title: "Multi-clinic booking and operations platform",
    client: "Regional Healthcare Group",
    category: "Healthcare · Operations",
    summary:
      "A shared booking, reminder, and front-desk platform that reduced no-shows and unified scheduling across a growing clinic network.",
    challenge:
      "Clinics relied on phone books, WhatsApp threads, and separate calendars. Double bookings were common, reminders were inconsistent, and leadership had no reliable view of utilisation across locations.",
    solution:
      "We designed a clinic-aware booking system with provider calendars, patient reminders, role-based staff access, and a lightweight operations dashboard. The rollout started with two flagship clinics before expanding network-wide.",
    results: [
      "No-show rate reduced by 28% within three months",
      "Front-desk scheduling time cut by roughly half",
      "Unified calendar live across six clinics",
      "Patient satisfaction scores improved on booking ease",
    ],
    services: [
      "software-development",
      "web-development",
      "ui-ux-design",
      "maintenance-support",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Twilio",
      "Google Cloud",
      "Redis",
    ],
    year: "2025",
  },
  {
    slug: "saas-analytics-dashboard",
    title: "Analytics product for a B2B SaaS team",
    client: "Growth-stage SaaS Company",
    category: "SaaS · Product",
    summary:
      "A customer-facing analytics suite that turned raw event data into clear dashboards, exports, and shareable insights for B2B accounts.",
    challenge:
      "Customers asked for reporting the product did not offer. The team was exporting CSVs manually, which did not scale and made renewals harder to defend.",
    solution:
      "We shipped a modular analytics layer with saved views, role-aware sharing, scheduled exports, and a design system aligned to the existing product. Instrumentation and query performance were part of the same delivery, not an afterthought.",
    results: [
      "Analytics adopted by 64% of active accounts in 90 days",
      "Sales cycle shortened where demos included live reporting",
      "Support load for custom report requests dropped sharply",
      "Foundation ready for usage-based packaging experiments",
    ],
    services: [
      "saas-development",
      "ui-ux-design",
      "api-development",
      "cloud-solutions",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "ClickHouse",
      "PostgreSQL",
      "AWS",
    ],
    year: "2025",
  },
  {
    slug: "boutique-brand-identity",
    title: "Brand system for a premium lifestyle boutique",
    client: "D2C Lifestyle Brand",
    category: "Brand · Identity",
    summary:
      "A complete identity and visual system that elevated a boutique retail brand across packaging, store touchpoints, and digital channels.",
    challenge:
      "The brand had grown through word of mouth but looked inconsistent online and offline. Product photography, social posts, and packaging felt like three different companies.",
    solution:
      "We rebuilt the brand from positioning through logo, type, colour, packaging guidelines, and a digital design kit. The system was applied first to the website relaunch and then to social and in-store materials.",
    results: [
      "Cohesive brand presence across web, pack, and retail",
      "Website bounce rate improved after relaunch",
      "Social creative production time reduced with reusable templates",
      "Clear guidelines handed to internal marketing and vendors",
    ],
    services: ["branding", "graphic-design", "ui-ux-design", "web-development"],
    tech: ["Figma", "Adobe Illustrator", "Next.js", "Shopify", "Notion"],
    year: "2025",
  },
  {
    slug: "ecommerce-growth-system",
    title: "Growth system for a mid-market ecommerce brand",
    client: "National Ecommerce Retailer",
    category: "Retail · Growth",
    summary:
      "An integrated SEO, paid media, and conversion program that improved acquisition efficiency and lifted revenue from organic and paid channels.",
    challenge:
      "Paid spend was rising while organic visibility stalled. Landing pages were inconsistent, tracking was fragmented, and creative refreshed too slowly to learn from tests.",
    solution:
      "We rebuilt the growth stack around clean analytics, search-led content, landing page templates, and a disciplined paid testing cadence. Brand and performance creative shared one system so messaging stayed coherent.",
    results: [
      "Organic sessions up 41% in six months",
      "Paid CAC reduced by 22% at stable volume",
      "Higher conversion on rebuilt category and campaign pages",
      "Weekly reporting the leadership team could act on",
    ],
    services: [
      "digital-marketing",
      "seo",
      "web-development",
      "graphic-design",
    ],
    tech: [
      "Google Analytics 4",
      "Google Ads",
      "Meta Ads",
      "Next.js",
      "Shopify",
      "Search Console",
    ],
    year: "2025",
  },
  {
    slug: "logistics-ops-app",
    title: "Field operations app for a logistics network",
    client: "Regional Logistics Operator",
    category: "Logistics · Operations",
    summary:
      "A mobile-first operations app for drivers and dispatchers that replaced spreadsheet handoffs with live status, proof of delivery, and exception handling.",
    challenge:
      "Dispatch relied on calls and shared sheets. Status was outdated by the time leadership saw it, exceptions were poorly tracked, and customers received inconsistent ETAs.",
    solution:
      "We built a field app and dispatch console with live job assignment, GPS-aware status updates, photo proof of delivery, and exception workflows. Integrations pushed key events into the client's existing billing tools.",
    results: [
      "On-time delivery visibility improved across all routes",
      "Manual status chase-downs reduced for dispatch staff",
      "Proof-of-delivery disputes resolved faster",
      "Rollout completed across three regional hubs",
    ],
    services: [
      "mobile-app-development",
      "enterprise-software",
      "api-development",
      "devops",
    ],
    tech: [
      "Flutter",
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "Google Maps",
      "Docker",
    ],
    year: "2026",
  },
];

export const FEATURED_PROJECTS = PROJECTS.slice(0, 4);

export function getProject(slug: string): PortfolioProject | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((project) => project.slug);
}
