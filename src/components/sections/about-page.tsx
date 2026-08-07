"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Lock,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal, FadeInStagger, FadeItem, TextReveal } from "@/components/motion/reveal";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { ParallaxBand } from "@/components/motion/parallax-band";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { FOUNDER, SITE } from "@/lib/constants";
import { breadcrumbSchema, faqSchema, organizationSchema } from "@/lib/schema";

gsap.registerPlugin(ScrollTrigger);

const SEO_KEYWORDS = [
  "software development company Bangalore",
  "digital agency India",
  "startup product studio",
  "MVP development partner",
  "branding and web development agency",
  "SEO and digital marketing studio",
  "custom web app development",
  "UI UX design for startups",
  "Bangalore tech studio for SMEs",
];

const VALUES = [
  {
    icon: Target,
    title: "Outcomes over theatre",
    description:
      "Every engagement starts with a business result—leads, activation, operational clarity—not a slide deck of buzzwords.",
  },
  {
    icon: Sparkles,
    title: "Craft you can feel",
    description:
      "Interfaces, brands, and codebases should look and behave premium. Quality is how we earn trust in the first five seconds.",
  },
  {
    icon: Lock,
    title: "Honesty and NDAs",
    description:
      "We scope what we can deliver, decline what we cannot, and treat your roadmap as confidential by default.",
  },
  {
    icon: Users,
    title: "Founder-level attention",
    description:
      "As a young studio, client work is led by the people who own outcomes—not handed to a rotating bench with no context.",
  },
  {
    icon: Rocket,
    title: "Ship, measure, improve",
    description:
      "Working software and live campaigns beat speculation. We instrument launches so the next release is smarter.",
  },
  {
    icon: Globe2,
    title: "Bangalore roots, global delivery",
    description:
      "We work across India and international markets in English—with clear communication and written milestones.",
  },
];

const CAPABILITIES = [
  {
    title: "Custom software & web apps",
    href: "/services/software-development",
    keyword: "Software development company",
    text: "Product engineering for startups and operators who need reliable systems—APIs, dashboards, and workflows that hold up after launch.",
  },
  {
    title: "Website development & SEO",
    href: "/services/web-development",
    keyword: "Website development & SEO",
    text: "Conversion-focused marketing sites with technical SEO foundations, Core Web Vitals discipline, and pages buyers can actually find.",
  },
  {
    title: "Mobile app development",
    href: "/services/mobile-app-development",
    keyword: "Mobile app development",
    text: "iOS and Android MVPs and production apps with clear onboarding journeys, push flows, and release discipline.",
  },
  {
    title: "UI/UX & product design",
    href: "/services/ui-ux-design",
    keyword: "UI/UX design studio",
    text: "Flows and interfaces that reduce drop-off, clarify next steps, and support activation without guessing at research.",
  },
  {
    title: "Branding & logo design",
    href: "/services/branding",
    keyword: "Brand identity design",
    text: "Identity systems that work across website, product, pitch decks, and campaigns—not a logo that dies in a folder.",
  },
  {
    title: "Digital marketing & growth",
    href: "/services/digital-marketing",
    keyword: "Digital marketing agency",
    text: "Creative and acquisition aligned to what the product actually delivers—so paid and organic spend is not wasted on vague promises.",
  },
  {
    title: "SaaS product development",
    href: "/services/saas-development",
    keyword: "SaaS development studio",
    text: "Multi-tenant products with onboarding, billing-ready architecture, and UX that supports activation—not just a dashboard shell.",
  },
  {
    title: "MVP development",
    href: "/services/mvp-development",
    keyword: "MVP development for startups",
    text: "Scoped first versions for founders who need proof, not endless backlog theatre—demo-led and decision-ready.",
  },
];

const TIMELINE = [
  {
    year: "2019–2024",
    title: "Years of delivery before the brand",
    body: "Srikanth spent six years shipping applications, websites, and mobile products. Manikayam built expertise in brand identity, social, and digital marketing—client work that shaped how Vedasynk operates today.",
  },
  {
    year: "2025",
    title: "Vedasynk Technologies founded in Bangalore",
    body: "We launched a studio to unite product engineering with brand and growth—so startups and SMEs stop juggling disconnected vendors.",
  },
  {
    year: "First 9 months",
    title: "Focused client delivery",
    body: "MVPs, marketing sites, brand systems, and growth engagements—scoped tightly, demo-led, and founder-attended. We stayed small on purpose.",
  },
  {
    year: "Now",
    title: "Building authority through craft and content",
    body: "Expanding service depth, industry playbooks, and educational resources so organic search finds teams who need a serious product and brand partner.",
  },
];

