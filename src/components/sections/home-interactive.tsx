"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  LineChart,
  Rocket,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { Reveal, FadeInStagger, FadeItem } from "@/components/motion/reveal";
import { ParallaxBand } from "@/components/motion/parallax-band";
import {
  AUDIENCE_CARDS,
  MANIFESTO_LINES,
  GROWTH_SIGNALS,
  KEYWORD_CHIPS,
} from "@/content/home";

gsap.registerPlugin(ScrollTrigger);

const AUDIENCE_ICONS = [Rocket, Building2, Users, LineChart] as const;

/** Big scroll-lit manifesto — grabs attention mid-page. */
export function ManifestoSection() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>("[data-manifesto-line]", root);
      lines.forEach((line) => {
        gsap.fromTo(
          line,
          { opacity: 0.18, x: -24 },
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

  return (
    <ParallaxBand className="bg-ink text-white">
      <div
        data-parallax-layer
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-[120%] w-[55%] bg-[radial-gradient(circle_at_center,rgba(11,87,208,0.45),transparent_65%)]"
      />
      <section ref={rootRef} className="relative py-24 md:py-36">
        <div className="container-page">
          <p className="mb-10 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            The Vedasynk standard
          </p>
          <div className="max-w-4xl space-y-4 md:space-y-6">
            {MANIFESTO_LINES.map((line) => (
              <p
                key={line}
                data-manifesto-line
                className="font-display text-3xl leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Custom software development, mobile apps, websites, branding, SEO,
            and digital marketing—built so Bangalore startups and global teams
            can launch faster and convert better.
          </p>
        </div>
      </section>
    </ParallaxBand>
  );
}

/** Interactive audience cards with tilt + SEO keywords. */
export function AudienceSection() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Who we partner with
          </p>
          <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Built for founders, CTOs, and marketing teams who need one accountable partner
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
            Whether you need an MVP development partner, a website development
            agency in Bangalore, or branding plus SEO that compounds—hover a
            profile that sounds like you.
          </p>
        </Reveal>

        <FadeInStagger className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.1}>
          {AUDIENCE_CARDS.map((card, i) => {
            const Icon = AUDIENCE_ICONS[i % AUDIENCE_ICONS.length];
            return (
              <FadeItem key={card.title}>
                <TiltCard>
                  <Link
                    href={card.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-soft p-7 transition-colors hover:border-accent/40 hover:bg-white md:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary md:text-base">
                      {card.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {card.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-ink-muted"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </Link>
                </TiltCard>
              </FadeItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 200, damping: 20 });
  const springRy = useSpring(ry, { stiffness: 200, damping: 20 });

  if (reduce) return <div>{children}</div>;

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: springRx, rotateY: springRy, transformPerspective: 900 }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        ry.set(px * 8);
        rx.set(py * -8);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      className="h-full will-change-transform"
    >
      {children}
    </motion.div>
  );
}

/** Animated growth signals + interactive keyword chips + CTA. */
export function GrowthSignalsSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const nums = gsap.utils.toArray<HTMLElement>("[data-count]", root);
      nums.forEach((el) => {
        const target = Number(el.dataset.count || 0);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.val));
          },
        });
      });

      gsap.fromTo(
        "[data-signal-card]",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 70%",
            once: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <ParallaxBand className="bg-bg-soft">
      <div
        data-parallax-layer
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-[80%] w-[50%] bg-[radial-gradient(circle_at_center,rgba(11,87,208,0.1),transparent_70%)]"
      />
      <section ref={rootRef} className="relative py-24 md:py-32">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Why teams convert with Vedasynk
                </p>
                <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  Attention-ready websites, apps, and brands engineered for organic growth
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-secondary">
                  Every homepage section, service page, and launch plan is written
                  and built to earn trust fast—then guide visitors to a discovery
                  call, WhatsApp chat, or proposal request.
                </p>
              </Reveal>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {GROWTH_SIGNALS.map((signal) => (
                  <div
                    key={signal.label}
                    data-signal-card
                    className="rounded-2xl border border-border bg-bg p-4"
                  >
                    <p className="font-display text-3xl text-ink md:text-4xl">
                      <span data-count={signal.value}>0</span>
                      <span className="text-accent">{signal.suffix}</span>
                    </p>
                    <p className="mt-2 text-xs leading-snug text-ink-muted">
                      {signal.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <MagneticWrapper>
                  <Button asChild size="lg">
                    <Link href="/contact#book">
                      Get a scoped proposal
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticWrapper>
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-bg p-6 md:p-8">
                <p className="text-sm font-semibold text-ink">
                  Explore high-intent topics
                </p>
                <p className="mt-2 text-sm text-ink-secondary">
                  Tap a keyword cluster visitors search for—each path leads to a
                  conversion page.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {KEYWORD_CHIPS.map((chip, i) => (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`rounded-full border px-3.5 py-2 text-left text-xs font-medium transition-all md:text-sm ${
                        active === i
                          ? "border-accent bg-accent text-white shadow-sm"
                          : "border-border bg-bg-soft text-ink-secondary hover:border-accent/50 hover:text-ink"
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="text-xl font-semibold text-ink">
                    {KEYWORD_CHIPS[active]?.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                    {KEYWORD_CHIPS[active]?.description}
                  </p>
                  <Link
                    href={KEYWORD_CHIPS[active]?.href ?? "/services"}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                  >
                    {KEYWORD_CHIPS[active]?.cta ?? "Learn more"}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </ParallaxBand>
  );
}
