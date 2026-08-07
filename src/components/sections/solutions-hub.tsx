"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal, FadeInStagger, FadeItem } from "@/components/motion/reveal";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { SOLUTIONS } from "@/content/solutions";
import { getSolutionExtra } from "@/content/solution-extras";
import { breadcrumbSchema } from "@/lib/schema";

gsap.registerPlugin(ScrollTrigger);

const HUB_KEYWORDS = [
  "MVP development for startups",
  "SaaS product development",
  "enterprise software development",
  "digital transformation services",
  "Bangalore product studio",
  "startup-friendly delivery",
];

export function SolutionsHubPage() {
  const listRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = listRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-sol-hub-row]", root).forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0.35, y: 28 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              end: "top 55%",
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />

      <PageHero
        eyebrow="Solutions · Bangalore HQ · Global delivery"
        title="Outcome programs for MVP, SaaS, enterprise software, and digital transformation"
        description="Vedasynk structures delivery around the result you need—validate a product, launch SaaS, modernise operations, or sequence a practical digital transformation—with SEO-ready customer surfaces and measurable milestones."
        secondaryCta={{ label: "Browse services", href: "/services" }}
      />

      <section className="border-b border-border bg-bg-soft py-5">
        <div className="container-page">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
            High-intent solution searches
          </p>
          <div className="flex flex-wrap gap-2">
            {HUB_KEYWORDS.map((kw) => (
              <span
                key={kw}
                className="rounded-full border border-border bg-bg px-3 py-1.5 text-xs text-ink-secondary"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Four programs. Clear starting points."
              description="Pick the shape that matches your stage—or ask us to recommend a path after a discovery call."
            />
          </Reveal>
          <FadeInStagger className="mt-12 grid gap-5 md:grid-cols-2" stagger={0.1}>
            {SOLUTIONS.map((solution, i) => {
              const extra = getSolutionExtra(solution.slug);
              return (
                <FadeItem key={solution.slug}>
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-border bg-bg-soft p-7 transition-all hover:border-accent/40 hover:bg-white hover:shadow-[0_28px_60px_-40px_rgba(11,87,208,0.55)] md:p-8"
                  >
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink group-hover:text-accent">
                      {solution.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary md:text-base">
                      {solution.heroSubhead}
                    </p>
                    {extra && (
                      <p className="mt-4 text-xs font-medium text-accent">
                        {extra.primaryKeyword}
                      </p>
                    )}
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink">
                      Explore solution
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </FadeItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
              Why solution programs
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Buy outcomes—not a vague bag of hours
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Solutions package services into a path with milestones: what ships,
              what waits, and how success is measured. Ideal for founders, CTOs,
              and operators who need clarity before committing budget.
            </p>
            <MagneticWrapper className="mt-8">
              <Button asChild size="lg" className="bg-white text-ink hover:bg-white/90">
                <Link href="/contact#book">
                  Get a solution recommendation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticWrapper>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "Scoped for learning or scale",
                d: "MVPs prove demand; SaaS and enterprise builds harden for operation and growth.",
              },
              {
                t: "SEO & conversion included",
                d: "Customer-facing surfaces are structured to rank and convert—not treated as an afterthought.",
              },
              {
                t: "Product + brand + growth",
                d: "Engineering and brand leadership sit together so launches feel coherent.",
              },
              {
                t: "Phased risk reduction",
                d: "Digital transformation and enterprise work ship in waves with visible ROI.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-semibold text-white">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section ref={listRef} className="bg-bg py-16 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Solution catalogue"
              description="Open any program for process, deliverables, SEO guidance, and FAQs."
            />
          </Reveal>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {SOLUTIONS.map((solution, i) => {
              const extra = getSolutionExtra(solution.slug);
              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  data-sol-hub-row
                  className="group grid grid-cols-1 items-center gap-3 py-7 md:grid-cols-[4.5rem_1fr_auto] md:gap-8 md:py-9"
                >
                  <span className="font-mono text-sm text-ink-muted group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-ink group-hover:text-accent md:text-2xl">
                      {solution.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                      {solution.metaDescription}
                    </p>
                    {extra && (
                      <p className="mt-2 text-xs text-accent">{extra.primaryKeyword}</p>
                    )}
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              title="Which solution fits your stage?"
              description="A quick guide for founders comparing MVP, SaaS, enterprise, and transformation paths."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-secondary">
              <p>
                Validating an idea with real users? Start with{" "}
                <Link href="/solutions/mvp-development" className="font-medium text-accent hover:underline">
                  MVP development
                </Link>
                . Building a subscription product with accounts and billing? Choose{" "}
                <Link href="/solutions/saas-product-development" className="font-medium text-accent hover:underline">
                  SaaS product development
                </Link>
                .
              </p>
              <p>
                Replacing spreadsheet-driven operations? Explore{" "}
                <Link href="/solutions/enterprise-software" className="font-medium text-accent hover:underline">
                  enterprise software
                </Link>
                . Modernising website, brand, and growth together? See{" "}
                <Link href="/solutions/digital-transformation" className="font-medium text-accent hover:underline">
                  digital transformation
                </Link>
                .
              </p>
              <p>
                Unsure? Book a discovery call—we will recommend a scoped phase one
                without forcing a bloated programme.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="Need a solution path tailored to your goals?"
        description="Tell us whether you are launching an MVP, SaaS, operations platform, or broader digital transformation. We’ll propose milestones, timeline, and investment clarity."
      />
    </>
  );
}
