import { PortfolioHubPage } from "@/components/sections/portfolio-hub";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio & Case Work",
  description:
    "Selected Vedasynk portfolio—fintech MVPs, clinic platforms, SaaS analytics, brand systems, ecommerce growth, and logistics operations apps. NDA-friendly case discussions available.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return <PortfolioHubPage />;
}
