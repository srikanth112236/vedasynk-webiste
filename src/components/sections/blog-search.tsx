"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import {
  searchBlogIndex,
  type BlogSearchItem,
} from "@/lib/blog-shared";

type Props = {
  items: BlogSearchItem[];
  categories?: string[];
};

/**
 * Topics row + search. Expanding search goes full container width and
 * drops suggestions in an overlay — never animates width inside a flex sibling.
 */
export function BlogSearch({ items, categories = [] }: Props) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const matches = useMemo(
    () => searchBlogIndex(items, query, 12),
    [items, query],
  );

  const relatedSuggestions = useMemo(() => {
    if (!query.trim()) return items.slice(0, 8);
    if (matches.length === 0) return [];

    const top = matches[0];
    const related = items.filter(
      (p) => p.slug !== top.slug && p.category === top.category,
    );
    const unique = [
      ...matches,
      ...related.filter((r) => !matches.some((m) => m.slug === r.slug)),
    ];
    return unique.slice(0, 12);
  }, [items, matches, query]);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    setActive(0);
    if (listRef.current) listRef.current.scrollTop = 0;
  }, [query, open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onPointer(e: MouseEvent) {
      if (!open) return;
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [open]);

  // Keep active suggestion visible while keyboard-navigating
  useEffect(() => {
    if (!open || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLElement>(
      `[data-suggestion-index="${active}"]`,
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  function close() {
    setOpen(false);
    setQuery("");
  }

  function goTo(slug: string) {
    close();
    router.push(`/blog/${slug}`);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) =>
        Math.min(i + 1, Math.max(relatedSuggestions.length - 1, 0)),
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && relatedSuggestions[active]) {
      e.preventDefault();
      goTo(relatedSuggestions[active].slug);
    }
  }

  return (
    <div ref={rootRef} className="relative w-full">
      {!open ? (
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-ink-muted"
              >
                {cat}
              </span>
            ))}
          </div>
          <button
            type="button"
            aria-label="Search articles"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-bg text-ink transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="relative w-full">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full items-center gap-3 rounded-2xl border border-border bg-bg px-4 shadow-[0_12px_40px_-28px_rgba(10,10,11,0.35)]"
          >
            <Search className="h-4 w-4 shrink-0 text-accent" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Search insights, AI, SEO, product…"
              className="h-12 w-full min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted"
              aria-autocomplete="list"
              aria-controls="blog-search-results"
              aria-expanded
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={close}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-bg-soft hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>

          <AnimatePresence>
            <motion.div
              id="blog-search-results"
              role="listbox"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 flex max-h-[min(70vh,32rem)] flex-col overflow-hidden rounded-2xl border border-border bg-bg shadow-[0_28px_70px_-40px_rgba(10,10,11,0.55)]"
            >
              <p className="shrink-0 border-b border-border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                {query.trim()
                  ? matches.length
                    ? `Suggestions · ${relatedSuggestions.length}`
                    : "No matches"
                  : "Recent & trending picks"}
              </p>

              {/* Native scroll — Lenis must not steal wheel/touch */}
              <div
                ref={listRef}
                data-lenis-prevent
                data-lenis-prevent-wheel
                data-lenis-prevent-touch
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-2 [-webkit-overflow-scrolling:touch] [scrollbar-gutter:stable]"
                style={{ maxHeight: "min(52vh, 24rem)" }}
              >
                {relatedSuggestions.length === 0 && query.trim() ? (
                  <p className="px-3 py-8 text-center text-sm text-ink-secondary">
                    Try another keyword—AI, SEO, MVP, branding, SaaS…
                  </p>
                ) : (
                  <div className="grid gap-1 sm:grid-cols-2">
                    {relatedSuggestions.map((item, i) => (
                      <Link
                        key={item.slug}
                        href={`/blog/${item.slug}`}
                        role="option"
                        aria-selected={i === active}
                        data-suggestion-index={i}
                        onClick={close}
                        onMouseEnter={() => setActive(i)}
                        className={`block rounded-xl px-3 py-3 transition-colors ${
                          i === active ? "bg-accent-soft" : "hover:bg-bg-soft"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[11px] font-medium uppercase tracking-wide text-accent">
                            {item.category}
                          </span>
                          <span className="font-mono text-[10px] text-ink-muted">
                            {item.readingTime}
                          </span>
                        </div>
                        <p className="mt-1 text-sm font-semibold leading-snug text-ink">
                          {item.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-secondary">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <p className="shrink-0 border-t border-border px-4 py-2 text-[11px] text-ink-muted">
                Scroll inside for more · Esc to close · Enter to open
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
