import Image from "next/image";
import type { Components } from "react-markdown";

export const blogMarkdownComponents: Components = {
  img: ({ src, alt }) => {
    const url = typeof src === "string" ? src : "";
    const label = typeof alt === "string" ? alt : "";
    if (!url) return null;

    return (
      <figure className="not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-soft">
        <Image
          src={url}
          alt={label}
          width={1400}
          height={788}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
        {label ? (
          <figcaption className="border-t border-border px-4 py-3 text-xs text-ink-muted">
            {label}
          </figcaption>
        ) : null}
      </figure>
    );
  },
};
