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
import { SERVICES, PRIMARY_SERVICES } from "@/content/services";
import { getServiceExtra } from "@/content/service-extras";
import { breadcrumbSchema } from "@/lib/schema";

gsap.registerPlugin(ScrollTrigger);

const SERVICE_GROUPS = [
  {
    title: "Product & engineering",
    description:
      "Custom software, web, mobile, APIs, SaaS, MVP, cloud, and DevOps—built to ship and scale.",
    slugs: [
      "web-development",
      "software-development",
      "mobile-app-development",
      "mvp-development",
      "saas-development",
      "enterprise-software",
      "api-development",
      "cloud-solutions",
      "devops",
      "ai-solutions",
      "maintenance-support",
    ],
  },
  {
    title: "Design & brand",
    description:
      "UI/UX, branding, and graphic design that make products and campaigns feel premium.",
    slugs: ["ui-ux-design", "branding", "graphic-design"],
  },
  {
    title: "Growth & visibility",
    description:
      "SEO and digital marketing aligned to the product—so organic and paid traffic convert.",
    slugs: ["seo", "digital-marketing"],
  },
] as const;

const HUB_KEYWORDS = [
  "software development company Bangalore",
  "website development agency",
  "mobile app development",
  "UI UX design",
  "branding and logo design",
  "SEO company for startups",
  "digital marketing agency",
  "MVP development",
  "SaaS product development",
];

export function ServicesHubPage() {
  const listRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = listRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-hub-row]", root).forEach((row) => {
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
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHero
        eyebrow="Services · Bangalore HQ · Global delivery"
        title="Software, design, and growth services that convert visitors into customers"
        description="Vedasynk Technologies is a Bangalore software and digital agency offering custom website development, mobile apps, UI/UX, branding, SEO, digital marketing, AI, cloud, and MVP/SaaS builds—scoped for startups and growing businesses."
        secondaryCta={{ label: "View solutions", href: "/solutions" }}
      />

      <section className="border-b border-border bg-bg-soft py-5">
        <div className="container-page">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
            High-intent capabilities
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
              title="Start with the six most requested services"
              description="Clear entry points for founders and teams who know what they need—or want a guided recommendation."
            />
          </Reveal>
          <FadeInStagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PRIMARY_SERVICES.map((service) => {
              const extra = getServiceExtra(service.slug);
              return (
                <FadeItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-bg-soft p-6 transition-all hover:border-accent/40 hover:bg-white hover:shadow-[0_28px_60px_-40px_rgba(11,87,208,0.55)]"
                  >
                    <h2 className="text-xl font-semibold text-ink group-hover:text-accent">
                      {service.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">
                      {service.heroSubhead}
                    </p>
                    {extra && (
                      <p className="mt-4 text-xs font-medium text-accent">
                        {extra.primaryKeyword}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink">
                      Explore
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
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
              Why Vedasynk services
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              One studio for product, brand, and pipeline
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Most agencies split engineering, design, and marketing across vendors.
              We keep them together—so your website, app, identity, and SEO reinforce
              each other and convert organic traffic into conversations.
            </p>
            <MagneticWrapper className="mt-8">
              <Button asChild size="lg" className="bg-white text-ink hover:bg-white/90">
                <Link href="/contact#book">
                  Get a service recommendation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticWrapper>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "SEO-ready by default",
                d: "Service pages, metadata, performance, and internal links planned into delivery—not bolted on later.",
              },
              {
                t: "Outcome-scoped proposals",
                d: "Written milestones for websites, apps, brands, and campaigns you can approve with confidence.",
              },
              {
                t: "Founder-led craft",
                d: "Srikanth on product/engineering; Manikayam on brand and growth—senior attention on client work.",
              },
              {
                t: "Built for startups & SMEs",
                d: "Bangalore HQ with global delivery—practical pricing clarity without enterprise theatre.",
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
              title="Complete service catalogue"
              description="Sixteen focused offerings. Open any page for process, deliverables, FAQs, and keyword-rich guidance."
            />
          </Reveal>

          <div className="mt-16 space-y-20">
            {SERVICE_GROUPS.map((group) => (
              <div key={group.title}>
                <div className="mb-8 max-w-2xl">
                  <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                    {group.title}
                  </h2>
                  <p className="mt-2 text-ink-secondary">{group.description}</p>
                </div>
                <div className="divide-y divide-border border-y border-border">
                  {group.slugs.map((slug) => {
                    const service = SERVICES.find((s) => s.slug === slug);
                    if (!service) return null;
                    const extra = getServiceExtra(slug);
                    const index = SERVICES.findIndex((s) => s.slug === slug);
                    return (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        data-hub-row
                        className="group grid grid-cols-1 items-center gap-3 py-6 md:grid-cols-[4.5rem_1fr_auto] md:gap-8 md:py-7"
                      >
                        <span className="font-mono text-sm text-ink-muted group-hover:text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold tracking-tight text-ink group-hover:text-accent md:text-2xl">
                            {service.title}
                          </h3>
                          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                            {service.metaDescription}
                          </p>
                          {extra && (
                            <p className="mt-2 text-xs text-accent">
                              {extra.primaryKeyword}
                            </p>
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
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading
              title="How to choose the right Vedasynk service"
              description="Use this guide if you are comparing website development, app builds, branding, or SEO."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-secondary">
              <p>
                If you need customers to understand and trust you online, start with{" "}
                <Link href="/services/web-development" className="font-medium text-accent hover:underline">
                  website development
                </Link>{" "}
                plus{" "}
                <Link href="/services/seo" className="font-medium text-accent hover:underline">
                  SEO
                </Link>
                . If you are validating a product idea, choose{" "}
                <Link href="/services/mvp-development" className="font-medium text-accent hover:underline">
                  MVP development
                </Link>{" "}
                or{" "}
                <Link href="/services/mobile-app-development" className="font-medium text-accent hover:underline">
                  mobile app development
                </Link>
                .
              </p>
              <p>
                If your product looks unfinished next to competitors, pair{" "}
                <Link href="/services/ui-ux-design" className="font-medium text-accent hover:underline">
                  UI/UX design
                </Link>{" "}
                with{" "}
                <Link href="/services/branding" className="font-medium text-accent hover:underline">
                  branding
                </Link>
                . If traffic is not turning into leads, add{" "}
                <Link href="/services/digital-marketing" className="font-medium text-accent hover:underline">
                  digital marketing
                </Link>{" "}
                and conversion-focused landing pages.
              </p>
              <p>
                Still unsure? Book a discovery call—we will recommend a scoped path
                across software, design, and growth without forcing a bloated package.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="Need a service mix tailored to your stage?"
        description="Tell us your goal—launch a website, ship an MVP, rebrand, or grow organic leads. We’ll recommend the right Vedasynk services and timeline."
      />
    </>
  );
}
