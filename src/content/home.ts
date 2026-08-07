import type { FAQ, ProcessStep } from "./types";

export type StickySectionItem = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export const HOME_FAQS: FAQ[] = [
  {
    question: "What does Vedasynk Technologies build?",
    answer:
      "Vedasynk is a Bangalore software and digital agency that builds custom websites, web applications, mobile apps, brand identities, SEO, and digital marketing systems for startups and growing businesses in India and worldwide.",
  },
  {
    question: "How do you work with early-stage founders and SMEs?",
    answer:
      "We start with a discovery call to clarify the business outcome, audience, budget, and timeline. Then we propose a scoped plan—often an MVP, website, or brand-plus-growth package—with clear milestones so you know what ships when.",
  },
  {
    question: "Where is Vedasynk based, and who do you work with?",
    answer:
      "We are headquartered in Bangalore and deliver to clients across India, the Middle East, the US, and Europe. Typical partners include startup founders, CTOs, product managers, marketing leads, and operators modernising customer-facing software.",
  },
  {
    question: "What is your typical engagement length?",
    answer:
      "Marketing websites and brand refreshes often run four to eight weeks. Mobile or web MVPs and SaaS foundations commonly span eight to sixteen weeks. Larger programs are phased so you get production value early without locking into an oversized first release.",
  },
  {
    question: "Do you handle design, engineering, and digital marketing together?",
    answer:
      "Yes. Srikanth leads product and engineering (websites, web apps, mobile). Manikayam leads branding, logo design, social, and digital marketing. That means interface, identity, and acquisition can move as one system—not three disconnected vendors.",
  },
  {
    question: "How do we get started and request a proposal?",
    answer:
      "Book a discovery call, message us on WhatsApp, or email sales@vedasynk.com with your goal, timeline, and any existing materials. We respond with clarifying questions, a recommended approach, and next steps—usually a written proposal within a few business days.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "We map the business problem, target users, competitors, and success metrics so your custom software or brand project serves a measurable outcome—not a feature wish list.",
  },
  {
    title: "Define",
    description:
      "We lock scope, information architecture, tech stack, and milestones into a written plan. Founders and stakeholders see timeline, ownership, and what “done” means before build starts.",
  },
  {
    title: "Design",
    description:
      "UI/UX flows, interface systems, and brand direction are validated early—so engineering implements an approved experience without expensive redesign mid-sprint.",
  },
  {
    title: "Build",
    description:
      "We ship in short cycles with demos you can click. Quality checks cover performance, security, accessibility, SEO foundations, and maintainable code for the next phase of growth.",
  },
  {
    title: "Launch",
    description:
      "We harden for production, support go-live, connect analytics, and hand over documentation so your team—or ours—can operate and iterate with confidence.",
  },
  {
    title: "Improve",
    description:
      "After launch we review conversion data, user friction, and SEO signals, then prioritise the next highest-ROI improvements across product, brand, and growth.",
  },
];

/** Sticky section 2 — SEO service cluster / what we deliver */
export const DELIVERY_ITEMS: StickySectionItem[] = [
  {
    title: "Custom website & web app development",
    description:
      "Fast, SEO-ready marketing sites and product web applications built for conversion—clear messaging, Core Web Vitals performance, and structures that help you rank for the searches your buyers already use.",
    href: "/services/web-development",
    linkLabel: "Web development",
  },
  {
    title: "Mobile app development for iOS & Android",
    description:
      "Native-quality React Native and Flutter apps with onboarding, payments, and admin tools scoped as an MVP first—so startups validate demand before over-building.",
    href: "/services/mobile-app-development",
    linkLabel: "Mobile apps",
  },
  {
    title: "UI/UX design that reduces drop-off",
    description:
      "Product flows and interface systems designed around real tasks: signup, checkout, booking, dashboards. Better UX means fewer support tickets and higher activation.",
    href: "/services/ui-ux-design",
    linkLabel: "UI/UX design",
  },
  {
    title: "Branding, logo design & visual identity",
    description:
      "Brand systems that look premium and stay usable—logo, type, colour, and guidelines so your website, app, and social presence feel like one company.",
    href: "/services/branding",
    linkLabel: "Branding",
  },
  {
    title: "SEO & digital marketing that compounds",
    description:
      "Technical SEO, content structure, landing pages, and campaign creative aligned to the product—so paid and organic traffic convert instead of bouncing.",
    href: "/services/seo",
    linkLabel: "SEO services",
  },
  {
    title: "MVP, SaaS & API-backed products",
    description:
      "From first release to scalable SaaS foundations: APIs, auth, billing hooks, and cloud deployment patterns that keep your product investor- and customer-ready.",
    href: "/solutions/mvp-development",
    linkLabel: "MVP solutions",
  },
];

