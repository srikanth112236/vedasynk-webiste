import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getAllCaseStudySlugs,
  getCaseStudy,
} from "@/content/case-studies";
import { getService } from "@/content/services";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudySlugPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const services = study.services.map((s) => getService(s)).filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ])}
      />
      <PageHero
        eyebrow={`${study.industry} · ${study.client}`}
        title={study.title}
        description={study.summary}
        secondaryCta={{ label: "All case studies", href: "/case-studies" }}
      />

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading title="The challenge" />
          <p className="mt-5 leading-relaxed text-ink-secondary">
            {study.challenge}
          </p>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <SectionHeading title="Our approach" />
          <ol className="mt-10 max-w-3xl space-y-0">
            {study.approach.map((step, i) => (
              <li
                key={step.slice(0, 32)}
                className="grid gap-3 border-t border-border py-6 md:grid-cols-[6rem_1fr]"
              >
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-ink-secondary">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page">
          <SectionHeading title="Outcomes" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {study.outcomes.map((o) => (
              <Reveal key={o.label}>
                <p className="font-display text-3xl text-ink">{o.metric}</p>
                <p className="mt-2 text-sm text-ink-secondary">{o.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {study.testimonial && (
        <section className="bg-bg-soft py-16 md:py-24">
          <div className="container-page max-w-3xl">
            <blockquote className="text-xl leading-relaxed text-ink md:text-2xl">
              “{study.testimonial.quote}”
            </blockquote>
            <p className="mt-6 text-sm font-medium text-ink">
              {study.testimonial.author}
            </p>
            <p className="text-sm text-ink-secondary">
              {study.testimonial.role}
            </p>
          </div>
        </section>
      )}

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page">
          <SectionHeading title="Services involved" />
          <div className="mt-6 flex flex-wrap gap-2">
            {services.map(
              (service) =>
                service && (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-full border border-border bg-bg-soft px-3.5 py-1.5 text-sm text-ink-secondary hover:border-accent hover:text-accent"
                  >
                    {service.shortTitle}
                  </Link>
                ),
            )}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
