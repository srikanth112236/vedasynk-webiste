import { SolutionsHubPage } from "@/components/sections/solutions-hub";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "MVP, SaaS, Enterprise & Digital Transformation Solutions",
  description:
    "Vedasynk Technologies solutions in Bangalore—MVP development, SaaS product development, enterprise software, and practical digital transformation for startups and growing businesses.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return <SolutionsHubPage />;
}
