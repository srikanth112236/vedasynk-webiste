"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { TextReveal } from "@/components/motion/reveal";
import { useParallaxHero } from "@/components/motion/use-parallax-hero";
import { useLeadModal } from "@/components/forms/lead-modal";
import { Logo } from "@/components/layout/logo";

export function HeroSection() {
  const rootRef = useParallaxHero(true);
  const reduce = useReducedMotion();
  const { openLeadModal } = useLeadModal();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 20 });
  const springY = useSpring(my, { stiffness: 40, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${springX}px ${springY}px, rgba(11,87,208,0.16), transparent 55%)`;

  return (
    <section
      ref={rootRef}
      className="relative min-h-[100svh] overflow-hidden pt-24"
      onMouseMove={(e) => {
        if (reduce) return;
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,#f7f8fa_55%,#eef2f8_100%)]" />
        {!reduce && (
          <motion.div className="absolute inset-0" style={{ background: spotlight }} />
        )}
        <div
          data-parallax="0.35"
          className="absolute -left-[20%] top-[-10%] h-[70vw] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.14)_0%,transparent_68%)] blur-2xl"
        />
        <div
          data-parallax="0.55"
          className="absolute -right-[15%] top-[5%] h-[55vw] w-[55vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.1)_0%,transparent_65%)] blur-3xl"
        />
        <div
          data-parallax="0.2"
          className="absolute bottom-[-20%] left-[25%] h-[40vw] w-[40vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.08)_0%,transparent_70%)]"
        />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(10,10,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,10,11,0.03)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div
        data-hero-fade
        className="container-page relative z-10 flex min-h-[calc(100svh-6rem)] flex-col justify-center pb-28 pt-8 md:pb-32"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-bg/70 px-3.5 py-1.5 text-xs font-medium text-ink-secondary backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Accepting new product & brand projects
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7"
        >
          <Logo height={56} />
        </motion.div>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
          <span>Bangalore HQ</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Global delivery</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Est. 2025</span>
        </div>

        <TextReveal
          as="h1"
          text="Software, brands, and growth systems that ship."
          className="mt-8 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
        />

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-ink-secondary md:text-xl"
        >
          Custom websites, web apps, mobile products, brand identity, SEO, and
          digital marketing for startups and growing businesses—senior craft from
          Bangalore, clear scope, measurable outcomes.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticWrapper>
            <Button
              size="lg"
              type="button"
              className="min-w-[11rem]"
              onClick={() =>
                openLeadModal({
                  title: "Start a project with Vedasynk",
                  description:
                    "Tell us what you want to build—website, app, brand, or growth.",
                })
              }
            >
              Submit a brief
            </Button>
          </MagneticWrapper>
          <MagneticWrapper strength={0.25}>
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">
                View work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </MagneticWrapper>
          <MagneticWrapper strength={0.2}>
            <Button asChild variant="ghost" size="lg">
              <Link href="/contact#book">Book a call</Link>
            </Button>
          </MagneticWrapper>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
      >
        <div className="flex flex-col items-center gap-1 text-ink-muted">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg via-bg/70 to-transparent"
      />
    </section>
  );
}
