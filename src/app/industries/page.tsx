import { IndustriesHubPage } from "@/components/sections/industries-hub";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industry Software & Digital Solutions",
  description:
    "Vedasynk builds industry software and digital experiences for healthcare, education, fintech, logistics, retail, manufacturing, startups, and more—Bangalore-based, sector-aware delivery.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <IndustriesHubPage />;
}
