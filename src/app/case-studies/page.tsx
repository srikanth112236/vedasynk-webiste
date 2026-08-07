import Link from "next/link";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { CASE_STUDIES } from "@/content/case-studies";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Detailed Vedasynk case studies—fintech MVP launches, healthcare operations platforms, and brand-led ecommerce growth.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <PageHero
        eyebrow="Case studies"
        title="Deeper looks at how outcomes were earned"
        description="Challenge, approach, and measurable results from engagements where product craft and delivery discipline mattered."
        secondaryCta={{ label: "Portfolio", href: "/portfolio" }}
      />

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page">
          <SectionHeading title="Featured case studies" />
          <div className="mt-12 space-y-0">
            {CASE_STUDIES.map((study, i) => (
              <Reveal key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group grid gap-4 border-t border-border py-10 md:grid-cols-[1fr_2fr]"
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {study.industry}
                    </p>
                    <p className="mt-2 font-mono text-sm text-ink-muted">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-ink group-hover:text-accent">
                      {study.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                      {study.summary}
                    </p>
                    <span className="mt-4 inline-block text-sm font-medium text-accent">
                      Read case study →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
