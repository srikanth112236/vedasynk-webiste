import type { MetadataRoute } from "next";
import { getAllCaseStudySlugs } from "@/content/case-studies";
import { getAllIndustrySlugs } from "@/content/industries";
import { getAllProjectSlugs } from "@/content/portfolio";
import { getAllServiceSlugs } from "@/content/services";
import { getAllSolutionSlugs } from "@/content/solutions";
import { getAllPostSlugs, getTotalBlogPages } from "@/lib/blog";
import { SITE } from "@/lib/constants";

const STATIC_ROUTES = [
  "/",
  "/services",
  "/solutions",
  "/industries",
  "/portfolio",
  "/case-studies",
  "/about",
  "/process",
  "/technology",
  "/careers",
  "/contact",
  "/resources",
  "/blog",
  "/steyzi",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const services = getAllServiceSlugs().map((slug) => ({
    url: `${SITE.url}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const solutions = getAllSolutionSlugs().map((slug) => ({
    url: `${SITE.url}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const industries = getAllIndustrySlugs().map((slug) => ({
    url: `${SITE.url}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const portfolio = getAllProjectSlugs().map((slug) => ({
    url: `${SITE.url}/portfolio/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const caseStudies = getAllCaseStudySlugs().map((slug) => ({
    url: `${SITE.url}/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blog = getAllPostSlugs().map((slug) => ({
    url: `${SITE.url}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  const totalPages = getTotalBlogPages();
  const blogPages = Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    url: `${SITE.url}/blog/page/${i + 2}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.55,
  }));

  return [
    ...staticEntries,
    ...services,
    ...solutions,
    ...industries,
    ...portfolio,
    ...caseStudies,
    ...blog,
    ...blogPages,
  ];
}
