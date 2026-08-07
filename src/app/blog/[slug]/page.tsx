import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { FinalCta } from "@/components/sections/final-cta";
import {
  BlogAsideRail,
  BlogArticleMotion,
  BlogPostExtras,
  BlogPostHero,
} from "@/components/sections/blog-post-view";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getAllPostSlugs,
  getPost,
  getRecentPosts,
  getRelatedPosts,
  getTrendingPosts,
} from "@/lib/blog";
import { blogMarkdownComponents } from "@/components/blog/mdx-components";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Fully static — content is bundled; no runtime filesystem. */
export const dynamic = "force-static";
export const revalidate = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);
  const recent = getRecentPosts(post.slug, 3);
  const trending = getTrendingPosts(post.slug, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema({
            title: post.title,
            description: post.description,
            path: `/blog/${post.slug}`,
            datePublished: post.date,
            category: post.category,
          }),
        ]}
      />

      <BlogPostHero post={post} />

      <article className="bg-bg py-14 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_19rem]">
          <div className="min-w-0 max-w-3xl">
            <BlogArticleMotion>
              <div className="prose-blog space-y-5 text-base leading-relaxed text-ink-secondary [&_a]:text-accent [&_a]:underline-offset-2 hover:[&_a]:underline [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:space-y-2">
                <ReactMarkdown components={blogMarkdownComponents}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </BlogArticleMotion>

            {post.subImage ? (
              <figure className="mt-12 overflow-hidden rounded-2xl border border-border bg-bg-soft">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={post.subImage}
                    alt={post.subImageAlt || `${post.title} supporting visual`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 720px"
                  />
                </div>
                {post.subImageAlt ? (
                  <figcaption className="border-t border-border px-4 py-3 text-xs text-ink-muted">
                    {post.subImageAlt}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}

            <div className="mt-12 rounded-2xl border border-border bg-bg-soft p-6">
              <p className="text-sm font-medium text-ink">Keep exploring</p>
              <p className="mt-2 text-sm text-ink-secondary">
                Related services:{" "}
                <Link
                  href="/services/ai-solutions"
                  className="text-accent hover:underline"
                >
                  AI solutions
                </Link>
                {" · "}
                <Link href="/services/seo" className="text-accent hover:underline">
                  SEO
                </Link>
                {" · "}
                <Link
                  href="/services/software-development"
                  className="text-accent hover:underline"
                >
                  software development
                </Link>
                {" · "}
                <Link href="/steyzi" className="text-accent hover:underline">
                  Steyzi
                </Link>
                {" · "}
                <Link href="/contact" className="text-accent hover:underline">
                  contact
                </Link>
              </p>
            </div>

            <p className="mt-8 text-sm text-ink-muted">
              <Link href="/blog" className="text-accent hover:underline">
                ← Back to insights
              </Link>
            </p>
          </div>

          <div className="hidden lg:block">
            <BlogAsideRail recent={recent} trending={trending} />
          </div>
        </div>
      </article>

      <BlogPostExtras related={related} recent={recent} trending={trending} />

      <FinalCta title="Building something related to this topic?" />
    </>
  );
}
