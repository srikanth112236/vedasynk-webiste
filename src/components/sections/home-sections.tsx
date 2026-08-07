"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Reveal,
  FadeInStagger,
  FadeItem,
} from "@/components/motion/reveal";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { PRIMARY_SERVICES } from "@/content/services";
import { TRUST_ITEMS, WHY_POINTS, HOME_FAQS, TECH_STACK_GROUPS } from "@/content/home";
import { FEATURED_PROJECTS } from "@/content/portfolio";
import { SOLUTIONS } from "@/content/solutions";
import { INDUSTRIES } from "@/content/industries";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { FinalCta } from "@/components/sections/final-cta";
import { FOUNDER } from "@/lib/constants";
import { STEYZI, STEYZI_OWNER_FEATURES, STEYZI_FUTURE } from "@/content/steyzi";
import { OpenLeadButton } from "@/components/forms/open-lead-button";
import { Logo } from "@/components/layout/logo";

const PROJECT_GRADIENTS = [
  "from-[#dbe7fb] via-[#eef2f8] to-[#f7f8fa]",
  "from-[#e8f0fe] via-[#f0f4fa] to-[#ffffff]",
  "from-[#e2eaf6] via-[#f5f7fb] to-[#eef1f6]",
  "from-[#dce8f7] via-[#f8f9fb] to-[#e8eef7]",
];

export function TrustMarquee() {
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS];
  return (
    <section className="overflow-hidden border-y border-border bg-bg py-5">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent" />
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-10 text-sm text-ink-secondary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Software, design, and growth under one roof"
            description="Custom website development, mobile apps, UI/UX, branding, SEO, and digital marketing—scoped so Bangalore startups and global teams ship without losing quality."
          />
        </Reveal>

        <FadeInStagger className="mt-14 divide-y divide-border border-y border-border">
          {PRIMARY_SERVICES.map((service, i) => (
            <FadeItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid grid-cols-1 items-center gap-4 py-7 transition-colors md:grid-cols-[5rem_1fr_auto] md:gap-8 md:py-9"
              >
                <span className="font-mono text-sm text-ink-muted transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent md:text-3xl">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-secondary md:text-base">
                    {service.heroSubhead}
                  </p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </FadeItem>
          ))}
        </FadeInStagger>

        <div className="mt-10">
          <MagneticWrapper strength={0.2}>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View all 16 services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </MagneticWrapper>
        </div>
      </div>
    </section>
  );
}

