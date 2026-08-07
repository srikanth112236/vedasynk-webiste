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
import { INDUSTRIES } from "@/content/industries";
import { getIndustryExtra } from "@/content/industry-extras";
import { breadcrumbSchema } from "@/lib/schema";

gsap.registerPlugin(ScrollTrigger);

const APPROACH = [
  {
    n: "01",
    title: "Map the real workflow",
    body: "We start with how staff, customers, and partners actually move work—not a generic software checklist. Industry constraints shape scope from day one.",
  },
  {
    n: "02",
    title: "Ship the highest-leverage surface",
    body: "Booking, portals, field apps, or brand sites: we pick the surface that unlocks the most value first, then expand with measured phases.",
  },
  {
    n: "03",
    title: "Design for adoption and search",
    body: "Tools only matter if people use them. Customer-facing work is structured for clarity, conversion, and organic discovery alongside operations.",
  },
];

export function IndustriesHubPage() {
  const gridRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = gridRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-ind-hub-card]", root).forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.4, y: 36 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 58%",
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const marqueeNames = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />

      <PageHero
        eyebrow="Industries · Software & digital systems"
        title="Industry software and digital experiences built for how your sector actually runs"
        description="Vedasynk designs and ships sector-aware products, websites, and brand systems—healthcare, fintech, logistics, retail, education, and more—so workflows, compliance realities, and customer journeys stay in the brief."
        secondaryCta={{ label: "See portfolio", href: "/portfolio" }}
      />

      <section
        className="overflow-hidden border-b border-border bg-ink py-6 text-white"
        aria-label="Industries we serve"
      >
        <div className="flex w-max animate-marquee-slow gap-0 will-change-transform">
          {marqueeNames.map((industry, i) => (
            <Link
              key={`${industry.slug}-${i}`}
              href={`/industries/${industry.slug}`}
              className="mx-6 inline-flex items-baseline gap-3 whitespace-nowrap font-display text-2xl tracking-tight text-white/80 transition-colors hover:text-white md:mx-10 md:text-3xl"
            >
              <span className="font-mono text-xs text-white/35">
                {String((i % INDUSTRIES.length) + 1).padStart(2, "0")}
              </span>
              {industry.title}
            </Link>
          ))}
        </div>
      </section>

      <section ref={gridRef} className="bg-bg py-16 md:py-28">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                title="Sectors we know how to build for"
                description="Each industry page covers challenges, solutions, relevant services, and FAQs—written for operators evaluating software and digital partners."
              />
              <p className="font-display text-6xl leading-none text-ink/10 md:text-8xl">
                {String(INDUSTRIES.length).padStart(2, "0")}
              </p>
            </div>
          </Reveal>

          <FadeInStagger
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {INDUSTRIES.map((industry, i) => {
              const extra = getIndustryExtra(industry.slug);
              return (
                <FadeItem key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    data-ind-hub-card
                    className="group relative flex h-full flex-col border border-border bg-bg-soft p-6 transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-accent/35 hover:bg-white hover:shadow-[0_28px_60px_-42px_rgba(11,87,208,0.5)] md:p-8"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-display text-4xl leading-none text-ink/12 transition-colors group-hover:text-accent/25 md:text-5xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                    <h2 className="mt-6 font-display text-2xl tracking-tight text-ink group-hover:text-accent md:text-3xl">
                      {industry.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">
                      {industry.heroSubhead}
                    </p>
                    {extra && (
                      <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-accent">
                        {extra.primaryKeyword}
                      </p>
                    )}
                  </Link>
                </FadeItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      <section className="border-y border-border bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="How we approach industry software"
              description="A practical guide for teams comparing generic agencies with partners who understand sector workflows."
            />
          </Reveal>
          <div className="mt-12 grid gap-0 md:grid-cols-3">
            {APPROACH.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.06}>
                <article
                  className={`h-full px-0 py-8 md:px-8 md:py-0 ${
                    i > 0 ? "md:border-l md:border-border" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-accent">{item.n}</span>
                  <h3 className="mt-4 font-display text-xl text-ink md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary md:text-base">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-12 max-w-2xl space-y-4 text-base leading-relaxed text-ink-secondary">
              <p>
                Industry software fails when it ignores front-desk reality, field
                constraints, or compliance nuance. We keep discovery tight, scope
                phase one around a measurable outcome, and connect product craft
                with brand and growth when customer-facing surfaces matter.
              </p>
              <MagneticWrapper>
                <Button asChild variant="outline">
                  <Link href="/contact#book">
                    Discuss your industry brief
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </MagneticWrapper>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="Building software for your industry?"
        description="Tell us about your sector, workflows, and goals. We’ll recommend a practical first phase—product, website, or brand—without a bloated programme."
      />
    </>
  );
}
