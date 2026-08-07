import type { FAQ, ProcessStep } from "./types";

export const PROCESS_PAGE = {
  metaTitle: "Our Process",
  metaDescription:
    "See how Vedasynk Technologies discovers, designs, builds, and launches software and brand systems—with clear milestones from first call to post-launch improvement.",
  heroHeadline: "A delivery process built for clarity and momentum",
  heroSubhead:
    "We keep discovery honest, scope visible, and releases frequent—so founders and operators always know what ships next and why it matters.",
  intro: [
    "Most failed projects do not fail in code. They fail in ambiguity: unclear outcomes, shifting priorities, and handoffs that lose context. Our process is designed to prevent that.",
    "Whether we are shipping an MVP, a brand system, or an internal platform, we work in the same rhythm—discover, define, design, build, launch, improve—with artefacts you can review and decisions you can track.",
  ],
  principles: [
    {
      title: "Outcomes before features",
      description:
        "We start from the business result and the user job to be done. Feature lists follow from that, not the other way around.",
    },
    {
      title: "Visible scope",
      description:
        "Milestones, owners, and acceptance criteria are written down. If something changes, we re-plan together instead of silently stretching the timeline.",
    },
    {
      title: "Working software early",
      description:
        "You see progress in demos and environments you can click—not only slide decks—so feedback lands while it is still cheap to act on.",
    },
    {
      title: "One accountable team",
      description:
        "Product, design, and engineering stay connected. Brand and growth join when go-to-market is part of the outcome.",
    },
  ],
  steps: [
    {
      title: "1. Discover",
      description:
        "We learn your users, constraints, competitive context, and success metrics. Discovery is short and focused—enough to make sound decisions without a months-long research theater.",
    },
    {
      title: "2. Define",
      description:
        "We translate discovery into scope: journeys, information architecture, technical approach, risks, and a phased plan. You leave this stage knowing what is in, what is out, and what comes later.",
    },
    {
      title: "3. Design",
      description:
        "We produce flows, interface designs, and brand direction as needed. Design decisions are validated against usability and message clarity before heavy engineering investment.",
    },
    {
      title: "4. Build",
      description:
        "Implementation happens in short cycles with demos, code review, and checks for performance, accessibility, and security. Integrations and data migration are planned, not bolted on at the end.",
    },
    {
      title: "5. Launch",
      description:
        "We prepare production environments, monitoring, documentation, and handover. Go-live includes a clear support plan so the first weeks after launch are calm and measured.",
    },
    {
      title: "6. Improve",
      description:
        "Post-launch, we review metrics and friction, fix what matters, and sequence the next release. Products and brands improve through deliberate iteration—not endless reopenings of settled decisions.",
    },
  ] satisfies ProcessStep[],
  engagementModels: [
    {
      title: "Fixed-scope build",
      description:
        "Best when the outcome is clear—an MVP, a marketing site, a brand system, or a defined platform module. Price and timeline are anchored to a written scope.",
    },
    {
      title: "Phased product partnership",
      description:
        "Best for SaaS and multi-release roadmaps. We ship value in phases with a rolling plan, so learning from users can shape the next slice.",
    },
    {
      title: "Retainer support",
      description:
        "Best after launch for maintenance, iteration, campaigns, and operational improvements. Capacity is reserved; priorities are reviewed on a regular cadence.",
    },
  ],
  faqs: [
    {
      question: "How long does discovery take?",
      answer:
        "Most engagements begin with one to two weeks of focused discovery and definition. Larger enterprise programs may need a longer alignment phase, but we still aim to produce a decision-ready plan quickly.",
    },
    {
      question: "How do you handle scope changes?",
      answer:
        "We document the change, impact on timeline and budget, and options—swap something out, extend the phase, or park it for later. Nothing is absorbed silently into the original estimate.",
    },
    {
      question: "What do you need from our team?",
      answer:
        "A decision-maker, access to subject experts when needed, and timely feedback on demos and drafts. We keep meetings lean and async updates clear so your calendar is not the bottleneck.",
    },
    {
      question: "Do you work with our existing designers or engineers?",
      answer:
        "Yes. We can lead end-to-end or collaborate with your internal team. We agree ownership of repositories, design files, and release responsibilities up front.",
    },
    {
      question: "What happens after launch?",
      answer:
        "You receive documentation, credentials, and a recommended maintenance plan. Many clients continue with a retainer for iteration; others pause and return for the next major phase.",
    },
  ] satisfies FAQ[],
} as const;
