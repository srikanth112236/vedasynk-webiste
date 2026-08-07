"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { Industry } from "@/content/industries";
import { getIndustry } from "@/content/industries";
import { getIndustryExtra } from "@/content/industry-extras";
import { getService } from "@/content/services";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const SECTION_IDS = [
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "services", label: "Services" },
  { id: "seo-guide", label: "Guide" },
  { id: "related", label: "Related" },
  { id: "faq", label: "FAQ" },
] as const;

export function IndustryPage({ industry }: { industry: Industry }) {
  const extra = getIndustryExtra(industry.slug);
  const services = industry.relevantServiceSlugs
    .map((slug) => getService(slug))
    .filter(Boolean);
  const related = (extra?.relatedIndustrySlugs || [])
    .map((slug) => getIndustry(slug))
    .filter(Boolean) as Industry[];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.title, path: `/industries/${industry.slug}` },
          ]),
          faqSchema(industry.faqs),
        ]}
      />

      <IndustryHero industry={industry} />
      <ProgressRail />

      <section
        id="challenges"
        className="scroll-mt-28 border-b border-border bg-bg py-16 md:py-28"
      >
        <div className="container-page">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Editorial · Challenges
                </p>
                <h2 className="font-display text-3xl tracking-tight text-ink md:text-5xl">
                  What {industry.title.toLowerCase()} teams bring us
                </h2>
              </div>
              <p className="self-end text-base leading-relaxed text-ink-secondary md:text-lg">
                Patterns we see repeatedly—before tools, brand, or growth can
                compound.
              </p>
            </div>
          </Reveal>
          <ol className="mt-14 divide-y divide-border border-y border-border">
            {industry.challenges.map((challenge, i) => (
              <Reveal key={challenge} delay={i * 0.04}>
                <li className="grid grid-cols-[4.5rem_1fr] gap-4 py-8 md:grid-cols-[7rem_1fr] md:gap-10 md:py-10">
                  <span className="font-display text-4xl leading-none text-ink/15 md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-2xl self-center text-lg leading-snug text-ink md:text-2xl md:leading-snug">
                    {challenge}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="solutions"
        className="scroll-mt-28 bg-bg-soft py-16 md:py-28"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="How we help"
              description={`Practical ${industry.title.toLowerCase()} solutions—product, brand, and digital—scoped to your stage.`}
            />
          </Reveal>
          <div className="mt-14 space-y-8 md:space-y-14">
            {industry.solutions.map((solution, i) => (
              <Reveal key={solution} delay={(i % 3) * 0.05}>
                <article
                  className={cn(
                    "grid gap-6 border border-border bg-bg p-6 md:grid-cols-2 md:gap-12 md:p-10",
                    i % 2 === 1 && "md:[&>*:first-child]:order-2",
                  )}
                >
                  <div className="flex flex-col justify-between">
                    <span className="font-mono text-xs text-accent">
                      Solution {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-8 font-display text-2xl tracking-tight text-ink md:mt-16 md:text-3xl">
                      {solution}
                    </h3>
                  </div>
                  <div className="flex items-end border-t border-border pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                    <p className="text-sm leading-relaxed text-ink-secondary md:text-base">
                      Delivered as part of a phased engagement for{" "}
                      {industry.title.toLowerCase()} operators—aligned with the
                      services below and measurable milestones.
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ServicesCarousel
        title={`Services we combine for ${industry.title.toLowerCase()}`}
        description="Horizontal scrub on desktop; snap scroll on mobile."
        services={services}
      />

      {extra && (
        <section
          id="seo-guide"
          className="scroll-mt-28 bg-bg py-16 md:py-24"
        >
          <div className="container-page max-w-3xl space-y-10">
            <Reveal>
              <SectionHeading
                title={`${industry.title} software & digital guide`}
                description={`Search intent around ${extra.primaryKeyword} and related buyer questions.`}
              />
            </Reveal>
            {extra.seoBlocks.map((block) => (
              <Reveal key={block.heading}>
                <article>
                  <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
                    {block.heading}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-secondary md:text-lg">
                    {block.body}
                  </p>
                </article>
              </Reveal>
            ))}
            {extra.secondaryKeywords.length > 0 && (
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  {extra.secondaryKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="border border-border px-3 py-1.5 text-xs text-ink-muted"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <RelatedIndustriesScroller industries={related} />
      )}

      <section id="faq" className="scroll-mt-28 bg-bg-soft py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              title={`${industry.title} FAQs`}
              description="Answers teams search before booking a discovery call."
            />
          </Reveal>
          <Accordion type="single" collapsible className="mt-8">
            {industry.faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`ind-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FinalCta
        title={`Building for ${industry.title.toLowerCase()}?`}
        description={`Talk to Vedasynk about ${extra?.primaryKeyword ?? industry.title.toLowerCase()}. We’ll recommend a practical phase-one plan.`}
      />
    </>
  );
}

function IndustryHero({ industry }: { industry: Industry }) {
  const rootRef = useRef<HTMLElement>(null);
  const extra = getIndustryExtra(industry.slug);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-ind-hero-parallax]", {
        yPercent: 22,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to("[data-ind-hero-content]", {
        y: -20,
        opacity: 0.55,
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
    <ParallaxBand className="border-b border-border">
      <section
        ref={rootRef}
        className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(165deg,#fff_0%,#f4f6f9_45%,#e8eef7_100%)]" />
          <div
            data-parallax-layer
            data-ind-hero-parallax
            className="absolute -left-[12%] top-[-15%] h-[65vw] w-[65vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.12),transparent_68%)]"
          />
          <div
            data-ind-hero-parallax
            className="absolute -right-[8%] bottom-[-20%] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.08),transparent_65%)]"
          />
        </div>

        <div
          data-ind-hero-content
          className="container-page relative z-10"
        >
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Industry · {industry.title}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-4xl text-balance font-display text-4xl tracking-tight text-ink md:text-6xl md:leading-[1.05]">
              {industry.title}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-ink md:text-2xl">
              {industry.heroHeadline}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
              {industry.heroSubhead}
            </p>
          </Reveal>
          {extra?.primaryKeyword && (
            <Reveal delay={0.12}>
              <p className="mt-4 text-sm text-ink-muted">
                Focus:{" "}
                <span className="font-medium text-ink">
                  {extra.primaryKeyword}
                </span>
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
                <Link href="/industries">All industries</Link>
              </Button>
            </div>
          </Reveal>

          {extra?.stats && extra.stats.length > 0 && (
            <FadeInStagger className="mt-14 grid gap-4 border-t border-border pt-10 sm:grid-cols-3">
              {extra.stats.map((stat) => (
                <FadeItem key={stat.label}>
                  <div>
                    <p className="font-display text-2xl text-ink md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-muted">
                      {stat.label}
                    </p>
                  </div>
                </FadeItem>
              ))}
            </FadeInStagger>
          )}
        </div>
      </section>
    </ParallaxBand>
  );
}

/** Thin vertical progress rail — desktop only; not pill sticky-nav. */
function ProgressRail() {
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
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="pointer-events-none fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block xl:left-8"
    >
      <ul className="relative flex flex-col gap-0 py-1">
        <span
          aria-hidden
          className="absolute bottom-2 left-[7px] top-2 w-px bg-border"
        />
        {SECTION_IDS.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className="pointer-events-auto group flex items-center gap-3 py-2.5"
              >
                <span
                  className={cn(
                    "relative z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2 transition-all",
                    isActive
                      ? "border-accent bg-accent scale-110"
                      : "border-border bg-bg group-hover:border-accent/60",
                  )}
                />
                <span
                  className={cn(
                    "text-[11px] font-medium uppercase tracking-[0.14em] transition-colors",
                    isActive
                      ? "text-accent"
                      : "text-ink-muted group-hover:text-ink",
                  )}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ServicesCarousel({
  title,
  description,
  services,
}: {
  title: string;
  description: string;
  services: ReturnType<typeof getService>[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const items = services.filter(Boolean);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || items.length === 0) return;
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
          scrub: 0.85,
          invalidateOnRefresh: true,
          onRefresh: applyHeight,
        },
      });
    }, section);

    return () => {
      ctx.revert();
      section.style.height = "";
    };
  }, [items.length]);

  if (!items.length) return null;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative scroll-mt-28 bg-ink text-white"
      aria-labelledby="ind-services-heading"
    >
      <div className="md:sticky md:top-0 md:flex md:h-[100svh] md:flex-col md:justify-center md:overflow-hidden">
        <div className="container-page py-12 md:py-0">
          <Reveal>
            <h2
              id="ind-services-heading"
              className="max-w-2xl font-display text-3xl tracking-tight md:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-base text-white/55">{description}</p>
          </Reveal>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto px-5 pb-12 snap-x snap-mandatory md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((service, i) =>
            service ? (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="w-[min(78vw,20rem)] shrink-0 snap-start border border-white/15 bg-white/5 p-6"
              >
                <span className="font-mono text-xs text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-xl font-semibold">{service.shortTitle}</p>
                <p className="mt-2 line-clamp-3 text-sm text-white/55">
                  {service.heroSubhead}
                </p>
              </Link>
            ) : null,
          )}
        </div>

        <div
          ref={trackRef}
          className="mt-10 hidden w-max gap-5 px-8 will-change-transform md:flex lg:px-[max(2rem,calc((100vw-76rem)/2))]"
        >
          {items.map((service, i) =>
            service ? (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex h-64 w-[22rem] shrink-0 flex-col justify-between border border-white/12 bg-white/5 p-8 transition-colors hover:border-white/30 hover:bg-white/10"
              >
                <span className="font-mono text-sm text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-2xl font-semibold group-hover:text-white">
                    {service.shortTitle}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-white/50">
                    {service.heroSubhead}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-white/70">
                    View service
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}

function RelatedIndustriesScroller({ industries }: { industries: Industry[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: number) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.min(360, el.clientWidth * 0.8),
      behavior: "smooth",
    });
  }

  return (
    <section
      id="related"
      className="scroll-mt-28 bg-bg py-16 md:py-24"
      aria-labelledby="related-industries-heading"
    >
      <div className="container-page">
        <div className="flex items-end justify-between gap-4">
          <Reveal>
            <h2
              id="related-industries-heading"
              className="font-display text-3xl tracking-tight text-ink md:text-4xl"
            >
              Related industries
            </h2>
            <p className="mt-2 max-w-xl text-ink-secondary">
              Adjacent sectors when your roadmap spans more than one market.
            </p>
          </Reveal>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Scroll related industries left"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-10 w-10 items-center justify-center border border-border hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Scroll related industries right"
              onClick={() => scrollBy(1)}
              className="inline-flex h-10 w-10 items-center justify-center border border-border hover:border-accent hover:text-accent"
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
        {industries.map((ind) => {
          const extra = getIndustryExtra(ind.slug);
          return (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group w-[min(85vw,22rem)] shrink-0 snap-start border border-border bg-bg-soft p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl text-ink group-hover:text-accent">
                  {ind.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted group-hover:text-accent" />
              </div>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-secondary">
                {ind.heroSubhead}
              </p>
              {extra && (
                <p className="mt-4 text-xs text-accent">{extra.primaryKeyword}</p>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
