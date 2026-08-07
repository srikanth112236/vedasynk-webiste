"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowUpRight, TrendingUp, Clock3 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { BlogPostCard } from "@/components/sections/blog-listing";
import type { BlogPost } from "@/lib/blog";
import { SITE } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export function BlogPostHero({ post }: { post: BlogPost }) {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-blog-hero-media]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to("[data-blog-hero-orb]", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.fromTo(
        "[data-blog-hero-copy]",
        { y: 28, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 80%",
            end: "top 35%",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  const date = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden border-b border-border pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#f5f8fc_50%,#eaf0f8_100%)]" />
        <div
          data-blog-hero-orb
          className="absolute -left-[18%] top-[-20%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.14),transparent_68%)]"
        />
        <div
          data-blog-hero-orb
          className="absolute -right-[12%] bottom-[-30%] h-[48vw] w-[48vw] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.1),transparent_65%)]"
        />
      </div>

      <div className="container-page relative z-10" data-blog-hero-copy>
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          All insights
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {post.category} · {post.readingTime}
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl md:leading-[1.12]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
              {post.description}
            </p>
            <p className="mt-6 text-sm text-ink-muted">
              {date} · {SITE.name}
            </p>
          </div>

          {post.coverImage ? (
            <div
              data-blog-hero-media
              className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-bg-soft shadow-[0_30px_80px_-48px_rgba(10,10,11,0.45)]"
            >
              <Image
                src={post.coverImage}
                alt={post.coverAlt || post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function BlogAsideRail({
  recent,
  trending,
}: {
  recent: BlogPost[];
  trending: BlogPost[];
}) {
  const railRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = railRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-aside-block]",
        { opacity: 0.35, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
            end: "top 40%",
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <aside ref={railRef} className="space-y-8 lg:sticky lg:top-28">
      <div data-aside-block className="rounded-2xl border border-border bg-bg-soft p-5">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
          <TrendingUp className="h-3.5 w-3.5" />
          Trending
        </p>
        <ul className="mt-4 space-y-4">
          {trending.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <span className="text-[11px] text-ink-muted">{post.category}</span>
                <span className="mt-1 block text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div data-aside-block className="rounded-2xl border border-border bg-bg-soft p-5">
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
          <Clock3 className="h-3.5 w-3.5" />
          Recent
        </p>
        <ul className="mt-4 space-y-4">
          {recent.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <span className="text-[11px] text-ink-muted">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="mt-1 block text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div data-aside-block className="rounded-2xl border border-accent/20 bg-accent-soft/40 p-5">
        <p className="text-sm font-semibold text-ink">Need this built?</p>
        <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
          Vedasynk ships AI, SEO, SaaS, and brand systems for founders.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          Talk to us
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </aside>
  );
}

export function BlogPostExtras({
  related,
  recent,
  trending,
}: {
  related: BlogPost[];
  recent: BlogPost[];
  trending: BlogPost[];
}) {
  const bandRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = bandRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-blog-band-orb]", {
        xPercent: 12,
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {related.length > 0 ? (
        <section className="border-t border-border bg-bg py-16 md:py-20">
          <div className="container-page">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Related articles
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.05}>
                  <BlogPostCard post={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section
        ref={bandRef}
        className="relative overflow-hidden border-t border-border bg-bg-soft py-16 md:py-24"
      >
        <div
          data-blog-band-orb
          aria-hidden
          className="pointer-events-none absolute -right-20 top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(11,87,208,0.12),transparent_65%)]"
        />
        <div className="container-page relative grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                <Clock3 className="h-3.5 w-3.5" />
                Recent
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                Fresh from the insights desk
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4">
              {recent.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.04}>
                  <BlogPostCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                <TrendingUp className="h-3.5 w-3.5" />
                Trending
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                What readers are exploring now
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4">
              {trending.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.04}>
                  <BlogPostCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function BlogArticleMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("h2, h3, p, ul, li", root).forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.25, y: 18 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              end: "top 68%",
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