/** Sticky section 3 — conversion path / how to hire us */
export const ENGAGE_ITEMS: StickySectionItem[] = [
  {
    title: "Book a free discovery call",
    description:
      "A 30-minute conversation to clarify goals, audience, budget range, and timeline. No pitch theatre—honest advice on whether Vedasynk is the right software and brand partner for this phase.",
    href: "/contact#book",
    linkLabel: "Book a call",
  },
  {
    title: "Share context (NDA-friendly)",
    description:
      "Send decks, wireframes, competitor links, or rough notes to sales@vedasynk.com. We work under NDA when needed and treat your roadmap and metrics as confidential by default.",
    href: "/contact",
    linkLabel: "Contact sales",
  },
  {
    title: "Receive a scoped proposal",
    description:
      "You get a written plan: deliverables, milestones, stack recommendation, estimated timeline, and investment range—clear enough for founders, CTOs, and finance to approve quickly.",
  },
  {
    title: "Kick off with a shared roadmap",
    description:
      "We align channels (Slack/email), sprint rhythm, and decision owners. Weekly demos keep stakeholders close so feedback lands before it becomes expensive rework.",
  },
  {
    title: "Launch, measure, and grow",
    description:
      "Go live with analytics, SEO baselines, and a post-launch backlog. Many clients continue with maintenance, feature sprints, or digital marketing so growth compounds after ship day.",
    href: "/services/maintenance-support",
    linkLabel: "Maintenance & support",
  },
  {
    title: "Prefer WhatsApp? Message us now",
    description:
      "Reach the Bangalore team on WhatsApp for quick questions about website cost, app MVP scope, branding packages, or SEO for startups—then move to a discovery call when you are ready.",
    href: "https://wa.me/919036227317",
    linkLabel: "WhatsApp Vedasynk",
  },
];

export const DELIVERY_SECTION = {
  eyebrow: "Capabilities",
  title: "What we build to win customers and search",
  description:
    "Vedasynk combines custom software development, UI/UX, branding, and digital marketing—so startups and SMEs get one accountable partner from Bangalore to global markets.",
  ctaLabel: "Explore all services",
  ctaHref: "/services",
  items: DELIVERY_ITEMS,
} as const;

export const ENGAGE_SECTION = {
  eyebrow: "Engagement",
  title: "How to start—and convert interest into a shipped project",
  description:
    "A simple path from first conversation to production. Built for busy founders who need clarity on scope, cost drivers, and next steps without agency runaround.",
  ctaLabel: "Book a discovery call",
  ctaHref: "/contact#book",
  items: ENGAGE_ITEMS,
} as const;

export const TECH_STACK_GROUPS: { name: string; items: string[] }[] = [
  {
    name: "Web & apps",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "React Native",
      "Flutter",
    ],
  },
  {
    name: "Data & APIs",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "GraphQL",
      "REST",
      "Redis",
    ],
  },
  {
    name: "Cloud & delivery",
    items: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "CI/CD",
      "Vercel",
    ],
  },
  {
    name: "Design & growth",
    items: [
      "Figma",
      "Brand systems",
      "SEO",
      "Analytics",
      "Paid media",
      "Content ops",
    ],
  },
];

export const WHY_POINTS: { title: string; description: string }[] = [
  {
    title: "Product and brand in one team",
    description:
      "Engineering and brand leadership sit together—so your website, app, and marketing identity reinforce each other instead of looking like three different vendors shipped them.",
  },
  {
    title: "Scope that ships and ranks",
    description:
      "We phase delivery for early launches and bake in SEO, analytics, and performance so organic traffic and conversion are design goals—not afterthoughts.",
  },
  {
    title: "Founder-level attention from Bangalore",
    description:
      "As a focused studio, client work is led by the people who own outcomes. You get senior judgment on architecture, UX, and go-to-market—not a rotating junior bench.",
  },
  {
    title: "Built for the next funding or scale-up phase",
    description:
      "Clean codebases, design systems, and measurement so you can hire, raise capital, or expand markets without throwing away the foundation.",
  },
];

