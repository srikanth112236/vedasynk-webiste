"use client";

import { StickyTimeline } from "@/components/sections/sticky-timeline";
import {
  PROCESS_STEPS,
  DELIVERY_SECTION,
  ENGAGE_SECTION,
} from "@/content/home";

export function StickyProcess() {
  return (
    <StickyTimeline
      eyebrow="Process"
      title="How we take ideas to production"
      description="A transparent cadence from discovery through launch—so founders always know what ships next, why it matters, and how it supports growth and search visibility."
      ctaLabel="See the full process"
      ctaHref="/process"
      items={PROCESS_STEPS}
      tone="soft"
    />
  );
}

export function StickyDelivery() {
  return (
    <StickyTimeline
      eyebrow={DELIVERY_SECTION.eyebrow}
      title={DELIVERY_SECTION.title}
      description={DELIVERY_SECTION.description}
      ctaLabel={DELIVERY_SECTION.ctaLabel}
      ctaHref={DELIVERY_SECTION.ctaHref}
      items={[...DELIVERY_SECTION.items]}
      tone="white"
    />
  );
}

export function StickyEngage() {
  return (
    <StickyTimeline
      eyebrow={ENGAGE_SECTION.eyebrow}
      title={ENGAGE_SECTION.title}
      description={ENGAGE_SECTION.description}
      ctaLabel={ENGAGE_SECTION.ctaLabel}
      ctaHref={ENGAGE_SECTION.ctaHref}
      items={[...ENGAGE_SECTION.items]}
      tone="soft"
    />
  );
}
