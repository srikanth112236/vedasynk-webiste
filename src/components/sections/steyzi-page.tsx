"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Building2,
  Check,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal, FadeInStagger, FadeItem, TextReveal } from "@/components/motion/reveal";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { ParallaxBand } from "@/components/motion/parallax-band";
import { Logo } from "@/components/layout/logo";
import { JsonLd } from "@/components/seo/json-ld";
import {
  STEYZI,
  STEYZI_AUDIENCES,
  STEYZI_DESIGN_PILLARS,
  STEYZI_FAQS,
  STEYZI_FLOW,
  STEYZI_FUTURE,
  STEYZI_OWNER_FEATURES,
  STEYZI_PLANNING,
  STEYZI_PROBLEMS,
  STEYZI_RESIDENT_FEATURES,
  STEYZI_ROADMAP,
  STEYZI_STATS,
} from "@/content/steyzi";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

gsap.registerPlugin(ScrollTrigger);

export function SteyziPageContent() {
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = heroRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-steyzi-hero-orb]", {
        yPercent: 28,
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

  useLayoutEffect(() => {
    const section = featuresRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!section || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 899px)").matches) return;

    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth + 80);
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
          onUpdate: (self) => {
            if (progress) gsap.set(progress, { scaleX: self.progress });
          },
        },
      });
    }, section);

    return () => {
      ctx.revert();
      section.style.height = "";
    };
  }, []);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Steyzi", path: "/steyzi" },
          ]),
          faqSchema([...STEYZI_FAQS]),
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: STEYZI.name,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Android, Web",
            description: STEYZI.description,
            url: STEYZI.url,
            creator: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
            },
          },
        ]}
      />

      {/* 1. Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-border pb-20 pt-28 md:pb-28 md:pt-36"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#f3f7fc_45%,#e8f0fa_100%)]" />
          <div
            data-steyzi-hero-orb
            className="absolute -left-[12%] top-[-10%] h-[55vw] w-[55vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.16),transparent_68%)]"
          />
          <div
            data-steyzi-hero-orb
            className="absolute -right-[8%] bottom-[-20%] h-[45vw] w-[45vw] rounded-full bg-[radial-gradient(circle,rgba(14,116,144,0.12),transparent_65%)]"
          />
        </div>
        <div className="container-page relative z-10 max-w-4xl">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              {STEYZI.productLine}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-display text-5xl tracking-tight text-ink md:text-7xl">
              {STEYZI.name}
            </p>
          </Reveal>
          <TextReveal
            as="h1"
            text={STEYZI.tagline}
            className="mt-6 max-w-3xl text-balance text-2xl font-semibold tracking-tight text-ink md:text-4xl md:leading-[1.2]"
          />
          <Reveal delay={0.35}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary">
              {STEYZI.description} Built in Bangalore by{" "}
              <Link href="/about" className="font-medium text-accent hover:underline">
                {SITE.name}
              </Link>
              .
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-9 flex flex-wrap gap-3">
              <MagneticWrapper>
                <Button asChild size="lg">
                  <a href={STEYZI.url} target="_blank" rel="noopener noreferrer">
                    Visit Steyzi
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </MagneticWrapper>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${STEYZI.phone}`}>Demo · {STEYZI.phoneDisplay}</a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/contact">Talk to Vedasynk</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Stats */}
      <section className="border-b border-border bg-bg-soft py-12 md:py-14">
        <div className="container-page grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STEYZI_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div className="text-center md:text-left">
                <p className="font-display text-3xl text-ink md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs leading-snug text-ink-muted md:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Problem */}
      <section className="bg-bg py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="The problem"
              title="PG ops still run on memory, paper, and chat threads"
              description="Every empty bed, missed rent, and confused resident is a silent tax on growth."
            />
          </Reveal>
          <FadeInStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEYZI_PROBLEMS.map((item) => (
              <FadeItem key={item.title}>
                <article className="h-full rounded-2xl border border-border bg-bg-soft p-6">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                    {item.text}
                  </p>
                </article>
              </FadeItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* 4. Solution */}
      <ParallaxBand className="bg-ink text-white">
        <div
          data-parallax-layer
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(11,87,208,0.45),transparent_60%)]"
        />
        <section className="relative py-20 md:py-28">
          <div className="container-page max-w-3xl">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                The Steyzi answer
              </p>
              <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">
                One living operating system for owners, hostels, and residents.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Steyzi replaces fragmented tools with a single product spine:
                admit residents, allot beds, collect rent, track expenses, and
                give tenants a digital home base—so operators scale properties
                instead of firefighting chats.
              </p>
            </Reveal>
          </div>
        </section>
      </ParallaxBand>

      {/* 5. How we planned */}
      <section className="bg-bg py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="How we planned Steyzi"
              title="Designed from field reality—not a generic property template"
              description="Vedasynk planned Steyzi around Indian PG and hostel workflows before writing features for the sake of a feature list."
            />
          </Reveal>
          <div className="mt-14 space-y-0">
            {STEYZI_PLANNING.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.04}>
                <div className="grid gap-4 border-t border-border py-8 md:grid-cols-[6rem_1fr] md:gap-10">
                  <span className="font-mono text-sm text-accent">{item.step}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-secondary">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Design for PGs */}
      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Product design"
              title="Crafted specifically for PGs and hostels"
              description="Beds, shared living, student stays, and high-churn admission seasons shaped every major decision."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {STEYZI_DESIGN_PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.05}>
                <article className="h-full rounded-3xl border border-border bg-bg p-7 md:p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    {i === 0 ? (
                      <BedDouble className="h-5 w-5" />
                    ) : i === 1 ? (
                      <Building2 className="h-5 w-5" />
                    ) : i === 2 ? (
                      <Users className="h-5 w-5" />
                    ) : (
                      <MapPin className="h-5 w-5" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary md:text-base">
                    {pillar.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7–8. Owner + resident split */}
      <section className="bg-bg py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                For owners & managers
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Control the business side of stay
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {STEYZI_OWNER_FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.03}>
                  <li className="rounded-2xl border border-border bg-bg-soft p-5">
                    <h3 className="font-semibold text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {f.text}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                For students & residents
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                A digital stay they can trust
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {STEYZI_RESIDENT_FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.03}>
                  <li className="rounded-2xl border border-border bg-bg-soft p-5">
                    <h3 className="font-semibold text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {f.text}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9. Horizontal features scrub */}
      <section
        ref={featuresRef}
        className="relative bg-ink text-white"
        aria-labelledby="steyzi-capabilities-heading"
      >
        <div className="md:sticky md:top-0 md:flex md:h-[100svh] md:flex-col md:justify-center md:overflow-hidden">
          <div className="container-page py-12 md:py-0">
            <Reveal>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                Capability strip
              </p>
              <h2
                id="steyzi-capabilities-heading"
                className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Everything operators need in one continuous system
              </h2>
            </Reveal>
            <div
              className="mt-8 hidden h-px w-full max-w-md overflow-hidden bg-white/15 md:block"
              aria-hidden
            >
              <div
                ref={progressRef}
                className="h-full origin-left scale-x-0 bg-[#9ec0ff]"
              />
            </div>
          </div>

          <div
            data-lenis-prevent
            className="mt-8 flex gap-4 overflow-x-auto px-5 pb-12 snap-x snap-mandatory md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {STEYZI_OWNER_FEATURES.map((f, i) => (
              <article
                key={f.title}
                className="w-[min(82vw,20rem)] shrink-0 snap-start rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="font-mono text-xs text-[#9ec0ff]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{f.text}</p>
              </article>
            ))}
          </div>

          <div
            ref={trackRef}
            className="mt-10 hidden w-max gap-5 px-8 will-change-transform md:flex lg:px-[max(2rem,calc((100vw-76rem)/2))]"
          >
            {STEYZI_OWNER_FEATURES.map((f, i) => (
              <article
                key={f.title}
                className="flex h-56 w-[22rem] shrink-0 flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <span className="font-mono text-sm text-[#9ec0ff]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. How it works */}
      <section className="bg-bg py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="How Steyzi works"
              title="From first bed allotment to multi-property rhythm"
              description="A simple operating loop owners can teach staff in a day."
            />
          </Reveal>
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEYZI_FLOW.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05}>
                <li className="relative h-full rounded-2xl border border-border bg-bg-soft p-6">
                  <span className="font-mono text-xs text-accent">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 11. Audiences */}
      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Who grows with Steyzi"
              title="Owners, hostels, students—and the cities between them"
              description="As more PGs join, residents and vendor partners gain a denser network across India."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEYZI_AUDIENCES.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.04}>
                <article className="h-full rounded-2xl border border-border bg-bg p-6">
                  <h3 className="text-lg font-semibold text-ink">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                    {a.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Future ecosystem */}
      <section className="relative overflow-hidden bg-bg py-16 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-20 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.1),transparent_65%)]"
        />
        <div className="container-page relative">
          <Reveal>
            <SectionHeading
              eyebrow="Future services"
              title="Vendor collaborations & city experiences on the roadmap"
              description="Steyzi is evolving from PG operations software into a network where owners, residents, and partners meet."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {STEYZI_FUTURE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="rounded-3xl border border-border bg-bg-soft p-8">
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-secondary">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-base leading-relaxed text-ink-secondary">
              Imagine laundry, meals, movers, Wi‑Fi partners, and local activity
              discovery available to residents across cities—while owners unlock
              better vendor access as the Steyzi network grows. That ecosystem is
              how Steyzi compounds value beyond the monthly rent cycle.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 13. Roadmap */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="container-page">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
              Product roadmap
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              From core OS to network scale
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STEYZI_ROADMAP.map((phase, i) => (
              <Reveal key={phase.phase} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#9ec0ff]">
                    {phase.phase}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{phase.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-white/70"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#9ec0ff]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Built by Vedasynk */}
      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Built by Vedasynk
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Flagship proof of how we ship SaaS end-to-end
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-secondary md:text-lg">
              Steyzi is not a side experiment. It is Vedasynk’s flagship product—
              planned, designed, engineered, and grown by the same studio that
              builds client software, brands, and SEO systems. When Steyzi gains
              PG, hostel, and resident users, that demand also surfaces teams who
              need custom product work from Vedasynk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/about">
                  About Vedasynk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/solutions/saas-product-development">
                  SaaS product services
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/services/mobile-app-development">Mobile apps</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-border bg-bg p-8">
              <p className="text-sm font-medium text-ink">Internal growth loop</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-secondary">
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Steyzi attracts PG/hostel operators searching for management software
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Residents and students discover a modern stay experience
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Vendors and city partners join the expanding network
                </li>
                <li className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Buyers who need custom SaaS, apps, or branding find Vedasynk through Steyzi
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 15. Tech & trust */}
      <section className="bg-bg py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Trust & delivery"
              title="Product standards behind the flagship"
              description="The same discipline we bring to client SaaS: clear roles, measurable ops, and interfaces people can learn quickly."
            />
          </Reveal>
          <ul className="space-y-3">
            {[
              "Owner dashboard + resident login as first-class surfaces",
              "Mobile-ready daily ops for wardens and managers",
              "Occupancy and rent as source-of-truth metrics",
              "Roadmap toward partner services without breaking core ops",
              "Bangalore product team with founder-level ownership",
              "Paths into Vedasynk for custom extensions and integrations",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 0.03}>
                <li className="flex gap-3 rounded-xl border border-border bg-bg-soft px-4 py-3.5 text-sm text-ink-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 16. Cities narrative */}
      <section className="border-y border-border bg-bg-soft py-14 md:py-16">
        <div className="container-page">
          <Reveal>
            <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Built for Indian stay markets
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-center text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Bangalore · Hyderabad · Chennai · Mumbai · Delhi · Pune — and every
              city where PGs and hostels house the next generation of talent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 17. FAQ */}
      <section className="bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              title="Steyzi FAQs"
              description="Straight answers for owners evaluating PG management software—and teams curious about Vedasynk’s flagship product."
            />
          </Reveal>
          <Accordion type="single" collapsible className="mt-8">
            {STEYZI_FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`steyzi-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 18. Dual CTA bridge */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-bg p-8">
              <h2 className="text-2xl font-semibold text-ink">Run your PG on Steyzi</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                Book a demo, download the app, and bring residents, rent, and
                beds into one system.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={STEYZI.url} target="_blank" rel="noopener noreferrer">
                    Open steyzi.com
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={STEYZI.urlAlt} target="_blank" rel="noopener noreferrer">
                    steyzi.in
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-3xl border border-border bg-ink p-8 text-white">
              <Logo variant="white" height={28} className="mb-5" />
              <h2 className="text-2xl font-semibold">Need a SaaS like Steyzi?</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Vedasynk designs and ships custom SaaS, mobile apps, branding,
                and growth systems for founders who want the same end-to-end
                craft.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-white text-ink hover:bg-white/90">
                  <Link href="/contact#book">Book discovery</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/solutions/saas-product-development">
                    SaaS solutions
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta title="Want a flagship product—or a PG that runs itself?" />
    </>
  );
}
