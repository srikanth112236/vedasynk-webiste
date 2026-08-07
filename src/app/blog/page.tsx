import Link from "next/link";
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
  getTrendingPosts,
  POSTS_PER_PAGE,
} from "@/lib/blog";
import { blogItemListSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights | AI, SEO, Product & Growth Blog",
  description:
    "50+ practical Vedasynk articles on AI systems, organic SEO, SaaS product craft, branding, and founder go-to-market—written to rank and help you ship.",
  path: "/blog",
});

export const dynamic = "force-static";
export const revalidate = false;

export default function BlogPage() {
  const { posts, page, totalPages, totalPosts } = getPaginatedPosts(1);
  const categories = getBlogCategories();
  const searchItems = getBlogSearchIndex();
  const trending = getTrendingPosts(undefined, 3);
  const [featured, ...rest] = posts;
  const gridPosts = featured ? rest : posts;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blog" },
          ]),
          blogItemListSchema(
            posts.map((post, i) => ({
              title: post.title,
              path: `/blog/${post.slug}`,
              position: i + 1,
            })),
          ),
        ]}
      />
      <PageHero
        eyebrow="Insights · AI · SEO · Product"
        title="Practical writing for builders in the AI era"
        description={`Guides on AI systems, organic search, SaaS craft, and brand-led growth—${totalPosts} articles designed to help founders ship and rank. ${POSTS_PER_PAGE} per page.`}
        secondaryCta={{ label: "Resources", href: "/resources" }}
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
          {featured ? (
            <Reveal>
              <BlogPostCard post={featured} featured />
            </Reveal>
          ) : null}

          {trending.length > 0 ? (
            <div className="mt-12">
              <Reveal>
                <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                  Trending now
                </h2>
              </Reveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {trending.map((post, i) => (
                  <Reveal key={post.slug} delay={i * 0.05}>
                    <BlogPostCard post={post} />
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-14 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Latest articles
            </h2>
            <p className="text-sm text-ink-muted">
              Page {page} of {totalPages} · {totalPosts} posts
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post, i) => (
              <Reveal key={post.slug} delay={Math.min(i * 0.04, 0.24)}>
                <BlogPostCard post={post} />
              </Reveal>
            ))}
          </div>

          <BlogPagination page={page} totalPages={totalPages} />

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-secondary">
            Looking for a scoped partner across product, brand, and growth? Explore{" "}
            <Link href="/services" className="font-medium text-accent hover:underline">
              services
            </Link>
            ,{" "}
            <Link href="/solutions" className="font-medium text-accent hover:underline">
              solutions
            </Link>
            , or{" "}
            <Link href="/contact" className="font-medium text-accent hover:underline">
              contact the Bangalore studio
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCta title="Have a product or SEO question we should write about?" />
    </>
  );
}
