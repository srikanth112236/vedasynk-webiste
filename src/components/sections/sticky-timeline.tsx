"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { StickySectionItem } from "@/content/home";

gsap.registerPlugin(ScrollTrigger);

type StickyTimelineProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  items: StickySectionItem[];
  tone?: "soft" | "white";
  className?: string;
};

export function StickyTimeline({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  items,
  tone = "soft",
  className,
}: StickyTimelineProps) {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 900) return;

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>("[data-sticky-step]", root);
      steps.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0.28, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: step,
              start: "top 82%",
              end: "top 38%",
              scrub: true,
            },
          },
        );
      });

      const progress = root.querySelector<HTMLElement>("[data-sticky-progress]");
      const track = root.querySelector<HTMLElement>("[data-sticky-track]");
      if (progress && track) {
        gsap.fromTo(
          progress,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: track,
              start: "top 60%",
              end: "bottom 35%",
              scrub: true,
            },
          },
        );
      }
    }, root);

    return () => ctx.revert();
  }, []);

  const isExternal = ctaHref.startsWith("http");

  return (
    <section
      ref={rootRef}
      className={cn(
        "py-20 md:py-28",
        tone === "soft" ? "bg-bg-soft" : "bg-bg",
        className,
      )}
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
            <h2 className="max-w-md text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-secondary">
              {description}
            </p>
            <Button asChild variant="outline" className="mt-8">
              {isExternal ? (
                <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                  {ctaLabel}
                </a>
              ) : (
                <Link href={ctaHref}>{ctaLabel}</Link>
              )}
            </Button>
          </div>

          <div data-sticky-track className="relative">
            <div
              aria-hidden
              className="absolute bottom-4 left-[1.15rem] top-4 w-px bg-border md:left-[1.4rem]"
            >
              <div
                data-sticky-progress
                className="h-full w-full origin-top scale-y-0 bg-accent"
              />
            </div>

            <ol className="space-y-6 md:space-y-8">
              {items.map((item, i) => {
                const external = item.href?.startsWith("http");
                return (
                  <li
                    key={item.title}
                    data-sticky-step
                    className="relative rounded-2xl border border-border bg-bg p-6 pl-14 shadow-[0_1px_0_rgba(10,10,11,0.04)] md:p-8 md:pl-16"
                  >
                    <span className="absolute left-4 top-7 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-bg font-mono text-[11px] text-accent md:left-5 md:top-9">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary md:text-base">
                      {item.description}
                    </p>
                    {item.href && item.linkLabel && (
                      <div className="mt-4">
                        {external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                          >
                            {item.linkLabel}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                          >
                            {item.linkLabel}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
