export type CaseStudy = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: { metric: string; label: string }[];
  services: string[];
  testimonial?: { quote: string; author: string; role: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "fintech-mvp-launch",
    title: "Launching a wallet MVP under Series A pressure",
    metaTitle: "Fintech Wallet MVP Case Study",
    metaDescription:
      "How Vedasynk helped a Series A fintech ship a production wallet MVP in 12 weeks—with KYC flows, transfers, and app-store readiness.",
    client: "Series A Fintech",
    industry: "Finance",
    summary:
      "A funded payments startup needed a credible wallet product for pilot users and investor milestones. We replaced a fragile prototype with a secure, mobile-first MVP that could accept real traffic.",
    challenge:
      "The existing build could demo happy paths but failed under edge cases: incomplete KYC states, weak API contracts, and an interface that did not match the brand the company was raising against. Time to a trustworthy pilot was the constraint.",
    approach: [
      "Mapped the minimum user journeys that mattered for the pilot: onboarding, KYC, peer transfer, and merchant pay.",
      "Re-architected APIs and data models for clear state transitions, auditability, and safer payment orchestration.",
      "Designed a mobile experience that reduced drop-off in KYC and made balances and transfers easy to trust.",
      "Instrumented the product for support and product decisions, then hardened for app-store submission and monitoring.",
    ],
    outcomes: [
      { metric: "12 weeks", label: "Kickoff to production pilot" },
      { metric: "2,000+", label: "Funded wallets in the launch window" },
      { metric: "1st pass", label: "App-store approval cycle" },
      { metric: "<3%", label: "Support tickets on core flows" },
    ],
    services: [
      "mvp-development",
      "mobile-app-development",
      "api-development",
      "ui-ux-design",
    ],
    testimonial: {
      quote:
        "Vedasynk gave us a product we could put in front of real users and investors without apologising for the experience. The scope stayed honest and the delivery stayed on schedule.",
      author: "Product Lead",
      role: "Series A Fintech",
    },
  },
  {
    slug: "healthcare-ops-platform",
    title: "Unifying booking across a multi-clinic network",
    metaTitle: "Healthcare Booking Platform Case Study",
    metaDescription:
      "Case study: how Vedasynk reduced no-shows and unified scheduling for a regional healthcare group with a shared clinic operations platform.",
    client: "Regional Healthcare Group",
    industry: "Healthcare",
    summary:
      "A growing clinic network needed one reliable system for appointments, reminders, and front-desk operations. We delivered a platform that staff could trust and leadership could measure.",
    challenge:
      "Each clinic had its own scheduling habits. Patients bounced between phone and chat, no-shows were expensive, and leadership could not compare utilisation or wait times across locations with any confidence.",
    approach: [
      "Shadowed front-desk and clinical workflows to design around real constraints, not an idealised booking form.",
      "Built provider calendars, patient reminders, and role-based access that mapped to how clinics actually staff shifts.",
      "Rolled out to two flagship clinics first, refined based on staff feedback, then expanded across the network.",
      "Added an operations view for leadership covering bookings, no-shows, and utilisation without drowning teams in dashboards.",
    ],
    outcomes: [
      { metric: "28%", label: "Reduction in no-shows" },
      { metric: "~50%", label: "Less time spent on scheduling" },
      { metric: "6 clinics", label: "Live on a shared calendar" },
      { metric: "Higher", label: "Patient scores on booking ease" },
    ],
    services: [
      "software-development",
      "web-development",
      "ui-ux-design",
      "maintenance-support",
    ],
    testimonial: {
      quote:
        "The platform finally gave our clinics one way of working. Front desk is calmer, reminders actually go out, and we can see what is happening across locations.",
      author: "Operations Director",
      role: "Regional Healthcare Group",
    },
  },
  {
    slug: "brand-led-ecommerce-growth",
    title: "Brand clarity that powered ecommerce growth",
    metaTitle: "Ecommerce Brand & Growth Case Study",
    metaDescription:
      "How Vedasynk paired brand systems with SEO and paid acquisition to improve conversion and reduce CAC for a national ecommerce retailer.",
    client: "National Ecommerce Retailer",
    industry: "Retail",
    summary:
      "A mid-market ecommerce brand was spending more to acquire customers while looking inconsistent across channels. We rebuilt the brand system and growth stack together so creative, pages, and media reinforced one story.",
    challenge:
      "Paid efficiency was slipping, organic growth had flattened, and every campaign reinvented messaging. Landing pages, social creative, and packaging did not feel like the same company—hurting trust and slowing testing.",
    approach: [
      "Clarified positioning and rebuilt the visual system for web, social, and campaign creative.",
      "Restructured key category and landing templates around search intent and clearer conversion paths.",
      "Cleaned analytics and attribution so paid and organic decisions used the same source of truth.",
      "Ran a disciplined paid and SEO program with shared messaging guidelines and weekly learning loops.",
    ],
    outcomes: [
      { metric: "+41%", label: "Organic sessions in six months" },
      { metric: "-22%", label: "Paid CAC at stable volume" },
      { metric: "Faster", label: "Creative production with templates" },
      { metric: "Clearer", label: "Reporting for leadership decisions" },
    ],
    services: [
      "branding",
      "digital-marketing",
      "seo",
      "web-development",
      "graphic-design",
    ],
    testimonial: {
      quote:
        "Having brand and performance in one team changed the quality of our tests. We stopped guessing with disconnected creatives and started improving conversion with a coherent story.",
      author: "Marketing Head",
      role: "National Ecommerce Retailer",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((study) => study.slug);
}
