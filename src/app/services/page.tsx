import { ServicesHubPage } from "@/components/sections/services-hub";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software, Design & Digital Marketing Services",
  description:
    "Explore Vedasynk Technologies services in Bangalore—custom website development, mobile apps, UI/UX, branding, SEO, digital marketing, AI, cloud, MVP and SaaS development for startups and SMEs.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesHubPage />;
}
