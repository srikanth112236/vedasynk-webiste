import { TechnologyPageContent } from "@/components/sections/technology-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technology Stack for Web, Mobile & Cloud",
  description:
    "Vedasynk Technologies stack—Next.js, React, TypeScript, React Native, Flutter, cloud platforms, design systems, and SEO tooling chosen for performance and longevity.",
  path: "/technology",
});

export default function TechnologyPage() {
  return <TechnologyPageContent />;
}
