import { notFound } from "next/navigation";
import { SolutionPage } from "@/components/templates/solution-page";
import {
  getAllSolutionSlugs,
  getSolution,
} from "@/content/solutions";
import { getSolutionExtra } from "@/content/solution-extras";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  const extra = getSolutionExtra(slug);
  return buildMetadata({
    title: extra
      ? `${solution.metaTitle} | ${extra.primaryKeyword}`
      : solution.metaTitle,
    description: solution.metaDescription,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function SolutionSlugPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  return <SolutionPage solution={solution} />;
}
