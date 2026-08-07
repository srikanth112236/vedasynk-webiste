"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal, FadeInStagger, FadeItem } from "@/components/motion/reveal";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { ParallaxBand } from "@/components/motion/parallax-band";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import type { Service } from "@/content/services";
import { getService } from "@/content/services";
import { getServiceExtra } from "@/content/service-extras";
import { getProject } from "@/content/portfolio";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const SECTION_IDS = [
  { id: "overview", label: "Overview" },
  { id: "audience", label: "Who it's for" },
  { id: "benefits", label: "Benefits" },
  { id: "deliverables", label: "Deliverables" },
  { id: "process", label: "Process" },
  { id: "stack", label: "Stack" },
  { id: "seo-guide", label: "SEO guide" },
  { id: "faq", label: "FAQ" },
] as const;

export function ServicePage({ service }: { service: Service }) {
  const extra = getServiceExtra(service.slug);
  const related = service.relatedPortfolioSlugs
    .map((slug) => getProject(slug))
    .filter(Boolean);
  const relatedServices = (extra?.relatedServiceSlugs || [])
    .map((slug) => getService(slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
          }),
          faqSchema(service.faqs),
        ]}
      />

      <ServiceDetailHero service={service} primaryKeyword={extra?.primaryKeyword} />

      <ServiceStickyNav />

      {extra && (
        <HorizontalKeywordStrip
          primary={extra.primaryKeyword}
          keywords={extra.secondaryKeywords}
        />
      )}

      <section id="overview" className="scroll-mt-28 bg-bg py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="max-w-2xl space-y-5">
            <Reveal>
              <SectionHeading
                title={`${service.title}: overview for decision-makers`}
                description={`How Vedasynk delivers ${service.shortTitle.toLowerCase()} for startups and growing businesses from Bangalore to global markets.`}
              />
            </Reveal>
            {service.overview.map((p, i) => (
              <Reveal key={p.slice(0, 28)} delay={i * 0.05}>
                <p className="text-base leading-relaxed text-ink-secondary md:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-ink-secondary md:text-lg">
                Searching for a trusted partner for{" "}
                <strong className="font-medium text-ink">
                  {extra?.primaryKeyword ?? service.title.toLowerCase()}
                </strong>
                ? We combine senior craft, written scope, and conversion-focused
                delivery so your investment creates pipeline—not just deliverables.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <aside className="rounded-3xl border border-border bg-bg-soft p-6 shadow-[0_30px_80px_-50px_rgba(11,87,208,0.45)] md:sticky md:top-28 md:p-8">
              <p className="font-display text-2xl text-ink">Start here</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                Book a discovery call or WhatsApp the Bangalore team. We respond
                with clarifying questions and a recommended scope.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-ink-secondary">
                {[
                  "NDA-friendly conversations",
                  "Clear milestones & demos",
                  "SEO and conversion considered early",
                  "Founder-level involvement",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2">
                <MagneticWrapper className="w-full">
                  <Button asChild className="w-full">
                    <Link href="/contact#book">Book a discovery call</Link>
                  </Button>
                </MagneticWrapper>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp {SITE.whatsappDisplay}
                  </a>
                </Button>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {extra && (
        <section id="audience" className="scroll-mt-28 bg-bg-soft py-16 md:py-24">
          <div className="container-page">
            <Reveal>
              <SectionHeading
                title={`Who hires Vedasynk for ${service.shortTitle.toLowerCase()}`}
                description="Match your stage to a typical engagement profile."
              />
            </Reveal>
            <FadeInStagger className="mt-10 grid gap-5 md:grid-cols-3">
              {extra.idealFor.map((item) => (
                <FadeItem key={item.title}>
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-bg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-32px_rgba(11,87,208,0.4)]">
                    <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">
                      {item.description}
                    </p>
                  </article>
                </FadeItem>
              ))}
            </FadeInStagger>
          </div>
        </section>
      )}

      <ParallaxBand className="bg-ink text-white">
        <div
          data-parallax-layer
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(11,87,208,0.4),transparent_60%)]"
        />
        <section className="relative py-16 md:py-24">
          <div className="container-page">
            <Reveal>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                Why this service matters
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                {extra
                  ? `Why invest in ${service.shortTitle.toLowerCase()} now`
                  : `Why ${service.shortTitle.toLowerCase()} drives growth`}
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {(extra?.whyNow ?? [
                "Buyers research online before they talk to sales.",
                "Quality execution protects budget and timeline.",
                "Senior craft reduces rework after launch.",
              ]).map((reason, i) => (
                <Reveal key={reason} delay={i * 0.06}>
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-white/75 backdrop-blur-sm">
                    {reason}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </ParallaxBand>

      <section id="benefits" className="scroll-mt-28 bg-bg py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Business benefits & SEO outcomes"
              description="What founders, CTOs, and marketing leads should expect from this engagement."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {service.benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <article className="group rounded-2xl border border-border p-6 transition-colors hover:border-accent/35 hover:bg-bg-soft md:p-8">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-ink group-hover:text-accent">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary md:text-base">
                    {b.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          {extra && (
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {extra.outcomes.map((o, i) => (
                <Reveal key={o.title} delay={i * 0.05}>
                  <article className="rounded-2xl bg-gradient-to-br from-bg-soft to-accent-soft/50 p-6">
                    <h3 className="font-semibold text-ink">{o.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {o.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <HorizontalFeatures
        title={`What’s included in ${service.shortTitle.toLowerCase()}`}
        description="Swipe or scroll horizontally—each capability supports conversion, quality, or organic growth."
        items={service.features}
      />

      {extra && (
        <section id="deliverables" className="scroll-mt-28 bg-bg-soft py-16 md:py-24">
          <FixedSplitSection
            eyebrow="Deliverables"
            title="What you receive across a typical engagement"
            description="Transparent outputs so stakeholders know what ships—and what supports SEO and conversion after launch."
          >
            <ol className="space-y-5">
              {extra.deliverablesDetail.map((d, i) => (
                <li
                  key={d.title}
                  data-fixed-step
                  className="rounded-2xl border border-border bg-bg p-6 md:p-7"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {d.description}
                  </p>
                </li>
              ))}
            </ol>
          </FixedSplitSection>
        </section>
      )}

      <section id="process" className="scroll-mt-28 bg-bg py-16 md:py-24">
        <FixedSplitSection
          eyebrow="Process"
          title={`How we deliver ${service.shortTitle.toLowerCase()}`}
          description="Sticky guidance on the left, animated steps on the right—works on mobile as a simple stack."
          cta={{ href: "/process", label: "Full studio process" }}
        >
          <ol className="space-y-5">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                data-fixed-step
                className="relative rounded-2xl border border-border bg-bg-soft p-6 pl-14 md:p-8 md:pl-16"
              >
                <span className="absolute left-4 top-7 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-bg font-mono text-[11px] text-accent md:left-5 md:top-9">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary md:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </FixedSplitSection>
      </section>

      <section id="stack" className="scroll-mt-28 bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Technology stack & implementation standards"
              description="Tools chosen for maintainability, security, performance, and SEO—not hype."
            />
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {service.techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-bg px-3.5 py-1.5 text-sm text-ink-secondary transition-colors hover:border-accent hover:text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="seo-guide" className="scroll-mt-28 bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl space-y-12">
          <Reveal>
            <SectionHeading
              title={`${service.title} SEO guide for organic leads`}
              description="Educational content to help you evaluate partners and plan pages that rank."
            />
          </Reveal>

          {extra?.seoBlocks.map((block) => (
            <Reveal key={block.heading}>
              <article>
                <h3 className="text-2xl font-semibold tracking-tight text-ink">
                  {block.heading}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary md:text-lg">
                  {block.body}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <article className="rounded-2xl border border-border bg-bg-soft p-6 md:p-8">
              <h3 className="text-xl font-semibold text-ink">
                DIY vs freelancer vs Vedasynk
              </h3>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[28rem] text-left text-sm">
                  <caption className="sr-only">
                    Comparison of DIY, freelancer, and Vedasynk for{" "}
                    {service.title}
                  </caption>
                  <thead>
                    <tr className="border-b border-border text-ink-muted">
                      <th scope="col" className="py-2 pr-4 font-medium">
                        Factor
                      </th>
                      <th scope="col" className="py-2 pr-4 font-medium">
                        DIY / templates
                      </th>
                      <th scope="col" className="py-2 pr-4 font-medium">
                        Freelancer
                      </th>
                      <th scope="col" className="py-2 font-medium">
                        Vedasynk
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-ink-secondary">
                    {[
                      [
                        "Strategy",
                        "You invent alone",
                        "Varies by person",
                        "Scoped discovery + outcomes",
                      ],
                      [
                        "SEO & conversion",
                        "Often missing",
                        "Hit or miss",
                        "Built into delivery",
                      ],
                      [
                        "Design + build",
                        "Limited",
                        "Usually one skill",
                        "Product, brand, growth together",
                      ],
                      [
                        "Accountability",
                        "On you",
                        "Individual bandwidth",
                        "Studio process & milestones",
                      ],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-border/70">
                        {row.map((cell, i) => (
                          <td
                            key={`${row[0]}-${i}`}
                            className={cn(
                              "py-3 pr-4 align-top",
                              i === 0 && "font-medium text-ink",
                              i === 3 && "text-ink",
                            )}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-bg-soft py-16 md:py-24">
          <div className="container-page">
            <Reveal>
              <SectionHeading
                title="Related work"
                description="Projects that demonstrate adjacent outcomes."
              />
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) =>
                p ? (
                  <Reveal key={p.slug} delay={i * 0.06}>
                    <Link href={`/portfolio/${p.slug}`} className="group block">
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-bg-muted to-accent-soft transition-transform duration-500 group-hover:scale-[1.02]" />
                      <h3 className="mt-4 font-semibold text-ink group-hover:text-accent">
                        {p.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-ink-secondary">
                        {p.summary}
                      </p>
                    </Link>
                  </Reveal>
                ) : null,
              )}
            </div>
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <HorizontalRelatedServices services={relatedServices.filter(Boolean) as Service[]} />
      )}

      <section id="faq" className="scroll-mt-28 bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              title={`${service.shortTitle} FAQs`}
              description="Answers buyers search for before booking a discovery call."
            />
          </Reveal>
          <Accordion type="single" collapsible className="mt-8">
            {service.faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`s-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FinalCta
        title={`Ready to start ${service.shortTitle.toLowerCase()} with Vedasynk?`}
        description={`Talk to our Bangalore team about ${extra?.primaryKeyword ?? service.title.toLowerCase()}. We’ll clarify goals, recommend scope, and share a practical timeline.`}
      />
    </>
  );
}

function ServiceDetailHero({
  service,
  primaryKeyword,
}: {
  service: Service;
  primaryKeyword?: string;
}) {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-svc-hero-parallax]", {
        yPercent: 28,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to("[data-svc-hero-content]", {
        y: -30,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden border-b border-border pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,#f7f8fa_70%,#eef2f8_100%)]" />
        <div
          data-svc-hero-parallax
          className="absolute -left-[10%] top-[-20%] h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.14),transparent_68%)]"
        />
        <div
          data-svc-hero-parallax
          className="absolute -right-[5%] top-[10%] h-[45vw] w-[45vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.1),transparent_65%)]"
        />
      </div>

      <div data-svc-hero-content className="container-page relative z-10 max-w-3xl">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {service.title} · Bangalore & global
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {service.heroHeadline}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-ink-secondary">
            {service.heroSubhead}
          </p>
        </Reveal>
        {primaryKeyword && (
          <Reveal delay={0.12}>
            <p className="mt-4 text-sm text-ink-muted">
              Primary focus:{" "}
              <span className="font-medium text-ink">{primaryKeyword}</span>
            </p>
          </Reveal>
        )}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticWrapper>
              <Button asChild size="lg">
                <Link href="/contact#book">Book a discovery call</Link>
              </Button>
            </MagneticWrapper>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">All services</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceStickyNav() {
  const [active, setActive] = useState<string>(SECTION_IDS[0].id);

  useEffect(() => {
    const els = SECTION_IDS.map((s) => document.getElementById(s.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 border-b border-border bg-bg/90 backdrop-blur-md md:top-[4.25rem]"
    >
      <div className="container-page">
        <ul className="flex gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTION_IDS.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className={cn(
                  "inline-flex rounded-full px-3 py-1.5 text-xs font-medium transition-colors md:text-sm",
                  active === item.id
                    ? "bg-accent text-white"
                    : "text-ink-secondary hover:bg-bg-soft hover:text-ink",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function HorizontalKeywordStrip({
  primary,
  keywords,
}: {
  primary: string;
  keywords: string[];
}) {
  const items = [primary, ...keywords, primary, ...keywords];
  return (
    <div className="overflow-hidden border-b border-border bg-bg py-3" aria-hidden>
      <div className="flex w-max animate-marquee gap-3 will-change-transform">
        {items.map((kw, i) => (
          <span
            key={`${kw}-${i}`}
            className="rounded-full border border-border px-3 py-1 text-xs text-ink-muted"
          >
            {kw}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Desktop: sticky viewport + scrubbed X. Mobile: native snap scroll. */
function HorizontalFeatures({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 899px)").matches) return;

    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 64);

      const applyHeight = () => {
        section.style.height = `${window.innerHeight + getDistance()}px`;
      };
      applyHeight();

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
          onRefresh: applyHeight,
        },
      });
    }, section);

    return () => {
      ctx.revert();
      section.style.height = "";
    };
  }, [items]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg"
      aria-labelledby="features-heading"
    >
      <div className="md:sticky md:top-0 md:flex md:h-[100svh] md:flex-col md:justify-center md:overflow-hidden">
        <div className="container-page py-12 md:py-0">
          <Reveal>
            <h2
              id="features-heading"
              className="max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-base text-ink-secondary">{description}</p>
          </Reveal>
        </div>

        {/* Mobile / reduced-motion friendly native scroll */}
        <div className="mt-8 flex gap-4 overflow-x-auto px-5 pb-12 snap-x snap-mandatory md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item, i) => (
            <article
              key={item}
              className="w-[min(78vw,20rem)] shrink-0 snap-start rounded-2xl border border-border bg-bg-soft p-6"
            >
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-base font-medium leading-snug text-ink">
                {item}
              </p>
            </article>
          ))}
        </div>

        {/* Desktop scrub track */}
        <div
          ref={trackRef}
          className="mt-10 hidden w-max gap-5 px-8 will-change-transform md:flex lg:px-[max(2rem,calc((100vw-76rem)/2))]"
        >
          {items.map((item, i) => (
            <article
              key={item}
              className="flex h-56 w-[22rem] shrink-0 flex-col justify-between rounded-3xl border border-border bg-bg-soft p-8 shadow-[0_20px_50px_-40px_rgba(10,10,11,0.35)]"
            >
              <span className="font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xl font-semibold leading-snug text-ink">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FixedSplitSection({
  eyebrow,
  title,
  description,
  cta,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta?: { href: string; label: string };
  children: React.ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 899px)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-fixed-step]", root).forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.28, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              end: "top 42%",
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-secondary">
            {description}
          </p>
          {cta && (
            <Button asChild variant="outline" className="mt-8">
              <Link href={cta.href}>
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </Reveal>
      </div>
      <div>{children}</div>
    </div>
  );
}

function HorizontalRelatedServices({ services }: { services: Service[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: number) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(360, el.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <section className="bg-bg py-16 md:py-24" aria-labelledby="related-services-heading">
      <div className="container-page">
        <div className="flex items-end justify-between gap-4">
          <Reveal>
            <h2
              id="related-services-heading"
              className="text-3xl font-semibold tracking-tight text-ink md:text-4xl"
            >
              Related services
            </h2>
            <p className="mt-2 max-w-xl text-ink-secondary">
              Pair capabilities to strengthen SEO, product quality, and conversion.
            </p>
          </Reveal>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Scroll related services left"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Scroll related services right"
              onClick={() => scrollBy(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-accent hover:text-accent"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-8 flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory md:px-[max(1.25rem,calc((100vw-72rem)/2))] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group w-[min(85vw,22rem)] shrink-0 snap-start rounded-2xl border border-border bg-bg-soft p-6 transition-colors hover:border-accent/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-ink group-hover:text-accent">
                {s.title}
              </h3>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted group-hover:text-accent" />
            </div>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-secondary">
              {s.heroSubhead}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
