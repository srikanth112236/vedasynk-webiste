import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

type Props = {
  page: number;
  totalPages: number;
  basePath?: string;
};

export function BlogPagination({ page, totalPages, basePath = "/blog" }: Props) {
  if (totalPages <= 1) return null;

  const hrefFor = (p: number) => (p === 1 ? basePath : `${basePath}/page/${p}`);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8"
    >
      <Link
        href={page > 1 ? hrefFor(page - 1) : "#"}
        aria-disabled={page <= 1}
        className={`inline-flex items-center gap-2 text-sm font-medium ${
          page <= 1
            ? "pointer-events-none text-ink-muted/40"
            : "text-ink hover:text-accent"
        }`}
      >
        <ArrowLeft className="h-4 w-4" />
        Previous
      </Link>

      <ul className="flex flex-wrap items-center gap-1">
        {pages.map((p) => (
          <li key={p}>
            <Link
              href={hrefFor(p)}
              aria-current={p === page ? "page" : undefined}
              className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2.5 text-sm font-medium transition-colors ${
                p === page
                  ? "bg-accent text-white"
                  : "text-ink-secondary hover:bg-bg-soft hover:text-ink"
              }`}
            >
              {p}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={page < totalPages ? hrefFor(page + 1) : "#"}
        aria-disabled={page >= totalPages}
        className={`inline-flex items-center gap-2 text-sm font-medium ${
          page >= totalPages
            ? "pointer-events-none text-ink-muted/40"
            : "text-ink hover:text-accent"
        }`}
      >
        Next
        <ArrowRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}

export function BlogPostCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group relative block overflow-hidden rounded-3xl border border-border bg-[linear-gradient(135deg,#f7f8fa_0%,#eef2f8_55%,#e8eef8_100%)] transition-colors hover:border-accent/40"
      >
        {post.coverImage ? (
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.coverAlt || post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 1100px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </div>
        ) : null}
        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-accent">
            <span>Featured</span>
            <span className="text-ink-muted">·</span>
            <span className="text-ink-muted">{post.category}</span>
          </div>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent md:text-4xl">
            {post.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg">
            {post.description}
          </p>
          <p className="mt-6 text-sm text-ink-muted">
            {date} · {post.readingTime}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-soft transition-colors hover:border-accent/40 hover:bg-white"
    >
      {post.coverImage ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.coverAlt || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-xs text-ink-muted">
          <span className="rounded-full border border-border bg-bg px-2.5 py-1 font-medium text-ink-secondary">
            {post.category}
          </span>
          <span className="font-mono">{post.readingTime}</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent md:text-xl">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">
          {post.description}
        </p>
        <p className="mt-5 text-xs text-ink-muted">{date}</p>
      </div>
    </Link>
  );
}
