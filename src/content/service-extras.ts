/** SEO + conversion extras layered onto each service detail page */

export type ServiceExtra = {
  primaryKeyword: string;
  secondaryKeywords: string[];
  idealFor: { title: string; description: string }[];
  outcomes: { title: string; description: string }[];
  whyNow: string[];
  deliverablesDetail: { title: string; description: string }[];
  relatedServiceSlugs: string[];
  seoBlocks: { heading: string; body: string }[];
};

export const SERVICE_EXTRAS: Record<string, ServiceExtra> = {
  "web-development": {
    primaryKeyword: "custom website development company Bangalore",
    secondaryKeywords: [
      "SEO-ready web development",
      "Next.js website agency",
      "business website design and development",
      "web application development",
      "conversion-focused websites",
    ],
    idealFor: [
      {
        title: "Startups launching a market-ready site",
        description:
          "Founders who need a fast, credible website that explains the product, builds trust, and converts visitors into demos or discovery calls.",
      },
      {
        title: "SMEs replacing outdated brochure sites",
        description:
          "Operators who want modern performance, mobile UX, and SEO structure without a bloated CMS they cannot maintain.",
      },
      {
        title: "Product teams shipping customer portals",
        description:
          "Companies that need authenticated web apps, dashboards, or self-serve flows alongside the marketing site.",
      },
    ],
    outcomes: [
      {
        title: "Higher conversion from organic and paid traffic",
        description:
          "Clear hierarchy, fast loads, and primary CTAs designed around the action that matters—book a call, buy, or start a trial.",
      },
      {
        title: "Search visibility that compounds",
        description:
          "Technical SEO foundations, metadata, internal linking, and content templates so service pages can rank over time.",
      },
      {
        title: "A site your team can iterate",
        description:
          "Component-based builds and documentation so copy, offers, and landing pages can evolve without a full rebuild.",
      },
    ],
    whyNow: [
      "Buyers research online before they talk to sales—your website is often the first sales rep.",
      "Core Web Vitals and mobile experience directly affect bounce and Google rankings.",
      "A weak site wastes every rupee spent on ads, SEO, and social.",
    ],
    deliverablesDetail: [
      {
        title: "Information architecture & wireframes",
        description:
          "Page map, navigation, and conversion paths approved before visual design and engineering.",
      },
      {
        title: "UI design system in browser-ready form",
        description:
          "Typography, spacing, components, and responsive states that match your brand.",
      },
      {
        title: "Production engineering & CMS hooks",
        description:
          "Next.js/React implementation, forms, analytics, and optional CMS for marketing updates.",
      },
      {
        title: "Launch checklist & SEO handoff",
        description:
          "Redirects, sitemap, robots, Open Graph, and measurement so launch day is measurable.",
      },
    ],
    relatedServiceSlugs: [
      "ui-ux-design",
      "seo",
      "branding",
      "maintenance-support",
    ],
    seoBlocks: [
      {
        heading: "Website development for startups and growing businesses",
        body: "Vedasynk Technologies builds custom websites and web applications for companies that need more than a template. From Bangalore we deliver SEO-ready marketing sites, product landing pages, and customer-facing web apps with clear conversion goals. Every build balances brand storytelling, technical performance, and maintainability so your site keeps working as campaigns and offers change.",
      },
      {
        heading: "What makes an SEO-friendly website?",
        body: "An SEO-friendly website needs clean URLs, semantic headings, fast LCP, mobile usability, structured data where useful, and content that answers real search intent. We implement those foundations during development—not as a bolted-on audit after launch—so organic traffic has a chance to convert.",
      },
    ],
  },
  "software-development": {
    primaryKeyword: "custom software development company",
    secondaryKeywords: [
      "bespoke software development",
      "business software solutions",
      "enterprise application development",
      "software development agency Bangalore",
    ],
    idealFor: [
      {
        title: "Operators digitising manual workflows",
        description:
          "Teams stuck in spreadsheets and WhatsApp threads who need reliable internal or customer-facing software.",
      },
      {
        title: "Product companies extending platforms",
        description:
          "CTOs who need senior engineering capacity for modules, integrations, and scalable backends.",
      },
      {
        title: "Founders validating a software product",
        description:
          "Early teams that need a production-minded MVP—not a disposable prototype.",
      },
    ],
    outcomes: [
      {
        title: "Software that maps to real operations",
        description:
          "We model roles, permissions, and workflows so the tool reduces work instead of creating shadow processes.",
      },
      {
        title: "Architecture you can grow",
        description:
          "APIs, data models, and environments designed for the next features—not a dead-end MVP.",
      },
      {
        title: "Delivery you can plan around",
        description:
          "Milestones, demos, and written scope so stakeholders see progress every week.",
      },
    ],
    whyNow: [
      "Manual processes break when you hire, expand locations, or raise volume.",
      "Off-the-shelf tools often force awkward workarounds that cost more than custom fit.",
      "Senior-led custom software reduces rework when requirements get real.",
    ],
    deliverablesDetail: [
      {
        title: "Discovery & domain modelling",
        description:
          "Workshops to capture workflows, edge cases, and success metrics.",
      },
      {
        title: "Technical blueprint",
        description:
          "Stack choice, data model, integrations, and security considerations.",
      },
      {
        title: "Iterative product delivery",
        description:
          "Sprint demos, QA, and staging environments for stakeholder review.",
      },
      {
        title: "Handover & support options",
        description:
          "Docs, training, and optional maintenance retainers after go-live.",
      },
    ],
    relatedServiceSlugs: [
      "api-development",
      "saas-development",
      "cloud-solutions",
      "mvp-development",
    ],
    seoBlocks: [
      {
        heading: "Custom software development for India and global teams",
        body: "As a Bangalore-based custom software development company, Vedasynk designs and builds applications that fit how your business actually operates. We combine product discovery, UI/UX, and engineering so software launches with clarity—and stays maintainable as you scale.",
      },
    ],
  },
  "mobile-app-development": {
    primaryKeyword: "mobile app development company Bangalore",
    secondaryKeywords: [
      "iOS and Android app development",
      "React Native app development",
      "Flutter app agency",
      "startup mobile MVP",
    ],
    idealFor: [
      {
        title: "Startups validating mobile demand",
        description:
          "Founders who need a credible app MVP with onboarding, core flows, and analytics—not every feature on a wishlist.",
      },
      {
        title: "Businesses extending customer experience",
        description:
          "Brands that want booking, loyalty, or commerce experiences in the pocket.",
      },
      {
        title: "Teams modernising field or ops apps",
        description:
          "Operators who need reliable offline-friendly or role-based mobile tools for staff.",
      },
    ],
    outcomes: [
      {
        title: "Store-ready quality",
        description:
          "Builds that respect App Store and Play policies, performance budgets, and crash monitoring.",
      },
      {
        title: "Faster learning loops",
        description:
          "Instrumentation and release cadence so you learn what users do after install.",
      },
      {
        title: "Shared codebase where it makes sense",
        description:
          "React Native or Flutter when cross-platform speed matters; native when it does not.",
      },
    ],
    whyNow: [
      "Customers expect mobile-first journeys for booking, payments, and support.",
      "A focused MVP beats a late, overbuilt v1 that never ships.",
      "App reviews and retention hinge on UX quality from day one.",
    ],
    deliverablesDetail: [
      {
        title: "Mobile UX flows",
        description: "Onboarding, navigation, and critical task flows validated early.",
      },
      {
        title: "Cross-platform or native build",
        description: "Implementation with APIs, auth, push, and payment hooks as needed.",
      },
      {
        title: "QA across devices",
        description: "Test plans for the devices your audience actually uses.",
      },
      {
        title: "Store submission support",
        description: "Assets, listings guidance, and release checklist.",
      },
    ],
    relatedServiceSlugs: [
      "ui-ux-design",
      "mvp-development",
      "api-development",
      "maintenance-support",
    ],
    seoBlocks: [
      {
        heading: "Mobile app development for startups and SMEs",
        body: "Vedasynk is a mobile app development partner in Bangalore building iOS and Android products with React Native and Flutter. We emphasise MVP scope, performance, and post-launch iteration so your app earns users—and feedback—without burning runway.",
      },
    ],
  },
  "ui-ux-design": {
    primaryKeyword: "UI UX design agency",
    secondaryKeywords: [
      "product design studio",
      "UX design for SaaS",
      "mobile app UI design",
      "user experience design Bangalore",
    ],
    idealFor: [
      {
        title: "SaaS and product teams",
        description:
          "Products with confusing onboarding, low activation, or inconsistent interfaces across screens.",
      },
      {
        title: "Founders before engineering sprint",
        description:
          "Teams that want validated flows before writing expensive code.",
      },
      {
        title: "Brands aligning web and app UX",
        description:
          "Companies that need one coherent experience across marketing site and product.",
      },
    ],
    outcomes: [
      {
        title: "Fewer drop-offs in critical flows",
        description:
          "Signup, checkout, booking, and dashboard tasks designed around real user goals.",
      },
      {
        title: "Design systems that speed engineering",
        description:
          "Reusable components and states that keep UI consistent as you ship features.",
      },
      {
        title: "Stakeholder alignment",
        description:
          "Prototypes people can click—so debates happen before development, not after.",
      },
    ],
    whyNow: [
      "Pretty interfaces without clear flows still lose users.",
      "Reworking UX after build is far more expensive than prototyping first.",
      "Conversion and support costs both track to experience quality.",
    ],
    deliverablesDetail: [
      {
        title: "Research & journey maps",
        description: "Personas, jobs-to-be-done, and pain points from real context.",
      },
      {
        title: "Wireframes & interactive prototypes",
        description: "Low-to-high fidelity flows for validation.",
      },
      {
        title: "Visual UI & design system",
        description: "Components, tokens, and responsive behaviours.",
      },
      {
        title: "Dev-ready specs",
        description: "Handoff that engineers can implement without guessing.",
      },
    ],
    relatedServiceSlugs: [
      "web-development",
      "mobile-app-development",
      "branding",
      "saas-development",
    ],
    seoBlocks: [
      {
        heading: "UI/UX design that supports conversion",
        body: "Our UI/UX design agency work focuses on clarity: how users understand value, complete tasks, and return. Based in Bangalore, Vedasynk designs for web and mobile products with the same outcome lens we use in engineering—measurable activation and fewer support tickets.",
      },
    ],
  },
  branding: {
    primaryKeyword: "branding agency Bangalore",
    secondaryKeywords: [
      "logo design company",
      "brand identity design",
      "startup branding",
      "visual identity system",
    ],
    idealFor: [
      {
        title: "Startups before or during launch",
        description:
          "Founders who need a credible identity for website, deck, and product UI.",
      },
      {
        title: "Companies refreshing outdated brands",
        description:
          "Teams whose look no longer matches product quality or market ambition.",
      },
      {
        title: "Marketing teams needing systems not one-offs",
        description:
          "Leaders who want guidelines that keep social, ads, and web consistent.",
      },
    ],
    outcomes: [
      {
        title: "A brand that looks premium quickly",
        description:
          "Logo, type, colour, and applications that feel intentional across touchpoints.",
      },
      {
        title: "Guidelines people actually use",
        description:
          "Practical rules for designers, marketers, and developers—not a 100-page shelf document.",
      },
      {
        title: "Alignment with product UX",
        description:
          "Brand and interface designed together so the product does not feel disconnected from marketing.",
      },
    ],
    whyNow: [
      "First impressions online happen in seconds—visual trust matters.",
      "Inconsistent assets slow campaigns and dilute recognition.",
      "Investors and customers both read brand as a proxy for quality.",
    ],
    deliverablesDetail: [
      {
        title: "Brand strategy inputs",
        description: "Positioning, personality, and audience cues that guide design.",
      },
      {
        title: "Logo & mark system",
        description: "Primary logo, lockups, and clear usage rules.",
      },
      {
        title: "Visual identity kit",
        description: "Colour, type, imagery direction, and pattern language.",
      },
      {
        title: "Go-to-market applications",
        description: "Website, social, and stationery starters as needed.",
      },
    ],
    relatedServiceSlugs: [
      "graphic-design",
      "ui-ux-design",
      "web-development",
      "digital-marketing",
    ],
    seoBlocks: [
      {
        heading: "Branding and logo design for startups and SMEs",
        body: "Vedasynk’s branding work pairs visual craft with business clarity. As a branding and logo design partner in Bangalore, we build identities that work on a website, in an app, and in social campaigns—so your brand scales with the product.",
      },
    ],
  },
  "graphic-design": {
    primaryKeyword: "graphic design agency",
    secondaryKeywords: [
      "marketing collateral design",
      "social media design",
      "pitch deck design",
      "creative design studio Bangalore",
    ],
    idealFor: [
      {
        title: "Teams shipping campaigns weekly",
        description:
          "Marketing leads who need on-brand creatives without starting from zero each time.",
      },
      {
        title: "Founders preparing decks and one-pagers",
        description:
          "Clear visual storytelling for investors, partners, or sales.",
      },
      {
        title: "Brands extending a new identity",
        description:
          "Companies that have a logo but need templates and campaign systems.",
      },
    ],
    outcomes: [
      {
        title: "Faster campaign production",
        description: "Templates and layouts that keep quality high under deadline pressure.",
      },
      {
        title: "Consistent visual language",
        description: "Assets that match your brand system across channels.",
      },
      {
        title: "Clearer message hierarchy",
        description: "Design that makes the offer obvious—not just decorative.",
      },
    ],
    whyNow: [
      "Social and ads reward clarity and consistency.",
      "Poor creative wastes media spend.",
      "Sales and fundraising materials need professional polish.",
    ],
    deliverablesDetail: [
      {
        title: "Campaign creative sets",
        description: "Ad and social variants sized for key channels.",
      },
      {
        title: "Deck & document design",
        description: "Pitch and sales narratives with strong hierarchy.",
      },
      {
        title: "Print & digital collateral",
        description: "Brochures, one-pagers, and event materials as needed.",
      },
      {
        title: "Template libraries",
        description: "Editable systems for ongoing in-house use.",
      },
    ],
    relatedServiceSlugs: ["branding", "digital-marketing", "ui-ux-design"],
    seoBlocks: [
      {
        heading: "Graphic design that supports growth",
        body: "Our graphic design services turn brand systems into usable campaign assets—social, ads, decks, and collateral—so your marketing team can publish faster without looking inconsistent.",
      },
    ],
  },
  seo: {
    primaryKeyword: "SEO company for startups",
    secondaryKeywords: [
      "SEO services Bangalore",
      "technical SEO agency",
      "organic growth strategy",
      "SEO for SaaS",
    ],
    idealFor: [
      {
        title: "Startups ready for organic growth",
        description:
          "Teams with a solid offer who need visibility beyond paid ads.",
      },
      {
        title: "Businesses relaunching websites",
        description:
          "Migrations that must preserve rankings and improve structure.",
      },
      {
        title: "SaaS and service companies",
        description:
          "Products that win on educational content and high-intent service pages.",
      },
    ],
    outcomes: [
      {
        title: "Technical foundations that crawl cleanly",
        description:
          "Indexation, speed, metadata, and structured content templates.",
      },
      {
        title: "Keyword strategy tied to revenue pages",
        description:
          "Prioritise terms that map to services you sell—not vanity traffic.",
      },
      {
        title: "Content systems that scale",
        description:
          "Briefs and page patterns your team can keep publishing.",
      },
    ],
    whyNow: [
      "Organic leads compound while ad costs rise.",
      "AI search still rewards clear, useful pages with strong structure.",
      "Technical issues silently block good content from ranking.",
    ],
    deliverablesDetail: [
      {
        title: "Technical SEO audit",
        description: "Crawl issues, CWV, indexation, and fix roadmap.",
      },
      {
        title: "Keyword & page strategy",
        description: "Priority clusters mapped to services and funnel stages.",
      },
      {
        title: "On-page implementation support",
        description: "Titles, internals links, schema, and content upgrades.",
      },
      {
        title: "Measurement & iteration",
        description: "Search Console/analytics reviews and next actions.",
      },
    ],
    relatedServiceSlugs: ["web-development", "digital-marketing", "branding"],
    seoBlocks: [
      {
        heading: "SEO services that focus on qualified organic leads",
        body: "Vedasynk’s SEO work is built for startups and growing businesses that need pipeline—not just rankings. We combine technical SEO, service-page architecture, and educational content so Bangalore and global audiences find you when intent is high.",
      },
    ],
  },
  "digital-marketing": {
    primaryKeyword: "digital marketing agency Bangalore",
    secondaryKeywords: [
      "performance marketing",
      "social media marketing",
      "landing page conversion",
      "startup digital marketing",
    ],
    idealFor: [
      {
        title: "Founders buying ads without converting",
        description:
          "Traffic is fine; the site and creative are not closing.",
      },
      {
        title: "Brands needing always-on social presence",
        description:
          "Teams that want consistent creative and messaging, not random posts.",
      },
      {
        title: "Product launches and demand gen",
        description:
          "Campaigns tied to a clear offer and landing experience.",
      },
    ],
    outcomes: [
      {
        title: "Campaigns connected to product reality",
        description:
          "Messaging matches what the product actually delivers.",
      },
      {
        title: "Landing pages that earn the click",
        description:
          "Creative and page design work as one system.",
      },
      {
        title: "Clear reporting",
        description:
          "Know which channels create conversations—not just impressions.",
      },
    ],
    whyNow: [
      "Paid media is expensive when experience quality is low.",
      "Brand and product must tell the same story.",
      "Organic and paid reinforce each other when messaging is consistent.",
    ],
    deliverablesDetail: [
      {
        title: "Channel & offer strategy",
        description: "Where to show up and what to promise.",
      },
      {
        title: "Creative & copy systems",
        description: "Ads, social, and email aligned to brand.",
      },
      {
        title: "Landing & funnel support",
        description: "Pages and CTAs engineered for conversion.",
      },
      {
        title: "Analytics & optimisation loops",
        description: "Weekly learning, not set-and-forget spend.",
      },
    ],
    relatedServiceSlugs: ["seo", "branding", "web-development", "graphic-design"],
    seoBlocks: [
      {
        heading: "Digital marketing for startups and SMEs",
        body: "As a digital marketing agency in Bangalore, Vedasynk connects paid and organic channels to strong websites and brand systems. We focus on conversion, creative quality, and honest reporting so growth spend creates pipeline.",
      },
    ],
  },
  "ai-solutions": {
    primaryKeyword: "AI solutions for business",
    secondaryKeywords: [
      "AI integration services",
      "custom AI workflows",
      "LLM product features",
      "AI consulting Bangalore",
    ],
    idealFor: [
      {
        title: "Product teams adding AI features",
        description:
          "Useful assistants, search, or automation—not novelty demos.",
      },
      {
        title: "Operators reducing repetitive work",
        description:
          "Document processing, support triage, or internal copilots with guardrails.",
      },
      {
        title: "Founders exploring AI-assisted MVPs",
        description:
          "Feasibility first, then a scoped build with clear success metrics.",
      },
    ],
    outcomes: [
      {
        title: "Practical AI, not science projects",
        description:
          "Use cases tied to time saved, conversion, or support deflection.",
      },
      {
        title: "Safe integration patterns",
        description:
          "Auth, data handling, and evaluation so outputs stay trustworthy.",
      },
      {
        title: "Product-ready UX",
        description:
          "AI features that fit existing workflows and interfaces.",
      },
    ],
    whyNow: [
      "Competitors are shipping AI-assisted experiences customers notice.",
      "Manual knowledge work is ripe for assisted automation.",
      "Poorly scoped AI burns budget without changing outcomes.",
    ],
    deliverablesDetail: [
      {
        title: "Use-case discovery",
        description: "Prioritise workflows where AI creates measurable value.",
      },
      {
        title: "Prototype & evaluation",
        description: "Proof of quality before full build.",
      },
      {
        title: "Production integration",
        description: "APIs, UI, monitoring, and fallback behaviour.",
      },
      {
        title: "Iteration plan",
        description: "Prompts, data, and UX improvements after launch.",
      },
    ],
    relatedServiceSlugs: [
      "software-development",
      "saas-development",
      "api-development",
    ],
    seoBlocks: [
      {
        heading: "AI solutions designed for real business outcomes",
        body: "Vedasynk builds AI-assisted product features and internal workflows with the same delivery discipline as our software work—clear scope, measurable success, and production quality from Bangalore to global clients.",
      },
    ],
  },
  "cloud-solutions": {
    primaryKeyword: "cloud solutions for startups",
    secondaryKeywords: [
      "AWS cloud consulting",
      "cloud migration services",
      "scalable cloud architecture",
      "cloud infrastructure Bangalore",
    ],
    idealFor: [
      {
        title: "Teams outgrowing single-server setups",
        description: "Need reliability, staging, and safer deploys.",
      },
      {
        title: "Products preparing for traffic spikes",
        description: "Architecture that scales without surprise downtime.",
      },
      {
        title: "Companies migrating legacy hosting",
        description: "Move with a plan for DNS, data, and rollback.",
      },
    ],
    outcomes: [
      {
        title: "Reliable environments",
        description: "Dev, staging, and production with clear promotion paths.",
      },
      {
        title: "Cost-aware architecture",
        description: "Right-sized services instead of over-provisioning.",
      },
      {
        title: "Observability basics",
        description: "Logs, alerts, and backups that catch issues early.",
      },
    ],
    whyNow: [
      "Downtime and slow recovery cost customers and reputation.",
      "Security expectations rise as you handle more user data.",
      "Good cloud foundations make every feature ship safer.",
    ],
    deliverablesDetail: [
      {
        title: "Architecture review",
        description: "Current state, risks, and target design.",
      },
      {
        title: "Infrastructure setup",
        description: "Cloud resources, networking, and secrets management.",
      },
      {
        title: "CI/CD alignment",
        description: "Deploy pipelines that match your team’s cadence.",
      },
      {
        title: "Runbooks",
        description: "Operational docs for incidents and routine tasks.",
      },
    ],
    relatedServiceSlugs: ["devops", "software-development", "maintenance-support"],
    seoBlocks: [
      {
        heading: "Cloud solutions that support product growth",
        body: "We design and implement cloud foundations on AWS, GCP, and Azure so startups and SMEs can deploy confidently—balancing performance, security, and cost as usage grows.",
      },
    ],
  },
  devops: {
    primaryKeyword: "DevOps services for startups",
    secondaryKeywords: [
      "CI/CD pipeline setup",
      "DevOps consulting",
      "release automation",
      "infrastructure as code",
    ],
    idealFor: [
      {
        title: "Teams shipping manually and nervously",
        description: "Need automated builds, tests, and safer releases.",
      },
      {
        title: "Growing engineering squads",
        description: "Shared pipelines and environments reduce ‘works on my machine’.",
      },
      {
        title: "Products with frequent releases",
        description: "DevOps that keeps pace with feature velocity.",
      },
    ],
    outcomes: [
      {
        title: "Faster, safer releases",
        description: "Automated checks catch issues before customers do.",
      },
      {
        title: "Repeatable environments",
        description: "Infrastructure patterns your team can trust.",
      },
      {
        title: "Less firefighting",
        description: "Monitoring and rollback paths reduce incident stress.",
      },
    ],
    whyNow: [
      "Manual deploys do not scale with team size or release frequency.",
      "Customers expect rapid fixes without long downtime.",
      "DevOps quality directly affects product velocity.",
    ],
    deliverablesDetail: [
      {
        title: "Pipeline design",
        description: "Build, test, and deploy stages for your stack.",
      },
      {
        title: "Environment automation",
        description: "Consistent staging and production setups.",
      },
      {
        title: "Monitoring hooks",
        description: "Alerts that matter, not noise.",
      },
      {
        title: "Team enablement",
        description: "Docs and practices so DevOps is owned, not mysterious.",
      },
    ],
    relatedServiceSlugs: ["cloud-solutions", "software-development", "maintenance-support"],
    seoBlocks: [
      {
        heading: "DevOps that keeps shipping sustainable",
        body: "Vedasynk sets up CI/CD, environments, and release practices so product teams ship often without gambling production. Practical DevOps for startups and growing engineering teams.",
      },
    ],
  },
  "mvp-development": {
    primaryKeyword: "MVP development company",
    secondaryKeywords: [
      "startup MVP development",
      "build MVP fast",
      "lean product development",
      "MVP agency Bangalore",
    ],
    idealFor: [
      {
        title: "Pre-seed and seed founders",
        description: "Need a credible product to learn from real users.",
      },
      {
        title: "Intrapreneurs inside larger companies",
        description: "Validate a new line of business without enterprise bloat.",
      },
      {
        title: "Teams stuck in endless planning",
        description: "Ready to cut scope and ship a spine that works.",
      },
    ],
    outcomes: [
      {
        title: "A shippable spine",
        description: "Core user journey live—not a slide deck.",
      },
      {
        title: "Learning instrumentation",
        description: "Analytics and feedback loops from day one.",
      },
      {
        title: "A roadmap after launch",
        description: "Know what to build next based on evidence.",
      },
    ],
    whyNow: [
      "Markets reward speed with judgment—not endless features.",
      "Investors and customers respond to working software.",
      "Scoped MVPs protect runway.",
    ],
    deliverablesDetail: [
      {
        title: "MVP scope workshop",
        description: "Ruthless prioritisation of the spine.",
      },
      {
        title: "Design + build in parallel",
        description: "Tight loops from prototype to production.",
      },
      {
        title: "Launch support",
        description: "Go-live checklist and early user ops.",
      },
      {
        title: "Insight review",
        description: "What to improve in the next cycle.",
      },
    ],
    relatedServiceSlugs: [
      "mobile-app-development",
      "saas-development",
      "ui-ux-design",
      "web-development",
    ],
    seoBlocks: [
      {
        heading: "MVP development for startups that need signal",
        body: "We help founders build MVPs that are production-minded: clear scope, solid UX, and enough engineering quality to learn—and continue—without a rewrite.",
      },
    ],
  },
  "saas-development": {
    primaryKeyword: "SaaS product development company",
    secondaryKeywords: [
      "SaaS development agency",
      "multi-tenant SaaS build",
      "SaaS MVP development",
      "subscription product engineering",
    ],
    idealFor: [
      {
        title: "Founders building subscription products",
        description: "Need auth, billing hooks, and admin foundations.",
      },
      {
        title: "Teams evolving tools into SaaS",
        description: "From internal software to customer-facing product.",
      },
      {
        title: "Startups preparing for scale",
        description: "Architecture that survives more tenants and features.",
      },
    ],
    outcomes: [
      {
        title: "Product foundations that last",
        description: "Tenancy, roles, billing integration points, and observability.",
      },
      {
        title: "Onboarding that activates users",
        description: "UX designed for time-to-value.",
      },
      {
        title: "A backlog that matches growth",
        description: "Priorities after launch based on usage.",
      },
    ],
    whyNow: [
      "SaaS buyers expect polish and reliability early.",
      "Rewriting tenancy later is expensive.",
      "Activation UX is as important as features.",
    ],
    deliverablesDetail: [
      {
        title: "Product architecture",
        description: "Data model, tenancy, and integration map.",
      },
      {
        title: "Core application build",
        description: "Customer app, admin, and essential workflows.",
      },
      {
        title: "Billing & auth integration",
        description: "Hooks for providers you choose.",
      },
      {
        title: "Launch & iterate",
        description: "Monitoring, feedback, and roadmap.",
      },
    ],
    relatedServiceSlugs: [
      "mvp-development",
      "ui-ux-design",
      "api-development",
      "cloud-solutions",
    ],
    seoBlocks: [
      {
        heading: "SaaS development from Bangalore to global markets",
        body: "Vedasynk builds SaaS products with the foundations investors and customers expect—clear UX, solid APIs, and cloud practices that support growth without constant firefighting.",
      },
    ],
  },
  "enterprise-software": {
    primaryKeyword: "enterprise software development",
    secondaryKeywords: [
      "enterprise application development",
      "workflow automation software",
      "custom enterprise systems",
      "secure business software",
    ],
    idealFor: [
      {
        title: "Organisations replacing legacy tools",
        description: "Need phased modernisation without big-bang risk.",
      },
      {
        title: "Teams with complex roles and approvals",
        description: "Permissions and auditability are non-negotiable.",
      },
      {
        title: "Operators integrating many systems",
        description: "APIs and workflows across vendors.",
      },
    ],
    outcomes: [
      {
        title: "Phased delivery with early value",
        description: "Ship useful modules while the programme continues.",
      },
      {
        title: "Governance-friendly design",
        description: "Roles, logs, and documentation stakeholders can trust.",
      },
      {
        title: "Integration-first thinking",
        description: "Software that fits the ecosystem you already run.",
      },
    ],
    whyNow: [
      "Legacy friction slows every team it touches.",
      "Security and compliance expectations keep rising.",
      "Phased custom software beats risky rip-and-replace.",
    ],
    deliverablesDetail: [
      {
        title: "Stakeholder discovery",
        description: "Map processes, risks, and success criteria.",
      },
      {
        title: "Solution architecture",
        description: "Modules, integrations, and security model.",
      },
      {
        title: "Incremental releases",
        description: "Pilot groups, feedback, then expansion.",
      },
      {
        title: "Training & support",
        description: "Adoption plans that stick.",
      },
    ],
    relatedServiceSlugs: [
      "software-development",
      "api-development",
      "cloud-solutions",
      "devops",
    ],
    seoBlocks: [
      {
        heading: "Enterprise software with startup-level urgency",
        body: "We deliver enterprise software programmes with clear milestones and senior involvement—modern UX and engineering without the opacity of oversized vendors.",
      },
    ],
  },
  "api-development": {
    primaryKeyword: "API development services",
    secondaryKeywords: [
      "REST API development",
      "GraphQL API design",
      "backend API agency",
      "integration development",
    ],
    idealFor: [
      {
        title: "Product teams needing a solid backend",
        description: "Mobile and web clients that share one API layer.",
      },
      {
        title: "Companies integrating vendors",
        description: "Payments, CRM, logistics, or identity providers.",
      },
      {
        title: "Platforms opening partner access",
        description: "Documented APIs with auth and rate limits.",
      },
    ],
    outcomes: [
      {
        title: "Clean contracts between systems",
        description: "Stable endpoints and versioning practices.",
      },
      {
        title: "Security by default",
        description: "Auth, validation, and least-privilege access.",
      },
      {
        title: "Docs developers can use",
        description: "Handoff that reduces integration friction.",
      },
    ],
    whyNow: [
      "Every product is a network of services.",
      "Poor APIs become the bottleneck for every client app.",
      "Integrations unlock revenue and automation.",
    ],
    deliverablesDetail: [
      {
        title: "API design & schema",
        description: "Resources, errors, and auth model.",
      },
      {
        title: "Implementation & tests",
        description: "Reliable handlers with automated checks.",
      },
      {
        title: "Documentation",
        description: "OpenAPI/reference docs for consumers.",
      },
      {
        title: "Monitoring",
        description: "Latency and error visibility after launch.",
      },
    ],
    relatedServiceSlugs: [
      "software-development",
      "saas-development",
      "mobile-app-development",
      "cloud-solutions",
    ],
    seoBlocks: [
      {
        heading: "API development for modern product teams",
        body: "Vedasynk designs and builds REST and GraphQL APIs that power web, mobile, and partner integrations—secure, documented, and ready for real traffic.",
      },
    ],
  },
  "maintenance-support": {
    primaryKeyword: "website and app maintenance services",
    secondaryKeywords: [
      "software maintenance company",
      "application support services",
      "post-launch product support",
      "website care plans",
    ],
    idealFor: [
      {
        title: "Teams after a successful launch",
        description: "Need steady improvements without assembling a full in-house squad yet.",
      },
      {
        title: "Companies inheriting fragile codebases",
        description: "Stabilise, document, then improve.",
      },
      {
        title: "Marketing sites that must stay fast and secure",
        description: "Updates, uptime, and small experiments continuously.",
      },
    ],
    outcomes: [
      {
        title: "Fewer surprises in production",
        description: "Monitoring, patches, and responsive fixes.",
      },
      {
        title: "Continuous product improvement",
        description: "A backlog of high-ROI changes each month.",
      },
      {
        title: "Knowledge continuity",
        description: "Docs and communication so you are never locked out of your own product.",
      },
    ],
    whyNow: [
      "Launch is the start of learning—not the end of investment.",
      "Security patches and dependency updates are ongoing.",
      "Small weekly improvements beat rare big redesigns.",
    ],
    deliverablesDetail: [
      {
        title: "Care plan & SLAs",
        description: "Response expectations and included hours.",
      },
      {
        title: "Monitoring & upkeep",
        description: "Health checks, updates, and backups as agreed.",
      },
      {
        title: "Iteration sprints",
        description: "Feature and UX improvements on a cadence.",
      },
      {
        title: "Reporting",
        description: "What changed, what broke, what is next.",
      },
    ],
    relatedServiceSlugs: [
      "web-development",
      "devops",
      "seo",
      "software-development",
    ],
    seoBlocks: [
      {
        heading: "Maintenance and support that protect momentum",
        body: "After launch, Vedasynk keeps websites and applications healthy—security, performance, and product iteration—so your team can focus on customers while software stays production-ready.",
      },
    ],
  },
};

export function getServiceExtra(slug: string): ServiceExtra | undefined {
  return SERVICE_EXTRAS[slug];
}