const AUDIENCE = [
  {
    title: "Startup founders",
    body: "Need an MVP, launch website, and brand story before the next raise or customer conversation.",
  },
  {
    title: "CTOs & product leads",
    body: "Want senior engineering for web, mobile, APIs, and SaaS foundations without losing architectural control.",
  },
  {
    title: "Marketing & brand teams",
    body: "Need websites, identity, SEO, and campaigns that convert—not random creative disconnected from the product.",
  },
  {
    title: "SME operators",
    body: "Modernising booking, portals, or internal tools with clear training and post-launch support.",
  },
];

const TRUST = [
  "Written scope and milestones on every engagement",
  "NDA-friendly conversations by default",
  "Weekly demos you can click—not only slides",
  "SEO, performance, and analytics considered early",
  "Clear ownership of code, designs, and documentation",
  "Honest fit conversations—we decline mismatched work",
];

const ABOUT_FAQS = [
  {
    question: "What is Vedasynk Technologies?",
    answer:
      "Vedasynk Technologies is a Bangalore-based software and digital studio that builds custom websites, web apps, mobile apps, brand identities, SEO, and digital marketing systems for startups and growing businesses in India and worldwide.",
  },
  {
    question: "How old is the company?",
    answer:
      "Vedasynk was founded in 2025 and is about nine months old. The founders bring six years of hands-on delivery experience in applications, websites, mobile products, branding, and digital marketing.",
  },
  {
    question: "Who leads client work?",
    answer:
      "Srikanth leads product and engineering. Manikayam leads brand and growth. Client engagements are founder-attended so you get senior judgment—not a revolving junior bench.",
  },
  {
    question: "Do you work only with startups?",
    answer:
      "Most partners are startups and SMEs, but we also support operators and product teams modernising customer-facing software, brands, and growth systems.",
  },
  {
    question: "Where are you based, and who do you serve?",
    answer: `We are headquartered in ${SITE.city}, ${SITE.region}, India, and deliver globally in English across India, the Middle East, the US, Europe, and more.`,
  },
  {
    question: "How do we start working with Vedasynk?",
    answer:
      "Book a discovery call, WhatsApp the team, or email sales@vedasynk.com with your goal and timeline. We respond with clarifying questions and a recommended scoped path.",
  },
];

const STATS = [
  { value: "6+", label: "Years founder delivery experience" },
  { value: "16", label: "Service lines across product & growth" },
  { value: "12", label: "Industry playbooks" },
  { value: "1", label: "Accountable Bangalore studio" },
];

