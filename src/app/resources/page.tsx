import { ResourcesPageContent } from "@/components/sections/resources-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Founder Resources, Checklists & Guides",
  description:
    "Free Vedasynk resources for startups—Startup Launch Checklist, MVP scoping guides, SEO insights, and branding advice to help you ship and grow.",
  path: "/resources",
});

export default function ResourcesPage() {
  return <ResourcesPageContent />;
}
