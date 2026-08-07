import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects personal information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: August 2026. This policy explains how ${SITE.shortName} handles information when you use our website or contact us.`}
        primaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <section className="bg-bg py-16 md:py-24">
        <div className="container-page prose-legal max-w-3xl space-y-10 text-ink-secondary">
          <div>
            <h2 className="text-xl font-semibold text-ink">Who we are</h2>
            <p className="mt-3 leading-relaxed">
              {SITE.name} (“we”, “us”) operates {SITE.url}. We are based in{" "}
              {SITE.address}. For privacy questions, email{" "}
              <a href={`mailto:${SITE.emailSales}`} className="text-accent hover:underline">
                {SITE.emailSales}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Information we collect</h2>
            <p className="mt-3 leading-relaxed">
              When you submit a contact form or email us, we collect the details
              you provide—such as name, email, company, phone, and message
              content. We may also collect basic technical data such as IP
              address, browser type, and pages visited through standard analytics
              tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">How we use information</h2>
            <p className="mt-3 leading-relaxed">
              We use inquiry data to respond to your request, prepare proposals,
              and improve our services. Analytics help us understand which
              content is useful. We do not sell personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Sharing</h2>
            <p className="mt-3 leading-relaxed">
              We may share data with trusted processors that help us operate the
              site (for example hosting, email, or analytics providers), under
              appropriate agreements. We may disclose information if required by
              law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Retention</h2>
            <p className="mt-3 leading-relaxed">
              We keep inquiry records for as long as needed to manage the
              relationship and meet legal or accounting requirements, then delete
              or anonymise them when no longer required.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Your choices</h2>
            <p className="mt-3 leading-relaxed">
              You may request access, correction, or deletion of personal data we
              hold about you by emailing us. You can also unsubscribe from
              marketing communications at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">Updates</h2>
            <p className="mt-3 leading-relaxed">
              We may update this policy from time to time. The latest version will
              always be posted on this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
