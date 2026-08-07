"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

/** Mild Y parallax on a background layer — transform only, no pin. */
export function ParallaxBand({
  children,
  className,
  strength = 18,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layer = root.querySelector<HTMLElement>("[data-parallax-layer]");
    if (!layer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        layer,
        { yPercent: -strength * 0.35 },
        {
          yPercent: strength * 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [strength]);

  return (
    <div ref={rootRef} className={cn("relative overflow-hidden", className)}>
      {children}
    </div>
  );
}
