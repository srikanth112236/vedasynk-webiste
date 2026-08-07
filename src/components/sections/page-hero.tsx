"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/motion/magnetic";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Book a discovery call", href: "/contact#book" },
  secondaryCta,
  className,
}: PageHeroProps) {
  const isExternal =
    primaryCta.href.startsWith("http") || primaryCta.href.startsWith("mailto:");

  return (
    <section
      className={cn(
        "gradient-hero border-b border-border pb-16 pt-28 md:pb-20 md:pt-36",
        className,
      )}
    >
      <div className="container-page max-w-3xl">
        {eyebrow && (
          <Reveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-ink-secondary">
              {description}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticWrapper>
              <Button asChild size="lg">
                {isExternal ? (
                  <a
                    href={primaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCta.label}
                  </a>
                ) : (
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                )}
              </Button>
            </MagneticWrapper>
            {secondaryCta && (
              <Button asChild variant="outline" size="lg">
                {secondaryCta.href.startsWith("http") ? (
                  <a
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                )}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
