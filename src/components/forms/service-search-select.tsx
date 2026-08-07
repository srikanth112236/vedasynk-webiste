"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import { SERVICES } from "@/content/services";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  id?: string;
};

export function ServiceSearchSelect({ value, onChange, error, id }: Props) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const options = useMemo(
    () =>
      SERVICES.map((s) => ({
        value: s.shortTitle,
        label: s.title,
        short: s.shortTitle,
        slug: s.slug,
      })),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        o.short.toLowerCase().includes(q) ||
        o.slug.includes(q),
    );
  }, [options, query]);

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 40);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  useEffect(() => {
    function onPointer(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  function choose(next: string) {
    onChange(next);
    setOpen(false);
    setQuery("");
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[active];
      if (item) choose(item.value);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onKeyDown}
        className={cn(
          "flex h-11 w-full items-center justify-between gap-2 rounded-lg border bg-bg px-3.5 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          error ? "border-red-400" : "border-border",
          selected ? "text-ink" : "text-ink-muted",
        )}
      >
        <span className="truncate">
          {selected ? selected.short : "Search & select a service"}
        </span>
        <ChevronsUpDown className="h-4 w-4 shrink-0 text-ink-muted" />
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-[calc(100%+0.35rem)] z-50 overflow-hidden rounded-xl border border-border bg-bg shadow-[0_24px_60px_-36px_rgba(10,10,11,0.5)]">
          <div className="flex items-center gap-2 border-b border-border px-3">
            <Search className="h-4 w-4 shrink-0 text-accent" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type to search services…"
              className="h-11 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted"
            />
          </div>
          <ul
            id={listId}
            role="listbox"
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            onWheel={(e) => e.stopPropagation()}
            className="max-h-56 overflow-y-auto overscroll-contain p-1.5 [-webkit-overflow-scrolling:touch]"
          >
            {filtered.length === 0 ? (
              <li className="px-3 py-6 text-center text-sm text-ink-secondary">
                No services match “{query}”
              </li>
            ) : (
              filtered.map((item, i) => {
                const isActive = i === active;
                const isSelected = item.value === value;
                return (
                  <li key={item.slug} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onClick={() => choose(item.value)}
                      className={cn(
                        "flex w-full items-start justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                        isActive ? "bg-accent-soft" : "hover:bg-bg-soft",
                      )}
                    >
                      <span>
                        <span className="block text-sm font-medium text-ink">
                          {item.short}
                        </span>
                        <span className="mt-0.5 block text-xs text-ink-muted">
                          {item.label}
                        </span>
                      </span>
                      {isSelected ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      ) : null}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}

      {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
