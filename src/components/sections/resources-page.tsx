"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  FileText,
  Lightbulb,
} from "lucide-react";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal, FadeInStagger, FadeItem } from "@/components/motion/reveal";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { ParallaxBand } from "@/components/motion/parallax-band";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const RESOURCES = [
  {
    id: "checklist",
    icon: FileText,
    category: "Lead magnet",
    title: "Startup Launch Checklist",
    description:
      "Cut MVP scope, lock brand basics, wire analytics, and plan launch-week communications—so your first release feels intentional.",
    detail:
      "Use this checklist before you hire a software development company or MVP partner. It covers product spine, branding essentials, SEO readiness, analytics, legal hygiene, and launch communications for startups in Bangalore and worldwide.",
    href: "/contact",
    cta: "Request the checklist",
    keywords: [
      "startup launch checklist",
      "MVP checklist",
      "go-to-market",
      "founder launch plan",
    ],
    bullets: [
      "Define the one user action that proves the bet",
      "List must-have journeys vs later backlog",
      "Brand name, logo, and message hierarchy",
      "Analytics events and support channel",
      "SEO titles, sitemap plan, and primary CTA",
    ],
  },
  {
    id: "mvp",
    icon: Lightbulb,
    category: "Guide",
    title: "How to scope an MVP",
    description:
      "A founder-friendly framework for choosing the product spine that proves demand without burning runway.",
    detail:
      "Learn how Vedasynk scopes MVP development for startups—cutting feature wishlists into a shippable spine with UX, analytics, and a post-launch roadmap that supports organic learning.",
    href: "/blog/how-to-scope-an-mvp",
    cta: "Read the guide",
    keywords: [
      "MVP development",
      "how to scope an MVP",
      "startup product scope",
      "lean MVP",
    ],
    bullets: [
      "Write the riskiest assumption first",
      "Map the minimum journey to value",
      "Defer secondary platforms consciously",
      "Instrument learning from day one",
    ],
  },
  {
    id: "cost",
    icon: BookOpen,
    category: "Insight",
    title: "App development cost in India",
    description:
      "What actually drives cost for mobile and web apps—and how Bangalore teams can plan budgets honestly.",
    detail:
      "Transparent cost drivers for mobile app development and web application projects in India: scope, platforms, integrations, design depth, and post-launch support—so founders plan runway with clarity.",
    href: "/blog/app-development-cost-india",
    cta: "Read the insight",
    keywords: [
      "app development cost India",
      "mobile app cost Bangalore",
      "website development cost",
      "MVP budget",
    ],
    bullets: [
      "Scope and platforms drive most of the range",
      "Design systems reduce rework cost",
      "Integrations and compliance add time",
      "Maintenance is part of true TCO",
    ],
  },
  {
    id: "seo",
    icon: BookOpen,
    category: "Insight",
    title: "Technical SEO checklist for Next.js",
    description:
      "Metadata, performance, and structure patterns that help marketing sites earn organic leads.",
    detail:
      "A practical technical SEO checklist for Next.js websites: metadata, canonicals, Core Web Vitals, internal linking, and schema—built for startups chasing qualified organic traffic.",
    href: "/blog/technical-seo-checklist-nextjs",
    cta: "Read the checklist",
    keywords: [
      "technical SEO checklist",
      "Next.js SEO",
      "Core Web Vitals",
      "organic leads",
    ],
    bullets: [
      "Unique titles and meta descriptions",
      "Fast LCP and stable layouts",
      "Clean URLs and internal links",
      "Sitemap, robots, and FAQ schema",
    ],
  },
  {
    id: "brand",
    icon: Lightbulb,
    category: "Guide",
    title: "Branding before launch",
    description:
      "What brand work startups need before day one—and what can wait until after first users.",
    detail:
      "Prioritise logo, type, colour, and message clarity before launch—so your website, deck, and product UI feel like one company without over-investing in unused brand books.",
    href: "/blog/branding-for-startups-before-launch",
    cta: "Read the guide",
    keywords: [
      "startup branding",
      "logo design for startups",
      "brand identity before launch",
    ],
    bullets: [
      "Name and verbal positioning",
      "Logo lockups that work on web and app",
      "Colour and type for UI consistency",
      "Defer elaborate brand films until traction",
    ],
  },
  {
    id: "services",
    icon: FileText,
    category: "Directory",
    title: "Full services catalogue",
    description:
      "Explore website development, mobile apps, UI/UX, branding, SEO, and more—with SEO-rich detail pages.",
    detail:
      "Browse Vedasynk’s software, design, and digital marketing services—each page written for organic search intent around Bangalore and global delivery.",
    href: "/services",
    cta: "Browse services",
    keywords: [
      "software development company",
      "digital marketing agency",
      "website development Bangalore",
    ],
    bullets: [
      "16 service detail pages",
      "Process, FAQs, and deliverables",
      "Internal links to solutions and industries",
      "Clear discovery-call CTAs",
    ],
  },
];

const RESOURCE_FAQS = [
  {
    question: "Are Vedasynk resources free?",
    answer:
      "Yes. Guides and blog insights are free to read. Lead magnets such as the Startup Launch Checklist are sent when you request them via the contact form or discovery call.",
  },
  {
    question: "Who are these resources for?",
    answer:
      "Founders, CTOs, product managers, and marketing leads at startups and SMEs evaluating MVP development, website SEO, branding, or digital growth—especially teams working with Bangalore or India-based partners.",
  },
  {
    question: "Can these guides help with SEO and organic traffic?",
    answer:
      "Yes. Several resources focus on technical SEO, service-page structure, and launch readiness so your website can rank for high-intent keywords and convert visitors into enquiries.",
  },
];

