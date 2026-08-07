import { notFound } from "next/navigation";
import { IndustryPage } from "@/components/templates/industry-page";
import {
  getAllIndustrySlugs,
  getIndustry,
} from "@/content/industries";
import { getIndustryExtra } from "@/content/industry-extras";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const extra = getIndustryExtra(slug);
  return buildMetadata({
    title: extra
      ? `${industry.metaTitle} | ${extra.primaryKeyword}`
      : industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustrySlugPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}
