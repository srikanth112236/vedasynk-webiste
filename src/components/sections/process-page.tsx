"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal, FadeInStagger, FadeItem } from "@/components/motion/reveal";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { ParallaxBand } from "@/components/motion/parallax-band";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { PROCESS_PAGE } from "@/content/process-page";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

gsap.registerPlugin(ScrollTrigger);

const SEO_KEYWORDS = [
  "software development process",
  "MVP delivery process",
  "agile agency Bangalore",
  "how we build websites and apps",
  "product development methodology",
  "startup project milestones",
];

const PROCESS_SEO_BLOCKS = [
  {
    heading: "A software development process buyers can trust",
    body: "Founders comparing software development companies look for clarity: discovery, scope, demos, launch, and improvement. Vedasynk documents milestones so website, mobile app, SaaS, and branding projects stay accountable from Bangalore to global clients.",
  },
  {
    heading: "Why process quality improves SEO outcomes",
    body: "When information architecture, metadata, performance, and analytics are planned in Define and Design—not bolted on after Build—your launch is more likely to earn organic traffic and convert it into discovery calls.",
  },
];

export function ProcessPageContent() {
  const stagesRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fixedRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const root = fixedRef.current;
    if (!root) return;
    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>("[data-process-fixed-step]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const idx = visible?.target.getAttribute("data-process-fixed-step");
        if (idx != null) setActiveStep(Number(idx));
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.25, 0.5] },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const section = stagesRef.current;
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
  }, []);

  useLayoutEffect(() => {
    const root = fixedRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("[data-process-fixed-step]", root)
        .forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0.3, y: 30 },
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

  const current = PROCESS_PAGE.steps[activeStep] ?? PROCESS_PAGE.steps[0];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Process", path: "/process" },
          ]),
          faqSchema([...PROCESS_PAGE.faqs]),
        ]}
      />

      <PageHero
        eyebrow="Process · Agile delivery · Bangalore studio"
        title={PROCESS_PAGE.heroHeadline}
        description={`${PROCESS_PAGE.heroSubhead} Built for founders searching for a transparent software development process, MVP methodology, and milestone-based agency delivery.`}
        secondaryCta={{ label: "Technology standards", href: "/technology" }}
      />

      <section className="border-b border-border bg-bg-soft py-4">
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

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl space-y-5">
          <Reveal>
            <SectionHeading
              title="Why process quality wins trust—and traffic"
              description="Buyers comparing agencies look for clarity. Search engines reward useful explanations of how delivery works."
            />
          </Reveal>
          {PROCESS_PAGE.intro.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p className="text-base leading-relaxed text-ink-secondary md:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
          {PROCESS_SEO_BLOCKS.map((block) => (
            <Reveal key={block.heading}>
              <article className="rounded-2xl border border-border bg-bg-soft p-5 md:p-6">
                <h3 className="text-lg font-semibold text-ink">{block.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary md:text-base">
                  {block.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Principles that shape every engagement"
              description="Outcomes, visible scope, early demos, and one accountable team."
            />
          </Reveal>
          <FadeInStagger className="mt-12 grid gap-5 md:grid-cols-2">
            {PROCESS_PAGE.principles.map((item) => (
              <FadeItem key={item.title}>
                <article className="h-full rounded-2xl border border-border bg-bg p-6 md:p-7">
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                    {item.description}
                  </p>
                </article>
              </FadeItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FIXED SCROLL STAGE DETAIL */}
      <section
        ref={fixedRef}
        className="bg-bg py-16 md:py-24"
        aria-labelledby="fixed-process-heading"
      >
        <div className="container-page">
          <Reveal>
            <h2
              id="fixed-process-heading"
              className="text-3xl font-semibold tracking-tight text-ink md:text-4xl"
            >
              Stage-by-stage detail
            </h2>
            <p className="mt-3 max-w-2xl text-ink-secondary">
              Scroll each stage—the summary panel stays fixed on desktop with
              what you receive and why it matters for launch and SEO.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <div className="space-y-4">
              {PROCESS_PAGE.steps.map((step, i) => (
                <article
                  key={step.title}
                  data-process-fixed-step={i}
                  className={`rounded-2xl border p-5 md:p-6 ${
                    activeStep === i
                      ? "border-accent bg-accent-soft"
                      : "border-border bg-bg-soft"
                  }`}
                >
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-ink">
                    {step.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-border bg-bg-soft p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  Stage {String(activeStep + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink md:text-3xl">
                  {current.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-secondary md:text-base">
                  {current.description}
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-ink-secondary">
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    Written decisions you can share with stakeholders
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    Artefacts reviewed before the next investment of time
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    SEO, UX, and engineering stay aligned when relevant
                  </li>
                </ul>
                <div className="mt-7">
                  <MagneticWrapper>
                    <Button asChild>
                      <Link href="/contact#book">
                        Start with discovery
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

      {/* Horizontal scrub stages */}
      <section
        ref={stagesRef}
        className="relative bg-ink text-white"
        aria-labelledby="stages-heading"
      >
        <div className="md:sticky md:top-0 md:flex md:h-[100svh] md:flex-col md:justify-center md:overflow-hidden">
          <div className="container-page py-12 md:py-0">
            <Reveal>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                Horizontal timeline
              </p>
              <h2
                id="stages-heading"
                className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Six stages from discovery to continuous improvement
              </h2>
            </Reveal>
          </div>

          <div className="mt-8 flex gap-4 overflow-x-auto px-5 pb-12 snap-x snap-mandatory md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PROCESS_PAGE.steps.map((step, i) => (
              <article
                key={step.title}
                className="w-[min(82vw,20rem)] shrink-0 snap-start rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="font-mono text-xs text-[#9ec0ff]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold">
                  {step.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div
            ref={trackRef}
            className="mt-10 hidden w-max gap-5 px-8 will-change-transform md:flex lg:px-[max(2rem,calc((100vw-76rem)/2))]"
          >
            {PROCESS_PAGE.steps.map((step, i) => (
              <article
                key={step.title}
                className="flex h-72 w-[24rem] shrink-0 flex-col rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <span className="font-mono text-sm text-[#9ec0ff]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-2xl font-semibold">
                  {step.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ParallaxBand className="bg-bg-soft">
        <div
          data-parallax-layer
          aria-hidden
          className="pointer-events-none absolute -left-20 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(11,87,208,0.08),transparent_70%)]"
        />
        <section className="relative py-16 md:py-24">
          <div className="container-page">
            <Reveal>
              <SectionHeading
                title="Engagement models"
                description="Choose the commercial shape that matches your certainty and roadmap."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {PROCESS_PAGE.engagementModels.map((model, i) => (
                <Reveal key={model.title} delay={i * 0.06}>
                  <article className="h-full rounded-2xl border border-border bg-bg p-6">
                    <h3 className="text-lg font-semibold text-ink">{model.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                      {model.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-10">
              <MagneticWrapper>
                <Button asChild size="lg">
                  <Link href="/contact#book">
                    Discuss the right model
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </MagneticWrapper>
            </div>
          </div>
        </section>
      </ParallaxBand>

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <SectionHeading title="Process FAQs" />
          </Reveal>
          <Accordion type="single" collapsible className="mt-8">
            {PROCESS_PAGE.faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`p-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FinalCta title="Ready to start with a clear plan?" />
    </>
  );
}
