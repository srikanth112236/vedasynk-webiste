import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/templates/portfolio-page";
import {
  getAllProjectSlugs,
  getProject,
} from "@/content/portfolio";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.title} | Portfolio Case Study`,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
  });
}

export default async function PortfolioSlugPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <PortfolioPage project={project} />;
}
