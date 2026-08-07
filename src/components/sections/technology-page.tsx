"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal, FadeInStagger, FadeItem } from "@/components/motion/reveal";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { ParallaxBand } from "@/components/motion/parallax-band";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { TECH_STACK_GROUPS } from "@/content/home";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

gsap.registerPlugin(ScrollTrigger);

const TECH_TOPICS = [
  {
    id: "nextjs",
    label: "Next.js & React",
    title: "Next.js website development for SEO and speed",
    body: "We build marketing sites and product web apps with Next.js, React, and TypeScript—metadata, Core Web Vitals, and maintainable components so Bangalore startups can rank and convert organic traffic.",
    points: [
      "SSR/SSG patterns for crawlable pages",
      "Typed UI systems that scale with your team",
      "Analytics and conversion events wired early",
    ],
    keywords: ["Next.js development", "React agency Bangalore", "SEO-ready websites"],
  },
  {
    id: "mobile",
    label: "Mobile apps",
    title: "React Native & Flutter mobile app development",
    body: "Cross-platform MVPs when speed matters; native when constraints demand it. Store-ready quality with onboarding UX and instrumentation from day one.",
    points: [
      "iOS and Android from a shared codebase when fit",
      "MVP spines that prove demand fast",
      "Crash monitoring and release discipline",
    ],
    keywords: ["mobile app development Bangalore", "React Native", "Flutter MVP"],
  },
  {
    id: "api",
    label: "APIs & data",
    title: "API development and data foundations",
    body: "REST and GraphQL APIs with PostgreSQL or MongoDB—clear contracts so web, mobile, and partner integrations share one reliable source of truth.",
    points: [
      "Auth, validation, and versioning practices",
      "Documented endpoints for faster integrations",
      "Observability on latency and errors",
    ],
    keywords: ["API development services", "backend for startups", "GraphQL REST"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    title: "Cloud solutions and CI/CD for startups",
    body: "AWS, GCP, Azure, Docker, and pipelines that make releases safer—staging environments, secrets hygiene, and rollback paths operators can trust.",
    points: [
      "Environment parity (dev → staging → prod)",
      "Automated checks before production",
      "Cost-aware architecture choices",
    ],
    keywords: ["cloud solutions for startups", "DevOps CI/CD", "AWS Bangalore"],
  },
  {
    id: "design",
    label: "Design systems",
    title: "UI systems that keep products coherent",
    body: "Figma design systems and component libraries so SaaS and mobile products stay consistent—and marketing sites stay on-brand as you ship.",
    points: [
      "Tokens for type, colour, and spacing",
      "Reusable components for faster releases",
      "Handoff that engineers can implement cleanly",
    ],
    keywords: ["design system agency", "UI UX design", "product design Bangalore"],
  },
  {
    id: "growth",
    label: "Growth stack",
    title: "SEO, analytics, and growth tooling",
    body: "Technical SEO foundations, Search Console readiness, and landing patterns so paid and organic channels convert into discovery calls—not bounce.",
    points: [
      "Schema, sitemaps, and internal linking",
      "Event tracking for funnel clarity",
      "Landing templates for campaigns",
    ],
    keywords: ["technical SEO", "startup analytics", "conversion tracking"],
  },
];

const QUALITY = [
  "Typed interfaces and module boundaries for extensibility",
  "CI checks, reviews, and staging before production",
  "Monitoring and error tracking on launches that matter",
  "Design systems when products will keep shipping",
  "Performance and accessibility as release criteria",
  "Honest advice when a tool is overkill for your stage",
];

const TECH_FAQS = [
  {
    question: "What tech stack does Vedasynk use for websites?",
    answer:
      "We typically use Next.js, React, TypeScript, and Tailwind for SEO-ready websites and web apps, deployed on Vercel, AWS, or your preferred cloud—with Core Web Vitals and metadata treated as delivery requirements.",
  },
  {
    question: "Can you work with our existing stack?",
    answer:
      "Yes. When a client already has a codebase, we meet them there—improving architecture and delivery habits instead of forcing a fashionable rewrite.",
  },
  {
    question: "Do you support mobile and SaaS backends?",
    answer:
      "Yes. We build React Native/Flutter apps and API-backed SaaS foundations with auth, tenancy patterns, and cloud deployment suited to early growth.",
  },
];

export function TechnologyPageContent() {
  const [activeId, setActiveId] = useState(TECH_TOPICS[0].id);
  const fixedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = fixedRef.current;
    if (!root) return;
    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>("[data-tech-item]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.getAttribute("data-tech-item");
        if (id) setActiveId(id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.25, 0.5] },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const root = fixedRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-tech-item]", root).forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.3, y: 32 },
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

  const active = TECH_TOPICS.find((t) => t.id === activeId) ?? TECH_TOPICS[0];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Technology", path: "/technology" },
          ]),
          faqSchema(TECH_FAQS),
        ]}
      />

      <PageHero
        eyebrow="Technology · Web · Mobile · Cloud · SEO"
        title="Engineering stacks for high-performance websites, apps, and SaaS"
        description="Vedasynk chooses Next.js, React, TypeScript, mobile frameworks, APIs, and cloud tooling for maintainability, Core Web Vitals, and organic growth—not résumé theatre."
        secondaryCta={{ label: "Our process", href: "/process" }}
      />

      <ParallaxBand className="bg-ink text-white">
        <div
          data-parallax-layer
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_20%_50%,rgba(11,87,208,0.35),transparent_60%)]"
        />
        <section className="relative py-16 md:py-24">
          <div className="container-page max-w-3xl">
            <Reveal>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                Philosophy
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Quality over novelty—built to rank and last
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                Technology decisions should reduce risk for startups and SMEs.
                We favour mature frameworks, typed codebases, and secure defaults.
                Performance, accessibility, and SEO foundations are part of done—so
                your product can earn traffic and survive the next hire.
              </p>
            </Reveal>
          </div>
        </section>
      </ParallaxBand>

      {/* FIXED SCROLL TECH TOPICS */}
      <section
        ref={fixedRef}
        className="bg-bg py-16 md:py-24"
        aria-labelledby="tech-fixed-heading"
      >
        <div className="container-page">
          <Reveal>
            <h2
              id="tech-fixed-heading"
              className="text-3xl font-semibold tracking-tight text-ink md:text-4xl"
            >
              Technology deep dive
            </h2>
            <p className="mt-3 max-w-2xl text-ink-secondary">
              Scroll each topic—the detail panel stays fixed on desktop with
              keywords and implementation notes for founders evaluating partners.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <div className="space-y-4">
              {TECH_TOPICS.map((topic, i) => (
                <article
                  key={topic.id}
                  data-tech-item={topic.id}
                  className={`rounded-2xl border p-5 md:p-6 ${
                    activeId === topic.id
                      ? "border-accent bg-accent-soft"
                      : "border-border bg-bg-soft"
                  }`}
                >
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{topic.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {topic.body.slice(0, 120)}…
                  </p>
                </article>
              ))}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-border bg-bg-soft p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {active.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink md:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary md:text-base">
                  {active.body}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {active.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink-secondary">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {p}
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
                    <Button asChild>
                      <Link href="/contact#book">
                        Discuss your stack
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticWrapper>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Tools we use often"
              description="Representative capabilities across product, data, cloud, and growth."
            />
          </Reveal>
          <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_STACK_GROUPS.map((group) => (
              <FadeItem key={group.name}>
                <div className="h-full rounded-2xl border border-border bg-bg p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                    {group.name}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-border/70 pb-2 text-sm text-ink-secondary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              title="How we keep quality high"
              description="Standards that protect SEO, security, and shipping speed."
            />
          </Reveal>
          <ul>
            {QUALITY.map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <li className="flex gap-4 border-t border-border py-5 text-ink-secondary">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page max-w-3xl space-y-6">
          <Reveal>
            <SectionHeading title="Technology FAQs" />
          </Reveal>
          {TECH_FAQS.map((faq) => (
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
      </section>

      <FinalCta title="Need a stack recommendation for your next build?" />
    </>
  );
}
