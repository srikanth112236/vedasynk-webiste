import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import {
  BlogPagination,
  BlogPostCard,
} from "@/components/sections/blog-listing";
import { BlogSearch } from "@/components/sections/blog-search";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getBlogCategories,
  getBlogSearchIndex,
  getPaginatedPosts,
  getTotalBlogPages,
  POSTS_PER_PAGE,
} from "@/lib/blog";
import { blogItemListSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ page: string }>;
};

export const dynamic = "force-static";
export const revalidate = false;

export function generateStaticParams() {
  const total = getTotalBlogPages();
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);
  if (!Number.isFinite(page) || page < 2) {
    return buildMetadata({
      title: "Insights",
      description: "Vedasynk insights on AI, SEO, product, and growth.",
      path: "/blog",
    });
  }
  return buildMetadata({
    title: `Insights · Page ${page}`,
    description: `Page ${page} of Vedasynk insights on AI systems, organic SEO, SaaS craft, branding, and founder go-to-market.`,
    path: `/blog/page/${page}`,
  });
}

export default async function BlogPaginatedPage({ params }: Props) {
  const { page: pageParam } = await params;
  const pageNum = Number(pageParam);
  const totalPages = getTotalBlogPages();

  if (!Number.isFinite(pageNum) || pageNum < 2 || pageNum > totalPages) {
    notFound();
  }

  const { posts, page, totalPosts } = getPaginatedPosts(pageNum);
  const categories = getBlogCategories();
  const searchItems = getBlogSearchIndex();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blog" },
            { name: `Page ${page}`, path: `/blog/page/${page}` },
          ]),
          blogItemListSchema(
            posts.map((post, i) => ({
              title: post.title,
              path: `/blog/${post.slug}`,
              position: (page - 1) * POSTS_PER_PAGE + i + 1,
            })),
          ),
        ]}
      />
      <PageHero
        eyebrow={`Insights · Page ${page}`}
        title="More practical writing for builders"
        description={`${totalPosts} articles on AI, SEO, product, and growth. Showing ${POSTS_PER_PAGE} per page.`}
        secondaryCta={{ label: "Back to page 1", href: "/blog" }}
      />

      <section
        className="relative z-30 border-b border-border bg-bg-soft py-4"
        aria-label="Topics and search"
      >
        <div className="container-page">
          <BlogSearch items={searchItems} categories={categories} />
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Articles
            </h2>
            <p className="text-sm text-ink-muted">
              Page {page} of {totalPages}
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={Math.min(i * 0.03, 0.2)}>
                <BlogPostCard post={post} />
              </Reveal>
            ))}
          </div>

          <BlogPagination page={page} totalPages={totalPages} />

          <p className="mt-10 text-sm text-ink-secondary">
            <Link href="/blog" className="font-medium text-accent hover:underline">
              ← Latest insights
            </Link>
          </p>
        </div>
      </section>

      <FinalCta title="Building something related to these topics?" />
    </>
  );
}
