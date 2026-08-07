import type { BlogSearchItem } from "@/lib/blog-shared";
import blogPostsData from "@/data/blog-posts.json";

export type { BlogSearchItem } from "@/lib/blog-shared";
export { searchBlogIndex } from "@/lib/blog-shared";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  coverImage?: string;
  coverAlt?: string;
  subImage?: string;
  subImageAlt?: string;
};

export type BlogPost = BlogFrontmatter & {
  content: string;
  readingTime: string;
};

export const POSTS_PER_PAGE = 12;

/** All posts bundled at build time (works on Cloudflare Workers). */
const ALL_POSTS = blogPostsData as BlogPost[];

export function getAllPosts(): BlogPost[] {
  return ALL_POSTS;
}

export function getPost(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return ALL_POSTS.map((post) => post.slug);
}

export function getBlogCategories(): string[] {
  const set = new Set(ALL_POSTS.map((p) => p.category));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function getTotalBlogPages(perPage = POSTS_PER_PAGE): number {
  return Math.max(1, Math.ceil(ALL_POSTS.length / perPage));
}

export function getPaginatedPosts(
  page: number,
  perPage = POSTS_PER_PAGE,
): {
  posts: BlogPost[];
  page: number;
  totalPages: number;
  totalPosts: number;
} {
  const all = ALL_POSTS;
  const totalPages = Math.max(1, Math.ceil(all.length / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;

  return {
    posts: all.slice(start, start + perPage),
    page: safePage,
    totalPages,
    totalPosts: all.length,
  };
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const all = ALL_POSTS;
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.filter((p) => p.slug !== slug).slice(0, limit);

  const sameCategory = all.filter(
    (p) => p.slug !== slug && p.category === current.category,
  );
  const rest = all.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}

/** Lightweight index for client-side search (no MDX body). */
export function getBlogSearchIndex(): BlogSearchItem[] {
  return ALL_POSTS.map(
    ({ title, description, date, category, slug, readingTime }) => ({
      title,
      description,
      date,
      category,
      slug,
      readingTime,
    }),
  );
}

export function getRecentPosts(excludeSlug?: string, limit = 4): BlogPost[] {
  return ALL_POSTS.filter((p) => p.slug !== excludeSlug).slice(0, limit);
}

/** Editorial “trending” mix: AI/SEO priority, then recency. */
const TRENDING_PRIORITY = [
  "ai-agents-for-business-workflows-2026",
  "ai-seo-content-strategy-that-ranks",
  "how-startups-should-use-llms-in-products",
  "rag-vs-fine-tuning-for-saas",
  "local-seo-bangalore-software-companies",
  "technical-seo-checklist-nextjs",
  "generative-ai-mvp-scope-guide",
  "content-clusters-b2b-saas-seo",
  "service-page-seo-structure-that-converts",
  "brand-positioning-ai-startups",
];

export function getTrendingPosts(excludeSlug?: string, limit = 4): BlogPost[] {
  const all = ALL_POSTS;
  const bySlug = new Map(all.map((p) => [p.slug, p]));
  const picked: BlogPost[] = [];

  for (const slug of TRENDING_PRIORITY) {
    if (slug === excludeSlug) continue;
    const post = bySlug.get(slug);
    if (post) picked.push(post);
    if (picked.length >= limit) return picked;
  }

  for (const post of all) {
    if (post.slug === excludeSlug) continue;
    if (picked.some((p) => p.slug === post.slug)) continue;
    picked.push(post);
    if (picked.length >= limit) break;
  }

  return picked;
}