const SEO_CLUSTERS = [
  "MVP development for startups",
  "app development cost India",
  "website SEO for startups",
  "startup branding guide",
  "Next.js technical SEO",
  "software agency Bangalore",
  "digital marketing resources",
  "founder launch checklist",
];

const CHECKLIST_ITEMS = [
  "Cut MVP scope to journeys that prove the bet",
  "Brand and messaging essentials before you go live",
  "Analytics, support, and feedback loops that get used",
  "Launch-week communications for users and partners",
  "SEO basics: titles, sitemap readiness, and CTAs",
  "WhatsApp or email path for early customer support",
];

export function ResourcesPageContent() {
  const [activeId, setActiveId] = useState(RESOURCES[0].id);
  const fixedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = fixedRef.current;
    if (!root) return;
    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>("[data-resource-item]"),
    );
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.getAttribute("data-resource-item");
        if (id) setActiveId(id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const root = fixedRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("[data-resource-item]", root)
        .forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0.35, y: 28 },
            {
              opacity: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "top 45%",
                scrub: true,
              },
            },
          );
        });
    }, root);

    return () => ctx.revert();
  }, []);

  const active = RESOURCES.find((r) => r.id === activeId) ?? RESOURCES[0];
  const ActiveIcon = active.icon;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
          ]),
          faqSchema(RESOURCE_FAQS),
        ]}
      />

      <PageHero
        eyebrow="Resources · Founder tools · Organic growth"
        title="SEO-ready resources for startups shipping software, brands, and growth"
        description={`Free guides and checklists from ${SITE.shortName} in Bangalore—built to help founders scope MVPs, plan launches, improve technical SEO, and earn qualified organic traffic.`}
        secondaryCta={{ label: "Read the blog", href: "/blog" }}
      />

      <section className="border-b border-border bg-bg-soft py-4">
        <div className="container-page flex flex-wrap gap-2">
          {SEO_CLUSTERS.map((kw) => (
            <span
              key={kw}
              className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-ink-muted"
            >
              {kw}
            </span>
          ))}
        </div>
      </section>

      {/* FIXED SCROLLING RESOURCE LIBRARY */}
      <section
        ref={fixedRef}
        className="bg-bg py-16 md:py-24"
        aria-labelledby="resource-library-heading"
      >
        <div className="container-page">
          <Reveal>
            <h2
              id="resource-library-heading"
              className="text-3xl font-semibold tracking-tight text-ink md:text-4xl"
            >
              Resource library
            </h2>
            <p className="mt-3 max-w-2xl text-base text-ink-secondary">
              Scroll the list—the preview stays fixed on desktop and updates with
              full detail, keywords, and next steps for organic growth.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
            <div className="space-y-4">
              {RESOURCES.map((resource, i) => {
                const Icon = resource.icon;
                const isActive = activeId === resource.id;
                return (
                  <article
                    key={resource.id}
                    id={resource.id}
                    data-resource-item={resource.id}
                    className={`rounded-2xl border p-5 transition-colors md:p-6 ${
                      isActive
                        ? "border-accent bg-accent-soft"
                        : "border-border bg-bg-soft"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon
                        className={`mt-0.5 h-4 w-4 shrink-0 ${isActive ? "text-accent" : "text-ink-muted"}`}
                        aria-hidden
                      />
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                          {resource.category}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-ink">
                          {resource.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-border bg-bg-soft p-6 shadow-[0_30px_70px_-45px_rgba(11,87,208,0.5)] md:p-8">
                <div className="flex items-center gap-2">
                  <ActiveIcon className="h-4 w-4 text-accent" aria-hidden />
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {active.category}
                  </p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary md:text-base">
                  {active.detail}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {active.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-sm text-ink-secondary"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-ink-muted"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <div className="mt-7">
                  <MagneticWrapper>
                    <Button asChild size="lg">
                      <Link href={active.href}>
                        {active.cta}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticWrapper>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ParallaxBand className="bg-ink text-white">
        <div
          data-parallax-layer
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(11,87,208,0.4),transparent_60%)]"
        />
        <section className="relative py-16 md:py-24">
          <div className="container-page max-w-3xl">
            <Reveal>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                Organic growth
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Why free resources help you rank—and convert
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                Educational content targets keywords founders already search:
                MVP scope, app cost in India, technical SEO, and startup branding.
                Each guide links into Vedasynk services and solutions so organic
                visitors can take the next step—book a discovery call or explore
                a delivery path.
              </p>
            </Reveal>
          </div>
        </section>
      </ParallaxBand>

      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Lead magnet"
              title="Startup Launch Checklist"
              description="Request it via contact—mention the checklist in your message and we’ll send it from sales@vedasynk.com."
            />
          </Reveal>
          <FadeInStagger className="mt-10 grid gap-3 md:grid-cols-2">
            {CHECKLIST_ITEMS.map((item) => (
              <FadeItem key={item}>
                <div className="flex gap-3 rounded-xl border border-border bg-bg px-4 py-4 text-sm text-ink-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {item}
                </div>
              </FadeItem>
            ))}
          </FadeInStagger>
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticWrapper>
              <Button asChild size="lg">
                <Link href="/contact">
                  Request the checklist
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticWrapper>
            <Button asChild variant="outline" size="lg">
              <Link href="/solutions/mvp-development">Explore MVP solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              title="Resources FAQs"
              description="Common questions from founders researching partners and organic growth."
            />
          </Reveal>
          <div className="mt-8 space-y-6">
            {RESOURCE_FAQS.map((faq) => (
              <Reveal key={faq.question}>
                <article className="border-b border-border pb-6">
                  <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary md:text-base">
                    {faq.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta title="Prefer a working session over a PDF?" />
    </>
  );
}
