import { notFound } from "next/navigation";
import { ServicePage } from "@/components/templates/service-page";
import {
  getAllServiceSlugs,
  getService,
} from "@/content/services";
import { getServiceExtra } from "@/content/service-extras";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const extra = getServiceExtra(slug);
  return buildMetadata({
    title: extra
      ? `${service.metaTitle} | ${extra.primaryKeyword}`
      : service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
