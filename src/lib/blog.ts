import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogSearchItem } from "@/lib/blog-shared";

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

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function estimateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const fm = data as BlogFrontmatter;

    return {
      title: fm.title,
      description: fm.description,
      date: fm.date,
      category: fm.category,
      slug: fm.slug || file.replace(/\.mdx$/, ""),
      coverImage: fm.coverImage,
      coverAlt: fm.coverAlt,
      subImage: fm.subImage,
      subImageAlt: fm.subImageAlt,
      content,
      readingTime: estimateReadingTime(content),
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function getBlogCategories(): string[] {
  const set = new Set(getAllPosts().map((p) => p.category));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function getTotalBlogPages(perPage = POSTS_PER_PAGE): number {
  return Math.max(1, Math.ceil(getAllPosts().length / perPage));
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
  const all = getAllPosts();
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
  const all = getAllPosts();
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
  return getAllPosts().map(
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
  return getAllPosts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, limit);
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
  const all = getAllPosts();
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
