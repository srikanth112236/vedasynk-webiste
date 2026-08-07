/**
 * Bundles all MDX blog posts into src/data/blog-posts.json
 * so Cloudflare Workers / OpenNext don't need filesystem access.
 *
 * Run: node scripts/generate-blog-data.mjs
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const blogDir = join(root, "src/content/blog");
const outPath = join(root, "src/data/blog-posts.json");

function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

if (!existsSync(blogDir)) {
  console.error("Missing blog dir:", blogDir);
  process.exit(1);
}

const files = readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
const posts = files.map((file) => {
  const raw = readFileSync(join(blogDir, file), "utf8");
  const { data, content } = matter(raw);
  return {
    title: data.title,
    description: data.description,
    date: data.date,
    category: data.category,
    slug: data.slug || file.replace(/\.mdx$/, ""),
    coverImage: data.coverImage || undefined,
    coverAlt: data.coverAlt || undefined,
    subImage: data.subImage || undefined,
    subImageAlt: data.subImageAlt || undefined,
    content,
    readingTime: estimateReadingTime(content),
  };
});

posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, `${JSON.stringify(posts, null, 2)}\n`);
console.log(`Wrote ${posts.length} posts → ${outPath}`);
