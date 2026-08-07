"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisSingleton: Lenis | null = null;

export function getLenis() {
  return lenisSingleton;
}

/**
 * Site-wide smooth scroll via Lenis, synced to GSAP ScrollTrigger.
 * Avoids scrollerProxy on body (common cause of scroll “stalling”).
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
      syncTouch: false,
      wheelMultiplier: 0.95,
      autoResize: true,
      prevent: (node) => {
        if (!(node instanceof HTMLElement)) return false;
        return Boolean(
          node.closest(
            "[data-lenis-prevent],[data-lenis-prevent-wheel],[data-lenis-prevent-touch]",
          ),
        );
      },
    });

    lenisSingleton = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisSingleton = null;
    };
  }, []);

  // Reset scroll on client navigations so Lenis never “sticks” mid-page
  useEffect(() => {
    const lenis = lenisSingleton;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    // Allow layout to settle, then refresh triggers
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return <>{children}</>;
}