export const TRUST_ITEMS: string[] = [
  "Bangalore HQ · global clients & India startups",
  "Custom software · apps · websites · brands",
  "SEO & digital marketing aligned to product",
  "Clear milestones and written scope",
  "NDA-friendly · startup-friendly clarity",
  "Direct access to engineering and brand leads",
];

export const MANIFESTO_LINES = [
  "Ship software people trust.",
  "Design brands people remember.",
  "Grow traffic that converts.",
] as const;

export const AUDIENCE_CARDS = [
  {
    title: "Startup founders",
    description:
      "Need an MVP, launch website, and brand story before the next investor or customer conversation. We scope lean, ship fast, and keep quality investor-ready.",
    href: "/industries/startups",
    keywords: ["MVP development", "Startup website", "Pitch-ready brand"],
  },
  {
    title: "CTOs & product leads",
    description:
      "Extend your team with senior engineering for web apps, APIs, mobile, and cloud—without losing architectural control or documentation.",
    href: "/services/software-development",
    keywords: ["Custom software", "SaaS build", "API development"],
  },
  {
    title: "Marketing & brand teams",
    description:
      "Pair high-converting websites with logo systems, social creative, SEO, and campaigns so paid and organic spend actually pays back.",
    href: "/services/digital-marketing",
    keywords: ["SEO agency", "Brand identity", "Landing pages"],
  },
  {
    title: "SMEs & operators",
    description:
      "Modernise booking, operations, or customer portals with software that staff will actually use—plus clear training and support after launch.",
    href: "/solutions/digital-transformation",
    keywords: ["Business apps", "Digital transformation", "Bangalore agency"],
  },
] as const;

/** Honest operating signals — not invented revenue claims */
export const GROWTH_SIGNALS = [
  { value: 6, suffix: "+", label: "Years founder delivery experience" },
  { value: 16, suffix: "", label: "Dedicated service lines" },
  { value: 12, suffix: "", label: "Industry playbooks" },
  { value: 1, suffix: "", label: "Accountable studio from Bangalore" },
] as const;

export const KEYWORD_CHIPS = [
  {
    label: "Web development Bangalore",
    title: "Website development that ranks and converts",
    description:
      "Custom marketing sites and web apps with SEO structure, Core Web Vitals focus, and clear CTAs—so organic visitors book calls instead of bouncing.",
    href: "/services/web-development",
    cta: "Explore web development",
  },
  {
    label: "Mobile app MVP",
    title: "Mobile app development scoped as an MVP",
    description:
      "iOS and Android apps with the minimum feature set to validate demand—onboarding, core flows, and analytics—before you over-invest.",
    href: "/services/mobile-app-development",
    cta: "Explore mobile apps",
  },
  {
    label: "SEO for startups",
    title: "SEO and content systems for early-stage growth",
    description:
      "Technical SEO, service pages, and educational content that help founders earn qualified organic leads over time—not keyword stuffing.",
    href: "/services/seo",
    cta: "Explore SEO services",
  },
  {
    label: "Branding & logo design",
    title: "Brand identity that looks premium on day one",
    description:
      "Logo, type, colour, and guidelines so your product UI, website, and social presence feel like one confident company.",
    href: "/services/branding",
    cta: "Explore branding",
  },
  {
    label: "SaaS product build",
    title: "SaaS product development from foundation to launch",
    description:
      "Auth, billing hooks, dashboards, and cloud deployment patterns that keep your SaaS ready for customers and the next hire.",
    href: "/solutions/saas-product-development",
    cta: "Explore SaaS solutions",
  },
  {
    label: "Digital marketing",
    title: "Digital marketing aligned to the product",
    description:
      "Landing pages, creative, and campaigns connected to what you actually ship—so acquisition and product experience reinforce each other.",
    href: "/services/digital-marketing",
    cta: "Explore digital marketing",
  },
] as const;
