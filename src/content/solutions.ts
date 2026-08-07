import type { FAQ, ProcessStep } from "./types";

export type Solution = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  overview: string[];
  outcomes: { title: string; description: string }[];
  includes: string[];
  process: ProcessStep[];
  faqs: FAQ[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "mvp-development",
    title: "MVP Development",
    metaTitle: "MVP Development for Startups",
    metaDescription:
      "Ship a focused MVP with Vedasynk—clear scope, usable product experience, and a foundation ready for real users, feedback, and the next funding milestone.",
    heroHeadline: "Ship an MVP that proves the idea—not a half-built wishlist",
    heroSubhead:
      "We help founders turn a sharp hypothesis into a product users can try, so you learn faster and raise or iterate with evidence.",
    overview: [
      "An MVP should answer a specific question: will the right users take a meaningful action? We cut scope to the journeys that prove that, then build them to a production standard—not a demo that falls apart under real use.",
      "Working from Bangalore with product and brand leadership in the same team, we align interface, messaging, and architecture so your first release looks credible to customers and investors alike.",
      "You leave with working software, a clear backlog for what comes next, and instrumentation that makes early learning measurable.",
    ],
    outcomes: [
      {
        title: "Faster validation",
        description:
          "Put a focused product in front of users in weeks, not quarters of speculative build.",
      },
      {
        title: "Investor-ready quality",
        description:
          "Ship an experience that supports demos, pilots, and diligence without apologising for unfinished edges.",
      },
      {
        title: "A foundation you can keep",
        description:
          "Architecture and design choices are made so the MVP can grow into the real product—not a rewrite waiting to happen.",
      },
      {
        title: "Clear next bets",
        description:
          "A prioritised roadmap based on what you deliberately deferred, so post-launch work stays intentional.",
      },
    ],
    includes: [
      "Outcome and scope definition workshop",
      "User journey and information architecture",
      "UI/UX for core flows",
      "Web or mobile application build",
      "API and data model foundation",
      "Basic analytics and error monitoring",
      "Launch support and documentation",
      "Post-MVP roadmap recommendations",
    ],
    process: [
      {
        title: "Frame the bet",
        description:
          "Agree on the user, the action that proves value, and the constraints of time and budget.",
      },
      {
        title: "Cut to the spine",
        description:
          "Define the minimum journeys and non-goals so the team builds depth where it matters.",
      },
      {
        title: "Design and build",
        description:
          "Produce usable interfaces and ship in short cycles with demos you can put in front of advisors or early users.",
      },
      {
        title: "Launch and learn",
        description:
          "Go live with monitoring, capture feedback, and sequence the next release from evidence.",
      },
    ],
    faqs: [
      {
        question: "How long does an MVP usually take?",
        answer:
          "Most focused MVPs land in eight to sixteen weeks depending on platforms, integrations, and compliance needs. We confirm a realistic window after discovery.",
      },
      {
        question: "Do you build web, mobile, or both?",
        answer:
          "We choose based on where your users are. Many MVPs start on web or a single mobile platform to reduce complexity, then expand once the core is proven.",
      },
      {
        question: "What if our idea changes mid-build?",
        answer:
          "We expect learning. Material changes go through a visible scope trade-off so the timeline stays honest instead of drifting.",
      },
      {
        question: "Can you help with branding for the launch?",
        answer:
          "Yes. Manikayam can deliver a lightweight brand and launch kit alongside the product so early users meet a coherent story.",
      },
      {
        question: "Will we own the code and designs?",
        answer:
          "Yes. On delivery, you own the repositories, design files, and documentation produced for the engagement.",
      },
    ],
  },
  {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    metaTitle: "SaaS Product Development",
    metaDescription:
      "Design and build multi-tenant SaaS products with Vedasynk—from onboarding and billing-ready foundations to dashboards, APIs, and scalable cloud delivery.",
    heroHeadline: "Build SaaS products that customers can adopt and you can operate",
    heroSubhead:
      "We design multi-tenant foundations, clear product UX, and release habits that support growth—not just a first version that looks good in a pitch deck.",
    overview: [
      "SaaS products succeed when onboarding is clear, tenancy is sound, and the team can ship improvements without fear. We build those foundations deliberately: auth, roles, billing hooks, admin tools, and observability.",
      "Our team pairs product engineering with interface craft so complex workflows stay understandable. For teams going to market, brand and messaging can move in parallel so the product and the site tell the same story.",
      "Whether you are launching a new category product or extending an existing platform, we focus on durable architecture and a release cadence you can sustain.",
    ],
    outcomes: [
      {
        title: "Multi-tenant ready core",
        description:
          "Tenancy, roles, and data boundaries designed for real B2B accounts—not bolted on later.",
      },
      {
        title: "Adoption-friendly UX",
        description:
          "Onboarding, empty states, and core workflows designed to reduce time-to-value for new customers.",
      },
      {
        title: "Operable in production",
        description:
          "Logging, monitoring, and admin surfaces so your team can support customers without spelunking in databases.",
      },
      {
        title: "Room to package and price",
        description:
          "Feature flags and plan-aware structure that make packaging experiments practical as you grow.",
      },
    ],
    includes: [
      "Product discovery and roadmap shaping",
      "Information architecture and UX design",
      "Multi-tenant application architecture",
      "Web app and API development",
      "Integrations and webhook patterns",
      "Admin and internal tooling",
      "Cloud deployment and CI/CD",
      "Analytics for product and business metrics",
    ],
    process: [
      {
        title: "Product framing",
        description:
          "Clarify ICP, jobs to be done, and the first release that creates retention—not just signups.",
      },
      {
        title: "System design",
        description:
          "Define tenancy, permissions, data model, and integration boundaries before heavy build.",
      },
      {
        title: "Iterative delivery",
        description:
          "Ship vertical slices users can try, with design and engineering working from the same backlog.",
      },
      {
        title: "Harden and scale habits",
        description:
          "Strengthen reliability, observability, and release process as early customers adopt the product.",
      },
    ],
    faqs: [
      {
        question: "Do you work on greenfield SaaS only?",
        answer:
          "No. We also extend existing products—new modules, analytics, admin tools, or a rebuild of a fragile core—when the outcome is clearly defined.",
      },
      {
        question: "Can you integrate billing providers?",
        answer:
          "Yes. We commonly integrate providers such as Stripe and design plan/entitlement structures that match how you sell.",
      },
      {
        question: "How do you handle security for B2B products?",
        answer:
          "We implement role-based access, secure session handling, least-privilege service credentials, and practical hardening aligned to your risk level. Deeper compliance programs can be phased in.",
      },
      {
        question: "Will you help with the marketing site?",
        answer:
          "Often, yes. A product launch lands harder when the site, onboarding, and in-app voice share one system. We can include that in scope.",
      },
      {
        question: "What does ongoing product partnership look like?",
        answer:
          "After the foundation ships, many clients continue on a phased roadmap or retainer for iteration, support, and new modules.",
      },
    ],
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    metaTitle: "Enterprise Software Development",
    metaDescription:
      "Custom enterprise software from Vedasynk—operations platforms, internal tools, and integrations that replace spreadsheets with reliable workflows.",
    heroHeadline: "Enterprise software that matches how your teams actually work",
    heroSubhead:
      "We replace fragile spreadsheet and chat-driven processes with systems staff can trust—designed around real workflows, roles, and integrations.",
    overview: [
      "Internal tools fail when they ignore the messy reality of operations. We start by understanding how work moves today—handoffs, exceptions, approvals—then design software that reduces friction without forcing a fantasy process overnight.",
      "Typical engagements include operations platforms, booking and scheduling systems, field apps, partner portals, and integration layers between systems that were never meant to talk.",
      "Delivery is phased so each release removes a concrete pain for a known user group, while architecture stays ready for wider rollout and governance needs.",
    ],
    outcomes: [
      {
        title: "Operational clarity",
        description:
          "Shared status, ownership, and history so teams stop chasing updates across chats and sheets.",
      },
      {
        title: "Fewer manual errors",
        description:
          "Validated workflows and integrations reduce re-entry and the expensive mistakes that follow.",
      },
      {
        title: "Leadership visibility",
        description:
          "Practical reporting on throughput, exceptions, and utilisation without drowning operators in dashboards.",
      },
      {
        title: "Sustainable ownership",
        description:
          "Documentation, access control, and a maintenance path so the system outlives the project team.",
      },
    ],
    includes: [
      "Workflow discovery and process mapping",
      "Role and permission design",
      "Custom web and mobile applications",
      "System integrations and APIs",
      "Data migration from legacy tools",
      "Admin and audit capabilities",
      "Training and change support",
      "Post-launch maintenance options",
    ],
    process: [
      {
        title: "Map the work",
        description:
          "Observe and document real workflows, pain points, and systems of record before proposing software.",
      },
      {
        title: "Design the operating model",
        description:
          "Define roles, states, exceptions, and integrations that match how decisions are made.",
      },
      {
        title: "Pilot then expand",
        description:
          "Ship to a first team or location, learn, then roll out with confidence instead of a big-bang cutover.",
      },
      {
        title: "Stabilise and hand over",
        description:
          "Harden production use, train owners, and establish the support rhythm for continuous improvement.",
      },
    ],
    faqs: [
      {
        question: "Can you work with our IT and security requirements?",
        answer:
          "Yes. We collaborate with your stakeholders on hosting, access control, logging, and vendor processes. Requirements are gathered early so they shape the plan.",
      },
      {
        question: "Do you replace our ERP or extend it?",
        answer:
          "Usually we extend and integrate. We build the workflows your ERP does not cover well, and keep systems of record clear to avoid duplicate truth.",
      },
      {
        question: "How do you handle change management?",
        answer:
          "Pilots, training, and role-based onboarding are part of delivery. Software that staff refuse to use is not a successful project.",
      },
      {
        question: "What about legacy data?",
        answer:
          "We plan migration deliberately—what moves, what archives, and how historical records remain accessible when needed.",
      },
      {
        question: "Is this only for large enterprises?",
        answer:
          "No. Growing operators with multi-location or multi-team complexity benefit as much as larger organisations. Fit is about process complexity, not headcount alone.",
      },
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    metaTitle: "Digital Transformation Services",
    metaDescription:
      "Practical digital transformation with Vedasynk—modern websites, software, brand systems, and growth programs sequenced to deliver outcomes without big-bang disruption.",
    heroHeadline: "Digital transformation that ships in useful phases",
    heroSubhead:
      "We modernise customer experience, operations, and brand presence in sequenced releases—so each step pays for the next with visible results.",
    overview: [
      "Transformation fails when it is treated as a single rewrite of everything. We help leadership pick the highest-leverage systems—customer-facing, internal, or both—and modernise them in phases with clear owners and success metrics.",
      "Because Vedasynk combines product engineering with brand and growth, transformation can include the website customers meet, the tools staff use, and the acquisition system that feeds the business.",
      "The result is not a slide strategy. It is a series of shipped improvements: faster journeys, cleaner operations, and a market presence that matches the company you are becoming.",
    ],
    outcomes: [
      {
        title: "A sequenced roadmap",
        description:
          "Priorities ordered by impact and dependency, so investment compounds instead of scattering.",
      },
      {
        title: "Modern customer journeys",
        description:
          "Websites, apps, and service flows that reduce friction and reflect a coherent brand.",
      },
      {
        title: "Stronger internal systems",
        description:
          "Operations tools and integrations that cut manual work and improve reliability.",
      },
      {
        title: "Measurable growth loops",
        description:
          "Analytics, SEO, and campaign foundations that turn digital presence into a learning system.",
      },
    ],
    includes: [
      "Digital maturity and opportunity assessment",
      "Roadmap and business-case framing",
      "Customer experience and brand modernisation",
      "Custom software and integrations",
      "Cloud and delivery modernisation",
      "SEO and digital marketing foundations",
      "Change support and training",
      "Ongoing optimisation partnership",
    ],
    process: [
      {
        title: "Assess",
        description:
          "Review channels, tools, data, and bottlenecks with stakeholders to find leverage points.",
      },
      {
        title: "Prioritise",
        description:
          "Build a phased roadmap with outcomes, owners, and what deliberately waits.",
      },
      {
        title: "Deliver waves",
        description:
          "Execute releases that combine product, brand, and growth work where they reinforce each other.",
      },
      {
        title: "Measure and reinvest",
        description:
          "Track results, retire obsolete processes, and fund the next wave from demonstrated value.",
      },
    ],
    faqs: [
      {
        question: "Is this a long consulting engagement?",
        answer:
          "We keep strategy tight and tied to delivery. Assessment produces a roadmap you can execute—with us or with your team—not a binder that sits unused.",
      },
      {
        question: "Can we start with only the website?",
        answer:
          "Yes. Many transformations start with a high-visibility customer surface, then expand into operations or growth systems once momentum exists.",
      },
      {
        question: "How do you avoid disrupting day-to-day business?",
        answer:
          "Phased rollouts, pilots, and parallel running where needed. We design cutovers around your operating calendar.",
      },
      {
        question: "Do you work across multiple vendors?",
        answer:
          "We can lead, collaborate, or integrate. Clear ownership of interfaces and decisions is agreed up front.",
      },
      {
        question: "What industries do you support?",
        answer:
          "We work across healthcare, retail, finance, logistics, education, hospitality, and more—adapting patterns to the regulatory and operational realities of each.",
      },
    ],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((solution) => solution.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return SOLUTIONS.map((solution) => solution.slug);
}
