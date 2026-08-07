"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FinalCta } from "@/components/sections/final-cta";
import { Reveal } from "@/components/motion/reveal";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import {
  PROJECTS,
  type PortfolioProject,
} from "@/content/portfolio";
import { getService } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

function parseMetric(result: string): {
  display: string;
  suffix: string;
  numeric: number | null;
} {
  const match = result.match(/(\d+(?:\.\d+)?)\s*(%|k|K|weeks|months|days)?/);
  if (!match) {
    return { display: result, suffix: "", numeric: null };
  }
  return {
    display: match[1],
    suffix: match[2] || "",
    numeric: parseFloat(match[1]),
  };
}

export function PortfolioPage({ project }: { project: PortfolioProject }) {
  const services = project.services
    .map((slug) => getService(slug))
    .filter(Boolean);
  const related = PROJECTS.filter((p) => p.slug !== project.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: project.title, path: `/portfolio/${project.slug}` },
        ])}
      />

      <header className="border-b border-border pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="container-page">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Case study · {project.category}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-5xl text-balance font-display text-4xl tracking-tight text-ink md:text-6xl lg:text-7xl lg:leading-[1.02]">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary">
              {project.summary}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">
                  Client
                </dt>
                <dd className="mt-1 font-medium text-ink">{project.client}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">
                  Year
                </dt>
                <dd className="mt-1 font-medium text-ink">{project.year}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">
                  Category
                </dt>
                <dd className="mt-1 font-medium text-ink">{project.category}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </header>

      <div className="container-page grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16 lg:py-24">
        <div className="min-w-0 space-y-0">
          <section className="py-4 md:py-8">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Challenge
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                The problem before kickoff
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-secondary md:text-lg">
                {project.challenge}
              </p>
            </Reveal>
          </section>

          <section className="-mx-5 bg-bg-soft px-5 py-14 md:-mx-8 md:px-8 md:py-20 lg:mx-0 lg:rounded-none">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Solution
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                What we designed and shipped
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-secondary md:text-lg">
                {project.solution}
              </p>
            </Reveal>
          </section>

          <ResultsMetrics results={project.results} />
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="border border-border bg-bg-soft p-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">
                Services
              </p>
              <ul className="mt-4 space-y-2">
                {services.map(
                  (service) =>
                    service && (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-sm text-ink-secondary transition-colors hover:text-accent"
                        >
                          {service.shortTitle}
                        </Link>
                      </li>
                    ),
                )}
              </ul>
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">
                Tech
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="border border-border bg-bg px-2.5 py-1 text-xs text-ink-secondary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <MagneticWrapper className="mt-8 w-full">
                <Button asChild className="w-full">
                  <Link href="/contact#book">Start a similar project</Link>
                </Button>
              </MagneticWrapper>
            </div>
          </Reveal>
        </aside>
      </div>

      <RelatedProjectsCarousel projects={related} />

      <FinalCta
        title="Have a challenge like this?"
        description="Tell us about your product, operations, or brand goal. We’ll propose a scoped phase one with clear milestones."
      />
    </>
  );
}

function ResultsMetrics({ results }: { results: string[] }) {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>("[data-metric-num]").forEach((el) => {
        const target = parseFloat(el.dataset.metricNum || "0");
        if (!Number.isFinite(target) || target === 0) return;
        const decimals = String(target).includes(".") ? 1 : 0;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
          },
          onUpdate: () => {
            el.textContent = obj.val.toFixed(decimals);
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, [results]);

  return (
    <section ref={rootRef} className="py-14 md:py-20" aria-labelledby="results-heading">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Results
        </p>
        <h2
          id="results-heading"
          className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl"
        >
          Outcomes after launch
        </h2>
      </Reveal>
      <div className="mt-10 -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {results.map((result, i) => {
          const parsed = parseMetric(result);
          return (
            <article
              key={result}
              className="w-[min(78vw,18rem)] shrink-0 snap-start border border-border bg-bg p-6 md:w-auto"
            >
              {parsed.numeric !== null ? (
                <p className="font-display text-4xl tracking-tight text-ink md:text-5xl">
                  <span data-metric-num={String(parsed.numeric)}>
                    {parsed.display}
                  </span>
                  {parsed.suffix && (
                    <span className="text-accent">{parsed.suffix}</span>
                  )}
                </p>
              ) : (
                <p className="font-display text-3xl text-ink/20">
                  {String(i + 1).padStart(2, "0")}
                </p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                {result}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function RelatedProjectsCarousel({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: number) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.min(380, el.clientWidth * 0.85),
      behavior: "smooth",
    });
  }

  if (!projects.length) return null;

  return (
    <section
      className="border-t border-border bg-bg-soft py-16 md:py-24"
      aria-labelledby="related-projects-heading"
    >
      <div className="container-page">
        <div className="flex items-end justify-between gap-4">
          <Reveal>
            <h2
              id="related-projects-heading"
              className="font-display text-3xl tracking-tight text-ink md:text-4xl"
            >
              More case work
            </h2>
            <p className="mt-2 max-w-xl text-ink-secondary">
              Other engagements across product, brand, and growth.
            </p>
          </Reveal>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Scroll related projects left"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-10 w-10 items-center justify-center border border-border hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Scroll related projects right"
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
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            className="group w-[min(85vw,24rem)] shrink-0 snap-start"
          >
            <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-bg-muted to-accent-soft">
              <div
                aria-hidden
                className="h-full w-full opacity-50"
                style={{
                  backgroundImage: `radial-gradient(circle at ${25 + (i % 4) * 18}% 40%, rgba(11,87,208,0.4), transparent 55%)`,
                }}
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-accent">
                  {p.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink group-hover:text-accent">
                  {p.title}
                </h3>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-muted group-hover:text-accent" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
