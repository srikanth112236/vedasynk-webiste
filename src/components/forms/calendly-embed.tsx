"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Props = {
  url?: string;
  className?: string;
  /** iframe height in px */
  height?: number;
};

function buildEmbedSrc(url: string) {
  try {
    const u = new URL(url);
    u.searchParams.set("embed_type", "Inline");
    u.searchParams.set("hide_gdpr_banner", "1");
    u.searchParams.set("hide_landing_page_details", "1");
    return u.toString();
  } catch {
    return url;
  }
}

export function CalendlyEmbed({
  url = SITE.calendlyUrl,
  className,
  height = 750,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const src = useMemo(() => buildEmbedSrc(url), [url]);

  return (
    <div className={cn("w-full", className)}>
      <div
        className="relative w-full overflow-hidden rounded-lg bg-bg-soft"
        style={{ minHeight: height }}
      >
        {!loaded ? (
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-bg-soft px-6 text-center"
            aria-busy
            aria-live="polite"
          >
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-accent" />
            <p className="text-sm text-ink-muted">Loading available slots…</p>
          </div>
        ) : null}
        <iframe
          title="Book a 30-minute discovery call with Srikanth"
          src={src}
          width="100%"
          height={height}
          loading="eager"
          onLoad={() => setLoaded(true)}
          className="relative z-0 block w-full border-0 bg-bg"
          style={{ minWidth: "320px", height }}
          allow="camera; microphone; fullscreen"
        />
      </div>
      <p className="mt-4 text-center text-sm text-ink-muted">
        Having trouble seeing times?{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline-offset-2 hover:underline"
        >
          Open Calendly in a new tab
        </a>
      </p>
    </div>
  );
}
