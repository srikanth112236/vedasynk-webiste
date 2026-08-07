import type { FAQ, ProcessStep } from "./types";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  overview: string[];
  benefits: { title: string; description: string }[];
  features: string[];
  process: ProcessStep[];
  techStack: string[];
  faqs: FAQ[];
  relatedPortfolioSlugs: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    metaTitle: "Custom Web Development Services",
    metaDescription:
      "Vedasynk builds fast, SEO-ready websites and web applications for startups and growing businesses—Bangalore-based, production-focused delivery.",
    heroHeadline: "Websites and web apps that load fast and convert clearly",
    heroSubhead:
      "From marketing sites to product interfaces, we engineer experiences that support your brand, search visibility, and business goals.",
    overview: [
      "A website should do a job: explain the offer, earn trust, and move someone to the next step. We build custom sites and web applications with that outcome in mind—not template clutter or animation for its own sake.",
      "Our stack favours modern, maintainable frameworks with strong performance and SEO foundations. Design and engineering stay aligned so the finished product matches what was approved—and stays editable as your story evolves.",
      "Whether you need a launch site for a startup or a complex customer portal, we scope phases so value ships early and technical quality holds up under real traffic.",
    ],
    benefits: [
      {
        title: "Performance that protects conversion",
        description:
          "Fast loads and stable layouts reduce bounce and keep paid and organic traffic from leaking.",
      },
      {
        title: "SEO-ready structure",
        description:
          "Clean information architecture, metadata, and technical foundations so content can rank and be shared.",
      },
      {
        title: "Brand-faithful implementation",
        description:
          "Pixels and interaction match the system your brand team approved—without surprise redesigns in code.",
      },
      {
        title: "Built to maintain",
        description:
          "Clear components and documentation so your team or ours can iterate without fear.",
      },
    ],
    features: [
      "Marketing and product websites",
      "Web applications and customer portals",
      "CMS and content workflows",
      "Responsive, accessible interfaces",
      "Analytics and conversion tracking",
      "Hosting and deployment setup",
      "Performance and Core Web Vitals focus",
      "Ongoing iteration and support",
    ],
    process: [
      {
        title: "Discover goals and audiences",
        description:
          "Clarify who the site must convince and which actions count as success.",
      },
      {
        title: "Structure and design",
        description:
          "Map pages, content hierarchy, and interface direction before build.",
      },
      {
        title: "Build and integrate",
        description:
          "Implement with modern frameworks, CMS hooks, and third-party tools as needed.",
      },
      {
        title: "Launch and refine",
        description:
          "Ship with monitoring, then improve based on analytics and feedback.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Vercel",
      "AWS",
    ],
    faqs: [
      {
        question: "Do you use WordPress or modern frameworks?",
        answer:
          "We typically build with Next.js and React for performance and flexibility. When WordPress or another CMS is the right operational fit, we recommend it deliberately—not by default.",
      },
      {
        question: "Will our site be mobile-friendly?",
        answer:
          "Yes. Responsive design is baseline. We design and test for the devices your audience actually uses.",
      },
      {
        question: "Can you migrate an existing site?",
        answer:
          "Yes. We plan redirects, content migration, and SEO preservation so a relaunch does not erase hard-won visibility.",
      },
      {
        question: "Do you provide hosting?",
        answer:
          "We set up and deploy to platforms such as Vercel, AWS, or your preferred cloud. Ongoing hosting costs remain with the platform unless otherwise agreed.",
      },
      {
        question: "How long does a marketing site take?",
        answer:
          "Many marketing sites ship in four to eight weeks depending on content readiness, integrations, and design scope.",
      },
    ],
    relatedPortfolioSlugs: [
      "saas-analytics-dashboard",
      "boutique-brand-identity",
      "ecommerce-growth-system",
      "clinic-booking-platform",
    ],
  },
  {
    slug: "software-development",
    title: "Custom Software Development",
    shortTitle: "Software Development",
    metaTitle: "Custom Software Development",
    metaDescription:
      "Custom software development from Vedasynk—business applications, portals, and platforms designed around your workflows and growth stage.",
    heroHeadline: "Software shaped around your operations—not the other way around",
    heroSubhead:
      "We design and build custom applications that replace fragile manual processes with reliable workflows your teams will actually use.",
    overview: [
      "Off-the-shelf tools stop fitting when your process is the advantage. We build custom software for the workflows, roles, and integrations that generic products force you to work around.",
      "Engagements start with how work really moves today—exceptions included—then translate into systems with clear states, permissions, and reporting. Delivery is phased so each release removes a concrete operational pain.",
      "From Bangalore, we partner with startups and growing operators who need accountable engineering without enterprise theatre.",
    ],
    benefits: [
      {
        title: "Fit to your process",
        description:
          "Software follows your operating model instead of forcing awkward workarounds.",
      },
      {
        title: "Fewer manual handoffs",
        description:
          "Validated workflows and integrations cut re-entry errors and status chasing.",
      },
      {
        title: "Visibility for leaders",
        description:
          "Practical reporting on throughput and exceptions without drowning teams in dashboards.",
      },
      {
        title: "Owned and extensible",
        description:
          "You own the codebase and can extend it as the business changes.",
      },
    ],
    features: [
      "Business process applications",
      "Internal tools and admin consoles",
      "Customer and partner portals",
      "Workflow automation",
      "System integrations",
      "Role-based access control",
      "Reporting and exports",
      "Maintenance and iteration",
    ],
    process: [
      {
        title: "Map workflows",
        description:
          "Document roles, handoffs, and pain points with the people who do the work.",
      },
      {
        title: "Design the system",
        description:
          "Define data models, permissions, and interfaces before heavy implementation.",
      },
      {
        title: "Build in slices",
        description:
          "Ship usable vertical slices, gather feedback, and expand coverage.",
      },
      {
        title: "Stabilise and support",
        description:
          "Harden for production use, train owners, and set a maintenance rhythm.",
      },
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "REST APIs",
    ],
    faqs: [
      {
        question: "When should we customise vs buy?",
        answer:
          "Buy when a mature product fits 80% of needs. Customise when the workflow is differentiating, integrations are awkward, or licensing will cost more than building over time.",
      },
      {
        question: "Can you integrate with our existing tools?",
        answer:
          "Yes. APIs, webhooks, and staged sync patterns are a standard part of our software work.",
      },
      {
        question: "Who owns the intellectual property?",
        answer:
          "You own the custom code and designs delivered under the engagement, unless open-source components require their standard licenses.",
      },
      {
        question: "How do you estimate timeline?",
        answer:
          "After discovery we propose phased milestones with acceptance criteria. Complexity of integrations and data migration usually drives duration.",
      },
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes. Retainers and on-demand support are available for bug fixes, small enhancements, and monitoring.",
      },
    ],
    relatedPortfolioSlugs: [
      "clinic-booking-platform",
      "logistics-ops-app",
      "saas-analytics-dashboard",
      "fintech-wallet-mvp",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    metaTitle: "Mobile App Development",
    metaDescription:
      "iOS and Android app development from Vedasynk—consumer and field apps with clear UX, solid APIs, and store-ready delivery.",
    heroHeadline: "Mobile apps people understand on the first open",
    heroSubhead:
      "We design and ship iOS and Android experiences for customers and field teams—focused journeys, reliable backends, and launch discipline.",
    overview: [
      "Mobile success depends on clarity under distraction. We design apps around a few critical jobs, then engineer them for performance, offline realities where needed, and store review requirements.",
      "Cross-platform frameworks help many products move faster without maintaining two full native teams. When native is justified, we say so. Backend, admin, and analytics are planned with the app—not bolted on after.",
      "From fintech wallets to logistics field tools, we keep scope honest so your first release earns usage instead of collecting dust.",
    ],
    benefits: [
      {
        title: "Journey-first UX",
        description:
          "Onboarding and core flows designed for one-handed, interrupted use.",
      },
      {
        title: "Faster cross-platform delivery",
        description:
          "Shared codebases where appropriate so iOS and Android stay in sync.",
      },
      {
        title: "API and admin included",
        description:
          "The app is only half the product—backends and operator tools ship with it.",
      },
      {
        title: "Store-ready process",
        description:
          "Builds, metadata, and review prep handled as part of launch—not a scramble.",
      },
    ],
    features: [
      "iOS and Android applications",
      "Cross-platform React Native or Flutter builds",
      "Consumer and field-force apps",
      "Push notifications and deep links",
      "Offline-tolerant patterns where needed",
      "Backend API development",
      "App Store and Play Console launch support",
      "Post-launch iteration",
    ],
    process: [
      {
        title: "Define the mobile job",
        description:
          "Agree which tasks belong on mobile versus web, and what success looks like.",
      },
      {
        title: "Prototype key flows",
        description:
          "Validate navigation and critical screens before full engineering investment.",
      },
      {
        title: "Build and harden",
        description:
          "Implement app and APIs with testing for devices, edge cases, and performance.",
      },
      {
        title: "Release and learn",
        description:
          "Submit to stores, monitor crashes and funnels, then iterate deliberately.",
      },
    ],
    techStack: [
      "React Native",
      "Flutter",
      "TypeScript",
      "Node.js",
      "Firebase",
      "PostgreSQL",
      "AWS",
      "Fastlane",
    ],
    faqs: [
      {
        question: "Native or cross-platform?",
        answer:
          "Most business apps ship well on React Native or Flutter. We recommend native when platform-specific capabilities or performance requirements demand it.",
      },
      {
        question: "Do you handle both App Store and Play Store?",
        answer:
          "Yes. We support listing setup, builds, and submission. Developer accounts remain under your organisation.",
      },
      {
        question: "Can you update an existing app?",
        answer:
          "We can extend healthy codebases or plan a rebuild when the current app cannot safely support the roadmap.",
      },
      {
        question: "How long does an MVP app take?",
        answer:
          "Focused mobile MVPs often take ten to sixteen weeks including API work, depending on complexity and compliance needs.",
      },
      {
        question: "Do you build admin panels too?",
        answer:
          "Almost always. Operators need a way to manage users, content, and exceptions without engineering help.",
      },
    ],
    relatedPortfolioSlugs: [
      "fintech-wallet-mvp",
      "logistics-ops-app",
      "clinic-booking-platform",
      "saas-analytics-dashboard",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    metaTitle: "UI/UX Design Services",
    metaDescription:
      "UI/UX design from Vedasynk—product flows, interface systems, and usable experiences that engineering can implement without guesswork.",
    heroHeadline: "Interfaces that make complex products feel obvious",
    heroSubhead:
      "We design flows, screens, and design systems that reduce friction for users and give engineers a clear path to build.",
    overview: [
      "Good UI is not decoration. It is decision design: what to show, when to ask, and how to recover from errors. We map journeys first, then craft interfaces that support those journeys with clarity and restraint.",
      "Working alongside engineering and brand leadership means designs are implementable and on-message. Deliverables include flows, high-fidelity screens, and components that can grow into a system—not a folder of disconnected mockups.",
      "Whether you are shaping an MVP or refining a mature SaaS product, we focus on time-to-value and fewer support moments.",
    ],
    benefits: [
      {
        title: "Lower drop-off",
        description:
          "Clearer onboarding and task flows keep users moving toward completion.",
      },
      {
        title: "Faster engineering",
        description:
          "Specified components and states reduce back-and-forth during build.",
      },
      {
        title: "Consistent product feel",
        description:
          "Shared patterns across screens make the product easier to learn.",
      },
      {
        title: "Aligned with brand",
        description:
          "Visual language reinforces identity without sacrificing usability.",
      },
    ],
    features: [
      "User journey and flow design",
      "Wireframes and high-fidelity UI",
      "Design systems and component libraries",
      "Mobile and web product design",
      "Usability-focused iteration",
      "Developer-ready specs in Figma",
      "Prototype demos for stakeholders",
      "Design QA during implementation",
    ],
    process: [
      {
        title: "Understand users and jobs",
        description:
          "Clarify who uses the product and which tasks must succeed.",
      },
      {
        title: "Structure flows",
        description:
          "Map steps, states, and edge cases before visual polish.",
      },
      {
        title: "Design and systemise",
        description:
          "Produce interface designs and reusable components.",
      },
      {
        title: "Support build",
        description:
          "Partner through implementation so the shipped UI matches intent.",
      },
    ],
    techStack: [
      "Figma",
      "FigJam",
      "Prototype tools",
      "Design tokens",
      "Accessibility checklists",
      "UserTesting / interviews",
    ],
    faqs: [
      {
        question: "Do you only design, or also build?",
        answer:
          "Either. Many clients engage us for design-through-build so handoff friction disappears. Design-only is available when you have an internal engineering team.",
      },
      {
        question: "Will we get a design system?",
        answer:
          "For products with ongoing releases, yes—at least a lightweight component foundation. One-page marketing work may need less.",
      },
      {
        question: "How do you handle feedback rounds?",
        answer:
          "We plan structured review cycles with clear decision owners. Endless open-ended revisions are replaced with prioritised feedback.",
      },
      {
        question: "Can you redesign part of an existing product?",
        answer:
          "Yes. Modular redesigns of onboarding, checkout, or dashboards are common and often higher ROI than a full rewrite.",
      },
      {
        question: "Do you conduct user research?",
        answer:
          "We include lightweight interviews and usability checks sized to the engagement. Deeper research programs can be scoped when needed.",
      },
    ],
    relatedPortfolioSlugs: [
      "saas-analytics-dashboard",
      "fintech-wallet-mvp",
      "clinic-booking-platform",
      "boutique-brand-identity",
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    shortTitle: "Branding",
    metaTitle: "Brand Identity & Branding Services",
    metaDescription:
      "Brand identity and systems from Vedasynk—positioning, visual identity, and guidelines that keep product, web, and campaigns coherent.",
    heroHeadline: "Brand systems that make every touchpoint feel intentional",
    heroSubhead:
      "We help startups and growing companies define who they are, how they look, and how they speak—so marketing and product stop drifting apart.",
    overview: [
      "Brand is the promise people remember when you are not in the room. We build identity systems that start with positioning and extend into logo, type, colour, imagery, and voice—practical enough for real campaigns, not shelfware PDFs.",
      "Led by Manikayam with product collaboration from Srikanth, branding at Vedasynk is designed to work on websites, apps, packaging, and social without reinvention every week.",
      "The goal is recognition and clarity: a company that looks as capable as it is.",
    ],
    benefits: [
      {
        title: "Coherent presence",
        description:
          "One visual and verbal system across web, product, and campaigns.",
      },
      {
        title: "Faster creative production",
        description:
          "Templates and rules that help teams ship on-brand assets quickly.",
      },
      {
        title: "Stronger first impressions",
        description:
          "Identity that earns trust with customers, partners, and investors.",
      },
      {
        title: "Aligned with product",
        description:
          "Brand decisions informed by how the product actually works and who it serves.",
      },
    ],
    features: [
      "Positioning and brand narrative",
      "Logo and visual identity",
      "Colour, type, and imagery direction",
      "Brand guidelines",
      "Social and launch kits",
      "Packaging direction where relevant",
      "Website visual system collaboration",
      "Partner and vendor handover packs",
    ],
    process: [
      {
        title: "Discover",
        description:
          "Understand audience, competitors, and the promise you must own.",
      },
      {
        title: "Define",
        description:
          "Lock positioning, personality, and messaging pillars.",
      },
      {
        title: "Design identity",
        description:
          "Develop logo and visual system options, then refine the chosen direction.",
      },
      {
        title: "Systemise and apply",
        description:
          "Deliver guidelines and first applications across priority touchpoints.",
      },
    ],
    techStack: [
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Notion guidelines",
      "Brand asset libraries",
    ],
    faqs: [
      {
        question: "Do you only design logos?",
        answer:
          "Logo work is part of a broader identity system. A mark without usage rules rarely survives real marketing pressure.",
      },
      {
        question: "Can you rebrand an existing company?",
        answer:
          "Yes. We assess what equity to keep, what to evolve, and how to roll out without confusing your audience.",
      },
      {
        question: "Will this include the website?",
        answer:
          "Brand systems often launch with a site refresh or rebuild so the first public application is correct.",
      },
      {
        question: "How involved do founders need to be?",
        answer:
          "Founders should join key decision moments. Day-to-day exploration is facilitated so your time stays focused.",
      },
      {
        question: "Do you provide source files?",
        answer:
          "Yes. You receive editable source files and exported assets suitable for web, print, and partners.",
      },
    ],
    relatedPortfolioSlugs: [
      "boutique-brand-identity",
      "ecommerce-growth-system",
      "saas-analytics-dashboard",
      "fintech-wallet-mvp",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    shortTitle: "Graphic Design",
    metaTitle: "Graphic Design Services",
    metaDescription:
      "Graphic design for campaigns, social, pitch decks, and collateral from Vedasynk—on-brand creative that supports launch and growth.",
    heroHeadline: "Creative assets that carry your message without noise",
    heroSubhead:
      "From social systems to decks and campaign visuals, we produce graphic design that stays on-brand and ready to publish.",
    overview: [
      "Teams lose time when every campaign reinvents layout and tone. We design graphic systems and assets that make consistent creative production possible—social templates, pitch materials, ads, and collateral.",
      "Design quality matters most when it clarifies the offer. We prioritise hierarchy, readability, and brand fidelity over decorative effects that age quickly.",
      "Graphic design engagements work best alongside a clear brand foundation; if you need both, we can sequence identity then asset production.",
    ],
    benefits: [
      {
        title: "Consistent campaigns",
        description:
          "Templates and rules that keep every channel recognisably yours.",
      },
      {
        title: "Faster turnaround",
        description:
          "Reusable structures so weekly creative does not start from a blank canvas.",
      },
      {
        title: "Clearer offers",
        description:
          "Layouts that make the message and next step obvious at a glance.",
      },
      {
        title: "Cross-format readiness",
        description:
          "Assets prepared for social, ads, print, and presentations as needed.",
      },
    ],
    features: [
      "Social media design systems",
      "Ad creative and campaign visuals",
      "Pitch and sales decks",
      "Brochures and one-pagers",
      "Event and launch creatives",
      "Packaging support graphics",
      "Presentation templates",
      "Ongoing creative retainers",
    ],
    process: [
      {
        title: "Brief and priorities",
        description:
          "Align on channels, messages, and the formats you need most.",
      },
      {
        title: "Concept",
        description:
          "Explore directions that fit brand and performance needs.",
      },
      {
        title: "Produce",
        description:
          "Deliver final assets and templates with organised file structure.",
      },
      {
        title: "Iterate",
        description:
          "Refine based on campaign learnings and upcoming launches.",
      },
    ],
    techStack: [
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "After Effects (motion as needed)",
    ],
    faqs: [
      {
        question: "Can you work within our existing brand?",
        answer:
          "Yes. Bring guidelines or samples and we will extend them consistently. If guidelines are weak, we may recommend a short brand cleanup first.",
      },
      {
        question: "Do you offer monthly creative retainers?",
        answer:
          "Yes. Retainers work well for social calendars, always-on ads, and recurring launch needs.",
      },
      {
        question: "Can you design for paid ads specifically?",
        answer:
          "Yes. We design with platform sizes, hook clarity, and test variants in mind.",
      },
      {
        question: "What about motion graphics?",
        answer:
          "Short motion for social and ads can be included when scoped. Longer film production is typically partnered.",
      },
      {
        question: "How do file handoffs work?",
        answer:
          "You receive organised source files and exports named for channel and usage.",
      },
    ],
    relatedPortfolioSlugs: [
      "boutique-brand-identity",
      "ecommerce-growth-system",
      "saas-analytics-dashboard",
      "fintech-wallet-mvp",
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    shortTitle: "SEO",
    metaTitle: "SEO Services",
    metaDescription:
      "Technical and content SEO from Vedasynk—fix architecture, on-page optimisation, and measurement that grow qualified organic traffic.",
    heroHeadline: "SEO that compounds—technical foundations plus content that earns intent",
    heroSubhead:
      "We improve how search engines understand your site and how humans find answers—then measure what turns into pipeline.",
    overview: [
      "SEO is not a list of tricks. It is the discipline of making your strongest pages discoverable for the queries that matter, on a site that is fast and clear. We combine technical fixes, information architecture, and content planning tied to business outcomes.",
      "Because we also build websites, SEO recommendations are implementable. You are not left with an audit nobody can execute.",
      "Programs are paced for compounding gains—honest baselines, prioritised work, and reporting leadership can read.",
    ],
    benefits: [
      {
        title: "Sustainable acquisition",
        description:
          "Organic visibility that reduces over-reliance on paid media over time.",
      },
      {
        title: "Technical clarity",
        description:
          "Crawlability, speed, and structure issues fixed at the source.",
      },
      {
        title: "Content with intent",
        description:
          "Topics chosen for buyer and user jobs—not vanity keyword lists.",
      },
      {
        title: "Actionable reporting",
        description:
          "Progress tracked against rankings, traffic quality, and conversions.",
      },
    ],
    features: [
      "Technical SEO audits and fixes",
      "Information architecture improvements",
      "On-page optimisation",
      "Content strategy and briefs",
      "Internal linking systems",
      "Search Console and analytics setup",
      "Local SEO where relevant",
      "Ongoing performance programs",
    ],
    process: [
      {
        title: "Audit and baseline",
        description:
          "Assess technical health, content gaps, and current organic performance.",
      },
      {
        title: "Prioritise",
        description:
          "Build a roadmap ordered by impact and implementation effort.",
      },
      {
        title: "Implement",
        description:
          "Ship technical fixes, page improvements, and content in cycles.",
      },
      {
        title: "Measure and expand",
        description:
          "Review results monthly and double down on what produces qualified demand.",
      },
    ],
    techStack: [
      "Google Search Console",
      "Google Analytics 4",
      "Screaming Frog",
      "Ahrefs / Semrush",
      "Next.js SEO patterns",
      "Schema markup",
    ],
    faqs: [
      {
        question: "How long until SEO results show?",
        answer:
          "Some technical wins appear quickly; meaningful organic growth usually takes three to six months of consistent work depending on competition and site history.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No ethical SEO practice can guarantee positions. We commit to sound work, transparent reporting, and prioritisation toward business outcomes.",
      },
      {
        question: "Can you work on a site you did not build?",
        answer:
          "Yes. We audit and implement within your stack, or partner with your developers with clear tickets.",
      },
      {
        question: "Is content writing included?",
        answer:
          "Strategy and briefs are standard. Full content production can be included or coordinated with your writers.",
      },
      {
        question: "Do you handle international SEO?",
        answer:
          "We can plan hreflang and market structures when multi-region is in scope. Complexity should be justified by real market intent.",
      },
    ],
    relatedPortfolioSlugs: [
      "ecommerce-growth-system",
      "boutique-brand-identity",
      "saas-analytics-dashboard",
      "clinic-booking-platform",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    metaTitle: "Digital Marketing Services",
    metaDescription:
      "Digital marketing from Vedasynk—paid media, content systems, and conversion-focused campaigns aligned with brand and product reality.",
    heroHeadline: "Growth programs where creative, tracking, and offers finally align",
    heroSubhead:
      "We run digital marketing as a learning system—clear measurement, disciplined tests, and messaging that matches what you actually deliver.",
    overview: [
      "Paid spend without coherent creative and landing experiences burns budget. We connect campaign strategy, creative, landing pages, and analytics so every rupee teaches you something useful.",
      "Brand and performance are not opposing forces here. Manikayam’s growth leadership keeps campaigns on-message while we optimise for efficient acquisition and conversion.",
      "Engagements start with funnel clarity: who you want, what action matters, and what the data must prove.",
    ],
    benefits: [
      {
        title: "Efficient acquisition",
        description:
          "Budget directed to channels and creatives that produce qualified outcomes.",
      },
      {
        title: "Coherent creative",
        description:
          "Ads and pages that sound like one company and test hypotheses deliberately.",
      },
      {
        title: "Clean measurement",
        description:
          "Tracking that leadership trusts enough to make spend decisions.",
      },
      {
        title: "Compounding learnings",
        description:
          "Weekly loops that improve offers, audiences, and conversion paths.",
      },
    ],
    features: [
      "Channel strategy and media planning",
      "Google and Meta ads management",
      "Landing page collaboration",
      "Creative direction and variants",
      "Analytics and conversion tracking",
      "Funnel reporting",
      "CRM and lead handoff hygiene",
      "Retainer-based growth programs",
    ],
    process: [
      {
        title: "Diagnose the funnel",
        description:
          "Review tracking, offers, creatives, and conversion paths for leaks.",
      },
      {
        title: "Set the system",
        description:
          "Align messaging, audiences, budgets, and success metrics.",
      },
      {
        title: "Launch and test",
        description:
          "Run structured experiments across creative, audience, and landing variables.",
      },
      {
        title: "Optimise",
        description:
          "Reallocate spend and refine journeys based on measured results.",
      },
    ],
    techStack: [
      "Google Ads",
      "Meta Ads",
      "Google Analytics 4",
      "Tag Manager",
      "Search Console",
      "Looker Studio",
    ],
    faqs: [
      {
        question: "Which channels do you manage?",
        answer:
          "Most often Google and Meta. Other channels are added when audience behaviour and budget justify them.",
      },
      {
        question: "Do we need a new website first?",
        answer:
          "Not always, but weak landing experiences cap performance. We will tell you honestly if site work should come first or run in parallel.",
      },
      {
        question: "How do you report results?",
        answer:
          "On an agreed cadence with metrics tied to pipeline or revenue proxies—not vanity reach alone.",
      },
      {
        question: "Can you work with our in-house marketer?",
        answer:
          "Yes. Many clients keep strategy or media with us while internals own content or community—or the reverse.",
      },
      {
        question: "Is there a minimum budget?",
        answer:
          "Media budgets need enough volume to learn. We discuss minimums during discovery based on your market and offer.",
      },
    ],
    relatedPortfolioSlugs: [
      "ecommerce-growth-system",
      "boutique-brand-identity",
      "saas-analytics-dashboard",
      "fintech-wallet-mvp",
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortTitle: "AI Solutions",
    metaTitle: "AI Solutions & Applied AI Development",
    metaDescription:
      "Practical AI solutions from Vedasynk—assistants, automation, and product features grounded in your data, workflows, and measurable outcomes.",
    heroHeadline: "AI features that earn their place in the workflow",
    heroSubhead:
      "We apply AI where it removes real work or unlocks product value—with evaluation, guardrails, and integration into systems people already use.",
    overview: [
      "AI projects fail when they start with a model instead of a job to be done. We identify tasks where assistance, classification, or generation measurably helps—then build features with clear success criteria and human oversight where it matters.",
      "Typical work includes support assistants grounded in your knowledge base, internal automation, document processing, and productised AI features inside SaaS applications.",
      "We favour pragmatic architecture: retrieval where needed, evaluation harnesses, cost controls, and privacy-aware data handling.",
    ],
    benefits: [
      {
        title: "Time back for teams",
        description:
          "Automate repetitive reading, drafting, and routing work with oversight.",
      },
      {
        title: "Product differentiation",
        description:
          "Ship AI features customers notice because they solve a concrete pain.",
      },
      {
        title: "Grounded outputs",
        description:
          "Retrieval and evaluation patterns that reduce hallucinated answers.",
      },
      {
        title: "Operable systems",
        description:
          "Logging, cost monitoring, and fallback paths for production use.",
      },
    ],
    features: [
      "Use-case discovery and feasibility",
      "Knowledge assistants and chat interfaces",
      "Document and data extraction workflows",
      "AI features inside web and mobile products",
      "Prompt and evaluation harnesses",
      "Integration with existing tools",
      "Privacy and access controls",
      "Iteration based on real usage",
    ],
    process: [
      {
        title: "Find the lever",
        description:
          "Identify high-frequency tasks where AI quality can be measured.",
      },
      {
        title: "Prototype quickly",
        description:
          "Validate quality and UX on real samples before deep integration.",
      },
      {
        title: "Integrate and guard",
        description:
          "Connect data sources, permissions, monitoring, and human review paths.",
      },
      {
        title: "Improve with usage",
        description:
          "Tune retrieval, prompts, and workflows from production feedback.",
      },
    ],
    techStack: [
      "OpenAI / Anthropic APIs",
      "LangChain / custom orchestration",
      "Vector databases",
      "Python / Node.js",
      "Next.js",
      "AWS / GCP",
    ],
    faqs: [
      {
        question: "Do you train custom models?",
        answer:
          "Most business value comes from well-integrated foundation models with retrieval and fine evaluation. Custom training is considered only when data and ROI justify it.",
      },
      {
        question: "How do you handle sensitive data?",
        answer:
          "We design access controls, redaction where needed, and vendor choices aligned to your policy. Data handling is agreed before implementation.",
      },
      {
        question: "Can AI be added to our existing product?",
        answer:
          "Yes. Embedding assistants or automation into current apps is a common engagement.",
      },
      {
        question: "What does success look like?",
        answer:
          "We define metrics up front—deflection rate, time saved, accuracy on a test set, or conversion lift—not vague ‘AI transformation’ claims.",
      },
      {
        question: "Will this replace our team?",
        answer:
          "We design AI to assist people and remove drudgery. Governance and escalation to humans remain part of serious deployments.",
      },
    ],
    relatedPortfolioSlugs: [
      "saas-analytics-dashboard",
      "clinic-booking-platform",
      "logistics-ops-app",
      "fintech-wallet-mvp",
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortTitle: "Cloud Solutions",
    metaTitle: "Cloud Solutions & Architecture",
    metaDescription:
      "Cloud architecture and migration support from Vedasynk—AWS, GCP, and Azure setups that are secure, observable, and sized for your stage.",
    heroHeadline: "Cloud foundations that stay calm under growth",
    heroSubhead:
      "We design and implement cloud environments that are secure, cost-aware, and ready for the way your product actually deploys.",
    overview: [
      "Cloud sprawl and fragile staging environments slow teams down. We set up pragmatic architectures—environments, networking basics, secrets, and observability—matched to your stage rather than copied from a hyperscale playbook.",
      "Whether you are launching an MVP or cleaning up an inherited setup, we focus on reliability, deploy confidence, and costs you can explain.",
      "Cloud work often pairs with DevOps and application delivery so infrastructure serves the product release rhythm.",
    ],
    benefits: [
      {
        title: "Reliable environments",
        description:
          "Dev, staging, and production that behave predictably for the team.",
      },
      {
        title: "Security basics done right",
        description:
          "Identity, secrets, and network patterns that reduce avoidable risk.",
      },
      {
        title: "Cost visibility",
        description:
          "Architectures and tagging that make spend understandable as you scale.",
      },
      {
        title: "Room to grow",
        description:
          "Designs that can expand without forcing a panic migration next year.",
      },
    ],
    features: [
      "Cloud architecture design",
      "AWS, GCP, and Azure implementation",
      "Environment and networking setup",
      "Managed databases and storage",
      "Secrets and identity configuration",
      "Monitoring and alerting foundations",
      "Migration and cutover planning",
      "Cost review and rightsizing",
    ],
    process: [
      {
        title: "Assess",
        description:
          "Review current hosting, risks, costs, and release needs.",
      },
      {
        title: "Design",
        description:
          "Propose a target architecture with clear trade-offs.",
      },
      {
        title: "Implement",
        description:
          "Build infrastructure as code where practical and document ownership.",
      },
      {
        title: "Handover",
        description:
          "Train your team on operations basics and escalation paths.",
      },
    ],
    techStack: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Terraform",
      "Docker",
      "PostgreSQL",
      "Cloudflare",
      "Vercel",
    ],
    faqs: [
      {
        question: "Which cloud provider should we choose?",
        answer:
          "It depends on your team skills, required services, and existing commitments. We help you choose deliberately rather than by habit.",
      },
      {
        question: "Do you manage cloud for us ongoing?",
        answer:
          "We can retain for operations support or hand over to your team with documentation. Depth of managed service is agreed in scope.",
      },
      {
        question: "Can you migrate with minimal downtime?",
        answer:
          "We plan cutovers with rehearsal, rollback, and communication. Downtime windows depend on system coupling.",
      },
      {
        question: "Is Kubernetes required?",
        answer:
          "Not for most early products. We recommend complexity only when the operational need is real.",
      },
      {
        question: "How do you think about security?",
        answer:
          "Least privilege, secrets management, encrypted transit, backups, and audit-friendly logs are baseline. Deeper compliance is phased to requirements.",
      },
    ],
    relatedPortfolioSlugs: [
      "saas-analytics-dashboard",
      "fintech-wallet-mvp",
      "logistics-ops-app",
      "clinic-booking-platform",
    ],
  },
  {
    slug: "devops",
    title: "DevOps",
    shortTitle: "DevOps",
    metaTitle: "DevOps & CI/CD Services",
    metaDescription:
      "DevOps and CI/CD from Vedasynk—automated pipelines, safer releases, and observability so your team ships with confidence.",
    heroHeadline: "Release engineering that makes shipping routine",
    heroSubhead:
      "We set up CI/CD, environments, and monitoring so deployments are frequent, reversible, and visible—not weekend heroics.",
    overview: [
      "Slow or scary releases tax every product team. We implement pipelines, quality gates, and operational visibility that match your stack and team size.",
      "DevOps at Vedasynk is practical: automate what hurts, document ownership, and avoid tooling museums. The measure of success is how calmly you can ship on a Tuesday.",
      "Engagements often accompany application builds so delivery habits are correct from the first production release.",
    ],
    benefits: [
      {
        title: "Faster feedback",
        description:
          "Automated checks catch issues before customers do.",
      },
      {
        title: "Safer deploys",
        description:
          "Repeatable releases with rollback paths reduce downtime risk.",
      },
      {
        title: "Shared visibility",
        description:
          "Logs, metrics, and alerts that the team can actually use.",
      },
      {
        title: "Less manual toil",
        description:
          "Engineers spend more time on product work and less on tribal release steps.",
      },
    ],
    features: [
      "CI/CD pipeline design",
      "Automated test and lint gates",
      "Containerisation where useful",
      "Environment promotion flows",
      "Infrastructure as code support",
      "Monitoring and alerting setup",
      "Incident basics and runbooks",
      "Developer experience improvements",
    ],
    process: [
      {
        title: "Map the release path",
        description:
          "Document how code moves today and where failures hide.",
      },
      {
        title: "Automate the spine",
        description:
          "Build pipelines for build, test, and deploy across environments.",
      },
      {
        title: "Add observability",
        description:
          "Instrument applications and infrastructure with actionable alerts.",
      },
      {
        title: "Codify habits",
        description:
          "Leave runbooks and ownership clear so the system survives handover.",
      },
    ],
    techStack: [
      "GitHub Actions",
      "GitLab CI",
      "Docker",
      "Terraform",
      "Prometheus / Grafana",
      "Sentry",
      "AWS / GCP",
      "Vercel",
    ],
    faqs: [
      {
        question: "We are a small team—is DevOps overkill?",
        answer:
          "A lightweight pipeline and basic monitoring are usually high leverage even for small teams. We size the system to your stage.",
      },
      {
        question: "Do you rewrite our whole infrastructure?",
        answer:
          "Only when needed. Many engagements improve the existing path with focused automation and guardrails.",
      },
      {
        question: "Can you help with mobile release automation?",
        answer:
          "Yes. Store build and distribution automation can be part of mobile engagements.",
      },
      {
        question: "What about security scanning?",
        answer:
          "Dependency and basic secret scanning can be added to pipelines as a standard quality gate.",
      },
      {
        question: "Will our developers need to change how they work?",
        answer:
          "Slightly—toward smaller, more frequent merges. We design the workflow with the team, not against it.",
      },
    ],
    relatedPortfolioSlugs: [
      "logistics-ops-app",
      "saas-analytics-dashboard",
      "fintech-wallet-mvp",
      "clinic-booking-platform",
    ],
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    shortTitle: "MVP Development",
    metaTitle: "MVP Development Services",
    metaDescription:
      "MVP development for startups from Vedasynk—scoped builds that prove demand with production-quality core journeys and a clear next roadmap.",
    heroHeadline: "MVPs that answer a real question in market",
    heroSubhead:
      "We help founders cut scope ruthlessly and ship a credible first product users can try—and investors can believe.",
    overview: [
      "An MVP is a learning instrument. We define the smallest set of journeys that prove your bet, then build them well enough for real use—not a disposable prototype that collapses on contact with customers.",
      "Product engineering and brand can move together so your first release looks intentional. You get instrumentation, documentation, and a backlog for what was deliberately deferred.",
      "Bangalore-based and founder-led, we stay close to outcomes through launch.",
    ],
    benefits: [
      {
        title: "Speed with integrity",
        description:
          "Ship in weeks with quality on the paths that matter most.",
      },
      {
        title: "Evidence for decisions",
        description:
          "Analytics and feedback loops that inform the next build or pivot.",
      },
      {
        title: "Investor-ready polish",
        description:
          "An experience you can demo without explaining away broken edges.",
      },
      {
        title: "Keepable foundation",
        description:
          "Architecture chosen so success does not force an immediate rewrite.",
      },
    ],
    features: [
      "Outcome and scope workshops",
      "Core journey UX",
      "Web or mobile MVP build",
      "API and data foundations",
      "Auth and basic admin",
      "Launch analytics",
      "Store or production launch support",
      "Post-MVP roadmap",
    ],
    process: [
      {
        title: "Frame the bet",
        description:
          "Write down the user, the proof action, and hard constraints.",
      },
      {
        title: "Cut scope",
        description:
          "Agree non-goals and the spine journeys for release one.",
      },
      {
        title: "Design and build",
        description:
          "Deliver in short cycles with demos stakeholders can use.",
      },
      {
        title: "Launch and learn",
        description:
          "Go live, capture signal, and sequence the next slice.",
      },
    ],
    techStack: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Vercel",
      "Stripe",
    ],
    faqs: [
      {
        question: "What if we are not sure about the feature set?",
        answer:
          "That is normal. Discovery exists to decide what proves the bet. We will challenge nice-to-haves that delay learning.",
      },
      {
        question: "Can you build mobile and web MVP together?",
        answer:
          "Sometimes. Often one surface is enough for the first release. We recommend based on where users already are.",
      },
      {
        question: "Do you help with pitch materials?",
        answer:
          "Brand and deck support can be added so product and narrative match.",
      },
      {
        question: "Who maintains the MVP after launch?",
        answer:
          "You can retain us, hire internally with our handover, or pause until the next phase.",
      },
      {
        question: "Typical budget range?",
        answer:
          "It varies with platforms and integrations. After discovery we provide a fixed-scope proposal for phase one.",
      },
    ],
    relatedPortfolioSlugs: [
      "fintech-wallet-mvp",
      "saas-analytics-dashboard",
      "clinic-booking-platform",
      "logistics-ops-app",
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    shortTitle: "SaaS Development",
    metaTitle: "SaaS Development Services",
    metaDescription:
      "SaaS development from Vedasynk—multi-tenant products, onboarding UX, billing-ready foundations, and cloud delivery for B2B software teams.",
    heroHeadline: "SaaS products built for adoption, tenancy, and steady release",
    heroSubhead:
      "We engineer multi-tenant applications with clear UX, operable admin tools, and architecture that can grow with your customer base.",
    overview: [
      "SaaS is a long game of onboarding, reliability, and packaging. We build the foundations—tenancy, roles, APIs, billing hooks, and observability—so you are not inventing them under churn pressure later.",
      "Design and engineering collaborate so complex B2B workflows remain learnable. Marketing site and product narrative can be aligned when go-to-market is part of the engagement.",
      "Greenfield products and major module expansions are both in scope.",
    ],
    benefits: [
      {
        title: "Multi-tenant done properly",
        description:
          "Data boundaries and permissions designed for real accounts.",
      },
      {
        title: "Faster time-to-value",
        description:
          "Onboarding and empty states that help customers succeed early.",
      },
      {
        title: "Operable in production",
        description:
          "Admin tools and monitoring so support is not a database safari.",
      },
      {
        title: "Packaging flexibility",
        description:
          "Entitlement-friendly structure for plan experiments as you grow.",
      },
    ],
    features: [
      "Product discovery and roadmap shaping",
      "Multi-tenant architecture",
      "Web app and API development",
      "Billing and entitlement integrations",
      "Admin consoles",
      "Analytics modules",
      "CI/CD and cloud deployment",
      "Ongoing product partnership",
    ],
    process: [
      {
        title: "Frame the product",
        description:
          "Clarify ICP, core jobs, and the first release that drives retention.",
      },
      {
        title: "Design the platform",
        description:
          "Lock tenancy, permissions, and integration boundaries.",
      },
      {
        title: "Ship slices",
        description:
          "Deliver vertical features users can adopt, then expand.",
      },
      {
        title: "Harden operations",
        description:
          "Strengthen reliability, support tools, and release habits.",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "AWS",
      "Docker",
    ],
    faqs: [
      {
        question: "Can you take over an existing SaaS codebase?",
        answer:
          "Yes, when the codebase is healthy enough to extend. If not, we propose a staged remediation or module rewrite plan.",
      },
      {
        question: "Do you build marketing sites for SaaS too?",
        answer:
          "Frequently. Product and site perform better when messaging is shared.",
      },
      {
        question: "How do you handle multi-tenancy?",
        answer:
          "We choose tenancy patterns based on isolation needs, scale, and compliance—documented and tested, not improvised.",
      },
      {
        question: "Can you integrate SSO?",
        answer:
          "Yes. SSO and enterprise auth patterns can be included when your ICP requires them.",
      },
      {
        question: "What does ongoing partnership look like?",
        answer:
          "Phased roadmaps or retainers for feature delivery, reliability work, and product design support.",
      },
    ],
    relatedPortfolioSlugs: [
      "saas-analytics-dashboard",
      "fintech-wallet-mvp",
      "clinic-booking-platform",
      "ecommerce-growth-system",
    ],
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    shortTitle: "Enterprise Software",
    metaTitle: "Enterprise Software Development",
    metaDescription:
      "Enterprise software from Vedasynk—operations platforms, internal tools, and integrations that modernise how multi-team organisations work.",
    heroHeadline: "Enterprise systems staff adopt because they match real work",
    heroSubhead:
      "We build operations software, portals, and integrations through phased rollouts—starting with the teams who feel the pain most.",
    overview: [
      "Enterprise software succeeds when it respects exceptions, approvals, and the systems already in place. We map real workflows first, then design applications that reduce friction without demanding an overnight process fantasy.",
      "Typical deliveries include operations platforms, partner portals, field tools, and integration layers. Pilots come before wide rollout so change sticks.",
      "Governance, access control, and documentation are part of the product—not an appendix.",
    ],
    benefits: [
      {
        title: "Operational reliability",
        description:
          "Shared status and history replace chat-and-sheet coordination.",
      },
      {
        title: "Controlled rollout",
        description:
          "Pilots de-risk adoption before organisation-wide change.",
      },
      {
        title: "Integration without chaos",
        description:
          "Clear systems of record and API boundaries between tools.",
      },
      {
        title: "Sustainable ownership",
        description:
          "Training and access design so internal teams can run the system.",
      },
    ],
    features: [
      "Workflow discovery",
      "Custom enterprise applications",
      "Role and permission systems",
      "Legacy and ERP integrations",
      "Data migration planning",
      "Audit-friendly logging",
      "Training and change support",
      "Maintenance programs",
    ],
    process: [
      {
        title: "Discover operations",
        description:
          "Shadow workflows and document pain with frontline and leadership input.",
      },
      {
        title: "Design the operating model",
        description:
          "Define states, roles, exceptions, and integration points.",
      },
      {
        title: "Pilot",
        description:
          "Ship to a first team or site and refine based on use.",
      },
      {
        title: "Expand and stabilise",
        description:
          "Roll out broadly with training, monitoring, and support.",
      },
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Azure AD / SSO",
      "REST / event integrations",
    ],
    faqs: [
      {
        question: "Can you work inside our security review process?",
        answer:
          "Yes. We gather requirements early and collaborate with IT and security stakeholders on hosting, access, and logging.",
      },
      {
        question: "Do you replace ERP systems?",
        answer:
          "Usually we extend them. We build the workflows ERP tools handle poorly and keep the system of record explicit.",
      },
      {
        question: "How long do enterprise projects take?",
        answer:
          "Pilots often land in a few months; organisation-wide programs are phased. We avoid big-bang timelines that hide risk.",
      },
      {
        question: "What about change management?",
        answer:
          "Training, champions, and feedback loops are part of delivery. Adoption is a success criterion.",
      },
      {
        question: "Is this only for large companies?",
        answer:
          "Growing multi-location operators benefit as much as large enterprises. Fit is about process complexity.",
      },
    ],
    relatedPortfolioSlugs: [
      "logistics-ops-app",
      "clinic-booking-platform",
      "saas-analytics-dashboard",
      "fintech-wallet-mvp",
    ],
  },
  {
    slug: "api-development",
    title: "API Development",
    shortTitle: "API Development",
    metaTitle: "API Development Services",
    metaDescription:
      "API design and development from Vedasynk—secure REST and GraphQL interfaces, integrations, and documentation for products and partners.",
    heroHeadline: "APIs that are clear to consume and safe to operate",
    heroSubhead:
      "We design and build APIs for products, mobile clients, and partner integrations—with contracts, auth, and docs that teams can rely on.",
    overview: [
      "A good API is a product surface. We design resource models, auth, versioning, and error behaviour so web, mobile, and partners integrate without reverse-engineering tribal knowledge.",
      "Work ranges from greenfield backends for MVPs to integration layers between systems that were never meant to talk. Performance, observability, and documentation are part of done.",
      "If you are exposing partner APIs, we also help with developer experience basics: keys, scopes, and readable references.",
    ],
    benefits: [
      {
        title: "Cleaner client development",
        description:
          "Stable contracts that unblock web and mobile teams.",
      },
      {
        title: "Safer integrations",
        description:
          "Auth, validation, and rate patterns that reduce incident risk.",
      },
      {
        title: "Faster partner onboarding",
        description:
          "Docs and predictable behaviour that cut integration time.",
      },
      {
        title: "Operable backends",
        description:
          "Logging and metrics that make production issues diagnosable.",
      },
    ],
    features: [
      "API design and specification",
      "REST and GraphQL implementation",
      "Authentication and authorisation",
      "Webhook systems",
      "Third-party integrations",
      "Rate limiting and abuse basics",
      "OpenAPI documentation",
      "Performance and caching strategies",
    ],
    process: [
      {
        title: "Model the domain",
        description:
          "Define resources, events, and consumer needs before coding endpoints.",
      },
      {
        title: "Specify contracts",
        description:
          "Agree schemas, errors, and auth with client teams.",
      },
      {
        title: "Implement and test",
        description:
          "Build with automated tests, validation, and observability.",
      },
      {
        title: "Document and hand over",
        description:
          "Deliver references, examples, and operational runbooks.",
      },
    ],
    techStack: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "OpenAPI",
      "AWS API Gateway",
      "Docker",
    ],
    faqs: [
      {
        question: "REST or GraphQL?",
        answer:
          "REST fits many product and integration cases. GraphQL helps when clients need flexible querying. We choose based on consumers, not fashion.",
      },
      {
        question: "Can you wrap a legacy system?",
        answer:
          "Yes. Anti-corruption APIs that present a clean interface over legacy systems are a common pattern.",
      },
      {
        question: "Do you provide API documentation?",
        answer:
          "Yes. OpenAPI references and usage examples are part of delivery.",
      },
      {
        question: "How do you handle versioning?",
        answer:
          "We plan versioning and deprecation deliberately so clients are not surprised by breaking changes.",
      },
      {
        question: "Can APIs support mobile offline sync?",
        answer:
          "We can design endpoints and conflict strategies that support offline-tolerant clients when that is a requirement.",
      },
    ],
    relatedPortfolioSlugs: [
      "fintech-wallet-mvp",
      "logistics-ops-app",
      "saas-analytics-dashboard",
      "clinic-booking-platform",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortTitle: "Maintenance & Support",
    metaTitle: "Website & Software Maintenance Support",
    metaDescription:
      "Maintenance and support from Vedasynk—uptime care, iteration capacity, dependency updates, and performance fixes for sites and products you rely on.",
    heroHeadline: "Keep shipping calmly after launch",
    heroSubhead:
      "We provide maintenance and iteration capacity so your website or product stays secure, fast, and aligned with how the business evolves.",
    overview: [
      "Launch is the beginning of learning. Maintenance engagements give you reserved capacity for fixes, small features, dependency updates, and performance work—without restarting a full project every time something changes.",
      "We prioritise with you on a regular cadence, keep environments healthy, and document what changed. Support can cover products we built or carefully scoped systems we inherit after an audit.",
      "The goal is boring reliability plus steady improvement.",
    ],
    benefits: [
      {
        title: "Predictable capacity",
        description:
          "Know that hours exist each month for the work that inevitably appears.",
      },
      {
        title: "Health over heroics",
        description:
          "Updates, monitoring, and fixes handled before they become emergencies.",
      },
      {
        title: "Continuous improvement",
        description:
          "Small UX and conversion wins compound between major releases.",
      },
      {
        title: "Institutional memory",
        description:
          "A team that already understands your stack and decisions.",
      },
    ],
    features: [
      "Bug fixes and production support",
      "Dependency and security updates",
      "Performance improvements",
      "Small feature iterations",
      "Content and CMS assistance",
      "Uptime and error monitoring review",
      "Monthly priority planning",
      "Escalation paths for incidents",
    ],
    process: [
      {
        title: "Onboard and baseline",
        description:
          "Review the system, access, monitoring, and known risks.",
      },
      {
        title: "Set the cadence",
        description:
          "Agree priorities, response expectations, and reporting.",
      },
      {
        title: "Execute monthly",
        description:
          "Ship fixes and improvements within reserved capacity.",
      },
      {
        title: "Review and adjust",
        description:
          "Revisit allocation when roadmap intensity changes.",
      },
    ],
    techStack: [
      "GitHub",
      "Sentry",
      "Uptime monitoring",
      "Vercel / AWS",
      "Dependabot / Renovate",
      "Google Analytics 4",
    ],
    faqs: [
      {
        question: "What is included in a retainer?",
        answer:
          "A set number of hours each month for agreed work types—fixes, updates, and small iterations. Larger features are scoped separately or rolled into the next month’s plan.",
      },
      {
        question: "Do you offer emergency support?",
        answer:
          "Response expectations are defined in the agreement. Critical production issues are prioritised within those terms.",
      },
      {
        question: "Can you maintain a product you did not build?",
        answer:
          "Yes, after an audit to understand risk, access, and documentation gaps.",
      },
      {
        question: "Is maintenance only for websites?",
        answer:
          "No. We support web apps, APIs, mobile backends, and marketing sites.",
      },
      {
        question: "Can we pause and resume?",
        answer:
          "Often yes, with notice. Continuous systems benefit from continuous care, but we can align to seasonal needs.",
      },
    ],
    relatedPortfolioSlugs: [
      "clinic-booking-platform",
      "ecommerce-growth-system",
      "saas-analytics-dashboard",
      "logistics-ops-app",
    ],
  },
];

export const PRIMARY_SERVICES = SERVICES.slice(0, 6);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug);
}
