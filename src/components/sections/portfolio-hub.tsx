"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { PROJECTS } from "@/content/portfolio";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

function categoryKey(category: string) {
  return category.split("·")[0]?.trim() || category;
}

const CATEGORIES = Array.from(
  new Set(PROJECTS.map((p) => categoryKey(p.category))),
).sort();

export function PortfolioHubPage() {
  const [filter, setFilter] = useState<string>("All");
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => categoryKey(p.category) === filter);
  }, [filter]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />

      <PageHero
        eyebrow="Portfolio · Case work"
        title="Selected product, brand, and growth engagements"
        description="A gallery of Vedasynk case work—fintech MVPs, clinic platforms, SaaS analytics, brand systems, ecommerce growth, and field operations. Some client names stay under NDA; outcomes and craft do not."
        secondaryCta={{ label: "Case studies", href: "/case-studies" }}
      />

      <section className="border-b border-border bg-bg-soft py-10 md:py-14">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              title="Work that stays honest about scope"
              description="We publish engagements where milestones were clear and outcomes measurable. When confidentiality requires it, we describe the problem and result without exposing proprietary detail."
            />
            <p className="mt-5 text-sm leading-relaxed text-ink-secondary md:text-base">
              Looking for a deeper narrative? Open any project for challenge,
              solution, results, tech, and related services—or request an NDA
              walkthrough of relevant unpublished work on a discovery call.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                title="Project gallery"
                description="Filter by category. Layout animates as the set changes."
              />
              <p className="font-display text-5xl leading-none text-ink/10 md:text-7xl">
                {String(filtered.length).padStart(2, "0")}
              </p>
            </div>
          </Reveal>

          <div
            className="mt-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {["All", ...CATEGORIES].map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "border px-3.5 py-1.5 text-sm transition-colors",
                    active
                      ? "border-ink bg-ink text-white"
                      : "border-border text-ink-secondary hover:border-accent hover:text-accent",
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={filter}
              layout
              className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: reduce ? 0 : i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-bg-muted via-bg-soft to-accent-soft">
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-40 transition-opacity group-hover:opacity-60"
                        style={{
                          backgroundImage: `radial-gradient(circle at ${20 + (i % 5) * 15}% ${30 + (i % 3) * 20}%, rgba(11,87,208,0.35), transparent 55%)`,
                        }}
                      />
                      <span className="absolute bottom-4 left-4 font-display text-5xl text-white/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-accent">
                      {project.category} · {project.year}
                    </p>
                    <h2 className="mt-2 flex items-start justify-between gap-3 text-xl font-semibold tracking-tight text-ink group-hover:text-accent">
                      <span className="line-clamp-2">{project.title}</span>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-secondary">
                      {project.summary}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="mt-12 text-ink-secondary">No projects in this category.</p>
          )}
        </div>
      </section>

      <section className="border-t border-border bg-bg-soft py-16 md:py-20">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <p className="max-w-xl text-base leading-relaxed text-ink-secondary">
              Need work similar to a specific engagement? Bring your constraints
              to a discovery call—we’ll map a scoped phase one.
            </p>
          </Reveal>
          <MagneticWrapper>
            <Button asChild>
              <Link href="/contact#book">Book a discovery call</Link>
            </Button>
          </MagneticWrapper>
        </div>
      </section>

      <FinalCta
        title="Want similar outcomes for your team?"
        description="Share your product, brand, or growth goal. We’ll tell you honestly whether Vedasynk is the right fit—and what a first phase should look like."
      />
    </>
  );
}