export function AboutPageContent() {
  const heroRef = useRef<HTMLElement>(null);
  const manifestoRef = useRef<HTMLElement>(null);
  const timelineFixedRef = useRef<HTMLElement>(null);
  const [activeTimeline, setActiveTimeline] = useState(0);

  useLayoutEffect(() => {
    const root = heroRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-about-hero-parallax]", {
        yPercent: 25,
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
    const root = manifestoRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("[data-manifesto-line]", root)
        .forEach((line) => {
          gsap.fromTo(
            line,
            { opacity: 0.2, x: -20 },
            {
              opacity: 1,
              x: 0,
              ease: "none",
              scrollTrigger: {
                trigger: line,
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

  useEffect(() => {
    const root = timelineFixedRef.current;
    if (!root) return;
    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>("[data-timeline-item]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const idx = visible?.target.getAttribute("data-timeline-item");
        if (idx != null) setActiveTimeline(Number(idx));
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.25, 0.5] },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const root = timelineFixedRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("[data-timeline-item]", root)
        .forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0.3, y: 28 },
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

  const timelineActive = TIMELINE[activeTimeline] ?? TIMELINE[0];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          organizationSchema(),
          faqSchema(ABOUT_FAQS),
        ]}
      />

      {/* 1. Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-border pb-16 pt-28 md:pb-24 md:pt-36"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,#f7f8fa_60%,#eef2f8_100%)]" />
          <div
            data-about-hero-parallax
            className="absolute -left-[15%] top-[-15%] h-[65vw] w-[65vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.14),transparent_68%)]"
          />
          <div
            data-about-hero-parallax
            className="absolute -right-[10%] top-[5%] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.1),transparent_65%)]"
          />
        </div>
        <div className="container-page relative z-10 max-w-3xl">
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              About · Bangalore HQ · Global delivery
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-display text-4xl text-ink md:text-5xl lg:text-6xl">
              Vedasynk
            </p>
          </Reveal>
          <TextReveal
            as="h1"
            text="A premium software and digital studio for startups that need product, brand, and growth together."
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          />
          <Reveal delay={0.35}>
            <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
              {SITE.name} is a young Bangalore company founded in {SITE.foundedYear}
              —about nine months old—led by founders with six years of shipping
              websites, apps, brands, and campaigns. We build systems that convert
              visitors into customers and products into businesses.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticWrapper>
                <Button asChild size="lg">
                  <Link href="/contact#book">Book a discovery call</Link>
                </Button>
              </MagneticWrapper>
              <Button asChild variant="outline" size="lg">
                <Link href="/process">Our process</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Keyword trust strip */}
      <section className="border-b border-border bg-bg-soft py-4" aria-label="Focus areas">
        <div className="container-page flex flex-wrap gap-2">
          {SEO_KEYWORDS.map((kw) => (
            <span
              key={kw}
              className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-ink-muted"
            >
              {kw}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Stats */}
      <section className="bg-bg py-14 md:py-16">
        <div className="container-page grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-bg-soft p-5 text-center md:p-6">
                <p className="font-display text-3xl text-ink md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs leading-snug text-ink-muted md:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Story */}
      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              title="Why Vedasynk exists"
              description="Closing the gap between engineering shops and creative agencies."
            />
          </Reveal>
          <div className="space-y-5 text-base leading-relaxed text-ink-secondary md:text-lg">
            <Reveal>
              <p>
                Too many teams were forced to choose: a development shop that
                treated brand as an afterthought, or a creative team that could
                not ship production software. Founders paid twice—in money and in
                coordination—and still launched experiences that felt fragmented.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Vedasynk was founded to end that trade-off. We are a software
                development company and digital agency in one studio: custom
                websites, web apps, mobile products, UI/UX, branding, SEO, and
                digital marketing—scoped for startups and SMEs who need senior
                craft without enterprise bloat.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                We are still early. We do not pretend to be a thousand-person
                consultancy. We take on work we can stand behind, tell hard truths
                early, and deliver with the people whose names are on the company.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Manifesto parallax */}
      <ParallaxBand className="bg-ink text-white">
        <div
          data-parallax-layer
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(11,87,208,0.4),transparent_60%)]"
        />
        <section ref={manifestoRef} className="relative py-20 md:py-28">
          <div className="container-page">
            <p className="mb-10 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
              The Vedasynk standard
            </p>
            <div className="max-w-4xl space-y-5 md:space-y-7">
              {[
                "Ship software people trust.",
                "Design brands people remember.",
                "Grow traffic that converts.",
                "Tell the truth about scope.",
              ].map((line) => (
                <p
                  key={line}
                  data-manifesto-line
                  className="font-display text-3xl leading-[1.15] tracking-tight md:text-5xl lg:text-6xl"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>
      </ParallaxBand>

      {/* 6. Founders */}
      <section className="bg-bg py-16 md:py-28">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Leadership"
              title="Founders who still do the work"
              description="Two leads. One accountable partnership across product and brand."
            />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
            <Reveal>
              <article className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-bg-muted via-accent-soft to-bg-soft transition-transform duration-500 group-hover:scale-[1.01]" />
                <h3 className="mt-6 font-display text-3xl text-ink">
                  {FOUNDER.srikan.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {FOUNDER.srikan.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary md:text-base">
                  {FOUNDER.srikan.bio} He leads architecture decisions, delivery
                  cadence, and technical quality so MVPs and platforms remain
                  maintainable after launch.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
                  {[
                    "Web apps, APIs, and mobile products",
                    "Performance, security, and cloud foundations",
                    "Honest scoping for founders and CTOs",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-accent-soft via-bg-soft to-bg-muted transition-transform duration-500 group-hover:scale-[1.01]" />
                <h3 className="mt-6 font-display text-3xl text-ink">
                  {FOUNDER.manikaysm.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {FOUNDER.manikaysm.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary md:text-base">
                  {FOUNDER.manikaysm.bio} He ensures the website, product UI, and
                  campaigns tell one story—so organic and paid traffic meet a
                  coherent experience.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
                  {[
                    "Brand identity and logo systems",
                    "Social and digital marketing creative",
                    "Launch messaging that converts",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Values */}
      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Values"
              title="What we optimise for on every engagement"
              description="Principles that protect quality, trust, and organic growth outcomes."
            />
          </Reveal>
          <FadeInStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <FadeItem key={value.title}>
                  <article className="h-full rounded-2xl border border-border bg-bg p-6 transition-shadow hover:shadow-[0_24px_50px_-34px_rgba(11,87,208,0.4)]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-accent">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {value.description}
                    </p>
                  </article>
                </FadeItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* 8. Fixed scroll timeline */}
      <section
        ref={timelineFixedRef}
        className="bg-bg py-16 md:py-24"
        aria-labelledby="timeline-heading"
      >
        <div className="container-page">
          <Reveal>
            <h2
              id="timeline-heading"
              className="text-3xl font-semibold tracking-tight text-ink md:text-4xl"
            >
              From craft to company
            </h2>
            <p className="mt-3 max-w-2xl text-ink-secondary">
              Scroll the timeline—the summary panel stays fixed on desktop with
              context for each chapter.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <div className="space-y-4">
              {TIMELINE.map((item, i) => (
                <article
                  key={item.year}
                  data-timeline-item={i}
                  className={`rounded-2xl border p-5 md:p-6 ${
                    activeTimeline === i
                      ? "border-accent bg-accent-soft"
                      : "border-border bg-bg-soft"
                  }`}
                >
                  <p className="font-mono text-xs text-accent">{item.year}</p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-border bg-bg-soft p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {timelineActive.year}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink md:text-3xl">
                  {timelineActive.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary md:text-base">
                  {timelineActive.body}
                </p>
                <div className="mt-7">
                  <MagneticWrapper>
                    <Button asChild>
                      <Link href="/contact#book">
                        Talk to the founders
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

      {/* 9. Who we serve */}
      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Who we serve"
              title="Built for founders, CTOs, marketers, and operators"
              description="High-intent audiences searching for a software and digital partner in Bangalore—and beyond."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {AUDIENCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="rounded-2xl border border-border bg-bg p-6 md:p-7">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary md:text-base">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Capabilities — vertical scroll drives horizontal track (Lenis-safe) */}
      <AboutCapabilitiesHorizontal />

      {/* 11. How we work */}
      <section className="relative overflow-hidden bg-ink py-16 text-white md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.35),transparent_65%)]"
        />
        <div className="container-page relative grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
              How we work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Phased, written, demo-led delivery from {SITE.city}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Based in {SITE.city}, we deliver for clients across India and
              internationally. You will know what ships next, who owns it, and what
              was deliberately deferred. If you want theatre and endless slide
              decks, we are the wrong partner.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-white text-ink hover:bg-white/90"
            >
              <Link href="/process">
                See the full process
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
          <ul className="space-y-4">
            {[
              "Discover outcomes and constraints",
              "Define scope, architecture, and milestones",
              "Design flows and brand direction",
              "Build in short cycles with demos",
              "Launch with monitoring and handoff",
              "Improve using real metrics",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <li className="flex gap-4 border-t border-white/10 py-4 text-white/80 transition-colors hover:text-white">
                  <span className="font-mono text-sm text-[#9ec0ff]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 12. Trust commitments */}
      <section className="bg-bg py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Trust"
              title="Commitments that protect your investment"
              description="Practical promises for teams evaluating a Bangalore software and digital partner."
            />
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {TRUST.map((item, i) => (
              <Reveal key={item} delay={i * 0.03}>
                <li className="flex gap-3 rounded-xl border border-border bg-bg-soft px-4 py-4 text-sm text-ink-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 13. Location / contact SEO */}
      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Location"
              title={`${SITE.name} — ${SITE.city}, India`}
              description="A LocalBusiness presence with global delivery."
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-secondary">
              <p>
                Our headquarters are in {SITE.city}, {SITE.region}. We serve
                startups and growing businesses across India and internationally,
                with English as our working language and remote collaboration as a
                default.
              </p>
              <p>
                Sales:{" "}
                <a
                  href={`mailto:${SITE.emailSales}`}
                  className="font-medium text-accent hover:underline"
                >
                  {SITE.emailSales}
                </a>
                {" · "}
                Phone:{" "}
                <a
                  href={`tel:${SITE.phone}`}
                  className="font-medium text-accent hover:underline"
                >
                  {SITE.phoneDisplay}
                </a>
                {" · "}
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  className="font-medium text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.whatsappDisplay}
                </a>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/careers">Careers</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 14. SEO narrative */}
      <section className="bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl space-y-8">
          <Reveal>
            <SectionHeading
              title="A software development company that also builds brands that rank"
              description="Why teams searching for an agency in Bangalore choose an integrated studio."
            />
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-ink-secondary md:text-lg">
              Most “digital agencies” specialise in either code or creative. Most
              “software companies” underinvest in messaging and SEO. Vedasynk is
              built for the overlap: product engineering strong enough for
              production, and brand/growth craft strong enough to earn organic
              attention. That combination is how startups turn websites and apps
              into pipeline.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-ink-secondary md:text-lg">
              Teams evaluating a Bangalore software development company or digital
              marketing partner usually need clarity on scope, ownership, and SEO
              foundations—not a bloated proposal. We document milestones, ship in
              demo-led cycles, and structure pages so buyers searching for MVP
              development, SaaS product engineering, branding, and technical SEO
              can find the right next step without guessing.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-ink-secondary md:text-lg">
              Explore our{" "}
              <Link href="/services" className="font-medium text-accent hover:underline">
                services
              </Link>
              ,{" "}
              <Link href="/solutions" className="font-medium text-accent hover:underline">
                solutions
              </Link>
              ,{" "}
              <Link href="/industries" className="font-medium text-accent hover:underline">
                industries
              </Link>
              , and{" "}
              <Link href="/resources" className="font-medium text-accent hover:underline">
                founder resources
              </Link>{" "}
              to see how we structure delivery for MVP development, SaaS products,
              branding, and SEO-led growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 15. FAQs */}
      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              title="About Vedasynk FAQs"
              description="Straight answers for teams researching a Bangalore software and digital partner."
            />
          </Reveal>
          <Accordion type="single" collapsible className="mt-8">
            {ABOUT_FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`about-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FinalCta title="Curious if we’re the right fit?" />
    </>
  );
}

/** Desktop: sticky viewport + scrubbed X (works with Lenis). Mobile: native snap + lenis-prevent. */
function AboutCapabilitiesHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
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
            if (progress) {
              gsap.set(progress, { scaleX: self.progress });
            }
          },
        },
      });

      gsap.fromTo(
        track.querySelectorAll("[data-cap-card]"),
        { opacity: 0.55, y: 28 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 20%",
            scrub: true,
          },
        },
      );
    }, section);

    return () => {
      ctx.revert();
      section.style.height = "";
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg"
      aria-labelledby="capabilities-heading"
    >
      <div className="md:sticky md:top-0 md:flex md:h-[100svh] md:flex-col md:justify-center md:overflow-hidden">
        <div className="container-page py-12 md:py-0">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Capabilities · Product · Brand · Growth
            </p>
            <h2
              id="capabilities-heading"
              className="max-w-3xl text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl"
            >
              What we build and market
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
              Capability pages written for organic search—and for buyers who need
              clear next steps across software development, websites, mobile apps,
              UI/UX, branding, and digital marketing from our Bangalore studio.
            </p>
          </Reveal>
          <div
            className="mt-8 hidden h-px w-full max-w-md overflow-hidden bg-border md:block"
            aria-hidden
          >
            <div
              ref={progressRef}
              className="h-full origin-left scale-x-0 bg-accent"
            />
          </div>
        </div>

        {/* Mobile native snap — data-lenis-prevent so wheel/touch isn't stolen */}
        <div
          data-lenis-prevent
          className="mt-8 flex gap-4 overflow-x-auto px-5 pb-12 snap-x snap-mandatory md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CAPABILITIES.map((cap, i) => (
            <Link
              key={cap.href}
              href={cap.href}
              className="group w-[min(85vw,22rem)] shrink-0 snap-start rounded-2xl border border-border bg-bg-soft p-6 transition-colors hover:border-accent/40"
            >
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-ink group-hover:text-accent">
                  {cap.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted group-hover:text-accent" />
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-muted">
                {cap.keyword}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                {cap.text}
              </p>
            </Link>
          ))}
        </div>

        {/* Desktop scrub track */}
        <div
          ref={trackRef}
          className="mt-10 hidden w-max gap-5 px-8 will-change-transform md:flex lg:px-[max(2rem,calc((100vw-76rem)/2))]"
        >
          {CAPABILITIES.map((cap, i) => (
            <Link
              key={cap.href}
              href={cap.href}
              data-cap-card
              className="group flex h-[19rem] w-[22rem] shrink-0 flex-col justify-between rounded-3xl border border-border bg-bg-soft p-8 shadow-[0_20px_50px_-40px_rgba(10,10,11,0.35)] transition-colors hover:border-accent/45 hover:bg-white"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-snug text-ink group-hover:text-accent">
                  {cap.title}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-muted">
                  {cap.keyword}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-ink-secondary">
                {cap.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