export function SolutionsPreview() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,87,208,0.35),transparent_50%)]"
      />
      <div className="container-page relative">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Solutions
          </p>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Solutions that turn budget into shipped products
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
            Clear packages for MVP development, SaaS products, enterprise
            software, and digital transformation—so you buy outcomes, not vague
            retainers.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {SOLUTIONS.map((sol, i) => (
            <Reveal key={sol.slug} delay={i * 0.06}>
              <Link
                href={`/solutions/${sol.slug}`}
                className="group flex h-full flex-col bg-ink p-8 transition-colors hover:bg-[#121316] md:p-10"
              >
                <span className="font-mono text-xs text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight group-hover:text-[#9ec0ff]">
                  {sol.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                  {sol.heroSubhead}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/80">
                  Explore solution
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Why Vedasynk
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Senior craft. Honest scope. Measurable progress.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-secondary">
              A young Bangalore software studio—about nine months old—led by
              people with six years of shipping websites, apps, brands, and
              campaigns. You get founder-level attention without agency bloat,
              and content structured to help you rank and convert.
            </p>

            <div className="mt-10 space-y-6 border-t border-border pt-8">
              <div>
                <p className="font-display text-2xl text-ink">{FOUNDER.srikan.name}</p>
                <p className="mt-1 text-sm text-ink-muted">{FOUNDER.srikan.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {FOUNDER.srikan.bio}
                </p>
              </div>
              <div>
                <p className="font-display text-2xl text-ink">
                  {FOUNDER.manikaysm.name}
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  {FOUNDER.manikaysm.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {FOUNDER.manikaysm.bio}
                </p>
              </div>
            </div>
          </Reveal>

          <FadeInStagger className="grid gap-5 sm:grid-cols-2">
            {WHY_POINTS.map((point) => (
              <FadeItem key={point.title}>
                <div className="h-full rounded-2xl border border-border bg-bg-soft p-6 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(11,87,208,0.35)]">
                  <h3 className="text-lg font-semibold text-ink">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                    {point.description}
                  </p>
                </div>
              </FadeItem>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}

export function IndustriesPreview() {
  return (
    <section className="overflow-hidden bg-bg py-24 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Industry software and digital systems that fit real workflows"
            description="Healthcare, education, real estate, retail, finance, logistics, SaaS, startups, and more—so your product and marketing match how buyers in that market decide."
          />
        </Reveal>
      </div>

      <div className="mt-12">
        <div className="flex w-max animate-marquee-slow gap-3 px-4 will-change-transform">
          {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
            <Link
              key={`${ind.slug}-${i}`}
              href={`/industries/${ind.slug}`}
              className="rounded-full border border-border bg-bg px-5 py-2.5 text-sm text-ink-secondary transition-all hover:border-accent hover:bg-accent-soft hover:text-accent"
            >
              {ind.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioPreview() {
  return (
    <section className="bg-bg-soft py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Work"
              title="Selected project highlights"
              description="Representative engagements across product, brand, and growth. Client names generalized where NDAs apply."
            />
            <MagneticWrapper strength={0.2}>
              <Button asChild variant="outline">
                <Link href="/portfolio">Browse portfolio</Link>
              </Button>
            </MagneticWrapper>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {FEATURED_PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div
                  className={`relative aspect-[16/11] overflow-hidden rounded-2xl bg-gradient-to-br ${PROJECT_GRADIENTS[i % PROJECT_GRADIENTS.length]}`}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(11,87,208,0.18),transparent_55%)]" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <span className="rounded-full border border-white/50 bg-white/70 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
                      {project.year}
                    </span>
                    <span className="flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-ink text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <motion.div
                    className="absolute inset-0 scale-100 transition-transform duration-700 group-hover:scale-105"
                    aria-hidden
                  />
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-secondary">
                  {project.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechPreview() {
  return (
    <section className="bg-bg py-24 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Technology"
            title="Modern stacks, pragmatic choices"
            description="We pick tools for maintainability, security, and speed—not hype."
          />
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_STACK_GROUPS.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.06}>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  {group.name}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border/80 pb-2 text-sm text-ink-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Button asChild variant="outline">
            <Link href="/technology">Technology standards</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FaqPreview() {
  return (
    <section className="bg-bg-soft py-24 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions founders ask first"
            description="Straight answers before you book a call."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible>
            {HOME_FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/** Home spotlight 1 — flagship product intro */
export function SteyziFlagshipPreview() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.45),transparent_65%)]"
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="mb-5">
            <Logo variant="white" height={28} />
          </div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#9ec0ff]">
            Flagship SaaS · Built by Vedasynk
          </p>
          <h2 className="font-display text-4xl tracking-tight md:text-5xl lg:text-6xl">
            {STEYZI.name}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            {STEYZI.tagline} Our own product for PG owners, hostel managers, and
            residents—proof of how Vedasynk plans, designs, and ships SaaS that
            operators actually use.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticWrapper>
              <Button asChild size="lg" className="bg-white text-ink hover:bg-white/90">
                <Link href="/steyzi">
                  Explore Steyzi
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticWrapper>
            <MagneticWrapper strength={0.25}>
              <OpenLeadButton
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
                title="Ask about Steyzi or a custom SaaS"
                description="Tell us if you need Steyzi for your PG—or a product built like it."
              >
                Request a demo / brief
              </OpenLeadButton>
            </MagneticWrapper>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <a href={STEYZI.url} target="_blank" rel="noopener noreferrer">
                steyzi.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
            <p className="text-sm font-medium text-white/90">Why it matters</p>
            <ul className="mt-5 space-y-4">
              {[
                "Replaces registers, spreadsheets, and WhatsApp chaos",
                "Owner dashboard + dedicated resident login",
                "Built for Indian PGs, hostels & multi-city growth",
                "Roadmap: vendors, city activities & network perks",
              ].map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed text-white/65">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9ec0ff]" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Home spotlight 2 — how Steyzi works + future ecosystem teaser */
export function SteyziDepthPreview() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Inside Steyzi"
            title="How we designed a stay OS—and where it goes next"
            description="From bed-level occupancy to future vendor collaborations and city experiences for students and residents."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEYZI_OWNER_FEATURES.slice(0, 3).map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <article className="h-full rounded-2xl border border-border bg-bg-soft p-6">
                <h3 className="text-lg font-semibold text-ink">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  {f.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {STEYZI_FUTURE.slice(0, 2).map((f, i) => (
            <Reveal key={f.title} delay={0.1 + i * 0.05}>
              <article className="rounded-2xl border border-accent/15 bg-[linear-gradient(135deg,#f7f9fc_0%,#eef3fb_100%)] p-6 md:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  Coming ecosystem
                </p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  {f.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="/steyzi">
                Full Steyzi showcase
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="max-w-md text-sm text-ink-secondary">
              See planning, design for PGs/hostels, resident experience, roadmap,
              and how Steyzi growth feeds Vedasynk.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { FinalCta };
