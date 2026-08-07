"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import {
  PHONE_COUNTRIES,
  digitsOnly,
  getNationalMaxLength,
  getPhoneCountry,
  getPhonePlaceholder,
} from "@/lib/phone";
import { cn } from "@/lib/utils";

type Props = {
  countryCode: string;
  national: string;
  onCountryChange: (code: string) => void;
  onNationalChange: (value: string) => void;
  error?: string;
  id?: string;
};

export function PhoneCountryInput({
  countryCode,
  national,
  onCountryChange,
  onNationalChange,
  error,
  id = "lead-phone",
}: Props) {
  const country = getPhoneCountry(countryCode);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const maxLen = getNationalMaxLength(countryCode);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PHONE_COUNTRIES;
    return PHONE_COUNTRIES.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.dial.includes(q.replace(/^\+/, "")) ||
        c.code.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setQuery("");
      requestAnimationFrame(() => searchRef.current?.focus());
    }
  }, [open]);

  return (
    <div className="space-y-2" ref={rootRef}>
      <div
        className={cn(
          "flex h-11 overflow-visible rounded-lg border bg-bg focus-within:ring-2 focus-within:ring-accent",
          error ? "border-red-400" : "border-border",
        )}
      >
        <div className="relative shrink-0 border-r border-border">
          <button
            type="button"
            id={`${id}-country`}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-label="Country code"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 max-w-[9.5rem] items-center gap-1 bg-bg-soft px-2.5 text-sm text-ink outline-none"
          >
            <span aria-hidden>{country.flag}</span>
            <span className="tabular-nums">+{country.dial}</span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 shrink-0 text-ink-muted transition",
                open && "rotate-180",
              )}
            />
          </button>

          {open ? (
            <div
              role="listbox"
              aria-label="Select country"
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              className="absolute left-0 top-[calc(100%+4px)] z-50 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-lg border border-border bg-bg shadow-lg"
            >
              <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                <Search className="h-4 w-4 shrink-0 text-ink-muted" />
                <input
                  ref={searchRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search country or code"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-ink-muted"
                />
              </div>
              <ul className="max-h-60 overflow-y-auto overscroll-contain py-1">
                {filtered.length === 0 ? (
                  <li className="px-3 py-2 text-sm text-ink-muted">
                    No countries found
                  </li>
                ) : (
                  filtered.map((c) => (
                    <li key={c.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={c.code === countryCode}
                        onClick={() => {
                          onCountryChange(c.code);
                          setOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-bg-soft",
                          c.code === countryCode && "bg-bg-soft font-medium",
                        )}
                      >
                        <span className="w-6 shrink-0" aria-hidden>
                          {c.flag}
                        </span>
                        <span className="min-w-0 flex-1 truncate">{c.label}</span>
                        <span className="shrink-0 tabular-nums text-ink-muted">
                          +{c.dial}
                        </span>
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-1.5 px-3">
          <span className="shrink-0 text-sm text-ink-muted">+{country.dial}</span>
          <input
            id={id}
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder={getPhonePlaceholder(countryCode)}
            value={national}
            onChange={(e) =>
              onNationalChange(digitsOnly(e.target.value).slice(0, maxLen))
            }
            className="h-full w-full min-w-0 bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted"
          />
        </div>
      </div>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
      <p className="text-[11px] text-ink-muted">
        {country.flag} {country.label} — enter a valid local number
      </p>
    </div>
  );
}
