/** SEO + conversion extras for solution detail pages */

export type SolutionExtra = {
  primaryKeyword: string;
  secondaryKeywords: string[];
  idealFor: { title: string; description: string }[];
  whyNow: string[];
  deliverablesDetail: { title: string; description: string }[];
  relatedServiceSlugs: string[];
  relatedSolutionSlugs: string[];
  seoBlocks: { heading: string; body: string }[];
};

export const SOLUTION_EXTRAS: Record<string, SolutionExtra> = {
  "mvp-development": {
    primaryKeyword: "MVP development company for startups",
    secondaryKeywords: [
      "build MVP fast",
      "startup MVP development Bangalore",
      "lean product development",
      "web and mobile MVP agency",
      "investor-ready MVP",
    ],
    idealFor: [
      {
        title: "Pre-seed and seed founders",
        description:
          "Need a credible product users can try before the next raise—not a slide deck or disposable prototype.",
      },
      {
        title: "Operators validating a new line of business",
        description:
          "Intrapreneurs who must prove demand inside a larger company with a focused release.",
      },
      {
        title: "Teams stuck in endless scoping",
        description:
          "Ready to cut to the spine, ship, and learn with analytics and real feedback.",
      },
    ],
    whyNow: [
      "Markets reward speed with judgment—overbuilt v1s burn runway.",
      "Investors and early customers respond to working software.",
      "A production-minded MVP avoids a full rewrite after first traction.",
    ],
    deliverablesDetail: [
      {
        title: "Outcome & scope workshop",
        description:
          "Define the user, the proving action, non-goals, and success metrics before build.",
      },
      {
        title: "Core UX and product spine",
        description:
          "Journeys designed for depth where it matters—signup, primary task, and feedback loops.",
      },
      {
        title: "Production-ready build",
        description:
          "Web and/or mobile implementation with APIs, auth basics, and monitoring.",
      },
      {
        title: "Launch + learning plan",
        description:
          "Go-live support, instrumentation, and a prioritised backlog for the next bets.",
      },
    ],
    relatedServiceSlugs: [
      "mvp-development",
      "mobile-app-development",
      "ui-ux-design",
      "web-development",
    ],
    relatedSolutionSlugs: ["saas-product-development", "digital-transformation"],
    seoBlocks: [
      {
        heading: "MVP development that proves demand",
        body: "Vedasynk helps startups and SMEs build MVPs from Bangalore with clear scope, usable UX, and engineering quality you can keep. We focus on the journeys that answer your riskiest product question—so you learn from users, not from endless planning.",
      },
      {
        heading: "What belongs in an MVP (and what does not)",
        body: "A strong MVP includes the spine users need to experience value, analytics to measure behaviour, and enough polish to earn trust. It excludes edge cases, secondary platforms, and nice-to-haves that delay learning. We facilitate those trade-offs explicitly so timelines stay honest.",
      },
    ],
  },
  "saas-product-development": {
    primaryKeyword: "SaaS product development company",
    secondaryKeywords: [
      "multi-tenant SaaS development",
      "SaaS MVP to scale",
      "subscription product engineering",
      "SaaS development agency Bangalore",
      "B2B SaaS build",
    ],
    idealFor: [
      {
        title: "Founders launching subscription products",
        description:
          "Need tenancy, roles, billing hooks, and onboarding that activates paying customers.",
      },
      {
        title: "Teams turning internal tools into SaaS",
        description:
          "Package workflows for external accounts without bolting tenancy on later.",
      },
      {
        title: "Products preparing for growth",
        description:
          "Architecture, admin tools, and release habits that survive more customers and features.",
      },
    ],
    whyNow: [
      "SaaS buyers expect polish and reliability earlier than ever.",
      "Rewriting multi-tenant foundations mid-growth is expensive.",
      "Activation UX is as important as feature count for retention.",
    ],
    deliverablesDetail: [
      {
        title: "Product framing & ICP clarity",
        description:
          "Jobs-to-be-done, first release goals, and packaging assumptions.",
      },
      {
        title: "Multi-tenant system design",
        description:
          "Data boundaries, permissions, and integration maps before heavy build.",
      },
      {
        title: "Application & API delivery",
        description:
          "Customer app, admin surfaces, webhooks, and cloud deployment.",
      },
      {
        title: "Operate & iterate",
        description:
          "Monitoring, analytics, and a roadmap for post-launch modules.",
      },
    ],
    relatedServiceSlugs: [
      "saas-development",
      "api-development",
      "ui-ux-design",
      "cloud-solutions",
    ],
    relatedSolutionSlugs: ["mvp-development", "enterprise-software"],
    seoBlocks: [
      {
        heading: "SaaS development from foundation to adoption",
        body: "As a SaaS product development partner, Vedasynk builds multi-tenant applications with onboarding UX, APIs, and cloud practices designed for real B2B accounts. Based in Bangalore, we deliver for founders and product teams selling globally.",
      },
      {
        heading: "Multi-tenant and billing-ready foundations",
        body: "We design tenancy, roles, and entitlement hooks early so packaging and pricing experiments do not require a rewrite. Billing providers such as Stripe can be integrated when you are ready to charge.",
      },
    ],
  },
  "enterprise-software": {
    primaryKeyword: "enterprise software development company",
    secondaryKeywords: [
      "custom enterprise applications",
      "operations platform development",
      "workflow automation software",
      "internal tools development",
      "enterprise software Bangalore",
    ],
    idealFor: [
      {
        title: "Operators drowning in spreadsheets",
        description:
          "Multi-team or multi-location processes that need shared status, ownership, and auditability.",
      },
      {
        title: "IT and operations leaders modernising workflows",
        description:
          "Need phased delivery that respects security, integrations, and change management.",
      },
      {
        title: "Companies integrating fragmented systems",
        description:
          "APIs and portals that connect ERP, CRM, and field tools without duplicate truth.",
      },
    ],
    whyNow: [
      "Manual handoffs break as volume and locations grow.",
      "Security and governance expectations keep rising.",
      "Phased custom software beats risky rip-and-replace programmes.",
    ],
    deliverablesDetail: [
      {
        title: "Workflow discovery",
        description:
          "Map real processes, exceptions, and systems of record with stakeholders.",
      },
      {
        title: "Operating model design",
        description:
          "Roles, states, approvals, and integration boundaries.",
      },
      {
        title: "Pilot release",
        description:
          "Ship to a first team or site, learn, then expand.",
      },
      {
        title: "Stabilise & train",
        description:
          "Production hardening, training, and a maintenance path.",
      },
    ],
    relatedServiceSlugs: [
      "enterprise-software",
      "software-development",
      "api-development",
      "cloud-solutions",
    ],
    relatedSolutionSlugs: ["digital-transformation", "saas-product-development"],
    seoBlocks: [
      {
        heading: "Enterprise software that matches real work",
        body: "Vedasynk designs and builds enterprise and mid-market operations software—booking platforms, internal tools, partner portals, and integrations—with phased rollouts that reduce risk while delivering early value.",
      },
      {
        heading: "Change management is part of delivery",
        body: "Software staff refuse to use is a failed project. We include pilots, role-based training, and clear ownership so adoption sticks after go-live.",
      },
    ],
  },
  "digital-transformation": {
    primaryKeyword: "digital transformation services for SMEs",
    secondaryKeywords: [
      "practical digital transformation",
      "digital transformation Bangalore",
      "modernise website and operations",
      "phased digital transformation roadmap",
      "customer experience modernisation",
    ],
    idealFor: [
      {
        title: "Leadership teams modernising in phases",
        description:
          "Need a sequenced roadmap across website, software, brand, and growth—not a big-bang rewrite.",
      },
      {
        title: "Businesses with outdated customer journeys",
        description:
          "Website, booking, or service flows that no longer match brand ambition.",
      },
      {
        title: "Operators connecting product and marketing",
        description:
          "Want engineering, brand, and SEO/marketing to move as one system.",
      },
    ],
    whyNow: [
      "Customers expect modern digital journeys; competitors are shipping them.",
      "Transformation fails when strategy is disconnected from delivery.",
      "Phased releases create visible ROI that funds the next wave.",
    ],
    deliverablesDetail: [
      {
        title: "Maturity & opportunity assessment",
        description:
          "Review channels, tools, data, and bottlenecks with stakeholders.",
      },
      {
        title: "Prioritised roadmap",
        description:
          "Impact-ordered phases with owners, outcomes, and deliberate non-goals.",
      },
      {
        title: "Delivery waves",
        description:
          "Ship product, brand, and growth improvements that reinforce each other.",
      },
      {
        title: "Measure & reinvest",
        description:
          "Track results and fund the next wave from demonstrated value.",
      },
    ],
    relatedServiceSlugs: [
      "web-development",
      "software-development",
      "branding",
      "seo",
      "digital-marketing",
    ],
    relatedSolutionSlugs: ["mvp-development", "enterprise-software"],
    seoBlocks: [
      {
        heading: "Digital transformation that ships useful phases",
        body: "Vedasynk’s digital transformation services help SMEs and growing companies modernise customer experience, operations, and brand presence in sequenced releases—from Bangalore to global markets.",
      },
      {
        heading: "Product, brand, and growth in one roadmap",
        body: "Because we combine software development with branding, SEO, and digital marketing, transformation is not only internal tools—it includes the journeys and acquisition systems that create revenue.",
      },
    ],
  },
};

export function getSolutionExtra(slug: string): SolutionExtra | undefined {
  return SOLUTION_EXTRAS[slug];
}
