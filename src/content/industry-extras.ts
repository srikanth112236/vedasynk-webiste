/** Compact SEO extras for industry pages */

export type IndustryExtra = {
  primaryKeyword: string;
  secondaryKeywords: string[];
  stats: { label: string; value: string }[];
  seoBlocks: { heading: string; body: string }[];
  relatedIndustrySlugs: string[];
};

export const INDUSTRY_EXTRAS: Record<string, IndustryExtra> = {
  healthcare: {
    primaryKeyword: "healthcare software development",
    secondaryKeywords: [
      "clinic management software",
      "healthcare app development Bangalore",
      "patient booking platforms",
      "medical practice digital transformation",
    ],
    stats: [
      { value: "HIPAA-aware", label: "Security mindset" },
      { value: "Ops-first", label: "Workflow design" },
      { value: "Mobile", label: "Staff & patients" },
    ],
    seoBlocks: [
      {
        heading: "Healthcare software that respects clinical workflows",
        body: "Vedasynk builds clinic booking, operations, and patient-facing digital experiences for healthcare groups. We prioritise role-based access, reliable scheduling, and clear UX so staff adopt tools instead of bypassing them.",
      },
    ],
    relatedIndustrySlugs: ["saas", "startups", "finance"],
  },
  education: {
    primaryKeyword: "education software development",
    secondaryKeywords: [
      "edtech product development",
      "learning platform development",
      "school management systems",
    ],
    stats: [
      { value: "EdTech", label: "Product builds" },
      { value: "LMS", label: "Integrations" },
      { value: "Mobile", label: "Learner access" },
    ],
    seoBlocks: [
      {
        heading: "Education and EdTech digital products",
        body: "From learner apps to admin portals, we design education software that is simple for students and powerful for operators—with analytics that show engagement.",
      },
    ],
    relatedIndustrySlugs: ["saas", "startups", "ngos"],
  },
  "real-estate": {
    primaryKeyword: "real estate website and app development",
    secondaryKeywords: [
      "property listing platforms",
      "real estate CRM software",
      "brokerage digital marketing",
    ],
    stats: [
      { value: "Listings", label: "Search UX" },
      { value: "Leads", label: "Conversion focus" },
      { value: "SEO", label: "Local visibility" },
    ],
    seoBlocks: [
      {
        heading: "Real estate platforms that convert enquiries",
        body: "We build property websites, listing search, and lead workflows so brokers and developers capture demand from organic and paid channels.",
      },
    ],
    relatedIndustrySlugs: ["construction", "finance", "retail"],
  },
  hospitality: {
    primaryKeyword: "hospitality software development",
    secondaryKeywords: [
      "hotel booking website",
      "restaurant digital experience",
      "hospitality brand design",
    ],
    stats: [
      { value: "Booking", label: "Conversion UX" },
      { value: "Brand", label: "Guest trust" },
      { value: "Ops", label: "Staff tools" },
    ],
    seoBlocks: [
      {
        heading: "Hospitality digital experiences guests trust",
        body: "Websites, booking flows, and brand systems for hotels and restaurants—designed to convert visitors and support operations.",
      },
    ],
    relatedIndustrySlugs: ["retail", "real-estate", "startups"],
  },
  retail: {
    primaryKeyword: "retail ecommerce development",
    secondaryKeywords: [
      "ecommerce website agency",
      "retail digital marketing",
      "omnichannel retail software",
    ],
    stats: [
      { value: "Commerce", label: "Storefronts" },
      { value: "Growth", label: "Paid + SEO" },
      { value: "Brand", label: "Shelf presence" },
    ],
    seoBlocks: [
      {
        heading: "Retail and ecommerce systems that sell",
        body: "Vedasynk builds storefronts, brand systems, and growth landing pages so retail brands convert traffic into orders—and keep post-purchase experience coherent.",
      },
    ],
    relatedIndustrySlugs: ["saas", "hospitality", "logistics"],
  },
  finance: {
    primaryKeyword: "fintech software development",
    secondaryKeywords: [
      "fintech MVP development",
      "finance app development Bangalore",
      "secure financial web apps",
    ],
    stats: [
      { value: "Security", label: "By design" },
      { value: "MVP", label: "Fast validation" },
      { value: "Compliance", label: "Practical hardening" },
    ],
    seoBlocks: [
      {
        heading: "Fintech and finance product engineering",
        body: "We help fintech startups and finance operators ship wallets, dashboards, and customer portals with security-minded architecture and clear UX.",
      },
    ],
    relatedIndustrySlugs: ["saas", "startups", "healthcare"],
  },
  logistics: {
    primaryKeyword: "logistics software development",
    secondaryKeywords: [
      "fleet and ops apps",
      "logistics dashboard development",
      "supply chain digital tools",
    ],
    stats: [
      { value: "Ops", label: "Live status" },
      { value: "Mobile", label: "Field teams" },
      { value: "APIs", label: "Integrations" },
    ],
    seoBlocks: [
      {
        heading: "Logistics tools that reduce operational chaos",
        body: "Custom logistics software for tracking, dispatch, and partner portals—built so field and office teams share one source of truth.",
      },
    ],
    relatedIndustrySlugs: ["manufacturing", "retail", "construction"],
  },
  manufacturing: {
    primaryKeyword: "manufacturing digital transformation",
    secondaryKeywords: [
      "manufacturing operations software",
      "industrial workflow apps",
      "factory digital tools",
    ],
    stats: [
      { value: "Workflows", label: "Floor to office" },
      { value: "Data", label: "Visibility" },
      { value: "Phased", label: "Rollouts" },
    ],
    seoBlocks: [
      {
        heading: "Manufacturing software for real plant workflows",
        body: "We modernise manufacturing operations with phased tools—quality, scheduling, and reporting—without forcing a risky big-bang cutover.",
      },
    ],
    relatedIndustrySlugs: ["logistics", "construction", "saas"],
  },
  construction: {
    primaryKeyword: "construction project management software",
    secondaryKeywords: [
      "construction company website",
      "contractor digital tools",
      "real estate developer tech",
    ],
    stats: [
      { value: "Projects", label: "Status clarity" },
      { value: "Field", label: "Mobile access" },
      { value: "Leads", label: "Website conversion" },
    ],
    seoBlocks: [
      {
        heading: "Construction digital systems for teams on site",
        body: "From developer websites to project coordination tools, Vedasynk builds software and brands that help construction firms win work and run jobs with clearer status.",
      },
    ],
    relatedIndustrySlugs: ["real-estate", "manufacturing", "logistics"],
  },
  saas: {
    primaryKeyword: "SaaS product development for B2B",
    secondaryKeywords: [
      "SaaS UX design",
      "multi-tenant SaaS build",
      "SaaS marketing website",
    ],
    stats: [
      { value: "Tenancy", label: "Built-in" },
      { value: "Onboarding", label: "Activation UX" },
      { value: "Growth", label: "Site + SEO" },
    ],
    seoBlocks: [
      {
        heading: "SaaS industry expertise across product and growth",
        body: "We help SaaS teams ship product foundations and the marketing systems that acquire customers—aligned messaging from site to in-app experience.",
      },
    ],
    relatedIndustrySlugs: ["startups", "finance", "education"],
  },
  startups: {
    primaryKeyword: "startup software development agency",
    secondaryKeywords: [
      "MVP development for startups",
      "startup branding agency",
      "startup website SEO",
    ],
    stats: [
      { value: "MVP", label: "Ship to learn" },
      { value: "Brand", label: "Launch-ready" },
      { value: "SEO", label: "Compounding leads" },
    ],
    seoBlocks: [
      {
        heading: "Startup product, brand, and growth under one roof",
        body: "Vedasynk partners with founders to build MVPs, launch websites, and brand systems with clear scope—so early teams move fast without sacrificing credibility.",
      },
    ],
    relatedIndustrySlugs: ["saas", "finance", "retail"],
  },
  ngos: {
    primaryKeyword: "NGO website and digital systems",
    secondaryKeywords: [
      "nonprofit digital marketing",
      "donation website development",
      "NGO brand design",
    ],
    stats: [
      { value: "Impact", label: "Clear storytelling" },
      { value: "Donate", label: "Conversion UX" },
      { value: "Trust", label: "Brand & SEO" },
    ],
    seoBlocks: [
      {
        heading: "Digital systems for NGOs and nonprofits",
        body: "We build websites, donation flows, and brand identities that help NGOs communicate impact and convert supporters—with budgets treated respectfully.",
      },
    ],
    relatedIndustrySlugs: ["education", "healthcare", "startups"],
  },
};

export function getIndustryExtra(slug: string): IndustryExtra | undefined {
  return INDUSTRY_EXTRAS[slug];
}
