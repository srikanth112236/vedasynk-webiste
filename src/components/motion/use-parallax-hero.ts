"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Soft parallax layers for hero atmosphere — transforms only, no pin. */
export function useParallaxHero(enabled = true) {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || !enabled) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const layers = root.querySelectorAll<HTMLElement>("[data-parallax]");
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.parallax || 0.2);
        gsap.to(layer, {
          yPercent: speed * 40,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.fromTo(
        root.querySelectorAll("[data-hero-fade]"),
        { opacity: 1, y: 0 },
        {
          opacity: 0.15,
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [enabled]);

  return rootRef;
}
