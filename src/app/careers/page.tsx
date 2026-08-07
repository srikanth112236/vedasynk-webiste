import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Vedasynk Technologies in Bangalore—an open, founder-led studio building products, brands, and growth systems. Email hr@vedasynk.com.",
  path: "/careers",
});

const ROLES = [
  {
    title: "Full-stack engineer",
    type: "Full-time · Bangalore / hybrid",
    summary:
      "Ship Next.js and Node applications with strong TypeScript habits, product empathy, and ownership from ticket to production.",
  },
  {
    title: "Product designer",
    type: "Full-time · Bangalore / hybrid",
    summary:
      "Design flows and systems for web and mobile products—clear UX, implementable components, and collaboration with engineering.",
  },
  {
    title: "Brand & visual designer",
    type: "Contract or full-time",
    summary:
      "Identity systems, campaign creative, and digital kits that stay coherent across web, social, and packaging.",
  },
  {
    title: "Growth marketer",
    type: "Contract · part-time possible",
    summary:
      "Paid and organic programs with clean measurement, disciplined testing, and messaging aligned to brand.",
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />
      <PageHero
        eyebrow="Careers"
        title="Build with a small team that ships and tells the truth"
        description="Vedasynk is founder-led and still early. If you care about craft, clear communication, and work you can put your name on—we want to hear from you."
        primaryCta={{
          label: "Email HR",
          href: `mailto:${SITE.emailHr}`,
        }}
        secondaryCta={{ label: "About us", href: "/about" }}
      />

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl space-y-5">
          <SectionHeading title="Culture" />
          <p className="leading-relaxed text-ink-secondary">
            We keep the studio open: questions are welcome, feedback is direct,
            and scope is written down. You will work close to founders, clients,
            and real deadlines—not buried under layers of management.
          </p>
          <p className="leading-relaxed text-ink-secondary">
            We value people who finish what they start, document decisions, and
            treat design and engineering as partners rather than opposing camps.
            Ego stays at the door; quality does not.
          </p>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            title="Sample roles"
            description="We hire against real pipeline needs. Even if a role is not listed, send a note."
          />
          <div className="mt-12 space-y-0">
            {ROLES.map((role) => (
              <Reveal key={role.title}>
                <div className="grid gap-3 border-t border-border py-8 md:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="text-xl font-semibold text-ink">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">
                      {role.type}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                      {role.summary}
                    </p>
                  </div>
                  <Button asChild variant="outline" className="self-center">
                    <a href={`mailto:${SITE.emailHr}?subject=Application: ${role.title}`}>
                      Apply
                    </a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page max-w-3xl text-center">
          <SectionHeading
            align="center"
            title="How to apply"
            description={`Send your résumé, portfolio or GitHub, and a short note on what you want to work on to ${SITE.emailHr}. We read every message.`}
          />
          <div className="mt-8">
            <Button asChild size="lg">
              <a href={`mailto:${SITE.emailHr}`}>Email {SITE.emailHr}</a>
            </Button>
          </div>
        </div>
      </section>

      <FinalCta title="Not looking for a job—but need a partner?" />
    </>
  );
}
